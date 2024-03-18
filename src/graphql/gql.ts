/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query CholesterolRecordDetailQuery($id: uuid!) {\n        cholesterol_records_by_pk(id: $id) {\n            diastolic_pressure\n            medication_record\n            pulse_rate\n            record_time\n            remarks\n            symptoms\n            systolic_pressure\n        }\n    }\n": types.CholesterolRecordDetailQueryDocument,
    "\n    mutation DeleteCholesterolRecordMutation($id: uuid!) {\n        delete_cholesterol_records_by_pk(id: $id) {\n            id\n        }\n    }\n": types.DeleteCholesterolRecordMutationDocument,
    "\n    query CholesterolRecordListQuery($offset: Int!, $limit: Int!) {\n        cholesterol_records(order_by: {record_time: desc}, offset: $offset, limit: $limit) {\n            diastolic_pressure\n            id\n            systolic_pressure\n            pulse_rate\n            record_time\n        }\n    }\n": types.CholesterolRecordListQueryDocument,
    "\n    mutation InsertCholesterolRecordOneMutation($object: cholesterol_records_insert_input!){\n        insert_cholesterol_records_one(object: $object) {\n            id\n        }\n    }\n": types.InsertCholesterolRecordOneMutationDocument,
    "\n    mutation UpdateCholesterolRecordOneMutation($id: uuid!, $object: cholesterol_records_set_input!){\n        update_cholesterol_records_by_pk(pk_columns: {id: $id}, _set: $object) {\n            id\n        }\n    }\n": types.UpdateCholesterolRecordOneMutationDocument,
    "\n    query CholesterolStandardsQuery {\n        cholesterol_standards {\n            diastolic_pressure\n            systolic_pressure\n            id\n        }\n        user_cholesterol_standards {\n            diastolic_pressure\n            systolic_pressure\n            id\n        }\n    }\n": types.CholesterolStandardsQueryDocument,
    "\n    mutation InsertUserCholesterolStandardsMutation($object: user_cholesterol_standards_insert_input!) {\n        insert_user_cholesterol_standards_one(object: $object) {\n            id\n        }\n    }\n": types.InsertUserCholesterolStandardsMutationDocument,
    "\n    mutation UpdateUserCholesterolStandardsMutation($id: uuid = \"\", $_set: user_cholesterol_standards_set_input!) {\n        update_user_cholesterol_standards_by_pk(pk_columns: {id: $id}, _set: $_set) {\n            id\n        }\n    }\n": types.UpdateUserCholesterolStandardsMutationDocument,
    "\n    query CholesterolStatisticsQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\") {\n        cholesterol_records(where: {record_time: {_gt: $startDate, _lt: $endDate}}, order_by: {record_time: asc}) {\n            diastolic_pressure\n            id\n            medication_record\n            pulse_rate\n            record_time\n            systolic_pressure\n        }\n    }\n": types.CholesterolStatisticsQueryDocument,
    "\n    query CholesterolStatisticsChartQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\") {\n        cholesterol_records(where: {record_time: {_gt: $startDate, _lt: $endDate}}, order_by: {record_time: asc}) {\n            diastolic_pressure\n            id\n            medication_record\n            pulse_rate\n            record_time\n            systolic_pressure\n        }\n    }\n": types.CholesterolStatisticsChartQueryDocument,
    "\n    query CholesterolStatisticsPieChartQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\") {\n        tooLarge: cholesterol_records_aggregate(where: {too_large: {_eq: true}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n        tooSmall: cholesterol_records_aggregate(where: {too_small: {_eq: true}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n        normal: cholesterol_records_aggregate(where: {too_large: {_eq: false}, too_small: {_eq: false}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n    }\n": types.CholesterolStatisticsPieChartQueryDocument,
    "\n    query GlucoseRecordOneQuery($id: uuid!) {\n        glucose_records_by_pk(id: $id) {\n            diet_record\n            exercise_record\n            glucose_value\n            measurement_period\n            medication_record\n            record_time\n            remarks\n        }\n        user_glucose_standards {\n            max\n            min\n            title\n            type\n        }\n        glucose_standards {\n            max\n            min\n            title\n            type\n        }\n    }\n": types.GlucoseRecordOneQueryDocument,
    "\n    mutation DeleteGlucoseRecordMutation($id: uuid!) {\n        delete_glucose_records_by_pk(id: $id) {\n            id\n        }\n    }\n": types.DeleteGlucoseRecordMutationDocument,
    "\n    query GlucoseRecordListQuery($offset: Int!, $limit: Int!) {\n        glucose_records(order_by: {record_time: desc}, offset: $offset, limit: $limit) {\n            glucose_value\n            measurement_period\n            record_time\n            id\n        }\n    }\n": types.GlucoseRecordListQueryDocument,
    "\n    query GlucoseRecordQuery{\n        user_glucose_standards {\n            max\n            min\n            title\n            type\n        }\n        glucose_standards {\n            max\n            min\n            title\n            type\n        }\n    }\n": types.GlucoseRecordQueryDocument,
    "\n    query GlucoseRecordUpdateQuery($id: uuid!) {\n        glucose_records_by_pk(id: $id) {\n            diet_record\n            exercise_record\n            glucose_value\n            measurement_period\n            medication_record\n            record_time\n            remarks\n        }\n    }\n": types.GlucoseRecordUpdateQueryDocument,
    "\n    mutation InsertGlucoseRecordMutation($object: glucose_records_insert_input!) {\n        insert_glucose_records_one(object: $object) {\n            id\n        }\n    }\n": types.InsertGlucoseRecordMutationDocument,
    "\n    mutation UpdateGlucoseRecordMutation($id: uuid!, $object: glucose_records_set_input!) {\n        update_glucose_records_by_pk(pk_columns: {id: $id}, _set: $object) {\n            id\n        }\n    }\n": types.UpdateGlucoseRecordMutationDocument,
    "\n    query GlucoseStandardsQuery {\n        glucose_standards(order_by: {type: asc}) {\n            max\n            min\n            title\n            type\n        }\n        user_glucose_standards(order_by: {type: asc}) {\n            id\n            max\n            min\n            title\n            type\n        }\n    }\n": types.GlucoseStandardsQueryDocument,
    "\n    mutation InsertUserGlucoseStandardsMutation($objects: [user_glucose_standards_insert_input!]!) {\n        insert_user_glucose_standards(objects: $objects) {\n            affected_rows\n        }\n    }\n": types.InsertUserGlucoseStandardsMutationDocument,
    "\n    mutation UpdateUserGlucoseStandardsMutation($updates: [user_glucose_standards_updates!]!) {\n        update_user_glucose_standards_many(updates: $updates) {\n            affected_rows\n        }\n    }\n": types.UpdateUserGlucoseStandardsMutationDocument,
    "\n    query GlucoseStatisticsQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\") {\n        glucose_records(where: {record_time: {_gt: $startDate, _lt: $endDate}}, order_by: {record_time: asc}) {\n            glucose_value\n            measurement_period\n            record_time\n        }\n    }\n": types.GlucoseStatisticsQueryDocument,
    "\n    query GlucoseStatisticsChartQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\", $measurementPeriod: Int = 1) {\n        glucose_records(where: {record_time: {_gt: $startDate, _lt: $endDate}, measurement_period: {_eq: $measurementPeriod}}, order_by: {record_time: asc}) {\n            glucose_value\n            measurement_period\n            record_time\n        }\n    }\n": types.GlucoseStatisticsChartQueryDocument,
    "\n    query GlucoseStatisticsPieChartQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\") {\n        tooLarge: glucose_records_aggregate(where: {too_large: {_eq: true}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n        tooSmall: glucose_records_aggregate(where: {too_small: {_eq: true}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n        normal: glucose_records_aggregate(where: {too_large: {_eq: false}, too_small: {_eq: false}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n    }\n": types.GlucoseStatisticsPieChartQueryDocument,
    "\n    query IndexPageQuery {\n        ads(where: {type: {_eq: 0}}) {\n            name\n            type\n            image\n            link\n        }\n        check_ins(order_by: {check_in_date: desc}, limit: 1) {\n            check_in_date\n            id\n            consecutive_days\n            is_continuation\n        }\n        check_in_settings(limit: 1) {\n            inaugural\n            following\n        }\n    }\n": types.IndexPageQueryDocument,
    "\n    mutation CheckInMutation($object: check_ins_insert_input!) {\n        insert_check_ins_one(object: $object) {\n            id\n        }\n    }\n": types.CheckInMutationDocument,
    "\n    query LabReportRecordDetailQuery($id: uuid!) {\n        lab_report_records_by_pk(id: $id) {\n            assay_date\n            images\n            remarks\n            report_type\n        }\n    }\n": types.LabReportRecordDetailQueryDocument,
    "\n    mutation DeleteLabReportRecordMutation($id: uuid!) {\n        delete_lab_report_records_by_pk(id: $id) {\n            id\n        }\n    }\n": types.DeleteLabReportRecordMutationDocument,
    "\n    query LabReportListQuery($offset: Int!, $limit: Int!) {\n        lab_report_records(order_by: {assay_date: desc}, offset: $offset, limit: $limit) {\n            id\n            assay_date\n            report_type\n        }\n    }\n": types.LabReportListQueryDocument,
    "\n    mutation InsertLabReportRecordOneMutation($object: lab_report_records_insert_input!) {\n        insert_lab_report_records_one(object: $object) {\n            id\n        }\n    }\n": types.InsertLabReportRecordOneMutationDocument,
    "\n    mutation UpdateLabReportRecordOneMutation($id: uuid!, $object: lab_report_records_set_input!) {\n        update_lab_report_records_by_pk(pk_columns: {id: $id}, _set: $object) {\n            id\n        }\n    }\n": types.UpdateLabReportRecordOneMutationDocument,
    "\n    query MedicalReportRecordOneQuery($id: uuid!) {\n        medical_examination_records_by_pk(id: $id) {\n            exam_date\n            images\n            remarks\n        }\n    }\n": types.MedicalReportRecordOneQueryDocument,
    "\n    mutation DeleteMedicalReportRecordMutation($id: uuid!) {\n        delete_medical_examination_records_by_pk(id: $id) {\n            id\n        }\n    }\n": types.DeleteMedicalReportRecordMutationDocument,
    "\n    query MedicalReportListQuery($offset: Int!, $limit: Int!) {\n        medical_examination_records(order_by: {exam_date: desc}, offset: $offset, limit: $limit) {\n            id\n            exam_date\n        }\n    }\n": types.MedicalReportListQueryDocument,
    "\n    query MedicalReportRecordDetailQuery($id: uuid!) {\n        medical_examination_records_by_pk(id: $id) {\n            exam_date\n            images\n            remarks\n        }\n    }\n": types.MedicalReportRecordDetailQueryDocument,
    "\n    mutation InsertMedicalReportRecordOneMutation($object: medical_examination_records_insert_input!) {\n        insert_medical_examination_records_one(object: $object) {\n            id\n        }\n    }\n": types.InsertMedicalReportRecordOneMutationDocument,
    "\n    mutation UpdateMedicalReportRecordOneMutation($id: uuid!, $object: medical_examination_records_set_input!) {\n        update_medical_examination_records_by_pk(pk_columns: {id: $id}, _set: $object) {\n            id\n        }\n    }\n": types.UpdateMedicalReportRecordOneMutationDocument,
    "\n    query MedicationReminderListQuery {\n        medication_reminders {\n            id\n            name\n            usage_dosage\n        }\n    }\n": types.MedicationReminderListQueryDocument,
    "\n    mutation DeleteMedicationReminderMutation($id: uuid!) {\n        delete_medication_reminders_by_pk(id: $id) {\n            id\n        }\n    }\n": types.DeleteMedicationReminderMutationDocument,
    "\n    mutation InsertMedicationReminderMutation($object: medication_reminders_insert_input!) {\n        insert_medication_reminders_one(object: $object) {\n            id\n        }\n    }\n": types.InsertMedicationReminderMutationDocument,
    "\n    mutation UpdateUserInfoMutation($id: String!, $object: users_set_input!) {\n        update_users_by_pk(pk_columns: {id: $id}, _set: $object) {\n            id\n        }\n    }\n": types.UpdateUserInfoMutationDocument,
    "\n    mutation InsertSmsCodeMutation($object: sms_codes_insert_input!) {\n        insert_sms_codes_one(object: $object) {\n            created_at\n        }\n    }\n": types.InsertSmsCodeMutationDocument,
    "\n    query SmsCodeQuery($phone_number: String!, $captcha: String!) {\n        sms_codes(where: {phone_number: {_eq: $phone_number}, captcha: {_eq: $captcha}}, order_by: {created_at: desc}, limit: 1) {\n            id\n        }\n    }\n": types.SmsCodeQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query CholesterolRecordDetailQuery($id: uuid!) {\n        cholesterol_records_by_pk(id: $id) {\n            diastolic_pressure\n            medication_record\n            pulse_rate\n            record_time\n            remarks\n            symptoms\n            systolic_pressure\n        }\n    }\n"): (typeof documents)["\n    query CholesterolRecordDetailQuery($id: uuid!) {\n        cholesterol_records_by_pk(id: $id) {\n            diastolic_pressure\n            medication_record\n            pulse_rate\n            record_time\n            remarks\n            symptoms\n            systolic_pressure\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteCholesterolRecordMutation($id: uuid!) {\n        delete_cholesterol_records_by_pk(id: $id) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteCholesterolRecordMutation($id: uuid!) {\n        delete_cholesterol_records_by_pk(id: $id) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query CholesterolRecordListQuery($offset: Int!, $limit: Int!) {\n        cholesterol_records(order_by: {record_time: desc}, offset: $offset, limit: $limit) {\n            diastolic_pressure\n            id\n            systolic_pressure\n            pulse_rate\n            record_time\n        }\n    }\n"): (typeof documents)["\n    query CholesterolRecordListQuery($offset: Int!, $limit: Int!) {\n        cholesterol_records(order_by: {record_time: desc}, offset: $offset, limit: $limit) {\n            diastolic_pressure\n            id\n            systolic_pressure\n            pulse_rate\n            record_time\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation InsertCholesterolRecordOneMutation($object: cholesterol_records_insert_input!){\n        insert_cholesterol_records_one(object: $object) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation InsertCholesterolRecordOneMutation($object: cholesterol_records_insert_input!){\n        insert_cholesterol_records_one(object: $object) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateCholesterolRecordOneMutation($id: uuid!, $object: cholesterol_records_set_input!){\n        update_cholesterol_records_by_pk(pk_columns: {id: $id}, _set: $object) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateCholesterolRecordOneMutation($id: uuid!, $object: cholesterol_records_set_input!){\n        update_cholesterol_records_by_pk(pk_columns: {id: $id}, _set: $object) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query CholesterolStandardsQuery {\n        cholesterol_standards {\n            diastolic_pressure\n            systolic_pressure\n            id\n        }\n        user_cholesterol_standards {\n            diastolic_pressure\n            systolic_pressure\n            id\n        }\n    }\n"): (typeof documents)["\n    query CholesterolStandardsQuery {\n        cholesterol_standards {\n            diastolic_pressure\n            systolic_pressure\n            id\n        }\n        user_cholesterol_standards {\n            diastolic_pressure\n            systolic_pressure\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation InsertUserCholesterolStandardsMutation($object: user_cholesterol_standards_insert_input!) {\n        insert_user_cholesterol_standards_one(object: $object) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation InsertUserCholesterolStandardsMutation($object: user_cholesterol_standards_insert_input!) {\n        insert_user_cholesterol_standards_one(object: $object) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateUserCholesterolStandardsMutation($id: uuid = \"\", $_set: user_cholesterol_standards_set_input!) {\n        update_user_cholesterol_standards_by_pk(pk_columns: {id: $id}, _set: $_set) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateUserCholesterolStandardsMutation($id: uuid = \"\", $_set: user_cholesterol_standards_set_input!) {\n        update_user_cholesterol_standards_by_pk(pk_columns: {id: $id}, _set: $_set) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query CholesterolStatisticsQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\") {\n        cholesterol_records(where: {record_time: {_gt: $startDate, _lt: $endDate}}, order_by: {record_time: asc}) {\n            diastolic_pressure\n            id\n            medication_record\n            pulse_rate\n            record_time\n            systolic_pressure\n        }\n    }\n"): (typeof documents)["\n    query CholesterolStatisticsQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\") {\n        cholesterol_records(where: {record_time: {_gt: $startDate, _lt: $endDate}}, order_by: {record_time: asc}) {\n            diastolic_pressure\n            id\n            medication_record\n            pulse_rate\n            record_time\n            systolic_pressure\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query CholesterolStatisticsChartQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\") {\n        cholesterol_records(where: {record_time: {_gt: $startDate, _lt: $endDate}}, order_by: {record_time: asc}) {\n            diastolic_pressure\n            id\n            medication_record\n            pulse_rate\n            record_time\n            systolic_pressure\n        }\n    }\n"): (typeof documents)["\n    query CholesterolStatisticsChartQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\") {\n        cholesterol_records(where: {record_time: {_gt: $startDate, _lt: $endDate}}, order_by: {record_time: asc}) {\n            diastolic_pressure\n            id\n            medication_record\n            pulse_rate\n            record_time\n            systolic_pressure\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query CholesterolStatisticsPieChartQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\") {\n        tooLarge: cholesterol_records_aggregate(where: {too_large: {_eq: true}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n        tooSmall: cholesterol_records_aggregate(where: {too_small: {_eq: true}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n        normal: cholesterol_records_aggregate(where: {too_large: {_eq: false}, too_small: {_eq: false}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n    }\n"): (typeof documents)["\n    query CholesterolStatisticsPieChartQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\") {\n        tooLarge: cholesterol_records_aggregate(where: {too_large: {_eq: true}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n        tooSmall: cholesterol_records_aggregate(where: {too_small: {_eq: true}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n        normal: cholesterol_records_aggregate(where: {too_large: {_eq: false}, too_small: {_eq: false}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GlucoseRecordOneQuery($id: uuid!) {\n        glucose_records_by_pk(id: $id) {\n            diet_record\n            exercise_record\n            glucose_value\n            measurement_period\n            medication_record\n            record_time\n            remarks\n        }\n        user_glucose_standards {\n            max\n            min\n            title\n            type\n        }\n        glucose_standards {\n            max\n            min\n            title\n            type\n        }\n    }\n"): (typeof documents)["\n    query GlucoseRecordOneQuery($id: uuid!) {\n        glucose_records_by_pk(id: $id) {\n            diet_record\n            exercise_record\n            glucose_value\n            measurement_period\n            medication_record\n            record_time\n            remarks\n        }\n        user_glucose_standards {\n            max\n            min\n            title\n            type\n        }\n        glucose_standards {\n            max\n            min\n            title\n            type\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteGlucoseRecordMutation($id: uuid!) {\n        delete_glucose_records_by_pk(id: $id) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteGlucoseRecordMutation($id: uuid!) {\n        delete_glucose_records_by_pk(id: $id) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GlucoseRecordListQuery($offset: Int!, $limit: Int!) {\n        glucose_records(order_by: {record_time: desc}, offset: $offset, limit: $limit) {\n            glucose_value\n            measurement_period\n            record_time\n            id\n        }\n    }\n"): (typeof documents)["\n    query GlucoseRecordListQuery($offset: Int!, $limit: Int!) {\n        glucose_records(order_by: {record_time: desc}, offset: $offset, limit: $limit) {\n            glucose_value\n            measurement_period\n            record_time\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GlucoseRecordQuery{\n        user_glucose_standards {\n            max\n            min\n            title\n            type\n        }\n        glucose_standards {\n            max\n            min\n            title\n            type\n        }\n    }\n"): (typeof documents)["\n    query GlucoseRecordQuery{\n        user_glucose_standards {\n            max\n            min\n            title\n            type\n        }\n        glucose_standards {\n            max\n            min\n            title\n            type\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GlucoseRecordUpdateQuery($id: uuid!) {\n        glucose_records_by_pk(id: $id) {\n            diet_record\n            exercise_record\n            glucose_value\n            measurement_period\n            medication_record\n            record_time\n            remarks\n        }\n    }\n"): (typeof documents)["\n    query GlucoseRecordUpdateQuery($id: uuid!) {\n        glucose_records_by_pk(id: $id) {\n            diet_record\n            exercise_record\n            glucose_value\n            measurement_period\n            medication_record\n            record_time\n            remarks\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation InsertGlucoseRecordMutation($object: glucose_records_insert_input!) {\n        insert_glucose_records_one(object: $object) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation InsertGlucoseRecordMutation($object: glucose_records_insert_input!) {\n        insert_glucose_records_one(object: $object) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateGlucoseRecordMutation($id: uuid!, $object: glucose_records_set_input!) {\n        update_glucose_records_by_pk(pk_columns: {id: $id}, _set: $object) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateGlucoseRecordMutation($id: uuid!, $object: glucose_records_set_input!) {\n        update_glucose_records_by_pk(pk_columns: {id: $id}, _set: $object) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GlucoseStandardsQuery {\n        glucose_standards(order_by: {type: asc}) {\n            max\n            min\n            title\n            type\n        }\n        user_glucose_standards(order_by: {type: asc}) {\n            id\n            max\n            min\n            title\n            type\n        }\n    }\n"): (typeof documents)["\n    query GlucoseStandardsQuery {\n        glucose_standards(order_by: {type: asc}) {\n            max\n            min\n            title\n            type\n        }\n        user_glucose_standards(order_by: {type: asc}) {\n            id\n            max\n            min\n            title\n            type\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation InsertUserGlucoseStandardsMutation($objects: [user_glucose_standards_insert_input!]!) {\n        insert_user_glucose_standards(objects: $objects) {\n            affected_rows\n        }\n    }\n"): (typeof documents)["\n    mutation InsertUserGlucoseStandardsMutation($objects: [user_glucose_standards_insert_input!]!) {\n        insert_user_glucose_standards(objects: $objects) {\n            affected_rows\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateUserGlucoseStandardsMutation($updates: [user_glucose_standards_updates!]!) {\n        update_user_glucose_standards_many(updates: $updates) {\n            affected_rows\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateUserGlucoseStandardsMutation($updates: [user_glucose_standards_updates!]!) {\n        update_user_glucose_standards_many(updates: $updates) {\n            affected_rows\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GlucoseStatisticsQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\") {\n        glucose_records(where: {record_time: {_gt: $startDate, _lt: $endDate}}, order_by: {record_time: asc}) {\n            glucose_value\n            measurement_period\n            record_time\n        }\n    }\n"): (typeof documents)["\n    query GlucoseStatisticsQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\") {\n        glucose_records(where: {record_time: {_gt: $startDate, _lt: $endDate}}, order_by: {record_time: asc}) {\n            glucose_value\n            measurement_period\n            record_time\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GlucoseStatisticsChartQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\", $measurementPeriod: Int = 1) {\n        glucose_records(where: {record_time: {_gt: $startDate, _lt: $endDate}, measurement_period: {_eq: $measurementPeriod}}, order_by: {record_time: asc}) {\n            glucose_value\n            measurement_period\n            record_time\n        }\n    }\n"): (typeof documents)["\n    query GlucoseStatisticsChartQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\", $measurementPeriod: Int = 1) {\n        glucose_records(where: {record_time: {_gt: $startDate, _lt: $endDate}, measurement_period: {_eq: $measurementPeriod}}, order_by: {record_time: asc}) {\n            glucose_value\n            measurement_period\n            record_time\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GlucoseStatisticsPieChartQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\") {\n        tooLarge: glucose_records_aggregate(where: {too_large: {_eq: true}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n        tooSmall: glucose_records_aggregate(where: {too_small: {_eq: true}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n        normal: glucose_records_aggregate(where: {too_large: {_eq: false}, too_small: {_eq: false}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n    }\n"): (typeof documents)["\n    query GlucoseStatisticsPieChartQuery ($startDate: timestamptz = \"\", $endDate: timestamptz = \"\") {\n        tooLarge: glucose_records_aggregate(where: {too_large: {_eq: true}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n        tooSmall: glucose_records_aggregate(where: {too_small: {_eq: true}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n        normal: glucose_records_aggregate(where: {too_large: {_eq: false}, too_small: {_eq: false}, record_time: {_gt: $startDate, _lt: $endDate}}) {\n            aggregate {\n                count\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query IndexPageQuery {\n        ads(where: {type: {_eq: 0}}) {\n            name\n            type\n            image\n            link\n        }\n        check_ins(order_by: {check_in_date: desc}, limit: 1) {\n            check_in_date\n            id\n            consecutive_days\n            is_continuation\n        }\n        check_in_settings(limit: 1) {\n            inaugural\n            following\n        }\n    }\n"): (typeof documents)["\n    query IndexPageQuery {\n        ads(where: {type: {_eq: 0}}) {\n            name\n            type\n            image\n            link\n        }\n        check_ins(order_by: {check_in_date: desc}, limit: 1) {\n            check_in_date\n            id\n            consecutive_days\n            is_continuation\n        }\n        check_in_settings(limit: 1) {\n            inaugural\n            following\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CheckInMutation($object: check_ins_insert_input!) {\n        insert_check_ins_one(object: $object) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation CheckInMutation($object: check_ins_insert_input!) {\n        insert_check_ins_one(object: $object) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query LabReportRecordDetailQuery($id: uuid!) {\n        lab_report_records_by_pk(id: $id) {\n            assay_date\n            images\n            remarks\n            report_type\n        }\n    }\n"): (typeof documents)["\n    query LabReportRecordDetailQuery($id: uuid!) {\n        lab_report_records_by_pk(id: $id) {\n            assay_date\n            images\n            remarks\n            report_type\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteLabReportRecordMutation($id: uuid!) {\n        delete_lab_report_records_by_pk(id: $id) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteLabReportRecordMutation($id: uuid!) {\n        delete_lab_report_records_by_pk(id: $id) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query LabReportListQuery($offset: Int!, $limit: Int!) {\n        lab_report_records(order_by: {assay_date: desc}, offset: $offset, limit: $limit) {\n            id\n            assay_date\n            report_type\n        }\n    }\n"): (typeof documents)["\n    query LabReportListQuery($offset: Int!, $limit: Int!) {\n        lab_report_records(order_by: {assay_date: desc}, offset: $offset, limit: $limit) {\n            id\n            assay_date\n            report_type\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation InsertLabReportRecordOneMutation($object: lab_report_records_insert_input!) {\n        insert_lab_report_records_one(object: $object) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation InsertLabReportRecordOneMutation($object: lab_report_records_insert_input!) {\n        insert_lab_report_records_one(object: $object) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateLabReportRecordOneMutation($id: uuid!, $object: lab_report_records_set_input!) {\n        update_lab_report_records_by_pk(pk_columns: {id: $id}, _set: $object) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateLabReportRecordOneMutation($id: uuid!, $object: lab_report_records_set_input!) {\n        update_lab_report_records_by_pk(pk_columns: {id: $id}, _set: $object) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query MedicalReportRecordOneQuery($id: uuid!) {\n        medical_examination_records_by_pk(id: $id) {\n            exam_date\n            images\n            remarks\n        }\n    }\n"): (typeof documents)["\n    query MedicalReportRecordOneQuery($id: uuid!) {\n        medical_examination_records_by_pk(id: $id) {\n            exam_date\n            images\n            remarks\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteMedicalReportRecordMutation($id: uuid!) {\n        delete_medical_examination_records_by_pk(id: $id) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteMedicalReportRecordMutation($id: uuid!) {\n        delete_medical_examination_records_by_pk(id: $id) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query MedicalReportListQuery($offset: Int!, $limit: Int!) {\n        medical_examination_records(order_by: {exam_date: desc}, offset: $offset, limit: $limit) {\n            id\n            exam_date\n        }\n    }\n"): (typeof documents)["\n    query MedicalReportListQuery($offset: Int!, $limit: Int!) {\n        medical_examination_records(order_by: {exam_date: desc}, offset: $offset, limit: $limit) {\n            id\n            exam_date\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query MedicalReportRecordDetailQuery($id: uuid!) {\n        medical_examination_records_by_pk(id: $id) {\n            exam_date\n            images\n            remarks\n        }\n    }\n"): (typeof documents)["\n    query MedicalReportRecordDetailQuery($id: uuid!) {\n        medical_examination_records_by_pk(id: $id) {\n            exam_date\n            images\n            remarks\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation InsertMedicalReportRecordOneMutation($object: medical_examination_records_insert_input!) {\n        insert_medical_examination_records_one(object: $object) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation InsertMedicalReportRecordOneMutation($object: medical_examination_records_insert_input!) {\n        insert_medical_examination_records_one(object: $object) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateMedicalReportRecordOneMutation($id: uuid!, $object: medical_examination_records_set_input!) {\n        update_medical_examination_records_by_pk(pk_columns: {id: $id}, _set: $object) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateMedicalReportRecordOneMutation($id: uuid!, $object: medical_examination_records_set_input!) {\n        update_medical_examination_records_by_pk(pk_columns: {id: $id}, _set: $object) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query MedicationReminderListQuery {\n        medication_reminders {\n            id\n            name\n            usage_dosage\n        }\n    }\n"): (typeof documents)["\n    query MedicationReminderListQuery {\n        medication_reminders {\n            id\n            name\n            usage_dosage\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteMedicationReminderMutation($id: uuid!) {\n        delete_medication_reminders_by_pk(id: $id) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteMedicationReminderMutation($id: uuid!) {\n        delete_medication_reminders_by_pk(id: $id) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation InsertMedicationReminderMutation($object: medication_reminders_insert_input!) {\n        insert_medication_reminders_one(object: $object) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation InsertMedicationReminderMutation($object: medication_reminders_insert_input!) {\n        insert_medication_reminders_one(object: $object) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateUserInfoMutation($id: String!, $object: users_set_input!) {\n        update_users_by_pk(pk_columns: {id: $id}, _set: $object) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateUserInfoMutation($id: String!, $object: users_set_input!) {\n        update_users_by_pk(pk_columns: {id: $id}, _set: $object) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation InsertSmsCodeMutation($object: sms_codes_insert_input!) {\n        insert_sms_codes_one(object: $object) {\n            created_at\n        }\n    }\n"): (typeof documents)["\n    mutation InsertSmsCodeMutation($object: sms_codes_insert_input!) {\n        insert_sms_codes_one(object: $object) {\n            created_at\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query SmsCodeQuery($phone_number: String!, $captcha: String!) {\n        sms_codes(where: {phone_number: {_eq: $phone_number}, captcha: {_eq: $captcha}}, order_by: {created_at: desc}, limit: 1) {\n            id\n        }\n    }\n"): (typeof documents)["\n    query SmsCodeQuery($phone_number: String!, $captcha: String!) {\n        sms_codes(where: {phone_number: {_eq: $phone_number}, captcha: {_eq: $captcha}}, order_by: {created_at: desc}, limit: 1) {\n            id\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;