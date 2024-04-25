import { useLogto, type UserInfoResponse } from '@logto/react';
import dayjs from 'dayjs';
import Taro from '@tarojs/taro';

import signInCardBg from '@/assets/signin-bg.png';
import record1bg from '@/assets/record-1-bg.png';
import record2bg from '@/assets/record-2-bg.png';
import record3bg from '@/assets/record-3-bg.png';
import record4bg from '@/assets/record-4-bg.png';
import './index.scss';

const IndexPageQueryDocument = graphql(`
    query IndexPageQuery {
        ads(where: {type: {_eq: 0}, enable: {_eq: true}}, order_by: {custom_order: asc}) {
            name
            type
            image
            link
        }
        check_ins(order_by: {created_at: desc}, limit: 1) {
            check_in_date
            id
            consecutive_days
            is_continuation
            is_first_consecutive_completed
            received
        }
        check_in_settings(limit: 1) {
            inaugural
            following
            inaugural_url
            following_url
        }
    }
`);

const CheckInMutationDocument = graphql(`
    mutation CheckInMutation($object: check_ins_insert_input!) {
        insert_check_ins_one(object: $object) {
            id
        }
    }
`);

const UpdateCheckInMutationDocument = graphql(`
    mutation UpdateCheckInMutation($id: uuid!, $object: check_ins_set_input!) {
        update_check_ins_by_pk(pk_columns: {id: $id}, _set: $object) {
            id
        }
    }
`);

const UpdateUserCustomMutationDocument = graphql(`
    mutation UpdateUserCustomMutation($id: String!, $object: users_set_input!) {
        update_users_by_pk(pk_columns: {id: $id}, _set: $object) {
            id
        }
    }
`);

function Index() {
    const { fetchUserInfo } = useLogto();

    const [userInfo, setUserInfo] = useState<UserInfoResponse>();

    const [{ data }, fetch] = useQuery({
        query: IndexPageQueryDocument,
        requestPolicy: 'network-only',
    });

    const [{ data: checkInData }, checkIn] = useMutation(CheckInMutationDocument);
    const [{ data: updateCheckInData }, updateCheckIn] = useMutation(UpdateCheckInMutationDocument);
    const [{ data: updateUserData }, updateUser] = useMutation(UpdateUserCustomMutationDocument);

    const handleCheckIn = async () => {
        const newSignInDate = new Date();

        // 计算连续签到天数和是否连续签到
        let consecutiveDays = 0;
        if (data?.check_ins?.length === 0 || !isYesterdayCheckIn()){
            consecutiveDays = 1;
        } else {
            consecutiveDays = (data?.check_ins[0]?.consecutive_days || 0) + 1;
        }
        const isContinuation = consecutiveDays > 1;

        // 插入一条签到记录
        await checkIn({
            object: {
                check_in_date: dayjs(newSignInDate).format('YYYY-MM-DD'),
                consecutive_days: consecutiveDays,
                is_continuation: isContinuation,
            },
        });
    };

    const isShowCheckIn = useMemo(() => {
        if (!data?.check_ins[0]?.check_in_date) {
            return true;
        }
        return !dayjs().isSame(dayjs(data?.check_ins[0]?.check_in_date), 'day');
    }, [data]);

    // 判断最后一次签到是否是昨天
    const isYesterdayCheckIn = useCallback(() => {
        if (!data?.check_ins[0]?.check_in_date) {
            return false;
        }
        return dayjs().subtract(1, 'day').isSame(dayjs(data?.check_ins[0]?.check_in_date), 'day');
    }, [data]);

    // 判断是否满足首签
    const isFirstCheckIn = useMemo(() => {
        if (!data?.check_ins.length) {
            return true;
        }
        return data.check_ins[0].consecutive_days < data.check_in_settings[0].inaugural;
    }, [data]);

    // 获取前一天的连续签到天数
    const getYesterdayConsecutiveDays = useMemo(() => {
        if (!data?.check_ins[0]?.check_in_date) {
            return 0;
        }
        if (!isYesterdayCheckIn() && !dayjs(data?.check_ins[0]?.check_in_date).isSame(dayjs(), 'day')){
            return 0;
        }

        if (dayjs(data?.check_ins[0]?.check_in_date).isSame(dayjs(), 'day')) {
            return data?.check_ins[0]?.consecutive_days;
        }

        if ((!data?.check_ins[0].is_continuation && isYesterdayCheckIn()) || data?.check_ins[0].is_continuation) {
            return data?.check_ins[0]?.consecutive_days;
        } else {
            return 0;
        }
    }, [data]);

    // 获取剩余签到天数
    const getRemainingDays = useMemo(() => {
        if (!data?.check_ins[0]?.check_in_date) {
            return 0;
        }
        return (getYesterdayConsecutiveDays - data?.check_in_settings[0]?.inaugural) % data?.check_in_settings[0]?.following;
    }, [data, getYesterdayConsecutiveDays]);

    const allowedReceive = () => {
        if (data?.check_ins[0]?.received || dayjs(data?.check_ins[0]?.check_in_date).isBefore(dayjs(), 'day')){
            return false;
        }
        if (getYesterdayConsecutiveDays === data?.check_in_settings[0]?.inaugural) {
            return true;
        } else {
            return getRemainingDays === 0;
        }
    };

    const handleReceiveCoupon = async () => {
        // 领取福利券后，更新用户信息，标记首次连续签到已完成，重置连续签到天数
        const userCheckInData = data?.check_ins[0];
        // 领取福利券
        await updateCheckIn({
            id: userCheckInData?.id,
            object: {
                received: true,
            },
        });
        Taro.showLoading({
            title: '正在跳转...'
        });
        window.location.href = data?.check_in_settings[0]?.inaugural_url || '';
        Taro.hideLoading();
    };

    /* const generateCheckInList = () => {
        // 生成签到列表，最多显示7天，最后一天需要显示福利券图标
        // 如果未完成首次签到，签到列表长度是inaugural，否则是following
        // 签到图标分为三种状态：未签到、已签到、不可领取福利券、可领取福利券
        // 未签到 = 列表长度 - 当前连续签到天数
        // 已签到 = 当前连续签到天数
        const list: {type: 'unchecked' | 'checked' | 'coupon' | 'coupon-checked'}[] = [];
        const length = isFirstCheckIn ? data?.check_in_settings[0]?.inaugural : data?.check_in_settings[0]?.following;
        for (let i = 0; i < length - 1; i++) {
            if (i < (getYesterdayConsecutiveDays || 0)) {
                list.push({type: 'checked'});
            } else {
                list.push({type: 'unchecked'});
            }
        }
        if (allowedReceive()) {
            list.push({type: 'coupon-checked'});
        } else {
            list.push({type: 'coupon'});
        }
        return list;
    }; */

    useEffect(() => {
        if (checkInData) {
            fetch();
        }
    }, [checkInData]);

    useEffect(() => {
        fetchUserInfo().then(setUserInfo);
    }, []);

    return (
        <>
            <View className='flex flex-col pb-180px'>
                <View className='mb-20px'>
                    <NutSwiper autoPlay height={200} defaultValue={0} className='w-full'>
                        {data?.ads?.map((item, index) => (
                            <NutSwiper.Item key={index}>
                                <TaroImage className='w-full h-full' src={item.image}
                                    onClick={() => {
                                        if (item.link) {
                                            window.location.href = item.link;
                                        }
                                    }}
                                />
                            </NutSwiper.Item>
                        ))}
                    </NutSwiper>
                </View>
                <View
                    className='flex flex-col gap-40px px-40px'
                >
                    <View
                        className='flex flex-col justify-end gap-12px px-30px pt-60px pb-30px'
                        style={{
                            backgroundImage:`url(${signInCardBg})`,
                            backgroundSize: '100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'top',
                        }}
                    >
                        <View className='flex items-center gap-20px'>
                            {getYesterdayConsecutiveDays === 0 ? (
                                <TaroText className='text-30px fw-600 color-black'>您今天还没有签到</TaroText>
                            ) : (
                                <TaroText className='text-30px fw-600 color-black'>已连续签到 {getYesterdayConsecutiveDays} 天</TaroText>
                            )}
                            {allowedReceive() && (
                                <View
                                    className='px-16px py-4px bg-primary rd-8px text-22px c-white'
                                    onClick={handleReceiveCoupon}
                                >
                                    领取福利券
                                </View>
                            )}
                        </View>
                        <View className='flex items-center justify-between'>
                            <View className='flex flex-col gap-10px'>
                                {/* <View className='flex gap-10px'>
                                    {generateCheckInList().map((item, index) => (
                                        <TaroImage
                                            key={index}
                                            src={`../../assets/icons/signin-${item.type}.png`}
                                            className='w-40px h-40px'
                                        />
                                    ))}
                                </View> */}
                                <TaroText className='text-24px color-primary'>
                                    {isFirstCheckIn ? '首次' : '再'}
                                    连续签到 {
                                        isFirstCheckIn
                                            ? data?.check_in_settings[0]?.inaugural
                                            : getRemainingDays <= 0 ? data?.check_in_settings[0]?.following : getRemainingDays
                                    } 天可领取福利券...
                                </TaroText>
                            </View>
                            {isShowCheckIn ? (
                                <View
                                    className='w-160px text-center py-8px bg-primary rd-10px text-30px c-white fw-600'
                                    onClick={handleCheckIn}
                                >
                                签到
                                </View>
                            ) : (
                                <View
                                    className='w-160px text-center py-8px bg-white rd-10px text-30px c-#BFA694 fw-600'
                                >
                                已签到
                                </View>
                            )}
                        </View>
                    </View>
                    <View
                        className='grid grid-cols-2 gap-30px'
                    >
                        <View
                            className='h-200px rd-20px py-57px px-20px flex flex-col'
                            style={{
                                backgroundImage:`url(${record1bg})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            onClick={() => {
                                Router.toGlucoseRecord();
                            }}
                        >
                            <TaroText className='text-34px fw-600 c-#B29251'>血糖记录</TaroText>
                            <TaroText className='text-20px fw-400 c-#B29251'>建议空腹血糖 3.9～6.1mmol/L</TaroText>
                        </View>
                        <View
                            className='h-200px rd-20px py-57px px-20px flex flex-col'
                            style={{
                                backgroundImage:`url(${record2bg})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            onClick={() => {
                                Router.toCholesterolRecord();
                            }}
                        >
                            <TaroText className='text-34px fw-600 c-#116E7F'>血压记录</TaroText>
                            <TaroText className='text-20px fw-400 c-#116E7F'>建议收缩压 120～139mmHg</TaroText>
                            <TaroText className='text-20px fw-400 c-#116E7F'>建议舒张压 80～89mmHg</TaroText>
                        </View>
                        <View
                            className='h-200px rd-20px py-57px px-50px flex flex-col'
                            style={{
                                backgroundImage:`url(${record3bg})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            onClick={() => {
                                Router.toLabReportRecord();
                            }}
                        >
                            <TaroText className='text-34px fw-600 c-#634AAB'>化验报告记录</TaroText>
                            <TaroText className='text-24px fw-400 c-#634AAB'>化验报告拍照记录</TaroText>
                        </View>
                        <View
                            className='h-200px rd-20px py-57px px-50px flex flex-col'
                            style={{
                                backgroundImage:`url(${record4bg})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            onClick={() => {
                                Router.toMedicalReportRecord();
                            }}
                        >
                            <TaroText className='text-34px fw-600 c-#A1492E'>体检报告记录</TaroText>
                            <TaroText className='text-24px fw-400 c-#A1492E'>体检报告拍照记录</TaroText>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}

export default Index;
