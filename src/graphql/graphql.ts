/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Upload: { input: any; output: any; }
  application_type: { input: any; output: any; }
  bigint: { input: any; output: any; }
  date: { input: any; output: any; }
  float8: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  oid: { input: any; output: any; }
  organization_invitation_status: { input: any; output: any; }
  role_type: { input: any; output: any; }
  sentinel_action_result: { input: any; output: any; }
  sentinel_decision: { input: any; output: any; }
  sign_in_mode: { input: any; output: any; }
  smallint: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  users_password_encryption_method: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type DuplicateInput = {
  allowedDownloads?: InputMaybe<Scalars['Int']['input']>;
  expiryDays?: InputMaybe<Scalars['Int']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  originalPassword?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type File = {
  contentType?: Maybe<Scalars['String']['output']>;
  downloadCount?: Maybe<Scalars['BigInt']['output']>;
  downloadsRemaining?: Maybe<Scalars['BigInt']['output']>;
  expireAt?: Maybe<Scalars['BigInt']['output']>;
  expireAtString?: Maybe<Scalars['String']['output']>;
  hotlinkId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isEncrypted?: Maybe<Scalars['Boolean']['output']>;
  isPasswordProtected?: Maybe<Scalars['Boolean']['output']>;
  isSavedOnLocalStorage?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  requiresClientSideDecryption?: Maybe<Scalars['Boolean']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  sizeBytes?: Maybe<Scalars['BigInt']['output']>;
  unlimitedDownloads?: Maybe<Scalars['Boolean']['output']>;
  unlimitedTime?: Maybe<Scalars['Boolean']['output']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NewApiKey = {
  id?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
};

export enum Permission {
  PermApiMod = 'PERM_API_MOD',
  PermDelete = 'PERM_DELETE',
  PermEdit = 'PERM_EDIT',
  PermUpload = 'PERM_UPLOAD',
  PermView = 'PERM_VIEW'
}

export enum PermissionModifier {
  Grant = 'GRANT',
  Revoke = 'REVOKE'
}

export type S3UploadOutput = {
  bucket?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** 广告表 */
export type Ads = {
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  image: Scalars['String']['output'];
  link: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** 广告类型，0：轮播图 */
  type: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "ads" */
export type Ads_Aggregate = {
  aggregate?: Maybe<Ads_Aggregate_Fields>;
  nodes: Array<Ads>;
};

/** aggregate fields of "ads" */
export type Ads_Aggregate_Fields = {
  avg?: Maybe<Ads_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Ads_Max_Fields>;
  min?: Maybe<Ads_Min_Fields>;
  stddev?: Maybe<Ads_Stddev_Fields>;
  stddev_pop?: Maybe<Ads_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ads_Stddev_Samp_Fields>;
  sum?: Maybe<Ads_Sum_Fields>;
  var_pop?: Maybe<Ads_Var_Pop_Fields>;
  var_samp?: Maybe<Ads_Var_Samp_Fields>;
  variance?: Maybe<Ads_Variance_Fields>;
};


/** aggregate fields of "ads" */
export type Ads_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ads_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Ads_Avg_Fields = {
  /** 广告类型，0：轮播图 */
  type?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "ads". All fields are combined with a logical 'AND'. */
export type Ads_Bool_Exp = {
  _and?: InputMaybe<Array<Ads_Bool_Exp>>;
  _not?: InputMaybe<Ads_Bool_Exp>;
  _or?: InputMaybe<Array<Ads_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "ads" */
export enum Ads_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdsPkey = 'ads_pkey'
}

/** input type for incrementing numeric columns in table "ads" */
export type Ads_Inc_Input = {
  /** 广告类型，0：轮播图 */
  type?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "ads" */
export type Ads_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** 广告类型，0：轮播图 */
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Ads_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** 广告类型，0：轮播图 */
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Ads_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** 广告类型，0：轮播图 */
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "ads" */
export type Ads_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Ads>;
};

/** on_conflict condition type for table "ads" */
export type Ads_On_Conflict = {
  constraint: Ads_Constraint;
  update_columns?: Array<Ads_Update_Column>;
  where?: InputMaybe<Ads_Bool_Exp>;
};

/** Ordering options when selecting data from "ads". */
export type Ads_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ads */
export type Ads_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "ads" */
export enum Ads_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Link = 'link',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "ads" */
export type Ads_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** 广告类型，0：轮播图 */
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Ads_Stddev_Fields = {
  /** 广告类型，0：轮播图 */
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Ads_Stddev_Pop_Fields = {
  /** 广告类型，0：轮播图 */
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Ads_Stddev_Samp_Fields = {
  /** 广告类型，0：轮播图 */
  type?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "ads" */
export type Ads_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ads_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ads_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** 广告类型，0：轮播图 */
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Ads_Sum_Fields = {
  /** 广告类型，0：轮播图 */
  type?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "ads" */
export enum Ads_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Link = 'link',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Ads_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Ads_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ads_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ads_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ads_Var_Pop_Fields = {
  /** 广告类型，0：轮播图 */
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Ads_Var_Samp_Fields = {
  /** 广告类型，0：轮播图 */
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Ads_Variance_Fields = {
  /** 广告类型，0：轮播图 */
  type?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "application_sign_in_experiences" */
export type Application_Sign_In_Experiences = {
  application_id: Scalars['String']['output'];
  branding: Scalars['jsonb']['output'];
  display_name?: Maybe<Scalars['String']['output']>;
  privacy_policy_url?: Maybe<Scalars['String']['output']>;
  tenant_id: Scalars['String']['output'];
  terms_of_use_url?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "application_sign_in_experiences" */
export type Application_Sign_In_ExperiencesBrandingArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "application_sign_in_experiences" */
export type Application_Sign_In_Experiences_Aggregate = {
  aggregate?: Maybe<Application_Sign_In_Experiences_Aggregate_Fields>;
  nodes: Array<Application_Sign_In_Experiences>;
};

/** aggregate fields of "application_sign_in_experiences" */
export type Application_Sign_In_Experiences_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Application_Sign_In_Experiences_Max_Fields>;
  min?: Maybe<Application_Sign_In_Experiences_Min_Fields>;
};


/** aggregate fields of "application_sign_in_experiences" */
export type Application_Sign_In_Experiences_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Application_Sign_In_Experiences_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Application_Sign_In_Experiences_Append_Input = {
  branding?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "application_sign_in_experiences". All fields are combined with a logical 'AND'. */
export type Application_Sign_In_Experiences_Bool_Exp = {
  _and?: InputMaybe<Array<Application_Sign_In_Experiences_Bool_Exp>>;
  _not?: InputMaybe<Application_Sign_In_Experiences_Bool_Exp>;
  _or?: InputMaybe<Array<Application_Sign_In_Experiences_Bool_Exp>>;
  application_id?: InputMaybe<String_Comparison_Exp>;
  branding?: InputMaybe<Jsonb_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  privacy_policy_url?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  terms_of_use_url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "application_sign_in_experiences" */
export enum Application_Sign_In_Experiences_Constraint {
  /** unique or primary key constraint on columns "application_id", "tenant_id" */
  ApplicationSignInExperiencesPkey = 'application_sign_in_experiences_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Application_Sign_In_Experiences_Delete_At_Path_Input = {
  branding?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Application_Sign_In_Experiences_Delete_Elem_Input = {
  branding?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Application_Sign_In_Experiences_Delete_Key_Input = {
  branding?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "application_sign_in_experiences" */
export type Application_Sign_In_Experiences_Insert_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  branding?: InputMaybe<Scalars['jsonb']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  privacy_policy_url?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  terms_of_use_url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Application_Sign_In_Experiences_Max_Fields = {
  application_id?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  privacy_policy_url?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  terms_of_use_url?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Application_Sign_In_Experiences_Min_Fields = {
  application_id?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  privacy_policy_url?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  terms_of_use_url?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "application_sign_in_experiences" */
export type Application_Sign_In_Experiences_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Application_Sign_In_Experiences>;
};

/** on_conflict condition type for table "application_sign_in_experiences" */
export type Application_Sign_In_Experiences_On_Conflict = {
  constraint: Application_Sign_In_Experiences_Constraint;
  update_columns?: Array<Application_Sign_In_Experiences_Update_Column>;
  where?: InputMaybe<Application_Sign_In_Experiences_Bool_Exp>;
};

/** Ordering options when selecting data from "application_sign_in_experiences". */
export type Application_Sign_In_Experiences_Order_By = {
  application_id?: InputMaybe<Order_By>;
  branding?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  privacy_policy_url?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  terms_of_use_url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: application_sign_in_experiences */
export type Application_Sign_In_Experiences_Pk_Columns_Input = {
  application_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Application_Sign_In_Experiences_Prepend_Input = {
  branding?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "application_sign_in_experiences" */
export enum Application_Sign_In_Experiences_Select_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  Branding = 'branding',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  PrivacyPolicyUrl = 'privacy_policy_url',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  TermsOfUseUrl = 'terms_of_use_url'
}

/** input type for updating data in table "application_sign_in_experiences" */
export type Application_Sign_In_Experiences_Set_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  branding?: InputMaybe<Scalars['jsonb']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  privacy_policy_url?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  terms_of_use_url?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "application_sign_in_experiences" */
export type Application_Sign_In_Experiences_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Application_Sign_In_Experiences_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Application_Sign_In_Experiences_Stream_Cursor_Value_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  branding?: InputMaybe<Scalars['jsonb']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  privacy_policy_url?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  terms_of_use_url?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "application_sign_in_experiences" */
export enum Application_Sign_In_Experiences_Update_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  Branding = 'branding',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  PrivacyPolicyUrl = 'privacy_policy_url',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  TermsOfUseUrl = 'terms_of_use_url'
}

export type Application_Sign_In_Experiences_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Application_Sign_In_Experiences_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Application_Sign_In_Experiences_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Application_Sign_In_Experiences_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Application_Sign_In_Experiences_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Application_Sign_In_Experiences_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Application_Sign_In_Experiences_Set_Input>;
  /** filter the rows which have to be updated */
  where: Application_Sign_In_Experiences_Bool_Exp;
};

/** Boolean expression to compare columns of type "application_type". All fields are combined with logical 'AND'. */
export type Application_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['application_type']['input']>;
  _gt?: InputMaybe<Scalars['application_type']['input']>;
  _gte?: InputMaybe<Scalars['application_type']['input']>;
  _in?: InputMaybe<Array<Scalars['application_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['application_type']['input']>;
  _lte?: InputMaybe<Scalars['application_type']['input']>;
  _neq?: InputMaybe<Scalars['application_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['application_type']['input']>>;
};

/** columns and relationships of "application_user_consent_organization_scopes" */
export type Application_User_Consent_Organization_Scopes = {
  application_id: Scalars['String']['output'];
  organization_scope_id: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
};

/** aggregated selection of "application_user_consent_organization_scopes" */
export type Application_User_Consent_Organization_Scopes_Aggregate = {
  aggregate?: Maybe<Application_User_Consent_Organization_Scopes_Aggregate_Fields>;
  nodes: Array<Application_User_Consent_Organization_Scopes>;
};

/** aggregate fields of "application_user_consent_organization_scopes" */
export type Application_User_Consent_Organization_Scopes_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Application_User_Consent_Organization_Scopes_Max_Fields>;
  min?: Maybe<Application_User_Consent_Organization_Scopes_Min_Fields>;
};


/** aggregate fields of "application_user_consent_organization_scopes" */
export type Application_User_Consent_Organization_Scopes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Application_User_Consent_Organization_Scopes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "application_user_consent_organization_scopes". All fields are combined with a logical 'AND'. */
export type Application_User_Consent_Organization_Scopes_Bool_Exp = {
  _and?: InputMaybe<Array<Application_User_Consent_Organization_Scopes_Bool_Exp>>;
  _not?: InputMaybe<Application_User_Consent_Organization_Scopes_Bool_Exp>;
  _or?: InputMaybe<Array<Application_User_Consent_Organization_Scopes_Bool_Exp>>;
  application_id?: InputMaybe<String_Comparison_Exp>;
  organization_scope_id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "application_user_consent_organization_scopes" */
export enum Application_User_Consent_Organization_Scopes_Constraint {
  /** unique or primary key constraint on columns "application_id", "organization_scope_id" */
  ApplicationUserConsentOrganizationScopesPkey = 'application_user_consent_organization_scopes_pkey'
}

/** input type for inserting data into table "application_user_consent_organization_scopes" */
export type Application_User_Consent_Organization_Scopes_Insert_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  organization_scope_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Application_User_Consent_Organization_Scopes_Max_Fields = {
  application_id?: Maybe<Scalars['String']['output']>;
  organization_scope_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Application_User_Consent_Organization_Scopes_Min_Fields = {
  application_id?: Maybe<Scalars['String']['output']>;
  organization_scope_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "application_user_consent_organization_scopes" */
export type Application_User_Consent_Organization_Scopes_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Application_User_Consent_Organization_Scopes>;
};

/** on_conflict condition type for table "application_user_consent_organization_scopes" */
export type Application_User_Consent_Organization_Scopes_On_Conflict = {
  constraint: Application_User_Consent_Organization_Scopes_Constraint;
  update_columns?: Array<Application_User_Consent_Organization_Scopes_Update_Column>;
  where?: InputMaybe<Application_User_Consent_Organization_Scopes_Bool_Exp>;
};

/** Ordering options when selecting data from "application_user_consent_organization_scopes". */
export type Application_User_Consent_Organization_Scopes_Order_By = {
  application_id?: InputMaybe<Order_By>;
  organization_scope_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: application_user_consent_organization_scopes */
export type Application_User_Consent_Organization_Scopes_Pk_Columns_Input = {
  application_id: Scalars['String']['input'];
  organization_scope_id: Scalars['String']['input'];
};

/** select columns of table "application_user_consent_organization_scopes" */
export enum Application_User_Consent_Organization_Scopes_Select_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  OrganizationScopeId = 'organization_scope_id',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "application_user_consent_organization_scopes" */
export type Application_User_Consent_Organization_Scopes_Set_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  organization_scope_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "application_user_consent_organization_scopes" */
export type Application_User_Consent_Organization_Scopes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Application_User_Consent_Organization_Scopes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Application_User_Consent_Organization_Scopes_Stream_Cursor_Value_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  organization_scope_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "application_user_consent_organization_scopes" */
export enum Application_User_Consent_Organization_Scopes_Update_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  OrganizationScopeId = 'organization_scope_id',
  /** column name */
  TenantId = 'tenant_id'
}

export type Application_User_Consent_Organization_Scopes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Application_User_Consent_Organization_Scopes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Application_User_Consent_Organization_Scopes_Bool_Exp;
};

/** columns and relationships of "application_user_consent_organizations" */
export type Application_User_Consent_Organizations = {
  application_id: Scalars['String']['output'];
  organization_id: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "application_user_consent_organizations" */
export type Application_User_Consent_Organizations_Aggregate = {
  aggregate?: Maybe<Application_User_Consent_Organizations_Aggregate_Fields>;
  nodes: Array<Application_User_Consent_Organizations>;
};

/** aggregate fields of "application_user_consent_organizations" */
export type Application_User_Consent_Organizations_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Application_User_Consent_Organizations_Max_Fields>;
  min?: Maybe<Application_User_Consent_Organizations_Min_Fields>;
};


/** aggregate fields of "application_user_consent_organizations" */
export type Application_User_Consent_Organizations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Application_User_Consent_Organizations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "application_user_consent_organizations". All fields are combined with a logical 'AND'. */
export type Application_User_Consent_Organizations_Bool_Exp = {
  _and?: InputMaybe<Array<Application_User_Consent_Organizations_Bool_Exp>>;
  _not?: InputMaybe<Application_User_Consent_Organizations_Bool_Exp>;
  _or?: InputMaybe<Array<Application_User_Consent_Organizations_Bool_Exp>>;
  application_id?: InputMaybe<String_Comparison_Exp>;
  organization_id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "application_user_consent_organizations" */
export enum Application_User_Consent_Organizations_Constraint {
  /** unique or primary key constraint on columns "application_id", "user_id", "tenant_id", "organization_id" */
  ApplicationUserConsentOrganizationsPkey = 'application_user_consent_organizations_pkey'
}

/** input type for inserting data into table "application_user_consent_organizations" */
export type Application_User_Consent_Organizations_Insert_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Application_User_Consent_Organizations_Max_Fields = {
  application_id?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Application_User_Consent_Organizations_Min_Fields = {
  application_id?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "application_user_consent_organizations" */
export type Application_User_Consent_Organizations_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Application_User_Consent_Organizations>;
};

/** on_conflict condition type for table "application_user_consent_organizations" */
export type Application_User_Consent_Organizations_On_Conflict = {
  constraint: Application_User_Consent_Organizations_Constraint;
  update_columns?: Array<Application_User_Consent_Organizations_Update_Column>;
  where?: InputMaybe<Application_User_Consent_Organizations_Bool_Exp>;
};

/** Ordering options when selecting data from "application_user_consent_organizations". */
export type Application_User_Consent_Organizations_Order_By = {
  application_id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: application_user_consent_organizations */
export type Application_User_Consent_Organizations_Pk_Columns_Input = {
  application_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};

/** select columns of table "application_user_consent_organizations" */
export enum Application_User_Consent_Organizations_Select_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "application_user_consent_organizations" */
export type Application_User_Consent_Organizations_Set_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "application_user_consent_organizations" */
export type Application_User_Consent_Organizations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Application_User_Consent_Organizations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Application_User_Consent_Organizations_Stream_Cursor_Value_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "application_user_consent_organizations" */
export enum Application_User_Consent_Organizations_Update_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

export type Application_User_Consent_Organizations_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Application_User_Consent_Organizations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Application_User_Consent_Organizations_Bool_Exp;
};

/** columns and relationships of "application_user_consent_resource_scopes" */
export type Application_User_Consent_Resource_Scopes = {
  application_id: Scalars['String']['output'];
  scope_id: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
};

/** aggregated selection of "application_user_consent_resource_scopes" */
export type Application_User_Consent_Resource_Scopes_Aggregate = {
  aggregate?: Maybe<Application_User_Consent_Resource_Scopes_Aggregate_Fields>;
  nodes: Array<Application_User_Consent_Resource_Scopes>;
};

/** aggregate fields of "application_user_consent_resource_scopes" */
export type Application_User_Consent_Resource_Scopes_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Application_User_Consent_Resource_Scopes_Max_Fields>;
  min?: Maybe<Application_User_Consent_Resource_Scopes_Min_Fields>;
};


/** aggregate fields of "application_user_consent_resource_scopes" */
export type Application_User_Consent_Resource_Scopes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Application_User_Consent_Resource_Scopes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "application_user_consent_resource_scopes". All fields are combined with a logical 'AND'. */
export type Application_User_Consent_Resource_Scopes_Bool_Exp = {
  _and?: InputMaybe<Array<Application_User_Consent_Resource_Scopes_Bool_Exp>>;
  _not?: InputMaybe<Application_User_Consent_Resource_Scopes_Bool_Exp>;
  _or?: InputMaybe<Array<Application_User_Consent_Resource_Scopes_Bool_Exp>>;
  application_id?: InputMaybe<String_Comparison_Exp>;
  scope_id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "application_user_consent_resource_scopes" */
export enum Application_User_Consent_Resource_Scopes_Constraint {
  /** unique or primary key constraint on columns "application_id", "scope_id" */
  ApplicationUserConsentResourceScopesPkey = 'application_user_consent_resource_scopes_pkey'
}

/** input type for inserting data into table "application_user_consent_resource_scopes" */
export type Application_User_Consent_Resource_Scopes_Insert_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  scope_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Application_User_Consent_Resource_Scopes_Max_Fields = {
  application_id?: Maybe<Scalars['String']['output']>;
  scope_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Application_User_Consent_Resource_Scopes_Min_Fields = {
  application_id?: Maybe<Scalars['String']['output']>;
  scope_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "application_user_consent_resource_scopes" */
export type Application_User_Consent_Resource_Scopes_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Application_User_Consent_Resource_Scopes>;
};

/** on_conflict condition type for table "application_user_consent_resource_scopes" */
export type Application_User_Consent_Resource_Scopes_On_Conflict = {
  constraint: Application_User_Consent_Resource_Scopes_Constraint;
  update_columns?: Array<Application_User_Consent_Resource_Scopes_Update_Column>;
  where?: InputMaybe<Application_User_Consent_Resource_Scopes_Bool_Exp>;
};

/** Ordering options when selecting data from "application_user_consent_resource_scopes". */
export type Application_User_Consent_Resource_Scopes_Order_By = {
  application_id?: InputMaybe<Order_By>;
  scope_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: application_user_consent_resource_scopes */
export type Application_User_Consent_Resource_Scopes_Pk_Columns_Input = {
  application_id: Scalars['String']['input'];
  scope_id: Scalars['String']['input'];
};

/** select columns of table "application_user_consent_resource_scopes" */
export enum Application_User_Consent_Resource_Scopes_Select_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  ScopeId = 'scope_id',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "application_user_consent_resource_scopes" */
export type Application_User_Consent_Resource_Scopes_Set_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  scope_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "application_user_consent_resource_scopes" */
export type Application_User_Consent_Resource_Scopes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Application_User_Consent_Resource_Scopes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Application_User_Consent_Resource_Scopes_Stream_Cursor_Value_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  scope_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "application_user_consent_resource_scopes" */
export enum Application_User_Consent_Resource_Scopes_Update_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  ScopeId = 'scope_id',
  /** column name */
  TenantId = 'tenant_id'
}

export type Application_User_Consent_Resource_Scopes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Application_User_Consent_Resource_Scopes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Application_User_Consent_Resource_Scopes_Bool_Exp;
};

/** columns and relationships of "application_user_consent_user_scopes" */
export type Application_User_Consent_User_Scopes = {
  application_id: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
  user_scope: Scalars['String']['output'];
};

/** aggregated selection of "application_user_consent_user_scopes" */
export type Application_User_Consent_User_Scopes_Aggregate = {
  aggregate?: Maybe<Application_User_Consent_User_Scopes_Aggregate_Fields>;
  nodes: Array<Application_User_Consent_User_Scopes>;
};

/** aggregate fields of "application_user_consent_user_scopes" */
export type Application_User_Consent_User_Scopes_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Application_User_Consent_User_Scopes_Max_Fields>;
  min?: Maybe<Application_User_Consent_User_Scopes_Min_Fields>;
};


/** aggregate fields of "application_user_consent_user_scopes" */
export type Application_User_Consent_User_Scopes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Application_User_Consent_User_Scopes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "application_user_consent_user_scopes". All fields are combined with a logical 'AND'. */
export type Application_User_Consent_User_Scopes_Bool_Exp = {
  _and?: InputMaybe<Array<Application_User_Consent_User_Scopes_Bool_Exp>>;
  _not?: InputMaybe<Application_User_Consent_User_Scopes_Bool_Exp>;
  _or?: InputMaybe<Array<Application_User_Consent_User_Scopes_Bool_Exp>>;
  application_id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  user_scope?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "application_user_consent_user_scopes" */
export enum Application_User_Consent_User_Scopes_Constraint {
  /** unique or primary key constraint on columns "application_id", "user_scope" */
  ApplicationUserConsentUserScopesPkey = 'application_user_consent_user_scopes_pkey'
}

/** input type for inserting data into table "application_user_consent_user_scopes" */
export type Application_User_Consent_User_Scopes_Insert_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_scope?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Application_User_Consent_User_Scopes_Max_Fields = {
  application_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  user_scope?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Application_User_Consent_User_Scopes_Min_Fields = {
  application_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  user_scope?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "application_user_consent_user_scopes" */
export type Application_User_Consent_User_Scopes_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Application_User_Consent_User_Scopes>;
};

/** on_conflict condition type for table "application_user_consent_user_scopes" */
export type Application_User_Consent_User_Scopes_On_Conflict = {
  constraint: Application_User_Consent_User_Scopes_Constraint;
  update_columns?: Array<Application_User_Consent_User_Scopes_Update_Column>;
  where?: InputMaybe<Application_User_Consent_User_Scopes_Bool_Exp>;
};

/** Ordering options when selecting data from "application_user_consent_user_scopes". */
export type Application_User_Consent_User_Scopes_Order_By = {
  application_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_scope?: InputMaybe<Order_By>;
};

/** primary key columns input for table: application_user_consent_user_scopes */
export type Application_User_Consent_User_Scopes_Pk_Columns_Input = {
  application_id: Scalars['String']['input'];
  user_scope: Scalars['String']['input'];
};

/** select columns of table "application_user_consent_user_scopes" */
export enum Application_User_Consent_User_Scopes_Select_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserScope = 'user_scope'
}

/** input type for updating data in table "application_user_consent_user_scopes" */
export type Application_User_Consent_User_Scopes_Set_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_scope?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "application_user_consent_user_scopes" */
export type Application_User_Consent_User_Scopes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Application_User_Consent_User_Scopes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Application_User_Consent_User_Scopes_Stream_Cursor_Value_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_scope?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "application_user_consent_user_scopes" */
export enum Application_User_Consent_User_Scopes_Update_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserScope = 'user_scope'
}

export type Application_User_Consent_User_Scopes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Application_User_Consent_User_Scopes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Application_User_Consent_User_Scopes_Bool_Exp;
};

/** columns and relationships of "applications" */
export type Applications = {
  created_at: Scalars['timestamptz']['output'];
  custom_client_metadata: Scalars['jsonb']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  is_third_party: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  oidc_client_metadata: Scalars['jsonb']['output'];
  protected_app_metadata?: Maybe<Scalars['jsonb']['output']>;
  secret: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
  type: Scalars['application_type']['output'];
};


/** columns and relationships of "applications" */
export type ApplicationsCustom_Client_MetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "applications" */
export type ApplicationsOidc_Client_MetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "applications" */
export type ApplicationsProtected_App_MetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "applications" */
export type Applications_Aggregate = {
  aggregate?: Maybe<Applications_Aggregate_Fields>;
  nodes: Array<Applications>;
};

/** aggregate fields of "applications" */
export type Applications_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Applications_Max_Fields>;
  min?: Maybe<Applications_Min_Fields>;
};


/** aggregate fields of "applications" */
export type Applications_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Applications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Applications_Append_Input = {
  custom_client_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  oidc_client_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  protected_app_metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "applications". All fields are combined with a logical 'AND'. */
export type Applications_Bool_Exp = {
  _and?: InputMaybe<Array<Applications_Bool_Exp>>;
  _not?: InputMaybe<Applications_Bool_Exp>;
  _or?: InputMaybe<Array<Applications_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  custom_client_metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  is_third_party?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  oidc_client_metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  protected_app_metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  secret?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Application_Type_Comparison_Exp>;
};

/** unique or primary key constraints on table "applications" */
export enum Applications_Constraint {
  /** unique or primary key constraint on columns  */
  ApplicationsProtectedAppMetadataCustomDomain = 'applications__protected_app_metadata_custom_domain',
  /** unique or primary key constraint on columns  */
  ApplicationsProtectedAppMetadataHost = 'applications__protected_app_metadata_host',
  /** unique or primary key constraint on columns "id" */
  ApplicationsPkey = 'applications_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Applications_Delete_At_Path_Input = {
  custom_client_metadata?: InputMaybe<Array<Scalars['String']['input']>>;
  oidc_client_metadata?: InputMaybe<Array<Scalars['String']['input']>>;
  protected_app_metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Applications_Delete_Elem_Input = {
  custom_client_metadata?: InputMaybe<Scalars['Int']['input']>;
  oidc_client_metadata?: InputMaybe<Scalars['Int']['input']>;
  protected_app_metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Applications_Delete_Key_Input = {
  custom_client_metadata?: InputMaybe<Scalars['String']['input']>;
  oidc_client_metadata?: InputMaybe<Scalars['String']['input']>;
  protected_app_metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "applications" */
export type Applications_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  custom_client_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_third_party?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  oidc_client_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  protected_app_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['application_type']['input']>;
};

/** aggregate max on columns */
export type Applications_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['application_type']['output']>;
};

/** aggregate min on columns */
export type Applications_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['application_type']['output']>;
};

/** response of any mutation on the table "applications" */
export type Applications_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Applications>;
};

/** on_conflict condition type for table "applications" */
export type Applications_On_Conflict = {
  constraint: Applications_Constraint;
  update_columns?: Array<Applications_Update_Column>;
  where?: InputMaybe<Applications_Bool_Exp>;
};

/** Ordering options when selecting data from "applications". */
export type Applications_Order_By = {
  created_at?: InputMaybe<Order_By>;
  custom_client_metadata?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_third_party?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  oidc_client_metadata?: InputMaybe<Order_By>;
  protected_app_metadata?: InputMaybe<Order_By>;
  secret?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: applications */
export type Applications_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Applications_Prepend_Input = {
  custom_client_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  oidc_client_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  protected_app_metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** columns and relationships of "applications_roles" */
export type Applications_Roles = {
  application_id: Scalars['String']['output'];
  id: Scalars['String']['output'];
  role_id: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
};

/** aggregated selection of "applications_roles" */
export type Applications_Roles_Aggregate = {
  aggregate?: Maybe<Applications_Roles_Aggregate_Fields>;
  nodes: Array<Applications_Roles>;
};

/** aggregate fields of "applications_roles" */
export type Applications_Roles_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Applications_Roles_Max_Fields>;
  min?: Maybe<Applications_Roles_Min_Fields>;
};


/** aggregate fields of "applications_roles" */
export type Applications_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Applications_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "applications_roles". All fields are combined with a logical 'AND'. */
export type Applications_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Applications_Roles_Bool_Exp>>;
  _not?: InputMaybe<Applications_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Applications_Roles_Bool_Exp>>;
  application_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  role_id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "applications_roles" */
export enum Applications_Roles_Constraint {
  /** unique or primary key constraint on columns "role_id", "application_id", "tenant_id" */
  ApplicationsRolesApplicationIdRoleId = 'applications_roles__application_id_role_id',
  /** unique or primary key constraint on columns "id" */
  ApplicationsRolesPkey = 'applications_roles_pkey'
}

/** input type for inserting data into table "applications_roles" */
export type Applications_Roles_Insert_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Applications_Roles_Max_Fields = {
  application_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  role_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Applications_Roles_Min_Fields = {
  application_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  role_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "applications_roles" */
export type Applications_Roles_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Applications_Roles>;
};

/** on_conflict condition type for table "applications_roles" */
export type Applications_Roles_On_Conflict = {
  constraint: Applications_Roles_Constraint;
  update_columns?: Array<Applications_Roles_Update_Column>;
  where?: InputMaybe<Applications_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "applications_roles". */
export type Applications_Roles_Order_By = {
  application_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: applications_roles */
export type Applications_Roles_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "applications_roles" */
export enum Applications_Roles_Select_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "applications_roles" */
export type Applications_Roles_Set_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "applications_roles" */
export type Applications_Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Applications_Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Applications_Roles_Stream_Cursor_Value_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "applications_roles" */
export enum Applications_Roles_Update_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  TenantId = 'tenant_id'
}

export type Applications_Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Applications_Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Applications_Roles_Bool_Exp;
};

/** select columns of table "applications" */
export enum Applications_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomClientMetadata = 'custom_client_metadata',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsThirdParty = 'is_third_party',
  /** column name */
  Name = 'name',
  /** column name */
  OidcClientMetadata = 'oidc_client_metadata',
  /** column name */
  ProtectedAppMetadata = 'protected_app_metadata',
  /** column name */
  Secret = 'secret',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "applications" */
export type Applications_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  custom_client_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_third_party?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  oidc_client_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  protected_app_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['application_type']['input']>;
};

/** Streaming cursor of the table "applications" */
export type Applications_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Applications_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Applications_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  custom_client_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_third_party?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  oidc_client_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  protected_app_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['application_type']['input']>;
};

/** update columns of table "applications" */
export enum Applications_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomClientMetadata = 'custom_client_metadata',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsThirdParty = 'is_third_party',
  /** column name */
  Name = 'name',
  /** column name */
  OidcClientMetadata = 'oidc_client_metadata',
  /** column name */
  ProtectedAppMetadata = 'protected_app_metadata',
  /** column name */
  Secret = 'secret',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Type = 'type'
}

export type Applications_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Applications_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Applications_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Applications_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Applications_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Applications_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Applications_Set_Input>;
  /** filter the rows which have to be updated */
  where: Applications_Bool_Exp;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/**  签到设置表 */
export type Check_In_Settings = {
  /** 之后连续签到天数 */
  following: Scalars['numeric']['output'];
  following_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** 首次连续签到天数 */
  inaugural: Scalars['numeric']['output'];
  inaugural_url?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "check_in_settings" */
export type Check_In_Settings_Aggregate = {
  aggregate?: Maybe<Check_In_Settings_Aggregate_Fields>;
  nodes: Array<Check_In_Settings>;
};

/** aggregate fields of "check_in_settings" */
export type Check_In_Settings_Aggregate_Fields = {
  avg?: Maybe<Check_In_Settings_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Check_In_Settings_Max_Fields>;
  min?: Maybe<Check_In_Settings_Min_Fields>;
  stddev?: Maybe<Check_In_Settings_Stddev_Fields>;
  stddev_pop?: Maybe<Check_In_Settings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Check_In_Settings_Stddev_Samp_Fields>;
  sum?: Maybe<Check_In_Settings_Sum_Fields>;
  var_pop?: Maybe<Check_In_Settings_Var_Pop_Fields>;
  var_samp?: Maybe<Check_In_Settings_Var_Samp_Fields>;
  variance?: Maybe<Check_In_Settings_Variance_Fields>;
};


/** aggregate fields of "check_in_settings" */
export type Check_In_Settings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Check_In_Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Check_In_Settings_Avg_Fields = {
  /** 之后连续签到天数 */
  following?: Maybe<Scalars['Float']['output']>;
  /** 首次连续签到天数 */
  inaugural?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "check_in_settings". All fields are combined with a logical 'AND'. */
export type Check_In_Settings_Bool_Exp = {
  _and?: InputMaybe<Array<Check_In_Settings_Bool_Exp>>;
  _not?: InputMaybe<Check_In_Settings_Bool_Exp>;
  _or?: InputMaybe<Array<Check_In_Settings_Bool_Exp>>;
  following?: InputMaybe<Numeric_Comparison_Exp>;
  following_url?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  inaugural?: InputMaybe<Numeric_Comparison_Exp>;
  inaugural_url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "check_in_settings" */
export enum Check_In_Settings_Constraint {
  /** unique or primary key constraint on columns "id" */
  CheckInSettingsPkey = 'check_in_settings_pkey'
}

/** input type for incrementing numeric columns in table "check_in_settings" */
export type Check_In_Settings_Inc_Input = {
  /** 之后连续签到天数 */
  following?: InputMaybe<Scalars['numeric']['input']>;
  /** 首次连续签到天数 */
  inaugural?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "check_in_settings" */
export type Check_In_Settings_Insert_Input = {
  /** 之后连续签到天数 */
  following?: InputMaybe<Scalars['numeric']['input']>;
  following_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 首次连续签到天数 */
  inaugural?: InputMaybe<Scalars['numeric']['input']>;
  inaugural_url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Check_In_Settings_Max_Fields = {
  /** 之后连续签到天数 */
  following?: Maybe<Scalars['numeric']['output']>;
  following_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 首次连续签到天数 */
  inaugural?: Maybe<Scalars['numeric']['output']>;
  inaugural_url?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Check_In_Settings_Min_Fields = {
  /** 之后连续签到天数 */
  following?: Maybe<Scalars['numeric']['output']>;
  following_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 首次连续签到天数 */
  inaugural?: Maybe<Scalars['numeric']['output']>;
  inaugural_url?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "check_in_settings" */
export type Check_In_Settings_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Check_In_Settings>;
};

/** on_conflict condition type for table "check_in_settings" */
export type Check_In_Settings_On_Conflict = {
  constraint: Check_In_Settings_Constraint;
  update_columns?: Array<Check_In_Settings_Update_Column>;
  where?: InputMaybe<Check_In_Settings_Bool_Exp>;
};

/** Ordering options when selecting data from "check_in_settings". */
export type Check_In_Settings_Order_By = {
  following?: InputMaybe<Order_By>;
  following_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inaugural?: InputMaybe<Order_By>;
  inaugural_url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: check_in_settings */
export type Check_In_Settings_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "check_in_settings" */
export enum Check_In_Settings_Select_Column {
  /** column name */
  Following = 'following',
  /** column name */
  FollowingUrl = 'following_url',
  /** column name */
  Id = 'id',
  /** column name */
  Inaugural = 'inaugural',
  /** column name */
  InauguralUrl = 'inaugural_url'
}

/** input type for updating data in table "check_in_settings" */
export type Check_In_Settings_Set_Input = {
  /** 之后连续签到天数 */
  following?: InputMaybe<Scalars['numeric']['input']>;
  following_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 首次连续签到天数 */
  inaugural?: InputMaybe<Scalars['numeric']['input']>;
  inaugural_url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Check_In_Settings_Stddev_Fields = {
  /** 之后连续签到天数 */
  following?: Maybe<Scalars['Float']['output']>;
  /** 首次连续签到天数 */
  inaugural?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Check_In_Settings_Stddev_Pop_Fields = {
  /** 之后连续签到天数 */
  following?: Maybe<Scalars['Float']['output']>;
  /** 首次连续签到天数 */
  inaugural?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Check_In_Settings_Stddev_Samp_Fields = {
  /** 之后连续签到天数 */
  following?: Maybe<Scalars['Float']['output']>;
  /** 首次连续签到天数 */
  inaugural?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "check_in_settings" */
export type Check_In_Settings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Check_In_Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Check_In_Settings_Stream_Cursor_Value_Input = {
  /** 之后连续签到天数 */
  following?: InputMaybe<Scalars['numeric']['input']>;
  following_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 首次连续签到天数 */
  inaugural?: InputMaybe<Scalars['numeric']['input']>;
  inaugural_url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Check_In_Settings_Sum_Fields = {
  /** 之后连续签到天数 */
  following?: Maybe<Scalars['numeric']['output']>;
  /** 首次连续签到天数 */
  inaugural?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "check_in_settings" */
export enum Check_In_Settings_Update_Column {
  /** column name */
  Following = 'following',
  /** column name */
  FollowingUrl = 'following_url',
  /** column name */
  Id = 'id',
  /** column name */
  Inaugural = 'inaugural',
  /** column name */
  InauguralUrl = 'inaugural_url'
}

export type Check_In_Settings_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Check_In_Settings_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Check_In_Settings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Check_In_Settings_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Check_In_Settings_Var_Pop_Fields = {
  /** 之后连续签到天数 */
  following?: Maybe<Scalars['Float']['output']>;
  /** 首次连续签到天数 */
  inaugural?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Check_In_Settings_Var_Samp_Fields = {
  /** 之后连续签到天数 */
  following?: Maybe<Scalars['Float']['output']>;
  /** 首次连续签到天数 */
  inaugural?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Check_In_Settings_Variance_Fields = {
  /** 之后连续签到天数 */
  following?: Maybe<Scalars['Float']['output']>;
  /** 首次连续签到天数 */
  inaugural?: Maybe<Scalars['Float']['output']>;
};

/** 打卡签到表 */
export type Check_Ins = {
  check_in_date: Scalars['date']['output'];
  consecutive_days: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  /** 是否连续签到 */
  is_continuation: Scalars['Boolean']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "check_ins" */
export type Check_Ins_Aggregate = {
  aggregate?: Maybe<Check_Ins_Aggregate_Fields>;
  nodes: Array<Check_Ins>;
};

/** aggregate fields of "check_ins" */
export type Check_Ins_Aggregate_Fields = {
  avg?: Maybe<Check_Ins_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Check_Ins_Max_Fields>;
  min?: Maybe<Check_Ins_Min_Fields>;
  stddev?: Maybe<Check_Ins_Stddev_Fields>;
  stddev_pop?: Maybe<Check_Ins_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Check_Ins_Stddev_Samp_Fields>;
  sum?: Maybe<Check_Ins_Sum_Fields>;
  var_pop?: Maybe<Check_Ins_Var_Pop_Fields>;
  var_samp?: Maybe<Check_Ins_Var_Samp_Fields>;
  variance?: Maybe<Check_Ins_Variance_Fields>;
};


/** aggregate fields of "check_ins" */
export type Check_Ins_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Check_Ins_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Check_Ins_Avg_Fields = {
  consecutive_days?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "check_ins". All fields are combined with a logical 'AND'. */
export type Check_Ins_Bool_Exp = {
  _and?: InputMaybe<Array<Check_Ins_Bool_Exp>>;
  _not?: InputMaybe<Check_Ins_Bool_Exp>;
  _or?: InputMaybe<Array<Check_Ins_Bool_Exp>>;
  check_in_date?: InputMaybe<Date_Comparison_Exp>;
  consecutive_days?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_continuation?: InputMaybe<Boolean_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "check_ins" */
export enum Check_Ins_Constraint {
  /** unique or primary key constraint on columns "id" */
  CheckInsIdKey = 'check_ins_id_key',
  /** unique or primary key constraint on columns "id" */
  CheckInsPkey = 'check_ins_pkey'
}

/** input type for incrementing numeric columns in table "check_ins" */
export type Check_Ins_Inc_Input = {
  consecutive_days?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "check_ins" */
export type Check_Ins_Insert_Input = {
  check_in_date?: InputMaybe<Scalars['date']['input']>;
  consecutive_days?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 是否连续签到 */
  is_continuation?: InputMaybe<Scalars['Boolean']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Check_Ins_Max_Fields = {
  check_in_date?: Maybe<Scalars['date']['output']>;
  consecutive_days?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Check_Ins_Min_Fields = {
  check_in_date?: Maybe<Scalars['date']['output']>;
  consecutive_days?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "check_ins" */
export type Check_Ins_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Check_Ins>;
};

/** on_conflict condition type for table "check_ins" */
export type Check_Ins_On_Conflict = {
  constraint: Check_Ins_Constraint;
  update_columns?: Array<Check_Ins_Update_Column>;
  where?: InputMaybe<Check_Ins_Bool_Exp>;
};

/** Ordering options when selecting data from "check_ins". */
export type Check_Ins_Order_By = {
  check_in_date?: InputMaybe<Order_By>;
  consecutive_days?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_continuation?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: check_ins */
export type Check_Ins_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "check_ins" */
export enum Check_Ins_Select_Column {
  /** column name */
  CheckInDate = 'check_in_date',
  /** column name */
  ConsecutiveDays = 'consecutive_days',
  /** column name */
  Id = 'id',
  /** column name */
  IsContinuation = 'is_continuation',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "check_ins" */
export type Check_Ins_Set_Input = {
  check_in_date?: InputMaybe<Scalars['date']['input']>;
  consecutive_days?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 是否连续签到 */
  is_continuation?: InputMaybe<Scalars['Boolean']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Check_Ins_Stddev_Fields = {
  consecutive_days?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Check_Ins_Stddev_Pop_Fields = {
  consecutive_days?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Check_Ins_Stddev_Samp_Fields = {
  consecutive_days?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "check_ins" */
export type Check_Ins_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Check_Ins_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Check_Ins_Stream_Cursor_Value_Input = {
  check_in_date?: InputMaybe<Scalars['date']['input']>;
  consecutive_days?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 是否连续签到 */
  is_continuation?: InputMaybe<Scalars['Boolean']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Check_Ins_Sum_Fields = {
  consecutive_days?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "check_ins" */
export enum Check_Ins_Update_Column {
  /** column name */
  CheckInDate = 'check_in_date',
  /** column name */
  ConsecutiveDays = 'consecutive_days',
  /** column name */
  Id = 'id',
  /** column name */
  IsContinuation = 'is_continuation',
  /** column name */
  UserId = 'user_id'
}

export type Check_Ins_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Check_Ins_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Check_Ins_Set_Input>;
  /** filter the rows which have to be updated */
  where: Check_Ins_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Check_Ins_Var_Pop_Fields = {
  consecutive_days?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Check_Ins_Var_Samp_Fields = {
  consecutive_days?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Check_Ins_Variance_Fields = {
  consecutive_days?: Maybe<Scalars['Float']['output']>;
};

/** 血压记录表 */
export type Cholesterol_Records = {
  created_at: Scalars['timestamptz']['output'];
  /** 舒张压（低压） */
  diastolic_pressure: Scalars['numeric']['output'];
  id: Scalars['uuid']['output'];
  /** A computed field, executes function "calculate_cholesterol_exception" */
  is_exception?: Maybe<Scalars['Boolean']['output']>;
  /** 用药记录 */
  medication_record?: Maybe<Scalars['String']['output']>;
  /** 脉搏（心率） */
  pulse_rate: Scalars['numeric']['output'];
  /** 记录时间 */
  record_time: Scalars['timestamptz']['output'];
  remarks?: Maybe<Scalars['String']['output']>;
  /** 症状，1：早搏、2：心率不齐、3：心颤 */
  symptoms?: Maybe<Scalars['jsonb']['output']>;
  /** 收缩压（高压） */
  systolic_pressure: Scalars['numeric']['output'];
  /** A computed field, executes function "calculate_cholesterol_too_large" */
  too_large?: Maybe<Scalars['Boolean']['output']>;
  /** A computed field, executes function "calculate_cholesterol_too_small" */
  too_small?: Maybe<Scalars['Boolean']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  user_id: Scalars['String']['output'];
};


/** 血压记录表 */
export type Cholesterol_RecordsSymptomsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "cholesterol_records" */
export type Cholesterol_Records_Aggregate = {
  aggregate?: Maybe<Cholesterol_Records_Aggregate_Fields>;
  nodes: Array<Cholesterol_Records>;
};

/** aggregate fields of "cholesterol_records" */
export type Cholesterol_Records_Aggregate_Fields = {
  avg?: Maybe<Cholesterol_Records_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Cholesterol_Records_Max_Fields>;
  min?: Maybe<Cholesterol_Records_Min_Fields>;
  stddev?: Maybe<Cholesterol_Records_Stddev_Fields>;
  stddev_pop?: Maybe<Cholesterol_Records_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cholesterol_Records_Stddev_Samp_Fields>;
  sum?: Maybe<Cholesterol_Records_Sum_Fields>;
  var_pop?: Maybe<Cholesterol_Records_Var_Pop_Fields>;
  var_samp?: Maybe<Cholesterol_Records_Var_Samp_Fields>;
  variance?: Maybe<Cholesterol_Records_Variance_Fields>;
};


/** aggregate fields of "cholesterol_records" */
export type Cholesterol_Records_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cholesterol_Records_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Cholesterol_Records_Append_Input = {
  /** 症状，1：早搏、2：心率不齐、3：心颤 */
  symptoms?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Cholesterol_Records_Avg_Fields = {
  /** 舒张压（低压） */
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  /** 脉搏（心率） */
  pulse_rate?: Maybe<Scalars['Float']['output']>;
  /** 收缩压（高压） */
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "cholesterol_records". All fields are combined with a logical 'AND'. */
export type Cholesterol_Records_Bool_Exp = {
  _and?: InputMaybe<Array<Cholesterol_Records_Bool_Exp>>;
  _not?: InputMaybe<Cholesterol_Records_Bool_Exp>;
  _or?: InputMaybe<Array<Cholesterol_Records_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  diastolic_pressure?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_exception?: InputMaybe<Boolean_Comparison_Exp>;
  medication_record?: InputMaybe<String_Comparison_Exp>;
  pulse_rate?: InputMaybe<Numeric_Comparison_Exp>;
  record_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  remarks?: InputMaybe<String_Comparison_Exp>;
  symptoms?: InputMaybe<Jsonb_Comparison_Exp>;
  systolic_pressure?: InputMaybe<Numeric_Comparison_Exp>;
  too_large?: InputMaybe<Boolean_Comparison_Exp>;
  too_small?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cholesterol_records" */
export enum Cholesterol_Records_Constraint {
  /** unique or primary key constraint on columns "id" */
  CholesterolRecordsIdKey = 'cholesterol_records_id_key',
  /** unique or primary key constraint on columns "id" */
  CholesterolRecordsPkey = 'cholesterol_records_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Cholesterol_Records_Delete_At_Path_Input = {
  /** 症状，1：早搏、2：心率不齐、3：心颤 */
  symptoms?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Cholesterol_Records_Delete_Elem_Input = {
  /** 症状，1：早搏、2：心率不齐、3：心颤 */
  symptoms?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Cholesterol_Records_Delete_Key_Input = {
  /** 症状，1：早搏、2：心率不齐、3：心颤 */
  symptoms?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "cholesterol_records" */
export type Cholesterol_Records_Inc_Input = {
  /** 舒张压（低压） */
  diastolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  /** 脉搏（心率） */
  pulse_rate?: InputMaybe<Scalars['numeric']['input']>;
  /** 收缩压（高压） */
  systolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "cholesterol_records" */
export type Cholesterol_Records_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 舒张压（低压） */
  diastolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 用药记录 */
  medication_record?: InputMaybe<Scalars['String']['input']>;
  /** 脉搏（心率） */
  pulse_rate?: InputMaybe<Scalars['numeric']['input']>;
  /** 记录时间 */
  record_time?: InputMaybe<Scalars['timestamptz']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  /** 症状，1：早搏、2：心率不齐、3：心颤 */
  symptoms?: InputMaybe<Scalars['jsonb']['input']>;
  /** 收缩压（高压） */
  systolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Cholesterol_Records_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 舒张压（低压） */
  diastolic_pressure?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 用药记录 */
  medication_record?: Maybe<Scalars['String']['output']>;
  /** 脉搏（心率） */
  pulse_rate?: Maybe<Scalars['numeric']['output']>;
  /** 记录时间 */
  record_time?: Maybe<Scalars['timestamptz']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  /** 收缩压（高压） */
  systolic_pressure?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Cholesterol_Records_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 舒张压（低压） */
  diastolic_pressure?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 用药记录 */
  medication_record?: Maybe<Scalars['String']['output']>;
  /** 脉搏（心率） */
  pulse_rate?: Maybe<Scalars['numeric']['output']>;
  /** 记录时间 */
  record_time?: Maybe<Scalars['timestamptz']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  /** 收缩压（高压） */
  systolic_pressure?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "cholesterol_records" */
export type Cholesterol_Records_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Cholesterol_Records>;
};

/** on_conflict condition type for table "cholesterol_records" */
export type Cholesterol_Records_On_Conflict = {
  constraint: Cholesterol_Records_Constraint;
  update_columns?: Array<Cholesterol_Records_Update_Column>;
  where?: InputMaybe<Cholesterol_Records_Bool_Exp>;
};

/** Ordering options when selecting data from "cholesterol_records". */
export type Cholesterol_Records_Order_By = {
  created_at?: InputMaybe<Order_By>;
  diastolic_pressure?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_exception?: InputMaybe<Order_By>;
  medication_record?: InputMaybe<Order_By>;
  pulse_rate?: InputMaybe<Order_By>;
  record_time?: InputMaybe<Order_By>;
  remarks?: InputMaybe<Order_By>;
  symptoms?: InputMaybe<Order_By>;
  systolic_pressure?: InputMaybe<Order_By>;
  too_large?: InputMaybe<Order_By>;
  too_small?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cholesterol_records */
export type Cholesterol_Records_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Cholesterol_Records_Prepend_Input = {
  /** 症状，1：早搏、2：心率不齐、3：心颤 */
  symptoms?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "cholesterol_records" */
export enum Cholesterol_Records_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiastolicPressure = 'diastolic_pressure',
  /** column name */
  Id = 'id',
  /** column name */
  MedicationRecord = 'medication_record',
  /** column name */
  PulseRate = 'pulse_rate',
  /** column name */
  RecordTime = 'record_time',
  /** column name */
  Remarks = 'remarks',
  /** column name */
  Symptoms = 'symptoms',
  /** column name */
  SystolicPressure = 'systolic_pressure',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "cholesterol_records" */
export type Cholesterol_Records_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 舒张压（低压） */
  diastolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 用药记录 */
  medication_record?: InputMaybe<Scalars['String']['input']>;
  /** 脉搏（心率） */
  pulse_rate?: InputMaybe<Scalars['numeric']['input']>;
  /** 记录时间 */
  record_time?: InputMaybe<Scalars['timestamptz']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  /** 症状，1：早搏、2：心率不齐、3：心颤 */
  symptoms?: InputMaybe<Scalars['jsonb']['input']>;
  /** 收缩压（高压） */
  systolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Cholesterol_Records_Stddev_Fields = {
  /** 舒张压（低压） */
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  /** 脉搏（心率） */
  pulse_rate?: Maybe<Scalars['Float']['output']>;
  /** 收缩压（高压） */
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Cholesterol_Records_Stddev_Pop_Fields = {
  /** 舒张压（低压） */
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  /** 脉搏（心率） */
  pulse_rate?: Maybe<Scalars['Float']['output']>;
  /** 收缩压（高压） */
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Cholesterol_Records_Stddev_Samp_Fields = {
  /** 舒张压（低压） */
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  /** 脉搏（心率） */
  pulse_rate?: Maybe<Scalars['Float']['output']>;
  /** 收缩压（高压） */
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "cholesterol_records" */
export type Cholesterol_Records_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cholesterol_Records_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cholesterol_Records_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 舒张压（低压） */
  diastolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 用药记录 */
  medication_record?: InputMaybe<Scalars['String']['input']>;
  /** 脉搏（心率） */
  pulse_rate?: InputMaybe<Scalars['numeric']['input']>;
  /** 记录时间 */
  record_time?: InputMaybe<Scalars['timestamptz']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  /** 症状，1：早搏、2：心率不齐、3：心颤 */
  symptoms?: InputMaybe<Scalars['jsonb']['input']>;
  /** 收缩压（高压） */
  systolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Cholesterol_Records_Sum_Fields = {
  /** 舒张压（低压） */
  diastolic_pressure?: Maybe<Scalars['numeric']['output']>;
  /** 脉搏（心率） */
  pulse_rate?: Maybe<Scalars['numeric']['output']>;
  /** 收缩压（高压） */
  systolic_pressure?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "cholesterol_records" */
export enum Cholesterol_Records_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiastolicPressure = 'diastolic_pressure',
  /** column name */
  Id = 'id',
  /** column name */
  MedicationRecord = 'medication_record',
  /** column name */
  PulseRate = 'pulse_rate',
  /** column name */
  RecordTime = 'record_time',
  /** column name */
  Remarks = 'remarks',
  /** column name */
  Symptoms = 'symptoms',
  /** column name */
  SystolicPressure = 'systolic_pressure',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Cholesterol_Records_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Cholesterol_Records_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Cholesterol_Records_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Cholesterol_Records_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Cholesterol_Records_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cholesterol_Records_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Cholesterol_Records_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cholesterol_Records_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cholesterol_Records_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cholesterol_Records_Var_Pop_Fields = {
  /** 舒张压（低压） */
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  /** 脉搏（心率） */
  pulse_rate?: Maybe<Scalars['Float']['output']>;
  /** 收缩压（高压） */
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Cholesterol_Records_Var_Samp_Fields = {
  /** 舒张压（低压） */
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  /** 脉搏（心率） */
  pulse_rate?: Maybe<Scalars['Float']['output']>;
  /** 收缩压（高压） */
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Cholesterol_Records_Variance_Fields = {
  /** 舒张压（低压） */
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  /** 脉搏（心率） */
  pulse_rate?: Maybe<Scalars['Float']['output']>;
  /** 收缩压（高压） */
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** 血压标准表 */
export type Cholesterol_Standards = {
  diastolic_pressure: Scalars['numeric']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['uuid']['output'];
  systolic_pressure: Scalars['numeric']['output'];
};

/** aggregated selection of "cholesterol_standards" */
export type Cholesterol_Standards_Aggregate = {
  aggregate?: Maybe<Cholesterol_Standards_Aggregate_Fields>;
  nodes: Array<Cholesterol_Standards>;
};

/** aggregate fields of "cholesterol_standards" */
export type Cholesterol_Standards_Aggregate_Fields = {
  avg?: Maybe<Cholesterol_Standards_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Cholesterol_Standards_Max_Fields>;
  min?: Maybe<Cholesterol_Standards_Min_Fields>;
  stddev?: Maybe<Cholesterol_Standards_Stddev_Fields>;
  stddev_pop?: Maybe<Cholesterol_Standards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cholesterol_Standards_Stddev_Samp_Fields>;
  sum?: Maybe<Cholesterol_Standards_Sum_Fields>;
  var_pop?: Maybe<Cholesterol_Standards_Var_Pop_Fields>;
  var_samp?: Maybe<Cholesterol_Standards_Var_Samp_Fields>;
  variance?: Maybe<Cholesterol_Standards_Variance_Fields>;
};


/** aggregate fields of "cholesterol_standards" */
export type Cholesterol_Standards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cholesterol_Standards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Cholesterol_Standards_Avg_Fields = {
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "cholesterol_standards". All fields are combined with a logical 'AND'. */
export type Cholesterol_Standards_Bool_Exp = {
  _and?: InputMaybe<Array<Cholesterol_Standards_Bool_Exp>>;
  _not?: InputMaybe<Cholesterol_Standards_Bool_Exp>;
  _or?: InputMaybe<Array<Cholesterol_Standards_Bool_Exp>>;
  diastolic_pressure?: InputMaybe<Numeric_Comparison_Exp>;
  enabled?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  systolic_pressure?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "cholesterol_standards" */
export enum Cholesterol_Standards_Constraint {
  /** unique or primary key constraint on columns "id" */
  CholesterolStandardsPkey = 'cholesterol_standards_pkey'
}

/** input type for incrementing numeric columns in table "cholesterol_standards" */
export type Cholesterol_Standards_Inc_Input = {
  diastolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  systolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "cholesterol_standards" */
export type Cholesterol_Standards_Insert_Input = {
  diastolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  systolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Cholesterol_Standards_Max_Fields = {
  diastolic_pressure?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  systolic_pressure?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Cholesterol_Standards_Min_Fields = {
  diastolic_pressure?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  systolic_pressure?: Maybe<Scalars['numeric']['output']>;
};

/** response of any mutation on the table "cholesterol_standards" */
export type Cholesterol_Standards_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Cholesterol_Standards>;
};

/** on_conflict condition type for table "cholesterol_standards" */
export type Cholesterol_Standards_On_Conflict = {
  constraint: Cholesterol_Standards_Constraint;
  update_columns?: Array<Cholesterol_Standards_Update_Column>;
  where?: InputMaybe<Cholesterol_Standards_Bool_Exp>;
};

/** Ordering options when selecting data from "cholesterol_standards". */
export type Cholesterol_Standards_Order_By = {
  diastolic_pressure?: InputMaybe<Order_By>;
  enabled?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  systolic_pressure?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cholesterol_standards */
export type Cholesterol_Standards_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "cholesterol_standards" */
export enum Cholesterol_Standards_Select_Column {
  /** column name */
  DiastolicPressure = 'diastolic_pressure',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  Id = 'id',
  /** column name */
  SystolicPressure = 'systolic_pressure'
}

/** input type for updating data in table "cholesterol_standards" */
export type Cholesterol_Standards_Set_Input = {
  diastolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  systolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Cholesterol_Standards_Stddev_Fields = {
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Cholesterol_Standards_Stddev_Pop_Fields = {
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Cholesterol_Standards_Stddev_Samp_Fields = {
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "cholesterol_standards" */
export type Cholesterol_Standards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cholesterol_Standards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cholesterol_Standards_Stream_Cursor_Value_Input = {
  diastolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  systolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Cholesterol_Standards_Sum_Fields = {
  diastolic_pressure?: Maybe<Scalars['numeric']['output']>;
  systolic_pressure?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "cholesterol_standards" */
export enum Cholesterol_Standards_Update_Column {
  /** column name */
  DiastolicPressure = 'diastolic_pressure',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  Id = 'id',
  /** column name */
  SystolicPressure = 'systolic_pressure'
}

export type Cholesterol_Standards_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cholesterol_Standards_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cholesterol_Standards_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cholesterol_Standards_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cholesterol_Standards_Var_Pop_Fields = {
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Cholesterol_Standards_Var_Samp_Fields = {
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Cholesterol_Standards_Variance_Fields = {
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "connectors" */
export type Connectors = {
  config: Scalars['jsonb']['output'];
  connector_id: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  metadata: Scalars['jsonb']['output'];
  sync_profile: Scalars['Boolean']['output'];
  tenant_id: Scalars['String']['output'];
};


/** columns and relationships of "connectors" */
export type ConnectorsConfigArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "connectors" */
export type ConnectorsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "connectors" */
export type Connectors_Aggregate = {
  aggregate?: Maybe<Connectors_Aggregate_Fields>;
  nodes: Array<Connectors>;
};

/** aggregate fields of "connectors" */
export type Connectors_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Connectors_Max_Fields>;
  min?: Maybe<Connectors_Min_Fields>;
};


/** aggregate fields of "connectors" */
export type Connectors_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Connectors_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Connectors_Append_Input = {
  config?: InputMaybe<Scalars['jsonb']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "connectors". All fields are combined with a logical 'AND'. */
export type Connectors_Bool_Exp = {
  _and?: InputMaybe<Array<Connectors_Bool_Exp>>;
  _not?: InputMaybe<Connectors_Bool_Exp>;
  _or?: InputMaybe<Array<Connectors_Bool_Exp>>;
  config?: InputMaybe<Jsonb_Comparison_Exp>;
  connector_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  sync_profile?: InputMaybe<Boolean_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "connectors" */
export enum Connectors_Constraint {
  /** unique or primary key constraint on columns "id" */
  ConnectorsPkey = 'connectors_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Connectors_Delete_At_Path_Input = {
  config?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Connectors_Delete_Elem_Input = {
  config?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Connectors_Delete_Key_Input = {
  config?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "connectors" */
export type Connectors_Insert_Input = {
  config?: InputMaybe<Scalars['jsonb']['input']>;
  connector_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  sync_profile?: InputMaybe<Scalars['Boolean']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Connectors_Max_Fields = {
  connector_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Connectors_Min_Fields = {
  connector_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "connectors" */
export type Connectors_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Connectors>;
};

/** on_conflict condition type for table "connectors" */
export type Connectors_On_Conflict = {
  constraint: Connectors_Constraint;
  update_columns?: Array<Connectors_Update_Column>;
  where?: InputMaybe<Connectors_Bool_Exp>;
};

/** Ordering options when selecting data from "connectors". */
export type Connectors_Order_By = {
  config?: InputMaybe<Order_By>;
  connector_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  sync_profile?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: connectors */
export type Connectors_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Connectors_Prepend_Input = {
  config?: InputMaybe<Scalars['jsonb']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "connectors" */
export enum Connectors_Select_Column {
  /** column name */
  Config = 'config',
  /** column name */
  ConnectorId = 'connector_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  SyncProfile = 'sync_profile',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "connectors" */
export type Connectors_Set_Input = {
  config?: InputMaybe<Scalars['jsonb']['input']>;
  connector_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  sync_profile?: InputMaybe<Scalars['Boolean']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "connectors" */
export type Connectors_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Connectors_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Connectors_Stream_Cursor_Value_Input = {
  config?: InputMaybe<Scalars['jsonb']['input']>;
  connector_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  sync_profile?: InputMaybe<Scalars['Boolean']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "connectors" */
export enum Connectors_Update_Column {
  /** column name */
  Config = 'config',
  /** column name */
  ConnectorId = 'connector_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  SyncProfile = 'sync_profile',
  /** column name */
  TenantId = 'tenant_id'
}

export type Connectors_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Connectors_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Connectors_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Connectors_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Connectors_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Connectors_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Connectors_Set_Input>;
  /** filter the rows which have to be updated */
  where: Connectors_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "custom_phrases" */
export type Custom_Phrases = {
  id: Scalars['String']['output'];
  language_tag: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
  translation: Scalars['jsonb']['output'];
};


/** columns and relationships of "custom_phrases" */
export type Custom_PhrasesTranslationArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "custom_phrases" */
export type Custom_Phrases_Aggregate = {
  aggregate?: Maybe<Custom_Phrases_Aggregate_Fields>;
  nodes: Array<Custom_Phrases>;
};

/** aggregate fields of "custom_phrases" */
export type Custom_Phrases_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Custom_Phrases_Max_Fields>;
  min?: Maybe<Custom_Phrases_Min_Fields>;
};


/** aggregate fields of "custom_phrases" */
export type Custom_Phrases_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Custom_Phrases_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Custom_Phrases_Append_Input = {
  translation?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "custom_phrases". All fields are combined with a logical 'AND'. */
export type Custom_Phrases_Bool_Exp = {
  _and?: InputMaybe<Array<Custom_Phrases_Bool_Exp>>;
  _not?: InputMaybe<Custom_Phrases_Bool_Exp>;
  _or?: InputMaybe<Array<Custom_Phrases_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  language_tag?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  translation?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "custom_phrases" */
export enum Custom_Phrases_Constraint {
  /** unique or primary key constraint on columns "language_tag", "tenant_id" */
  CustomPhrasesLanguageTag = 'custom_phrases__language_tag',
  /** unique or primary key constraint on columns "id" */
  CustomPhrasesPkey = 'custom_phrases_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Custom_Phrases_Delete_At_Path_Input = {
  translation?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Custom_Phrases_Delete_Elem_Input = {
  translation?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Custom_Phrases_Delete_Key_Input = {
  translation?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "custom_phrases" */
export type Custom_Phrases_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  language_tag?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  translation?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type Custom_Phrases_Max_Fields = {
  id?: Maybe<Scalars['String']['output']>;
  language_tag?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Custom_Phrases_Min_Fields = {
  id?: Maybe<Scalars['String']['output']>;
  language_tag?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "custom_phrases" */
export type Custom_Phrases_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Custom_Phrases>;
};

/** on_conflict condition type for table "custom_phrases" */
export type Custom_Phrases_On_Conflict = {
  constraint: Custom_Phrases_Constraint;
  update_columns?: Array<Custom_Phrases_Update_Column>;
  where?: InputMaybe<Custom_Phrases_Bool_Exp>;
};

/** Ordering options when selecting data from "custom_phrases". */
export type Custom_Phrases_Order_By = {
  id?: InputMaybe<Order_By>;
  language_tag?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  translation?: InputMaybe<Order_By>;
};

/** primary key columns input for table: custom_phrases */
export type Custom_Phrases_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Custom_Phrases_Prepend_Input = {
  translation?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "custom_phrases" */
export enum Custom_Phrases_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LanguageTag = 'language_tag',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Translation = 'translation'
}

/** input type for updating data in table "custom_phrases" */
export type Custom_Phrases_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  language_tag?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  translation?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Streaming cursor of the table "custom_phrases" */
export type Custom_Phrases_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Custom_Phrases_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Custom_Phrases_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  language_tag?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  translation?: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "custom_phrases" */
export enum Custom_Phrases_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LanguageTag = 'language_tag',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Translation = 'translation'
}

export type Custom_Phrases_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Custom_Phrases_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Custom_Phrases_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Custom_Phrases_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Custom_Phrases_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Custom_Phrases_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Custom_Phrases_Set_Input>;
  /** filter the rows which have to be updated */
  where: Custom_Phrases_Bool_Exp;
};

/** columns and relationships of "daily_active_users" */
export type Daily_Active_Users = {
  date: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "daily_active_users" */
export type Daily_Active_Users_Aggregate = {
  aggregate?: Maybe<Daily_Active_Users_Aggregate_Fields>;
  nodes: Array<Daily_Active_Users>;
};

/** aggregate fields of "daily_active_users" */
export type Daily_Active_Users_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Daily_Active_Users_Max_Fields>;
  min?: Maybe<Daily_Active_Users_Min_Fields>;
};


/** aggregate fields of "daily_active_users" */
export type Daily_Active_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Daily_Active_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "daily_active_users". All fields are combined with a logical 'AND'. */
export type Daily_Active_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Daily_Active_Users_Bool_Exp>>;
  _not?: InputMaybe<Daily_Active_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Daily_Active_Users_Bool_Exp>>;
  date?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "daily_active_users" */
export enum Daily_Active_Users_Constraint {
  /** unique or primary key constraint on columns "user_id", "date" */
  DailyActiveUsersUserIdDate = 'daily_active_users__user_id_date',
  /** unique or primary key constraint on columns "id" */
  DailyActiveUsersPkey = 'daily_active_users_pkey'
}

/** input type for inserting data into table "daily_active_users" */
export type Daily_Active_Users_Insert_Input = {
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Daily_Active_Users_Max_Fields = {
  date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Daily_Active_Users_Min_Fields = {
  date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "daily_active_users" */
export type Daily_Active_Users_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Daily_Active_Users>;
};

/** on_conflict condition type for table "daily_active_users" */
export type Daily_Active_Users_On_Conflict = {
  constraint: Daily_Active_Users_Constraint;
  update_columns?: Array<Daily_Active_Users_Update_Column>;
  where?: InputMaybe<Daily_Active_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "daily_active_users". */
export type Daily_Active_Users_Order_By = {
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: daily_active_users */
export type Daily_Active_Users_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "daily_active_users" */
export enum Daily_Active_Users_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "daily_active_users" */
export type Daily_Active_Users_Set_Input = {
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "daily_active_users" */
export type Daily_Active_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Daily_Active_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Daily_Active_Users_Stream_Cursor_Value_Input = {
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "daily_active_users" */
export enum Daily_Active_Users_Update_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

export type Daily_Active_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Daily_Active_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Daily_Active_Users_Bool_Exp;
};

/** columns and relationships of "daily_token_usage" */
export type Daily_Token_Usage = {
  date: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
  usage: Scalars['bigint']['output'];
};

/** aggregated selection of "daily_token_usage" */
export type Daily_Token_Usage_Aggregate = {
  aggregate?: Maybe<Daily_Token_Usage_Aggregate_Fields>;
  nodes: Array<Daily_Token_Usage>;
};

/** aggregate fields of "daily_token_usage" */
export type Daily_Token_Usage_Aggregate_Fields = {
  avg?: Maybe<Daily_Token_Usage_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Daily_Token_Usage_Max_Fields>;
  min?: Maybe<Daily_Token_Usage_Min_Fields>;
  stddev?: Maybe<Daily_Token_Usage_Stddev_Fields>;
  stddev_pop?: Maybe<Daily_Token_Usage_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Daily_Token_Usage_Stddev_Samp_Fields>;
  sum?: Maybe<Daily_Token_Usage_Sum_Fields>;
  var_pop?: Maybe<Daily_Token_Usage_Var_Pop_Fields>;
  var_samp?: Maybe<Daily_Token_Usage_Var_Samp_Fields>;
  variance?: Maybe<Daily_Token_Usage_Variance_Fields>;
};


/** aggregate fields of "daily_token_usage" */
export type Daily_Token_Usage_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Daily_Token_Usage_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Daily_Token_Usage_Avg_Fields = {
  usage?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "daily_token_usage". All fields are combined with a logical 'AND'. */
export type Daily_Token_Usage_Bool_Exp = {
  _and?: InputMaybe<Array<Daily_Token_Usage_Bool_Exp>>;
  _not?: InputMaybe<Daily_Token_Usage_Bool_Exp>;
  _or?: InputMaybe<Array<Daily_Token_Usage_Bool_Exp>>;
  date?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  usage?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "daily_token_usage" */
export enum Daily_Token_Usage_Constraint {
  /** unique or primary key constraint on columns "date", "tenant_id" */
  DailyTokenUsageDate = 'daily_token_usage__date',
  /** unique or primary key constraint on columns "id" */
  DailyTokenUsagePkey = 'daily_token_usage_pkey'
}

/** input type for incrementing numeric columns in table "daily_token_usage" */
export type Daily_Token_Usage_Inc_Input = {
  usage?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "daily_token_usage" */
export type Daily_Token_Usage_Insert_Input = {
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  usage?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Daily_Token_Usage_Max_Fields = {
  date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  usage?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Daily_Token_Usage_Min_Fields = {
  date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  usage?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "daily_token_usage" */
export type Daily_Token_Usage_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Daily_Token_Usage>;
};

/** on_conflict condition type for table "daily_token_usage" */
export type Daily_Token_Usage_On_Conflict = {
  constraint: Daily_Token_Usage_Constraint;
  update_columns?: Array<Daily_Token_Usage_Update_Column>;
  where?: InputMaybe<Daily_Token_Usage_Bool_Exp>;
};

/** Ordering options when selecting data from "daily_token_usage". */
export type Daily_Token_Usage_Order_By = {
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  usage?: InputMaybe<Order_By>;
};

/** primary key columns input for table: daily_token_usage */
export type Daily_Token_Usage_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "daily_token_usage" */
export enum Daily_Token_Usage_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Usage = 'usage'
}

/** input type for updating data in table "daily_token_usage" */
export type Daily_Token_Usage_Set_Input = {
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  usage?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Daily_Token_Usage_Stddev_Fields = {
  usage?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Daily_Token_Usage_Stddev_Pop_Fields = {
  usage?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Daily_Token_Usage_Stddev_Samp_Fields = {
  usage?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "daily_token_usage" */
export type Daily_Token_Usage_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Daily_Token_Usage_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Daily_Token_Usage_Stream_Cursor_Value_Input = {
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  usage?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Daily_Token_Usage_Sum_Fields = {
  usage?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "daily_token_usage" */
export enum Daily_Token_Usage_Update_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Usage = 'usage'
}

export type Daily_Token_Usage_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Daily_Token_Usage_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Daily_Token_Usage_Set_Input>;
  /** filter the rows which have to be updated */
  where: Daily_Token_Usage_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Daily_Token_Usage_Var_Pop_Fields = {
  usage?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Daily_Token_Usage_Var_Samp_Fields = {
  usage?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Daily_Token_Usage_Variance_Fields = {
  usage?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "domains" */
export type Domains = {
  cloudflare_data?: Maybe<Scalars['jsonb']['output']>;
  created_at: Scalars['timestamptz']['output'];
  dns_records: Scalars['jsonb']['output'];
  domain: Scalars['String']['output'];
  error_message?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  status: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "domains" */
export type DomainsCloudflare_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "domains" */
export type DomainsDns_RecordsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "domains" */
export type Domains_Aggregate = {
  aggregate?: Maybe<Domains_Aggregate_Fields>;
  nodes: Array<Domains>;
};

/** aggregate fields of "domains" */
export type Domains_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Domains_Max_Fields>;
  min?: Maybe<Domains_Min_Fields>;
};


/** aggregate fields of "domains" */
export type Domains_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Domains_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Domains_Append_Input = {
  cloudflare_data?: InputMaybe<Scalars['jsonb']['input']>;
  dns_records?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "domains". All fields are combined with a logical 'AND'. */
export type Domains_Bool_Exp = {
  _and?: InputMaybe<Array<Domains_Bool_Exp>>;
  _not?: InputMaybe<Domains_Bool_Exp>;
  _or?: InputMaybe<Array<Domains_Bool_Exp>>;
  cloudflare_data?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dns_records?: InputMaybe<Jsonb_Comparison_Exp>;
  domain?: InputMaybe<String_Comparison_Exp>;
  error_message?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "domains" */
export enum Domains_Constraint {
  /** unique or primary key constraint on columns "domain", "tenant_id" */
  DomainsDomain = 'domains__domain',
  /** unique or primary key constraint on columns "id" */
  DomainsPkey = 'domains_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Domains_Delete_At_Path_Input = {
  cloudflare_data?: InputMaybe<Array<Scalars['String']['input']>>;
  dns_records?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Domains_Delete_Elem_Input = {
  cloudflare_data?: InputMaybe<Scalars['Int']['input']>;
  dns_records?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Domains_Delete_Key_Input = {
  cloudflare_data?: InputMaybe<Scalars['String']['input']>;
  dns_records?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "domains" */
export type Domains_Insert_Input = {
  cloudflare_data?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dns_records?: InputMaybe<Scalars['jsonb']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  error_message?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Domains_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  error_message?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Domains_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  error_message?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "domains" */
export type Domains_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Domains>;
};

/** on_conflict condition type for table "domains" */
export type Domains_On_Conflict = {
  constraint: Domains_Constraint;
  update_columns?: Array<Domains_Update_Column>;
  where?: InputMaybe<Domains_Bool_Exp>;
};

/** Ordering options when selecting data from "domains". */
export type Domains_Order_By = {
  cloudflare_data?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dns_records?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  error_message?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: domains */
export type Domains_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Domains_Prepend_Input = {
  cloudflare_data?: InputMaybe<Scalars['jsonb']['input']>;
  dns_records?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "domains" */
export enum Domains_Select_Column {
  /** column name */
  CloudflareData = 'cloudflare_data',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DnsRecords = 'dns_records',
  /** column name */
  Domain = 'domain',
  /** column name */
  ErrorMessage = 'error_message',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "domains" */
export type Domains_Set_Input = {
  cloudflare_data?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dns_records?: InputMaybe<Scalars['jsonb']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  error_message?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "domains" */
export type Domains_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Domains_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Domains_Stream_Cursor_Value_Input = {
  cloudflare_data?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dns_records?: InputMaybe<Scalars['jsonb']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  error_message?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "domains" */
export enum Domains_Update_Column {
  /** column name */
  CloudflareData = 'cloudflare_data',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DnsRecords = 'dns_records',
  /** column name */
  Domain = 'domain',
  /** column name */
  ErrorMessage = 'error_message',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Domains_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Domains_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Domains_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Domains_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Domains_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Domains_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Domains_Set_Input>;
  /** filter the rows which have to be updated */
  where: Domains_Bool_Exp;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** 血糖记录表 */
export type Glucose_Records = {
  created_at: Scalars['timestamptz']['output'];
  /** 饮食记录 */
  diet_record?: Maybe<Scalars['String']['output']>;
  /** 运动记录 */
  exercise_record?: Maybe<Scalars['String']['output']>;
  /** 血糖值 */
  glucose_value: Scalars['numeric']['output'];
  id: Scalars['uuid']['output'];
  /** A computed field, executes function "calculate_glucose_exception" */
  is_exception?: Maybe<Scalars['Boolean']['output']>;
  /** 血糖测量时段，1：早餐前、2：早餐后、3：午餐前、4：午餐后、5：晚餐前、6：晚餐后、7：其他 */
  measurement_period: Scalars['Int']['output'];
  /** 用药记录 */
  medication_record?: Maybe<Scalars['String']['output']>;
  record_time: Scalars['timestamptz']['output'];
  remarks?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "calculate_glucose_exception_too_large" */
  too_large?: Maybe<Scalars['Boolean']['output']>;
  /** A computed field, executes function "calculate_glucose_exception_too_small" */
  too_small?: Maybe<Scalars['Boolean']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "glucose_records" */
export type Glucose_Records_Aggregate = {
  aggregate?: Maybe<Glucose_Records_Aggregate_Fields>;
  nodes: Array<Glucose_Records>;
};

/** aggregate fields of "glucose_records" */
export type Glucose_Records_Aggregate_Fields = {
  avg?: Maybe<Glucose_Records_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Glucose_Records_Max_Fields>;
  min?: Maybe<Glucose_Records_Min_Fields>;
  stddev?: Maybe<Glucose_Records_Stddev_Fields>;
  stddev_pop?: Maybe<Glucose_Records_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Glucose_Records_Stddev_Samp_Fields>;
  sum?: Maybe<Glucose_Records_Sum_Fields>;
  var_pop?: Maybe<Glucose_Records_Var_Pop_Fields>;
  var_samp?: Maybe<Glucose_Records_Var_Samp_Fields>;
  variance?: Maybe<Glucose_Records_Variance_Fields>;
};


/** aggregate fields of "glucose_records" */
export type Glucose_Records_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Glucose_Records_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Glucose_Records_Avg_Fields = {
  /** 血糖值 */
  glucose_value?: Maybe<Scalars['Float']['output']>;
  /** 血糖测量时段，1：早餐前、2：早餐后、3：午餐前、4：午餐后、5：晚餐前、6：晚餐后、7：其他 */
  measurement_period?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "glucose_records". All fields are combined with a logical 'AND'. */
export type Glucose_Records_Bool_Exp = {
  _and?: InputMaybe<Array<Glucose_Records_Bool_Exp>>;
  _not?: InputMaybe<Glucose_Records_Bool_Exp>;
  _or?: InputMaybe<Array<Glucose_Records_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  diet_record?: InputMaybe<String_Comparison_Exp>;
  exercise_record?: InputMaybe<String_Comparison_Exp>;
  glucose_value?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_exception?: InputMaybe<Boolean_Comparison_Exp>;
  measurement_period?: InputMaybe<Int_Comparison_Exp>;
  medication_record?: InputMaybe<String_Comparison_Exp>;
  record_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  remarks?: InputMaybe<String_Comparison_Exp>;
  too_large?: InputMaybe<Boolean_Comparison_Exp>;
  too_small?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "glucose_records" */
export enum Glucose_Records_Constraint {
  /** unique or primary key constraint on columns "id" */
  GlucoseRecordsPkey = 'glucose_records_pkey'
}

/** input type for incrementing numeric columns in table "glucose_records" */
export type Glucose_Records_Inc_Input = {
  /** 血糖值 */
  glucose_value?: InputMaybe<Scalars['numeric']['input']>;
  /** 血糖测量时段，1：早餐前、2：早餐后、3：午餐前、4：午餐后、5：晚餐前、6：晚餐后、7：其他 */
  measurement_period?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "glucose_records" */
export type Glucose_Records_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 饮食记录 */
  diet_record?: InputMaybe<Scalars['String']['input']>;
  /** 运动记录 */
  exercise_record?: InputMaybe<Scalars['String']['input']>;
  /** 血糖值 */
  glucose_value?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 血糖测量时段，1：早餐前、2：早餐后、3：午餐前、4：午餐后、5：晚餐前、6：晚餐后、7：其他 */
  measurement_period?: InputMaybe<Scalars['Int']['input']>;
  /** 用药记录 */
  medication_record?: InputMaybe<Scalars['String']['input']>;
  record_time?: InputMaybe<Scalars['timestamptz']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Glucose_Records_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 饮食记录 */
  diet_record?: Maybe<Scalars['String']['output']>;
  /** 运动记录 */
  exercise_record?: Maybe<Scalars['String']['output']>;
  /** 血糖值 */
  glucose_value?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 血糖测量时段，1：早餐前、2：早餐后、3：午餐前、4：午餐后、5：晚餐前、6：晚餐后、7：其他 */
  measurement_period?: Maybe<Scalars['Int']['output']>;
  /** 用药记录 */
  medication_record?: Maybe<Scalars['String']['output']>;
  record_time?: Maybe<Scalars['timestamptz']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Glucose_Records_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 饮食记录 */
  diet_record?: Maybe<Scalars['String']['output']>;
  /** 运动记录 */
  exercise_record?: Maybe<Scalars['String']['output']>;
  /** 血糖值 */
  glucose_value?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 血糖测量时段，1：早餐前、2：早餐后、3：午餐前、4：午餐后、5：晚餐前、6：晚餐后、7：其他 */
  measurement_period?: Maybe<Scalars['Int']['output']>;
  /** 用药记录 */
  medication_record?: Maybe<Scalars['String']['output']>;
  record_time?: Maybe<Scalars['timestamptz']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "glucose_records" */
export type Glucose_Records_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Glucose_Records>;
};

/** on_conflict condition type for table "glucose_records" */
export type Glucose_Records_On_Conflict = {
  constraint: Glucose_Records_Constraint;
  update_columns?: Array<Glucose_Records_Update_Column>;
  where?: InputMaybe<Glucose_Records_Bool_Exp>;
};

/** Ordering options when selecting data from "glucose_records". */
export type Glucose_Records_Order_By = {
  created_at?: InputMaybe<Order_By>;
  diet_record?: InputMaybe<Order_By>;
  exercise_record?: InputMaybe<Order_By>;
  glucose_value?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_exception?: InputMaybe<Order_By>;
  measurement_period?: InputMaybe<Order_By>;
  medication_record?: InputMaybe<Order_By>;
  record_time?: InputMaybe<Order_By>;
  remarks?: InputMaybe<Order_By>;
  too_large?: InputMaybe<Order_By>;
  too_small?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: glucose_records */
export type Glucose_Records_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "glucose_records" */
export enum Glucose_Records_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DietRecord = 'diet_record',
  /** column name */
  ExerciseRecord = 'exercise_record',
  /** column name */
  GlucoseValue = 'glucose_value',
  /** column name */
  Id = 'id',
  /** column name */
  MeasurementPeriod = 'measurement_period',
  /** column name */
  MedicationRecord = 'medication_record',
  /** column name */
  RecordTime = 'record_time',
  /** column name */
  Remarks = 'remarks',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "glucose_records" */
export type Glucose_Records_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 饮食记录 */
  diet_record?: InputMaybe<Scalars['String']['input']>;
  /** 运动记录 */
  exercise_record?: InputMaybe<Scalars['String']['input']>;
  /** 血糖值 */
  glucose_value?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 血糖测量时段，1：早餐前、2：早餐后、3：午餐前、4：午餐后、5：晚餐前、6：晚餐后、7：其他 */
  measurement_period?: InputMaybe<Scalars['Int']['input']>;
  /** 用药记录 */
  medication_record?: InputMaybe<Scalars['String']['input']>;
  record_time?: InputMaybe<Scalars['timestamptz']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Glucose_Records_Stddev_Fields = {
  /** 血糖值 */
  glucose_value?: Maybe<Scalars['Float']['output']>;
  /** 血糖测量时段，1：早餐前、2：早餐后、3：午餐前、4：午餐后、5：晚餐前、6：晚餐后、7：其他 */
  measurement_period?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Glucose_Records_Stddev_Pop_Fields = {
  /** 血糖值 */
  glucose_value?: Maybe<Scalars['Float']['output']>;
  /** 血糖测量时段，1：早餐前、2：早餐后、3：午餐前、4：午餐后、5：晚餐前、6：晚餐后、7：其他 */
  measurement_period?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Glucose_Records_Stddev_Samp_Fields = {
  /** 血糖值 */
  glucose_value?: Maybe<Scalars['Float']['output']>;
  /** 血糖测量时段，1：早餐前、2：早餐后、3：午餐前、4：午餐后、5：晚餐前、6：晚餐后、7：其他 */
  measurement_period?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "glucose_records" */
export type Glucose_Records_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Glucose_Records_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Glucose_Records_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 饮食记录 */
  diet_record?: InputMaybe<Scalars['String']['input']>;
  /** 运动记录 */
  exercise_record?: InputMaybe<Scalars['String']['input']>;
  /** 血糖值 */
  glucose_value?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 血糖测量时段，1：早餐前、2：早餐后、3：午餐前、4：午餐后、5：晚餐前、6：晚餐后、7：其他 */
  measurement_period?: InputMaybe<Scalars['Int']['input']>;
  /** 用药记录 */
  medication_record?: InputMaybe<Scalars['String']['input']>;
  record_time?: InputMaybe<Scalars['timestamptz']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Glucose_Records_Sum_Fields = {
  /** 血糖值 */
  glucose_value?: Maybe<Scalars['numeric']['output']>;
  /** 血糖测量时段，1：早餐前、2：早餐后、3：午餐前、4：午餐后、5：晚餐前、6：晚餐后、7：其他 */
  measurement_period?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "glucose_records" */
export enum Glucose_Records_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DietRecord = 'diet_record',
  /** column name */
  ExerciseRecord = 'exercise_record',
  /** column name */
  GlucoseValue = 'glucose_value',
  /** column name */
  Id = 'id',
  /** column name */
  MeasurementPeriod = 'measurement_period',
  /** column name */
  MedicationRecord = 'medication_record',
  /** column name */
  RecordTime = 'record_time',
  /** column name */
  Remarks = 'remarks',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Glucose_Records_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Glucose_Records_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Glucose_Records_Set_Input>;
  /** filter the rows which have to be updated */
  where: Glucose_Records_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Glucose_Records_Var_Pop_Fields = {
  /** 血糖值 */
  glucose_value?: Maybe<Scalars['Float']['output']>;
  /** 血糖测量时段，1：早餐前、2：早餐后、3：午餐前、4：午餐后、5：晚餐前、6：晚餐后、7：其他 */
  measurement_period?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Glucose_Records_Var_Samp_Fields = {
  /** 血糖值 */
  glucose_value?: Maybe<Scalars['Float']['output']>;
  /** 血糖测量时段，1：早餐前、2：早餐后、3：午餐前、4：午餐后、5：晚餐前、6：晚餐后、7：其他 */
  measurement_period?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Glucose_Records_Variance_Fields = {
  /** 血糖值 */
  glucose_value?: Maybe<Scalars['Float']['output']>;
  /** 血糖测量时段，1：早餐前、2：早餐后、3：午餐前、4：午餐后、5：晚餐前、6：晚餐后、7：其他 */
  measurement_period?: Maybe<Scalars['Float']['output']>;
};

/** 血糖标准表 */
export type Glucose_Standards = {
  id: Scalars['uuid']['output'];
  max: Scalars['numeric']['output'];
  min: Scalars['numeric']['output'];
  title: Scalars['String']['output'];
  type: Scalars['Int']['output'];
};

/** aggregated selection of "glucose_standards" */
export type Glucose_Standards_Aggregate = {
  aggregate?: Maybe<Glucose_Standards_Aggregate_Fields>;
  nodes: Array<Glucose_Standards>;
};

/** aggregate fields of "glucose_standards" */
export type Glucose_Standards_Aggregate_Fields = {
  avg?: Maybe<Glucose_Standards_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Glucose_Standards_Max_Fields>;
  min?: Maybe<Glucose_Standards_Min_Fields>;
  stddev?: Maybe<Glucose_Standards_Stddev_Fields>;
  stddev_pop?: Maybe<Glucose_Standards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Glucose_Standards_Stddev_Samp_Fields>;
  sum?: Maybe<Glucose_Standards_Sum_Fields>;
  var_pop?: Maybe<Glucose_Standards_Var_Pop_Fields>;
  var_samp?: Maybe<Glucose_Standards_Var_Samp_Fields>;
  variance?: Maybe<Glucose_Standards_Variance_Fields>;
};


/** aggregate fields of "glucose_standards" */
export type Glucose_Standards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Glucose_Standards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Glucose_Standards_Avg_Fields = {
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "glucose_standards". All fields are combined with a logical 'AND'. */
export type Glucose_Standards_Bool_Exp = {
  _and?: InputMaybe<Array<Glucose_Standards_Bool_Exp>>;
  _not?: InputMaybe<Glucose_Standards_Bool_Exp>;
  _or?: InputMaybe<Array<Glucose_Standards_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  max?: InputMaybe<Numeric_Comparison_Exp>;
  min?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "glucose_standards" */
export enum Glucose_Standards_Constraint {
  /** unique or primary key constraint on columns "id" */
  GlucoseStandardsPkey = 'glucose_standards_pkey'
}

/** input type for incrementing numeric columns in table "glucose_standards" */
export type Glucose_Standards_Inc_Input = {
  max?: InputMaybe<Scalars['numeric']['input']>;
  min?: InputMaybe<Scalars['numeric']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "glucose_standards" */
export type Glucose_Standards_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  max?: InputMaybe<Scalars['numeric']['input']>;
  min?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Glucose_Standards_Max_Fields = {
  id?: Maybe<Scalars['uuid']['output']>;
  max?: Maybe<Scalars['numeric']['output']>;
  min?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Glucose_Standards_Min_Fields = {
  id?: Maybe<Scalars['uuid']['output']>;
  max?: Maybe<Scalars['numeric']['output']>;
  min?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "glucose_standards" */
export type Glucose_Standards_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Glucose_Standards>;
};

/** on_conflict condition type for table "glucose_standards" */
export type Glucose_Standards_On_Conflict = {
  constraint: Glucose_Standards_Constraint;
  update_columns?: Array<Glucose_Standards_Update_Column>;
  where?: InputMaybe<Glucose_Standards_Bool_Exp>;
};

/** Ordering options when selecting data from "glucose_standards". */
export type Glucose_Standards_Order_By = {
  id?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_By>;
  min?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: glucose_standards */
export type Glucose_Standards_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "glucose_standards" */
export enum Glucose_Standards_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Max = 'max',
  /** column name */
  Min = 'min',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "glucose_standards" */
export type Glucose_Standards_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  max?: InputMaybe<Scalars['numeric']['input']>;
  min?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Glucose_Standards_Stddev_Fields = {
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Glucose_Standards_Stddev_Pop_Fields = {
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Glucose_Standards_Stddev_Samp_Fields = {
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "glucose_standards" */
export type Glucose_Standards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Glucose_Standards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Glucose_Standards_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  max?: InputMaybe<Scalars['numeric']['input']>;
  min?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Glucose_Standards_Sum_Fields = {
  max?: Maybe<Scalars['numeric']['output']>;
  min?: Maybe<Scalars['numeric']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "glucose_standards" */
export enum Glucose_Standards_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Max = 'max',
  /** column name */
  Min = 'min',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type'
}

export type Glucose_Standards_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Glucose_Standards_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Glucose_Standards_Set_Input>;
  /** filter the rows which have to be updated */
  where: Glucose_Standards_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Glucose_Standards_Var_Pop_Fields = {
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Glucose_Standards_Var_Samp_Fields = {
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Glucose_Standards_Variance_Fields = {
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "hooks" */
export type Hooks = {
  config: Scalars['jsonb']['output'];
  created_at: Scalars['timestamptz']['output'];
  enabled: Scalars['Boolean']['output'];
  event?: Maybe<Scalars['String']['output']>;
  events: Scalars['jsonb']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  signing_key: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
};


/** columns and relationships of "hooks" */
export type HooksConfigArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "hooks" */
export type HooksEventsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "hooks" */
export type Hooks_Aggregate = {
  aggregate?: Maybe<Hooks_Aggregate_Fields>;
  nodes: Array<Hooks>;
};

/** aggregate fields of "hooks" */
export type Hooks_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Hooks_Max_Fields>;
  min?: Maybe<Hooks_Min_Fields>;
};


/** aggregate fields of "hooks" */
export type Hooks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hooks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Hooks_Append_Input = {
  config?: InputMaybe<Scalars['jsonb']['input']>;
  events?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "hooks". All fields are combined with a logical 'AND'. */
export type Hooks_Bool_Exp = {
  _and?: InputMaybe<Array<Hooks_Bool_Exp>>;
  _not?: InputMaybe<Hooks_Bool_Exp>;
  _or?: InputMaybe<Array<Hooks_Bool_Exp>>;
  config?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  enabled?: InputMaybe<Boolean_Comparison_Exp>;
  event?: InputMaybe<String_Comparison_Exp>;
  events?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  signing_key?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "hooks" */
export enum Hooks_Constraint {
  /** unique or primary key constraint on columns "id" */
  HooksPkey = 'hooks_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Hooks_Delete_At_Path_Input = {
  config?: InputMaybe<Array<Scalars['String']['input']>>;
  events?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Hooks_Delete_Elem_Input = {
  config?: InputMaybe<Scalars['Int']['input']>;
  events?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Hooks_Delete_Key_Input = {
  config?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "hooks" */
export type Hooks_Insert_Input = {
  config?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  signing_key?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Hooks_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  event?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  signing_key?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Hooks_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  event?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  signing_key?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "hooks" */
export type Hooks_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Hooks>;
};

/** on_conflict condition type for table "hooks" */
export type Hooks_On_Conflict = {
  constraint: Hooks_Constraint;
  update_columns?: Array<Hooks_Update_Column>;
  where?: InputMaybe<Hooks_Bool_Exp>;
};

/** Ordering options when selecting data from "hooks". */
export type Hooks_Order_By = {
  config?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  enabled?: InputMaybe<Order_By>;
  event?: InputMaybe<Order_By>;
  events?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  signing_key?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hooks */
export type Hooks_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Hooks_Prepend_Input = {
  config?: InputMaybe<Scalars['jsonb']['input']>;
  events?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "hooks" */
export enum Hooks_Select_Column {
  /** column name */
  Config = 'config',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  Event = 'event',
  /** column name */
  Events = 'events',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SigningKey = 'signing_key',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "hooks" */
export type Hooks_Set_Input = {
  config?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  signing_key?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "hooks" */
export type Hooks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Hooks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Hooks_Stream_Cursor_Value_Input = {
  config?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  signing_key?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "hooks" */
export enum Hooks_Update_Column {
  /** column name */
  Config = 'config',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  Event = 'event',
  /** column name */
  Events = 'events',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SigningKey = 'signing_key',
  /** column name */
  TenantId = 'tenant_id'
}

export type Hooks_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Hooks_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Hooks_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Hooks_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Hooks_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Hooks_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hooks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Hooks_Bool_Exp;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** 化验报告记录表 */
export type Lab_Report_Records = {
  /** 化验时间 */
  assay_date: Scalars['date']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  images: Array<Scalars['String']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  /** 化验报告类型，1：血常规、2：尿常规、3：大便常规、4：肠胃镜报告、5：病理报告、6：其他 */
  report_type: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "lab_report_records" */
export type Lab_Report_Records_Aggregate = {
  aggregate?: Maybe<Lab_Report_Records_Aggregate_Fields>;
  nodes: Array<Lab_Report_Records>;
};

/** aggregate fields of "lab_report_records" */
export type Lab_Report_Records_Aggregate_Fields = {
  avg?: Maybe<Lab_Report_Records_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Lab_Report_Records_Max_Fields>;
  min?: Maybe<Lab_Report_Records_Min_Fields>;
  stddev?: Maybe<Lab_Report_Records_Stddev_Fields>;
  stddev_pop?: Maybe<Lab_Report_Records_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lab_Report_Records_Stddev_Samp_Fields>;
  sum?: Maybe<Lab_Report_Records_Sum_Fields>;
  var_pop?: Maybe<Lab_Report_Records_Var_Pop_Fields>;
  var_samp?: Maybe<Lab_Report_Records_Var_Samp_Fields>;
  variance?: Maybe<Lab_Report_Records_Variance_Fields>;
};


/** aggregate fields of "lab_report_records" */
export type Lab_Report_Records_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Lab_Report_Records_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Lab_Report_Records_Avg_Fields = {
  /** 化验报告类型，1：血常规、2：尿常规、3：大便常规、4：肠胃镜报告、5：病理报告、6：其他 */
  report_type?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "lab_report_records". All fields are combined with a logical 'AND'. */
export type Lab_Report_Records_Bool_Exp = {
  _and?: InputMaybe<Array<Lab_Report_Records_Bool_Exp>>;
  _not?: InputMaybe<Lab_Report_Records_Bool_Exp>;
  _or?: InputMaybe<Array<Lab_Report_Records_Bool_Exp>>;
  assay_date?: InputMaybe<Date_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  images?: InputMaybe<String_Array_Comparison_Exp>;
  remarks?: InputMaybe<String_Comparison_Exp>;
  report_type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "lab_report_records" */
export enum Lab_Report_Records_Constraint {
  /** unique or primary key constraint on columns "id" */
  LabReportRecordsPkey = 'lab_report_records_pkey'
}

/** input type for incrementing numeric columns in table "lab_report_records" */
export type Lab_Report_Records_Inc_Input = {
  /** 化验报告类型，1：血常规、2：尿常规、3：大便常规、4：肠胃镜报告、5：病理报告、6：其他 */
  report_type?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "lab_report_records" */
export type Lab_Report_Records_Insert_Input = {
  /** 化验时间 */
  assay_date?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  /** 化验报告类型，1：血常规、2：尿常规、3：大便常规、4：肠胃镜报告、5：病理报告、6：其他 */
  report_type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Lab_Report_Records_Max_Fields = {
  /** 化验时间 */
  assay_date?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  remarks?: Maybe<Scalars['String']['output']>;
  /** 化验报告类型，1：血常规、2：尿常规、3：大便常规、4：肠胃镜报告、5：病理报告、6：其他 */
  report_type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Lab_Report_Records_Min_Fields = {
  /** 化验时间 */
  assay_date?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  remarks?: Maybe<Scalars['String']['output']>;
  /** 化验报告类型，1：血常规、2：尿常规、3：大便常规、4：肠胃镜报告、5：病理报告、6：其他 */
  report_type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "lab_report_records" */
export type Lab_Report_Records_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Lab_Report_Records>;
};

/** on_conflict condition type for table "lab_report_records" */
export type Lab_Report_Records_On_Conflict = {
  constraint: Lab_Report_Records_Constraint;
  update_columns?: Array<Lab_Report_Records_Update_Column>;
  where?: InputMaybe<Lab_Report_Records_Bool_Exp>;
};

/** Ordering options when selecting data from "lab_report_records". */
export type Lab_Report_Records_Order_By = {
  assay_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  images?: InputMaybe<Order_By>;
  remarks?: InputMaybe<Order_By>;
  report_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: lab_report_records */
export type Lab_Report_Records_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "lab_report_records" */
export enum Lab_Report_Records_Select_Column {
  /** column name */
  AssayDate = 'assay_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Images = 'images',
  /** column name */
  Remarks = 'remarks',
  /** column name */
  ReportType = 'report_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "lab_report_records" */
export type Lab_Report_Records_Set_Input = {
  /** 化验时间 */
  assay_date?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  /** 化验报告类型，1：血常规、2：尿常规、3：大便常规、4：肠胃镜报告、5：病理报告、6：其他 */
  report_type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Lab_Report_Records_Stddev_Fields = {
  /** 化验报告类型，1：血常规、2：尿常规、3：大便常规、4：肠胃镜报告、5：病理报告、6：其他 */
  report_type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Lab_Report_Records_Stddev_Pop_Fields = {
  /** 化验报告类型，1：血常规、2：尿常规、3：大便常规、4：肠胃镜报告、5：病理报告、6：其他 */
  report_type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Lab_Report_Records_Stddev_Samp_Fields = {
  /** 化验报告类型，1：血常规、2：尿常规、3：大便常规、4：肠胃镜报告、5：病理报告、6：其他 */
  report_type?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "lab_report_records" */
export type Lab_Report_Records_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Lab_Report_Records_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Lab_Report_Records_Stream_Cursor_Value_Input = {
  /** 化验时间 */
  assay_date?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  /** 化验报告类型，1：血常规、2：尿常规、3：大便常规、4：肠胃镜报告、5：病理报告、6：其他 */
  report_type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Lab_Report_Records_Sum_Fields = {
  /** 化验报告类型，1：血常规、2：尿常规、3：大便常规、4：肠胃镜报告、5：病理报告、6：其他 */
  report_type?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "lab_report_records" */
export enum Lab_Report_Records_Update_Column {
  /** column name */
  AssayDate = 'assay_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Images = 'images',
  /** column name */
  Remarks = 'remarks',
  /** column name */
  ReportType = 'report_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Lab_Report_Records_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Lab_Report_Records_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Lab_Report_Records_Set_Input>;
  /** filter the rows which have to be updated */
  where: Lab_Report_Records_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Lab_Report_Records_Var_Pop_Fields = {
  /** 化验报告类型，1：血常规、2：尿常规、3：大便常规、4：肠胃镜报告、5：病理报告、6：其他 */
  report_type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Lab_Report_Records_Var_Samp_Fields = {
  /** 化验报告类型，1：血常规、2：尿常规、3：大便常规、4：肠胃镜报告、5：病理报告、6：其他 */
  report_type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Lab_Report_Records_Variance_Fields = {
  /** 化验报告类型，1：血常规、2：尿常规、3：大便常规、4：肠胃镜报告、5：病理报告、6：其他 */
  report_type?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "logs" */
export type Logs = {
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  payload: Scalars['jsonb']['output'];
  tenant_id: Scalars['String']['output'];
};


/** columns and relationships of "logs" */
export type LogsPayloadArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "logs" */
export type Logs_Aggregate = {
  aggregate?: Maybe<Logs_Aggregate_Fields>;
  nodes: Array<Logs>;
};

/** aggregate fields of "logs" */
export type Logs_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Logs_Max_Fields>;
  min?: Maybe<Logs_Min_Fields>;
};


/** aggregate fields of "logs" */
export type Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Logs_Append_Input = {
  payload?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "logs". All fields are combined with a logical 'AND'. */
export type Logs_Bool_Exp = {
  _and?: InputMaybe<Array<Logs_Bool_Exp>>;
  _not?: InputMaybe<Logs_Bool_Exp>;
  _or?: InputMaybe<Array<Logs_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  payload?: InputMaybe<Jsonb_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "logs" */
export enum Logs_Constraint {
  /** unique or primary key constraint on columns "id" */
  LogsPkey = 'logs_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Logs_Delete_At_Path_Input = {
  payload?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Logs_Delete_Elem_Input = {
  payload?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Logs_Delete_Key_Input = {
  payload?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "logs" */
export type Logs_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<Scalars['jsonb']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Logs_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Logs_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "logs" */
export type Logs_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Logs>;
};

/** on_conflict condition type for table "logs" */
export type Logs_On_Conflict = {
  constraint: Logs_Constraint;
  update_columns?: Array<Logs_Update_Column>;
  where?: InputMaybe<Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "logs". */
export type Logs_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  payload?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: logs */
export type Logs_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Logs_Prepend_Input = {
  payload?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "logs" */
export enum Logs_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Payload = 'payload',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "logs" */
export type Logs_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<Scalars['jsonb']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "logs" */
export type Logs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Logs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Logs_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<Scalars['jsonb']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "logs" */
export enum Logs_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Payload = 'payload',
  /** column name */
  TenantId = 'tenant_id'
}

export type Logs_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Logs_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Logs_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Logs_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Logs_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Logs_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Logs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Logs_Bool_Exp;
};

/** columns and relationships of "logto_configs" */
export type Logto_Configs = {
  key: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
  value: Scalars['jsonb']['output'];
};


/** columns and relationships of "logto_configs" */
export type Logto_ConfigsValueArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "logto_configs" */
export type Logto_Configs_Aggregate = {
  aggregate?: Maybe<Logto_Configs_Aggregate_Fields>;
  nodes: Array<Logto_Configs>;
};

/** aggregate fields of "logto_configs" */
export type Logto_Configs_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Logto_Configs_Max_Fields>;
  min?: Maybe<Logto_Configs_Min_Fields>;
};


/** aggregate fields of "logto_configs" */
export type Logto_Configs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Logto_Configs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Logto_Configs_Append_Input = {
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "logto_configs". All fields are combined with a logical 'AND'. */
export type Logto_Configs_Bool_Exp = {
  _and?: InputMaybe<Array<Logto_Configs_Bool_Exp>>;
  _not?: InputMaybe<Logto_Configs_Bool_Exp>;
  _or?: InputMaybe<Array<Logto_Configs_Bool_Exp>>;
  key?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "logto_configs" */
export enum Logto_Configs_Constraint {
  /** unique or primary key constraint on columns "key", "tenant_id" */
  LogtoConfigsPkey = 'logto_configs_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Logto_Configs_Delete_At_Path_Input = {
  value?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Logto_Configs_Delete_Elem_Input = {
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Logto_Configs_Delete_Key_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "logto_configs" */
export type Logto_Configs_Insert_Input = {
  key?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type Logto_Configs_Max_Fields = {
  key?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Logto_Configs_Min_Fields = {
  key?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "logto_configs" */
export type Logto_Configs_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Logto_Configs>;
};

/** on_conflict condition type for table "logto_configs" */
export type Logto_Configs_On_Conflict = {
  constraint: Logto_Configs_Constraint;
  update_columns?: Array<Logto_Configs_Update_Column>;
  where?: InputMaybe<Logto_Configs_Bool_Exp>;
};

/** Ordering options when selecting data from "logto_configs". */
export type Logto_Configs_Order_By = {
  key?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: logto_configs */
export type Logto_Configs_Pk_Columns_Input = {
  key: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Logto_Configs_Prepend_Input = {
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "logto_configs" */
export enum Logto_Configs_Select_Column {
  /** column name */
  Key = 'key',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "logto_configs" */
export type Logto_Configs_Set_Input = {
  key?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Streaming cursor of the table "logto_configs" */
export type Logto_Configs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Logto_Configs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Logto_Configs_Stream_Cursor_Value_Input = {
  key?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "logto_configs" */
export enum Logto_Configs_Update_Column {
  /** column name */
  Key = 'key',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Value = 'value'
}

export type Logto_Configs_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Logto_Configs_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Logto_Configs_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Logto_Configs_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Logto_Configs_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Logto_Configs_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Logto_Configs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Logto_Configs_Bool_Exp;
};

/** 体检报告记录表 */
export type Medical_Examination_Records = {
  created_at: Scalars['timestamptz']['output'];
  /** 检查时间 */
  exam_date: Scalars['date']['output'];
  id: Scalars['uuid']['output'];
  images: Array<Scalars['String']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "medical_examination_records" */
export type Medical_Examination_Records_Aggregate = {
  aggregate?: Maybe<Medical_Examination_Records_Aggregate_Fields>;
  nodes: Array<Medical_Examination_Records>;
};

/** aggregate fields of "medical_examination_records" */
export type Medical_Examination_Records_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Medical_Examination_Records_Max_Fields>;
  min?: Maybe<Medical_Examination_Records_Min_Fields>;
};


/** aggregate fields of "medical_examination_records" */
export type Medical_Examination_Records_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Medical_Examination_Records_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "medical_examination_records". All fields are combined with a logical 'AND'. */
export type Medical_Examination_Records_Bool_Exp = {
  _and?: InputMaybe<Array<Medical_Examination_Records_Bool_Exp>>;
  _not?: InputMaybe<Medical_Examination_Records_Bool_Exp>;
  _or?: InputMaybe<Array<Medical_Examination_Records_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  exam_date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  images?: InputMaybe<String_Array_Comparison_Exp>;
  remarks?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "medical_examination_records" */
export enum Medical_Examination_Records_Constraint {
  /** unique or primary key constraint on columns "id" */
  MedicalExaminationRecordsPkey = 'medical_examination_records_pkey'
}

/** input type for inserting data into table "medical_examination_records" */
export type Medical_Examination_Records_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 检查时间 */
  exam_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Medical_Examination_Records_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 检查时间 */
  exam_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  remarks?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Medical_Examination_Records_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 检查时间 */
  exam_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  remarks?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "medical_examination_records" */
export type Medical_Examination_Records_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Medical_Examination_Records>;
};

/** on_conflict condition type for table "medical_examination_records" */
export type Medical_Examination_Records_On_Conflict = {
  constraint: Medical_Examination_Records_Constraint;
  update_columns?: Array<Medical_Examination_Records_Update_Column>;
  where?: InputMaybe<Medical_Examination_Records_Bool_Exp>;
};

/** Ordering options when selecting data from "medical_examination_records". */
export type Medical_Examination_Records_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exam_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  images?: InputMaybe<Order_By>;
  remarks?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: medical_examination_records */
export type Medical_Examination_Records_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "medical_examination_records" */
export enum Medical_Examination_Records_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExamDate = 'exam_date',
  /** column name */
  Id = 'id',
  /** column name */
  Images = 'images',
  /** column name */
  Remarks = 'remarks',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "medical_examination_records" */
export type Medical_Examination_Records_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 检查时间 */
  exam_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "medical_examination_records" */
export type Medical_Examination_Records_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Medical_Examination_Records_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Medical_Examination_Records_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 检查时间 */
  exam_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "medical_examination_records" */
export enum Medical_Examination_Records_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExamDate = 'exam_date',
  /** column name */
  Id = 'id',
  /** column name */
  Images = 'images',
  /** column name */
  Remarks = 'remarks',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Medical_Examination_Records_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Medical_Examination_Records_Set_Input>;
  /** filter the rows which have to be updated */
  where: Medical_Examination_Records_Bool_Exp;
};

/** 用药提醒 */
export type Medication_Reminders = {
  created_at: Scalars['timestamptz']['output'];
  /** 每天用药次数 */
  doses_per_day?: Maybe<Scalars['Int']['output']>;
  id: Scalars['uuid']['output'];
  /** 生产厂家 */
  manufacturer?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone_number?: Maybe<Scalars['String']['output']>;
  /** 提醒时间数组 */
  reminder_times: Array<Scalars['String']['output']>;
  spec?: Maybe<Scalars['String']['output']>;
  /** 用法用量 */
  usage_dosage?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "medication_reminders" */
export type Medication_Reminders_Aggregate = {
  aggregate?: Maybe<Medication_Reminders_Aggregate_Fields>;
  nodes: Array<Medication_Reminders>;
};

/** aggregate fields of "medication_reminders" */
export type Medication_Reminders_Aggregate_Fields = {
  avg?: Maybe<Medication_Reminders_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Medication_Reminders_Max_Fields>;
  min?: Maybe<Medication_Reminders_Min_Fields>;
  stddev?: Maybe<Medication_Reminders_Stddev_Fields>;
  stddev_pop?: Maybe<Medication_Reminders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Medication_Reminders_Stddev_Samp_Fields>;
  sum?: Maybe<Medication_Reminders_Sum_Fields>;
  var_pop?: Maybe<Medication_Reminders_Var_Pop_Fields>;
  var_samp?: Maybe<Medication_Reminders_Var_Samp_Fields>;
  variance?: Maybe<Medication_Reminders_Variance_Fields>;
};


/** aggregate fields of "medication_reminders" */
export type Medication_Reminders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Medication_Reminders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Medication_Reminders_Avg_Fields = {
  /** 每天用药次数 */
  doses_per_day?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "medication_reminders". All fields are combined with a logical 'AND'. */
export type Medication_Reminders_Bool_Exp = {
  _and?: InputMaybe<Array<Medication_Reminders_Bool_Exp>>;
  _not?: InputMaybe<Medication_Reminders_Bool_Exp>;
  _or?: InputMaybe<Array<Medication_Reminders_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  doses_per_day?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  manufacturer?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  reminder_times?: InputMaybe<String_Array_Comparison_Exp>;
  spec?: InputMaybe<String_Comparison_Exp>;
  usage_dosage?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "medication_reminders" */
export enum Medication_Reminders_Constraint {
  /** unique or primary key constraint on columns "id" */
  MedicationRemindersPkey = 'medication_reminders_pkey'
}

/** input type for incrementing numeric columns in table "medication_reminders" */
export type Medication_Reminders_Inc_Input = {
  /** 每天用药次数 */
  doses_per_day?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "medication_reminders" */
export type Medication_Reminders_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 每天用药次数 */
  doses_per_day?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 生产厂家 */
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  /** 提醒时间数组 */
  reminder_times?: InputMaybe<Array<Scalars['String']['input']>>;
  spec?: InputMaybe<Scalars['String']['input']>;
  /** 用法用量 */
  usage_dosage?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Medication_Reminders_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 每天用药次数 */
  doses_per_day?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 生产厂家 */
  manufacturer?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  /** 提醒时间数组 */
  reminder_times?: Maybe<Array<Scalars['String']['output']>>;
  spec?: Maybe<Scalars['String']['output']>;
  /** 用法用量 */
  usage_dosage?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Medication_Reminders_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 每天用药次数 */
  doses_per_day?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 生产厂家 */
  manufacturer?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  /** 提醒时间数组 */
  reminder_times?: Maybe<Array<Scalars['String']['output']>>;
  spec?: Maybe<Scalars['String']['output']>;
  /** 用法用量 */
  usage_dosage?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "medication_reminders" */
export type Medication_Reminders_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Medication_Reminders>;
};

/** on_conflict condition type for table "medication_reminders" */
export type Medication_Reminders_On_Conflict = {
  constraint: Medication_Reminders_Constraint;
  update_columns?: Array<Medication_Reminders_Update_Column>;
  where?: InputMaybe<Medication_Reminders_Bool_Exp>;
};

/** Ordering options when selecting data from "medication_reminders". */
export type Medication_Reminders_Order_By = {
  created_at?: InputMaybe<Order_By>;
  doses_per_day?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manufacturer?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  reminder_times?: InputMaybe<Order_By>;
  spec?: InputMaybe<Order_By>;
  usage_dosage?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: medication_reminders */
export type Medication_Reminders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "medication_reminders" */
export enum Medication_Reminders_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DosesPerDay = 'doses_per_day',
  /** column name */
  Id = 'id',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  ReminderTimes = 'reminder_times',
  /** column name */
  Spec = 'spec',
  /** column name */
  UsageDosage = 'usage_dosage',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "medication_reminders" */
export type Medication_Reminders_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 每天用药次数 */
  doses_per_day?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 生产厂家 */
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  /** 提醒时间数组 */
  reminder_times?: InputMaybe<Array<Scalars['String']['input']>>;
  spec?: InputMaybe<Scalars['String']['input']>;
  /** 用法用量 */
  usage_dosage?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Medication_Reminders_Stddev_Fields = {
  /** 每天用药次数 */
  doses_per_day?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Medication_Reminders_Stddev_Pop_Fields = {
  /** 每天用药次数 */
  doses_per_day?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Medication_Reminders_Stddev_Samp_Fields = {
  /** 每天用药次数 */
  doses_per_day?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "medication_reminders" */
export type Medication_Reminders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Medication_Reminders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Medication_Reminders_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 每天用药次数 */
  doses_per_day?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 生产厂家 */
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  /** 提醒时间数组 */
  reminder_times?: InputMaybe<Array<Scalars['String']['input']>>;
  spec?: InputMaybe<Scalars['String']['input']>;
  /** 用法用量 */
  usage_dosage?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Medication_Reminders_Sum_Fields = {
  /** 每天用药次数 */
  doses_per_day?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "medication_reminders" */
export enum Medication_Reminders_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DosesPerDay = 'doses_per_day',
  /** column name */
  Id = 'id',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  ReminderTimes = 'reminder_times',
  /** column name */
  Spec = 'spec',
  /** column name */
  UsageDosage = 'usage_dosage',
  /** column name */
  UserId = 'user_id'
}

export type Medication_Reminders_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Medication_Reminders_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Medication_Reminders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Medication_Reminders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Medication_Reminders_Var_Pop_Fields = {
  /** 每天用药次数 */
  doses_per_day?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Medication_Reminders_Var_Samp_Fields = {
  /** 每天用药次数 */
  doses_per_day?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Medication_Reminders_Variance_Fields = {
  /** 每天用药次数 */
  doses_per_day?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  /** This API call returns a new API key. The new key does not have any permissions. Requires permission API_MOD */
  create?: Maybe<NewApiKey>;
  /** This API call deletes the selected file and runs the clean-up procedure which purges all expired files from the data directory immediately. Requires permission DELETE */
  delete: Scalars['String']['output'];
  /** delete data from the table: "ads" */
  delete_ads?: Maybe<Ads_Mutation_Response>;
  /** delete single row from the table: "ads" */
  delete_ads_by_pk?: Maybe<Ads>;
  /** delete data from the table: "application_sign_in_experiences" */
  delete_application_sign_in_experiences?: Maybe<Application_Sign_In_Experiences_Mutation_Response>;
  /** delete single row from the table: "application_sign_in_experiences" */
  delete_application_sign_in_experiences_by_pk?: Maybe<Application_Sign_In_Experiences>;
  /** delete data from the table: "application_user_consent_organization_scopes" */
  delete_application_user_consent_organization_scopes?: Maybe<Application_User_Consent_Organization_Scopes_Mutation_Response>;
  /** delete single row from the table: "application_user_consent_organization_scopes" */
  delete_application_user_consent_organization_scopes_by_pk?: Maybe<Application_User_Consent_Organization_Scopes>;
  /** delete data from the table: "application_user_consent_organizations" */
  delete_application_user_consent_organizations?: Maybe<Application_User_Consent_Organizations_Mutation_Response>;
  /** delete single row from the table: "application_user_consent_organizations" */
  delete_application_user_consent_organizations_by_pk?: Maybe<Application_User_Consent_Organizations>;
  /** delete data from the table: "application_user_consent_resource_scopes" */
  delete_application_user_consent_resource_scopes?: Maybe<Application_User_Consent_Resource_Scopes_Mutation_Response>;
  /** delete single row from the table: "application_user_consent_resource_scopes" */
  delete_application_user_consent_resource_scopes_by_pk?: Maybe<Application_User_Consent_Resource_Scopes>;
  /** delete data from the table: "application_user_consent_user_scopes" */
  delete_application_user_consent_user_scopes?: Maybe<Application_User_Consent_User_Scopes_Mutation_Response>;
  /** delete single row from the table: "application_user_consent_user_scopes" */
  delete_application_user_consent_user_scopes_by_pk?: Maybe<Application_User_Consent_User_Scopes>;
  /** delete data from the table: "applications" */
  delete_applications?: Maybe<Applications_Mutation_Response>;
  /** delete single row from the table: "applications" */
  delete_applications_by_pk?: Maybe<Applications>;
  /** delete data from the table: "applications_roles" */
  delete_applications_roles?: Maybe<Applications_Roles_Mutation_Response>;
  /** delete single row from the table: "applications_roles" */
  delete_applications_roles_by_pk?: Maybe<Applications_Roles>;
  /** delete data from the table: "check_in_settings" */
  delete_check_in_settings?: Maybe<Check_In_Settings_Mutation_Response>;
  /** delete single row from the table: "check_in_settings" */
  delete_check_in_settings_by_pk?: Maybe<Check_In_Settings>;
  /** delete data from the table: "check_ins" */
  delete_check_ins?: Maybe<Check_Ins_Mutation_Response>;
  /** delete single row from the table: "check_ins" */
  delete_check_ins_by_pk?: Maybe<Check_Ins>;
  /** delete data from the table: "cholesterol_records" */
  delete_cholesterol_records?: Maybe<Cholesterol_Records_Mutation_Response>;
  /** delete single row from the table: "cholesterol_records" */
  delete_cholesterol_records_by_pk?: Maybe<Cholesterol_Records>;
  /** delete data from the table: "cholesterol_standards" */
  delete_cholesterol_standards?: Maybe<Cholesterol_Standards_Mutation_Response>;
  /** delete single row from the table: "cholesterol_standards" */
  delete_cholesterol_standards_by_pk?: Maybe<Cholesterol_Standards>;
  /** delete data from the table: "connectors" */
  delete_connectors?: Maybe<Connectors_Mutation_Response>;
  /** delete single row from the table: "connectors" */
  delete_connectors_by_pk?: Maybe<Connectors>;
  /** delete data from the table: "custom_phrases" */
  delete_custom_phrases?: Maybe<Custom_Phrases_Mutation_Response>;
  /** delete single row from the table: "custom_phrases" */
  delete_custom_phrases_by_pk?: Maybe<Custom_Phrases>;
  /** delete data from the table: "daily_active_users" */
  delete_daily_active_users?: Maybe<Daily_Active_Users_Mutation_Response>;
  /** delete single row from the table: "daily_active_users" */
  delete_daily_active_users_by_pk?: Maybe<Daily_Active_Users>;
  /** delete data from the table: "daily_token_usage" */
  delete_daily_token_usage?: Maybe<Daily_Token_Usage_Mutation_Response>;
  /** delete single row from the table: "daily_token_usage" */
  delete_daily_token_usage_by_pk?: Maybe<Daily_Token_Usage>;
  /** delete data from the table: "domains" */
  delete_domains?: Maybe<Domains_Mutation_Response>;
  /** delete single row from the table: "domains" */
  delete_domains_by_pk?: Maybe<Domains>;
  /** delete data from the table: "glucose_records" */
  delete_glucose_records?: Maybe<Glucose_Records_Mutation_Response>;
  /** delete single row from the table: "glucose_records" */
  delete_glucose_records_by_pk?: Maybe<Glucose_Records>;
  /** delete data from the table: "glucose_standards" */
  delete_glucose_standards?: Maybe<Glucose_Standards_Mutation_Response>;
  /** delete single row from the table: "glucose_standards" */
  delete_glucose_standards_by_pk?: Maybe<Glucose_Standards>;
  /** delete data from the table: "hooks" */
  delete_hooks?: Maybe<Hooks_Mutation_Response>;
  /** delete single row from the table: "hooks" */
  delete_hooks_by_pk?: Maybe<Hooks>;
  /** delete data from the table: "lab_report_records" */
  delete_lab_report_records?: Maybe<Lab_Report_Records_Mutation_Response>;
  /** delete single row from the table: "lab_report_records" */
  delete_lab_report_records_by_pk?: Maybe<Lab_Report_Records>;
  /** delete data from the table: "logs" */
  delete_logs?: Maybe<Logs_Mutation_Response>;
  /** delete single row from the table: "logs" */
  delete_logs_by_pk?: Maybe<Logs>;
  /** delete data from the table: "logto_configs" */
  delete_logto_configs?: Maybe<Logto_Configs_Mutation_Response>;
  /** delete single row from the table: "logto_configs" */
  delete_logto_configs_by_pk?: Maybe<Logto_Configs>;
  /** delete data from the table: "medical_examination_records" */
  delete_medical_examination_records?: Maybe<Medical_Examination_Records_Mutation_Response>;
  /** delete single row from the table: "medical_examination_records" */
  delete_medical_examination_records_by_pk?: Maybe<Medical_Examination_Records>;
  /** delete data from the table: "medication_reminders" */
  delete_medication_reminders?: Maybe<Medication_Reminders_Mutation_Response>;
  /** delete single row from the table: "medication_reminders" */
  delete_medication_reminders_by_pk?: Maybe<Medication_Reminders>;
  /** delete data from the table: "oidc_model_instances" */
  delete_oidc_model_instances?: Maybe<Oidc_Model_Instances_Mutation_Response>;
  /** delete single row from the table: "oidc_model_instances" */
  delete_oidc_model_instances_by_pk?: Maybe<Oidc_Model_Instances>;
  /** delete data from the table: "organization_invitation_role_relations" */
  delete_organization_invitation_role_relations?: Maybe<Organization_Invitation_Role_Relations_Mutation_Response>;
  /** delete single row from the table: "organization_invitation_role_relations" */
  delete_organization_invitation_role_relations_by_pk?: Maybe<Organization_Invitation_Role_Relations>;
  /** delete data from the table: "organization_invitations" */
  delete_organization_invitations?: Maybe<Organization_Invitations_Mutation_Response>;
  /** delete single row from the table: "organization_invitations" */
  delete_organization_invitations_by_pk?: Maybe<Organization_Invitations>;
  /** delete data from the table: "organization_role_scope_relations" */
  delete_organization_role_scope_relations?: Maybe<Organization_Role_Scope_Relations_Mutation_Response>;
  /** delete single row from the table: "organization_role_scope_relations" */
  delete_organization_role_scope_relations_by_pk?: Maybe<Organization_Role_Scope_Relations>;
  /** delete data from the table: "organization_role_user_relations" */
  delete_organization_role_user_relations?: Maybe<Organization_Role_User_Relations_Mutation_Response>;
  /** delete single row from the table: "organization_role_user_relations" */
  delete_organization_role_user_relations_by_pk?: Maybe<Organization_Role_User_Relations>;
  /** delete data from the table: "organization_roles" */
  delete_organization_roles?: Maybe<Organization_Roles_Mutation_Response>;
  /** delete single row from the table: "organization_roles" */
  delete_organization_roles_by_pk?: Maybe<Organization_Roles>;
  /** delete data from the table: "organization_scopes" */
  delete_organization_scopes?: Maybe<Organization_Scopes_Mutation_Response>;
  /** delete single row from the table: "organization_scopes" */
  delete_organization_scopes_by_pk?: Maybe<Organization_Scopes>;
  /** delete data from the table: "organization_user_relations" */
  delete_organization_user_relations?: Maybe<Organization_User_Relations_Mutation_Response>;
  /** delete single row from the table: "organization_user_relations" */
  delete_organization_user_relations_by_pk?: Maybe<Organization_User_Relations>;
  /** delete data from the table: "organizations" */
  delete_organizations?: Maybe<Organizations_Mutation_Response>;
  /** delete single row from the table: "organizations" */
  delete_organizations_by_pk?: Maybe<Organizations>;
  /** delete data from the table: "passcodes" */
  delete_passcodes?: Maybe<Passcodes_Mutation_Response>;
  /** delete single row from the table: "passcodes" */
  delete_passcodes_by_pk?: Maybe<Passcodes>;
  /** delete data from the table: "resources" */
  delete_resources?: Maybe<Resources_Mutation_Response>;
  /** delete single row from the table: "resources" */
  delete_resources_by_pk?: Maybe<Resources>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "roles_scopes" */
  delete_roles_scopes?: Maybe<Roles_Scopes_Mutation_Response>;
  /** delete single row from the table: "roles_scopes" */
  delete_roles_scopes_by_pk?: Maybe<Roles_Scopes>;
  /** delete data from the table: "scopes" */
  delete_scopes?: Maybe<Scopes_Mutation_Response>;
  /** delete single row from the table: "scopes" */
  delete_scopes_by_pk?: Maybe<Scopes>;
  /** delete data from the table: "sentinel_activities" */
  delete_sentinel_activities?: Maybe<Sentinel_Activities_Mutation_Response>;
  /** delete single row from the table: "sentinel_activities" */
  delete_sentinel_activities_by_pk?: Maybe<Sentinel_Activities>;
  /** delete data from the table: "service_logs" */
  delete_service_logs?: Maybe<Service_Logs_Mutation_Response>;
  /** delete single row from the table: "service_logs" */
  delete_service_logs_by_pk?: Maybe<Service_Logs>;
  /** delete data from the table: "sign_in_experiences" */
  delete_sign_in_experiences?: Maybe<Sign_In_Experiences_Mutation_Response>;
  /** delete single row from the table: "sign_in_experiences" */
  delete_sign_in_experiences_by_pk?: Maybe<Sign_In_Experiences>;
  /** delete data from the table: "sms_codes" */
  delete_sms_codes?: Maybe<Sms_Codes_Mutation_Response>;
  /** delete single row from the table: "sms_codes" */
  delete_sms_codes_by_pk?: Maybe<Sms_Codes>;
  /** delete data from the table: "sso_connectors" */
  delete_sso_connectors?: Maybe<Sso_Connectors_Mutation_Response>;
  /** delete single row from the table: "sso_connectors" */
  delete_sso_connectors_by_pk?: Maybe<Sso_Connectors>;
  /** delete data from the table: "systems" */
  delete_systems?: Maybe<Systems_Mutation_Response>;
  /** delete single row from the table: "systems" */
  delete_systems_by_pk?: Maybe<Systems>;
  /** delete data from the table: "tenants" */
  delete_tenants?: Maybe<Tenants_Mutation_Response>;
  /** delete single row from the table: "tenants" */
  delete_tenants_by_pk?: Maybe<Tenants>;
  /** delete data from the table: "user_cholesterol_standards" */
  delete_user_cholesterol_standards?: Maybe<User_Cholesterol_Standards_Mutation_Response>;
  /** delete single row from the table: "user_cholesterol_standards" */
  delete_user_cholesterol_standards_by_pk?: Maybe<User_Cholesterol_Standards>;
  /** delete data from the table: "user_glucose_standards" */
  delete_user_glucose_standards?: Maybe<User_Glucose_Standards_Mutation_Response>;
  /** delete single row from the table: "user_glucose_standards" */
  delete_user_glucose_standards_by_pk?: Maybe<User_Glucose_Standards>;
  /** delete data from the table: "user_sso_identities" */
  delete_user_sso_identities?: Maybe<User_Sso_Identities_Mutation_Response>;
  /** delete single row from the table: "user_sso_identities" */
  delete_user_sso_identities_by_pk?: Maybe<User_Sso_Identities>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "users_roles" */
  delete_users_roles?: Maybe<Users_Roles_Mutation_Response>;
  /** delete single row from the table: "users_roles" */
  delete_users_roles_by_pk?: Maybe<Users_Roles>;
  /** delete data from the table: "verification_statuses" */
  delete_verification_statuses?: Maybe<Verification_Statuses_Mutation_Response>;
  /** delete single row from the table: "verification_statuses" */
  delete_verification_statuses_by_pk?: Maybe<Verification_Statuses>;
  /** This API call duplicates an existing file with new parameters. Requires permission UPLOAD */
  duplicate?: Maybe<File>;
  /** This API call changes the name of the API key that is shown in the API overview. Requires permission API_MOD */
  friendlyname: Scalars['String']['output'];
  /** insert data into the table: "ads" */
  insert_ads?: Maybe<Ads_Mutation_Response>;
  /** insert a single row into the table: "ads" */
  insert_ads_one?: Maybe<Ads>;
  /** insert data into the table: "application_sign_in_experiences" */
  insert_application_sign_in_experiences?: Maybe<Application_Sign_In_Experiences_Mutation_Response>;
  /** insert a single row into the table: "application_sign_in_experiences" */
  insert_application_sign_in_experiences_one?: Maybe<Application_Sign_In_Experiences>;
  /** insert data into the table: "application_user_consent_organization_scopes" */
  insert_application_user_consent_organization_scopes?: Maybe<Application_User_Consent_Organization_Scopes_Mutation_Response>;
  /** insert a single row into the table: "application_user_consent_organization_scopes" */
  insert_application_user_consent_organization_scopes_one?: Maybe<Application_User_Consent_Organization_Scopes>;
  /** insert data into the table: "application_user_consent_organizations" */
  insert_application_user_consent_organizations?: Maybe<Application_User_Consent_Organizations_Mutation_Response>;
  /** insert a single row into the table: "application_user_consent_organizations" */
  insert_application_user_consent_organizations_one?: Maybe<Application_User_Consent_Organizations>;
  /** insert data into the table: "application_user_consent_resource_scopes" */
  insert_application_user_consent_resource_scopes?: Maybe<Application_User_Consent_Resource_Scopes_Mutation_Response>;
  /** insert a single row into the table: "application_user_consent_resource_scopes" */
  insert_application_user_consent_resource_scopes_one?: Maybe<Application_User_Consent_Resource_Scopes>;
  /** insert data into the table: "application_user_consent_user_scopes" */
  insert_application_user_consent_user_scopes?: Maybe<Application_User_Consent_User_Scopes_Mutation_Response>;
  /** insert a single row into the table: "application_user_consent_user_scopes" */
  insert_application_user_consent_user_scopes_one?: Maybe<Application_User_Consent_User_Scopes>;
  /** insert data into the table: "applications" */
  insert_applications?: Maybe<Applications_Mutation_Response>;
  /** insert a single row into the table: "applications" */
  insert_applications_one?: Maybe<Applications>;
  /** insert data into the table: "applications_roles" */
  insert_applications_roles?: Maybe<Applications_Roles_Mutation_Response>;
  /** insert a single row into the table: "applications_roles" */
  insert_applications_roles_one?: Maybe<Applications_Roles>;
  /** insert data into the table: "check_in_settings" */
  insert_check_in_settings?: Maybe<Check_In_Settings_Mutation_Response>;
  /** insert a single row into the table: "check_in_settings" */
  insert_check_in_settings_one?: Maybe<Check_In_Settings>;
  /** insert data into the table: "check_ins" */
  insert_check_ins?: Maybe<Check_Ins_Mutation_Response>;
  /** insert a single row into the table: "check_ins" */
  insert_check_ins_one?: Maybe<Check_Ins>;
  /** insert data into the table: "cholesterol_records" */
  insert_cholesterol_records?: Maybe<Cholesterol_Records_Mutation_Response>;
  /** insert a single row into the table: "cholesterol_records" */
  insert_cholesterol_records_one?: Maybe<Cholesterol_Records>;
  /** insert data into the table: "cholesterol_standards" */
  insert_cholesterol_standards?: Maybe<Cholesterol_Standards_Mutation_Response>;
  /** insert a single row into the table: "cholesterol_standards" */
  insert_cholesterol_standards_one?: Maybe<Cholesterol_Standards>;
  /** insert data into the table: "connectors" */
  insert_connectors?: Maybe<Connectors_Mutation_Response>;
  /** insert a single row into the table: "connectors" */
  insert_connectors_one?: Maybe<Connectors>;
  /** insert data into the table: "custom_phrases" */
  insert_custom_phrases?: Maybe<Custom_Phrases_Mutation_Response>;
  /** insert a single row into the table: "custom_phrases" */
  insert_custom_phrases_one?: Maybe<Custom_Phrases>;
  /** insert data into the table: "daily_active_users" */
  insert_daily_active_users?: Maybe<Daily_Active_Users_Mutation_Response>;
  /** insert a single row into the table: "daily_active_users" */
  insert_daily_active_users_one?: Maybe<Daily_Active_Users>;
  /** insert data into the table: "daily_token_usage" */
  insert_daily_token_usage?: Maybe<Daily_Token_Usage_Mutation_Response>;
  /** insert a single row into the table: "daily_token_usage" */
  insert_daily_token_usage_one?: Maybe<Daily_Token_Usage>;
  /** insert data into the table: "domains" */
  insert_domains?: Maybe<Domains_Mutation_Response>;
  /** insert a single row into the table: "domains" */
  insert_domains_one?: Maybe<Domains>;
  /** insert data into the table: "glucose_records" */
  insert_glucose_records?: Maybe<Glucose_Records_Mutation_Response>;
  /** insert a single row into the table: "glucose_records" */
  insert_glucose_records_one?: Maybe<Glucose_Records>;
  /** insert data into the table: "glucose_standards" */
  insert_glucose_standards?: Maybe<Glucose_Standards_Mutation_Response>;
  /** insert a single row into the table: "glucose_standards" */
  insert_glucose_standards_one?: Maybe<Glucose_Standards>;
  /** insert data into the table: "hooks" */
  insert_hooks?: Maybe<Hooks_Mutation_Response>;
  /** insert a single row into the table: "hooks" */
  insert_hooks_one?: Maybe<Hooks>;
  /** insert data into the table: "lab_report_records" */
  insert_lab_report_records?: Maybe<Lab_Report_Records_Mutation_Response>;
  /** insert a single row into the table: "lab_report_records" */
  insert_lab_report_records_one?: Maybe<Lab_Report_Records>;
  /** insert data into the table: "logs" */
  insert_logs?: Maybe<Logs_Mutation_Response>;
  /** insert a single row into the table: "logs" */
  insert_logs_one?: Maybe<Logs>;
  /** insert data into the table: "logto_configs" */
  insert_logto_configs?: Maybe<Logto_Configs_Mutation_Response>;
  /** insert a single row into the table: "logto_configs" */
  insert_logto_configs_one?: Maybe<Logto_Configs>;
  /** insert data into the table: "medical_examination_records" */
  insert_medical_examination_records?: Maybe<Medical_Examination_Records_Mutation_Response>;
  /** insert a single row into the table: "medical_examination_records" */
  insert_medical_examination_records_one?: Maybe<Medical_Examination_Records>;
  /** insert data into the table: "medication_reminders" */
  insert_medication_reminders?: Maybe<Medication_Reminders_Mutation_Response>;
  /** insert a single row into the table: "medication_reminders" */
  insert_medication_reminders_one?: Maybe<Medication_Reminders>;
  /** insert data into the table: "oidc_model_instances" */
  insert_oidc_model_instances?: Maybe<Oidc_Model_Instances_Mutation_Response>;
  /** insert a single row into the table: "oidc_model_instances" */
  insert_oidc_model_instances_one?: Maybe<Oidc_Model_Instances>;
  /** insert data into the table: "organization_invitation_role_relations" */
  insert_organization_invitation_role_relations?: Maybe<Organization_Invitation_Role_Relations_Mutation_Response>;
  /** insert a single row into the table: "organization_invitation_role_relations" */
  insert_organization_invitation_role_relations_one?: Maybe<Organization_Invitation_Role_Relations>;
  /** insert data into the table: "organization_invitations" */
  insert_organization_invitations?: Maybe<Organization_Invitations_Mutation_Response>;
  /** insert a single row into the table: "organization_invitations" */
  insert_organization_invitations_one?: Maybe<Organization_Invitations>;
  /** insert data into the table: "organization_role_scope_relations" */
  insert_organization_role_scope_relations?: Maybe<Organization_Role_Scope_Relations_Mutation_Response>;
  /** insert a single row into the table: "organization_role_scope_relations" */
  insert_organization_role_scope_relations_one?: Maybe<Organization_Role_Scope_Relations>;
  /** insert data into the table: "organization_role_user_relations" */
  insert_organization_role_user_relations?: Maybe<Organization_Role_User_Relations_Mutation_Response>;
  /** insert a single row into the table: "organization_role_user_relations" */
  insert_organization_role_user_relations_one?: Maybe<Organization_Role_User_Relations>;
  /** insert data into the table: "organization_roles" */
  insert_organization_roles?: Maybe<Organization_Roles_Mutation_Response>;
  /** insert a single row into the table: "organization_roles" */
  insert_organization_roles_one?: Maybe<Organization_Roles>;
  /** insert data into the table: "organization_scopes" */
  insert_organization_scopes?: Maybe<Organization_Scopes_Mutation_Response>;
  /** insert a single row into the table: "organization_scopes" */
  insert_organization_scopes_one?: Maybe<Organization_Scopes>;
  /** insert data into the table: "organization_user_relations" */
  insert_organization_user_relations?: Maybe<Organization_User_Relations_Mutation_Response>;
  /** insert a single row into the table: "organization_user_relations" */
  insert_organization_user_relations_one?: Maybe<Organization_User_Relations>;
  /** insert data into the table: "organizations" */
  insert_organizations?: Maybe<Organizations_Mutation_Response>;
  /** insert a single row into the table: "organizations" */
  insert_organizations_one?: Maybe<Organizations>;
  /** insert data into the table: "passcodes" */
  insert_passcodes?: Maybe<Passcodes_Mutation_Response>;
  /** insert a single row into the table: "passcodes" */
  insert_passcodes_one?: Maybe<Passcodes>;
  /** insert data into the table: "resources" */
  insert_resources?: Maybe<Resources_Mutation_Response>;
  /** insert a single row into the table: "resources" */
  insert_resources_one?: Maybe<Resources>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "roles_scopes" */
  insert_roles_scopes?: Maybe<Roles_Scopes_Mutation_Response>;
  /** insert a single row into the table: "roles_scopes" */
  insert_roles_scopes_one?: Maybe<Roles_Scopes>;
  /** insert data into the table: "scopes" */
  insert_scopes?: Maybe<Scopes_Mutation_Response>;
  /** insert a single row into the table: "scopes" */
  insert_scopes_one?: Maybe<Scopes>;
  /** insert data into the table: "sentinel_activities" */
  insert_sentinel_activities?: Maybe<Sentinel_Activities_Mutation_Response>;
  /** insert a single row into the table: "sentinel_activities" */
  insert_sentinel_activities_one?: Maybe<Sentinel_Activities>;
  /** insert data into the table: "service_logs" */
  insert_service_logs?: Maybe<Service_Logs_Mutation_Response>;
  /** insert a single row into the table: "service_logs" */
  insert_service_logs_one?: Maybe<Service_Logs>;
  /** insert data into the table: "sign_in_experiences" */
  insert_sign_in_experiences?: Maybe<Sign_In_Experiences_Mutation_Response>;
  /** insert a single row into the table: "sign_in_experiences" */
  insert_sign_in_experiences_one?: Maybe<Sign_In_Experiences>;
  /** insert data into the table: "sms_codes" */
  insert_sms_codes?: Maybe<Sms_Codes_Mutation_Response>;
  /** insert a single row into the table: "sms_codes" */
  insert_sms_codes_one?: Maybe<Sms_Codes>;
  /** insert data into the table: "sso_connectors" */
  insert_sso_connectors?: Maybe<Sso_Connectors_Mutation_Response>;
  /** insert a single row into the table: "sso_connectors" */
  insert_sso_connectors_one?: Maybe<Sso_Connectors>;
  /** insert data into the table: "systems" */
  insert_systems?: Maybe<Systems_Mutation_Response>;
  /** insert a single row into the table: "systems" */
  insert_systems_one?: Maybe<Systems>;
  /** insert data into the table: "tenants" */
  insert_tenants?: Maybe<Tenants_Mutation_Response>;
  /** insert a single row into the table: "tenants" */
  insert_tenants_one?: Maybe<Tenants>;
  /** insert data into the table: "user_cholesterol_standards" */
  insert_user_cholesterol_standards?: Maybe<User_Cholesterol_Standards_Mutation_Response>;
  /** insert a single row into the table: "user_cholesterol_standards" */
  insert_user_cholesterol_standards_one?: Maybe<User_Cholesterol_Standards>;
  /** insert data into the table: "user_glucose_standards" */
  insert_user_glucose_standards?: Maybe<User_Glucose_Standards_Mutation_Response>;
  /** insert a single row into the table: "user_glucose_standards" */
  insert_user_glucose_standards_one?: Maybe<User_Glucose_Standards>;
  /** insert data into the table: "user_sso_identities" */
  insert_user_sso_identities?: Maybe<User_Sso_Identities_Mutation_Response>;
  /** insert a single row into the table: "user_sso_identities" */
  insert_user_sso_identities_one?: Maybe<User_Sso_Identities>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "users_roles" */
  insert_users_roles?: Maybe<Users_Roles_Mutation_Response>;
  /** insert a single row into the table: "users_roles" */
  insert_users_roles_one?: Maybe<Users_Roles>;
  /** insert data into the table: "verification_statuses" */
  insert_verification_statuses?: Maybe<Verification_Statuses_Mutation_Response>;
  /** insert a single row into the table: "verification_statuses" */
  insert_verification_statuses_one?: Maybe<Verification_Statuses>;
  /** This API call changes parameters of an uploaded file.  Requires permission EDIT */
  modifyfile?: Maybe<File>;
  /** This API call changes the permissions for the given API key. Requires permission API_MOD */
  modifypermission: Scalars['String']['output'];
  /** 上传文件 */
  s3Upload?: Maybe<S3UploadOutput>;
  /** update data of the table: "ads" */
  update_ads?: Maybe<Ads_Mutation_Response>;
  /** update single row of the table: "ads" */
  update_ads_by_pk?: Maybe<Ads>;
  /** update multiples rows of table: "ads" */
  update_ads_many?: Maybe<Array<Maybe<Ads_Mutation_Response>>>;
  /** update data of the table: "application_sign_in_experiences" */
  update_application_sign_in_experiences?: Maybe<Application_Sign_In_Experiences_Mutation_Response>;
  /** update single row of the table: "application_sign_in_experiences" */
  update_application_sign_in_experiences_by_pk?: Maybe<Application_Sign_In_Experiences>;
  /** update multiples rows of table: "application_sign_in_experiences" */
  update_application_sign_in_experiences_many?: Maybe<Array<Maybe<Application_Sign_In_Experiences_Mutation_Response>>>;
  /** update data of the table: "application_user_consent_organization_scopes" */
  update_application_user_consent_organization_scopes?: Maybe<Application_User_Consent_Organization_Scopes_Mutation_Response>;
  /** update single row of the table: "application_user_consent_organization_scopes" */
  update_application_user_consent_organization_scopes_by_pk?: Maybe<Application_User_Consent_Organization_Scopes>;
  /** update multiples rows of table: "application_user_consent_organization_scopes" */
  update_application_user_consent_organization_scopes_many?: Maybe<Array<Maybe<Application_User_Consent_Organization_Scopes_Mutation_Response>>>;
  /** update data of the table: "application_user_consent_organizations" */
  update_application_user_consent_organizations?: Maybe<Application_User_Consent_Organizations_Mutation_Response>;
  /** update single row of the table: "application_user_consent_organizations" */
  update_application_user_consent_organizations_by_pk?: Maybe<Application_User_Consent_Organizations>;
  /** update multiples rows of table: "application_user_consent_organizations" */
  update_application_user_consent_organizations_many?: Maybe<Array<Maybe<Application_User_Consent_Organizations_Mutation_Response>>>;
  /** update data of the table: "application_user_consent_resource_scopes" */
  update_application_user_consent_resource_scopes?: Maybe<Application_User_Consent_Resource_Scopes_Mutation_Response>;
  /** update single row of the table: "application_user_consent_resource_scopes" */
  update_application_user_consent_resource_scopes_by_pk?: Maybe<Application_User_Consent_Resource_Scopes>;
  /** update multiples rows of table: "application_user_consent_resource_scopes" */
  update_application_user_consent_resource_scopes_many?: Maybe<Array<Maybe<Application_User_Consent_Resource_Scopes_Mutation_Response>>>;
  /** update data of the table: "application_user_consent_user_scopes" */
  update_application_user_consent_user_scopes?: Maybe<Application_User_Consent_User_Scopes_Mutation_Response>;
  /** update single row of the table: "application_user_consent_user_scopes" */
  update_application_user_consent_user_scopes_by_pk?: Maybe<Application_User_Consent_User_Scopes>;
  /** update multiples rows of table: "application_user_consent_user_scopes" */
  update_application_user_consent_user_scopes_many?: Maybe<Array<Maybe<Application_User_Consent_User_Scopes_Mutation_Response>>>;
  /** update data of the table: "applications" */
  update_applications?: Maybe<Applications_Mutation_Response>;
  /** update single row of the table: "applications" */
  update_applications_by_pk?: Maybe<Applications>;
  /** update multiples rows of table: "applications" */
  update_applications_many?: Maybe<Array<Maybe<Applications_Mutation_Response>>>;
  /** update data of the table: "applications_roles" */
  update_applications_roles?: Maybe<Applications_Roles_Mutation_Response>;
  /** update single row of the table: "applications_roles" */
  update_applications_roles_by_pk?: Maybe<Applications_Roles>;
  /** update multiples rows of table: "applications_roles" */
  update_applications_roles_many?: Maybe<Array<Maybe<Applications_Roles_Mutation_Response>>>;
  /** update data of the table: "check_in_settings" */
  update_check_in_settings?: Maybe<Check_In_Settings_Mutation_Response>;
  /** update single row of the table: "check_in_settings" */
  update_check_in_settings_by_pk?: Maybe<Check_In_Settings>;
  /** update multiples rows of table: "check_in_settings" */
  update_check_in_settings_many?: Maybe<Array<Maybe<Check_In_Settings_Mutation_Response>>>;
  /** update data of the table: "check_ins" */
  update_check_ins?: Maybe<Check_Ins_Mutation_Response>;
  /** update single row of the table: "check_ins" */
  update_check_ins_by_pk?: Maybe<Check_Ins>;
  /** update multiples rows of table: "check_ins" */
  update_check_ins_many?: Maybe<Array<Maybe<Check_Ins_Mutation_Response>>>;
  /** update data of the table: "cholesterol_records" */
  update_cholesterol_records?: Maybe<Cholesterol_Records_Mutation_Response>;
  /** update single row of the table: "cholesterol_records" */
  update_cholesterol_records_by_pk?: Maybe<Cholesterol_Records>;
  /** update multiples rows of table: "cholesterol_records" */
  update_cholesterol_records_many?: Maybe<Array<Maybe<Cholesterol_Records_Mutation_Response>>>;
  /** update data of the table: "cholesterol_standards" */
  update_cholesterol_standards?: Maybe<Cholesterol_Standards_Mutation_Response>;
  /** update single row of the table: "cholesterol_standards" */
  update_cholesterol_standards_by_pk?: Maybe<Cholesterol_Standards>;
  /** update multiples rows of table: "cholesterol_standards" */
  update_cholesterol_standards_many?: Maybe<Array<Maybe<Cholesterol_Standards_Mutation_Response>>>;
  /** update data of the table: "connectors" */
  update_connectors?: Maybe<Connectors_Mutation_Response>;
  /** update single row of the table: "connectors" */
  update_connectors_by_pk?: Maybe<Connectors>;
  /** update multiples rows of table: "connectors" */
  update_connectors_many?: Maybe<Array<Maybe<Connectors_Mutation_Response>>>;
  /** update data of the table: "custom_phrases" */
  update_custom_phrases?: Maybe<Custom_Phrases_Mutation_Response>;
  /** update single row of the table: "custom_phrases" */
  update_custom_phrases_by_pk?: Maybe<Custom_Phrases>;
  /** update multiples rows of table: "custom_phrases" */
  update_custom_phrases_many?: Maybe<Array<Maybe<Custom_Phrases_Mutation_Response>>>;
  /** update data of the table: "daily_active_users" */
  update_daily_active_users?: Maybe<Daily_Active_Users_Mutation_Response>;
  /** update single row of the table: "daily_active_users" */
  update_daily_active_users_by_pk?: Maybe<Daily_Active_Users>;
  /** update multiples rows of table: "daily_active_users" */
  update_daily_active_users_many?: Maybe<Array<Maybe<Daily_Active_Users_Mutation_Response>>>;
  /** update data of the table: "daily_token_usage" */
  update_daily_token_usage?: Maybe<Daily_Token_Usage_Mutation_Response>;
  /** update single row of the table: "daily_token_usage" */
  update_daily_token_usage_by_pk?: Maybe<Daily_Token_Usage>;
  /** update multiples rows of table: "daily_token_usage" */
  update_daily_token_usage_many?: Maybe<Array<Maybe<Daily_Token_Usage_Mutation_Response>>>;
  /** update data of the table: "domains" */
  update_domains?: Maybe<Domains_Mutation_Response>;
  /** update single row of the table: "domains" */
  update_domains_by_pk?: Maybe<Domains>;
  /** update multiples rows of table: "domains" */
  update_domains_many?: Maybe<Array<Maybe<Domains_Mutation_Response>>>;
  /** update data of the table: "glucose_records" */
  update_glucose_records?: Maybe<Glucose_Records_Mutation_Response>;
  /** update single row of the table: "glucose_records" */
  update_glucose_records_by_pk?: Maybe<Glucose_Records>;
  /** update multiples rows of table: "glucose_records" */
  update_glucose_records_many?: Maybe<Array<Maybe<Glucose_Records_Mutation_Response>>>;
  /** update data of the table: "glucose_standards" */
  update_glucose_standards?: Maybe<Glucose_Standards_Mutation_Response>;
  /** update single row of the table: "glucose_standards" */
  update_glucose_standards_by_pk?: Maybe<Glucose_Standards>;
  /** update multiples rows of table: "glucose_standards" */
  update_glucose_standards_many?: Maybe<Array<Maybe<Glucose_Standards_Mutation_Response>>>;
  /** update data of the table: "hooks" */
  update_hooks?: Maybe<Hooks_Mutation_Response>;
  /** update single row of the table: "hooks" */
  update_hooks_by_pk?: Maybe<Hooks>;
  /** update multiples rows of table: "hooks" */
  update_hooks_many?: Maybe<Array<Maybe<Hooks_Mutation_Response>>>;
  /** update data of the table: "lab_report_records" */
  update_lab_report_records?: Maybe<Lab_Report_Records_Mutation_Response>;
  /** update single row of the table: "lab_report_records" */
  update_lab_report_records_by_pk?: Maybe<Lab_Report_Records>;
  /** update multiples rows of table: "lab_report_records" */
  update_lab_report_records_many?: Maybe<Array<Maybe<Lab_Report_Records_Mutation_Response>>>;
  /** update data of the table: "logs" */
  update_logs?: Maybe<Logs_Mutation_Response>;
  /** update single row of the table: "logs" */
  update_logs_by_pk?: Maybe<Logs>;
  /** update multiples rows of table: "logs" */
  update_logs_many?: Maybe<Array<Maybe<Logs_Mutation_Response>>>;
  /** update data of the table: "logto_configs" */
  update_logto_configs?: Maybe<Logto_Configs_Mutation_Response>;
  /** update single row of the table: "logto_configs" */
  update_logto_configs_by_pk?: Maybe<Logto_Configs>;
  /** update multiples rows of table: "logto_configs" */
  update_logto_configs_many?: Maybe<Array<Maybe<Logto_Configs_Mutation_Response>>>;
  /** update data of the table: "medical_examination_records" */
  update_medical_examination_records?: Maybe<Medical_Examination_Records_Mutation_Response>;
  /** update single row of the table: "medical_examination_records" */
  update_medical_examination_records_by_pk?: Maybe<Medical_Examination_Records>;
  /** update multiples rows of table: "medical_examination_records" */
  update_medical_examination_records_many?: Maybe<Array<Maybe<Medical_Examination_Records_Mutation_Response>>>;
  /** update data of the table: "medication_reminders" */
  update_medication_reminders?: Maybe<Medication_Reminders_Mutation_Response>;
  /** update single row of the table: "medication_reminders" */
  update_medication_reminders_by_pk?: Maybe<Medication_Reminders>;
  /** update multiples rows of table: "medication_reminders" */
  update_medication_reminders_many?: Maybe<Array<Maybe<Medication_Reminders_Mutation_Response>>>;
  /** update data of the table: "oidc_model_instances" */
  update_oidc_model_instances?: Maybe<Oidc_Model_Instances_Mutation_Response>;
  /** update single row of the table: "oidc_model_instances" */
  update_oidc_model_instances_by_pk?: Maybe<Oidc_Model_Instances>;
  /** update multiples rows of table: "oidc_model_instances" */
  update_oidc_model_instances_many?: Maybe<Array<Maybe<Oidc_Model_Instances_Mutation_Response>>>;
  /** update data of the table: "organization_invitation_role_relations" */
  update_organization_invitation_role_relations?: Maybe<Organization_Invitation_Role_Relations_Mutation_Response>;
  /** update single row of the table: "organization_invitation_role_relations" */
  update_organization_invitation_role_relations_by_pk?: Maybe<Organization_Invitation_Role_Relations>;
  /** update multiples rows of table: "organization_invitation_role_relations" */
  update_organization_invitation_role_relations_many?: Maybe<Array<Maybe<Organization_Invitation_Role_Relations_Mutation_Response>>>;
  /** update data of the table: "organization_invitations" */
  update_organization_invitations?: Maybe<Organization_Invitations_Mutation_Response>;
  /** update single row of the table: "organization_invitations" */
  update_organization_invitations_by_pk?: Maybe<Organization_Invitations>;
  /** update multiples rows of table: "organization_invitations" */
  update_organization_invitations_many?: Maybe<Array<Maybe<Organization_Invitations_Mutation_Response>>>;
  /** update data of the table: "organization_role_scope_relations" */
  update_organization_role_scope_relations?: Maybe<Organization_Role_Scope_Relations_Mutation_Response>;
  /** update single row of the table: "organization_role_scope_relations" */
  update_organization_role_scope_relations_by_pk?: Maybe<Organization_Role_Scope_Relations>;
  /** update multiples rows of table: "organization_role_scope_relations" */
  update_organization_role_scope_relations_many?: Maybe<Array<Maybe<Organization_Role_Scope_Relations_Mutation_Response>>>;
  /** update data of the table: "organization_role_user_relations" */
  update_organization_role_user_relations?: Maybe<Organization_Role_User_Relations_Mutation_Response>;
  /** update single row of the table: "organization_role_user_relations" */
  update_organization_role_user_relations_by_pk?: Maybe<Organization_Role_User_Relations>;
  /** update multiples rows of table: "organization_role_user_relations" */
  update_organization_role_user_relations_many?: Maybe<Array<Maybe<Organization_Role_User_Relations_Mutation_Response>>>;
  /** update data of the table: "organization_roles" */
  update_organization_roles?: Maybe<Organization_Roles_Mutation_Response>;
  /** update single row of the table: "organization_roles" */
  update_organization_roles_by_pk?: Maybe<Organization_Roles>;
  /** update multiples rows of table: "organization_roles" */
  update_organization_roles_many?: Maybe<Array<Maybe<Organization_Roles_Mutation_Response>>>;
  /** update data of the table: "organization_scopes" */
  update_organization_scopes?: Maybe<Organization_Scopes_Mutation_Response>;
  /** update single row of the table: "organization_scopes" */
  update_organization_scopes_by_pk?: Maybe<Organization_Scopes>;
  /** update multiples rows of table: "organization_scopes" */
  update_organization_scopes_many?: Maybe<Array<Maybe<Organization_Scopes_Mutation_Response>>>;
  /** update data of the table: "organization_user_relations" */
  update_organization_user_relations?: Maybe<Organization_User_Relations_Mutation_Response>;
  /** update single row of the table: "organization_user_relations" */
  update_organization_user_relations_by_pk?: Maybe<Organization_User_Relations>;
  /** update multiples rows of table: "organization_user_relations" */
  update_organization_user_relations_many?: Maybe<Array<Maybe<Organization_User_Relations_Mutation_Response>>>;
  /** update data of the table: "organizations" */
  update_organizations?: Maybe<Organizations_Mutation_Response>;
  /** update single row of the table: "organizations" */
  update_organizations_by_pk?: Maybe<Organizations>;
  /** update multiples rows of table: "organizations" */
  update_organizations_many?: Maybe<Array<Maybe<Organizations_Mutation_Response>>>;
  /** update data of the table: "passcodes" */
  update_passcodes?: Maybe<Passcodes_Mutation_Response>;
  /** update single row of the table: "passcodes" */
  update_passcodes_by_pk?: Maybe<Passcodes>;
  /** update multiples rows of table: "passcodes" */
  update_passcodes_many?: Maybe<Array<Maybe<Passcodes_Mutation_Response>>>;
  /** update data of the table: "resources" */
  update_resources?: Maybe<Resources_Mutation_Response>;
  /** update single row of the table: "resources" */
  update_resources_by_pk?: Maybe<Resources>;
  /** update multiples rows of table: "resources" */
  update_resources_many?: Maybe<Array<Maybe<Resources_Mutation_Response>>>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update multiples rows of table: "roles" */
  update_roles_many?: Maybe<Array<Maybe<Roles_Mutation_Response>>>;
  /** update data of the table: "roles_scopes" */
  update_roles_scopes?: Maybe<Roles_Scopes_Mutation_Response>;
  /** update single row of the table: "roles_scopes" */
  update_roles_scopes_by_pk?: Maybe<Roles_Scopes>;
  /** update multiples rows of table: "roles_scopes" */
  update_roles_scopes_many?: Maybe<Array<Maybe<Roles_Scopes_Mutation_Response>>>;
  /** update data of the table: "scopes" */
  update_scopes?: Maybe<Scopes_Mutation_Response>;
  /** update single row of the table: "scopes" */
  update_scopes_by_pk?: Maybe<Scopes>;
  /** update multiples rows of table: "scopes" */
  update_scopes_many?: Maybe<Array<Maybe<Scopes_Mutation_Response>>>;
  /** update data of the table: "sentinel_activities" */
  update_sentinel_activities?: Maybe<Sentinel_Activities_Mutation_Response>;
  /** update single row of the table: "sentinel_activities" */
  update_sentinel_activities_by_pk?: Maybe<Sentinel_Activities>;
  /** update multiples rows of table: "sentinel_activities" */
  update_sentinel_activities_many?: Maybe<Array<Maybe<Sentinel_Activities_Mutation_Response>>>;
  /** update data of the table: "service_logs" */
  update_service_logs?: Maybe<Service_Logs_Mutation_Response>;
  /** update single row of the table: "service_logs" */
  update_service_logs_by_pk?: Maybe<Service_Logs>;
  /** update multiples rows of table: "service_logs" */
  update_service_logs_many?: Maybe<Array<Maybe<Service_Logs_Mutation_Response>>>;
  /** update data of the table: "sign_in_experiences" */
  update_sign_in_experiences?: Maybe<Sign_In_Experiences_Mutation_Response>;
  /** update single row of the table: "sign_in_experiences" */
  update_sign_in_experiences_by_pk?: Maybe<Sign_In_Experiences>;
  /** update multiples rows of table: "sign_in_experiences" */
  update_sign_in_experiences_many?: Maybe<Array<Maybe<Sign_In_Experiences_Mutation_Response>>>;
  /** update data of the table: "sms_codes" */
  update_sms_codes?: Maybe<Sms_Codes_Mutation_Response>;
  /** update single row of the table: "sms_codes" */
  update_sms_codes_by_pk?: Maybe<Sms_Codes>;
  /** update multiples rows of table: "sms_codes" */
  update_sms_codes_many?: Maybe<Array<Maybe<Sms_Codes_Mutation_Response>>>;
  /** update data of the table: "sso_connectors" */
  update_sso_connectors?: Maybe<Sso_Connectors_Mutation_Response>;
  /** update single row of the table: "sso_connectors" */
  update_sso_connectors_by_pk?: Maybe<Sso_Connectors>;
  /** update multiples rows of table: "sso_connectors" */
  update_sso_connectors_many?: Maybe<Array<Maybe<Sso_Connectors_Mutation_Response>>>;
  /** update data of the table: "systems" */
  update_systems?: Maybe<Systems_Mutation_Response>;
  /** update single row of the table: "systems" */
  update_systems_by_pk?: Maybe<Systems>;
  /** update multiples rows of table: "systems" */
  update_systems_many?: Maybe<Array<Maybe<Systems_Mutation_Response>>>;
  /** update data of the table: "tenants" */
  update_tenants?: Maybe<Tenants_Mutation_Response>;
  /** update single row of the table: "tenants" */
  update_tenants_by_pk?: Maybe<Tenants>;
  /** update multiples rows of table: "tenants" */
  update_tenants_many?: Maybe<Array<Maybe<Tenants_Mutation_Response>>>;
  /** update data of the table: "user_cholesterol_standards" */
  update_user_cholesterol_standards?: Maybe<User_Cholesterol_Standards_Mutation_Response>;
  /** update single row of the table: "user_cholesterol_standards" */
  update_user_cholesterol_standards_by_pk?: Maybe<User_Cholesterol_Standards>;
  /** update multiples rows of table: "user_cholesterol_standards" */
  update_user_cholesterol_standards_many?: Maybe<Array<Maybe<User_Cholesterol_Standards_Mutation_Response>>>;
  /** update data of the table: "user_glucose_standards" */
  update_user_glucose_standards?: Maybe<User_Glucose_Standards_Mutation_Response>;
  /** update single row of the table: "user_glucose_standards" */
  update_user_glucose_standards_by_pk?: Maybe<User_Glucose_Standards>;
  /** update multiples rows of table: "user_glucose_standards" */
  update_user_glucose_standards_many?: Maybe<Array<Maybe<User_Glucose_Standards_Mutation_Response>>>;
  /** update data of the table: "user_sso_identities" */
  update_user_sso_identities?: Maybe<User_Sso_Identities_Mutation_Response>;
  /** update single row of the table: "user_sso_identities" */
  update_user_sso_identities_by_pk?: Maybe<User_Sso_Identities>;
  /** update multiples rows of table: "user_sso_identities" */
  update_user_sso_identities_many?: Maybe<Array<Maybe<User_Sso_Identities_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "users_roles" */
  update_users_roles?: Maybe<Users_Roles_Mutation_Response>;
  /** update single row of the table: "users_roles" */
  update_users_roles_by_pk?: Maybe<Users_Roles>;
  /** update multiples rows of table: "users_roles" */
  update_users_roles_many?: Maybe<Array<Maybe<Users_Roles_Mutation_Response>>>;
  /** update data of the table: "verification_statuses" */
  update_verification_statuses?: Maybe<Verification_Statuses_Mutation_Response>;
  /** update single row of the table: "verification_statuses" */
  update_verification_statuses_by_pk?: Maybe<Verification_Statuses>;
  /** update multiples rows of table: "verification_statuses" */
  update_verification_statuses_many?: Maybe<Array<Maybe<Verification_Statuses_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootCreateArgs = {
  friendlyName?: InputMaybe<Scalars['String']['input']>;
};


/** mutation root */
export type Mutation_RootDeleteArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_AdsArgs = {
  where: Ads_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ads_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Application_Sign_In_ExperiencesArgs = {
  where: Application_Sign_In_Experiences_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Application_Sign_In_Experiences_By_PkArgs = {
  application_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Application_User_Consent_Organization_ScopesArgs = {
  where: Application_User_Consent_Organization_Scopes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Application_User_Consent_Organization_Scopes_By_PkArgs = {
  application_id: Scalars['String']['input'];
  organization_scope_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Application_User_Consent_OrganizationsArgs = {
  where: Application_User_Consent_Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Application_User_Consent_Organizations_By_PkArgs = {
  application_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Application_User_Consent_Resource_ScopesArgs = {
  where: Application_User_Consent_Resource_Scopes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Application_User_Consent_Resource_Scopes_By_PkArgs = {
  application_id: Scalars['String']['input'];
  scope_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Application_User_Consent_User_ScopesArgs = {
  where: Application_User_Consent_User_Scopes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Application_User_Consent_User_Scopes_By_PkArgs = {
  application_id: Scalars['String']['input'];
  user_scope: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ApplicationsArgs = {
  where: Applications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Applications_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Applications_RolesArgs = {
  where: Applications_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Applications_Roles_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Check_In_SettingsArgs = {
  where: Check_In_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Check_In_Settings_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Check_InsArgs = {
  where: Check_Ins_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Check_Ins_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Cholesterol_RecordsArgs = {
  where: Cholesterol_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cholesterol_Records_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Cholesterol_StandardsArgs = {
  where: Cholesterol_Standards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cholesterol_Standards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ConnectorsArgs = {
  where: Connectors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Connectors_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Custom_PhrasesArgs = {
  where: Custom_Phrases_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Custom_Phrases_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Daily_Active_UsersArgs = {
  where: Daily_Active_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Daily_Active_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Daily_Token_UsageArgs = {
  where: Daily_Token_Usage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Daily_Token_Usage_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_DomainsArgs = {
  where: Domains_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Domains_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Glucose_RecordsArgs = {
  where: Glucose_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Glucose_Records_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Glucose_StandardsArgs = {
  where: Glucose_Standards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Glucose_Standards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_HooksArgs = {
  where: Hooks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hooks_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Lab_Report_RecordsArgs = {
  where: Lab_Report_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Lab_Report_Records_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_LogsArgs = {
  where: Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Logs_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Logto_ConfigsArgs = {
  where: Logto_Configs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Logto_Configs_By_PkArgs = {
  key: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Medical_Examination_RecordsArgs = {
  where: Medical_Examination_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Medical_Examination_Records_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Medication_RemindersArgs = {
  where: Medication_Reminders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Medication_Reminders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Oidc_Model_InstancesArgs = {
  where: Oidc_Model_Instances_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Oidc_Model_Instances_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_Invitation_Role_RelationsArgs = {
  where: Organization_Invitation_Role_Relations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Invitation_Role_Relations_By_PkArgs = {
  organization_invitation_id: Scalars['String']['input'];
  organization_role_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_InvitationsArgs = {
  where: Organization_Invitations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Invitations_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_Role_Scope_RelationsArgs = {
  where: Organization_Role_Scope_Relations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Role_Scope_Relations_By_PkArgs = {
  organization_role_id: Scalars['String']['input'];
  organization_scope_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_Role_User_RelationsArgs = {
  where: Organization_Role_User_Relations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Role_User_Relations_By_PkArgs = {
  organization_id: Scalars['String']['input'];
  organization_role_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_RolesArgs = {
  where: Organization_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Roles_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_ScopesArgs = {
  where: Organization_Scopes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Scopes_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_User_RelationsArgs = {
  where: Organization_User_Relations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_User_Relations_By_PkArgs = {
  organization_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrganizationsArgs = {
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organizations_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PasscodesArgs = {
  where: Passcodes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Passcodes_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ResourcesArgs = {
  where: Resources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Resources_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Roles_ScopesArgs = {
  where: Roles_Scopes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_Scopes_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ScopesArgs = {
  where: Scopes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Scopes_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Sentinel_ActivitiesArgs = {
  where: Sentinel_Activities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sentinel_Activities_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Service_LogsArgs = {
  where: Service_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Service_Logs_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Sign_In_ExperiencesArgs = {
  where: Sign_In_Experiences_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sign_In_Experiences_By_PkArgs = {
  id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Sms_CodesArgs = {
  where: Sms_Codes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sms_Codes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Sso_ConnectorsArgs = {
  where: Sso_Connectors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sso_Connectors_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SystemsArgs = {
  where: Systems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Systems_By_PkArgs = {
  key: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TenantsArgs = {
  where: Tenants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tenants_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Cholesterol_StandardsArgs = {
  where: User_Cholesterol_Standards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Cholesterol_Standards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Glucose_StandardsArgs = {
  where: User_Glucose_Standards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Glucose_Standards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Sso_IdentitiesArgs = {
  where: User_Sso_Identities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Sso_Identities_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Users_RolesArgs = {
  where: Users_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Roles_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Verification_StatusesArgs = {
  where: Verification_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verification_Statuses_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDuplicateArgs = {
  duplicateInput: DuplicateInput;
};


/** mutation root */
export type Mutation_RootFriendlynameArgs = {
  apiKeyToModify: Scalars['String']['input'];
  friendlyName: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AdsArgs = {
  objects: Array<Ads_Insert_Input>;
  on_conflict?: InputMaybe<Ads_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ads_OneArgs = {
  object: Ads_Insert_Input;
  on_conflict?: InputMaybe<Ads_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Application_Sign_In_ExperiencesArgs = {
  objects: Array<Application_Sign_In_Experiences_Insert_Input>;
  on_conflict?: InputMaybe<Application_Sign_In_Experiences_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Application_Sign_In_Experiences_OneArgs = {
  object: Application_Sign_In_Experiences_Insert_Input;
  on_conflict?: InputMaybe<Application_Sign_In_Experiences_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Application_User_Consent_Organization_ScopesArgs = {
  objects: Array<Application_User_Consent_Organization_Scopes_Insert_Input>;
  on_conflict?: InputMaybe<Application_User_Consent_Organization_Scopes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Application_User_Consent_Organization_Scopes_OneArgs = {
  object: Application_User_Consent_Organization_Scopes_Insert_Input;
  on_conflict?: InputMaybe<Application_User_Consent_Organization_Scopes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Application_User_Consent_OrganizationsArgs = {
  objects: Array<Application_User_Consent_Organizations_Insert_Input>;
  on_conflict?: InputMaybe<Application_User_Consent_Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Application_User_Consent_Organizations_OneArgs = {
  object: Application_User_Consent_Organizations_Insert_Input;
  on_conflict?: InputMaybe<Application_User_Consent_Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Application_User_Consent_Resource_ScopesArgs = {
  objects: Array<Application_User_Consent_Resource_Scopes_Insert_Input>;
  on_conflict?: InputMaybe<Application_User_Consent_Resource_Scopes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Application_User_Consent_Resource_Scopes_OneArgs = {
  object: Application_User_Consent_Resource_Scopes_Insert_Input;
  on_conflict?: InputMaybe<Application_User_Consent_Resource_Scopes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Application_User_Consent_User_ScopesArgs = {
  objects: Array<Application_User_Consent_User_Scopes_Insert_Input>;
  on_conflict?: InputMaybe<Application_User_Consent_User_Scopes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Application_User_Consent_User_Scopes_OneArgs = {
  object: Application_User_Consent_User_Scopes_Insert_Input;
  on_conflict?: InputMaybe<Application_User_Consent_User_Scopes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ApplicationsArgs = {
  objects: Array<Applications_Insert_Input>;
  on_conflict?: InputMaybe<Applications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Applications_OneArgs = {
  object: Applications_Insert_Input;
  on_conflict?: InputMaybe<Applications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Applications_RolesArgs = {
  objects: Array<Applications_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Applications_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Applications_Roles_OneArgs = {
  object: Applications_Roles_Insert_Input;
  on_conflict?: InputMaybe<Applications_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Check_In_SettingsArgs = {
  objects: Array<Check_In_Settings_Insert_Input>;
  on_conflict?: InputMaybe<Check_In_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Check_In_Settings_OneArgs = {
  object: Check_In_Settings_Insert_Input;
  on_conflict?: InputMaybe<Check_In_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Check_InsArgs = {
  objects: Array<Check_Ins_Insert_Input>;
  on_conflict?: InputMaybe<Check_Ins_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Check_Ins_OneArgs = {
  object: Check_Ins_Insert_Input;
  on_conflict?: InputMaybe<Check_Ins_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cholesterol_RecordsArgs = {
  objects: Array<Cholesterol_Records_Insert_Input>;
  on_conflict?: InputMaybe<Cholesterol_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cholesterol_Records_OneArgs = {
  object: Cholesterol_Records_Insert_Input;
  on_conflict?: InputMaybe<Cholesterol_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cholesterol_StandardsArgs = {
  objects: Array<Cholesterol_Standards_Insert_Input>;
  on_conflict?: InputMaybe<Cholesterol_Standards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cholesterol_Standards_OneArgs = {
  object: Cholesterol_Standards_Insert_Input;
  on_conflict?: InputMaybe<Cholesterol_Standards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ConnectorsArgs = {
  objects: Array<Connectors_Insert_Input>;
  on_conflict?: InputMaybe<Connectors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Connectors_OneArgs = {
  object: Connectors_Insert_Input;
  on_conflict?: InputMaybe<Connectors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_PhrasesArgs = {
  objects: Array<Custom_Phrases_Insert_Input>;
  on_conflict?: InputMaybe<Custom_Phrases_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Phrases_OneArgs = {
  object: Custom_Phrases_Insert_Input;
  on_conflict?: InputMaybe<Custom_Phrases_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Daily_Active_UsersArgs = {
  objects: Array<Daily_Active_Users_Insert_Input>;
  on_conflict?: InputMaybe<Daily_Active_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Daily_Active_Users_OneArgs = {
  object: Daily_Active_Users_Insert_Input;
  on_conflict?: InputMaybe<Daily_Active_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Daily_Token_UsageArgs = {
  objects: Array<Daily_Token_Usage_Insert_Input>;
  on_conflict?: InputMaybe<Daily_Token_Usage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Daily_Token_Usage_OneArgs = {
  object: Daily_Token_Usage_Insert_Input;
  on_conflict?: InputMaybe<Daily_Token_Usage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DomainsArgs = {
  objects: Array<Domains_Insert_Input>;
  on_conflict?: InputMaybe<Domains_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Domains_OneArgs = {
  object: Domains_Insert_Input;
  on_conflict?: InputMaybe<Domains_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Glucose_RecordsArgs = {
  objects: Array<Glucose_Records_Insert_Input>;
  on_conflict?: InputMaybe<Glucose_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Glucose_Records_OneArgs = {
  object: Glucose_Records_Insert_Input;
  on_conflict?: InputMaybe<Glucose_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Glucose_StandardsArgs = {
  objects: Array<Glucose_Standards_Insert_Input>;
  on_conflict?: InputMaybe<Glucose_Standards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Glucose_Standards_OneArgs = {
  object: Glucose_Standards_Insert_Input;
  on_conflict?: InputMaybe<Glucose_Standards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HooksArgs = {
  objects: Array<Hooks_Insert_Input>;
  on_conflict?: InputMaybe<Hooks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hooks_OneArgs = {
  object: Hooks_Insert_Input;
  on_conflict?: InputMaybe<Hooks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lab_Report_RecordsArgs = {
  objects: Array<Lab_Report_Records_Insert_Input>;
  on_conflict?: InputMaybe<Lab_Report_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lab_Report_Records_OneArgs = {
  object: Lab_Report_Records_Insert_Input;
  on_conflict?: InputMaybe<Lab_Report_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LogsArgs = {
  objects: Array<Logs_Insert_Input>;
  on_conflict?: InputMaybe<Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Logs_OneArgs = {
  object: Logs_Insert_Input;
  on_conflict?: InputMaybe<Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Logto_ConfigsArgs = {
  objects: Array<Logto_Configs_Insert_Input>;
  on_conflict?: InputMaybe<Logto_Configs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Logto_Configs_OneArgs = {
  object: Logto_Configs_Insert_Input;
  on_conflict?: InputMaybe<Logto_Configs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Medical_Examination_RecordsArgs = {
  objects: Array<Medical_Examination_Records_Insert_Input>;
  on_conflict?: InputMaybe<Medical_Examination_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Medical_Examination_Records_OneArgs = {
  object: Medical_Examination_Records_Insert_Input;
  on_conflict?: InputMaybe<Medical_Examination_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Medication_RemindersArgs = {
  objects: Array<Medication_Reminders_Insert_Input>;
  on_conflict?: InputMaybe<Medication_Reminders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Medication_Reminders_OneArgs = {
  object: Medication_Reminders_Insert_Input;
  on_conflict?: InputMaybe<Medication_Reminders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Oidc_Model_InstancesArgs = {
  objects: Array<Oidc_Model_Instances_Insert_Input>;
  on_conflict?: InputMaybe<Oidc_Model_Instances_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Oidc_Model_Instances_OneArgs = {
  object: Oidc_Model_Instances_Insert_Input;
  on_conflict?: InputMaybe<Oidc_Model_Instances_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Invitation_Role_RelationsArgs = {
  objects: Array<Organization_Invitation_Role_Relations_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Invitation_Role_Relations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Invitation_Role_Relations_OneArgs = {
  object: Organization_Invitation_Role_Relations_Insert_Input;
  on_conflict?: InputMaybe<Organization_Invitation_Role_Relations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_InvitationsArgs = {
  objects: Array<Organization_Invitations_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Invitations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Invitations_OneArgs = {
  object: Organization_Invitations_Insert_Input;
  on_conflict?: InputMaybe<Organization_Invitations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Role_Scope_RelationsArgs = {
  objects: Array<Organization_Role_Scope_Relations_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Role_Scope_Relations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Role_Scope_Relations_OneArgs = {
  object: Organization_Role_Scope_Relations_Insert_Input;
  on_conflict?: InputMaybe<Organization_Role_Scope_Relations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Role_User_RelationsArgs = {
  objects: Array<Organization_Role_User_Relations_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Role_User_Relations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Role_User_Relations_OneArgs = {
  object: Organization_Role_User_Relations_Insert_Input;
  on_conflict?: InputMaybe<Organization_Role_User_Relations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_RolesArgs = {
  objects: Array<Organization_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Roles_OneArgs = {
  object: Organization_Roles_Insert_Input;
  on_conflict?: InputMaybe<Organization_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_ScopesArgs = {
  objects: Array<Organization_Scopes_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Scopes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Scopes_OneArgs = {
  object: Organization_Scopes_Insert_Input;
  on_conflict?: InputMaybe<Organization_Scopes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_User_RelationsArgs = {
  objects: Array<Organization_User_Relations_Insert_Input>;
  on_conflict?: InputMaybe<Organization_User_Relations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_User_Relations_OneArgs = {
  object: Organization_User_Relations_Insert_Input;
  on_conflict?: InputMaybe<Organization_User_Relations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganizationsArgs = {
  objects: Array<Organizations_Insert_Input>;
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organizations_OneArgs = {
  object: Organizations_Insert_Input;
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PasscodesArgs = {
  objects: Array<Passcodes_Insert_Input>;
  on_conflict?: InputMaybe<Passcodes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Passcodes_OneArgs = {
  object: Passcodes_Insert_Input;
  on_conflict?: InputMaybe<Passcodes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ResourcesArgs = {
  objects: Array<Resources_Insert_Input>;
  on_conflict?: InputMaybe<Resources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Resources_OneArgs = {
  object: Resources_Insert_Input;
  on_conflict?: InputMaybe<Resources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_ScopesArgs = {
  objects: Array<Roles_Scopes_Insert_Input>;
  on_conflict?: InputMaybe<Roles_Scopes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_Scopes_OneArgs = {
  object: Roles_Scopes_Insert_Input;
  on_conflict?: InputMaybe<Roles_Scopes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ScopesArgs = {
  objects: Array<Scopes_Insert_Input>;
  on_conflict?: InputMaybe<Scopes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Scopes_OneArgs = {
  object: Scopes_Insert_Input;
  on_conflict?: InputMaybe<Scopes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sentinel_ActivitiesArgs = {
  objects: Array<Sentinel_Activities_Insert_Input>;
  on_conflict?: InputMaybe<Sentinel_Activities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sentinel_Activities_OneArgs = {
  object: Sentinel_Activities_Insert_Input;
  on_conflict?: InputMaybe<Sentinel_Activities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Service_LogsArgs = {
  objects: Array<Service_Logs_Insert_Input>;
  on_conflict?: InputMaybe<Service_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Service_Logs_OneArgs = {
  object: Service_Logs_Insert_Input;
  on_conflict?: InputMaybe<Service_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sign_In_ExperiencesArgs = {
  objects: Array<Sign_In_Experiences_Insert_Input>;
  on_conflict?: InputMaybe<Sign_In_Experiences_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sign_In_Experiences_OneArgs = {
  object: Sign_In_Experiences_Insert_Input;
  on_conflict?: InputMaybe<Sign_In_Experiences_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sms_CodesArgs = {
  objects: Array<Sms_Codes_Insert_Input>;
  on_conflict?: InputMaybe<Sms_Codes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sms_Codes_OneArgs = {
  object: Sms_Codes_Insert_Input;
  on_conflict?: InputMaybe<Sms_Codes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sso_ConnectorsArgs = {
  objects: Array<Sso_Connectors_Insert_Input>;
  on_conflict?: InputMaybe<Sso_Connectors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sso_Connectors_OneArgs = {
  object: Sso_Connectors_Insert_Input;
  on_conflict?: InputMaybe<Sso_Connectors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SystemsArgs = {
  objects: Array<Systems_Insert_Input>;
  on_conflict?: InputMaybe<Systems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Systems_OneArgs = {
  object: Systems_Insert_Input;
  on_conflict?: InputMaybe<Systems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TenantsArgs = {
  objects: Array<Tenants_Insert_Input>;
  on_conflict?: InputMaybe<Tenants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tenants_OneArgs = {
  object: Tenants_Insert_Input;
  on_conflict?: InputMaybe<Tenants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Cholesterol_StandardsArgs = {
  objects: Array<User_Cholesterol_Standards_Insert_Input>;
  on_conflict?: InputMaybe<User_Cholesterol_Standards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Cholesterol_Standards_OneArgs = {
  object: User_Cholesterol_Standards_Insert_Input;
  on_conflict?: InputMaybe<User_Cholesterol_Standards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Glucose_StandardsArgs = {
  objects: Array<User_Glucose_Standards_Insert_Input>;
  on_conflict?: InputMaybe<User_Glucose_Standards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Glucose_Standards_OneArgs = {
  object: User_Glucose_Standards_Insert_Input;
  on_conflict?: InputMaybe<User_Glucose_Standards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Sso_IdentitiesArgs = {
  objects: Array<User_Sso_Identities_Insert_Input>;
  on_conflict?: InputMaybe<User_Sso_Identities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Sso_Identities_OneArgs = {
  object: User_Sso_Identities_Insert_Input;
  on_conflict?: InputMaybe<User_Sso_Identities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_RolesArgs = {
  objects: Array<Users_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Users_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Roles_OneArgs = {
  object: Users_Roles_Insert_Input;
  on_conflict?: InputMaybe<Users_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_StatusesArgs = {
  objects: Array<Verification_Statuses_Insert_Input>;
  on_conflict?: InputMaybe<Verification_Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_Statuses_OneArgs = {
  object: Verification_Statuses_Insert_Input;
  on_conflict?: InputMaybe<Verification_Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootModifyfileArgs = {
  allowedDownloads?: InputMaybe<Scalars['Int']['input']>;
  expiryTimestamp?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  originalPassword?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


/** mutation root */
export type Mutation_RootModifypermissionArgs = {
  apiKeyToModify: Scalars['String']['input'];
  permission: Permission;
  permissionModifier: PermissionModifier;
};


/** mutation root */
export type Mutation_RootS3UploadArgs = {
  file: Scalars['Upload']['input'];
};


/** mutation root */
export type Mutation_RootUpdate_AdsArgs = {
  _inc?: InputMaybe<Ads_Inc_Input>;
  _set?: InputMaybe<Ads_Set_Input>;
  where: Ads_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ads_By_PkArgs = {
  _inc?: InputMaybe<Ads_Inc_Input>;
  _set?: InputMaybe<Ads_Set_Input>;
  pk_columns: Ads_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ads_ManyArgs = {
  updates: Array<Ads_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Application_Sign_In_ExperiencesArgs = {
  _append?: InputMaybe<Application_Sign_In_Experiences_Append_Input>;
  _delete_at_path?: InputMaybe<Application_Sign_In_Experiences_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Application_Sign_In_Experiences_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Application_Sign_In_Experiences_Delete_Key_Input>;
  _prepend?: InputMaybe<Application_Sign_In_Experiences_Prepend_Input>;
  _set?: InputMaybe<Application_Sign_In_Experiences_Set_Input>;
  where: Application_Sign_In_Experiences_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Application_Sign_In_Experiences_By_PkArgs = {
  _append?: InputMaybe<Application_Sign_In_Experiences_Append_Input>;
  _delete_at_path?: InputMaybe<Application_Sign_In_Experiences_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Application_Sign_In_Experiences_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Application_Sign_In_Experiences_Delete_Key_Input>;
  _prepend?: InputMaybe<Application_Sign_In_Experiences_Prepend_Input>;
  _set?: InputMaybe<Application_Sign_In_Experiences_Set_Input>;
  pk_columns: Application_Sign_In_Experiences_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Application_Sign_In_Experiences_ManyArgs = {
  updates: Array<Application_Sign_In_Experiences_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Application_User_Consent_Organization_ScopesArgs = {
  _set?: InputMaybe<Application_User_Consent_Organization_Scopes_Set_Input>;
  where: Application_User_Consent_Organization_Scopes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Application_User_Consent_Organization_Scopes_By_PkArgs = {
  _set?: InputMaybe<Application_User_Consent_Organization_Scopes_Set_Input>;
  pk_columns: Application_User_Consent_Organization_Scopes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Application_User_Consent_Organization_Scopes_ManyArgs = {
  updates: Array<Application_User_Consent_Organization_Scopes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Application_User_Consent_OrganizationsArgs = {
  _set?: InputMaybe<Application_User_Consent_Organizations_Set_Input>;
  where: Application_User_Consent_Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Application_User_Consent_Organizations_By_PkArgs = {
  _set?: InputMaybe<Application_User_Consent_Organizations_Set_Input>;
  pk_columns: Application_User_Consent_Organizations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Application_User_Consent_Organizations_ManyArgs = {
  updates: Array<Application_User_Consent_Organizations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Application_User_Consent_Resource_ScopesArgs = {
  _set?: InputMaybe<Application_User_Consent_Resource_Scopes_Set_Input>;
  where: Application_User_Consent_Resource_Scopes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Application_User_Consent_Resource_Scopes_By_PkArgs = {
  _set?: InputMaybe<Application_User_Consent_Resource_Scopes_Set_Input>;
  pk_columns: Application_User_Consent_Resource_Scopes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Application_User_Consent_Resource_Scopes_ManyArgs = {
  updates: Array<Application_User_Consent_Resource_Scopes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Application_User_Consent_User_ScopesArgs = {
  _set?: InputMaybe<Application_User_Consent_User_Scopes_Set_Input>;
  where: Application_User_Consent_User_Scopes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Application_User_Consent_User_Scopes_By_PkArgs = {
  _set?: InputMaybe<Application_User_Consent_User_Scopes_Set_Input>;
  pk_columns: Application_User_Consent_User_Scopes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Application_User_Consent_User_Scopes_ManyArgs = {
  updates: Array<Application_User_Consent_User_Scopes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ApplicationsArgs = {
  _append?: InputMaybe<Applications_Append_Input>;
  _delete_at_path?: InputMaybe<Applications_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Applications_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Applications_Delete_Key_Input>;
  _prepend?: InputMaybe<Applications_Prepend_Input>;
  _set?: InputMaybe<Applications_Set_Input>;
  where: Applications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Applications_By_PkArgs = {
  _append?: InputMaybe<Applications_Append_Input>;
  _delete_at_path?: InputMaybe<Applications_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Applications_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Applications_Delete_Key_Input>;
  _prepend?: InputMaybe<Applications_Prepend_Input>;
  _set?: InputMaybe<Applications_Set_Input>;
  pk_columns: Applications_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Applications_ManyArgs = {
  updates: Array<Applications_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Applications_RolesArgs = {
  _set?: InputMaybe<Applications_Roles_Set_Input>;
  where: Applications_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Applications_Roles_By_PkArgs = {
  _set?: InputMaybe<Applications_Roles_Set_Input>;
  pk_columns: Applications_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Applications_Roles_ManyArgs = {
  updates: Array<Applications_Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Check_In_SettingsArgs = {
  _inc?: InputMaybe<Check_In_Settings_Inc_Input>;
  _set?: InputMaybe<Check_In_Settings_Set_Input>;
  where: Check_In_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Check_In_Settings_By_PkArgs = {
  _inc?: InputMaybe<Check_In_Settings_Inc_Input>;
  _set?: InputMaybe<Check_In_Settings_Set_Input>;
  pk_columns: Check_In_Settings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Check_In_Settings_ManyArgs = {
  updates: Array<Check_In_Settings_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Check_InsArgs = {
  _inc?: InputMaybe<Check_Ins_Inc_Input>;
  _set?: InputMaybe<Check_Ins_Set_Input>;
  where: Check_Ins_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Check_Ins_By_PkArgs = {
  _inc?: InputMaybe<Check_Ins_Inc_Input>;
  _set?: InputMaybe<Check_Ins_Set_Input>;
  pk_columns: Check_Ins_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Check_Ins_ManyArgs = {
  updates: Array<Check_Ins_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Cholesterol_RecordsArgs = {
  _append?: InputMaybe<Cholesterol_Records_Append_Input>;
  _delete_at_path?: InputMaybe<Cholesterol_Records_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Cholesterol_Records_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Cholesterol_Records_Delete_Key_Input>;
  _inc?: InputMaybe<Cholesterol_Records_Inc_Input>;
  _prepend?: InputMaybe<Cholesterol_Records_Prepend_Input>;
  _set?: InputMaybe<Cholesterol_Records_Set_Input>;
  where: Cholesterol_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cholesterol_Records_By_PkArgs = {
  _append?: InputMaybe<Cholesterol_Records_Append_Input>;
  _delete_at_path?: InputMaybe<Cholesterol_Records_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Cholesterol_Records_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Cholesterol_Records_Delete_Key_Input>;
  _inc?: InputMaybe<Cholesterol_Records_Inc_Input>;
  _prepend?: InputMaybe<Cholesterol_Records_Prepend_Input>;
  _set?: InputMaybe<Cholesterol_Records_Set_Input>;
  pk_columns: Cholesterol_Records_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cholesterol_Records_ManyArgs = {
  updates: Array<Cholesterol_Records_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Cholesterol_StandardsArgs = {
  _inc?: InputMaybe<Cholesterol_Standards_Inc_Input>;
  _set?: InputMaybe<Cholesterol_Standards_Set_Input>;
  where: Cholesterol_Standards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cholesterol_Standards_By_PkArgs = {
  _inc?: InputMaybe<Cholesterol_Standards_Inc_Input>;
  _set?: InputMaybe<Cholesterol_Standards_Set_Input>;
  pk_columns: Cholesterol_Standards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cholesterol_Standards_ManyArgs = {
  updates: Array<Cholesterol_Standards_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ConnectorsArgs = {
  _append?: InputMaybe<Connectors_Append_Input>;
  _delete_at_path?: InputMaybe<Connectors_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Connectors_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Connectors_Delete_Key_Input>;
  _prepend?: InputMaybe<Connectors_Prepend_Input>;
  _set?: InputMaybe<Connectors_Set_Input>;
  where: Connectors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Connectors_By_PkArgs = {
  _append?: InputMaybe<Connectors_Append_Input>;
  _delete_at_path?: InputMaybe<Connectors_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Connectors_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Connectors_Delete_Key_Input>;
  _prepend?: InputMaybe<Connectors_Prepend_Input>;
  _set?: InputMaybe<Connectors_Set_Input>;
  pk_columns: Connectors_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Connectors_ManyArgs = {
  updates: Array<Connectors_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_PhrasesArgs = {
  _append?: InputMaybe<Custom_Phrases_Append_Input>;
  _delete_at_path?: InputMaybe<Custom_Phrases_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Custom_Phrases_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Custom_Phrases_Delete_Key_Input>;
  _prepend?: InputMaybe<Custom_Phrases_Prepend_Input>;
  _set?: InputMaybe<Custom_Phrases_Set_Input>;
  where: Custom_Phrases_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Phrases_By_PkArgs = {
  _append?: InputMaybe<Custom_Phrases_Append_Input>;
  _delete_at_path?: InputMaybe<Custom_Phrases_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Custom_Phrases_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Custom_Phrases_Delete_Key_Input>;
  _prepend?: InputMaybe<Custom_Phrases_Prepend_Input>;
  _set?: InputMaybe<Custom_Phrases_Set_Input>;
  pk_columns: Custom_Phrases_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Phrases_ManyArgs = {
  updates: Array<Custom_Phrases_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Daily_Active_UsersArgs = {
  _set?: InputMaybe<Daily_Active_Users_Set_Input>;
  where: Daily_Active_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Daily_Active_Users_By_PkArgs = {
  _set?: InputMaybe<Daily_Active_Users_Set_Input>;
  pk_columns: Daily_Active_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Daily_Active_Users_ManyArgs = {
  updates: Array<Daily_Active_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Daily_Token_UsageArgs = {
  _inc?: InputMaybe<Daily_Token_Usage_Inc_Input>;
  _set?: InputMaybe<Daily_Token_Usage_Set_Input>;
  where: Daily_Token_Usage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Daily_Token_Usage_By_PkArgs = {
  _inc?: InputMaybe<Daily_Token_Usage_Inc_Input>;
  _set?: InputMaybe<Daily_Token_Usage_Set_Input>;
  pk_columns: Daily_Token_Usage_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Daily_Token_Usage_ManyArgs = {
  updates: Array<Daily_Token_Usage_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DomainsArgs = {
  _append?: InputMaybe<Domains_Append_Input>;
  _delete_at_path?: InputMaybe<Domains_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Domains_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Domains_Delete_Key_Input>;
  _prepend?: InputMaybe<Domains_Prepend_Input>;
  _set?: InputMaybe<Domains_Set_Input>;
  where: Domains_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Domains_By_PkArgs = {
  _append?: InputMaybe<Domains_Append_Input>;
  _delete_at_path?: InputMaybe<Domains_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Domains_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Domains_Delete_Key_Input>;
  _prepend?: InputMaybe<Domains_Prepend_Input>;
  _set?: InputMaybe<Domains_Set_Input>;
  pk_columns: Domains_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Domains_ManyArgs = {
  updates: Array<Domains_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Glucose_RecordsArgs = {
  _inc?: InputMaybe<Glucose_Records_Inc_Input>;
  _set?: InputMaybe<Glucose_Records_Set_Input>;
  where: Glucose_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Glucose_Records_By_PkArgs = {
  _inc?: InputMaybe<Glucose_Records_Inc_Input>;
  _set?: InputMaybe<Glucose_Records_Set_Input>;
  pk_columns: Glucose_Records_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Glucose_Records_ManyArgs = {
  updates: Array<Glucose_Records_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Glucose_StandardsArgs = {
  _inc?: InputMaybe<Glucose_Standards_Inc_Input>;
  _set?: InputMaybe<Glucose_Standards_Set_Input>;
  where: Glucose_Standards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Glucose_Standards_By_PkArgs = {
  _inc?: InputMaybe<Glucose_Standards_Inc_Input>;
  _set?: InputMaybe<Glucose_Standards_Set_Input>;
  pk_columns: Glucose_Standards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Glucose_Standards_ManyArgs = {
  updates: Array<Glucose_Standards_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_HooksArgs = {
  _append?: InputMaybe<Hooks_Append_Input>;
  _delete_at_path?: InputMaybe<Hooks_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Hooks_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Hooks_Delete_Key_Input>;
  _prepend?: InputMaybe<Hooks_Prepend_Input>;
  _set?: InputMaybe<Hooks_Set_Input>;
  where: Hooks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hooks_By_PkArgs = {
  _append?: InputMaybe<Hooks_Append_Input>;
  _delete_at_path?: InputMaybe<Hooks_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Hooks_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Hooks_Delete_Key_Input>;
  _prepend?: InputMaybe<Hooks_Prepend_Input>;
  _set?: InputMaybe<Hooks_Set_Input>;
  pk_columns: Hooks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hooks_ManyArgs = {
  updates: Array<Hooks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Lab_Report_RecordsArgs = {
  _inc?: InputMaybe<Lab_Report_Records_Inc_Input>;
  _set?: InputMaybe<Lab_Report_Records_Set_Input>;
  where: Lab_Report_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Lab_Report_Records_By_PkArgs = {
  _inc?: InputMaybe<Lab_Report_Records_Inc_Input>;
  _set?: InputMaybe<Lab_Report_Records_Set_Input>;
  pk_columns: Lab_Report_Records_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Lab_Report_Records_ManyArgs = {
  updates: Array<Lab_Report_Records_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LogsArgs = {
  _append?: InputMaybe<Logs_Append_Input>;
  _delete_at_path?: InputMaybe<Logs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Logs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Logs_Delete_Key_Input>;
  _prepend?: InputMaybe<Logs_Prepend_Input>;
  _set?: InputMaybe<Logs_Set_Input>;
  where: Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Logs_By_PkArgs = {
  _append?: InputMaybe<Logs_Append_Input>;
  _delete_at_path?: InputMaybe<Logs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Logs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Logs_Delete_Key_Input>;
  _prepend?: InputMaybe<Logs_Prepend_Input>;
  _set?: InputMaybe<Logs_Set_Input>;
  pk_columns: Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Logs_ManyArgs = {
  updates: Array<Logs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Logto_ConfigsArgs = {
  _append?: InputMaybe<Logto_Configs_Append_Input>;
  _delete_at_path?: InputMaybe<Logto_Configs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Logto_Configs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Logto_Configs_Delete_Key_Input>;
  _prepend?: InputMaybe<Logto_Configs_Prepend_Input>;
  _set?: InputMaybe<Logto_Configs_Set_Input>;
  where: Logto_Configs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Logto_Configs_By_PkArgs = {
  _append?: InputMaybe<Logto_Configs_Append_Input>;
  _delete_at_path?: InputMaybe<Logto_Configs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Logto_Configs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Logto_Configs_Delete_Key_Input>;
  _prepend?: InputMaybe<Logto_Configs_Prepend_Input>;
  _set?: InputMaybe<Logto_Configs_Set_Input>;
  pk_columns: Logto_Configs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Logto_Configs_ManyArgs = {
  updates: Array<Logto_Configs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Medical_Examination_RecordsArgs = {
  _set?: InputMaybe<Medical_Examination_Records_Set_Input>;
  where: Medical_Examination_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Medical_Examination_Records_By_PkArgs = {
  _set?: InputMaybe<Medical_Examination_Records_Set_Input>;
  pk_columns: Medical_Examination_Records_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Medical_Examination_Records_ManyArgs = {
  updates: Array<Medical_Examination_Records_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Medication_RemindersArgs = {
  _inc?: InputMaybe<Medication_Reminders_Inc_Input>;
  _set?: InputMaybe<Medication_Reminders_Set_Input>;
  where: Medication_Reminders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Medication_Reminders_By_PkArgs = {
  _inc?: InputMaybe<Medication_Reminders_Inc_Input>;
  _set?: InputMaybe<Medication_Reminders_Set_Input>;
  pk_columns: Medication_Reminders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Medication_Reminders_ManyArgs = {
  updates: Array<Medication_Reminders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Oidc_Model_InstancesArgs = {
  _append?: InputMaybe<Oidc_Model_Instances_Append_Input>;
  _delete_at_path?: InputMaybe<Oidc_Model_Instances_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Oidc_Model_Instances_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Oidc_Model_Instances_Delete_Key_Input>;
  _prepend?: InputMaybe<Oidc_Model_Instances_Prepend_Input>;
  _set?: InputMaybe<Oidc_Model_Instances_Set_Input>;
  where: Oidc_Model_Instances_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Oidc_Model_Instances_By_PkArgs = {
  _append?: InputMaybe<Oidc_Model_Instances_Append_Input>;
  _delete_at_path?: InputMaybe<Oidc_Model_Instances_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Oidc_Model_Instances_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Oidc_Model_Instances_Delete_Key_Input>;
  _prepend?: InputMaybe<Oidc_Model_Instances_Prepend_Input>;
  _set?: InputMaybe<Oidc_Model_Instances_Set_Input>;
  pk_columns: Oidc_Model_Instances_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Oidc_Model_Instances_ManyArgs = {
  updates: Array<Oidc_Model_Instances_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Invitation_Role_RelationsArgs = {
  _set?: InputMaybe<Organization_Invitation_Role_Relations_Set_Input>;
  where: Organization_Invitation_Role_Relations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Invitation_Role_Relations_By_PkArgs = {
  _set?: InputMaybe<Organization_Invitation_Role_Relations_Set_Input>;
  pk_columns: Organization_Invitation_Role_Relations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Invitation_Role_Relations_ManyArgs = {
  updates: Array<Organization_Invitation_Role_Relations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_InvitationsArgs = {
  _set?: InputMaybe<Organization_Invitations_Set_Input>;
  where: Organization_Invitations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Invitations_By_PkArgs = {
  _set?: InputMaybe<Organization_Invitations_Set_Input>;
  pk_columns: Organization_Invitations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Invitations_ManyArgs = {
  updates: Array<Organization_Invitations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Role_Scope_RelationsArgs = {
  _set?: InputMaybe<Organization_Role_Scope_Relations_Set_Input>;
  where: Organization_Role_Scope_Relations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Role_Scope_Relations_By_PkArgs = {
  _set?: InputMaybe<Organization_Role_Scope_Relations_Set_Input>;
  pk_columns: Organization_Role_Scope_Relations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Role_Scope_Relations_ManyArgs = {
  updates: Array<Organization_Role_Scope_Relations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Role_User_RelationsArgs = {
  _set?: InputMaybe<Organization_Role_User_Relations_Set_Input>;
  where: Organization_Role_User_Relations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Role_User_Relations_By_PkArgs = {
  _set?: InputMaybe<Organization_Role_User_Relations_Set_Input>;
  pk_columns: Organization_Role_User_Relations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Role_User_Relations_ManyArgs = {
  updates: Array<Organization_Role_User_Relations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_RolesArgs = {
  _set?: InputMaybe<Organization_Roles_Set_Input>;
  where: Organization_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Roles_By_PkArgs = {
  _set?: InputMaybe<Organization_Roles_Set_Input>;
  pk_columns: Organization_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Roles_ManyArgs = {
  updates: Array<Organization_Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_ScopesArgs = {
  _set?: InputMaybe<Organization_Scopes_Set_Input>;
  where: Organization_Scopes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Scopes_By_PkArgs = {
  _set?: InputMaybe<Organization_Scopes_Set_Input>;
  pk_columns: Organization_Scopes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Scopes_ManyArgs = {
  updates: Array<Organization_Scopes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_User_RelationsArgs = {
  _set?: InputMaybe<Organization_User_Relations_Set_Input>;
  where: Organization_User_Relations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_User_Relations_By_PkArgs = {
  _set?: InputMaybe<Organization_User_Relations_Set_Input>;
  pk_columns: Organization_User_Relations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_User_Relations_ManyArgs = {
  updates: Array<Organization_User_Relations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationsArgs = {
  _set?: InputMaybe<Organizations_Set_Input>;
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organizations_By_PkArgs = {
  _set?: InputMaybe<Organizations_Set_Input>;
  pk_columns: Organizations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organizations_ManyArgs = {
  updates: Array<Organizations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PasscodesArgs = {
  _inc?: InputMaybe<Passcodes_Inc_Input>;
  _set?: InputMaybe<Passcodes_Set_Input>;
  where: Passcodes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Passcodes_By_PkArgs = {
  _inc?: InputMaybe<Passcodes_Inc_Input>;
  _set?: InputMaybe<Passcodes_Set_Input>;
  pk_columns: Passcodes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Passcodes_ManyArgs = {
  updates: Array<Passcodes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ResourcesArgs = {
  _inc?: InputMaybe<Resources_Inc_Input>;
  _set?: InputMaybe<Resources_Set_Input>;
  where: Resources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Resources_By_PkArgs = {
  _inc?: InputMaybe<Resources_Inc_Input>;
  _set?: InputMaybe<Resources_Set_Input>;
  pk_columns: Resources_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Resources_ManyArgs = {
  updates: Array<Resources_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_ManyArgs = {
  updates: Array<Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_ScopesArgs = {
  _set?: InputMaybe<Roles_Scopes_Set_Input>;
  where: Roles_Scopes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_Scopes_By_PkArgs = {
  _set?: InputMaybe<Roles_Scopes_Set_Input>;
  pk_columns: Roles_Scopes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_Scopes_ManyArgs = {
  updates: Array<Roles_Scopes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ScopesArgs = {
  _set?: InputMaybe<Scopes_Set_Input>;
  where: Scopes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Scopes_By_PkArgs = {
  _set?: InputMaybe<Scopes_Set_Input>;
  pk_columns: Scopes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Scopes_ManyArgs = {
  updates: Array<Scopes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Sentinel_ActivitiesArgs = {
  _append?: InputMaybe<Sentinel_Activities_Append_Input>;
  _delete_at_path?: InputMaybe<Sentinel_Activities_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Sentinel_Activities_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Sentinel_Activities_Delete_Key_Input>;
  _prepend?: InputMaybe<Sentinel_Activities_Prepend_Input>;
  _set?: InputMaybe<Sentinel_Activities_Set_Input>;
  where: Sentinel_Activities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sentinel_Activities_By_PkArgs = {
  _append?: InputMaybe<Sentinel_Activities_Append_Input>;
  _delete_at_path?: InputMaybe<Sentinel_Activities_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Sentinel_Activities_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Sentinel_Activities_Delete_Key_Input>;
  _prepend?: InputMaybe<Sentinel_Activities_Prepend_Input>;
  _set?: InputMaybe<Sentinel_Activities_Set_Input>;
  pk_columns: Sentinel_Activities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sentinel_Activities_ManyArgs = {
  updates: Array<Sentinel_Activities_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Service_LogsArgs = {
  _append?: InputMaybe<Service_Logs_Append_Input>;
  _delete_at_path?: InputMaybe<Service_Logs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Service_Logs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Service_Logs_Delete_Key_Input>;
  _prepend?: InputMaybe<Service_Logs_Prepend_Input>;
  _set?: InputMaybe<Service_Logs_Set_Input>;
  where: Service_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Service_Logs_By_PkArgs = {
  _append?: InputMaybe<Service_Logs_Append_Input>;
  _delete_at_path?: InputMaybe<Service_Logs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Service_Logs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Service_Logs_Delete_Key_Input>;
  _prepend?: InputMaybe<Service_Logs_Prepend_Input>;
  _set?: InputMaybe<Service_Logs_Set_Input>;
  pk_columns: Service_Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Service_Logs_ManyArgs = {
  updates: Array<Service_Logs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Sign_In_ExperiencesArgs = {
  _append?: InputMaybe<Sign_In_Experiences_Append_Input>;
  _delete_at_path?: InputMaybe<Sign_In_Experiences_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Sign_In_Experiences_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Sign_In_Experiences_Delete_Key_Input>;
  _prepend?: InputMaybe<Sign_In_Experiences_Prepend_Input>;
  _set?: InputMaybe<Sign_In_Experiences_Set_Input>;
  where: Sign_In_Experiences_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sign_In_Experiences_By_PkArgs = {
  _append?: InputMaybe<Sign_In_Experiences_Append_Input>;
  _delete_at_path?: InputMaybe<Sign_In_Experiences_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Sign_In_Experiences_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Sign_In_Experiences_Delete_Key_Input>;
  _prepend?: InputMaybe<Sign_In_Experiences_Prepend_Input>;
  _set?: InputMaybe<Sign_In_Experiences_Set_Input>;
  pk_columns: Sign_In_Experiences_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sign_In_Experiences_ManyArgs = {
  updates: Array<Sign_In_Experiences_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Sms_CodesArgs = {
  _set?: InputMaybe<Sms_Codes_Set_Input>;
  where: Sms_Codes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sms_Codes_By_PkArgs = {
  _set?: InputMaybe<Sms_Codes_Set_Input>;
  pk_columns: Sms_Codes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sms_Codes_ManyArgs = {
  updates: Array<Sms_Codes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Sso_ConnectorsArgs = {
  _append?: InputMaybe<Sso_Connectors_Append_Input>;
  _delete_at_path?: InputMaybe<Sso_Connectors_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Sso_Connectors_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Sso_Connectors_Delete_Key_Input>;
  _prepend?: InputMaybe<Sso_Connectors_Prepend_Input>;
  _set?: InputMaybe<Sso_Connectors_Set_Input>;
  where: Sso_Connectors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sso_Connectors_By_PkArgs = {
  _append?: InputMaybe<Sso_Connectors_Append_Input>;
  _delete_at_path?: InputMaybe<Sso_Connectors_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Sso_Connectors_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Sso_Connectors_Delete_Key_Input>;
  _prepend?: InputMaybe<Sso_Connectors_Prepend_Input>;
  _set?: InputMaybe<Sso_Connectors_Set_Input>;
  pk_columns: Sso_Connectors_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sso_Connectors_ManyArgs = {
  updates: Array<Sso_Connectors_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SystemsArgs = {
  _append?: InputMaybe<Systems_Append_Input>;
  _delete_at_path?: InputMaybe<Systems_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Systems_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Systems_Delete_Key_Input>;
  _prepend?: InputMaybe<Systems_Prepend_Input>;
  _set?: InputMaybe<Systems_Set_Input>;
  where: Systems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Systems_By_PkArgs = {
  _append?: InputMaybe<Systems_Append_Input>;
  _delete_at_path?: InputMaybe<Systems_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Systems_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Systems_Delete_Key_Input>;
  _prepend?: InputMaybe<Systems_Prepend_Input>;
  _set?: InputMaybe<Systems_Set_Input>;
  pk_columns: Systems_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Systems_ManyArgs = {
  updates: Array<Systems_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TenantsArgs = {
  _set?: InputMaybe<Tenants_Set_Input>;
  where: Tenants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tenants_By_PkArgs = {
  _set?: InputMaybe<Tenants_Set_Input>;
  pk_columns: Tenants_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tenants_ManyArgs = {
  updates: Array<Tenants_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Cholesterol_StandardsArgs = {
  _inc?: InputMaybe<User_Cholesterol_Standards_Inc_Input>;
  _set?: InputMaybe<User_Cholesterol_Standards_Set_Input>;
  where: User_Cholesterol_Standards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Cholesterol_Standards_By_PkArgs = {
  _inc?: InputMaybe<User_Cholesterol_Standards_Inc_Input>;
  _set?: InputMaybe<User_Cholesterol_Standards_Set_Input>;
  pk_columns: User_Cholesterol_Standards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Cholesterol_Standards_ManyArgs = {
  updates: Array<User_Cholesterol_Standards_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Glucose_StandardsArgs = {
  _inc?: InputMaybe<User_Glucose_Standards_Inc_Input>;
  _set?: InputMaybe<User_Glucose_Standards_Set_Input>;
  where: User_Glucose_Standards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Glucose_Standards_By_PkArgs = {
  _inc?: InputMaybe<User_Glucose_Standards_Inc_Input>;
  _set?: InputMaybe<User_Glucose_Standards_Set_Input>;
  pk_columns: User_Glucose_Standards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Glucose_Standards_ManyArgs = {
  updates: Array<User_Glucose_Standards_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Sso_IdentitiesArgs = {
  _append?: InputMaybe<User_Sso_Identities_Append_Input>;
  _delete_at_path?: InputMaybe<User_Sso_Identities_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Sso_Identities_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Sso_Identities_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Sso_Identities_Prepend_Input>;
  _set?: InputMaybe<User_Sso_Identities_Set_Input>;
  where: User_Sso_Identities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Sso_Identities_By_PkArgs = {
  _append?: InputMaybe<User_Sso_Identities_Append_Input>;
  _delete_at_path?: InputMaybe<User_Sso_Identities_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Sso_Identities_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Sso_Identities_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Sso_Identities_Prepend_Input>;
  _set?: InputMaybe<User_Sso_Identities_Set_Input>;
  pk_columns: User_Sso_Identities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Sso_Identities_ManyArgs = {
  updates: Array<User_Sso_Identities_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_RolesArgs = {
  _set?: InputMaybe<Users_Roles_Set_Input>;
  where: Users_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Roles_By_PkArgs = {
  _set?: InputMaybe<Users_Roles_Set_Input>;
  pk_columns: Users_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Roles_ManyArgs = {
  updates: Array<Users_Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_StatusesArgs = {
  _set?: InputMaybe<Verification_Statuses_Set_Input>;
  where: Verification_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Statuses_By_PkArgs = {
  _set?: InputMaybe<Verification_Statuses_Set_Input>;
  pk_columns: Verification_Statuses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Statuses_ManyArgs = {
  updates: Array<Verification_Statuses_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** Boolean expression to compare columns of type "oid". All fields are combined with logical 'AND'. */
export type Oid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['oid']['input']>;
  _gt?: InputMaybe<Scalars['oid']['input']>;
  _gte?: InputMaybe<Scalars['oid']['input']>;
  _in?: InputMaybe<Array<Scalars['oid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['oid']['input']>;
  _lte?: InputMaybe<Scalars['oid']['input']>;
  _neq?: InputMaybe<Scalars['oid']['input']>;
  _nin?: InputMaybe<Array<Scalars['oid']['input']>>;
};

/** columns and relationships of "oidc_model_instances" */
export type Oidc_Model_Instances = {
  consumed_at?: Maybe<Scalars['timestamptz']['output']>;
  expires_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  model_name: Scalars['String']['output'];
  payload: Scalars['jsonb']['output'];
  tenant_id: Scalars['String']['output'];
};


/** columns and relationships of "oidc_model_instances" */
export type Oidc_Model_InstancesPayloadArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "oidc_model_instances" */
export type Oidc_Model_Instances_Aggregate = {
  aggregate?: Maybe<Oidc_Model_Instances_Aggregate_Fields>;
  nodes: Array<Oidc_Model_Instances>;
};

/** aggregate fields of "oidc_model_instances" */
export type Oidc_Model_Instances_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Oidc_Model_Instances_Max_Fields>;
  min?: Maybe<Oidc_Model_Instances_Min_Fields>;
};


/** aggregate fields of "oidc_model_instances" */
export type Oidc_Model_Instances_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Oidc_Model_Instances_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Oidc_Model_Instances_Append_Input = {
  payload?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "oidc_model_instances". All fields are combined with a logical 'AND'. */
export type Oidc_Model_Instances_Bool_Exp = {
  _and?: InputMaybe<Array<Oidc_Model_Instances_Bool_Exp>>;
  _not?: InputMaybe<Oidc_Model_Instances_Bool_Exp>;
  _or?: InputMaybe<Array<Oidc_Model_Instances_Bool_Exp>>;
  consumed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  model_name?: InputMaybe<String_Comparison_Exp>;
  payload?: InputMaybe<Jsonb_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "oidc_model_instances" */
export enum Oidc_Model_Instances_Constraint {
  /** unique or primary key constraint on columns "id", "tenant_id", "model_name" */
  OidcModelInstancesModelNameId = 'oidc_model_instances__model_name_id',
  /** unique or primary key constraint on columns "id" */
  OidcModelInstancesPkey = 'oidc_model_instances_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Oidc_Model_Instances_Delete_At_Path_Input = {
  payload?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Oidc_Model_Instances_Delete_Elem_Input = {
  payload?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Oidc_Model_Instances_Delete_Key_Input = {
  payload?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "oidc_model_instances" */
export type Oidc_Model_Instances_Insert_Input = {
  consumed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  model_name?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<Scalars['jsonb']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Oidc_Model_Instances_Max_Fields = {
  consumed_at?: Maybe<Scalars['timestamptz']['output']>;
  expires_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  model_name?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Oidc_Model_Instances_Min_Fields = {
  consumed_at?: Maybe<Scalars['timestamptz']['output']>;
  expires_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  model_name?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "oidc_model_instances" */
export type Oidc_Model_Instances_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Oidc_Model_Instances>;
};

/** on_conflict condition type for table "oidc_model_instances" */
export type Oidc_Model_Instances_On_Conflict = {
  constraint: Oidc_Model_Instances_Constraint;
  update_columns?: Array<Oidc_Model_Instances_Update_Column>;
  where?: InputMaybe<Oidc_Model_Instances_Bool_Exp>;
};

/** Ordering options when selecting data from "oidc_model_instances". */
export type Oidc_Model_Instances_Order_By = {
  consumed_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model_name?: InputMaybe<Order_By>;
  payload?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: oidc_model_instances */
export type Oidc_Model_Instances_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Oidc_Model_Instances_Prepend_Input = {
  payload?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "oidc_model_instances" */
export enum Oidc_Model_Instances_Select_Column {
  /** column name */
  ConsumedAt = 'consumed_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  ModelName = 'model_name',
  /** column name */
  Payload = 'payload',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "oidc_model_instances" */
export type Oidc_Model_Instances_Set_Input = {
  consumed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  model_name?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<Scalars['jsonb']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "oidc_model_instances" */
export type Oidc_Model_Instances_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Oidc_Model_Instances_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Oidc_Model_Instances_Stream_Cursor_Value_Input = {
  consumed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  model_name?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<Scalars['jsonb']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "oidc_model_instances" */
export enum Oidc_Model_Instances_Update_Column {
  /** column name */
  ConsumedAt = 'consumed_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  ModelName = 'model_name',
  /** column name */
  Payload = 'payload',
  /** column name */
  TenantId = 'tenant_id'
}

export type Oidc_Model_Instances_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Oidc_Model_Instances_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Oidc_Model_Instances_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Oidc_Model_Instances_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Oidc_Model_Instances_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Oidc_Model_Instances_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Oidc_Model_Instances_Set_Input>;
  /** filter the rows which have to be updated */
  where: Oidc_Model_Instances_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "organization_invitation_role_relations" */
export type Organization_Invitation_Role_Relations = {
  organization_invitation_id: Scalars['String']['output'];
  organization_role_id: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
};

/** aggregated selection of "organization_invitation_role_relations" */
export type Organization_Invitation_Role_Relations_Aggregate = {
  aggregate?: Maybe<Organization_Invitation_Role_Relations_Aggregate_Fields>;
  nodes: Array<Organization_Invitation_Role_Relations>;
};

/** aggregate fields of "organization_invitation_role_relations" */
export type Organization_Invitation_Role_Relations_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Invitation_Role_Relations_Max_Fields>;
  min?: Maybe<Organization_Invitation_Role_Relations_Min_Fields>;
};


/** aggregate fields of "organization_invitation_role_relations" */
export type Organization_Invitation_Role_Relations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Invitation_Role_Relations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organization_invitation_role_relations". All fields are combined with a logical 'AND'. */
export type Organization_Invitation_Role_Relations_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Invitation_Role_Relations_Bool_Exp>>;
  _not?: InputMaybe<Organization_Invitation_Role_Relations_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Invitation_Role_Relations_Bool_Exp>>;
  organization_invitation_id?: InputMaybe<String_Comparison_Exp>;
  organization_role_id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_invitation_role_relations" */
export enum Organization_Invitation_Role_Relations_Constraint {
  /** unique or primary key constraint on columns "organization_role_id", "organization_invitation_id", "tenant_id" */
  OrganizationInvitationRoleRelationsPkey = 'organization_invitation_role_relations_pkey'
}

/** input type for inserting data into table "organization_invitation_role_relations" */
export type Organization_Invitation_Role_Relations_Insert_Input = {
  organization_invitation_id?: InputMaybe<Scalars['String']['input']>;
  organization_role_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Organization_Invitation_Role_Relations_Max_Fields = {
  organization_invitation_id?: Maybe<Scalars['String']['output']>;
  organization_role_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Organization_Invitation_Role_Relations_Min_Fields = {
  organization_invitation_id?: Maybe<Scalars['String']['output']>;
  organization_role_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "organization_invitation_role_relations" */
export type Organization_Invitation_Role_Relations_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Invitation_Role_Relations>;
};

/** on_conflict condition type for table "organization_invitation_role_relations" */
export type Organization_Invitation_Role_Relations_On_Conflict = {
  constraint: Organization_Invitation_Role_Relations_Constraint;
  update_columns?: Array<Organization_Invitation_Role_Relations_Update_Column>;
  where?: InputMaybe<Organization_Invitation_Role_Relations_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_invitation_role_relations". */
export type Organization_Invitation_Role_Relations_Order_By = {
  organization_invitation_id?: InputMaybe<Order_By>;
  organization_role_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_invitation_role_relations */
export type Organization_Invitation_Role_Relations_Pk_Columns_Input = {
  organization_invitation_id: Scalars['String']['input'];
  organization_role_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};

/** select columns of table "organization_invitation_role_relations" */
export enum Organization_Invitation_Role_Relations_Select_Column {
  /** column name */
  OrganizationInvitationId = 'organization_invitation_id',
  /** column name */
  OrganizationRoleId = 'organization_role_id',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "organization_invitation_role_relations" */
export type Organization_Invitation_Role_Relations_Set_Input = {
  organization_invitation_id?: InputMaybe<Scalars['String']['input']>;
  organization_role_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "organization_invitation_role_relations" */
export type Organization_Invitation_Role_Relations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Invitation_Role_Relations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Invitation_Role_Relations_Stream_Cursor_Value_Input = {
  organization_invitation_id?: InputMaybe<Scalars['String']['input']>;
  organization_role_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "organization_invitation_role_relations" */
export enum Organization_Invitation_Role_Relations_Update_Column {
  /** column name */
  OrganizationInvitationId = 'organization_invitation_id',
  /** column name */
  OrganizationRoleId = 'organization_role_id',
  /** column name */
  TenantId = 'tenant_id'
}

export type Organization_Invitation_Role_Relations_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Invitation_Role_Relations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Invitation_Role_Relations_Bool_Exp;
};

/** Boolean expression to compare columns of type "organization_invitation_status". All fields are combined with logical 'AND'. */
export type Organization_Invitation_Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['organization_invitation_status']['input']>;
  _gt?: InputMaybe<Scalars['organization_invitation_status']['input']>;
  _gte?: InputMaybe<Scalars['organization_invitation_status']['input']>;
  _in?: InputMaybe<Array<Scalars['organization_invitation_status']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['organization_invitation_status']['input']>;
  _lte?: InputMaybe<Scalars['organization_invitation_status']['input']>;
  _neq?: InputMaybe<Scalars['organization_invitation_status']['input']>;
  _nin?: InputMaybe<Array<Scalars['organization_invitation_status']['input']>>;
};

/** columns and relationships of "organization_invitations" */
export type Organization_Invitations = {
  accepted_user_id?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  expires_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  invitee: Scalars['String']['output'];
  inviter_id?: Maybe<Scalars['String']['output']>;
  organization_id: Scalars['String']['output'];
  status: Scalars['organization_invitation_status']['output'];
  tenant_id: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "organization_invitations" */
export type Organization_Invitations_Aggregate = {
  aggregate?: Maybe<Organization_Invitations_Aggregate_Fields>;
  nodes: Array<Organization_Invitations>;
};

/** aggregate fields of "organization_invitations" */
export type Organization_Invitations_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Invitations_Max_Fields>;
  min?: Maybe<Organization_Invitations_Min_Fields>;
};


/** aggregate fields of "organization_invitations" */
export type Organization_Invitations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Invitations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organization_invitations". All fields are combined with a logical 'AND'. */
export type Organization_Invitations_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Invitations_Bool_Exp>>;
  _not?: InputMaybe<Organization_Invitations_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Invitations_Bool_Exp>>;
  accepted_user_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  invitee?: InputMaybe<String_Comparison_Exp>;
  inviter_id?: InputMaybe<String_Comparison_Exp>;
  organization_id?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Organization_Invitation_Status_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_invitations" */
export enum Organization_Invitations_Constraint {
  /** unique or primary key constraint on columns "invitee", "tenant_id", "organization_id" */
  OrganizationInvitationsInviteeOrganizationId = 'organization_invitations__invitee_organization_id',
  /** unique or primary key constraint on columns "id" */
  OrganizationInvitationsPkey = 'organization_invitations_pkey'
}

/** input type for inserting data into table "organization_invitations" */
export type Organization_Invitations_Insert_Input = {
  accepted_user_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  invitee?: InputMaybe<Scalars['String']['input']>;
  inviter_id?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['organization_invitation_status']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Organization_Invitations_Max_Fields = {
  accepted_user_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  expires_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitee?: Maybe<Scalars['String']['output']>;
  inviter_id?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['organization_invitation_status']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Organization_Invitations_Min_Fields = {
  accepted_user_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  expires_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitee?: Maybe<Scalars['String']['output']>;
  inviter_id?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['organization_invitation_status']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "organization_invitations" */
export type Organization_Invitations_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Invitations>;
};

/** on_conflict condition type for table "organization_invitations" */
export type Organization_Invitations_On_Conflict = {
  constraint: Organization_Invitations_Constraint;
  update_columns?: Array<Organization_Invitations_Update_Column>;
  where?: InputMaybe<Organization_Invitations_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_invitations". */
export type Organization_Invitations_Order_By = {
  accepted_user_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invitee?: InputMaybe<Order_By>;
  inviter_id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_invitations */
export type Organization_Invitations_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "organization_invitations" */
export enum Organization_Invitations_Select_Column {
  /** column name */
  AcceptedUserId = 'accepted_user_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  Invitee = 'invitee',
  /** column name */
  InviterId = 'inviter_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Status = 'status',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "organization_invitations" */
export type Organization_Invitations_Set_Input = {
  accepted_user_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  invitee?: InputMaybe<Scalars['String']['input']>;
  inviter_id?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['organization_invitation_status']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "organization_invitations" */
export type Organization_Invitations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Invitations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Invitations_Stream_Cursor_Value_Input = {
  accepted_user_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  invitee?: InputMaybe<Scalars['String']['input']>;
  inviter_id?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['organization_invitation_status']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "organization_invitations" */
export enum Organization_Invitations_Update_Column {
  /** column name */
  AcceptedUserId = 'accepted_user_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  Invitee = 'invitee',
  /** column name */
  InviterId = 'inviter_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Status = 'status',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Organization_Invitations_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Invitations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Invitations_Bool_Exp;
};

/** columns and relationships of "organization_role_scope_relations" */
export type Organization_Role_Scope_Relations = {
  organization_role_id: Scalars['String']['output'];
  organization_scope_id: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
};

/** aggregated selection of "organization_role_scope_relations" */
export type Organization_Role_Scope_Relations_Aggregate = {
  aggregate?: Maybe<Organization_Role_Scope_Relations_Aggregate_Fields>;
  nodes: Array<Organization_Role_Scope_Relations>;
};

/** aggregate fields of "organization_role_scope_relations" */
export type Organization_Role_Scope_Relations_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Role_Scope_Relations_Max_Fields>;
  min?: Maybe<Organization_Role_Scope_Relations_Min_Fields>;
};


/** aggregate fields of "organization_role_scope_relations" */
export type Organization_Role_Scope_Relations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Role_Scope_Relations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organization_role_scope_relations". All fields are combined with a logical 'AND'. */
export type Organization_Role_Scope_Relations_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Role_Scope_Relations_Bool_Exp>>;
  _not?: InputMaybe<Organization_Role_Scope_Relations_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Role_Scope_Relations_Bool_Exp>>;
  organization_role_id?: InputMaybe<String_Comparison_Exp>;
  organization_scope_id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_role_scope_relations" */
export enum Organization_Role_Scope_Relations_Constraint {
  /** unique or primary key constraint on columns "organization_scope_id", "organization_role_id", "tenant_id" */
  OrganizationRoleScopeRelationsPkey = 'organization_role_scope_relations_pkey'
}

/** input type for inserting data into table "organization_role_scope_relations" */
export type Organization_Role_Scope_Relations_Insert_Input = {
  organization_role_id?: InputMaybe<Scalars['String']['input']>;
  organization_scope_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Organization_Role_Scope_Relations_Max_Fields = {
  organization_role_id?: Maybe<Scalars['String']['output']>;
  organization_scope_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Organization_Role_Scope_Relations_Min_Fields = {
  organization_role_id?: Maybe<Scalars['String']['output']>;
  organization_scope_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "organization_role_scope_relations" */
export type Organization_Role_Scope_Relations_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Role_Scope_Relations>;
};

/** on_conflict condition type for table "organization_role_scope_relations" */
export type Organization_Role_Scope_Relations_On_Conflict = {
  constraint: Organization_Role_Scope_Relations_Constraint;
  update_columns?: Array<Organization_Role_Scope_Relations_Update_Column>;
  where?: InputMaybe<Organization_Role_Scope_Relations_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_role_scope_relations". */
export type Organization_Role_Scope_Relations_Order_By = {
  organization_role_id?: InputMaybe<Order_By>;
  organization_scope_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_role_scope_relations */
export type Organization_Role_Scope_Relations_Pk_Columns_Input = {
  organization_role_id: Scalars['String']['input'];
  organization_scope_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};

/** select columns of table "organization_role_scope_relations" */
export enum Organization_Role_Scope_Relations_Select_Column {
  /** column name */
  OrganizationRoleId = 'organization_role_id',
  /** column name */
  OrganizationScopeId = 'organization_scope_id',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "organization_role_scope_relations" */
export type Organization_Role_Scope_Relations_Set_Input = {
  organization_role_id?: InputMaybe<Scalars['String']['input']>;
  organization_scope_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "organization_role_scope_relations" */
export type Organization_Role_Scope_Relations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Role_Scope_Relations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Role_Scope_Relations_Stream_Cursor_Value_Input = {
  organization_role_id?: InputMaybe<Scalars['String']['input']>;
  organization_scope_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "organization_role_scope_relations" */
export enum Organization_Role_Scope_Relations_Update_Column {
  /** column name */
  OrganizationRoleId = 'organization_role_id',
  /** column name */
  OrganizationScopeId = 'organization_scope_id',
  /** column name */
  TenantId = 'tenant_id'
}

export type Organization_Role_Scope_Relations_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Role_Scope_Relations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Role_Scope_Relations_Bool_Exp;
};

/** columns and relationships of "organization_role_user_relations" */
export type Organization_Role_User_Relations = {
  organization_id: Scalars['String']['output'];
  organization_role_id: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "organization_role_user_relations" */
export type Organization_Role_User_Relations_Aggregate = {
  aggregate?: Maybe<Organization_Role_User_Relations_Aggregate_Fields>;
  nodes: Array<Organization_Role_User_Relations>;
};

/** aggregate fields of "organization_role_user_relations" */
export type Organization_Role_User_Relations_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Role_User_Relations_Max_Fields>;
  min?: Maybe<Organization_Role_User_Relations_Min_Fields>;
};


/** aggregate fields of "organization_role_user_relations" */
export type Organization_Role_User_Relations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Role_User_Relations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organization_role_user_relations". All fields are combined with a logical 'AND'. */
export type Organization_Role_User_Relations_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Role_User_Relations_Bool_Exp>>;
  _not?: InputMaybe<Organization_Role_User_Relations_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Role_User_Relations_Bool_Exp>>;
  organization_id?: InputMaybe<String_Comparison_Exp>;
  organization_role_id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_role_user_relations" */
export enum Organization_Role_User_Relations_Constraint {
  /** unique or primary key constraint on columns "user_id", "organization_role_id", "tenant_id", "organization_id" */
  OrganizationRoleUserRelationsPkey = 'organization_role_user_relations_pkey'
}

/** input type for inserting data into table "organization_role_user_relations" */
export type Organization_Role_User_Relations_Insert_Input = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  organization_role_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Organization_Role_User_Relations_Max_Fields = {
  organization_id?: Maybe<Scalars['String']['output']>;
  organization_role_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Organization_Role_User_Relations_Min_Fields = {
  organization_id?: Maybe<Scalars['String']['output']>;
  organization_role_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "organization_role_user_relations" */
export type Organization_Role_User_Relations_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Role_User_Relations>;
};

/** on_conflict condition type for table "organization_role_user_relations" */
export type Organization_Role_User_Relations_On_Conflict = {
  constraint: Organization_Role_User_Relations_Constraint;
  update_columns?: Array<Organization_Role_User_Relations_Update_Column>;
  where?: InputMaybe<Organization_Role_User_Relations_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_role_user_relations". */
export type Organization_Role_User_Relations_Order_By = {
  organization_id?: InputMaybe<Order_By>;
  organization_role_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_role_user_relations */
export type Organization_Role_User_Relations_Pk_Columns_Input = {
  organization_id: Scalars['String']['input'];
  organization_role_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};

/** select columns of table "organization_role_user_relations" */
export enum Organization_Role_User_Relations_Select_Column {
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  OrganizationRoleId = 'organization_role_id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "organization_role_user_relations" */
export type Organization_Role_User_Relations_Set_Input = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  organization_role_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "organization_role_user_relations" */
export type Organization_Role_User_Relations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Role_User_Relations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Role_User_Relations_Stream_Cursor_Value_Input = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  organization_role_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "organization_role_user_relations" */
export enum Organization_Role_User_Relations_Update_Column {
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  OrganizationRoleId = 'organization_role_id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

export type Organization_Role_User_Relations_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Role_User_Relations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Role_User_Relations_Bool_Exp;
};

/** columns and relationships of "organization_roles" */
export type Organization_Roles = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
};

/** aggregated selection of "organization_roles" */
export type Organization_Roles_Aggregate = {
  aggregate?: Maybe<Organization_Roles_Aggregate_Fields>;
  nodes: Array<Organization_Roles>;
};

/** aggregate fields of "organization_roles" */
export type Organization_Roles_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Roles_Max_Fields>;
  min?: Maybe<Organization_Roles_Min_Fields>;
};


/** aggregate fields of "organization_roles" */
export type Organization_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organization_roles". All fields are combined with a logical 'AND'. */
export type Organization_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Roles_Bool_Exp>>;
  _not?: InputMaybe<Organization_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Roles_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_roles" */
export enum Organization_Roles_Constraint {
  /** unique or primary key constraint on columns "tenant_id", "name" */
  OrganizationRolesName = 'organization_roles__name',
  /** unique or primary key constraint on columns "id" */
  OrganizationRolesPkey = 'organization_roles_pkey'
}

/** input type for inserting data into table "organization_roles" */
export type Organization_Roles_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Organization_Roles_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Organization_Roles_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "organization_roles" */
export type Organization_Roles_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Roles>;
};

/** on_conflict condition type for table "organization_roles" */
export type Organization_Roles_On_Conflict = {
  constraint: Organization_Roles_Constraint;
  update_columns?: Array<Organization_Roles_Update_Column>;
  where?: InputMaybe<Organization_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_roles". */
export type Organization_Roles_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_roles */
export type Organization_Roles_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "organization_roles" */
export enum Organization_Roles_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "organization_roles" */
export type Organization_Roles_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "organization_roles" */
export type Organization_Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Roles_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "organization_roles" */
export enum Organization_Roles_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TenantId = 'tenant_id'
}

export type Organization_Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Roles_Bool_Exp;
};

/** columns and relationships of "organization_scopes" */
export type Organization_Scopes = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
};

/** aggregated selection of "organization_scopes" */
export type Organization_Scopes_Aggregate = {
  aggregate?: Maybe<Organization_Scopes_Aggregate_Fields>;
  nodes: Array<Organization_Scopes>;
};

/** aggregate fields of "organization_scopes" */
export type Organization_Scopes_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Scopes_Max_Fields>;
  min?: Maybe<Organization_Scopes_Min_Fields>;
};


/** aggregate fields of "organization_scopes" */
export type Organization_Scopes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Scopes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organization_scopes". All fields are combined with a logical 'AND'. */
export type Organization_Scopes_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Scopes_Bool_Exp>>;
  _not?: InputMaybe<Organization_Scopes_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Scopes_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_scopes" */
export enum Organization_Scopes_Constraint {
  /** unique or primary key constraint on columns "tenant_id", "name" */
  OrganizationScopesName = 'organization_scopes__name',
  /** unique or primary key constraint on columns "id" */
  OrganizationScopesPkey = 'organization_scopes_pkey'
}

/** input type for inserting data into table "organization_scopes" */
export type Organization_Scopes_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Organization_Scopes_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Organization_Scopes_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "organization_scopes" */
export type Organization_Scopes_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Scopes>;
};

/** on_conflict condition type for table "organization_scopes" */
export type Organization_Scopes_On_Conflict = {
  constraint: Organization_Scopes_Constraint;
  update_columns?: Array<Organization_Scopes_Update_Column>;
  where?: InputMaybe<Organization_Scopes_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_scopes". */
export type Organization_Scopes_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_scopes */
export type Organization_Scopes_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "organization_scopes" */
export enum Organization_Scopes_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "organization_scopes" */
export type Organization_Scopes_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "organization_scopes" */
export type Organization_Scopes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Scopes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Scopes_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "organization_scopes" */
export enum Organization_Scopes_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TenantId = 'tenant_id'
}

export type Organization_Scopes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Scopes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Scopes_Bool_Exp;
};

/** columns and relationships of "organization_user_relations" */
export type Organization_User_Relations = {
  organization_id: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "organization_user_relations" */
export type Organization_User_Relations_Aggregate = {
  aggregate?: Maybe<Organization_User_Relations_Aggregate_Fields>;
  nodes: Array<Organization_User_Relations>;
};

/** aggregate fields of "organization_user_relations" */
export type Organization_User_Relations_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_User_Relations_Max_Fields>;
  min?: Maybe<Organization_User_Relations_Min_Fields>;
};


/** aggregate fields of "organization_user_relations" */
export type Organization_User_Relations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_User_Relations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organization_user_relations". All fields are combined with a logical 'AND'. */
export type Organization_User_Relations_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_User_Relations_Bool_Exp>>;
  _not?: InputMaybe<Organization_User_Relations_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_User_Relations_Bool_Exp>>;
  organization_id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_user_relations" */
export enum Organization_User_Relations_Constraint {
  /** unique or primary key constraint on columns "user_id", "tenant_id", "organization_id" */
  OrganizationUserRelationsPkey = 'organization_user_relations_pkey'
}

/** input type for inserting data into table "organization_user_relations" */
export type Organization_User_Relations_Insert_Input = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Organization_User_Relations_Max_Fields = {
  organization_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Organization_User_Relations_Min_Fields = {
  organization_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "organization_user_relations" */
export type Organization_User_Relations_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_User_Relations>;
};

/** on_conflict condition type for table "organization_user_relations" */
export type Organization_User_Relations_On_Conflict = {
  constraint: Organization_User_Relations_Constraint;
  update_columns?: Array<Organization_User_Relations_Update_Column>;
  where?: InputMaybe<Organization_User_Relations_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_user_relations". */
export type Organization_User_Relations_Order_By = {
  organization_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_user_relations */
export type Organization_User_Relations_Pk_Columns_Input = {
  organization_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};

/** select columns of table "organization_user_relations" */
export enum Organization_User_Relations_Select_Column {
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "organization_user_relations" */
export type Organization_User_Relations_Set_Input = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "organization_user_relations" */
export type Organization_User_Relations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_User_Relations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_User_Relations_Stream_Cursor_Value_Input = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "organization_user_relations" */
export enum Organization_User_Relations_Update_Column {
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

export type Organization_User_Relations_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_User_Relations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_User_Relations_Bool_Exp;
};

/** columns and relationships of "organizations" */
export type Organizations = {
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
};

/** aggregated selection of "organizations" */
export type Organizations_Aggregate = {
  aggregate?: Maybe<Organizations_Aggregate_Fields>;
  nodes: Array<Organizations>;
};

/** aggregate fields of "organizations" */
export type Organizations_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Organizations_Max_Fields>;
  min?: Maybe<Organizations_Min_Fields>;
};


/** aggregate fields of "organizations" */
export type Organizations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organizations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organizations". All fields are combined with a logical 'AND'. */
export type Organizations_Bool_Exp = {
  _and?: InputMaybe<Array<Organizations_Bool_Exp>>;
  _not?: InputMaybe<Organizations_Bool_Exp>;
  _or?: InputMaybe<Array<Organizations_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "organizations" */
export enum Organizations_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationsPkey = 'organizations_pkey'
}

/** input type for inserting data into table "organizations" */
export type Organizations_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Organizations_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Organizations_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "organizations" */
export type Organizations_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organizations>;
};

/** on_conflict condition type for table "organizations" */
export type Organizations_On_Conflict = {
  constraint: Organizations_Constraint;
  update_columns?: Array<Organizations_Update_Column>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};

/** Ordering options when selecting data from "organizations". */
export type Organizations_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organizations */
export type Organizations_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "organizations" */
export enum Organizations_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "organizations" */
export type Organizations_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "organizations" */
export type Organizations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organizations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organizations_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "organizations" */
export enum Organizations_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TenantId = 'tenant_id'
}

export type Organizations_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organizations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organizations_Bool_Exp;
};

/** columns and relationships of "passcodes" */
export type Passcodes = {
  code: Scalars['String']['output'];
  consumed: Scalars['Boolean']['output'];
  created_at: Scalars['timestamptz']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  interaction_jti?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  tenant_id: Scalars['String']['output'];
  try_count: Scalars['smallint']['output'];
  type: Scalars['String']['output'];
};

/** aggregated selection of "passcodes" */
export type Passcodes_Aggregate = {
  aggregate?: Maybe<Passcodes_Aggregate_Fields>;
  nodes: Array<Passcodes>;
};

/** aggregate fields of "passcodes" */
export type Passcodes_Aggregate_Fields = {
  avg?: Maybe<Passcodes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Passcodes_Max_Fields>;
  min?: Maybe<Passcodes_Min_Fields>;
  stddev?: Maybe<Passcodes_Stddev_Fields>;
  stddev_pop?: Maybe<Passcodes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Passcodes_Stddev_Samp_Fields>;
  sum?: Maybe<Passcodes_Sum_Fields>;
  var_pop?: Maybe<Passcodes_Var_Pop_Fields>;
  var_samp?: Maybe<Passcodes_Var_Samp_Fields>;
  variance?: Maybe<Passcodes_Variance_Fields>;
};


/** aggregate fields of "passcodes" */
export type Passcodes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Passcodes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Passcodes_Avg_Fields = {
  try_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "passcodes". All fields are combined with a logical 'AND'. */
export type Passcodes_Bool_Exp = {
  _and?: InputMaybe<Array<Passcodes_Bool_Exp>>;
  _not?: InputMaybe<Passcodes_Bool_Exp>;
  _or?: InputMaybe<Array<Passcodes_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  consumed?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  interaction_jti?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  try_count?: InputMaybe<Smallint_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "passcodes" */
export enum Passcodes_Constraint {
  /** unique or primary key constraint on columns "id" */
  PasscodesPkey = 'passcodes_pkey'
}

/** input type for incrementing numeric columns in table "passcodes" */
export type Passcodes_Inc_Input = {
  try_count?: InputMaybe<Scalars['smallint']['input']>;
};

/** input type for inserting data into table "passcodes" */
export type Passcodes_Insert_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  consumed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interaction_jti?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  try_count?: InputMaybe<Scalars['smallint']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Passcodes_Max_Fields = {
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  interaction_jti?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  try_count?: Maybe<Scalars['smallint']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Passcodes_Min_Fields = {
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  interaction_jti?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  try_count?: Maybe<Scalars['smallint']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "passcodes" */
export type Passcodes_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Passcodes>;
};

/** on_conflict condition type for table "passcodes" */
export type Passcodes_On_Conflict = {
  constraint: Passcodes_Constraint;
  update_columns?: Array<Passcodes_Update_Column>;
  where?: InputMaybe<Passcodes_Bool_Exp>;
};

/** Ordering options when selecting data from "passcodes". */
export type Passcodes_Order_By = {
  code?: InputMaybe<Order_By>;
  consumed?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interaction_jti?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  try_count?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: passcodes */
export type Passcodes_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "passcodes" */
export enum Passcodes_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Consumed = 'consumed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  InteractionJti = 'interaction_jti',
  /** column name */
  Phone = 'phone',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  TryCount = 'try_count',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "passcodes" */
export type Passcodes_Set_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  consumed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interaction_jti?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  try_count?: InputMaybe<Scalars['smallint']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Passcodes_Stddev_Fields = {
  try_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Passcodes_Stddev_Pop_Fields = {
  try_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Passcodes_Stddev_Samp_Fields = {
  try_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "passcodes" */
export type Passcodes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Passcodes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Passcodes_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  consumed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interaction_jti?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  try_count?: InputMaybe<Scalars['smallint']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Passcodes_Sum_Fields = {
  try_count?: Maybe<Scalars['smallint']['output']>;
};

/** update columns of table "passcodes" */
export enum Passcodes_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Consumed = 'consumed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  InteractionJti = 'interaction_jti',
  /** column name */
  Phone = 'phone',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  TryCount = 'try_count',
  /** column name */
  Type = 'type'
}

export type Passcodes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Passcodes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Passcodes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Passcodes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Passcodes_Var_Pop_Fields = {
  try_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Passcodes_Var_Samp_Fields = {
  try_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Passcodes_Variance_Fields = {
  try_count?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "pg_buffercache" */
export type Pg_Buffercache = {
  bufferid?: Maybe<Scalars['Int']['output']>;
  isdirty?: Maybe<Scalars['Boolean']['output']>;
  pinning_backends?: Maybe<Scalars['Int']['output']>;
  relblocknumber?: Maybe<Scalars['bigint']['output']>;
  reldatabase?: Maybe<Scalars['oid']['output']>;
  relfilenode?: Maybe<Scalars['oid']['output']>;
  relforknumber?: Maybe<Scalars['smallint']['output']>;
  reltablespace?: Maybe<Scalars['oid']['output']>;
  usagecount?: Maybe<Scalars['smallint']['output']>;
};

/** aggregated selection of "pg_buffercache" */
export type Pg_Buffercache_Aggregate = {
  aggregate?: Maybe<Pg_Buffercache_Aggregate_Fields>;
  nodes: Array<Pg_Buffercache>;
};

/** aggregate fields of "pg_buffercache" */
export type Pg_Buffercache_Aggregate_Fields = {
  avg?: Maybe<Pg_Buffercache_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Pg_Buffercache_Max_Fields>;
  min?: Maybe<Pg_Buffercache_Min_Fields>;
  stddev?: Maybe<Pg_Buffercache_Stddev_Fields>;
  stddev_pop?: Maybe<Pg_Buffercache_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pg_Buffercache_Stddev_Samp_Fields>;
  sum?: Maybe<Pg_Buffercache_Sum_Fields>;
  var_pop?: Maybe<Pg_Buffercache_Var_Pop_Fields>;
  var_samp?: Maybe<Pg_Buffercache_Var_Samp_Fields>;
  variance?: Maybe<Pg_Buffercache_Variance_Fields>;
};


/** aggregate fields of "pg_buffercache" */
export type Pg_Buffercache_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pg_Buffercache_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Pg_Buffercache_Avg_Fields = {
  bufferid?: Maybe<Scalars['Float']['output']>;
  pinning_backends?: Maybe<Scalars['Float']['output']>;
  relblocknumber?: Maybe<Scalars['Float']['output']>;
  relforknumber?: Maybe<Scalars['Float']['output']>;
  usagecount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "pg_buffercache". All fields are combined with a logical 'AND'. */
export type Pg_Buffercache_Bool_Exp = {
  _and?: InputMaybe<Array<Pg_Buffercache_Bool_Exp>>;
  _not?: InputMaybe<Pg_Buffercache_Bool_Exp>;
  _or?: InputMaybe<Array<Pg_Buffercache_Bool_Exp>>;
  bufferid?: InputMaybe<Int_Comparison_Exp>;
  isdirty?: InputMaybe<Boolean_Comparison_Exp>;
  pinning_backends?: InputMaybe<Int_Comparison_Exp>;
  relblocknumber?: InputMaybe<Bigint_Comparison_Exp>;
  reldatabase?: InputMaybe<Oid_Comparison_Exp>;
  relfilenode?: InputMaybe<Oid_Comparison_Exp>;
  relforknumber?: InputMaybe<Smallint_Comparison_Exp>;
  reltablespace?: InputMaybe<Oid_Comparison_Exp>;
  usagecount?: InputMaybe<Smallint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Pg_Buffercache_Max_Fields = {
  bufferid?: Maybe<Scalars['Int']['output']>;
  pinning_backends?: Maybe<Scalars['Int']['output']>;
  relblocknumber?: Maybe<Scalars['bigint']['output']>;
  relforknumber?: Maybe<Scalars['smallint']['output']>;
  usagecount?: Maybe<Scalars['smallint']['output']>;
};

/** aggregate min on columns */
export type Pg_Buffercache_Min_Fields = {
  bufferid?: Maybe<Scalars['Int']['output']>;
  pinning_backends?: Maybe<Scalars['Int']['output']>;
  relblocknumber?: Maybe<Scalars['bigint']['output']>;
  relforknumber?: Maybe<Scalars['smallint']['output']>;
  usagecount?: Maybe<Scalars['smallint']['output']>;
};

/** Ordering options when selecting data from "pg_buffercache". */
export type Pg_Buffercache_Order_By = {
  bufferid?: InputMaybe<Order_By>;
  isdirty?: InputMaybe<Order_By>;
  pinning_backends?: InputMaybe<Order_By>;
  relblocknumber?: InputMaybe<Order_By>;
  reldatabase?: InputMaybe<Order_By>;
  relfilenode?: InputMaybe<Order_By>;
  relforknumber?: InputMaybe<Order_By>;
  reltablespace?: InputMaybe<Order_By>;
  usagecount?: InputMaybe<Order_By>;
};

/** select columns of table "pg_buffercache" */
export enum Pg_Buffercache_Select_Column {
  /** column name */
  Bufferid = 'bufferid',
  /** column name */
  Isdirty = 'isdirty',
  /** column name */
  PinningBackends = 'pinning_backends',
  /** column name */
  Relblocknumber = 'relblocknumber',
  /** column name */
  Reldatabase = 'reldatabase',
  /** column name */
  Relfilenode = 'relfilenode',
  /** column name */
  Relforknumber = 'relforknumber',
  /** column name */
  Reltablespace = 'reltablespace',
  /** column name */
  Usagecount = 'usagecount'
}

/** aggregate stddev on columns */
export type Pg_Buffercache_Stddev_Fields = {
  bufferid?: Maybe<Scalars['Float']['output']>;
  pinning_backends?: Maybe<Scalars['Float']['output']>;
  relblocknumber?: Maybe<Scalars['Float']['output']>;
  relforknumber?: Maybe<Scalars['Float']['output']>;
  usagecount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Pg_Buffercache_Stddev_Pop_Fields = {
  bufferid?: Maybe<Scalars['Float']['output']>;
  pinning_backends?: Maybe<Scalars['Float']['output']>;
  relblocknumber?: Maybe<Scalars['Float']['output']>;
  relforknumber?: Maybe<Scalars['Float']['output']>;
  usagecount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Pg_Buffercache_Stddev_Samp_Fields = {
  bufferid?: Maybe<Scalars['Float']['output']>;
  pinning_backends?: Maybe<Scalars['Float']['output']>;
  relblocknumber?: Maybe<Scalars['Float']['output']>;
  relforknumber?: Maybe<Scalars['Float']['output']>;
  usagecount?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "pg_buffercache" */
export type Pg_Buffercache_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pg_Buffercache_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pg_Buffercache_Stream_Cursor_Value_Input = {
  bufferid?: InputMaybe<Scalars['Int']['input']>;
  isdirty?: InputMaybe<Scalars['Boolean']['input']>;
  pinning_backends?: InputMaybe<Scalars['Int']['input']>;
  relblocknumber?: InputMaybe<Scalars['bigint']['input']>;
  reldatabase?: InputMaybe<Scalars['oid']['input']>;
  relfilenode?: InputMaybe<Scalars['oid']['input']>;
  relforknumber?: InputMaybe<Scalars['smallint']['input']>;
  reltablespace?: InputMaybe<Scalars['oid']['input']>;
  usagecount?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate sum on columns */
export type Pg_Buffercache_Sum_Fields = {
  bufferid?: Maybe<Scalars['Int']['output']>;
  pinning_backends?: Maybe<Scalars['Int']['output']>;
  relblocknumber?: Maybe<Scalars['bigint']['output']>;
  relforknumber?: Maybe<Scalars['smallint']['output']>;
  usagecount?: Maybe<Scalars['smallint']['output']>;
};

/** aggregate var_pop on columns */
export type Pg_Buffercache_Var_Pop_Fields = {
  bufferid?: Maybe<Scalars['Float']['output']>;
  pinning_backends?: Maybe<Scalars['Float']['output']>;
  relblocknumber?: Maybe<Scalars['Float']['output']>;
  relforknumber?: Maybe<Scalars['Float']['output']>;
  usagecount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Pg_Buffercache_Var_Samp_Fields = {
  bufferid?: Maybe<Scalars['Float']['output']>;
  pinning_backends?: Maybe<Scalars['Float']['output']>;
  relblocknumber?: Maybe<Scalars['Float']['output']>;
  relforknumber?: Maybe<Scalars['Float']['output']>;
  usagecount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Pg_Buffercache_Variance_Fields = {
  bufferid?: Maybe<Scalars['Float']['output']>;
  pinning_backends?: Maybe<Scalars['Float']['output']>;
  relblocknumber?: Maybe<Scalars['Float']['output']>;
  relforknumber?: Maybe<Scalars['Float']['output']>;
  usagecount?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "pg_stat_statements" */
export type Pg_Stat_Statements = {
  blk_read_time?: Maybe<Scalars['float8']['output']>;
  blk_write_time?: Maybe<Scalars['float8']['output']>;
  calls?: Maybe<Scalars['bigint']['output']>;
  dbid?: Maybe<Scalars['oid']['output']>;
  jit_emission_count?: Maybe<Scalars['bigint']['output']>;
  jit_emission_time?: Maybe<Scalars['float8']['output']>;
  jit_functions?: Maybe<Scalars['bigint']['output']>;
  jit_generation_time?: Maybe<Scalars['float8']['output']>;
  jit_inlining_count?: Maybe<Scalars['bigint']['output']>;
  jit_inlining_time?: Maybe<Scalars['float8']['output']>;
  jit_optimization_count?: Maybe<Scalars['bigint']['output']>;
  jit_optimization_time?: Maybe<Scalars['float8']['output']>;
  local_blks_dirtied?: Maybe<Scalars['bigint']['output']>;
  local_blks_hit?: Maybe<Scalars['bigint']['output']>;
  local_blks_read?: Maybe<Scalars['bigint']['output']>;
  local_blks_written?: Maybe<Scalars['bigint']['output']>;
  max_exec_time?: Maybe<Scalars['float8']['output']>;
  max_plan_time?: Maybe<Scalars['float8']['output']>;
  mean_exec_time?: Maybe<Scalars['float8']['output']>;
  mean_plan_time?: Maybe<Scalars['float8']['output']>;
  min_exec_time?: Maybe<Scalars['float8']['output']>;
  min_plan_time?: Maybe<Scalars['float8']['output']>;
  plans?: Maybe<Scalars['bigint']['output']>;
  query?: Maybe<Scalars['String']['output']>;
  queryid?: Maybe<Scalars['bigint']['output']>;
  rows?: Maybe<Scalars['bigint']['output']>;
  shared_blks_dirtied?: Maybe<Scalars['bigint']['output']>;
  shared_blks_hit?: Maybe<Scalars['bigint']['output']>;
  shared_blks_read?: Maybe<Scalars['bigint']['output']>;
  shared_blks_written?: Maybe<Scalars['bigint']['output']>;
  stddev_exec_time?: Maybe<Scalars['float8']['output']>;
  stddev_plan_time?: Maybe<Scalars['float8']['output']>;
  temp_blk_read_time?: Maybe<Scalars['float8']['output']>;
  temp_blk_write_time?: Maybe<Scalars['float8']['output']>;
  temp_blks_read?: Maybe<Scalars['bigint']['output']>;
  temp_blks_written?: Maybe<Scalars['bigint']['output']>;
  toplevel?: Maybe<Scalars['Boolean']['output']>;
  total_exec_time?: Maybe<Scalars['float8']['output']>;
  total_plan_time?: Maybe<Scalars['float8']['output']>;
  userid?: Maybe<Scalars['oid']['output']>;
  wal_bytes?: Maybe<Scalars['numeric']['output']>;
  wal_fpi?: Maybe<Scalars['bigint']['output']>;
  wal_records?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "pg_stat_statements" */
export type Pg_Stat_Statements_Aggregate = {
  aggregate?: Maybe<Pg_Stat_Statements_Aggregate_Fields>;
  nodes: Array<Pg_Stat_Statements>;
};

/** aggregate fields of "pg_stat_statements" */
export type Pg_Stat_Statements_Aggregate_Fields = {
  avg?: Maybe<Pg_Stat_Statements_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Pg_Stat_Statements_Max_Fields>;
  min?: Maybe<Pg_Stat_Statements_Min_Fields>;
  stddev?: Maybe<Pg_Stat_Statements_Stddev_Fields>;
  stddev_pop?: Maybe<Pg_Stat_Statements_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pg_Stat_Statements_Stddev_Samp_Fields>;
  sum?: Maybe<Pg_Stat_Statements_Sum_Fields>;
  var_pop?: Maybe<Pg_Stat_Statements_Var_Pop_Fields>;
  var_samp?: Maybe<Pg_Stat_Statements_Var_Samp_Fields>;
  variance?: Maybe<Pg_Stat_Statements_Variance_Fields>;
};


/** aggregate fields of "pg_stat_statements" */
export type Pg_Stat_Statements_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pg_Stat_Statements_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Pg_Stat_Statements_Avg_Fields = {
  blk_read_time?: Maybe<Scalars['Float']['output']>;
  blk_write_time?: Maybe<Scalars['Float']['output']>;
  calls?: Maybe<Scalars['Float']['output']>;
  jit_emission_count?: Maybe<Scalars['Float']['output']>;
  jit_emission_time?: Maybe<Scalars['Float']['output']>;
  jit_functions?: Maybe<Scalars['Float']['output']>;
  jit_generation_time?: Maybe<Scalars['Float']['output']>;
  jit_inlining_count?: Maybe<Scalars['Float']['output']>;
  jit_inlining_time?: Maybe<Scalars['Float']['output']>;
  jit_optimization_count?: Maybe<Scalars['Float']['output']>;
  jit_optimization_time?: Maybe<Scalars['Float']['output']>;
  local_blks_dirtied?: Maybe<Scalars['Float']['output']>;
  local_blks_hit?: Maybe<Scalars['Float']['output']>;
  local_blks_read?: Maybe<Scalars['Float']['output']>;
  local_blks_written?: Maybe<Scalars['Float']['output']>;
  max_exec_time?: Maybe<Scalars['Float']['output']>;
  max_plan_time?: Maybe<Scalars['Float']['output']>;
  mean_exec_time?: Maybe<Scalars['Float']['output']>;
  mean_plan_time?: Maybe<Scalars['Float']['output']>;
  min_exec_time?: Maybe<Scalars['Float']['output']>;
  min_plan_time?: Maybe<Scalars['Float']['output']>;
  plans?: Maybe<Scalars['Float']['output']>;
  queryid?: Maybe<Scalars['Float']['output']>;
  rows?: Maybe<Scalars['Float']['output']>;
  shared_blks_dirtied?: Maybe<Scalars['Float']['output']>;
  shared_blks_hit?: Maybe<Scalars['Float']['output']>;
  shared_blks_read?: Maybe<Scalars['Float']['output']>;
  shared_blks_written?: Maybe<Scalars['Float']['output']>;
  stddev_exec_time?: Maybe<Scalars['Float']['output']>;
  stddev_plan_time?: Maybe<Scalars['Float']['output']>;
  temp_blk_read_time?: Maybe<Scalars['Float']['output']>;
  temp_blk_write_time?: Maybe<Scalars['Float']['output']>;
  temp_blks_read?: Maybe<Scalars['Float']['output']>;
  temp_blks_written?: Maybe<Scalars['Float']['output']>;
  total_exec_time?: Maybe<Scalars['Float']['output']>;
  total_plan_time?: Maybe<Scalars['Float']['output']>;
  wal_bytes?: Maybe<Scalars['Float']['output']>;
  wal_fpi?: Maybe<Scalars['Float']['output']>;
  wal_records?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "pg_stat_statements". All fields are combined with a logical 'AND'. */
export type Pg_Stat_Statements_Bool_Exp = {
  _and?: InputMaybe<Array<Pg_Stat_Statements_Bool_Exp>>;
  _not?: InputMaybe<Pg_Stat_Statements_Bool_Exp>;
  _or?: InputMaybe<Array<Pg_Stat_Statements_Bool_Exp>>;
  blk_read_time?: InputMaybe<Float8_Comparison_Exp>;
  blk_write_time?: InputMaybe<Float8_Comparison_Exp>;
  calls?: InputMaybe<Bigint_Comparison_Exp>;
  dbid?: InputMaybe<Oid_Comparison_Exp>;
  jit_emission_count?: InputMaybe<Bigint_Comparison_Exp>;
  jit_emission_time?: InputMaybe<Float8_Comparison_Exp>;
  jit_functions?: InputMaybe<Bigint_Comparison_Exp>;
  jit_generation_time?: InputMaybe<Float8_Comparison_Exp>;
  jit_inlining_count?: InputMaybe<Bigint_Comparison_Exp>;
  jit_inlining_time?: InputMaybe<Float8_Comparison_Exp>;
  jit_optimization_count?: InputMaybe<Bigint_Comparison_Exp>;
  jit_optimization_time?: InputMaybe<Float8_Comparison_Exp>;
  local_blks_dirtied?: InputMaybe<Bigint_Comparison_Exp>;
  local_blks_hit?: InputMaybe<Bigint_Comparison_Exp>;
  local_blks_read?: InputMaybe<Bigint_Comparison_Exp>;
  local_blks_written?: InputMaybe<Bigint_Comparison_Exp>;
  max_exec_time?: InputMaybe<Float8_Comparison_Exp>;
  max_plan_time?: InputMaybe<Float8_Comparison_Exp>;
  mean_exec_time?: InputMaybe<Float8_Comparison_Exp>;
  mean_plan_time?: InputMaybe<Float8_Comparison_Exp>;
  min_exec_time?: InputMaybe<Float8_Comparison_Exp>;
  min_plan_time?: InputMaybe<Float8_Comparison_Exp>;
  plans?: InputMaybe<Bigint_Comparison_Exp>;
  query?: InputMaybe<String_Comparison_Exp>;
  queryid?: InputMaybe<Bigint_Comparison_Exp>;
  rows?: InputMaybe<Bigint_Comparison_Exp>;
  shared_blks_dirtied?: InputMaybe<Bigint_Comparison_Exp>;
  shared_blks_hit?: InputMaybe<Bigint_Comparison_Exp>;
  shared_blks_read?: InputMaybe<Bigint_Comparison_Exp>;
  shared_blks_written?: InputMaybe<Bigint_Comparison_Exp>;
  stddev_exec_time?: InputMaybe<Float8_Comparison_Exp>;
  stddev_plan_time?: InputMaybe<Float8_Comparison_Exp>;
  temp_blk_read_time?: InputMaybe<Float8_Comparison_Exp>;
  temp_blk_write_time?: InputMaybe<Float8_Comparison_Exp>;
  temp_blks_read?: InputMaybe<Bigint_Comparison_Exp>;
  temp_blks_written?: InputMaybe<Bigint_Comparison_Exp>;
  toplevel?: InputMaybe<Boolean_Comparison_Exp>;
  total_exec_time?: InputMaybe<Float8_Comparison_Exp>;
  total_plan_time?: InputMaybe<Float8_Comparison_Exp>;
  userid?: InputMaybe<Oid_Comparison_Exp>;
  wal_bytes?: InputMaybe<Numeric_Comparison_Exp>;
  wal_fpi?: InputMaybe<Bigint_Comparison_Exp>;
  wal_records?: InputMaybe<Bigint_Comparison_Exp>;
};

/** columns and relationships of "pg_stat_statements_info" */
export type Pg_Stat_Statements_Info = {
  dealloc?: Maybe<Scalars['bigint']['output']>;
  stats_reset?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "pg_stat_statements_info" */
export type Pg_Stat_Statements_Info_Aggregate = {
  aggregate?: Maybe<Pg_Stat_Statements_Info_Aggregate_Fields>;
  nodes: Array<Pg_Stat_Statements_Info>;
};

/** aggregate fields of "pg_stat_statements_info" */
export type Pg_Stat_Statements_Info_Aggregate_Fields = {
  avg?: Maybe<Pg_Stat_Statements_Info_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Pg_Stat_Statements_Info_Max_Fields>;
  min?: Maybe<Pg_Stat_Statements_Info_Min_Fields>;
  stddev?: Maybe<Pg_Stat_Statements_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Pg_Stat_Statements_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pg_Stat_Statements_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Pg_Stat_Statements_Info_Sum_Fields>;
  var_pop?: Maybe<Pg_Stat_Statements_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Pg_Stat_Statements_Info_Var_Samp_Fields>;
  variance?: Maybe<Pg_Stat_Statements_Info_Variance_Fields>;
};


/** aggregate fields of "pg_stat_statements_info" */
export type Pg_Stat_Statements_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pg_Stat_Statements_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Pg_Stat_Statements_Info_Avg_Fields = {
  dealloc?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "pg_stat_statements_info". All fields are combined with a logical 'AND'. */
export type Pg_Stat_Statements_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Pg_Stat_Statements_Info_Bool_Exp>>;
  _not?: InputMaybe<Pg_Stat_Statements_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Pg_Stat_Statements_Info_Bool_Exp>>;
  dealloc?: InputMaybe<Bigint_Comparison_Exp>;
  stats_reset?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Pg_Stat_Statements_Info_Max_Fields = {
  dealloc?: Maybe<Scalars['bigint']['output']>;
  stats_reset?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Pg_Stat_Statements_Info_Min_Fields = {
  dealloc?: Maybe<Scalars['bigint']['output']>;
  stats_reset?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "pg_stat_statements_info". */
export type Pg_Stat_Statements_Info_Order_By = {
  dealloc?: InputMaybe<Order_By>;
  stats_reset?: InputMaybe<Order_By>;
};

/** select columns of table "pg_stat_statements_info" */
export enum Pg_Stat_Statements_Info_Select_Column {
  /** column name */
  Dealloc = 'dealloc',
  /** column name */
  StatsReset = 'stats_reset'
}

/** aggregate stddev on columns */
export type Pg_Stat_Statements_Info_Stddev_Fields = {
  dealloc?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Pg_Stat_Statements_Info_Stddev_Pop_Fields = {
  dealloc?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Pg_Stat_Statements_Info_Stddev_Samp_Fields = {
  dealloc?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "pg_stat_statements_info" */
export type Pg_Stat_Statements_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pg_Stat_Statements_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pg_Stat_Statements_Info_Stream_Cursor_Value_Input = {
  dealloc?: InputMaybe<Scalars['bigint']['input']>;
  stats_reset?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Pg_Stat_Statements_Info_Sum_Fields = {
  dealloc?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Pg_Stat_Statements_Info_Var_Pop_Fields = {
  dealloc?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Pg_Stat_Statements_Info_Var_Samp_Fields = {
  dealloc?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Pg_Stat_Statements_Info_Variance_Fields = {
  dealloc?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Pg_Stat_Statements_Max_Fields = {
  blk_read_time?: Maybe<Scalars['float8']['output']>;
  blk_write_time?: Maybe<Scalars['float8']['output']>;
  calls?: Maybe<Scalars['bigint']['output']>;
  jit_emission_count?: Maybe<Scalars['bigint']['output']>;
  jit_emission_time?: Maybe<Scalars['float8']['output']>;
  jit_functions?: Maybe<Scalars['bigint']['output']>;
  jit_generation_time?: Maybe<Scalars['float8']['output']>;
  jit_inlining_count?: Maybe<Scalars['bigint']['output']>;
  jit_inlining_time?: Maybe<Scalars['float8']['output']>;
  jit_optimization_count?: Maybe<Scalars['bigint']['output']>;
  jit_optimization_time?: Maybe<Scalars['float8']['output']>;
  local_blks_dirtied?: Maybe<Scalars['bigint']['output']>;
  local_blks_hit?: Maybe<Scalars['bigint']['output']>;
  local_blks_read?: Maybe<Scalars['bigint']['output']>;
  local_blks_written?: Maybe<Scalars['bigint']['output']>;
  max_exec_time?: Maybe<Scalars['float8']['output']>;
  max_plan_time?: Maybe<Scalars['float8']['output']>;
  mean_exec_time?: Maybe<Scalars['float8']['output']>;
  mean_plan_time?: Maybe<Scalars['float8']['output']>;
  min_exec_time?: Maybe<Scalars['float8']['output']>;
  min_plan_time?: Maybe<Scalars['float8']['output']>;
  plans?: Maybe<Scalars['bigint']['output']>;
  query?: Maybe<Scalars['String']['output']>;
  queryid?: Maybe<Scalars['bigint']['output']>;
  rows?: Maybe<Scalars['bigint']['output']>;
  shared_blks_dirtied?: Maybe<Scalars['bigint']['output']>;
  shared_blks_hit?: Maybe<Scalars['bigint']['output']>;
  shared_blks_read?: Maybe<Scalars['bigint']['output']>;
  shared_blks_written?: Maybe<Scalars['bigint']['output']>;
  stddev_exec_time?: Maybe<Scalars['float8']['output']>;
  stddev_plan_time?: Maybe<Scalars['float8']['output']>;
  temp_blk_read_time?: Maybe<Scalars['float8']['output']>;
  temp_blk_write_time?: Maybe<Scalars['float8']['output']>;
  temp_blks_read?: Maybe<Scalars['bigint']['output']>;
  temp_blks_written?: Maybe<Scalars['bigint']['output']>;
  total_exec_time?: Maybe<Scalars['float8']['output']>;
  total_plan_time?: Maybe<Scalars['float8']['output']>;
  wal_bytes?: Maybe<Scalars['numeric']['output']>;
  wal_fpi?: Maybe<Scalars['bigint']['output']>;
  wal_records?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Pg_Stat_Statements_Min_Fields = {
  blk_read_time?: Maybe<Scalars['float8']['output']>;
  blk_write_time?: Maybe<Scalars['float8']['output']>;
  calls?: Maybe<Scalars['bigint']['output']>;
  jit_emission_count?: Maybe<Scalars['bigint']['output']>;
  jit_emission_time?: Maybe<Scalars['float8']['output']>;
  jit_functions?: Maybe<Scalars['bigint']['output']>;
  jit_generation_time?: Maybe<Scalars['float8']['output']>;
  jit_inlining_count?: Maybe<Scalars['bigint']['output']>;
  jit_inlining_time?: Maybe<Scalars['float8']['output']>;
  jit_optimization_count?: Maybe<Scalars['bigint']['output']>;
  jit_optimization_time?: Maybe<Scalars['float8']['output']>;
  local_blks_dirtied?: Maybe<Scalars['bigint']['output']>;
  local_blks_hit?: Maybe<Scalars['bigint']['output']>;
  local_blks_read?: Maybe<Scalars['bigint']['output']>;
  local_blks_written?: Maybe<Scalars['bigint']['output']>;
  max_exec_time?: Maybe<Scalars['float8']['output']>;
  max_plan_time?: Maybe<Scalars['float8']['output']>;
  mean_exec_time?: Maybe<Scalars['float8']['output']>;
  mean_plan_time?: Maybe<Scalars['float8']['output']>;
  min_exec_time?: Maybe<Scalars['float8']['output']>;
  min_plan_time?: Maybe<Scalars['float8']['output']>;
  plans?: Maybe<Scalars['bigint']['output']>;
  query?: Maybe<Scalars['String']['output']>;
  queryid?: Maybe<Scalars['bigint']['output']>;
  rows?: Maybe<Scalars['bigint']['output']>;
  shared_blks_dirtied?: Maybe<Scalars['bigint']['output']>;
  shared_blks_hit?: Maybe<Scalars['bigint']['output']>;
  shared_blks_read?: Maybe<Scalars['bigint']['output']>;
  shared_blks_written?: Maybe<Scalars['bigint']['output']>;
  stddev_exec_time?: Maybe<Scalars['float8']['output']>;
  stddev_plan_time?: Maybe<Scalars['float8']['output']>;
  temp_blk_read_time?: Maybe<Scalars['float8']['output']>;
  temp_blk_write_time?: Maybe<Scalars['float8']['output']>;
  temp_blks_read?: Maybe<Scalars['bigint']['output']>;
  temp_blks_written?: Maybe<Scalars['bigint']['output']>;
  total_exec_time?: Maybe<Scalars['float8']['output']>;
  total_plan_time?: Maybe<Scalars['float8']['output']>;
  wal_bytes?: Maybe<Scalars['numeric']['output']>;
  wal_fpi?: Maybe<Scalars['bigint']['output']>;
  wal_records?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "pg_stat_statements". */
export type Pg_Stat_Statements_Order_By = {
  blk_read_time?: InputMaybe<Order_By>;
  blk_write_time?: InputMaybe<Order_By>;
  calls?: InputMaybe<Order_By>;
  dbid?: InputMaybe<Order_By>;
  jit_emission_count?: InputMaybe<Order_By>;
  jit_emission_time?: InputMaybe<Order_By>;
  jit_functions?: InputMaybe<Order_By>;
  jit_generation_time?: InputMaybe<Order_By>;
  jit_inlining_count?: InputMaybe<Order_By>;
  jit_inlining_time?: InputMaybe<Order_By>;
  jit_optimization_count?: InputMaybe<Order_By>;
  jit_optimization_time?: InputMaybe<Order_By>;
  local_blks_dirtied?: InputMaybe<Order_By>;
  local_blks_hit?: InputMaybe<Order_By>;
  local_blks_read?: InputMaybe<Order_By>;
  local_blks_written?: InputMaybe<Order_By>;
  max_exec_time?: InputMaybe<Order_By>;
  max_plan_time?: InputMaybe<Order_By>;
  mean_exec_time?: InputMaybe<Order_By>;
  mean_plan_time?: InputMaybe<Order_By>;
  min_exec_time?: InputMaybe<Order_By>;
  min_plan_time?: InputMaybe<Order_By>;
  plans?: InputMaybe<Order_By>;
  query?: InputMaybe<Order_By>;
  queryid?: InputMaybe<Order_By>;
  rows?: InputMaybe<Order_By>;
  shared_blks_dirtied?: InputMaybe<Order_By>;
  shared_blks_hit?: InputMaybe<Order_By>;
  shared_blks_read?: InputMaybe<Order_By>;
  shared_blks_written?: InputMaybe<Order_By>;
  stddev_exec_time?: InputMaybe<Order_By>;
  stddev_plan_time?: InputMaybe<Order_By>;
  temp_blk_read_time?: InputMaybe<Order_By>;
  temp_blk_write_time?: InputMaybe<Order_By>;
  temp_blks_read?: InputMaybe<Order_By>;
  temp_blks_written?: InputMaybe<Order_By>;
  toplevel?: InputMaybe<Order_By>;
  total_exec_time?: InputMaybe<Order_By>;
  total_plan_time?: InputMaybe<Order_By>;
  userid?: InputMaybe<Order_By>;
  wal_bytes?: InputMaybe<Order_By>;
  wal_fpi?: InputMaybe<Order_By>;
  wal_records?: InputMaybe<Order_By>;
};

/** select columns of table "pg_stat_statements" */
export enum Pg_Stat_Statements_Select_Column {
  /** column name */
  BlkReadTime = 'blk_read_time',
  /** column name */
  BlkWriteTime = 'blk_write_time',
  /** column name */
  Calls = 'calls',
  /** column name */
  Dbid = 'dbid',
  /** column name */
  JitEmissionCount = 'jit_emission_count',
  /** column name */
  JitEmissionTime = 'jit_emission_time',
  /** column name */
  JitFunctions = 'jit_functions',
  /** column name */
  JitGenerationTime = 'jit_generation_time',
  /** column name */
  JitInliningCount = 'jit_inlining_count',
  /** column name */
  JitInliningTime = 'jit_inlining_time',
  /** column name */
  JitOptimizationCount = 'jit_optimization_count',
  /** column name */
  JitOptimizationTime = 'jit_optimization_time',
  /** column name */
  LocalBlksDirtied = 'local_blks_dirtied',
  /** column name */
  LocalBlksHit = 'local_blks_hit',
  /** column name */
  LocalBlksRead = 'local_blks_read',
  /** column name */
  LocalBlksWritten = 'local_blks_written',
  /** column name */
  MaxExecTime = 'max_exec_time',
  /** column name */
  MaxPlanTime = 'max_plan_time',
  /** column name */
  MeanExecTime = 'mean_exec_time',
  /** column name */
  MeanPlanTime = 'mean_plan_time',
  /** column name */
  MinExecTime = 'min_exec_time',
  /** column name */
  MinPlanTime = 'min_plan_time',
  /** column name */
  Plans = 'plans',
  /** column name */
  Query = 'query',
  /** column name */
  Queryid = 'queryid',
  /** column name */
  Rows = 'rows',
  /** column name */
  SharedBlksDirtied = 'shared_blks_dirtied',
  /** column name */
  SharedBlksHit = 'shared_blks_hit',
  /** column name */
  SharedBlksRead = 'shared_blks_read',
  /** column name */
  SharedBlksWritten = 'shared_blks_written',
  /** column name */
  StddevExecTime = 'stddev_exec_time',
  /** column name */
  StddevPlanTime = 'stddev_plan_time',
  /** column name */
  TempBlkReadTime = 'temp_blk_read_time',
  /** column name */
  TempBlkWriteTime = 'temp_blk_write_time',
  /** column name */
  TempBlksRead = 'temp_blks_read',
  /** column name */
  TempBlksWritten = 'temp_blks_written',
  /** column name */
  Toplevel = 'toplevel',
  /** column name */
  TotalExecTime = 'total_exec_time',
  /** column name */
  TotalPlanTime = 'total_plan_time',
  /** column name */
  Userid = 'userid',
  /** column name */
  WalBytes = 'wal_bytes',
  /** column name */
  WalFpi = 'wal_fpi',
  /** column name */
  WalRecords = 'wal_records'
}

/** aggregate stddev on columns */
export type Pg_Stat_Statements_Stddev_Fields = {
  blk_read_time?: Maybe<Scalars['Float']['output']>;
  blk_write_time?: Maybe<Scalars['Float']['output']>;
  calls?: Maybe<Scalars['Float']['output']>;
  jit_emission_count?: Maybe<Scalars['Float']['output']>;
  jit_emission_time?: Maybe<Scalars['Float']['output']>;
  jit_functions?: Maybe<Scalars['Float']['output']>;
  jit_generation_time?: Maybe<Scalars['Float']['output']>;
  jit_inlining_count?: Maybe<Scalars['Float']['output']>;
  jit_inlining_time?: Maybe<Scalars['Float']['output']>;
  jit_optimization_count?: Maybe<Scalars['Float']['output']>;
  jit_optimization_time?: Maybe<Scalars['Float']['output']>;
  local_blks_dirtied?: Maybe<Scalars['Float']['output']>;
  local_blks_hit?: Maybe<Scalars['Float']['output']>;
  local_blks_read?: Maybe<Scalars['Float']['output']>;
  local_blks_written?: Maybe<Scalars['Float']['output']>;
  max_exec_time?: Maybe<Scalars['Float']['output']>;
  max_plan_time?: Maybe<Scalars['Float']['output']>;
  mean_exec_time?: Maybe<Scalars['Float']['output']>;
  mean_plan_time?: Maybe<Scalars['Float']['output']>;
  min_exec_time?: Maybe<Scalars['Float']['output']>;
  min_plan_time?: Maybe<Scalars['Float']['output']>;
  plans?: Maybe<Scalars['Float']['output']>;
  queryid?: Maybe<Scalars['Float']['output']>;
  rows?: Maybe<Scalars['Float']['output']>;
  shared_blks_dirtied?: Maybe<Scalars['Float']['output']>;
  shared_blks_hit?: Maybe<Scalars['Float']['output']>;
  shared_blks_read?: Maybe<Scalars['Float']['output']>;
  shared_blks_written?: Maybe<Scalars['Float']['output']>;
  stddev_exec_time?: Maybe<Scalars['Float']['output']>;
  stddev_plan_time?: Maybe<Scalars['Float']['output']>;
  temp_blk_read_time?: Maybe<Scalars['Float']['output']>;
  temp_blk_write_time?: Maybe<Scalars['Float']['output']>;
  temp_blks_read?: Maybe<Scalars['Float']['output']>;
  temp_blks_written?: Maybe<Scalars['Float']['output']>;
  total_exec_time?: Maybe<Scalars['Float']['output']>;
  total_plan_time?: Maybe<Scalars['Float']['output']>;
  wal_bytes?: Maybe<Scalars['Float']['output']>;
  wal_fpi?: Maybe<Scalars['Float']['output']>;
  wal_records?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Pg_Stat_Statements_Stddev_Pop_Fields = {
  blk_read_time?: Maybe<Scalars['Float']['output']>;
  blk_write_time?: Maybe<Scalars['Float']['output']>;
  calls?: Maybe<Scalars['Float']['output']>;
  jit_emission_count?: Maybe<Scalars['Float']['output']>;
  jit_emission_time?: Maybe<Scalars['Float']['output']>;
  jit_functions?: Maybe<Scalars['Float']['output']>;
  jit_generation_time?: Maybe<Scalars['Float']['output']>;
  jit_inlining_count?: Maybe<Scalars['Float']['output']>;
  jit_inlining_time?: Maybe<Scalars['Float']['output']>;
  jit_optimization_count?: Maybe<Scalars['Float']['output']>;
  jit_optimization_time?: Maybe<Scalars['Float']['output']>;
  local_blks_dirtied?: Maybe<Scalars['Float']['output']>;
  local_blks_hit?: Maybe<Scalars['Float']['output']>;
  local_blks_read?: Maybe<Scalars['Float']['output']>;
  local_blks_written?: Maybe<Scalars['Float']['output']>;
  max_exec_time?: Maybe<Scalars['Float']['output']>;
  max_plan_time?: Maybe<Scalars['Float']['output']>;
  mean_exec_time?: Maybe<Scalars['Float']['output']>;
  mean_plan_time?: Maybe<Scalars['Float']['output']>;
  min_exec_time?: Maybe<Scalars['Float']['output']>;
  min_plan_time?: Maybe<Scalars['Float']['output']>;
  plans?: Maybe<Scalars['Float']['output']>;
  queryid?: Maybe<Scalars['Float']['output']>;
  rows?: Maybe<Scalars['Float']['output']>;
  shared_blks_dirtied?: Maybe<Scalars['Float']['output']>;
  shared_blks_hit?: Maybe<Scalars['Float']['output']>;
  shared_blks_read?: Maybe<Scalars['Float']['output']>;
  shared_blks_written?: Maybe<Scalars['Float']['output']>;
  stddev_exec_time?: Maybe<Scalars['Float']['output']>;
  stddev_plan_time?: Maybe<Scalars['Float']['output']>;
  temp_blk_read_time?: Maybe<Scalars['Float']['output']>;
  temp_blk_write_time?: Maybe<Scalars['Float']['output']>;
  temp_blks_read?: Maybe<Scalars['Float']['output']>;
  temp_blks_written?: Maybe<Scalars['Float']['output']>;
  total_exec_time?: Maybe<Scalars['Float']['output']>;
  total_plan_time?: Maybe<Scalars['Float']['output']>;
  wal_bytes?: Maybe<Scalars['Float']['output']>;
  wal_fpi?: Maybe<Scalars['Float']['output']>;
  wal_records?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Pg_Stat_Statements_Stddev_Samp_Fields = {
  blk_read_time?: Maybe<Scalars['Float']['output']>;
  blk_write_time?: Maybe<Scalars['Float']['output']>;
  calls?: Maybe<Scalars['Float']['output']>;
  jit_emission_count?: Maybe<Scalars['Float']['output']>;
  jit_emission_time?: Maybe<Scalars['Float']['output']>;
  jit_functions?: Maybe<Scalars['Float']['output']>;
  jit_generation_time?: Maybe<Scalars['Float']['output']>;
  jit_inlining_count?: Maybe<Scalars['Float']['output']>;
  jit_inlining_time?: Maybe<Scalars['Float']['output']>;
  jit_optimization_count?: Maybe<Scalars['Float']['output']>;
  jit_optimization_time?: Maybe<Scalars['Float']['output']>;
  local_blks_dirtied?: Maybe<Scalars['Float']['output']>;
  local_blks_hit?: Maybe<Scalars['Float']['output']>;
  local_blks_read?: Maybe<Scalars['Float']['output']>;
  local_blks_written?: Maybe<Scalars['Float']['output']>;
  max_exec_time?: Maybe<Scalars['Float']['output']>;
  max_plan_time?: Maybe<Scalars['Float']['output']>;
  mean_exec_time?: Maybe<Scalars['Float']['output']>;
  mean_plan_time?: Maybe<Scalars['Float']['output']>;
  min_exec_time?: Maybe<Scalars['Float']['output']>;
  min_plan_time?: Maybe<Scalars['Float']['output']>;
  plans?: Maybe<Scalars['Float']['output']>;
  queryid?: Maybe<Scalars['Float']['output']>;
  rows?: Maybe<Scalars['Float']['output']>;
  shared_blks_dirtied?: Maybe<Scalars['Float']['output']>;
  shared_blks_hit?: Maybe<Scalars['Float']['output']>;
  shared_blks_read?: Maybe<Scalars['Float']['output']>;
  shared_blks_written?: Maybe<Scalars['Float']['output']>;
  stddev_exec_time?: Maybe<Scalars['Float']['output']>;
  stddev_plan_time?: Maybe<Scalars['Float']['output']>;
  temp_blk_read_time?: Maybe<Scalars['Float']['output']>;
  temp_blk_write_time?: Maybe<Scalars['Float']['output']>;
  temp_blks_read?: Maybe<Scalars['Float']['output']>;
  temp_blks_written?: Maybe<Scalars['Float']['output']>;
  total_exec_time?: Maybe<Scalars['Float']['output']>;
  total_plan_time?: Maybe<Scalars['Float']['output']>;
  wal_bytes?: Maybe<Scalars['Float']['output']>;
  wal_fpi?: Maybe<Scalars['Float']['output']>;
  wal_records?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "pg_stat_statements" */
export type Pg_Stat_Statements_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pg_Stat_Statements_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pg_Stat_Statements_Stream_Cursor_Value_Input = {
  blk_read_time?: InputMaybe<Scalars['float8']['input']>;
  blk_write_time?: InputMaybe<Scalars['float8']['input']>;
  calls?: InputMaybe<Scalars['bigint']['input']>;
  dbid?: InputMaybe<Scalars['oid']['input']>;
  jit_emission_count?: InputMaybe<Scalars['bigint']['input']>;
  jit_emission_time?: InputMaybe<Scalars['float8']['input']>;
  jit_functions?: InputMaybe<Scalars['bigint']['input']>;
  jit_generation_time?: InputMaybe<Scalars['float8']['input']>;
  jit_inlining_count?: InputMaybe<Scalars['bigint']['input']>;
  jit_inlining_time?: InputMaybe<Scalars['float8']['input']>;
  jit_optimization_count?: InputMaybe<Scalars['bigint']['input']>;
  jit_optimization_time?: InputMaybe<Scalars['float8']['input']>;
  local_blks_dirtied?: InputMaybe<Scalars['bigint']['input']>;
  local_blks_hit?: InputMaybe<Scalars['bigint']['input']>;
  local_blks_read?: InputMaybe<Scalars['bigint']['input']>;
  local_blks_written?: InputMaybe<Scalars['bigint']['input']>;
  max_exec_time?: InputMaybe<Scalars['float8']['input']>;
  max_plan_time?: InputMaybe<Scalars['float8']['input']>;
  mean_exec_time?: InputMaybe<Scalars['float8']['input']>;
  mean_plan_time?: InputMaybe<Scalars['float8']['input']>;
  min_exec_time?: InputMaybe<Scalars['float8']['input']>;
  min_plan_time?: InputMaybe<Scalars['float8']['input']>;
  plans?: InputMaybe<Scalars['bigint']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  queryid?: InputMaybe<Scalars['bigint']['input']>;
  rows?: InputMaybe<Scalars['bigint']['input']>;
  shared_blks_dirtied?: InputMaybe<Scalars['bigint']['input']>;
  shared_blks_hit?: InputMaybe<Scalars['bigint']['input']>;
  shared_blks_read?: InputMaybe<Scalars['bigint']['input']>;
  shared_blks_written?: InputMaybe<Scalars['bigint']['input']>;
  stddev_exec_time?: InputMaybe<Scalars['float8']['input']>;
  stddev_plan_time?: InputMaybe<Scalars['float8']['input']>;
  temp_blk_read_time?: InputMaybe<Scalars['float8']['input']>;
  temp_blk_write_time?: InputMaybe<Scalars['float8']['input']>;
  temp_blks_read?: InputMaybe<Scalars['bigint']['input']>;
  temp_blks_written?: InputMaybe<Scalars['bigint']['input']>;
  toplevel?: InputMaybe<Scalars['Boolean']['input']>;
  total_exec_time?: InputMaybe<Scalars['float8']['input']>;
  total_plan_time?: InputMaybe<Scalars['float8']['input']>;
  userid?: InputMaybe<Scalars['oid']['input']>;
  wal_bytes?: InputMaybe<Scalars['numeric']['input']>;
  wal_fpi?: InputMaybe<Scalars['bigint']['input']>;
  wal_records?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Pg_Stat_Statements_Sum_Fields = {
  blk_read_time?: Maybe<Scalars['float8']['output']>;
  blk_write_time?: Maybe<Scalars['float8']['output']>;
  calls?: Maybe<Scalars['bigint']['output']>;
  jit_emission_count?: Maybe<Scalars['bigint']['output']>;
  jit_emission_time?: Maybe<Scalars['float8']['output']>;
  jit_functions?: Maybe<Scalars['bigint']['output']>;
  jit_generation_time?: Maybe<Scalars['float8']['output']>;
  jit_inlining_count?: Maybe<Scalars['bigint']['output']>;
  jit_inlining_time?: Maybe<Scalars['float8']['output']>;
  jit_optimization_count?: Maybe<Scalars['bigint']['output']>;
  jit_optimization_time?: Maybe<Scalars['float8']['output']>;
  local_blks_dirtied?: Maybe<Scalars['bigint']['output']>;
  local_blks_hit?: Maybe<Scalars['bigint']['output']>;
  local_blks_read?: Maybe<Scalars['bigint']['output']>;
  local_blks_written?: Maybe<Scalars['bigint']['output']>;
  max_exec_time?: Maybe<Scalars['float8']['output']>;
  max_plan_time?: Maybe<Scalars['float8']['output']>;
  mean_exec_time?: Maybe<Scalars['float8']['output']>;
  mean_plan_time?: Maybe<Scalars['float8']['output']>;
  min_exec_time?: Maybe<Scalars['float8']['output']>;
  min_plan_time?: Maybe<Scalars['float8']['output']>;
  plans?: Maybe<Scalars['bigint']['output']>;
  queryid?: Maybe<Scalars['bigint']['output']>;
  rows?: Maybe<Scalars['bigint']['output']>;
  shared_blks_dirtied?: Maybe<Scalars['bigint']['output']>;
  shared_blks_hit?: Maybe<Scalars['bigint']['output']>;
  shared_blks_read?: Maybe<Scalars['bigint']['output']>;
  shared_blks_written?: Maybe<Scalars['bigint']['output']>;
  stddev_exec_time?: Maybe<Scalars['float8']['output']>;
  stddev_plan_time?: Maybe<Scalars['float8']['output']>;
  temp_blk_read_time?: Maybe<Scalars['float8']['output']>;
  temp_blk_write_time?: Maybe<Scalars['float8']['output']>;
  temp_blks_read?: Maybe<Scalars['bigint']['output']>;
  temp_blks_written?: Maybe<Scalars['bigint']['output']>;
  total_exec_time?: Maybe<Scalars['float8']['output']>;
  total_plan_time?: Maybe<Scalars['float8']['output']>;
  wal_bytes?: Maybe<Scalars['numeric']['output']>;
  wal_fpi?: Maybe<Scalars['bigint']['output']>;
  wal_records?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Pg_Stat_Statements_Var_Pop_Fields = {
  blk_read_time?: Maybe<Scalars['Float']['output']>;
  blk_write_time?: Maybe<Scalars['Float']['output']>;
  calls?: Maybe<Scalars['Float']['output']>;
  jit_emission_count?: Maybe<Scalars['Float']['output']>;
  jit_emission_time?: Maybe<Scalars['Float']['output']>;
  jit_functions?: Maybe<Scalars['Float']['output']>;
  jit_generation_time?: Maybe<Scalars['Float']['output']>;
  jit_inlining_count?: Maybe<Scalars['Float']['output']>;
  jit_inlining_time?: Maybe<Scalars['Float']['output']>;
  jit_optimization_count?: Maybe<Scalars['Float']['output']>;
  jit_optimization_time?: Maybe<Scalars['Float']['output']>;
  local_blks_dirtied?: Maybe<Scalars['Float']['output']>;
  local_blks_hit?: Maybe<Scalars['Float']['output']>;
  local_blks_read?: Maybe<Scalars['Float']['output']>;
  local_blks_written?: Maybe<Scalars['Float']['output']>;
  max_exec_time?: Maybe<Scalars['Float']['output']>;
  max_plan_time?: Maybe<Scalars['Float']['output']>;
  mean_exec_time?: Maybe<Scalars['Float']['output']>;
  mean_plan_time?: Maybe<Scalars['Float']['output']>;
  min_exec_time?: Maybe<Scalars['Float']['output']>;
  min_plan_time?: Maybe<Scalars['Float']['output']>;
  plans?: Maybe<Scalars['Float']['output']>;
  queryid?: Maybe<Scalars['Float']['output']>;
  rows?: Maybe<Scalars['Float']['output']>;
  shared_blks_dirtied?: Maybe<Scalars['Float']['output']>;
  shared_blks_hit?: Maybe<Scalars['Float']['output']>;
  shared_blks_read?: Maybe<Scalars['Float']['output']>;
  shared_blks_written?: Maybe<Scalars['Float']['output']>;
  stddev_exec_time?: Maybe<Scalars['Float']['output']>;
  stddev_plan_time?: Maybe<Scalars['Float']['output']>;
  temp_blk_read_time?: Maybe<Scalars['Float']['output']>;
  temp_blk_write_time?: Maybe<Scalars['Float']['output']>;
  temp_blks_read?: Maybe<Scalars['Float']['output']>;
  temp_blks_written?: Maybe<Scalars['Float']['output']>;
  total_exec_time?: Maybe<Scalars['Float']['output']>;
  total_plan_time?: Maybe<Scalars['Float']['output']>;
  wal_bytes?: Maybe<Scalars['Float']['output']>;
  wal_fpi?: Maybe<Scalars['Float']['output']>;
  wal_records?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Pg_Stat_Statements_Var_Samp_Fields = {
  blk_read_time?: Maybe<Scalars['Float']['output']>;
  blk_write_time?: Maybe<Scalars['Float']['output']>;
  calls?: Maybe<Scalars['Float']['output']>;
  jit_emission_count?: Maybe<Scalars['Float']['output']>;
  jit_emission_time?: Maybe<Scalars['Float']['output']>;
  jit_functions?: Maybe<Scalars['Float']['output']>;
  jit_generation_time?: Maybe<Scalars['Float']['output']>;
  jit_inlining_count?: Maybe<Scalars['Float']['output']>;
  jit_inlining_time?: Maybe<Scalars['Float']['output']>;
  jit_optimization_count?: Maybe<Scalars['Float']['output']>;
  jit_optimization_time?: Maybe<Scalars['Float']['output']>;
  local_blks_dirtied?: Maybe<Scalars['Float']['output']>;
  local_blks_hit?: Maybe<Scalars['Float']['output']>;
  local_blks_read?: Maybe<Scalars['Float']['output']>;
  local_blks_written?: Maybe<Scalars['Float']['output']>;
  max_exec_time?: Maybe<Scalars['Float']['output']>;
  max_plan_time?: Maybe<Scalars['Float']['output']>;
  mean_exec_time?: Maybe<Scalars['Float']['output']>;
  mean_plan_time?: Maybe<Scalars['Float']['output']>;
  min_exec_time?: Maybe<Scalars['Float']['output']>;
  min_plan_time?: Maybe<Scalars['Float']['output']>;
  plans?: Maybe<Scalars['Float']['output']>;
  queryid?: Maybe<Scalars['Float']['output']>;
  rows?: Maybe<Scalars['Float']['output']>;
  shared_blks_dirtied?: Maybe<Scalars['Float']['output']>;
  shared_blks_hit?: Maybe<Scalars['Float']['output']>;
  shared_blks_read?: Maybe<Scalars['Float']['output']>;
  shared_blks_written?: Maybe<Scalars['Float']['output']>;
  stddev_exec_time?: Maybe<Scalars['Float']['output']>;
  stddev_plan_time?: Maybe<Scalars['Float']['output']>;
  temp_blk_read_time?: Maybe<Scalars['Float']['output']>;
  temp_blk_write_time?: Maybe<Scalars['Float']['output']>;
  temp_blks_read?: Maybe<Scalars['Float']['output']>;
  temp_blks_written?: Maybe<Scalars['Float']['output']>;
  total_exec_time?: Maybe<Scalars['Float']['output']>;
  total_plan_time?: Maybe<Scalars['Float']['output']>;
  wal_bytes?: Maybe<Scalars['Float']['output']>;
  wal_fpi?: Maybe<Scalars['Float']['output']>;
  wal_records?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Pg_Stat_Statements_Variance_Fields = {
  blk_read_time?: Maybe<Scalars['Float']['output']>;
  blk_write_time?: Maybe<Scalars['Float']['output']>;
  calls?: Maybe<Scalars['Float']['output']>;
  jit_emission_count?: Maybe<Scalars['Float']['output']>;
  jit_emission_time?: Maybe<Scalars['Float']['output']>;
  jit_functions?: Maybe<Scalars['Float']['output']>;
  jit_generation_time?: Maybe<Scalars['Float']['output']>;
  jit_inlining_count?: Maybe<Scalars['Float']['output']>;
  jit_inlining_time?: Maybe<Scalars['Float']['output']>;
  jit_optimization_count?: Maybe<Scalars['Float']['output']>;
  jit_optimization_time?: Maybe<Scalars['Float']['output']>;
  local_blks_dirtied?: Maybe<Scalars['Float']['output']>;
  local_blks_hit?: Maybe<Scalars['Float']['output']>;
  local_blks_read?: Maybe<Scalars['Float']['output']>;
  local_blks_written?: Maybe<Scalars['Float']['output']>;
  max_exec_time?: Maybe<Scalars['Float']['output']>;
  max_plan_time?: Maybe<Scalars['Float']['output']>;
  mean_exec_time?: Maybe<Scalars['Float']['output']>;
  mean_plan_time?: Maybe<Scalars['Float']['output']>;
  min_exec_time?: Maybe<Scalars['Float']['output']>;
  min_plan_time?: Maybe<Scalars['Float']['output']>;
  plans?: Maybe<Scalars['Float']['output']>;
  queryid?: Maybe<Scalars['Float']['output']>;
  rows?: Maybe<Scalars['Float']['output']>;
  shared_blks_dirtied?: Maybe<Scalars['Float']['output']>;
  shared_blks_hit?: Maybe<Scalars['Float']['output']>;
  shared_blks_read?: Maybe<Scalars['Float']['output']>;
  shared_blks_written?: Maybe<Scalars['Float']['output']>;
  stddev_exec_time?: Maybe<Scalars['Float']['output']>;
  stddev_plan_time?: Maybe<Scalars['Float']['output']>;
  temp_blk_read_time?: Maybe<Scalars['Float']['output']>;
  temp_blk_write_time?: Maybe<Scalars['Float']['output']>;
  temp_blks_read?: Maybe<Scalars['Float']['output']>;
  temp_blks_written?: Maybe<Scalars['Float']['output']>;
  total_exec_time?: Maybe<Scalars['Float']['output']>;
  total_plan_time?: Maybe<Scalars['Float']['output']>;
  wal_bytes?: Maybe<Scalars['Float']['output']>;
  wal_fpi?: Maybe<Scalars['Float']['output']>;
  wal_records?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  /** fetch data from the table: "ads" */
  ads: Array<Ads>;
  /** fetch aggregated fields from the table: "ads" */
  ads_aggregate: Ads_Aggregate;
  /** fetch data from the table: "ads" using primary key columns */
  ads_by_pk?: Maybe<Ads>;
  /** fetch data from the table: "application_sign_in_experiences" */
  application_sign_in_experiences: Array<Application_Sign_In_Experiences>;
  /** fetch aggregated fields from the table: "application_sign_in_experiences" */
  application_sign_in_experiences_aggregate: Application_Sign_In_Experiences_Aggregate;
  /** fetch data from the table: "application_sign_in_experiences" using primary key columns */
  application_sign_in_experiences_by_pk?: Maybe<Application_Sign_In_Experiences>;
  /** fetch data from the table: "application_user_consent_organization_scopes" */
  application_user_consent_organization_scopes: Array<Application_User_Consent_Organization_Scopes>;
  /** fetch aggregated fields from the table: "application_user_consent_organization_scopes" */
  application_user_consent_organization_scopes_aggregate: Application_User_Consent_Organization_Scopes_Aggregate;
  /** fetch data from the table: "application_user_consent_organization_scopes" using primary key columns */
  application_user_consent_organization_scopes_by_pk?: Maybe<Application_User_Consent_Organization_Scopes>;
  /** fetch data from the table: "application_user_consent_organizations" */
  application_user_consent_organizations: Array<Application_User_Consent_Organizations>;
  /** fetch aggregated fields from the table: "application_user_consent_organizations" */
  application_user_consent_organizations_aggregate: Application_User_Consent_Organizations_Aggregate;
  /** fetch data from the table: "application_user_consent_organizations" using primary key columns */
  application_user_consent_organizations_by_pk?: Maybe<Application_User_Consent_Organizations>;
  /** fetch data from the table: "application_user_consent_resource_scopes" */
  application_user_consent_resource_scopes: Array<Application_User_Consent_Resource_Scopes>;
  /** fetch aggregated fields from the table: "application_user_consent_resource_scopes" */
  application_user_consent_resource_scopes_aggregate: Application_User_Consent_Resource_Scopes_Aggregate;
  /** fetch data from the table: "application_user_consent_resource_scopes" using primary key columns */
  application_user_consent_resource_scopes_by_pk?: Maybe<Application_User_Consent_Resource_Scopes>;
  /** fetch data from the table: "application_user_consent_user_scopes" */
  application_user_consent_user_scopes: Array<Application_User_Consent_User_Scopes>;
  /** fetch aggregated fields from the table: "application_user_consent_user_scopes" */
  application_user_consent_user_scopes_aggregate: Application_User_Consent_User_Scopes_Aggregate;
  /** fetch data from the table: "application_user_consent_user_scopes" using primary key columns */
  application_user_consent_user_scopes_by_pk?: Maybe<Application_User_Consent_User_Scopes>;
  /** fetch data from the table: "applications" */
  applications: Array<Applications>;
  /** fetch aggregated fields from the table: "applications" */
  applications_aggregate: Applications_Aggregate;
  /** fetch data from the table: "applications" using primary key columns */
  applications_by_pk?: Maybe<Applications>;
  /** fetch data from the table: "applications_roles" */
  applications_roles: Array<Applications_Roles>;
  /** fetch aggregated fields from the table: "applications_roles" */
  applications_roles_aggregate: Applications_Roles_Aggregate;
  /** fetch data from the table: "applications_roles" using primary key columns */
  applications_roles_by_pk?: Maybe<Applications_Roles>;
  /** fetch data from the table: "check_in_settings" */
  check_in_settings: Array<Check_In_Settings>;
  /** fetch aggregated fields from the table: "check_in_settings" */
  check_in_settings_aggregate: Check_In_Settings_Aggregate;
  /** fetch data from the table: "check_in_settings" using primary key columns */
  check_in_settings_by_pk?: Maybe<Check_In_Settings>;
  /** fetch data from the table: "check_ins" */
  check_ins: Array<Check_Ins>;
  /** fetch aggregated fields from the table: "check_ins" */
  check_ins_aggregate: Check_Ins_Aggregate;
  /** fetch data from the table: "check_ins" using primary key columns */
  check_ins_by_pk?: Maybe<Check_Ins>;
  /** fetch data from the table: "cholesterol_records" */
  cholesterol_records: Array<Cholesterol_Records>;
  /** fetch aggregated fields from the table: "cholesterol_records" */
  cholesterol_records_aggregate: Cholesterol_Records_Aggregate;
  /** fetch data from the table: "cholesterol_records" using primary key columns */
  cholesterol_records_by_pk?: Maybe<Cholesterol_Records>;
  /** fetch data from the table: "cholesterol_standards" */
  cholesterol_standards: Array<Cholesterol_Standards>;
  /** fetch aggregated fields from the table: "cholesterol_standards" */
  cholesterol_standards_aggregate: Cholesterol_Standards_Aggregate;
  /** fetch data from the table: "cholesterol_standards" using primary key columns */
  cholesterol_standards_by_pk?: Maybe<Cholesterol_Standards>;
  /** fetch data from the table: "connectors" */
  connectors: Array<Connectors>;
  /** fetch aggregated fields from the table: "connectors" */
  connectors_aggregate: Connectors_Aggregate;
  /** fetch data from the table: "connectors" using primary key columns */
  connectors_by_pk?: Maybe<Connectors>;
  /** fetch data from the table: "custom_phrases" */
  custom_phrases: Array<Custom_Phrases>;
  /** fetch aggregated fields from the table: "custom_phrases" */
  custom_phrases_aggregate: Custom_Phrases_Aggregate;
  /** fetch data from the table: "custom_phrases" using primary key columns */
  custom_phrases_by_pk?: Maybe<Custom_Phrases>;
  /** fetch data from the table: "daily_active_users" */
  daily_active_users: Array<Daily_Active_Users>;
  /** fetch aggregated fields from the table: "daily_active_users" */
  daily_active_users_aggregate: Daily_Active_Users_Aggregate;
  /** fetch data from the table: "daily_active_users" using primary key columns */
  daily_active_users_by_pk?: Maybe<Daily_Active_Users>;
  /** fetch data from the table: "daily_token_usage" */
  daily_token_usage: Array<Daily_Token_Usage>;
  /** fetch aggregated fields from the table: "daily_token_usage" */
  daily_token_usage_aggregate: Daily_Token_Usage_Aggregate;
  /** fetch data from the table: "daily_token_usage" using primary key columns */
  daily_token_usage_by_pk?: Maybe<Daily_Token_Usage>;
  /** fetch data from the table: "domains" */
  domains: Array<Domains>;
  /** fetch aggregated fields from the table: "domains" */
  domains_aggregate: Domains_Aggregate;
  /** fetch data from the table: "domains" using primary key columns */
  domains_by_pk?: Maybe<Domains>;
  /** fetch data from the table: "glucose_records" */
  glucose_records: Array<Glucose_Records>;
  /** fetch aggregated fields from the table: "glucose_records" */
  glucose_records_aggregate: Glucose_Records_Aggregate;
  /** fetch data from the table: "glucose_records" using primary key columns */
  glucose_records_by_pk?: Maybe<Glucose_Records>;
  /** fetch data from the table: "glucose_standards" */
  glucose_standards: Array<Glucose_Standards>;
  /** fetch aggregated fields from the table: "glucose_standards" */
  glucose_standards_aggregate: Glucose_Standards_Aggregate;
  /** fetch data from the table: "glucose_standards" using primary key columns */
  glucose_standards_by_pk?: Maybe<Glucose_Standards>;
  /** fetch data from the table: "hooks" */
  hooks: Array<Hooks>;
  /** fetch aggregated fields from the table: "hooks" */
  hooks_aggregate: Hooks_Aggregate;
  /** fetch data from the table: "hooks" using primary key columns */
  hooks_by_pk?: Maybe<Hooks>;
  /** fetch data from the table: "lab_report_records" */
  lab_report_records: Array<Lab_Report_Records>;
  /** fetch aggregated fields from the table: "lab_report_records" */
  lab_report_records_aggregate: Lab_Report_Records_Aggregate;
  /** fetch data from the table: "lab_report_records" using primary key columns */
  lab_report_records_by_pk?: Maybe<Lab_Report_Records>;
  /** fetch data from the table: "logs" */
  logs: Array<Logs>;
  /** fetch aggregated fields from the table: "logs" */
  logs_aggregate: Logs_Aggregate;
  /** fetch data from the table: "logs" using primary key columns */
  logs_by_pk?: Maybe<Logs>;
  /** fetch data from the table: "logto_configs" */
  logto_configs: Array<Logto_Configs>;
  /** fetch aggregated fields from the table: "logto_configs" */
  logto_configs_aggregate: Logto_Configs_Aggregate;
  /** fetch data from the table: "logto_configs" using primary key columns */
  logto_configs_by_pk?: Maybe<Logto_Configs>;
  /** fetch data from the table: "medical_examination_records" */
  medical_examination_records: Array<Medical_Examination_Records>;
  /** fetch aggregated fields from the table: "medical_examination_records" */
  medical_examination_records_aggregate: Medical_Examination_Records_Aggregate;
  /** fetch data from the table: "medical_examination_records" using primary key columns */
  medical_examination_records_by_pk?: Maybe<Medical_Examination_Records>;
  /** fetch data from the table: "medication_reminders" */
  medication_reminders: Array<Medication_Reminders>;
  /** fetch aggregated fields from the table: "medication_reminders" */
  medication_reminders_aggregate: Medication_Reminders_Aggregate;
  /** fetch data from the table: "medication_reminders" using primary key columns */
  medication_reminders_by_pk?: Maybe<Medication_Reminders>;
  /** fetch data from the table: "oidc_model_instances" */
  oidc_model_instances: Array<Oidc_Model_Instances>;
  /** fetch aggregated fields from the table: "oidc_model_instances" */
  oidc_model_instances_aggregate: Oidc_Model_Instances_Aggregate;
  /** fetch data from the table: "oidc_model_instances" using primary key columns */
  oidc_model_instances_by_pk?: Maybe<Oidc_Model_Instances>;
  /** fetch data from the table: "organization_invitation_role_relations" */
  organization_invitation_role_relations: Array<Organization_Invitation_Role_Relations>;
  /** fetch aggregated fields from the table: "organization_invitation_role_relations" */
  organization_invitation_role_relations_aggregate: Organization_Invitation_Role_Relations_Aggregate;
  /** fetch data from the table: "organization_invitation_role_relations" using primary key columns */
  organization_invitation_role_relations_by_pk?: Maybe<Organization_Invitation_Role_Relations>;
  /** fetch data from the table: "organization_invitations" */
  organization_invitations: Array<Organization_Invitations>;
  /** fetch aggregated fields from the table: "organization_invitations" */
  organization_invitations_aggregate: Organization_Invitations_Aggregate;
  /** fetch data from the table: "organization_invitations" using primary key columns */
  organization_invitations_by_pk?: Maybe<Organization_Invitations>;
  /** fetch data from the table: "organization_role_scope_relations" */
  organization_role_scope_relations: Array<Organization_Role_Scope_Relations>;
  /** fetch aggregated fields from the table: "organization_role_scope_relations" */
  organization_role_scope_relations_aggregate: Organization_Role_Scope_Relations_Aggregate;
  /** fetch data from the table: "organization_role_scope_relations" using primary key columns */
  organization_role_scope_relations_by_pk?: Maybe<Organization_Role_Scope_Relations>;
  /** fetch data from the table: "organization_role_user_relations" */
  organization_role_user_relations: Array<Organization_Role_User_Relations>;
  /** fetch aggregated fields from the table: "organization_role_user_relations" */
  organization_role_user_relations_aggregate: Organization_Role_User_Relations_Aggregate;
  /** fetch data from the table: "organization_role_user_relations" using primary key columns */
  organization_role_user_relations_by_pk?: Maybe<Organization_Role_User_Relations>;
  /** fetch data from the table: "organization_roles" */
  organization_roles: Array<Organization_Roles>;
  /** fetch aggregated fields from the table: "organization_roles" */
  organization_roles_aggregate: Organization_Roles_Aggregate;
  /** fetch data from the table: "organization_roles" using primary key columns */
  organization_roles_by_pk?: Maybe<Organization_Roles>;
  /** fetch data from the table: "organization_scopes" */
  organization_scopes: Array<Organization_Scopes>;
  /** fetch aggregated fields from the table: "organization_scopes" */
  organization_scopes_aggregate: Organization_Scopes_Aggregate;
  /** fetch data from the table: "organization_scopes" using primary key columns */
  organization_scopes_by_pk?: Maybe<Organization_Scopes>;
  /** fetch data from the table: "organization_user_relations" */
  organization_user_relations: Array<Organization_User_Relations>;
  /** fetch aggregated fields from the table: "organization_user_relations" */
  organization_user_relations_aggregate: Organization_User_Relations_Aggregate;
  /** fetch data from the table: "organization_user_relations" using primary key columns */
  organization_user_relations_by_pk?: Maybe<Organization_User_Relations>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table: "passcodes" */
  passcodes: Array<Passcodes>;
  /** fetch aggregated fields from the table: "passcodes" */
  passcodes_aggregate: Passcodes_Aggregate;
  /** fetch data from the table: "passcodes" using primary key columns */
  passcodes_by_pk?: Maybe<Passcodes>;
  /** fetch data from the table: "pg_buffercache" */
  pg_buffercache: Array<Pg_Buffercache>;
  /** fetch aggregated fields from the table: "pg_buffercache" */
  pg_buffercache_aggregate: Pg_Buffercache_Aggregate;
  /** fetch data from the table: "pg_stat_statements" */
  pg_stat_statements: Array<Pg_Stat_Statements>;
  /** fetch aggregated fields from the table: "pg_stat_statements" */
  pg_stat_statements_aggregate: Pg_Stat_Statements_Aggregate;
  /** fetch data from the table: "pg_stat_statements_info" */
  pg_stat_statements_info: Array<Pg_Stat_Statements_Info>;
  /** fetch aggregated fields from the table: "pg_stat_statements_info" */
  pg_stat_statements_info_aggregate: Pg_Stat_Statements_Info_Aggregate;
  /** fetch data from the table: "resources" */
  resources: Array<Resources>;
  /** fetch aggregated fields from the table: "resources" */
  resources_aggregate: Resources_Aggregate;
  /** fetch data from the table: "resources" using primary key columns */
  resources_by_pk?: Maybe<Resources>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "roles_scopes" */
  roles_scopes: Array<Roles_Scopes>;
  /** fetch aggregated fields from the table: "roles_scopes" */
  roles_scopes_aggregate: Roles_Scopes_Aggregate;
  /** fetch data from the table: "roles_scopes" using primary key columns */
  roles_scopes_by_pk?: Maybe<Roles_Scopes>;
  /** fetch data from the table: "scopes" */
  scopes: Array<Scopes>;
  /** fetch aggregated fields from the table: "scopes" */
  scopes_aggregate: Scopes_Aggregate;
  /** fetch data from the table: "scopes" using primary key columns */
  scopes_by_pk?: Maybe<Scopes>;
  /** fetch data from the table: "sentinel_activities" */
  sentinel_activities: Array<Sentinel_Activities>;
  /** fetch aggregated fields from the table: "sentinel_activities" */
  sentinel_activities_aggregate: Sentinel_Activities_Aggregate;
  /** fetch data from the table: "sentinel_activities" using primary key columns */
  sentinel_activities_by_pk?: Maybe<Sentinel_Activities>;
  /** fetch data from the table: "service_logs" */
  service_logs: Array<Service_Logs>;
  /** fetch aggregated fields from the table: "service_logs" */
  service_logs_aggregate: Service_Logs_Aggregate;
  /** fetch data from the table: "service_logs" using primary key columns */
  service_logs_by_pk?: Maybe<Service_Logs>;
  /** fetch data from the table: "sign_in_experiences" */
  sign_in_experiences: Array<Sign_In_Experiences>;
  /** fetch aggregated fields from the table: "sign_in_experiences" */
  sign_in_experiences_aggregate: Sign_In_Experiences_Aggregate;
  /** fetch data from the table: "sign_in_experiences" using primary key columns */
  sign_in_experiences_by_pk?: Maybe<Sign_In_Experiences>;
  /** fetch data from the table: "sms_codes" */
  sms_codes: Array<Sms_Codes>;
  /** fetch aggregated fields from the table: "sms_codes" */
  sms_codes_aggregate: Sms_Codes_Aggregate;
  /** fetch data from the table: "sms_codes" using primary key columns */
  sms_codes_by_pk?: Maybe<Sms_Codes>;
  /** fetch data from the table: "sso_connectors" */
  sso_connectors: Array<Sso_Connectors>;
  /** fetch aggregated fields from the table: "sso_connectors" */
  sso_connectors_aggregate: Sso_Connectors_Aggregate;
  /** fetch data from the table: "sso_connectors" using primary key columns */
  sso_connectors_by_pk?: Maybe<Sso_Connectors>;
  /** fetch data from the table: "systems" */
  systems: Array<Systems>;
  /** fetch aggregated fields from the table: "systems" */
  systems_aggregate: Systems_Aggregate;
  /** fetch data from the table: "systems" using primary key columns */
  systems_by_pk?: Maybe<Systems>;
  /** fetch data from the table: "tenants" */
  tenants: Array<Tenants>;
  /** fetch aggregated fields from the table: "tenants" */
  tenants_aggregate: Tenants_Aggregate;
  /** fetch data from the table: "tenants" using primary key columns */
  tenants_by_pk?: Maybe<Tenants>;
  /** fetch data from the table: "user_cholesterol_standards" */
  user_cholesterol_standards: Array<User_Cholesterol_Standards>;
  /** fetch aggregated fields from the table: "user_cholesterol_standards" */
  user_cholesterol_standards_aggregate: User_Cholesterol_Standards_Aggregate;
  /** fetch data from the table: "user_cholesterol_standards" using primary key columns */
  user_cholesterol_standards_by_pk?: Maybe<User_Cholesterol_Standards>;
  /** fetch data from the table: "user_glucose_standards" */
  user_glucose_standards: Array<User_Glucose_Standards>;
  /** fetch aggregated fields from the table: "user_glucose_standards" */
  user_glucose_standards_aggregate: User_Glucose_Standards_Aggregate;
  /** fetch data from the table: "user_glucose_standards" using primary key columns */
  user_glucose_standards_by_pk?: Maybe<User_Glucose_Standards>;
  /** fetch data from the table: "user_sso_identities" */
  user_sso_identities: Array<User_Sso_Identities>;
  /** fetch aggregated fields from the table: "user_sso_identities" */
  user_sso_identities_aggregate: User_Sso_Identities_Aggregate;
  /** fetch data from the table: "user_sso_identities" using primary key columns */
  user_sso_identities_by_pk?: Maybe<User_Sso_Identities>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  users_roles: Array<Users_Roles>;
  /** An aggregate relationship */
  users_roles_aggregate: Users_Roles_Aggregate;
  /** fetch data from the table: "users_roles" using primary key columns */
  users_roles_by_pk?: Maybe<Users_Roles>;
  /** fetch data from the table: "verification_statuses" */
  verification_statuses: Array<Verification_Statuses>;
  /** fetch aggregated fields from the table: "verification_statuses" */
  verification_statuses_aggregate: Verification_Statuses_Aggregate;
  /** fetch data from the table: "verification_statuses" using primary key columns */
  verification_statuses_by_pk?: Maybe<Verification_Statuses>;
};


export type Query_RootAdsArgs = {
  distinct_on?: InputMaybe<Array<Ads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ads_Order_By>>;
  where?: InputMaybe<Ads_Bool_Exp>;
};


export type Query_RootAds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ads_Order_By>>;
  where?: InputMaybe<Ads_Bool_Exp>;
};


export type Query_RootAds_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootApplication_Sign_In_ExperiencesArgs = {
  distinct_on?: InputMaybe<Array<Application_Sign_In_Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_Sign_In_Experiences_Order_By>>;
  where?: InputMaybe<Application_Sign_In_Experiences_Bool_Exp>;
};


export type Query_RootApplication_Sign_In_Experiences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Application_Sign_In_Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_Sign_In_Experiences_Order_By>>;
  where?: InputMaybe<Application_Sign_In_Experiences_Bool_Exp>;
};


export type Query_RootApplication_Sign_In_Experiences_By_PkArgs = {
  application_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};


export type Query_RootApplication_User_Consent_Organization_ScopesArgs = {
  distinct_on?: InputMaybe<Array<Application_User_Consent_Organization_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_User_Consent_Organization_Scopes_Order_By>>;
  where?: InputMaybe<Application_User_Consent_Organization_Scopes_Bool_Exp>;
};


export type Query_RootApplication_User_Consent_Organization_Scopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Application_User_Consent_Organization_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_User_Consent_Organization_Scopes_Order_By>>;
  where?: InputMaybe<Application_User_Consent_Organization_Scopes_Bool_Exp>;
};


export type Query_RootApplication_User_Consent_Organization_Scopes_By_PkArgs = {
  application_id: Scalars['String']['input'];
  organization_scope_id: Scalars['String']['input'];
};


export type Query_RootApplication_User_Consent_OrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Application_User_Consent_Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_User_Consent_Organizations_Order_By>>;
  where?: InputMaybe<Application_User_Consent_Organizations_Bool_Exp>;
};


export type Query_RootApplication_User_Consent_Organizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Application_User_Consent_Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_User_Consent_Organizations_Order_By>>;
  where?: InputMaybe<Application_User_Consent_Organizations_Bool_Exp>;
};


export type Query_RootApplication_User_Consent_Organizations_By_PkArgs = {
  application_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type Query_RootApplication_User_Consent_Resource_ScopesArgs = {
  distinct_on?: InputMaybe<Array<Application_User_Consent_Resource_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_User_Consent_Resource_Scopes_Order_By>>;
  where?: InputMaybe<Application_User_Consent_Resource_Scopes_Bool_Exp>;
};


export type Query_RootApplication_User_Consent_Resource_Scopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Application_User_Consent_Resource_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_User_Consent_Resource_Scopes_Order_By>>;
  where?: InputMaybe<Application_User_Consent_Resource_Scopes_Bool_Exp>;
};


export type Query_RootApplication_User_Consent_Resource_Scopes_By_PkArgs = {
  application_id: Scalars['String']['input'];
  scope_id: Scalars['String']['input'];
};


export type Query_RootApplication_User_Consent_User_ScopesArgs = {
  distinct_on?: InputMaybe<Array<Application_User_Consent_User_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_User_Consent_User_Scopes_Order_By>>;
  where?: InputMaybe<Application_User_Consent_User_Scopes_Bool_Exp>;
};


export type Query_RootApplication_User_Consent_User_Scopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Application_User_Consent_User_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_User_Consent_User_Scopes_Order_By>>;
  where?: InputMaybe<Application_User_Consent_User_Scopes_Bool_Exp>;
};


export type Query_RootApplication_User_Consent_User_Scopes_By_PkArgs = {
  application_id: Scalars['String']['input'];
  user_scope: Scalars['String']['input'];
};


export type Query_RootApplicationsArgs = {
  distinct_on?: InputMaybe<Array<Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Order_By>>;
  where?: InputMaybe<Applications_Bool_Exp>;
};


export type Query_RootApplications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Order_By>>;
  where?: InputMaybe<Applications_Bool_Exp>;
};


export type Query_RootApplications_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootApplications_RolesArgs = {
  distinct_on?: InputMaybe<Array<Applications_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Roles_Order_By>>;
  where?: InputMaybe<Applications_Roles_Bool_Exp>;
};


export type Query_RootApplications_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Applications_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Roles_Order_By>>;
  where?: InputMaybe<Applications_Roles_Bool_Exp>;
};


export type Query_RootApplications_Roles_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootCheck_In_SettingsArgs = {
  distinct_on?: InputMaybe<Array<Check_In_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Check_In_Settings_Order_By>>;
  where?: InputMaybe<Check_In_Settings_Bool_Exp>;
};


export type Query_RootCheck_In_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Check_In_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Check_In_Settings_Order_By>>;
  where?: InputMaybe<Check_In_Settings_Bool_Exp>;
};


export type Query_RootCheck_In_Settings_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCheck_InsArgs = {
  distinct_on?: InputMaybe<Array<Check_Ins_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Check_Ins_Order_By>>;
  where?: InputMaybe<Check_Ins_Bool_Exp>;
};


export type Query_RootCheck_Ins_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Check_Ins_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Check_Ins_Order_By>>;
  where?: InputMaybe<Check_Ins_Bool_Exp>;
};


export type Query_RootCheck_Ins_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCholesterol_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Cholesterol_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cholesterol_Records_Order_By>>;
  where?: InputMaybe<Cholesterol_Records_Bool_Exp>;
};


export type Query_RootCholesterol_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cholesterol_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cholesterol_Records_Order_By>>;
  where?: InputMaybe<Cholesterol_Records_Bool_Exp>;
};


export type Query_RootCholesterol_Records_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCholesterol_StandardsArgs = {
  distinct_on?: InputMaybe<Array<Cholesterol_Standards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cholesterol_Standards_Order_By>>;
  where?: InputMaybe<Cholesterol_Standards_Bool_Exp>;
};


export type Query_RootCholesterol_Standards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cholesterol_Standards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cholesterol_Standards_Order_By>>;
  where?: InputMaybe<Cholesterol_Standards_Bool_Exp>;
};


export type Query_RootCholesterol_Standards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootConnectorsArgs = {
  distinct_on?: InputMaybe<Array<Connectors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Connectors_Order_By>>;
  where?: InputMaybe<Connectors_Bool_Exp>;
};


export type Query_RootConnectors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Connectors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Connectors_Order_By>>;
  where?: InputMaybe<Connectors_Bool_Exp>;
};


export type Query_RootConnectors_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootCustom_PhrasesArgs = {
  distinct_on?: InputMaybe<Array<Custom_Phrases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Phrases_Order_By>>;
  where?: InputMaybe<Custom_Phrases_Bool_Exp>;
};


export type Query_RootCustom_Phrases_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Phrases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Phrases_Order_By>>;
  where?: InputMaybe<Custom_Phrases_Bool_Exp>;
};


export type Query_RootCustom_Phrases_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootDaily_Active_UsersArgs = {
  distinct_on?: InputMaybe<Array<Daily_Active_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Daily_Active_Users_Order_By>>;
  where?: InputMaybe<Daily_Active_Users_Bool_Exp>;
};


export type Query_RootDaily_Active_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Daily_Active_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Daily_Active_Users_Order_By>>;
  where?: InputMaybe<Daily_Active_Users_Bool_Exp>;
};


export type Query_RootDaily_Active_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootDaily_Token_UsageArgs = {
  distinct_on?: InputMaybe<Array<Daily_Token_Usage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Daily_Token_Usage_Order_By>>;
  where?: InputMaybe<Daily_Token_Usage_Bool_Exp>;
};


export type Query_RootDaily_Token_Usage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Daily_Token_Usage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Daily_Token_Usage_Order_By>>;
  where?: InputMaybe<Daily_Token_Usage_Bool_Exp>;
};


export type Query_RootDaily_Token_Usage_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootDomainsArgs = {
  distinct_on?: InputMaybe<Array<Domains_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Domains_Order_By>>;
  where?: InputMaybe<Domains_Bool_Exp>;
};


export type Query_RootDomains_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Domains_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Domains_Order_By>>;
  where?: InputMaybe<Domains_Bool_Exp>;
};


export type Query_RootDomains_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootGlucose_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Glucose_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Glucose_Records_Order_By>>;
  where?: InputMaybe<Glucose_Records_Bool_Exp>;
};


export type Query_RootGlucose_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Glucose_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Glucose_Records_Order_By>>;
  where?: InputMaybe<Glucose_Records_Bool_Exp>;
};


export type Query_RootGlucose_Records_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootGlucose_StandardsArgs = {
  distinct_on?: InputMaybe<Array<Glucose_Standards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Glucose_Standards_Order_By>>;
  where?: InputMaybe<Glucose_Standards_Bool_Exp>;
};


export type Query_RootGlucose_Standards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Glucose_Standards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Glucose_Standards_Order_By>>;
  where?: InputMaybe<Glucose_Standards_Bool_Exp>;
};


export type Query_RootGlucose_Standards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootHooksArgs = {
  distinct_on?: InputMaybe<Array<Hooks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hooks_Order_By>>;
  where?: InputMaybe<Hooks_Bool_Exp>;
};


export type Query_RootHooks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hooks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hooks_Order_By>>;
  where?: InputMaybe<Hooks_Bool_Exp>;
};


export type Query_RootHooks_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootLab_Report_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Lab_Report_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lab_Report_Records_Order_By>>;
  where?: InputMaybe<Lab_Report_Records_Bool_Exp>;
};


export type Query_RootLab_Report_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lab_Report_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lab_Report_Records_Order_By>>;
  where?: InputMaybe<Lab_Report_Records_Bool_Exp>;
};


export type Query_RootLab_Report_Records_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLogsArgs = {
  distinct_on?: InputMaybe<Array<Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logs_Order_By>>;
  where?: InputMaybe<Logs_Bool_Exp>;
};


export type Query_RootLogs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logs_Order_By>>;
  where?: InputMaybe<Logs_Bool_Exp>;
};


export type Query_RootLogs_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootLogto_ConfigsArgs = {
  distinct_on?: InputMaybe<Array<Logto_Configs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logto_Configs_Order_By>>;
  where?: InputMaybe<Logto_Configs_Bool_Exp>;
};


export type Query_RootLogto_Configs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Logto_Configs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logto_Configs_Order_By>>;
  where?: InputMaybe<Logto_Configs_Bool_Exp>;
};


export type Query_RootLogto_Configs_By_PkArgs = {
  key: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};


export type Query_RootMedical_Examination_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Medical_Examination_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Medical_Examination_Records_Order_By>>;
  where?: InputMaybe<Medical_Examination_Records_Bool_Exp>;
};


export type Query_RootMedical_Examination_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Medical_Examination_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Medical_Examination_Records_Order_By>>;
  where?: InputMaybe<Medical_Examination_Records_Bool_Exp>;
};


export type Query_RootMedical_Examination_Records_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMedication_RemindersArgs = {
  distinct_on?: InputMaybe<Array<Medication_Reminders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Medication_Reminders_Order_By>>;
  where?: InputMaybe<Medication_Reminders_Bool_Exp>;
};


export type Query_RootMedication_Reminders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Medication_Reminders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Medication_Reminders_Order_By>>;
  where?: InputMaybe<Medication_Reminders_Bool_Exp>;
};


export type Query_RootMedication_Reminders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOidc_Model_InstancesArgs = {
  distinct_on?: InputMaybe<Array<Oidc_Model_Instances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Oidc_Model_Instances_Order_By>>;
  where?: InputMaybe<Oidc_Model_Instances_Bool_Exp>;
};


export type Query_RootOidc_Model_Instances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Oidc_Model_Instances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Oidc_Model_Instances_Order_By>>;
  where?: InputMaybe<Oidc_Model_Instances_Bool_Exp>;
};


export type Query_RootOidc_Model_Instances_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootOrganization_Invitation_Role_RelationsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Invitation_Role_Relations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Invitation_Role_Relations_Order_By>>;
  where?: InputMaybe<Organization_Invitation_Role_Relations_Bool_Exp>;
};


export type Query_RootOrganization_Invitation_Role_Relations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Invitation_Role_Relations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Invitation_Role_Relations_Order_By>>;
  where?: InputMaybe<Organization_Invitation_Role_Relations_Bool_Exp>;
};


export type Query_RootOrganization_Invitation_Role_Relations_By_PkArgs = {
  organization_invitation_id: Scalars['String']['input'];
  organization_role_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};


export type Query_RootOrganization_InvitationsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Invitations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Invitations_Order_By>>;
  where?: InputMaybe<Organization_Invitations_Bool_Exp>;
};


export type Query_RootOrganization_Invitations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Invitations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Invitations_Order_By>>;
  where?: InputMaybe<Organization_Invitations_Bool_Exp>;
};


export type Query_RootOrganization_Invitations_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootOrganization_Role_Scope_RelationsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Role_Scope_Relations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Role_Scope_Relations_Order_By>>;
  where?: InputMaybe<Organization_Role_Scope_Relations_Bool_Exp>;
};


export type Query_RootOrganization_Role_Scope_Relations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Role_Scope_Relations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Role_Scope_Relations_Order_By>>;
  where?: InputMaybe<Organization_Role_Scope_Relations_Bool_Exp>;
};


export type Query_RootOrganization_Role_Scope_Relations_By_PkArgs = {
  organization_role_id: Scalars['String']['input'];
  organization_scope_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};


export type Query_RootOrganization_Role_User_RelationsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Role_User_Relations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Role_User_Relations_Order_By>>;
  where?: InputMaybe<Organization_Role_User_Relations_Bool_Exp>;
};


export type Query_RootOrganization_Role_User_Relations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Role_User_Relations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Role_User_Relations_Order_By>>;
  where?: InputMaybe<Organization_Role_User_Relations_Bool_Exp>;
};


export type Query_RootOrganization_Role_User_Relations_By_PkArgs = {
  organization_id: Scalars['String']['input'];
  organization_role_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type Query_RootOrganization_RolesArgs = {
  distinct_on?: InputMaybe<Array<Organization_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Roles_Order_By>>;
  where?: InputMaybe<Organization_Roles_Bool_Exp>;
};


export type Query_RootOrganization_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Roles_Order_By>>;
  where?: InputMaybe<Organization_Roles_Bool_Exp>;
};


export type Query_RootOrganization_Roles_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootOrganization_ScopesArgs = {
  distinct_on?: InputMaybe<Array<Organization_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Scopes_Order_By>>;
  where?: InputMaybe<Organization_Scopes_Bool_Exp>;
};


export type Query_RootOrganization_Scopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Scopes_Order_By>>;
  where?: InputMaybe<Organization_Scopes_Bool_Exp>;
};


export type Query_RootOrganization_Scopes_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootOrganization_User_RelationsArgs = {
  distinct_on?: InputMaybe<Array<Organization_User_Relations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_User_Relations_Order_By>>;
  where?: InputMaybe<Organization_User_Relations_Bool_Exp>;
};


export type Query_RootOrganization_User_Relations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_User_Relations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_User_Relations_Order_By>>;
  where?: InputMaybe<Organization_User_Relations_Bool_Exp>;
};


export type Query_RootOrganization_User_Relations_By_PkArgs = {
  organization_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type Query_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizations_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootPasscodesArgs = {
  distinct_on?: InputMaybe<Array<Passcodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Passcodes_Order_By>>;
  where?: InputMaybe<Passcodes_Bool_Exp>;
};


export type Query_RootPasscodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passcodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Passcodes_Order_By>>;
  where?: InputMaybe<Passcodes_Bool_Exp>;
};


export type Query_RootPasscodes_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootPg_BuffercacheArgs = {
  distinct_on?: InputMaybe<Array<Pg_Buffercache_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pg_Buffercache_Order_By>>;
  where?: InputMaybe<Pg_Buffercache_Bool_Exp>;
};


export type Query_RootPg_Buffercache_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pg_Buffercache_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pg_Buffercache_Order_By>>;
  where?: InputMaybe<Pg_Buffercache_Bool_Exp>;
};


export type Query_RootPg_Stat_StatementsArgs = {
  distinct_on?: InputMaybe<Array<Pg_Stat_Statements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pg_Stat_Statements_Order_By>>;
  where?: InputMaybe<Pg_Stat_Statements_Bool_Exp>;
};


export type Query_RootPg_Stat_Statements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pg_Stat_Statements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pg_Stat_Statements_Order_By>>;
  where?: InputMaybe<Pg_Stat_Statements_Bool_Exp>;
};


export type Query_RootPg_Stat_Statements_InfoArgs = {
  distinct_on?: InputMaybe<Array<Pg_Stat_Statements_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pg_Stat_Statements_Info_Order_By>>;
  where?: InputMaybe<Pg_Stat_Statements_Info_Bool_Exp>;
};


export type Query_RootPg_Stat_Statements_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pg_Stat_Statements_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pg_Stat_Statements_Info_Order_By>>;
  where?: InputMaybe<Pg_Stat_Statements_Info_Bool_Exp>;
};


export type Query_RootResourcesArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Query_RootResources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Query_RootResources_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootRoles_ScopesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Scopes_Order_By>>;
  where?: InputMaybe<Roles_Scopes_Bool_Exp>;
};


export type Query_RootRoles_Scopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Scopes_Order_By>>;
  where?: InputMaybe<Roles_Scopes_Bool_Exp>;
};


export type Query_RootRoles_Scopes_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootScopesArgs = {
  distinct_on?: InputMaybe<Array<Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scopes_Order_By>>;
  where?: InputMaybe<Scopes_Bool_Exp>;
};


export type Query_RootScopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scopes_Order_By>>;
  where?: InputMaybe<Scopes_Bool_Exp>;
};


export type Query_RootScopes_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootSentinel_ActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Sentinel_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sentinel_Activities_Order_By>>;
  where?: InputMaybe<Sentinel_Activities_Bool_Exp>;
};


export type Query_RootSentinel_Activities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sentinel_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sentinel_Activities_Order_By>>;
  where?: InputMaybe<Sentinel_Activities_Bool_Exp>;
};


export type Query_RootSentinel_Activities_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootService_LogsArgs = {
  distinct_on?: InputMaybe<Array<Service_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Logs_Order_By>>;
  where?: InputMaybe<Service_Logs_Bool_Exp>;
};


export type Query_RootService_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Logs_Order_By>>;
  where?: InputMaybe<Service_Logs_Bool_Exp>;
};


export type Query_RootService_Logs_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootSign_In_ExperiencesArgs = {
  distinct_on?: InputMaybe<Array<Sign_In_Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sign_In_Experiences_Order_By>>;
  where?: InputMaybe<Sign_In_Experiences_Bool_Exp>;
};


export type Query_RootSign_In_Experiences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sign_In_Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sign_In_Experiences_Order_By>>;
  where?: InputMaybe<Sign_In_Experiences_Bool_Exp>;
};


export type Query_RootSign_In_Experiences_By_PkArgs = {
  id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};


export type Query_RootSms_CodesArgs = {
  distinct_on?: InputMaybe<Array<Sms_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sms_Codes_Order_By>>;
  where?: InputMaybe<Sms_Codes_Bool_Exp>;
};


export type Query_RootSms_Codes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sms_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sms_Codes_Order_By>>;
  where?: InputMaybe<Sms_Codes_Bool_Exp>;
};


export type Query_RootSms_Codes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSso_ConnectorsArgs = {
  distinct_on?: InputMaybe<Array<Sso_Connectors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sso_Connectors_Order_By>>;
  where?: InputMaybe<Sso_Connectors_Bool_Exp>;
};


export type Query_RootSso_Connectors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sso_Connectors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sso_Connectors_Order_By>>;
  where?: InputMaybe<Sso_Connectors_Bool_Exp>;
};


export type Query_RootSso_Connectors_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootSystemsArgs = {
  distinct_on?: InputMaybe<Array<Systems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Systems_Order_By>>;
  where?: InputMaybe<Systems_Bool_Exp>;
};


export type Query_RootSystems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Systems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Systems_Order_By>>;
  where?: InputMaybe<Systems_Bool_Exp>;
};


export type Query_RootSystems_By_PkArgs = {
  key: Scalars['String']['input'];
};


export type Query_RootTenantsArgs = {
  distinct_on?: InputMaybe<Array<Tenants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenants_Order_By>>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};


export type Query_RootTenants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenants_Order_By>>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};


export type Query_RootTenants_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootUser_Cholesterol_StandardsArgs = {
  distinct_on?: InputMaybe<Array<User_Cholesterol_Standards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Cholesterol_Standards_Order_By>>;
  where?: InputMaybe<User_Cholesterol_Standards_Bool_Exp>;
};


export type Query_RootUser_Cholesterol_Standards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Cholesterol_Standards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Cholesterol_Standards_Order_By>>;
  where?: InputMaybe<User_Cholesterol_Standards_Bool_Exp>;
};


export type Query_RootUser_Cholesterol_Standards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_Glucose_StandardsArgs = {
  distinct_on?: InputMaybe<Array<User_Glucose_Standards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Glucose_Standards_Order_By>>;
  where?: InputMaybe<User_Glucose_Standards_Bool_Exp>;
};


export type Query_RootUser_Glucose_Standards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Glucose_Standards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Glucose_Standards_Order_By>>;
  where?: InputMaybe<User_Glucose_Standards_Bool_Exp>;
};


export type Query_RootUser_Glucose_Standards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_Sso_IdentitiesArgs = {
  distinct_on?: InputMaybe<Array<User_Sso_Identities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Sso_Identities_Order_By>>;
  where?: InputMaybe<User_Sso_Identities_Bool_Exp>;
};


export type Query_RootUser_Sso_Identities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Sso_Identities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Sso_Identities_Order_By>>;
  where?: InputMaybe<User_Sso_Identities_Bool_Exp>;
};


export type Query_RootUser_Sso_Identities_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootUsers_RolesArgs = {
  distinct_on?: InputMaybe<Array<Users_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Roles_Order_By>>;
  where?: InputMaybe<Users_Roles_Bool_Exp>;
};


export type Query_RootUsers_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Roles_Order_By>>;
  where?: InputMaybe<Users_Roles_Bool_Exp>;
};


export type Query_RootUsers_Roles_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootVerification_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Verification_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Statuses_Order_By>>;
  where?: InputMaybe<Verification_Statuses_Bool_Exp>;
};


export type Query_RootVerification_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Statuses_Order_By>>;
  where?: InputMaybe<Verification_Statuses_Bool_Exp>;
};


export type Query_RootVerification_Statuses_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** columns and relationships of "resources" */
export type Resources = {
  access_token_ttl: Scalars['bigint']['output'];
  id: Scalars['String']['output'];
  indicator: Scalars['String']['output'];
  is_default: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
};

/** aggregated selection of "resources" */
export type Resources_Aggregate = {
  aggregate?: Maybe<Resources_Aggregate_Fields>;
  nodes: Array<Resources>;
};

/** aggregate fields of "resources" */
export type Resources_Aggregate_Fields = {
  avg?: Maybe<Resources_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Resources_Max_Fields>;
  min?: Maybe<Resources_Min_Fields>;
  stddev?: Maybe<Resources_Stddev_Fields>;
  stddev_pop?: Maybe<Resources_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Resources_Stddev_Samp_Fields>;
  sum?: Maybe<Resources_Sum_Fields>;
  var_pop?: Maybe<Resources_Var_Pop_Fields>;
  var_samp?: Maybe<Resources_Var_Samp_Fields>;
  variance?: Maybe<Resources_Variance_Fields>;
};


/** aggregate fields of "resources" */
export type Resources_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Resources_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Resources_Avg_Fields = {
  access_token_ttl?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "resources". All fields are combined with a logical 'AND'. */
export type Resources_Bool_Exp = {
  _and?: InputMaybe<Array<Resources_Bool_Exp>>;
  _not?: InputMaybe<Resources_Bool_Exp>;
  _or?: InputMaybe<Array<Resources_Bool_Exp>>;
  access_token_ttl?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  indicator?: InputMaybe<String_Comparison_Exp>;
  is_default?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "resources" */
export enum Resources_Constraint {
  /** unique or primary key constraint on columns "indicator", "tenant_id" */
  ResourcesIndicator = 'resources__indicator',
  /** unique or primary key constraint on columns "tenant_id" */
  ResourcesIsDefaultTrue = 'resources__is_default_true',
  /** unique or primary key constraint on columns "id" */
  ResourcesPkey = 'resources_pkey'
}

/** input type for incrementing numeric columns in table "resources" */
export type Resources_Inc_Input = {
  access_token_ttl?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "resources" */
export type Resources_Insert_Input = {
  access_token_ttl?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  indicator?: InputMaybe<Scalars['String']['input']>;
  is_default?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Resources_Max_Fields = {
  access_token_ttl?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  indicator?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Resources_Min_Fields = {
  access_token_ttl?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  indicator?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "resources" */
export type Resources_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Resources>;
};

/** on_conflict condition type for table "resources" */
export type Resources_On_Conflict = {
  constraint: Resources_Constraint;
  update_columns?: Array<Resources_Update_Column>;
  where?: InputMaybe<Resources_Bool_Exp>;
};

/** Ordering options when selecting data from "resources". */
export type Resources_Order_By = {
  access_token_ttl?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  indicator?: InputMaybe<Order_By>;
  is_default?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: resources */
export type Resources_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "resources" */
export enum Resources_Select_Column {
  /** column name */
  AccessTokenTtl = 'access_token_ttl',
  /** column name */
  Id = 'id',
  /** column name */
  Indicator = 'indicator',
  /** column name */
  IsDefault = 'is_default',
  /** column name */
  Name = 'name',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "resources" */
export type Resources_Set_Input = {
  access_token_ttl?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  indicator?: InputMaybe<Scalars['String']['input']>;
  is_default?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Resources_Stddev_Fields = {
  access_token_ttl?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Resources_Stddev_Pop_Fields = {
  access_token_ttl?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Resources_Stddev_Samp_Fields = {
  access_token_ttl?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "resources" */
export type Resources_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Resources_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Resources_Stream_Cursor_Value_Input = {
  access_token_ttl?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  indicator?: InputMaybe<Scalars['String']['input']>;
  is_default?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Resources_Sum_Fields = {
  access_token_ttl?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "resources" */
export enum Resources_Update_Column {
  /** column name */
  AccessTokenTtl = 'access_token_ttl',
  /** column name */
  Id = 'id',
  /** column name */
  Indicator = 'indicator',
  /** column name */
  IsDefault = 'is_default',
  /** column name */
  Name = 'name',
  /** column name */
  TenantId = 'tenant_id'
}

export type Resources_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Resources_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Resources_Set_Input>;
  /** filter the rows which have to be updated */
  where: Resources_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Resources_Var_Pop_Fields = {
  access_token_ttl?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Resources_Var_Samp_Fields = {
  access_token_ttl?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Resources_Variance_Fields = {
  access_token_ttl?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "role_type". All fields are combined with logical 'AND'. */
export type Role_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['role_type']['input']>;
  _gt?: InputMaybe<Scalars['role_type']['input']>;
  _gte?: InputMaybe<Scalars['role_type']['input']>;
  _in?: InputMaybe<Array<Scalars['role_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['role_type']['input']>;
  _lte?: InputMaybe<Scalars['role_type']['input']>;
  _neq?: InputMaybe<Scalars['role_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['role_type']['input']>>;
};

/** columns and relationships of "roles" */
export type Roles = {
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
  type: Scalars['role_type']['output'];
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Roles_Bool_Exp>>;
  _not?: InputMaybe<Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Roles_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Role_Type_Comparison_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint on columns "tenant_id", "name" */
  RolesName = 'roles__name',
  /** unique or primary key constraint on columns "id" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['role_type']['input']>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['role_type']['output']>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['role_type']['output']>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};

/** on_conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns?: Array<Roles_Update_Column>;
  where?: InputMaybe<Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "roles". */
export type Roles_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: roles */
export type Roles_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** columns and relationships of "roles_scopes" */
export type Roles_Scopes = {
  id: Scalars['String']['output'];
  role_id: Scalars['String']['output'];
  scope_id: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
};

/** aggregated selection of "roles_scopes" */
export type Roles_Scopes_Aggregate = {
  aggregate?: Maybe<Roles_Scopes_Aggregate_Fields>;
  nodes: Array<Roles_Scopes>;
};

/** aggregate fields of "roles_scopes" */
export type Roles_Scopes_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Roles_Scopes_Max_Fields>;
  min?: Maybe<Roles_Scopes_Min_Fields>;
};


/** aggregate fields of "roles_scopes" */
export type Roles_Scopes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Roles_Scopes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "roles_scopes". All fields are combined with a logical 'AND'. */
export type Roles_Scopes_Bool_Exp = {
  _and?: InputMaybe<Array<Roles_Scopes_Bool_Exp>>;
  _not?: InputMaybe<Roles_Scopes_Bool_Exp>;
  _or?: InputMaybe<Array<Roles_Scopes_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  role_id?: InputMaybe<String_Comparison_Exp>;
  scope_id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "roles_scopes" */
export enum Roles_Scopes_Constraint {
  /** unique or primary key constraint on columns "role_id", "tenant_id", "scope_id" */
  RolesScopesRoleIdScopeId = 'roles_scopes__role_id_scope_id',
  /** unique or primary key constraint on columns "id" */
  RolesScopesPkey = 'roles_scopes_pkey'
}

/** input type for inserting data into table "roles_scopes" */
export type Roles_Scopes_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['String']['input']>;
  scope_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Roles_Scopes_Max_Fields = {
  id?: Maybe<Scalars['String']['output']>;
  role_id?: Maybe<Scalars['String']['output']>;
  scope_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Roles_Scopes_Min_Fields = {
  id?: Maybe<Scalars['String']['output']>;
  role_id?: Maybe<Scalars['String']['output']>;
  scope_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "roles_scopes" */
export type Roles_Scopes_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Roles_Scopes>;
};

/** on_conflict condition type for table "roles_scopes" */
export type Roles_Scopes_On_Conflict = {
  constraint: Roles_Scopes_Constraint;
  update_columns?: Array<Roles_Scopes_Update_Column>;
  where?: InputMaybe<Roles_Scopes_Bool_Exp>;
};

/** Ordering options when selecting data from "roles_scopes". */
export type Roles_Scopes_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  scope_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: roles_scopes */
export type Roles_Scopes_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "roles_scopes" */
export enum Roles_Scopes_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  ScopeId = 'scope_id',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "roles_scopes" */
export type Roles_Scopes_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['String']['input']>;
  scope_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "roles_scopes" */
export type Roles_Scopes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Roles_Scopes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Roles_Scopes_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['String']['input']>;
  scope_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "roles_scopes" */
export enum Roles_Scopes_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  ScopeId = 'scope_id',
  /** column name */
  TenantId = 'tenant_id'
}

export type Roles_Scopes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Roles_Scopes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Roles_Scopes_Bool_Exp;
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['role_type']['input']>;
};

/** Streaming cursor of the table "roles" */
export type Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Roles_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['role_type']['input']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Type = 'type'
}

export type Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Roles_Bool_Exp;
};

/** columns and relationships of "scopes" */
export type Scopes = {
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  resource_id: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
};

/** aggregated selection of "scopes" */
export type Scopes_Aggregate = {
  aggregate?: Maybe<Scopes_Aggregate_Fields>;
  nodes: Array<Scopes>;
};

/** aggregate fields of "scopes" */
export type Scopes_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Scopes_Max_Fields>;
  min?: Maybe<Scopes_Min_Fields>;
};


/** aggregate fields of "scopes" */
export type Scopes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Scopes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "scopes". All fields are combined with a logical 'AND'. */
export type Scopes_Bool_Exp = {
  _and?: InputMaybe<Array<Scopes_Bool_Exp>>;
  _not?: InputMaybe<Scopes_Bool_Exp>;
  _or?: InputMaybe<Array<Scopes_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  resource_id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "scopes" */
export enum Scopes_Constraint {
  /** unique or primary key constraint on columns "resource_id", "tenant_id", "name" */
  ScopesResourceIdName = 'scopes__resource_id_name',
  /** unique or primary key constraint on columns "id" */
  ScopesPkey = 'scopes_pkey'
}

/** input type for inserting data into table "scopes" */
export type Scopes_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Scopes_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Scopes_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "scopes" */
export type Scopes_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Scopes>;
};

/** on_conflict condition type for table "scopes" */
export type Scopes_On_Conflict = {
  constraint: Scopes_Constraint;
  update_columns?: Array<Scopes_Update_Column>;
  where?: InputMaybe<Scopes_Bool_Exp>;
};

/** Ordering options when selecting data from "scopes". */
export type Scopes_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: scopes */
export type Scopes_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "scopes" */
export enum Scopes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "scopes" */
export type Scopes_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "scopes" */
export type Scopes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Scopes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Scopes_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "scopes" */
export enum Scopes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  TenantId = 'tenant_id'
}

export type Scopes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Scopes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Scopes_Bool_Exp;
};

/** Boolean expression to compare columns of type "sentinel_action_result". All fields are combined with logical 'AND'. */
export type Sentinel_Action_Result_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['sentinel_action_result']['input']>;
  _gt?: InputMaybe<Scalars['sentinel_action_result']['input']>;
  _gte?: InputMaybe<Scalars['sentinel_action_result']['input']>;
  _in?: InputMaybe<Array<Scalars['sentinel_action_result']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['sentinel_action_result']['input']>;
  _lte?: InputMaybe<Scalars['sentinel_action_result']['input']>;
  _neq?: InputMaybe<Scalars['sentinel_action_result']['input']>;
  _nin?: InputMaybe<Array<Scalars['sentinel_action_result']['input']>>;
};

/** columns and relationships of "sentinel_activities" */
export type Sentinel_Activities = {
  action: Scalars['String']['output'];
  action_result: Scalars['sentinel_action_result']['output'];
  created_at: Scalars['timestamptz']['output'];
  decision: Scalars['sentinel_decision']['output'];
  decision_expires_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  payload: Scalars['jsonb']['output'];
  target_hash: Scalars['String']['output'];
  target_type: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
};


/** columns and relationships of "sentinel_activities" */
export type Sentinel_ActivitiesPayloadArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "sentinel_activities" */
export type Sentinel_Activities_Aggregate = {
  aggregate?: Maybe<Sentinel_Activities_Aggregate_Fields>;
  nodes: Array<Sentinel_Activities>;
};

/** aggregate fields of "sentinel_activities" */
export type Sentinel_Activities_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Sentinel_Activities_Max_Fields>;
  min?: Maybe<Sentinel_Activities_Min_Fields>;
};


/** aggregate fields of "sentinel_activities" */
export type Sentinel_Activities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sentinel_Activities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Sentinel_Activities_Append_Input = {
  payload?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "sentinel_activities". All fields are combined with a logical 'AND'. */
export type Sentinel_Activities_Bool_Exp = {
  _and?: InputMaybe<Array<Sentinel_Activities_Bool_Exp>>;
  _not?: InputMaybe<Sentinel_Activities_Bool_Exp>;
  _or?: InputMaybe<Array<Sentinel_Activities_Bool_Exp>>;
  action?: InputMaybe<String_Comparison_Exp>;
  action_result?: InputMaybe<Sentinel_Action_Result_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  decision?: InputMaybe<Sentinel_Decision_Comparison_Exp>;
  decision_expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  payload?: InputMaybe<Jsonb_Comparison_Exp>;
  target_hash?: InputMaybe<String_Comparison_Exp>;
  target_type?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sentinel_activities" */
export enum Sentinel_Activities_Constraint {
  /** unique or primary key constraint on columns "id" */
  SentinelActivitiesPkey = 'sentinel_activities_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Sentinel_Activities_Delete_At_Path_Input = {
  payload?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Sentinel_Activities_Delete_Elem_Input = {
  payload?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Sentinel_Activities_Delete_Key_Input = {
  payload?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "sentinel_activities" */
export type Sentinel_Activities_Insert_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  action_result?: InputMaybe<Scalars['sentinel_action_result']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  decision?: InputMaybe<Scalars['sentinel_decision']['input']>;
  decision_expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<Scalars['jsonb']['input']>;
  target_hash?: InputMaybe<Scalars['String']['input']>;
  target_type?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Sentinel_Activities_Max_Fields = {
  action?: Maybe<Scalars['String']['output']>;
  action_result?: Maybe<Scalars['sentinel_action_result']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  decision?: Maybe<Scalars['sentinel_decision']['output']>;
  decision_expires_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  target_hash?: Maybe<Scalars['String']['output']>;
  target_type?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Sentinel_Activities_Min_Fields = {
  action?: Maybe<Scalars['String']['output']>;
  action_result?: Maybe<Scalars['sentinel_action_result']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  decision?: Maybe<Scalars['sentinel_decision']['output']>;
  decision_expires_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  target_hash?: Maybe<Scalars['String']['output']>;
  target_type?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "sentinel_activities" */
export type Sentinel_Activities_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sentinel_Activities>;
};

/** on_conflict condition type for table "sentinel_activities" */
export type Sentinel_Activities_On_Conflict = {
  constraint: Sentinel_Activities_Constraint;
  update_columns?: Array<Sentinel_Activities_Update_Column>;
  where?: InputMaybe<Sentinel_Activities_Bool_Exp>;
};

/** Ordering options when selecting data from "sentinel_activities". */
export type Sentinel_Activities_Order_By = {
  action?: InputMaybe<Order_By>;
  action_result?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  decision?: InputMaybe<Order_By>;
  decision_expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payload?: InputMaybe<Order_By>;
  target_hash?: InputMaybe<Order_By>;
  target_type?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sentinel_activities */
export type Sentinel_Activities_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Sentinel_Activities_Prepend_Input = {
  payload?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "sentinel_activities" */
export enum Sentinel_Activities_Select_Column {
  /** column name */
  Action = 'action',
  /** column name */
  ActionResult = 'action_result',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Decision = 'decision',
  /** column name */
  DecisionExpiresAt = 'decision_expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  Payload = 'payload',
  /** column name */
  TargetHash = 'target_hash',
  /** column name */
  TargetType = 'target_type',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "sentinel_activities" */
export type Sentinel_Activities_Set_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  action_result?: InputMaybe<Scalars['sentinel_action_result']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  decision?: InputMaybe<Scalars['sentinel_decision']['input']>;
  decision_expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<Scalars['jsonb']['input']>;
  target_hash?: InputMaybe<Scalars['String']['input']>;
  target_type?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "sentinel_activities" */
export type Sentinel_Activities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sentinel_Activities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sentinel_Activities_Stream_Cursor_Value_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  action_result?: InputMaybe<Scalars['sentinel_action_result']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  decision?: InputMaybe<Scalars['sentinel_decision']['input']>;
  decision_expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<Scalars['jsonb']['input']>;
  target_hash?: InputMaybe<Scalars['String']['input']>;
  target_type?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "sentinel_activities" */
export enum Sentinel_Activities_Update_Column {
  /** column name */
  Action = 'action',
  /** column name */
  ActionResult = 'action_result',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Decision = 'decision',
  /** column name */
  DecisionExpiresAt = 'decision_expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  Payload = 'payload',
  /** column name */
  TargetHash = 'target_hash',
  /** column name */
  TargetType = 'target_type',
  /** column name */
  TenantId = 'tenant_id'
}

export type Sentinel_Activities_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Sentinel_Activities_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Sentinel_Activities_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Sentinel_Activities_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Sentinel_Activities_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Sentinel_Activities_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sentinel_Activities_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sentinel_Activities_Bool_Exp;
};

/** Boolean expression to compare columns of type "sentinel_decision". All fields are combined with logical 'AND'. */
export type Sentinel_Decision_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['sentinel_decision']['input']>;
  _gt?: InputMaybe<Scalars['sentinel_decision']['input']>;
  _gte?: InputMaybe<Scalars['sentinel_decision']['input']>;
  _in?: InputMaybe<Array<Scalars['sentinel_decision']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['sentinel_decision']['input']>;
  _lte?: InputMaybe<Scalars['sentinel_decision']['input']>;
  _neq?: InputMaybe<Scalars['sentinel_decision']['input']>;
  _nin?: InputMaybe<Array<Scalars['sentinel_decision']['input']>>;
};

/** columns and relationships of "service_logs" */
export type Service_Logs = {
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  payload: Scalars['jsonb']['output'];
  tenant_id: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


/** columns and relationships of "service_logs" */
export type Service_LogsPayloadArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "service_logs" */
export type Service_Logs_Aggregate = {
  aggregate?: Maybe<Service_Logs_Aggregate_Fields>;
  nodes: Array<Service_Logs>;
};

/** aggregate fields of "service_logs" */
export type Service_Logs_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Service_Logs_Max_Fields>;
  min?: Maybe<Service_Logs_Min_Fields>;
};


/** aggregate fields of "service_logs" */
export type Service_Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Service_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Service_Logs_Append_Input = {
  payload?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "service_logs". All fields are combined with a logical 'AND'. */
export type Service_Logs_Bool_Exp = {
  _and?: InputMaybe<Array<Service_Logs_Bool_Exp>>;
  _not?: InputMaybe<Service_Logs_Bool_Exp>;
  _or?: InputMaybe<Array<Service_Logs_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  payload?: InputMaybe<Jsonb_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "service_logs" */
export enum Service_Logs_Constraint {
  /** unique or primary key constraint on columns "id" */
  ServiceLogsPkey = 'service_logs_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Service_Logs_Delete_At_Path_Input = {
  payload?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Service_Logs_Delete_Elem_Input = {
  payload?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Service_Logs_Delete_Key_Input = {
  payload?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "service_logs" */
export type Service_Logs_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<Scalars['jsonb']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Service_Logs_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Service_Logs_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "service_logs" */
export type Service_Logs_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Service_Logs>;
};

/** on_conflict condition type for table "service_logs" */
export type Service_Logs_On_Conflict = {
  constraint: Service_Logs_Constraint;
  update_columns?: Array<Service_Logs_Update_Column>;
  where?: InputMaybe<Service_Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "service_logs". */
export type Service_Logs_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payload?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: service_logs */
export type Service_Logs_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Service_Logs_Prepend_Input = {
  payload?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "service_logs" */
export enum Service_Logs_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Payload = 'payload',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "service_logs" */
export type Service_Logs_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<Scalars['jsonb']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "service_logs" */
export type Service_Logs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Service_Logs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Service_Logs_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<Scalars['jsonb']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "service_logs" */
export enum Service_Logs_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Payload = 'payload',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Type = 'type'
}

export type Service_Logs_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Service_Logs_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Service_Logs_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Service_Logs_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Service_Logs_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Service_Logs_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Service_Logs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Service_Logs_Bool_Exp;
};

/** columns and relationships of "sign_in_experiences" */
export type Sign_In_Experiences = {
  branding: Scalars['jsonb']['output'];
  color: Scalars['jsonb']['output'];
  custom_content: Scalars['jsonb']['output'];
  custom_css?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  language_info: Scalars['jsonb']['output'];
  mfa: Scalars['jsonb']['output'];
  password_policy: Scalars['jsonb']['output'];
  privacy_policy_url?: Maybe<Scalars['String']['output']>;
  sign_in: Scalars['jsonb']['output'];
  sign_in_mode: Scalars['sign_in_mode']['output'];
  sign_up: Scalars['jsonb']['output'];
  single_sign_on_enabled: Scalars['Boolean']['output'];
  social_sign_in_connector_targets: Scalars['jsonb']['output'];
  tenant_id: Scalars['String']['output'];
  terms_of_use_url?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "sign_in_experiences" */
export type Sign_In_ExperiencesBrandingArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "sign_in_experiences" */
export type Sign_In_ExperiencesColorArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "sign_in_experiences" */
export type Sign_In_ExperiencesCustom_ContentArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "sign_in_experiences" */
export type Sign_In_ExperiencesLanguage_InfoArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "sign_in_experiences" */
export type Sign_In_ExperiencesMfaArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "sign_in_experiences" */
export type Sign_In_ExperiencesPassword_PolicyArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "sign_in_experiences" */
export type Sign_In_ExperiencesSign_InArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "sign_in_experiences" */
export type Sign_In_ExperiencesSign_UpArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "sign_in_experiences" */
export type Sign_In_ExperiencesSocial_Sign_In_Connector_TargetsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "sign_in_experiences" */
export type Sign_In_Experiences_Aggregate = {
  aggregate?: Maybe<Sign_In_Experiences_Aggregate_Fields>;
  nodes: Array<Sign_In_Experiences>;
};

/** aggregate fields of "sign_in_experiences" */
export type Sign_In_Experiences_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Sign_In_Experiences_Max_Fields>;
  min?: Maybe<Sign_In_Experiences_Min_Fields>;
};


/** aggregate fields of "sign_in_experiences" */
export type Sign_In_Experiences_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sign_In_Experiences_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Sign_In_Experiences_Append_Input = {
  branding?: InputMaybe<Scalars['jsonb']['input']>;
  color?: InputMaybe<Scalars['jsonb']['input']>;
  custom_content?: InputMaybe<Scalars['jsonb']['input']>;
  language_info?: InputMaybe<Scalars['jsonb']['input']>;
  mfa?: InputMaybe<Scalars['jsonb']['input']>;
  password_policy?: InputMaybe<Scalars['jsonb']['input']>;
  sign_in?: InputMaybe<Scalars['jsonb']['input']>;
  sign_up?: InputMaybe<Scalars['jsonb']['input']>;
  social_sign_in_connector_targets?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "sign_in_experiences". All fields are combined with a logical 'AND'. */
export type Sign_In_Experiences_Bool_Exp = {
  _and?: InputMaybe<Array<Sign_In_Experiences_Bool_Exp>>;
  _not?: InputMaybe<Sign_In_Experiences_Bool_Exp>;
  _or?: InputMaybe<Array<Sign_In_Experiences_Bool_Exp>>;
  branding?: InputMaybe<Jsonb_Comparison_Exp>;
  color?: InputMaybe<Jsonb_Comparison_Exp>;
  custom_content?: InputMaybe<Jsonb_Comparison_Exp>;
  custom_css?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  language_info?: InputMaybe<Jsonb_Comparison_Exp>;
  mfa?: InputMaybe<Jsonb_Comparison_Exp>;
  password_policy?: InputMaybe<Jsonb_Comparison_Exp>;
  privacy_policy_url?: InputMaybe<String_Comparison_Exp>;
  sign_in?: InputMaybe<Jsonb_Comparison_Exp>;
  sign_in_mode?: InputMaybe<Sign_In_Mode_Comparison_Exp>;
  sign_up?: InputMaybe<Jsonb_Comparison_Exp>;
  single_sign_on_enabled?: InputMaybe<Boolean_Comparison_Exp>;
  social_sign_in_connector_targets?: InputMaybe<Jsonb_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  terms_of_use_url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sign_in_experiences" */
export enum Sign_In_Experiences_Constraint {
  /** unique or primary key constraint on columns "id", "tenant_id" */
  SignInExperiencesPkey = 'sign_in_experiences_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Sign_In_Experiences_Delete_At_Path_Input = {
  branding?: InputMaybe<Array<Scalars['String']['input']>>;
  color?: InputMaybe<Array<Scalars['String']['input']>>;
  custom_content?: InputMaybe<Array<Scalars['String']['input']>>;
  language_info?: InputMaybe<Array<Scalars['String']['input']>>;
  mfa?: InputMaybe<Array<Scalars['String']['input']>>;
  password_policy?: InputMaybe<Array<Scalars['String']['input']>>;
  sign_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sign_up?: InputMaybe<Array<Scalars['String']['input']>>;
  social_sign_in_connector_targets?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Sign_In_Experiences_Delete_Elem_Input = {
  branding?: InputMaybe<Scalars['Int']['input']>;
  color?: InputMaybe<Scalars['Int']['input']>;
  custom_content?: InputMaybe<Scalars['Int']['input']>;
  language_info?: InputMaybe<Scalars['Int']['input']>;
  mfa?: InputMaybe<Scalars['Int']['input']>;
  password_policy?: InputMaybe<Scalars['Int']['input']>;
  sign_in?: InputMaybe<Scalars['Int']['input']>;
  sign_up?: InputMaybe<Scalars['Int']['input']>;
  social_sign_in_connector_targets?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Sign_In_Experiences_Delete_Key_Input = {
  branding?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  custom_content?: InputMaybe<Scalars['String']['input']>;
  language_info?: InputMaybe<Scalars['String']['input']>;
  mfa?: InputMaybe<Scalars['String']['input']>;
  password_policy?: InputMaybe<Scalars['String']['input']>;
  sign_in?: InputMaybe<Scalars['String']['input']>;
  sign_up?: InputMaybe<Scalars['String']['input']>;
  social_sign_in_connector_targets?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "sign_in_experiences" */
export type Sign_In_Experiences_Insert_Input = {
  branding?: InputMaybe<Scalars['jsonb']['input']>;
  color?: InputMaybe<Scalars['jsonb']['input']>;
  custom_content?: InputMaybe<Scalars['jsonb']['input']>;
  custom_css?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  language_info?: InputMaybe<Scalars['jsonb']['input']>;
  mfa?: InputMaybe<Scalars['jsonb']['input']>;
  password_policy?: InputMaybe<Scalars['jsonb']['input']>;
  privacy_policy_url?: InputMaybe<Scalars['String']['input']>;
  sign_in?: InputMaybe<Scalars['jsonb']['input']>;
  sign_in_mode?: InputMaybe<Scalars['sign_in_mode']['input']>;
  sign_up?: InputMaybe<Scalars['jsonb']['input']>;
  single_sign_on_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  social_sign_in_connector_targets?: InputMaybe<Scalars['jsonb']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  terms_of_use_url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Sign_In_Experiences_Max_Fields = {
  custom_css?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  privacy_policy_url?: Maybe<Scalars['String']['output']>;
  sign_in_mode?: Maybe<Scalars['sign_in_mode']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  terms_of_use_url?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Sign_In_Experiences_Min_Fields = {
  custom_css?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  privacy_policy_url?: Maybe<Scalars['String']['output']>;
  sign_in_mode?: Maybe<Scalars['sign_in_mode']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  terms_of_use_url?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "sign_in_experiences" */
export type Sign_In_Experiences_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sign_In_Experiences>;
};

/** on_conflict condition type for table "sign_in_experiences" */
export type Sign_In_Experiences_On_Conflict = {
  constraint: Sign_In_Experiences_Constraint;
  update_columns?: Array<Sign_In_Experiences_Update_Column>;
  where?: InputMaybe<Sign_In_Experiences_Bool_Exp>;
};

/** Ordering options when selecting data from "sign_in_experiences". */
export type Sign_In_Experiences_Order_By = {
  branding?: InputMaybe<Order_By>;
  color?: InputMaybe<Order_By>;
  custom_content?: InputMaybe<Order_By>;
  custom_css?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language_info?: InputMaybe<Order_By>;
  mfa?: InputMaybe<Order_By>;
  password_policy?: InputMaybe<Order_By>;
  privacy_policy_url?: InputMaybe<Order_By>;
  sign_in?: InputMaybe<Order_By>;
  sign_in_mode?: InputMaybe<Order_By>;
  sign_up?: InputMaybe<Order_By>;
  single_sign_on_enabled?: InputMaybe<Order_By>;
  social_sign_in_connector_targets?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  terms_of_use_url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sign_in_experiences */
export type Sign_In_Experiences_Pk_Columns_Input = {
  id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Sign_In_Experiences_Prepend_Input = {
  branding?: InputMaybe<Scalars['jsonb']['input']>;
  color?: InputMaybe<Scalars['jsonb']['input']>;
  custom_content?: InputMaybe<Scalars['jsonb']['input']>;
  language_info?: InputMaybe<Scalars['jsonb']['input']>;
  mfa?: InputMaybe<Scalars['jsonb']['input']>;
  password_policy?: InputMaybe<Scalars['jsonb']['input']>;
  sign_in?: InputMaybe<Scalars['jsonb']['input']>;
  sign_up?: InputMaybe<Scalars['jsonb']['input']>;
  social_sign_in_connector_targets?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "sign_in_experiences" */
export enum Sign_In_Experiences_Select_Column {
  /** column name */
  Branding = 'branding',
  /** column name */
  Color = 'color',
  /** column name */
  CustomContent = 'custom_content',
  /** column name */
  CustomCss = 'custom_css',
  /** column name */
  Id = 'id',
  /** column name */
  LanguageInfo = 'language_info',
  /** column name */
  Mfa = 'mfa',
  /** column name */
  PasswordPolicy = 'password_policy',
  /** column name */
  PrivacyPolicyUrl = 'privacy_policy_url',
  /** column name */
  SignIn = 'sign_in',
  /** column name */
  SignInMode = 'sign_in_mode',
  /** column name */
  SignUp = 'sign_up',
  /** column name */
  SingleSignOnEnabled = 'single_sign_on_enabled',
  /** column name */
  SocialSignInConnectorTargets = 'social_sign_in_connector_targets',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  TermsOfUseUrl = 'terms_of_use_url'
}

/** input type for updating data in table "sign_in_experiences" */
export type Sign_In_Experiences_Set_Input = {
  branding?: InputMaybe<Scalars['jsonb']['input']>;
  color?: InputMaybe<Scalars['jsonb']['input']>;
  custom_content?: InputMaybe<Scalars['jsonb']['input']>;
  custom_css?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  language_info?: InputMaybe<Scalars['jsonb']['input']>;
  mfa?: InputMaybe<Scalars['jsonb']['input']>;
  password_policy?: InputMaybe<Scalars['jsonb']['input']>;
  privacy_policy_url?: InputMaybe<Scalars['String']['input']>;
  sign_in?: InputMaybe<Scalars['jsonb']['input']>;
  sign_in_mode?: InputMaybe<Scalars['sign_in_mode']['input']>;
  sign_up?: InputMaybe<Scalars['jsonb']['input']>;
  single_sign_on_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  social_sign_in_connector_targets?: InputMaybe<Scalars['jsonb']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  terms_of_use_url?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "sign_in_experiences" */
export type Sign_In_Experiences_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sign_In_Experiences_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sign_In_Experiences_Stream_Cursor_Value_Input = {
  branding?: InputMaybe<Scalars['jsonb']['input']>;
  color?: InputMaybe<Scalars['jsonb']['input']>;
  custom_content?: InputMaybe<Scalars['jsonb']['input']>;
  custom_css?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  language_info?: InputMaybe<Scalars['jsonb']['input']>;
  mfa?: InputMaybe<Scalars['jsonb']['input']>;
  password_policy?: InputMaybe<Scalars['jsonb']['input']>;
  privacy_policy_url?: InputMaybe<Scalars['String']['input']>;
  sign_in?: InputMaybe<Scalars['jsonb']['input']>;
  sign_in_mode?: InputMaybe<Scalars['sign_in_mode']['input']>;
  sign_up?: InputMaybe<Scalars['jsonb']['input']>;
  single_sign_on_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  social_sign_in_connector_targets?: InputMaybe<Scalars['jsonb']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  terms_of_use_url?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "sign_in_experiences" */
export enum Sign_In_Experiences_Update_Column {
  /** column name */
  Branding = 'branding',
  /** column name */
  Color = 'color',
  /** column name */
  CustomContent = 'custom_content',
  /** column name */
  CustomCss = 'custom_css',
  /** column name */
  Id = 'id',
  /** column name */
  LanguageInfo = 'language_info',
  /** column name */
  Mfa = 'mfa',
  /** column name */
  PasswordPolicy = 'password_policy',
  /** column name */
  PrivacyPolicyUrl = 'privacy_policy_url',
  /** column name */
  SignIn = 'sign_in',
  /** column name */
  SignInMode = 'sign_in_mode',
  /** column name */
  SignUp = 'sign_up',
  /** column name */
  SingleSignOnEnabled = 'single_sign_on_enabled',
  /** column name */
  SocialSignInConnectorTargets = 'social_sign_in_connector_targets',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  TermsOfUseUrl = 'terms_of_use_url'
}

export type Sign_In_Experiences_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Sign_In_Experiences_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Sign_In_Experiences_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Sign_In_Experiences_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Sign_In_Experiences_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Sign_In_Experiences_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sign_In_Experiences_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sign_In_Experiences_Bool_Exp;
};

/** Boolean expression to compare columns of type "sign_in_mode". All fields are combined with logical 'AND'. */
export type Sign_In_Mode_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['sign_in_mode']['input']>;
  _gt?: InputMaybe<Scalars['sign_in_mode']['input']>;
  _gte?: InputMaybe<Scalars['sign_in_mode']['input']>;
  _in?: InputMaybe<Array<Scalars['sign_in_mode']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['sign_in_mode']['input']>;
  _lte?: InputMaybe<Scalars['sign_in_mode']['input']>;
  _neq?: InputMaybe<Scalars['sign_in_mode']['input']>;
  _nin?: InputMaybe<Array<Scalars['sign_in_mode']['input']>>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

/** 短信验证码 */
export type Sms_Codes = {
  captcha: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  phone_number: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "sms_codes" */
export type Sms_Codes_Aggregate = {
  aggregate?: Maybe<Sms_Codes_Aggregate_Fields>;
  nodes: Array<Sms_Codes>;
};

/** aggregate fields of "sms_codes" */
export type Sms_Codes_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Sms_Codes_Max_Fields>;
  min?: Maybe<Sms_Codes_Min_Fields>;
};


/** aggregate fields of "sms_codes" */
export type Sms_Codes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sms_Codes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "sms_codes". All fields are combined with a logical 'AND'. */
export type Sms_Codes_Bool_Exp = {
  _and?: InputMaybe<Array<Sms_Codes_Bool_Exp>>;
  _not?: InputMaybe<Sms_Codes_Bool_Exp>;
  _or?: InputMaybe<Array<Sms_Codes_Bool_Exp>>;
  captcha?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sms_codes" */
export enum Sms_Codes_Constraint {
  /** unique or primary key constraint on columns "id" */
  SmsCodesPkey = 'sms_codes_pkey'
}

/** input type for inserting data into table "sms_codes" */
export type Sms_Codes_Insert_Input = {
  captcha?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Sms_Codes_Max_Fields = {
  captcha?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Sms_Codes_Min_Fields = {
  captcha?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "sms_codes" */
export type Sms_Codes_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sms_Codes>;
};

/** on_conflict condition type for table "sms_codes" */
export type Sms_Codes_On_Conflict = {
  constraint: Sms_Codes_Constraint;
  update_columns?: Array<Sms_Codes_Update_Column>;
  where?: InputMaybe<Sms_Codes_Bool_Exp>;
};

/** Ordering options when selecting data from "sms_codes". */
export type Sms_Codes_Order_By = {
  captcha?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sms_codes */
export type Sms_Codes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "sms_codes" */
export enum Sms_Codes_Select_Column {
  /** column name */
  Captcha = 'captcha',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "sms_codes" */
export type Sms_Codes_Set_Input = {
  captcha?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "sms_codes" */
export type Sms_Codes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sms_Codes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sms_Codes_Stream_Cursor_Value_Input = {
  captcha?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "sms_codes" */
export enum Sms_Codes_Update_Column {
  /** column name */
  Captcha = 'captcha',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  UserId = 'user_id'
}

export type Sms_Codes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sms_Codes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sms_Codes_Bool_Exp;
};

/** columns and relationships of "sso_connectors" */
export type Sso_Connectors = {
  branding: Scalars['jsonb']['output'];
  config: Scalars['jsonb']['output'];
  connector_name: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  domains: Scalars['jsonb']['output'];
  id: Scalars['String']['output'];
  provider_name: Scalars['String']['output'];
  sync_profile: Scalars['Boolean']['output'];
  tenant_id: Scalars['String']['output'];
};


/** columns and relationships of "sso_connectors" */
export type Sso_ConnectorsBrandingArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "sso_connectors" */
export type Sso_ConnectorsConfigArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "sso_connectors" */
export type Sso_ConnectorsDomainsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "sso_connectors" */
export type Sso_Connectors_Aggregate = {
  aggregate?: Maybe<Sso_Connectors_Aggregate_Fields>;
  nodes: Array<Sso_Connectors>;
};

/** aggregate fields of "sso_connectors" */
export type Sso_Connectors_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Sso_Connectors_Max_Fields>;
  min?: Maybe<Sso_Connectors_Min_Fields>;
};


/** aggregate fields of "sso_connectors" */
export type Sso_Connectors_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sso_Connectors_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Sso_Connectors_Append_Input = {
  branding?: InputMaybe<Scalars['jsonb']['input']>;
  config?: InputMaybe<Scalars['jsonb']['input']>;
  domains?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "sso_connectors". All fields are combined with a logical 'AND'. */
export type Sso_Connectors_Bool_Exp = {
  _and?: InputMaybe<Array<Sso_Connectors_Bool_Exp>>;
  _not?: InputMaybe<Sso_Connectors_Bool_Exp>;
  _or?: InputMaybe<Array<Sso_Connectors_Bool_Exp>>;
  branding?: InputMaybe<Jsonb_Comparison_Exp>;
  config?: InputMaybe<Jsonb_Comparison_Exp>;
  connector_name?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  domains?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  provider_name?: InputMaybe<String_Comparison_Exp>;
  sync_profile?: InputMaybe<Boolean_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sso_connectors" */
export enum Sso_Connectors_Constraint {
  /** unique or primary key constraint on columns "tenant_id", "connector_name" */
  SsoConnectorsConnectorNameUnique = 'sso_connectors__connector_name__unique',
  /** unique or primary key constraint on columns "id" */
  SsoConnectorsPkey = 'sso_connectors_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Sso_Connectors_Delete_At_Path_Input = {
  branding?: InputMaybe<Array<Scalars['String']['input']>>;
  config?: InputMaybe<Array<Scalars['String']['input']>>;
  domains?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Sso_Connectors_Delete_Elem_Input = {
  branding?: InputMaybe<Scalars['Int']['input']>;
  config?: InputMaybe<Scalars['Int']['input']>;
  domains?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Sso_Connectors_Delete_Key_Input = {
  branding?: InputMaybe<Scalars['String']['input']>;
  config?: InputMaybe<Scalars['String']['input']>;
  domains?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "sso_connectors" */
export type Sso_Connectors_Insert_Input = {
  branding?: InputMaybe<Scalars['jsonb']['input']>;
  config?: InputMaybe<Scalars['jsonb']['input']>;
  connector_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  domains?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  provider_name?: InputMaybe<Scalars['String']['input']>;
  sync_profile?: InputMaybe<Scalars['Boolean']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Sso_Connectors_Max_Fields = {
  connector_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  provider_name?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Sso_Connectors_Min_Fields = {
  connector_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  provider_name?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "sso_connectors" */
export type Sso_Connectors_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sso_Connectors>;
};

/** on_conflict condition type for table "sso_connectors" */
export type Sso_Connectors_On_Conflict = {
  constraint: Sso_Connectors_Constraint;
  update_columns?: Array<Sso_Connectors_Update_Column>;
  where?: InputMaybe<Sso_Connectors_Bool_Exp>;
};

/** Ordering options when selecting data from "sso_connectors". */
export type Sso_Connectors_Order_By = {
  branding?: InputMaybe<Order_By>;
  config?: InputMaybe<Order_By>;
  connector_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  domains?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider_name?: InputMaybe<Order_By>;
  sync_profile?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sso_connectors */
export type Sso_Connectors_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Sso_Connectors_Prepend_Input = {
  branding?: InputMaybe<Scalars['jsonb']['input']>;
  config?: InputMaybe<Scalars['jsonb']['input']>;
  domains?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "sso_connectors" */
export enum Sso_Connectors_Select_Column {
  /** column name */
  Branding = 'branding',
  /** column name */
  Config = 'config',
  /** column name */
  ConnectorName = 'connector_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Domains = 'domains',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderName = 'provider_name',
  /** column name */
  SyncProfile = 'sync_profile',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "sso_connectors" */
export type Sso_Connectors_Set_Input = {
  branding?: InputMaybe<Scalars['jsonb']['input']>;
  config?: InputMaybe<Scalars['jsonb']['input']>;
  connector_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  domains?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  provider_name?: InputMaybe<Scalars['String']['input']>;
  sync_profile?: InputMaybe<Scalars['Boolean']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "sso_connectors" */
export type Sso_Connectors_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sso_Connectors_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sso_Connectors_Stream_Cursor_Value_Input = {
  branding?: InputMaybe<Scalars['jsonb']['input']>;
  config?: InputMaybe<Scalars['jsonb']['input']>;
  connector_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  domains?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  provider_name?: InputMaybe<Scalars['String']['input']>;
  sync_profile?: InputMaybe<Scalars['Boolean']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "sso_connectors" */
export enum Sso_Connectors_Update_Column {
  /** column name */
  Branding = 'branding',
  /** column name */
  Config = 'config',
  /** column name */
  ConnectorName = 'connector_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Domains = 'domains',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderName = 'provider_name',
  /** column name */
  SyncProfile = 'sync_profile',
  /** column name */
  TenantId = 'tenant_id'
}

export type Sso_Connectors_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Sso_Connectors_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Sso_Connectors_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Sso_Connectors_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Sso_Connectors_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Sso_Connectors_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sso_Connectors_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sso_Connectors_Bool_Exp;
};

export type Subscription_Root = {
  /** fetch data from the table: "ads" */
  ads: Array<Ads>;
  /** fetch aggregated fields from the table: "ads" */
  ads_aggregate: Ads_Aggregate;
  /** fetch data from the table: "ads" using primary key columns */
  ads_by_pk?: Maybe<Ads>;
  /** fetch data from the table in a streaming manner: "ads" */
  ads_stream: Array<Ads>;
  /** fetch data from the table: "application_sign_in_experiences" */
  application_sign_in_experiences: Array<Application_Sign_In_Experiences>;
  /** fetch aggregated fields from the table: "application_sign_in_experiences" */
  application_sign_in_experiences_aggregate: Application_Sign_In_Experiences_Aggregate;
  /** fetch data from the table: "application_sign_in_experiences" using primary key columns */
  application_sign_in_experiences_by_pk?: Maybe<Application_Sign_In_Experiences>;
  /** fetch data from the table in a streaming manner: "application_sign_in_experiences" */
  application_sign_in_experiences_stream: Array<Application_Sign_In_Experiences>;
  /** fetch data from the table: "application_user_consent_organization_scopes" */
  application_user_consent_organization_scopes: Array<Application_User_Consent_Organization_Scopes>;
  /** fetch aggregated fields from the table: "application_user_consent_organization_scopes" */
  application_user_consent_organization_scopes_aggregate: Application_User_Consent_Organization_Scopes_Aggregate;
  /** fetch data from the table: "application_user_consent_organization_scopes" using primary key columns */
  application_user_consent_organization_scopes_by_pk?: Maybe<Application_User_Consent_Organization_Scopes>;
  /** fetch data from the table in a streaming manner: "application_user_consent_organization_scopes" */
  application_user_consent_organization_scopes_stream: Array<Application_User_Consent_Organization_Scopes>;
  /** fetch data from the table: "application_user_consent_organizations" */
  application_user_consent_organizations: Array<Application_User_Consent_Organizations>;
  /** fetch aggregated fields from the table: "application_user_consent_organizations" */
  application_user_consent_organizations_aggregate: Application_User_Consent_Organizations_Aggregate;
  /** fetch data from the table: "application_user_consent_organizations" using primary key columns */
  application_user_consent_organizations_by_pk?: Maybe<Application_User_Consent_Organizations>;
  /** fetch data from the table in a streaming manner: "application_user_consent_organizations" */
  application_user_consent_organizations_stream: Array<Application_User_Consent_Organizations>;
  /** fetch data from the table: "application_user_consent_resource_scopes" */
  application_user_consent_resource_scopes: Array<Application_User_Consent_Resource_Scopes>;
  /** fetch aggregated fields from the table: "application_user_consent_resource_scopes" */
  application_user_consent_resource_scopes_aggregate: Application_User_Consent_Resource_Scopes_Aggregate;
  /** fetch data from the table: "application_user_consent_resource_scopes" using primary key columns */
  application_user_consent_resource_scopes_by_pk?: Maybe<Application_User_Consent_Resource_Scopes>;
  /** fetch data from the table in a streaming manner: "application_user_consent_resource_scopes" */
  application_user_consent_resource_scopes_stream: Array<Application_User_Consent_Resource_Scopes>;
  /** fetch data from the table: "application_user_consent_user_scopes" */
  application_user_consent_user_scopes: Array<Application_User_Consent_User_Scopes>;
  /** fetch aggregated fields from the table: "application_user_consent_user_scopes" */
  application_user_consent_user_scopes_aggregate: Application_User_Consent_User_Scopes_Aggregate;
  /** fetch data from the table: "application_user_consent_user_scopes" using primary key columns */
  application_user_consent_user_scopes_by_pk?: Maybe<Application_User_Consent_User_Scopes>;
  /** fetch data from the table in a streaming manner: "application_user_consent_user_scopes" */
  application_user_consent_user_scopes_stream: Array<Application_User_Consent_User_Scopes>;
  /** fetch data from the table: "applications" */
  applications: Array<Applications>;
  /** fetch aggregated fields from the table: "applications" */
  applications_aggregate: Applications_Aggregate;
  /** fetch data from the table: "applications" using primary key columns */
  applications_by_pk?: Maybe<Applications>;
  /** fetch data from the table: "applications_roles" */
  applications_roles: Array<Applications_Roles>;
  /** fetch aggregated fields from the table: "applications_roles" */
  applications_roles_aggregate: Applications_Roles_Aggregate;
  /** fetch data from the table: "applications_roles" using primary key columns */
  applications_roles_by_pk?: Maybe<Applications_Roles>;
  /** fetch data from the table in a streaming manner: "applications_roles" */
  applications_roles_stream: Array<Applications_Roles>;
  /** fetch data from the table in a streaming manner: "applications" */
  applications_stream: Array<Applications>;
  /** fetch data from the table: "check_in_settings" */
  check_in_settings: Array<Check_In_Settings>;
  /** fetch aggregated fields from the table: "check_in_settings" */
  check_in_settings_aggregate: Check_In_Settings_Aggregate;
  /** fetch data from the table: "check_in_settings" using primary key columns */
  check_in_settings_by_pk?: Maybe<Check_In_Settings>;
  /** fetch data from the table in a streaming manner: "check_in_settings" */
  check_in_settings_stream: Array<Check_In_Settings>;
  /** fetch data from the table: "check_ins" */
  check_ins: Array<Check_Ins>;
  /** fetch aggregated fields from the table: "check_ins" */
  check_ins_aggregate: Check_Ins_Aggregate;
  /** fetch data from the table: "check_ins" using primary key columns */
  check_ins_by_pk?: Maybe<Check_Ins>;
  /** fetch data from the table in a streaming manner: "check_ins" */
  check_ins_stream: Array<Check_Ins>;
  /** fetch data from the table: "cholesterol_records" */
  cholesterol_records: Array<Cholesterol_Records>;
  /** fetch aggregated fields from the table: "cholesterol_records" */
  cholesterol_records_aggregate: Cholesterol_Records_Aggregate;
  /** fetch data from the table: "cholesterol_records" using primary key columns */
  cholesterol_records_by_pk?: Maybe<Cholesterol_Records>;
  /** fetch data from the table in a streaming manner: "cholesterol_records" */
  cholesterol_records_stream: Array<Cholesterol_Records>;
  /** fetch data from the table: "cholesterol_standards" */
  cholesterol_standards: Array<Cholesterol_Standards>;
  /** fetch aggregated fields from the table: "cholesterol_standards" */
  cholesterol_standards_aggregate: Cholesterol_Standards_Aggregate;
  /** fetch data from the table: "cholesterol_standards" using primary key columns */
  cholesterol_standards_by_pk?: Maybe<Cholesterol_Standards>;
  /** fetch data from the table in a streaming manner: "cholesterol_standards" */
  cholesterol_standards_stream: Array<Cholesterol_Standards>;
  /** fetch data from the table: "connectors" */
  connectors: Array<Connectors>;
  /** fetch aggregated fields from the table: "connectors" */
  connectors_aggregate: Connectors_Aggregate;
  /** fetch data from the table: "connectors" using primary key columns */
  connectors_by_pk?: Maybe<Connectors>;
  /** fetch data from the table in a streaming manner: "connectors" */
  connectors_stream: Array<Connectors>;
  /** fetch data from the table: "custom_phrases" */
  custom_phrases: Array<Custom_Phrases>;
  /** fetch aggregated fields from the table: "custom_phrases" */
  custom_phrases_aggregate: Custom_Phrases_Aggregate;
  /** fetch data from the table: "custom_phrases" using primary key columns */
  custom_phrases_by_pk?: Maybe<Custom_Phrases>;
  /** fetch data from the table in a streaming manner: "custom_phrases" */
  custom_phrases_stream: Array<Custom_Phrases>;
  /** fetch data from the table: "daily_active_users" */
  daily_active_users: Array<Daily_Active_Users>;
  /** fetch aggregated fields from the table: "daily_active_users" */
  daily_active_users_aggregate: Daily_Active_Users_Aggregate;
  /** fetch data from the table: "daily_active_users" using primary key columns */
  daily_active_users_by_pk?: Maybe<Daily_Active_Users>;
  /** fetch data from the table in a streaming manner: "daily_active_users" */
  daily_active_users_stream: Array<Daily_Active_Users>;
  /** fetch data from the table: "daily_token_usage" */
  daily_token_usage: Array<Daily_Token_Usage>;
  /** fetch aggregated fields from the table: "daily_token_usage" */
  daily_token_usage_aggregate: Daily_Token_Usage_Aggregate;
  /** fetch data from the table: "daily_token_usage" using primary key columns */
  daily_token_usage_by_pk?: Maybe<Daily_Token_Usage>;
  /** fetch data from the table in a streaming manner: "daily_token_usage" */
  daily_token_usage_stream: Array<Daily_Token_Usage>;
  /** fetch data from the table: "domains" */
  domains: Array<Domains>;
  /** fetch aggregated fields from the table: "domains" */
  domains_aggregate: Domains_Aggregate;
  /** fetch data from the table: "domains" using primary key columns */
  domains_by_pk?: Maybe<Domains>;
  /** fetch data from the table in a streaming manner: "domains" */
  domains_stream: Array<Domains>;
  /** fetch data from the table: "glucose_records" */
  glucose_records: Array<Glucose_Records>;
  /** fetch aggregated fields from the table: "glucose_records" */
  glucose_records_aggregate: Glucose_Records_Aggregate;
  /** fetch data from the table: "glucose_records" using primary key columns */
  glucose_records_by_pk?: Maybe<Glucose_Records>;
  /** fetch data from the table in a streaming manner: "glucose_records" */
  glucose_records_stream: Array<Glucose_Records>;
  /** fetch data from the table: "glucose_standards" */
  glucose_standards: Array<Glucose_Standards>;
  /** fetch aggregated fields from the table: "glucose_standards" */
  glucose_standards_aggregate: Glucose_Standards_Aggregate;
  /** fetch data from the table: "glucose_standards" using primary key columns */
  glucose_standards_by_pk?: Maybe<Glucose_Standards>;
  /** fetch data from the table in a streaming manner: "glucose_standards" */
  glucose_standards_stream: Array<Glucose_Standards>;
  /** fetch data from the table: "hooks" */
  hooks: Array<Hooks>;
  /** fetch aggregated fields from the table: "hooks" */
  hooks_aggregate: Hooks_Aggregate;
  /** fetch data from the table: "hooks" using primary key columns */
  hooks_by_pk?: Maybe<Hooks>;
  /** fetch data from the table in a streaming manner: "hooks" */
  hooks_stream: Array<Hooks>;
  /** fetch data from the table: "lab_report_records" */
  lab_report_records: Array<Lab_Report_Records>;
  /** fetch aggregated fields from the table: "lab_report_records" */
  lab_report_records_aggregate: Lab_Report_Records_Aggregate;
  /** fetch data from the table: "lab_report_records" using primary key columns */
  lab_report_records_by_pk?: Maybe<Lab_Report_Records>;
  /** fetch data from the table in a streaming manner: "lab_report_records" */
  lab_report_records_stream: Array<Lab_Report_Records>;
  /** fetch data from the table: "logs" */
  logs: Array<Logs>;
  /** fetch aggregated fields from the table: "logs" */
  logs_aggregate: Logs_Aggregate;
  /** fetch data from the table: "logs" using primary key columns */
  logs_by_pk?: Maybe<Logs>;
  /** fetch data from the table in a streaming manner: "logs" */
  logs_stream: Array<Logs>;
  /** fetch data from the table: "logto_configs" */
  logto_configs: Array<Logto_Configs>;
  /** fetch aggregated fields from the table: "logto_configs" */
  logto_configs_aggregate: Logto_Configs_Aggregate;
  /** fetch data from the table: "logto_configs" using primary key columns */
  logto_configs_by_pk?: Maybe<Logto_Configs>;
  /** fetch data from the table in a streaming manner: "logto_configs" */
  logto_configs_stream: Array<Logto_Configs>;
  /** fetch data from the table: "medical_examination_records" */
  medical_examination_records: Array<Medical_Examination_Records>;
  /** fetch aggregated fields from the table: "medical_examination_records" */
  medical_examination_records_aggregate: Medical_Examination_Records_Aggregate;
  /** fetch data from the table: "medical_examination_records" using primary key columns */
  medical_examination_records_by_pk?: Maybe<Medical_Examination_Records>;
  /** fetch data from the table in a streaming manner: "medical_examination_records" */
  medical_examination_records_stream: Array<Medical_Examination_Records>;
  /** fetch data from the table: "medication_reminders" */
  medication_reminders: Array<Medication_Reminders>;
  /** fetch aggregated fields from the table: "medication_reminders" */
  medication_reminders_aggregate: Medication_Reminders_Aggregate;
  /** fetch data from the table: "medication_reminders" using primary key columns */
  medication_reminders_by_pk?: Maybe<Medication_Reminders>;
  /** fetch data from the table in a streaming manner: "medication_reminders" */
  medication_reminders_stream: Array<Medication_Reminders>;
  /** fetch data from the table: "oidc_model_instances" */
  oidc_model_instances: Array<Oidc_Model_Instances>;
  /** fetch aggregated fields from the table: "oidc_model_instances" */
  oidc_model_instances_aggregate: Oidc_Model_Instances_Aggregate;
  /** fetch data from the table: "oidc_model_instances" using primary key columns */
  oidc_model_instances_by_pk?: Maybe<Oidc_Model_Instances>;
  /** fetch data from the table in a streaming manner: "oidc_model_instances" */
  oidc_model_instances_stream: Array<Oidc_Model_Instances>;
  /** fetch data from the table: "organization_invitation_role_relations" */
  organization_invitation_role_relations: Array<Organization_Invitation_Role_Relations>;
  /** fetch aggregated fields from the table: "organization_invitation_role_relations" */
  organization_invitation_role_relations_aggregate: Organization_Invitation_Role_Relations_Aggregate;
  /** fetch data from the table: "organization_invitation_role_relations" using primary key columns */
  organization_invitation_role_relations_by_pk?: Maybe<Organization_Invitation_Role_Relations>;
  /** fetch data from the table in a streaming manner: "organization_invitation_role_relations" */
  organization_invitation_role_relations_stream: Array<Organization_Invitation_Role_Relations>;
  /** fetch data from the table: "organization_invitations" */
  organization_invitations: Array<Organization_Invitations>;
  /** fetch aggregated fields from the table: "organization_invitations" */
  organization_invitations_aggregate: Organization_Invitations_Aggregate;
  /** fetch data from the table: "organization_invitations" using primary key columns */
  organization_invitations_by_pk?: Maybe<Organization_Invitations>;
  /** fetch data from the table in a streaming manner: "organization_invitations" */
  organization_invitations_stream: Array<Organization_Invitations>;
  /** fetch data from the table: "organization_role_scope_relations" */
  organization_role_scope_relations: Array<Organization_Role_Scope_Relations>;
  /** fetch aggregated fields from the table: "organization_role_scope_relations" */
  organization_role_scope_relations_aggregate: Organization_Role_Scope_Relations_Aggregate;
  /** fetch data from the table: "organization_role_scope_relations" using primary key columns */
  organization_role_scope_relations_by_pk?: Maybe<Organization_Role_Scope_Relations>;
  /** fetch data from the table in a streaming manner: "organization_role_scope_relations" */
  organization_role_scope_relations_stream: Array<Organization_Role_Scope_Relations>;
  /** fetch data from the table: "organization_role_user_relations" */
  organization_role_user_relations: Array<Organization_Role_User_Relations>;
  /** fetch aggregated fields from the table: "organization_role_user_relations" */
  organization_role_user_relations_aggregate: Organization_Role_User_Relations_Aggregate;
  /** fetch data from the table: "organization_role_user_relations" using primary key columns */
  organization_role_user_relations_by_pk?: Maybe<Organization_Role_User_Relations>;
  /** fetch data from the table in a streaming manner: "organization_role_user_relations" */
  organization_role_user_relations_stream: Array<Organization_Role_User_Relations>;
  /** fetch data from the table: "organization_roles" */
  organization_roles: Array<Organization_Roles>;
  /** fetch aggregated fields from the table: "organization_roles" */
  organization_roles_aggregate: Organization_Roles_Aggregate;
  /** fetch data from the table: "organization_roles" using primary key columns */
  organization_roles_by_pk?: Maybe<Organization_Roles>;
  /** fetch data from the table in a streaming manner: "organization_roles" */
  organization_roles_stream: Array<Organization_Roles>;
  /** fetch data from the table: "organization_scopes" */
  organization_scopes: Array<Organization_Scopes>;
  /** fetch aggregated fields from the table: "organization_scopes" */
  organization_scopes_aggregate: Organization_Scopes_Aggregate;
  /** fetch data from the table: "organization_scopes" using primary key columns */
  organization_scopes_by_pk?: Maybe<Organization_Scopes>;
  /** fetch data from the table in a streaming manner: "organization_scopes" */
  organization_scopes_stream: Array<Organization_Scopes>;
  /** fetch data from the table: "organization_user_relations" */
  organization_user_relations: Array<Organization_User_Relations>;
  /** fetch aggregated fields from the table: "organization_user_relations" */
  organization_user_relations_aggregate: Organization_User_Relations_Aggregate;
  /** fetch data from the table: "organization_user_relations" using primary key columns */
  organization_user_relations_by_pk?: Maybe<Organization_User_Relations>;
  /** fetch data from the table in a streaming manner: "organization_user_relations" */
  organization_user_relations_stream: Array<Organization_User_Relations>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table in a streaming manner: "organizations" */
  organizations_stream: Array<Organizations>;
  /** fetch data from the table: "passcodes" */
  passcodes: Array<Passcodes>;
  /** fetch aggregated fields from the table: "passcodes" */
  passcodes_aggregate: Passcodes_Aggregate;
  /** fetch data from the table: "passcodes" using primary key columns */
  passcodes_by_pk?: Maybe<Passcodes>;
  /** fetch data from the table in a streaming manner: "passcodes" */
  passcodes_stream: Array<Passcodes>;
  /** fetch data from the table: "pg_buffercache" */
  pg_buffercache: Array<Pg_Buffercache>;
  /** fetch aggregated fields from the table: "pg_buffercache" */
  pg_buffercache_aggregate: Pg_Buffercache_Aggregate;
  /** fetch data from the table in a streaming manner: "pg_buffercache" */
  pg_buffercache_stream: Array<Pg_Buffercache>;
  /** fetch data from the table: "pg_stat_statements" */
  pg_stat_statements: Array<Pg_Stat_Statements>;
  /** fetch aggregated fields from the table: "pg_stat_statements" */
  pg_stat_statements_aggregate: Pg_Stat_Statements_Aggregate;
  /** fetch data from the table: "pg_stat_statements_info" */
  pg_stat_statements_info: Array<Pg_Stat_Statements_Info>;
  /** fetch aggregated fields from the table: "pg_stat_statements_info" */
  pg_stat_statements_info_aggregate: Pg_Stat_Statements_Info_Aggregate;
  /** fetch data from the table in a streaming manner: "pg_stat_statements_info" */
  pg_stat_statements_info_stream: Array<Pg_Stat_Statements_Info>;
  /** fetch data from the table in a streaming manner: "pg_stat_statements" */
  pg_stat_statements_stream: Array<Pg_Stat_Statements>;
  /** fetch data from the table: "resources" */
  resources: Array<Resources>;
  /** fetch aggregated fields from the table: "resources" */
  resources_aggregate: Resources_Aggregate;
  /** fetch data from the table: "resources" using primary key columns */
  resources_by_pk?: Maybe<Resources>;
  /** fetch data from the table in a streaming manner: "resources" */
  resources_stream: Array<Resources>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "roles_scopes" */
  roles_scopes: Array<Roles_Scopes>;
  /** fetch aggregated fields from the table: "roles_scopes" */
  roles_scopes_aggregate: Roles_Scopes_Aggregate;
  /** fetch data from the table: "roles_scopes" using primary key columns */
  roles_scopes_by_pk?: Maybe<Roles_Scopes>;
  /** fetch data from the table in a streaming manner: "roles_scopes" */
  roles_scopes_stream: Array<Roles_Scopes>;
  /** fetch data from the table in a streaming manner: "roles" */
  roles_stream: Array<Roles>;
  /** fetch data from the table: "scopes" */
  scopes: Array<Scopes>;
  /** fetch aggregated fields from the table: "scopes" */
  scopes_aggregate: Scopes_Aggregate;
  /** fetch data from the table: "scopes" using primary key columns */
  scopes_by_pk?: Maybe<Scopes>;
  /** fetch data from the table in a streaming manner: "scopes" */
  scopes_stream: Array<Scopes>;
  /** fetch data from the table: "sentinel_activities" */
  sentinel_activities: Array<Sentinel_Activities>;
  /** fetch aggregated fields from the table: "sentinel_activities" */
  sentinel_activities_aggregate: Sentinel_Activities_Aggregate;
  /** fetch data from the table: "sentinel_activities" using primary key columns */
  sentinel_activities_by_pk?: Maybe<Sentinel_Activities>;
  /** fetch data from the table in a streaming manner: "sentinel_activities" */
  sentinel_activities_stream: Array<Sentinel_Activities>;
  /** fetch data from the table: "service_logs" */
  service_logs: Array<Service_Logs>;
  /** fetch aggregated fields from the table: "service_logs" */
  service_logs_aggregate: Service_Logs_Aggregate;
  /** fetch data from the table: "service_logs" using primary key columns */
  service_logs_by_pk?: Maybe<Service_Logs>;
  /** fetch data from the table in a streaming manner: "service_logs" */
  service_logs_stream: Array<Service_Logs>;
  /** fetch data from the table: "sign_in_experiences" */
  sign_in_experiences: Array<Sign_In_Experiences>;
  /** fetch aggregated fields from the table: "sign_in_experiences" */
  sign_in_experiences_aggregate: Sign_In_Experiences_Aggregate;
  /** fetch data from the table: "sign_in_experiences" using primary key columns */
  sign_in_experiences_by_pk?: Maybe<Sign_In_Experiences>;
  /** fetch data from the table in a streaming manner: "sign_in_experiences" */
  sign_in_experiences_stream: Array<Sign_In_Experiences>;
  /** fetch data from the table: "sms_codes" */
  sms_codes: Array<Sms_Codes>;
  /** fetch aggregated fields from the table: "sms_codes" */
  sms_codes_aggregate: Sms_Codes_Aggregate;
  /** fetch data from the table: "sms_codes" using primary key columns */
  sms_codes_by_pk?: Maybe<Sms_Codes>;
  /** fetch data from the table in a streaming manner: "sms_codes" */
  sms_codes_stream: Array<Sms_Codes>;
  /** fetch data from the table: "sso_connectors" */
  sso_connectors: Array<Sso_Connectors>;
  /** fetch aggregated fields from the table: "sso_connectors" */
  sso_connectors_aggregate: Sso_Connectors_Aggregate;
  /** fetch data from the table: "sso_connectors" using primary key columns */
  sso_connectors_by_pk?: Maybe<Sso_Connectors>;
  /** fetch data from the table in a streaming manner: "sso_connectors" */
  sso_connectors_stream: Array<Sso_Connectors>;
  /** fetch data from the table: "systems" */
  systems: Array<Systems>;
  /** fetch aggregated fields from the table: "systems" */
  systems_aggregate: Systems_Aggregate;
  /** fetch data from the table: "systems" using primary key columns */
  systems_by_pk?: Maybe<Systems>;
  /** fetch data from the table in a streaming manner: "systems" */
  systems_stream: Array<Systems>;
  /** fetch data from the table: "tenants" */
  tenants: Array<Tenants>;
  /** fetch aggregated fields from the table: "tenants" */
  tenants_aggregate: Tenants_Aggregate;
  /** fetch data from the table: "tenants" using primary key columns */
  tenants_by_pk?: Maybe<Tenants>;
  /** fetch data from the table in a streaming manner: "tenants" */
  tenants_stream: Array<Tenants>;
  /** fetch data from the table: "user_cholesterol_standards" */
  user_cholesterol_standards: Array<User_Cholesterol_Standards>;
  /** fetch aggregated fields from the table: "user_cholesterol_standards" */
  user_cholesterol_standards_aggregate: User_Cholesterol_Standards_Aggregate;
  /** fetch data from the table: "user_cholesterol_standards" using primary key columns */
  user_cholesterol_standards_by_pk?: Maybe<User_Cholesterol_Standards>;
  /** fetch data from the table in a streaming manner: "user_cholesterol_standards" */
  user_cholesterol_standards_stream: Array<User_Cholesterol_Standards>;
  /** fetch data from the table: "user_glucose_standards" */
  user_glucose_standards: Array<User_Glucose_Standards>;
  /** fetch aggregated fields from the table: "user_glucose_standards" */
  user_glucose_standards_aggregate: User_Glucose_Standards_Aggregate;
  /** fetch data from the table: "user_glucose_standards" using primary key columns */
  user_glucose_standards_by_pk?: Maybe<User_Glucose_Standards>;
  /** fetch data from the table in a streaming manner: "user_glucose_standards" */
  user_glucose_standards_stream: Array<User_Glucose_Standards>;
  /** fetch data from the table: "user_sso_identities" */
  user_sso_identities: Array<User_Sso_Identities>;
  /** fetch aggregated fields from the table: "user_sso_identities" */
  user_sso_identities_aggregate: User_Sso_Identities_Aggregate;
  /** fetch data from the table: "user_sso_identities" using primary key columns */
  user_sso_identities_by_pk?: Maybe<User_Sso_Identities>;
  /** fetch data from the table in a streaming manner: "user_sso_identities" */
  user_sso_identities_stream: Array<User_Sso_Identities>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  users_roles: Array<Users_Roles>;
  /** An aggregate relationship */
  users_roles_aggregate: Users_Roles_Aggregate;
  /** fetch data from the table: "users_roles" using primary key columns */
  users_roles_by_pk?: Maybe<Users_Roles>;
  /** fetch data from the table in a streaming manner: "users_roles" */
  users_roles_stream: Array<Users_Roles>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "verification_statuses" */
  verification_statuses: Array<Verification_Statuses>;
  /** fetch aggregated fields from the table: "verification_statuses" */
  verification_statuses_aggregate: Verification_Statuses_Aggregate;
  /** fetch data from the table: "verification_statuses" using primary key columns */
  verification_statuses_by_pk?: Maybe<Verification_Statuses>;
  /** fetch data from the table in a streaming manner: "verification_statuses" */
  verification_statuses_stream: Array<Verification_Statuses>;
};


export type Subscription_RootAdsArgs = {
  distinct_on?: InputMaybe<Array<Ads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ads_Order_By>>;
  where?: InputMaybe<Ads_Bool_Exp>;
};


export type Subscription_RootAds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ads_Order_By>>;
  where?: InputMaybe<Ads_Bool_Exp>;
};


export type Subscription_RootAds_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAds_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ads_Stream_Cursor_Input>>;
  where?: InputMaybe<Ads_Bool_Exp>;
};


export type Subscription_RootApplication_Sign_In_ExperiencesArgs = {
  distinct_on?: InputMaybe<Array<Application_Sign_In_Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_Sign_In_Experiences_Order_By>>;
  where?: InputMaybe<Application_Sign_In_Experiences_Bool_Exp>;
};


export type Subscription_RootApplication_Sign_In_Experiences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Application_Sign_In_Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_Sign_In_Experiences_Order_By>>;
  where?: InputMaybe<Application_Sign_In_Experiences_Bool_Exp>;
};


export type Subscription_RootApplication_Sign_In_Experiences_By_PkArgs = {
  application_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};


export type Subscription_RootApplication_Sign_In_Experiences_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Application_Sign_In_Experiences_Stream_Cursor_Input>>;
  where?: InputMaybe<Application_Sign_In_Experiences_Bool_Exp>;
};


export type Subscription_RootApplication_User_Consent_Organization_ScopesArgs = {
  distinct_on?: InputMaybe<Array<Application_User_Consent_Organization_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_User_Consent_Organization_Scopes_Order_By>>;
  where?: InputMaybe<Application_User_Consent_Organization_Scopes_Bool_Exp>;
};


export type Subscription_RootApplication_User_Consent_Organization_Scopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Application_User_Consent_Organization_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_User_Consent_Organization_Scopes_Order_By>>;
  where?: InputMaybe<Application_User_Consent_Organization_Scopes_Bool_Exp>;
};


export type Subscription_RootApplication_User_Consent_Organization_Scopes_By_PkArgs = {
  application_id: Scalars['String']['input'];
  organization_scope_id: Scalars['String']['input'];
};


export type Subscription_RootApplication_User_Consent_Organization_Scopes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Application_User_Consent_Organization_Scopes_Stream_Cursor_Input>>;
  where?: InputMaybe<Application_User_Consent_Organization_Scopes_Bool_Exp>;
};


export type Subscription_RootApplication_User_Consent_OrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Application_User_Consent_Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_User_Consent_Organizations_Order_By>>;
  where?: InputMaybe<Application_User_Consent_Organizations_Bool_Exp>;
};


export type Subscription_RootApplication_User_Consent_Organizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Application_User_Consent_Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_User_Consent_Organizations_Order_By>>;
  where?: InputMaybe<Application_User_Consent_Organizations_Bool_Exp>;
};


export type Subscription_RootApplication_User_Consent_Organizations_By_PkArgs = {
  application_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type Subscription_RootApplication_User_Consent_Organizations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Application_User_Consent_Organizations_Stream_Cursor_Input>>;
  where?: InputMaybe<Application_User_Consent_Organizations_Bool_Exp>;
};


export type Subscription_RootApplication_User_Consent_Resource_ScopesArgs = {
  distinct_on?: InputMaybe<Array<Application_User_Consent_Resource_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_User_Consent_Resource_Scopes_Order_By>>;
  where?: InputMaybe<Application_User_Consent_Resource_Scopes_Bool_Exp>;
};


export type Subscription_RootApplication_User_Consent_Resource_Scopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Application_User_Consent_Resource_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_User_Consent_Resource_Scopes_Order_By>>;
  where?: InputMaybe<Application_User_Consent_Resource_Scopes_Bool_Exp>;
};


export type Subscription_RootApplication_User_Consent_Resource_Scopes_By_PkArgs = {
  application_id: Scalars['String']['input'];
  scope_id: Scalars['String']['input'];
};


export type Subscription_RootApplication_User_Consent_Resource_Scopes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Application_User_Consent_Resource_Scopes_Stream_Cursor_Input>>;
  where?: InputMaybe<Application_User_Consent_Resource_Scopes_Bool_Exp>;
};


export type Subscription_RootApplication_User_Consent_User_ScopesArgs = {
  distinct_on?: InputMaybe<Array<Application_User_Consent_User_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_User_Consent_User_Scopes_Order_By>>;
  where?: InputMaybe<Application_User_Consent_User_Scopes_Bool_Exp>;
};


export type Subscription_RootApplication_User_Consent_User_Scopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Application_User_Consent_User_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_User_Consent_User_Scopes_Order_By>>;
  where?: InputMaybe<Application_User_Consent_User_Scopes_Bool_Exp>;
};


export type Subscription_RootApplication_User_Consent_User_Scopes_By_PkArgs = {
  application_id: Scalars['String']['input'];
  user_scope: Scalars['String']['input'];
};


export type Subscription_RootApplication_User_Consent_User_Scopes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Application_User_Consent_User_Scopes_Stream_Cursor_Input>>;
  where?: InputMaybe<Application_User_Consent_User_Scopes_Bool_Exp>;
};


export type Subscription_RootApplicationsArgs = {
  distinct_on?: InputMaybe<Array<Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Order_By>>;
  where?: InputMaybe<Applications_Bool_Exp>;
};


export type Subscription_RootApplications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Order_By>>;
  where?: InputMaybe<Applications_Bool_Exp>;
};


export type Subscription_RootApplications_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootApplications_RolesArgs = {
  distinct_on?: InputMaybe<Array<Applications_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Roles_Order_By>>;
  where?: InputMaybe<Applications_Roles_Bool_Exp>;
};


export type Subscription_RootApplications_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Applications_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Roles_Order_By>>;
  where?: InputMaybe<Applications_Roles_Bool_Exp>;
};


export type Subscription_RootApplications_Roles_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootApplications_Roles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Applications_Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<Applications_Roles_Bool_Exp>;
};


export type Subscription_RootApplications_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Applications_Stream_Cursor_Input>>;
  where?: InputMaybe<Applications_Bool_Exp>;
};


export type Subscription_RootCheck_In_SettingsArgs = {
  distinct_on?: InputMaybe<Array<Check_In_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Check_In_Settings_Order_By>>;
  where?: InputMaybe<Check_In_Settings_Bool_Exp>;
};


export type Subscription_RootCheck_In_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Check_In_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Check_In_Settings_Order_By>>;
  where?: InputMaybe<Check_In_Settings_Bool_Exp>;
};


export type Subscription_RootCheck_In_Settings_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCheck_In_Settings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Check_In_Settings_Stream_Cursor_Input>>;
  where?: InputMaybe<Check_In_Settings_Bool_Exp>;
};


export type Subscription_RootCheck_InsArgs = {
  distinct_on?: InputMaybe<Array<Check_Ins_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Check_Ins_Order_By>>;
  where?: InputMaybe<Check_Ins_Bool_Exp>;
};


export type Subscription_RootCheck_Ins_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Check_Ins_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Check_Ins_Order_By>>;
  where?: InputMaybe<Check_Ins_Bool_Exp>;
};


export type Subscription_RootCheck_Ins_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCheck_Ins_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Check_Ins_Stream_Cursor_Input>>;
  where?: InputMaybe<Check_Ins_Bool_Exp>;
};


export type Subscription_RootCholesterol_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Cholesterol_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cholesterol_Records_Order_By>>;
  where?: InputMaybe<Cholesterol_Records_Bool_Exp>;
};


export type Subscription_RootCholesterol_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cholesterol_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cholesterol_Records_Order_By>>;
  where?: InputMaybe<Cholesterol_Records_Bool_Exp>;
};


export type Subscription_RootCholesterol_Records_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCholesterol_Records_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Cholesterol_Records_Stream_Cursor_Input>>;
  where?: InputMaybe<Cholesterol_Records_Bool_Exp>;
};


export type Subscription_RootCholesterol_StandardsArgs = {
  distinct_on?: InputMaybe<Array<Cholesterol_Standards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cholesterol_Standards_Order_By>>;
  where?: InputMaybe<Cholesterol_Standards_Bool_Exp>;
};


export type Subscription_RootCholesterol_Standards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cholesterol_Standards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cholesterol_Standards_Order_By>>;
  where?: InputMaybe<Cholesterol_Standards_Bool_Exp>;
};


export type Subscription_RootCholesterol_Standards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCholesterol_Standards_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Cholesterol_Standards_Stream_Cursor_Input>>;
  where?: InputMaybe<Cholesterol_Standards_Bool_Exp>;
};


export type Subscription_RootConnectorsArgs = {
  distinct_on?: InputMaybe<Array<Connectors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Connectors_Order_By>>;
  where?: InputMaybe<Connectors_Bool_Exp>;
};


export type Subscription_RootConnectors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Connectors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Connectors_Order_By>>;
  where?: InputMaybe<Connectors_Bool_Exp>;
};


export type Subscription_RootConnectors_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootConnectors_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Connectors_Stream_Cursor_Input>>;
  where?: InputMaybe<Connectors_Bool_Exp>;
};


export type Subscription_RootCustom_PhrasesArgs = {
  distinct_on?: InputMaybe<Array<Custom_Phrases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Phrases_Order_By>>;
  where?: InputMaybe<Custom_Phrases_Bool_Exp>;
};


export type Subscription_RootCustom_Phrases_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Phrases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Phrases_Order_By>>;
  where?: InputMaybe<Custom_Phrases_Bool_Exp>;
};


export type Subscription_RootCustom_Phrases_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootCustom_Phrases_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Custom_Phrases_Stream_Cursor_Input>>;
  where?: InputMaybe<Custom_Phrases_Bool_Exp>;
};


export type Subscription_RootDaily_Active_UsersArgs = {
  distinct_on?: InputMaybe<Array<Daily_Active_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Daily_Active_Users_Order_By>>;
  where?: InputMaybe<Daily_Active_Users_Bool_Exp>;
};


export type Subscription_RootDaily_Active_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Daily_Active_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Daily_Active_Users_Order_By>>;
  where?: InputMaybe<Daily_Active_Users_Bool_Exp>;
};


export type Subscription_RootDaily_Active_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootDaily_Active_Users_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Daily_Active_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Daily_Active_Users_Bool_Exp>;
};


export type Subscription_RootDaily_Token_UsageArgs = {
  distinct_on?: InputMaybe<Array<Daily_Token_Usage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Daily_Token_Usage_Order_By>>;
  where?: InputMaybe<Daily_Token_Usage_Bool_Exp>;
};


export type Subscription_RootDaily_Token_Usage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Daily_Token_Usage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Daily_Token_Usage_Order_By>>;
  where?: InputMaybe<Daily_Token_Usage_Bool_Exp>;
};


export type Subscription_RootDaily_Token_Usage_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootDaily_Token_Usage_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Daily_Token_Usage_Stream_Cursor_Input>>;
  where?: InputMaybe<Daily_Token_Usage_Bool_Exp>;
};


export type Subscription_RootDomainsArgs = {
  distinct_on?: InputMaybe<Array<Domains_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Domains_Order_By>>;
  where?: InputMaybe<Domains_Bool_Exp>;
};


export type Subscription_RootDomains_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Domains_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Domains_Order_By>>;
  where?: InputMaybe<Domains_Bool_Exp>;
};


export type Subscription_RootDomains_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootDomains_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Domains_Stream_Cursor_Input>>;
  where?: InputMaybe<Domains_Bool_Exp>;
};


export type Subscription_RootGlucose_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Glucose_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Glucose_Records_Order_By>>;
  where?: InputMaybe<Glucose_Records_Bool_Exp>;
};


export type Subscription_RootGlucose_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Glucose_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Glucose_Records_Order_By>>;
  where?: InputMaybe<Glucose_Records_Bool_Exp>;
};


export type Subscription_RootGlucose_Records_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGlucose_Records_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Glucose_Records_Stream_Cursor_Input>>;
  where?: InputMaybe<Glucose_Records_Bool_Exp>;
};


export type Subscription_RootGlucose_StandardsArgs = {
  distinct_on?: InputMaybe<Array<Glucose_Standards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Glucose_Standards_Order_By>>;
  where?: InputMaybe<Glucose_Standards_Bool_Exp>;
};


export type Subscription_RootGlucose_Standards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Glucose_Standards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Glucose_Standards_Order_By>>;
  where?: InputMaybe<Glucose_Standards_Bool_Exp>;
};


export type Subscription_RootGlucose_Standards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGlucose_Standards_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Glucose_Standards_Stream_Cursor_Input>>;
  where?: InputMaybe<Glucose_Standards_Bool_Exp>;
};


export type Subscription_RootHooksArgs = {
  distinct_on?: InputMaybe<Array<Hooks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hooks_Order_By>>;
  where?: InputMaybe<Hooks_Bool_Exp>;
};


export type Subscription_RootHooks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hooks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hooks_Order_By>>;
  where?: InputMaybe<Hooks_Bool_Exp>;
};


export type Subscription_RootHooks_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootHooks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Hooks_Stream_Cursor_Input>>;
  where?: InputMaybe<Hooks_Bool_Exp>;
};


export type Subscription_RootLab_Report_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Lab_Report_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lab_Report_Records_Order_By>>;
  where?: InputMaybe<Lab_Report_Records_Bool_Exp>;
};


export type Subscription_RootLab_Report_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lab_Report_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lab_Report_Records_Order_By>>;
  where?: InputMaybe<Lab_Report_Records_Bool_Exp>;
};


export type Subscription_RootLab_Report_Records_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLab_Report_Records_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Lab_Report_Records_Stream_Cursor_Input>>;
  where?: InputMaybe<Lab_Report_Records_Bool_Exp>;
};


export type Subscription_RootLogsArgs = {
  distinct_on?: InputMaybe<Array<Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logs_Order_By>>;
  where?: InputMaybe<Logs_Bool_Exp>;
};


export type Subscription_RootLogs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logs_Order_By>>;
  where?: InputMaybe<Logs_Bool_Exp>;
};


export type Subscription_RootLogs_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootLogs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Logs_Stream_Cursor_Input>>;
  where?: InputMaybe<Logs_Bool_Exp>;
};


export type Subscription_RootLogto_ConfigsArgs = {
  distinct_on?: InputMaybe<Array<Logto_Configs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logto_Configs_Order_By>>;
  where?: InputMaybe<Logto_Configs_Bool_Exp>;
};


export type Subscription_RootLogto_Configs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Logto_Configs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logto_Configs_Order_By>>;
  where?: InputMaybe<Logto_Configs_Bool_Exp>;
};


export type Subscription_RootLogto_Configs_By_PkArgs = {
  key: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};


export type Subscription_RootLogto_Configs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Logto_Configs_Stream_Cursor_Input>>;
  where?: InputMaybe<Logto_Configs_Bool_Exp>;
};


export type Subscription_RootMedical_Examination_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Medical_Examination_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Medical_Examination_Records_Order_By>>;
  where?: InputMaybe<Medical_Examination_Records_Bool_Exp>;
};


export type Subscription_RootMedical_Examination_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Medical_Examination_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Medical_Examination_Records_Order_By>>;
  where?: InputMaybe<Medical_Examination_Records_Bool_Exp>;
};


export type Subscription_RootMedical_Examination_Records_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMedical_Examination_Records_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Medical_Examination_Records_Stream_Cursor_Input>>;
  where?: InputMaybe<Medical_Examination_Records_Bool_Exp>;
};


export type Subscription_RootMedication_RemindersArgs = {
  distinct_on?: InputMaybe<Array<Medication_Reminders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Medication_Reminders_Order_By>>;
  where?: InputMaybe<Medication_Reminders_Bool_Exp>;
};


export type Subscription_RootMedication_Reminders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Medication_Reminders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Medication_Reminders_Order_By>>;
  where?: InputMaybe<Medication_Reminders_Bool_Exp>;
};


export type Subscription_RootMedication_Reminders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMedication_Reminders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Medication_Reminders_Stream_Cursor_Input>>;
  where?: InputMaybe<Medication_Reminders_Bool_Exp>;
};


export type Subscription_RootOidc_Model_InstancesArgs = {
  distinct_on?: InputMaybe<Array<Oidc_Model_Instances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Oidc_Model_Instances_Order_By>>;
  where?: InputMaybe<Oidc_Model_Instances_Bool_Exp>;
};


export type Subscription_RootOidc_Model_Instances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Oidc_Model_Instances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Oidc_Model_Instances_Order_By>>;
  where?: InputMaybe<Oidc_Model_Instances_Bool_Exp>;
};


export type Subscription_RootOidc_Model_Instances_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootOidc_Model_Instances_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Oidc_Model_Instances_Stream_Cursor_Input>>;
  where?: InputMaybe<Oidc_Model_Instances_Bool_Exp>;
};


export type Subscription_RootOrganization_Invitation_Role_RelationsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Invitation_Role_Relations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Invitation_Role_Relations_Order_By>>;
  where?: InputMaybe<Organization_Invitation_Role_Relations_Bool_Exp>;
};


export type Subscription_RootOrganization_Invitation_Role_Relations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Invitation_Role_Relations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Invitation_Role_Relations_Order_By>>;
  where?: InputMaybe<Organization_Invitation_Role_Relations_Bool_Exp>;
};


export type Subscription_RootOrganization_Invitation_Role_Relations_By_PkArgs = {
  organization_invitation_id: Scalars['String']['input'];
  organization_role_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};


export type Subscription_RootOrganization_Invitation_Role_Relations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Invitation_Role_Relations_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Invitation_Role_Relations_Bool_Exp>;
};


export type Subscription_RootOrganization_InvitationsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Invitations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Invitations_Order_By>>;
  where?: InputMaybe<Organization_Invitations_Bool_Exp>;
};


export type Subscription_RootOrganization_Invitations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Invitations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Invitations_Order_By>>;
  where?: InputMaybe<Organization_Invitations_Bool_Exp>;
};


export type Subscription_RootOrganization_Invitations_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootOrganization_Invitations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Invitations_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Invitations_Bool_Exp>;
};


export type Subscription_RootOrganization_Role_Scope_RelationsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Role_Scope_Relations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Role_Scope_Relations_Order_By>>;
  where?: InputMaybe<Organization_Role_Scope_Relations_Bool_Exp>;
};


export type Subscription_RootOrganization_Role_Scope_Relations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Role_Scope_Relations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Role_Scope_Relations_Order_By>>;
  where?: InputMaybe<Organization_Role_Scope_Relations_Bool_Exp>;
};


export type Subscription_RootOrganization_Role_Scope_Relations_By_PkArgs = {
  organization_role_id: Scalars['String']['input'];
  organization_scope_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};


export type Subscription_RootOrganization_Role_Scope_Relations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Role_Scope_Relations_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Role_Scope_Relations_Bool_Exp>;
};


export type Subscription_RootOrganization_Role_User_RelationsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Role_User_Relations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Role_User_Relations_Order_By>>;
  where?: InputMaybe<Organization_Role_User_Relations_Bool_Exp>;
};


export type Subscription_RootOrganization_Role_User_Relations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Role_User_Relations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Role_User_Relations_Order_By>>;
  where?: InputMaybe<Organization_Role_User_Relations_Bool_Exp>;
};


export type Subscription_RootOrganization_Role_User_Relations_By_PkArgs = {
  organization_id: Scalars['String']['input'];
  organization_role_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type Subscription_RootOrganization_Role_User_Relations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Role_User_Relations_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Role_User_Relations_Bool_Exp>;
};


export type Subscription_RootOrganization_RolesArgs = {
  distinct_on?: InputMaybe<Array<Organization_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Roles_Order_By>>;
  where?: InputMaybe<Organization_Roles_Bool_Exp>;
};


export type Subscription_RootOrganization_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Roles_Order_By>>;
  where?: InputMaybe<Organization_Roles_Bool_Exp>;
};


export type Subscription_RootOrganization_Roles_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootOrganization_Roles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Roles_Bool_Exp>;
};


export type Subscription_RootOrganization_ScopesArgs = {
  distinct_on?: InputMaybe<Array<Organization_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Scopes_Order_By>>;
  where?: InputMaybe<Organization_Scopes_Bool_Exp>;
};


export type Subscription_RootOrganization_Scopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Scopes_Order_By>>;
  where?: InputMaybe<Organization_Scopes_Bool_Exp>;
};


export type Subscription_RootOrganization_Scopes_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootOrganization_Scopes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Scopes_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Scopes_Bool_Exp>;
};


export type Subscription_RootOrganization_User_RelationsArgs = {
  distinct_on?: InputMaybe<Array<Organization_User_Relations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_User_Relations_Order_By>>;
  where?: InputMaybe<Organization_User_Relations_Bool_Exp>;
};


export type Subscription_RootOrganization_User_Relations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_User_Relations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_User_Relations_Order_By>>;
  where?: InputMaybe<Organization_User_Relations_Bool_Exp>;
};


export type Subscription_RootOrganization_User_Relations_By_PkArgs = {
  organization_id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type Subscription_RootOrganization_User_Relations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_User_Relations_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_User_Relations_Bool_Exp>;
};


export type Subscription_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizations_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootOrganizations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organizations_Stream_Cursor_Input>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootPasscodesArgs = {
  distinct_on?: InputMaybe<Array<Passcodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Passcodes_Order_By>>;
  where?: InputMaybe<Passcodes_Bool_Exp>;
};


export type Subscription_RootPasscodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passcodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Passcodes_Order_By>>;
  where?: InputMaybe<Passcodes_Bool_Exp>;
};


export type Subscription_RootPasscodes_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootPasscodes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Passcodes_Stream_Cursor_Input>>;
  where?: InputMaybe<Passcodes_Bool_Exp>;
};


export type Subscription_RootPg_BuffercacheArgs = {
  distinct_on?: InputMaybe<Array<Pg_Buffercache_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pg_Buffercache_Order_By>>;
  where?: InputMaybe<Pg_Buffercache_Bool_Exp>;
};


export type Subscription_RootPg_Buffercache_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pg_Buffercache_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pg_Buffercache_Order_By>>;
  where?: InputMaybe<Pg_Buffercache_Bool_Exp>;
};


export type Subscription_RootPg_Buffercache_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pg_Buffercache_Stream_Cursor_Input>>;
  where?: InputMaybe<Pg_Buffercache_Bool_Exp>;
};


export type Subscription_RootPg_Stat_StatementsArgs = {
  distinct_on?: InputMaybe<Array<Pg_Stat_Statements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pg_Stat_Statements_Order_By>>;
  where?: InputMaybe<Pg_Stat_Statements_Bool_Exp>;
};


export type Subscription_RootPg_Stat_Statements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pg_Stat_Statements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pg_Stat_Statements_Order_By>>;
  where?: InputMaybe<Pg_Stat_Statements_Bool_Exp>;
};


export type Subscription_RootPg_Stat_Statements_InfoArgs = {
  distinct_on?: InputMaybe<Array<Pg_Stat_Statements_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pg_Stat_Statements_Info_Order_By>>;
  where?: InputMaybe<Pg_Stat_Statements_Info_Bool_Exp>;
};


export type Subscription_RootPg_Stat_Statements_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pg_Stat_Statements_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pg_Stat_Statements_Info_Order_By>>;
  where?: InputMaybe<Pg_Stat_Statements_Info_Bool_Exp>;
};


export type Subscription_RootPg_Stat_Statements_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pg_Stat_Statements_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Pg_Stat_Statements_Info_Bool_Exp>;
};


export type Subscription_RootPg_Stat_Statements_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pg_Stat_Statements_Stream_Cursor_Input>>;
  where?: InputMaybe<Pg_Stat_Statements_Bool_Exp>;
};


export type Subscription_RootResourcesArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Subscription_RootResources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Subscription_RootResources_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootResources_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Resources_Stream_Cursor_Input>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Subscription_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootRoles_ScopesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Scopes_Order_By>>;
  where?: InputMaybe<Roles_Scopes_Bool_Exp>;
};


export type Subscription_RootRoles_Scopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Scopes_Order_By>>;
  where?: InputMaybe<Roles_Scopes_Bool_Exp>;
};


export type Subscription_RootRoles_Scopes_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootRoles_Scopes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Roles_Scopes_Stream_Cursor_Input>>;
  where?: InputMaybe<Roles_Scopes_Bool_Exp>;
};


export type Subscription_RootRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootScopesArgs = {
  distinct_on?: InputMaybe<Array<Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scopes_Order_By>>;
  where?: InputMaybe<Scopes_Bool_Exp>;
};


export type Subscription_RootScopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scopes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scopes_Order_By>>;
  where?: InputMaybe<Scopes_Bool_Exp>;
};


export type Subscription_RootScopes_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootScopes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Scopes_Stream_Cursor_Input>>;
  where?: InputMaybe<Scopes_Bool_Exp>;
};


export type Subscription_RootSentinel_ActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Sentinel_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sentinel_Activities_Order_By>>;
  where?: InputMaybe<Sentinel_Activities_Bool_Exp>;
};


export type Subscription_RootSentinel_Activities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sentinel_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sentinel_Activities_Order_By>>;
  where?: InputMaybe<Sentinel_Activities_Bool_Exp>;
};


export type Subscription_RootSentinel_Activities_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootSentinel_Activities_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Sentinel_Activities_Stream_Cursor_Input>>;
  where?: InputMaybe<Sentinel_Activities_Bool_Exp>;
};


export type Subscription_RootService_LogsArgs = {
  distinct_on?: InputMaybe<Array<Service_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Logs_Order_By>>;
  where?: InputMaybe<Service_Logs_Bool_Exp>;
};


export type Subscription_RootService_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Logs_Order_By>>;
  where?: InputMaybe<Service_Logs_Bool_Exp>;
};


export type Subscription_RootService_Logs_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootService_Logs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Service_Logs_Stream_Cursor_Input>>;
  where?: InputMaybe<Service_Logs_Bool_Exp>;
};


export type Subscription_RootSign_In_ExperiencesArgs = {
  distinct_on?: InputMaybe<Array<Sign_In_Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sign_In_Experiences_Order_By>>;
  where?: InputMaybe<Sign_In_Experiences_Bool_Exp>;
};


export type Subscription_RootSign_In_Experiences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sign_In_Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sign_In_Experiences_Order_By>>;
  where?: InputMaybe<Sign_In_Experiences_Bool_Exp>;
};


export type Subscription_RootSign_In_Experiences_By_PkArgs = {
  id: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};


export type Subscription_RootSign_In_Experiences_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Sign_In_Experiences_Stream_Cursor_Input>>;
  where?: InputMaybe<Sign_In_Experiences_Bool_Exp>;
};


export type Subscription_RootSms_CodesArgs = {
  distinct_on?: InputMaybe<Array<Sms_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sms_Codes_Order_By>>;
  where?: InputMaybe<Sms_Codes_Bool_Exp>;
};


export type Subscription_RootSms_Codes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sms_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sms_Codes_Order_By>>;
  where?: InputMaybe<Sms_Codes_Bool_Exp>;
};


export type Subscription_RootSms_Codes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSms_Codes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Sms_Codes_Stream_Cursor_Input>>;
  where?: InputMaybe<Sms_Codes_Bool_Exp>;
};


export type Subscription_RootSso_ConnectorsArgs = {
  distinct_on?: InputMaybe<Array<Sso_Connectors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sso_Connectors_Order_By>>;
  where?: InputMaybe<Sso_Connectors_Bool_Exp>;
};


export type Subscription_RootSso_Connectors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sso_Connectors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sso_Connectors_Order_By>>;
  where?: InputMaybe<Sso_Connectors_Bool_Exp>;
};


export type Subscription_RootSso_Connectors_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootSso_Connectors_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Sso_Connectors_Stream_Cursor_Input>>;
  where?: InputMaybe<Sso_Connectors_Bool_Exp>;
};


export type Subscription_RootSystemsArgs = {
  distinct_on?: InputMaybe<Array<Systems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Systems_Order_By>>;
  where?: InputMaybe<Systems_Bool_Exp>;
};


export type Subscription_RootSystems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Systems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Systems_Order_By>>;
  where?: InputMaybe<Systems_Bool_Exp>;
};


export type Subscription_RootSystems_By_PkArgs = {
  key: Scalars['String']['input'];
};


export type Subscription_RootSystems_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Systems_Stream_Cursor_Input>>;
  where?: InputMaybe<Systems_Bool_Exp>;
};


export type Subscription_RootTenantsArgs = {
  distinct_on?: InputMaybe<Array<Tenants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenants_Order_By>>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};


export type Subscription_RootTenants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenants_Order_By>>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};


export type Subscription_RootTenants_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootTenants_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tenants_Stream_Cursor_Input>>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};


export type Subscription_RootUser_Cholesterol_StandardsArgs = {
  distinct_on?: InputMaybe<Array<User_Cholesterol_Standards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Cholesterol_Standards_Order_By>>;
  where?: InputMaybe<User_Cholesterol_Standards_Bool_Exp>;
};


export type Subscription_RootUser_Cholesterol_Standards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Cholesterol_Standards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Cholesterol_Standards_Order_By>>;
  where?: InputMaybe<User_Cholesterol_Standards_Bool_Exp>;
};


export type Subscription_RootUser_Cholesterol_Standards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Cholesterol_Standards_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Cholesterol_Standards_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Cholesterol_Standards_Bool_Exp>;
};


export type Subscription_RootUser_Glucose_StandardsArgs = {
  distinct_on?: InputMaybe<Array<User_Glucose_Standards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Glucose_Standards_Order_By>>;
  where?: InputMaybe<User_Glucose_Standards_Bool_Exp>;
};


export type Subscription_RootUser_Glucose_Standards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Glucose_Standards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Glucose_Standards_Order_By>>;
  where?: InputMaybe<User_Glucose_Standards_Bool_Exp>;
};


export type Subscription_RootUser_Glucose_Standards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Glucose_Standards_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Glucose_Standards_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Glucose_Standards_Bool_Exp>;
};


export type Subscription_RootUser_Sso_IdentitiesArgs = {
  distinct_on?: InputMaybe<Array<User_Sso_Identities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Sso_Identities_Order_By>>;
  where?: InputMaybe<User_Sso_Identities_Bool_Exp>;
};


export type Subscription_RootUser_Sso_Identities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Sso_Identities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Sso_Identities_Order_By>>;
  where?: InputMaybe<User_Sso_Identities_Bool_Exp>;
};


export type Subscription_RootUser_Sso_Identities_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUser_Sso_Identities_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Sso_Identities_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Sso_Identities_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUsers_RolesArgs = {
  distinct_on?: InputMaybe<Array<Users_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Roles_Order_By>>;
  where?: InputMaybe<Users_Roles_Bool_Exp>;
};


export type Subscription_RootUsers_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Roles_Order_By>>;
  where?: InputMaybe<Users_Roles_Bool_Exp>;
};


export type Subscription_RootUsers_Roles_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUsers_Roles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Roles_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVerification_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Verification_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Statuses_Order_By>>;
  where?: InputMaybe<Verification_Statuses_Bool_Exp>;
};


export type Subscription_RootVerification_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Statuses_Order_By>>;
  where?: InputMaybe<Verification_Statuses_Bool_Exp>;
};


export type Subscription_RootVerification_Statuses_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootVerification_Statuses_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Verification_Statuses_Stream_Cursor_Input>>;
  where?: InputMaybe<Verification_Statuses_Bool_Exp>;
};

/** columns and relationships of "systems" */
export type Systems = {
  key: Scalars['String']['output'];
  value: Scalars['jsonb']['output'];
};


/** columns and relationships of "systems" */
export type SystemsValueArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "systems" */
export type Systems_Aggregate = {
  aggregate?: Maybe<Systems_Aggregate_Fields>;
  nodes: Array<Systems>;
};

/** aggregate fields of "systems" */
export type Systems_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Systems_Max_Fields>;
  min?: Maybe<Systems_Min_Fields>;
};


/** aggregate fields of "systems" */
export type Systems_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Systems_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Systems_Append_Input = {
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "systems". All fields are combined with a logical 'AND'. */
export type Systems_Bool_Exp = {
  _and?: InputMaybe<Array<Systems_Bool_Exp>>;
  _not?: InputMaybe<Systems_Bool_Exp>;
  _or?: InputMaybe<Array<Systems_Bool_Exp>>;
  key?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "systems" */
export enum Systems_Constraint {
  /** unique or primary key constraint on columns "key" */
  SystemsPkey = 'systems_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Systems_Delete_At_Path_Input = {
  value?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Systems_Delete_Elem_Input = {
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Systems_Delete_Key_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "systems" */
export type Systems_Insert_Input = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type Systems_Max_Fields = {
  key?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Systems_Min_Fields = {
  key?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "systems" */
export type Systems_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Systems>;
};

/** on_conflict condition type for table "systems" */
export type Systems_On_Conflict = {
  constraint: Systems_Constraint;
  update_columns?: Array<Systems_Update_Column>;
  where?: InputMaybe<Systems_Bool_Exp>;
};

/** Ordering options when selecting data from "systems". */
export type Systems_Order_By = {
  key?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: systems */
export type Systems_Pk_Columns_Input = {
  key: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Systems_Prepend_Input = {
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "systems" */
export enum Systems_Select_Column {
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "systems" */
export type Systems_Set_Input = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Streaming cursor of the table "systems" */
export type Systems_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Systems_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Systems_Stream_Cursor_Value_Input = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "systems" */
export enum Systems_Update_Column {
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

export type Systems_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Systems_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Systems_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Systems_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Systems_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Systems_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Systems_Set_Input>;
  /** filter the rows which have to be updated */
  where: Systems_Bool_Exp;
};

/** columns and relationships of "tenants" */
export type Tenants = {
  created_at: Scalars['timestamptz']['output'];
  db_user?: Maybe<Scalars['String']['output']>;
  db_user_password?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  is_suspended: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  tag: Scalars['String']['output'];
};

/** aggregated selection of "tenants" */
export type Tenants_Aggregate = {
  aggregate?: Maybe<Tenants_Aggregate_Fields>;
  nodes: Array<Tenants>;
};

/** aggregate fields of "tenants" */
export type Tenants_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Tenants_Max_Fields>;
  min?: Maybe<Tenants_Min_Fields>;
};


/** aggregate fields of "tenants" */
export type Tenants_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tenants_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "tenants". All fields are combined with a logical 'AND'. */
export type Tenants_Bool_Exp = {
  _and?: InputMaybe<Array<Tenants_Bool_Exp>>;
  _not?: InputMaybe<Tenants_Bool_Exp>;
  _or?: InputMaybe<Array<Tenants_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  db_user?: InputMaybe<String_Comparison_Exp>;
  db_user_password?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  is_suspended?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  tag?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tenants" */
export enum Tenants_Constraint {
  /** unique or primary key constraint on columns "db_user" */
  TenantsDbUser = 'tenants__db_user',
  /** unique or primary key constraint on columns "id" */
  TenantsPkey = 'tenants_pkey'
}

/** input type for inserting data into table "tenants" */
export type Tenants_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  db_user?: InputMaybe<Scalars['String']['input']>;
  db_user_password?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_suspended?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Tenants_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  db_user?: Maybe<Scalars['String']['output']>;
  db_user_password?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Tenants_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  db_user?: Maybe<Scalars['String']['output']>;
  db_user_password?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "tenants" */
export type Tenants_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Tenants>;
};

/** on_conflict condition type for table "tenants" */
export type Tenants_On_Conflict = {
  constraint: Tenants_Constraint;
  update_columns?: Array<Tenants_Update_Column>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};

/** Ordering options when selecting data from "tenants". */
export type Tenants_Order_By = {
  created_at?: InputMaybe<Order_By>;
  db_user?: InputMaybe<Order_By>;
  db_user_password?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_suspended?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tag?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tenants */
export type Tenants_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "tenants" */
export enum Tenants_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DbUser = 'db_user',
  /** column name */
  DbUserPassword = 'db_user_password',
  /** column name */
  Id = 'id',
  /** column name */
  IsSuspended = 'is_suspended',
  /** column name */
  Name = 'name',
  /** column name */
  Tag = 'tag'
}

/** input type for updating data in table "tenants" */
export type Tenants_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  db_user?: InputMaybe<Scalars['String']['input']>;
  db_user_password?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_suspended?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "tenants" */
export type Tenants_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tenants_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tenants_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  db_user?: InputMaybe<Scalars['String']['input']>;
  db_user_password?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_suspended?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "tenants" */
export enum Tenants_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DbUser = 'db_user',
  /** column name */
  DbUserPassword = 'db_user_password',
  /** column name */
  Id = 'id',
  /** column name */
  IsSuspended = 'is_suspended',
  /** column name */
  Name = 'name',
  /** column name */
  Tag = 'tag'
}

export type Tenants_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tenants_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tenants_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** 用户的血压标准表 */
export type User_Cholesterol_Standards = {
  diastolic_pressure: Scalars['numeric']['output'];
  id: Scalars['uuid']['output'];
  systolic_pressure: Scalars['numeric']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "user_cholesterol_standards" */
export type User_Cholesterol_Standards_Aggregate = {
  aggregate?: Maybe<User_Cholesterol_Standards_Aggregate_Fields>;
  nodes: Array<User_Cholesterol_Standards>;
};

/** aggregate fields of "user_cholesterol_standards" */
export type User_Cholesterol_Standards_Aggregate_Fields = {
  avg?: Maybe<User_Cholesterol_Standards_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Cholesterol_Standards_Max_Fields>;
  min?: Maybe<User_Cholesterol_Standards_Min_Fields>;
  stddev?: Maybe<User_Cholesterol_Standards_Stddev_Fields>;
  stddev_pop?: Maybe<User_Cholesterol_Standards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Cholesterol_Standards_Stddev_Samp_Fields>;
  sum?: Maybe<User_Cholesterol_Standards_Sum_Fields>;
  var_pop?: Maybe<User_Cholesterol_Standards_Var_Pop_Fields>;
  var_samp?: Maybe<User_Cholesterol_Standards_Var_Samp_Fields>;
  variance?: Maybe<User_Cholesterol_Standards_Variance_Fields>;
};


/** aggregate fields of "user_cholesterol_standards" */
export type User_Cholesterol_Standards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Cholesterol_Standards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Cholesterol_Standards_Avg_Fields = {
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "user_cholesterol_standards". All fields are combined with a logical 'AND'. */
export type User_Cholesterol_Standards_Bool_Exp = {
  _and?: InputMaybe<Array<User_Cholesterol_Standards_Bool_Exp>>;
  _not?: InputMaybe<User_Cholesterol_Standards_Bool_Exp>;
  _or?: InputMaybe<Array<User_Cholesterol_Standards_Bool_Exp>>;
  diastolic_pressure?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  systolic_pressure?: InputMaybe<Numeric_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_cholesterol_standards" */
export enum User_Cholesterol_Standards_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserCholesterolStandardsPkey = 'user_cholesterol_standards_pkey'
}

/** input type for incrementing numeric columns in table "user_cholesterol_standards" */
export type User_Cholesterol_Standards_Inc_Input = {
  diastolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  systolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "user_cholesterol_standards" */
export type User_Cholesterol_Standards_Insert_Input = {
  diastolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  systolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Cholesterol_Standards_Max_Fields = {
  diastolic_pressure?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  systolic_pressure?: Maybe<Scalars['numeric']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Cholesterol_Standards_Min_Fields = {
  diastolic_pressure?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  systolic_pressure?: Maybe<Scalars['numeric']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_cholesterol_standards" */
export type User_Cholesterol_Standards_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Cholesterol_Standards>;
};

/** on_conflict condition type for table "user_cholesterol_standards" */
export type User_Cholesterol_Standards_On_Conflict = {
  constraint: User_Cholesterol_Standards_Constraint;
  update_columns?: Array<User_Cholesterol_Standards_Update_Column>;
  where?: InputMaybe<User_Cholesterol_Standards_Bool_Exp>;
};

/** Ordering options when selecting data from "user_cholesterol_standards". */
export type User_Cholesterol_Standards_Order_By = {
  diastolic_pressure?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  systolic_pressure?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_cholesterol_standards */
export type User_Cholesterol_Standards_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_cholesterol_standards" */
export enum User_Cholesterol_Standards_Select_Column {
  /** column name */
  DiastolicPressure = 'diastolic_pressure',
  /** column name */
  Id = 'id',
  /** column name */
  SystolicPressure = 'systolic_pressure',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_cholesterol_standards" */
export type User_Cholesterol_Standards_Set_Input = {
  diastolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  systolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type User_Cholesterol_Standards_Stddev_Fields = {
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Cholesterol_Standards_Stddev_Pop_Fields = {
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Cholesterol_Standards_Stddev_Samp_Fields = {
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "user_cholesterol_standards" */
export type User_Cholesterol_Standards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Cholesterol_Standards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Cholesterol_Standards_Stream_Cursor_Value_Input = {
  diastolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  systolic_pressure?: InputMaybe<Scalars['numeric']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type User_Cholesterol_Standards_Sum_Fields = {
  diastolic_pressure?: Maybe<Scalars['numeric']['output']>;
  systolic_pressure?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "user_cholesterol_standards" */
export enum User_Cholesterol_Standards_Update_Column {
  /** column name */
  DiastolicPressure = 'diastolic_pressure',
  /** column name */
  Id = 'id',
  /** column name */
  SystolicPressure = 'systolic_pressure',
  /** column name */
  UserId = 'user_id'
}

export type User_Cholesterol_Standards_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Cholesterol_Standards_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Cholesterol_Standards_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Cholesterol_Standards_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Cholesterol_Standards_Var_Pop_Fields = {
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Cholesterol_Standards_Var_Samp_Fields = {
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Cholesterol_Standards_Variance_Fields = {
  diastolic_pressure?: Maybe<Scalars['Float']['output']>;
  systolic_pressure?: Maybe<Scalars['Float']['output']>;
};

/** 用户的血糖标准表 */
export type User_Glucose_Standards = {
  id: Scalars['uuid']['output'];
  max: Scalars['numeric']['output'];
  min: Scalars['numeric']['output'];
  title: Scalars['String']['output'];
  type: Scalars['Int']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "user_glucose_standards" */
export type User_Glucose_Standards_Aggregate = {
  aggregate?: Maybe<User_Glucose_Standards_Aggregate_Fields>;
  nodes: Array<User_Glucose_Standards>;
};

/** aggregate fields of "user_glucose_standards" */
export type User_Glucose_Standards_Aggregate_Fields = {
  avg?: Maybe<User_Glucose_Standards_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Glucose_Standards_Max_Fields>;
  min?: Maybe<User_Glucose_Standards_Min_Fields>;
  stddev?: Maybe<User_Glucose_Standards_Stddev_Fields>;
  stddev_pop?: Maybe<User_Glucose_Standards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Glucose_Standards_Stddev_Samp_Fields>;
  sum?: Maybe<User_Glucose_Standards_Sum_Fields>;
  var_pop?: Maybe<User_Glucose_Standards_Var_Pop_Fields>;
  var_samp?: Maybe<User_Glucose_Standards_Var_Samp_Fields>;
  variance?: Maybe<User_Glucose_Standards_Variance_Fields>;
};


/** aggregate fields of "user_glucose_standards" */
export type User_Glucose_Standards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Glucose_Standards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Glucose_Standards_Avg_Fields = {
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "user_glucose_standards". All fields are combined with a logical 'AND'. */
export type User_Glucose_Standards_Bool_Exp = {
  _and?: InputMaybe<Array<User_Glucose_Standards_Bool_Exp>>;
  _not?: InputMaybe<User_Glucose_Standards_Bool_Exp>;
  _or?: InputMaybe<Array<User_Glucose_Standards_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  max?: InputMaybe<Numeric_Comparison_Exp>;
  min?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_glucose_standards" */
export enum User_Glucose_Standards_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserGlucoseStandardsPkey = 'user_glucose_standards_pkey'
}

/** input type for incrementing numeric columns in table "user_glucose_standards" */
export type User_Glucose_Standards_Inc_Input = {
  max?: InputMaybe<Scalars['numeric']['input']>;
  min?: InputMaybe<Scalars['numeric']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_glucose_standards" */
export type User_Glucose_Standards_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  max?: InputMaybe<Scalars['numeric']['input']>;
  min?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Glucose_Standards_Max_Fields = {
  id?: Maybe<Scalars['uuid']['output']>;
  max?: Maybe<Scalars['numeric']['output']>;
  min?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Glucose_Standards_Min_Fields = {
  id?: Maybe<Scalars['uuid']['output']>;
  max?: Maybe<Scalars['numeric']['output']>;
  min?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_glucose_standards" */
export type User_Glucose_Standards_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Glucose_Standards>;
};

/** on_conflict condition type for table "user_glucose_standards" */
export type User_Glucose_Standards_On_Conflict = {
  constraint: User_Glucose_Standards_Constraint;
  update_columns?: Array<User_Glucose_Standards_Update_Column>;
  where?: InputMaybe<User_Glucose_Standards_Bool_Exp>;
};

/** Ordering options when selecting data from "user_glucose_standards". */
export type User_Glucose_Standards_Order_By = {
  id?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_By>;
  min?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_glucose_standards */
export type User_Glucose_Standards_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_glucose_standards" */
export enum User_Glucose_Standards_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Max = 'max',
  /** column name */
  Min = 'min',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_glucose_standards" */
export type User_Glucose_Standards_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  max?: InputMaybe<Scalars['numeric']['input']>;
  min?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type User_Glucose_Standards_Stddev_Fields = {
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Glucose_Standards_Stddev_Pop_Fields = {
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Glucose_Standards_Stddev_Samp_Fields = {
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "user_glucose_standards" */
export type User_Glucose_Standards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Glucose_Standards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Glucose_Standards_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  max?: InputMaybe<Scalars['numeric']['input']>;
  min?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type User_Glucose_Standards_Sum_Fields = {
  max?: Maybe<Scalars['numeric']['output']>;
  min?: Maybe<Scalars['numeric']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "user_glucose_standards" */
export enum User_Glucose_Standards_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Max = 'max',
  /** column name */
  Min = 'min',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

export type User_Glucose_Standards_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Glucose_Standards_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Glucose_Standards_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Glucose_Standards_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Glucose_Standards_Var_Pop_Fields = {
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Glucose_Standards_Var_Samp_Fields = {
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Glucose_Standards_Variance_Fields = {
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "user_sso_identities" */
export type User_Sso_Identities = {
  created_at: Scalars['timestamp']['output'];
  detail: Scalars['jsonb']['output'];
  id: Scalars['String']['output'];
  identity_id: Scalars['String']['output'];
  issuer: Scalars['String']['output'];
  sso_connector_id: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};


/** columns and relationships of "user_sso_identities" */
export type User_Sso_IdentitiesDetailArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "user_sso_identities" */
export type User_Sso_Identities_Aggregate = {
  aggregate?: Maybe<User_Sso_Identities_Aggregate_Fields>;
  nodes: Array<User_Sso_Identities>;
};

/** aggregate fields of "user_sso_identities" */
export type User_Sso_Identities_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<User_Sso_Identities_Max_Fields>;
  min?: Maybe<User_Sso_Identities_Min_Fields>;
};


/** aggregate fields of "user_sso_identities" */
export type User_Sso_Identities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Sso_Identities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Sso_Identities_Append_Input = {
  detail?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "user_sso_identities". All fields are combined with a logical 'AND'. */
export type User_Sso_Identities_Bool_Exp = {
  _and?: InputMaybe<Array<User_Sso_Identities_Bool_Exp>>;
  _not?: InputMaybe<User_Sso_Identities_Bool_Exp>;
  _or?: InputMaybe<Array<User_Sso_Identities_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  detail?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  identity_id?: InputMaybe<String_Comparison_Exp>;
  issuer?: InputMaybe<String_Comparison_Exp>;
  sso_connector_id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_sso_identities" */
export enum User_Sso_Identities_Constraint {
  /** unique or primary key constraint on columns "issuer", "identity_id", "tenant_id" */
  UserSsoIdentitiesIssuerIdentityId = 'user_sso_identities__issuer__identity_id',
  /** unique or primary key constraint on columns "id" */
  UserSsoIdentitiesPkey = 'user_sso_identities_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Sso_Identities_Delete_At_Path_Input = {
  detail?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Sso_Identities_Delete_Elem_Input = {
  detail?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Sso_Identities_Delete_Key_Input = {
  detail?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "user_sso_identities" */
export type User_Sso_Identities_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  detail?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identity_id?: InputMaybe<Scalars['String']['input']>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  sso_connector_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Sso_Identities_Max_Fields = {
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identity_id?: Maybe<Scalars['String']['output']>;
  issuer?: Maybe<Scalars['String']['output']>;
  sso_connector_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Sso_Identities_Min_Fields = {
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identity_id?: Maybe<Scalars['String']['output']>;
  issuer?: Maybe<Scalars['String']['output']>;
  sso_connector_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_sso_identities" */
export type User_Sso_Identities_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Sso_Identities>;
};

/** on_conflict condition type for table "user_sso_identities" */
export type User_Sso_Identities_On_Conflict = {
  constraint: User_Sso_Identities_Constraint;
  update_columns?: Array<User_Sso_Identities_Update_Column>;
  where?: InputMaybe<User_Sso_Identities_Bool_Exp>;
};

/** Ordering options when selecting data from "user_sso_identities". */
export type User_Sso_Identities_Order_By = {
  created_at?: InputMaybe<Order_By>;
  detail?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identity_id?: InputMaybe<Order_By>;
  issuer?: InputMaybe<Order_By>;
  sso_connector_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_sso_identities */
export type User_Sso_Identities_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Sso_Identities_Prepend_Input = {
  detail?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "user_sso_identities" */
export enum User_Sso_Identities_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  IdentityId = 'identity_id',
  /** column name */
  Issuer = 'issuer',
  /** column name */
  SsoConnectorId = 'sso_connector_id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_sso_identities" */
export type User_Sso_Identities_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  detail?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identity_id?: InputMaybe<Scalars['String']['input']>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  sso_connector_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user_sso_identities" */
export type User_Sso_Identities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Sso_Identities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Sso_Identities_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  detail?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identity_id?: InputMaybe<Scalars['String']['input']>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  sso_connector_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "user_sso_identities" */
export enum User_Sso_Identities_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  IdentityId = 'identity_id',
  /** column name */
  Issuer = 'issuer',
  /** column name */
  SsoConnectorId = 'sso_connector_id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

export type User_Sso_Identities_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<User_Sso_Identities_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<User_Sso_Identities_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<User_Sso_Identities_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<User_Sso_Identities_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<User_Sso_Identities_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Sso_Identities_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Sso_Identities_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  application_id?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  custom_data: Scalars['jsonb']['output'];
  id: Scalars['String']['output'];
  identities: Scalars['jsonb']['output'];
  is_suspended: Scalars['Boolean']['output'];
  last_sign_in_at?: Maybe<Scalars['timestamptz']['output']>;
  logto_config: Scalars['jsonb']['output'];
  mfa_verifications: Scalars['jsonb']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password_encrypted?: Maybe<Scalars['String']['output']>;
  password_encryption_method?: Maybe<Scalars['users_password_encryption_method']['output']>;
  primary_email?: Maybe<Scalars['String']['output']>;
  primary_phone?: Maybe<Scalars['String']['output']>;
  tenant_id: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  users_roles: Array<Users_Roles>;
  /** An aggregate relationship */
  users_roles_aggregate: Users_Roles_Aggregate;
};


/** columns and relationships of "users" */
export type UsersCustom_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "users" */
export type UsersIdentitiesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "users" */
export type UsersLogto_ConfigArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "users" */
export type UsersMfa_VerificationsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "users" */
export type UsersUsers_RolesArgs = {
  distinct_on?: InputMaybe<Array<Users_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Roles_Order_By>>;
  where?: InputMaybe<Users_Roles_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsers_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Roles_Order_By>>;
  where?: InputMaybe<Users_Roles_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  custom_data?: InputMaybe<Scalars['jsonb']['input']>;
  identities?: InputMaybe<Scalars['jsonb']['input']>;
  logto_config?: InputMaybe<Scalars['jsonb']['input']>;
  mfa_verifications?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  application_id?: InputMaybe<String_Comparison_Exp>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  custom_data?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  identities?: InputMaybe<Jsonb_Comparison_Exp>;
  is_suspended?: InputMaybe<Boolean_Comparison_Exp>;
  last_sign_in_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  logto_config?: InputMaybe<Jsonb_Comparison_Exp>;
  mfa_verifications?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password_encrypted?: InputMaybe<String_Comparison_Exp>;
  password_encryption_method?: InputMaybe<Users_Password_Encryption_Method_Comparison_Exp>;
  primary_email?: InputMaybe<String_Comparison_Exp>;
  primary_phone?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
  users_roles?: InputMaybe<Users_Roles_Bool_Exp>;
  users_roles_aggregate?: InputMaybe<Users_Roles_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "primary_email", "tenant_id" */
  UsersPrimaryEmail = 'users__primary_email',
  /** unique or primary key constraint on columns "primary_phone", "tenant_id" */
  UsersPrimaryPhone = 'users__primary_phone',
  /** unique or primary key constraint on columns "username", "tenant_id" */
  UsersUsername = 'users__username',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  custom_data?: InputMaybe<Array<Scalars['String']['input']>>;
  identities?: InputMaybe<Array<Scalars['String']['input']>>;
  logto_config?: InputMaybe<Array<Scalars['String']['input']>>;
  mfa_verifications?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  custom_data?: InputMaybe<Scalars['Int']['input']>;
  identities?: InputMaybe<Scalars['Int']['input']>;
  logto_config?: InputMaybe<Scalars['Int']['input']>;
  mfa_verifications?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  custom_data?: InputMaybe<Scalars['String']['input']>;
  identities?: InputMaybe<Scalars['String']['input']>;
  logto_config?: InputMaybe<Scalars['String']['input']>;
  mfa_verifications?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  custom_data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identities?: InputMaybe<Scalars['jsonb']['input']>;
  is_suspended?: InputMaybe<Scalars['Boolean']['input']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']['input']>;
  logto_config?: InputMaybe<Scalars['jsonb']['input']>;
  mfa_verifications?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password_encrypted?: InputMaybe<Scalars['String']['input']>;
  password_encryption_method?: InputMaybe<Scalars['users_password_encryption_method']['input']>;
  primary_email?: InputMaybe<Scalars['String']['input']>;
  primary_phone?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  users_roles?: InputMaybe<Users_Roles_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  application_id?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password_encrypted?: Maybe<Scalars['String']['output']>;
  password_encryption_method?: Maybe<Scalars['users_password_encryption_method']['output']>;
  primary_email?: Maybe<Scalars['String']['output']>;
  primary_phone?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  application_id?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password_encrypted?: Maybe<Scalars['String']['output']>;
  password_encryption_method?: Maybe<Scalars['users_password_encryption_method']['output']>;
  primary_email?: Maybe<Scalars['String']['output']>;
  primary_phone?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  application_id?: InputMaybe<Order_By>;
  avatar?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  custom_data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identities?: InputMaybe<Order_By>;
  is_suspended?: InputMaybe<Order_By>;
  last_sign_in_at?: InputMaybe<Order_By>;
  logto_config?: InputMaybe<Order_By>;
  mfa_verifications?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password_encrypted?: InputMaybe<Order_By>;
  password_encryption_method?: InputMaybe<Order_By>;
  primary_email?: InputMaybe<Order_By>;
  primary_phone?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
  users_roles_aggregate?: InputMaybe<Users_Roles_Aggregate_Order_By>;
};

/** Boolean expression to compare columns of type "users_password_encryption_method". All fields are combined with logical 'AND'. */
export type Users_Password_Encryption_Method_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['users_password_encryption_method']['input']>;
  _gt?: InputMaybe<Scalars['users_password_encryption_method']['input']>;
  _gte?: InputMaybe<Scalars['users_password_encryption_method']['input']>;
  _in?: InputMaybe<Array<Scalars['users_password_encryption_method']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['users_password_encryption_method']['input']>;
  _lte?: InputMaybe<Scalars['users_password_encryption_method']['input']>;
  _neq?: InputMaybe<Scalars['users_password_encryption_method']['input']>;
  _nin?: InputMaybe<Array<Scalars['users_password_encryption_method']['input']>>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  custom_data?: InputMaybe<Scalars['jsonb']['input']>;
  identities?: InputMaybe<Scalars['jsonb']['input']>;
  logto_config?: InputMaybe<Scalars['jsonb']['input']>;
  mfa_verifications?: InputMaybe<Scalars['jsonb']['input']>;
};

/** columns and relationships of "users_roles" */
export type Users_Roles = {
  id: Scalars['String']['output'];
  /** An object relationship */
  role: Roles;
  role_id: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "users_roles" */
export type Users_Roles_Aggregate = {
  aggregate?: Maybe<Users_Roles_Aggregate_Fields>;
  nodes: Array<Users_Roles>;
};

export type Users_Roles_Aggregate_Bool_Exp = {
  count?: InputMaybe<Users_Roles_Aggregate_Bool_Exp_Count>;
};

export type Users_Roles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Roles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users_roles" */
export type Users_Roles_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Roles_Max_Fields>;
  min?: Maybe<Users_Roles_Min_Fields>;
};


/** aggregate fields of "users_roles" */
export type Users_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users_roles" */
export type Users_Roles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Roles_Max_Order_By>;
  min?: InputMaybe<Users_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users_roles" */
export type Users_Roles_Arr_Rel_Insert_Input = {
  data: Array<Users_Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users_roles". All fields are combined with a logical 'AND'. */
export type Users_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Roles_Bool_Exp>>;
  _not?: InputMaybe<Users_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Roles_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Roles_Bool_Exp>;
  role_id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_roles" */
export enum Users_Roles_Constraint {
  /** unique or primary key constraint on columns "role_id", "user_id", "tenant_id" */
  UsersRolesUserIdRoleId = 'users_roles__user_id_role_id',
  /** unique or primary key constraint on columns "id" */
  UsersRolesPkey = 'users_roles_pkey'
}

/** input type for inserting data into table "users_roles" */
export type Users_Roles_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Roles_Obj_Rel_Insert_Input>;
  role_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Roles_Max_Fields = {
  id?: Maybe<Scalars['String']['output']>;
  role_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "users_roles" */
export type Users_Roles_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Roles_Min_Fields = {
  id?: Maybe<Scalars['String']['output']>;
  role_id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "users_roles" */
export type Users_Roles_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users_roles" */
export type Users_Roles_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Roles>;
};

/** on_conflict condition type for table "users_roles" */
export type Users_Roles_On_Conflict = {
  constraint: Users_Roles_Constraint;
  update_columns?: Array<Users_Roles_Update_Column>;
  where?: InputMaybe<Users_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "users_roles". */
export type Users_Roles_Order_By = {
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Roles_Order_By>;
  role_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_roles */
export type Users_Roles_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "users_roles" */
export enum Users_Roles_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users_roles" */
export type Users_Roles_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users_roles" */
export type Users_Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Roles_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users_roles" */
export enum Users_Roles_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

export type Users_Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Roles_Bool_Exp;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomData = 'custom_data',
  /** column name */
  Id = 'id',
  /** column name */
  Identities = 'identities',
  /** column name */
  IsSuspended = 'is_suspended',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  LogtoConfig = 'logto_config',
  /** column name */
  MfaVerifications = 'mfa_verifications',
  /** column name */
  Name = 'name',
  /** column name */
  PasswordEncrypted = 'password_encrypted',
  /** column name */
  PasswordEncryptionMethod = 'password_encryption_method',
  /** column name */
  PrimaryEmail = 'primary_email',
  /** column name */
  PrimaryPhone = 'primary_phone',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  custom_data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identities?: InputMaybe<Scalars['jsonb']['input']>;
  is_suspended?: InputMaybe<Scalars['Boolean']['input']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']['input']>;
  logto_config?: InputMaybe<Scalars['jsonb']['input']>;
  mfa_verifications?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password_encrypted?: InputMaybe<Scalars['String']['input']>;
  password_encryption_method?: InputMaybe<Scalars['users_password_encryption_method']['input']>;
  primary_email?: InputMaybe<Scalars['String']['input']>;
  primary_phone?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  application_id?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  custom_data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identities?: InputMaybe<Scalars['jsonb']['input']>;
  is_suspended?: InputMaybe<Scalars['Boolean']['input']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']['input']>;
  logto_config?: InputMaybe<Scalars['jsonb']['input']>;
  mfa_verifications?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password_encrypted?: InputMaybe<Scalars['String']['input']>;
  password_encryption_method?: InputMaybe<Scalars['users_password_encryption_method']['input']>;
  primary_email?: InputMaybe<Scalars['String']['input']>;
  primary_phone?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomData = 'custom_data',
  /** column name */
  Id = 'id',
  /** column name */
  Identities = 'identities',
  /** column name */
  IsSuspended = 'is_suspended',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  LogtoConfig = 'logto_config',
  /** column name */
  MfaVerifications = 'mfa_verifications',
  /** column name */
  Name = 'name',
  /** column name */
  PasswordEncrypted = 'password_encrypted',
  /** column name */
  PasswordEncryptionMethod = 'password_encryption_method',
  /** column name */
  PrimaryEmail = 'primary_email',
  /** column name */
  PrimaryPhone = 'primary_phone',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Username = 'username'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "verification_statuses" */
export type Verification_Statuses = {
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "verification_statuses" */
export type Verification_Statuses_Aggregate = {
  aggregate?: Maybe<Verification_Statuses_Aggregate_Fields>;
  nodes: Array<Verification_Statuses>;
};

/** aggregate fields of "verification_statuses" */
export type Verification_Statuses_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Verification_Statuses_Max_Fields>;
  min?: Maybe<Verification_Statuses_Min_Fields>;
};


/** aggregate fields of "verification_statuses" */
export type Verification_Statuses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Verification_Statuses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "verification_statuses". All fields are combined with a logical 'AND'. */
export type Verification_Statuses_Bool_Exp = {
  _and?: InputMaybe<Array<Verification_Statuses_Bool_Exp>>;
  _not?: InputMaybe<Verification_Statuses_Bool_Exp>;
  _or?: InputMaybe<Array<Verification_Statuses_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_statuses" */
export enum Verification_Statuses_Constraint {
  /** unique or primary key constraint on columns "id" */
  VerificationStatusesPkey = 'verification_statuses_pkey'
}

/** input type for inserting data into table "verification_statuses" */
export type Verification_Statuses_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Verification_Statuses_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Verification_Statuses_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "verification_statuses" */
export type Verification_Statuses_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Statuses>;
};

/** on_conflict condition type for table "verification_statuses" */
export type Verification_Statuses_On_Conflict = {
  constraint: Verification_Statuses_Constraint;
  update_columns?: Array<Verification_Statuses_Update_Column>;
  where?: InputMaybe<Verification_Statuses_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_statuses". */
export type Verification_Statuses_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: verification_statuses */
export type Verification_Statuses_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "verification_statuses" */
export enum Verification_Statuses_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "verification_statuses" */
export type Verification_Statuses_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "verification_statuses" */
export type Verification_Statuses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Verification_Statuses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Verification_Statuses_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "verification_statuses" */
export enum Verification_Statuses_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

export type Verification_Statuses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Verification_Statuses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Verification_Statuses_Bool_Exp;
};

export type CholesterolRecordDetailQueryQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type CholesterolRecordDetailQueryQuery = { cholesterol_records_by_pk?: { diastolic_pressure: any, medication_record?: string | null, pulse_rate: any, record_time: any, remarks?: string | null, symptoms?: any | null, systolic_pressure: any } | null };

export type DeleteCholesterolRecordMutationMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteCholesterolRecordMutationMutation = { delete_cholesterol_records_by_pk?: { id: any } | null };

export type CholesterolRecordListQueryQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
}>;


export type CholesterolRecordListQueryQuery = { cholesterol_records: Array<{ diastolic_pressure: any, id: any, systolic_pressure: any, pulse_rate: any, record_time: any }> };

export type InsertCholesterolRecordOneMutationMutationVariables = Exact<{
  object: Cholesterol_Records_Insert_Input;
}>;


export type InsertCholesterolRecordOneMutationMutation = { insert_cholesterol_records_one?: { id: any } | null };

export type UpdateCholesterolRecordOneMutationMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  object: Cholesterol_Records_Set_Input;
}>;


export type UpdateCholesterolRecordOneMutationMutation = { update_cholesterol_records_by_pk?: { id: any } | null };

export type CholesterolStandardsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CholesterolStandardsQueryQuery = { cholesterol_standards: Array<{ diastolic_pressure: any, systolic_pressure: any, id: any }>, user_cholesterol_standards: Array<{ diastolic_pressure: any, systolic_pressure: any, id: any }> };

export type InsertUserCholesterolStandardsMutationMutationVariables = Exact<{
  object: User_Cholesterol_Standards_Insert_Input;
}>;


export type InsertUserCholesterolStandardsMutationMutation = { insert_user_cholesterol_standards_one?: { id: any } | null };

export type UpdateUserCholesterolStandardsMutationMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']['input']>;
  _set: User_Cholesterol_Standards_Set_Input;
}>;


export type UpdateUserCholesterolStandardsMutationMutation = { update_user_cholesterol_standards_by_pk?: { id: any } | null };

export type CholesterolStatisticsQueryQueryVariables = Exact<{
  startDate?: InputMaybe<Scalars['timestamptz']['input']>;
  endDate?: InputMaybe<Scalars['timestamptz']['input']>;
}>;


export type CholesterolStatisticsQueryQuery = { cholesterol_records: Array<{ diastolic_pressure: any, id: any, medication_record?: string | null, pulse_rate: any, record_time: any, systolic_pressure: any }> };

export type CholesterolStatisticsChartQueryQueryVariables = Exact<{
  startDate?: InputMaybe<Scalars['timestamptz']['input']>;
  endDate?: InputMaybe<Scalars['timestamptz']['input']>;
}>;


export type CholesterolStatisticsChartQueryQuery = { cholesterol_records: Array<{ diastolic_pressure: any, id: any, medication_record?: string | null, pulse_rate: any, record_time: any, systolic_pressure: any }> };

export type CholesterolStatisticsPieChartQueryQueryVariables = Exact<{
  startDate?: InputMaybe<Scalars['timestamptz']['input']>;
  endDate?: InputMaybe<Scalars['timestamptz']['input']>;
}>;


export type CholesterolStatisticsPieChartQueryQuery = { tooLarge: { aggregate?: { count: number } | null }, tooSmall: { aggregate?: { count: number } | null }, normal: { aggregate?: { count: number } | null } };

export type GlucoseRecordOneQueryQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GlucoseRecordOneQueryQuery = { glucose_records_by_pk?: { diet_record?: string | null, exercise_record?: string | null, glucose_value: any, measurement_period: number, medication_record?: string | null, record_time: any, remarks?: string | null } | null, user_glucose_standards: Array<{ max: any, min: any, title: string, type: number }>, glucose_standards: Array<{ max: any, min: any, title: string, type: number }> };

export type DeleteGlucoseRecordMutationMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteGlucoseRecordMutationMutation = { delete_glucose_records_by_pk?: { id: any } | null };

export type GlucoseRecordListQueryQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
}>;


export type GlucoseRecordListQueryQuery = { glucose_records: Array<{ glucose_value: any, measurement_period: number, record_time: any, id: any }> };

export type GlucoseRecordQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GlucoseRecordQueryQuery = { user_glucose_standards: Array<{ max: any, min: any, title: string, type: number }>, glucose_standards: Array<{ max: any, min: any, title: string, type: number }> };

export type GlucoseRecordUpdateQueryQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GlucoseRecordUpdateQueryQuery = { glucose_records_by_pk?: { diet_record?: string | null, exercise_record?: string | null, glucose_value: any, measurement_period: number, medication_record?: string | null, record_time: any, remarks?: string | null } | null };

export type InsertGlucoseRecordMutationMutationVariables = Exact<{
  object: Glucose_Records_Insert_Input;
}>;


export type InsertGlucoseRecordMutationMutation = { insert_glucose_records_one?: { id: any } | null };

export type UpdateGlucoseRecordMutationMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  object: Glucose_Records_Set_Input;
}>;


export type UpdateGlucoseRecordMutationMutation = { update_glucose_records_by_pk?: { id: any } | null };

export type GlucoseStandardsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GlucoseStandardsQueryQuery = { glucose_standards: Array<{ max: any, min: any, title: string, type: number }>, user_glucose_standards: Array<{ id: any, max: any, min: any, title: string, type: number }> };

export type InsertUserGlucoseStandardsMutationMutationVariables = Exact<{
  objects: Array<User_Glucose_Standards_Insert_Input> | User_Glucose_Standards_Insert_Input;
}>;


export type InsertUserGlucoseStandardsMutationMutation = { insert_user_glucose_standards?: { affected_rows: number } | null };

export type UpdateUserGlucoseStandardsMutationMutationVariables = Exact<{
  updates: Array<User_Glucose_Standards_Updates> | User_Glucose_Standards_Updates;
}>;


export type UpdateUserGlucoseStandardsMutationMutation = { update_user_glucose_standards_many?: Array<{ affected_rows: number } | null> | null };

export type GlucoseStatisticsQueryQueryVariables = Exact<{
  startDate?: InputMaybe<Scalars['timestamptz']['input']>;
  endDate?: InputMaybe<Scalars['timestamptz']['input']>;
}>;


export type GlucoseStatisticsQueryQuery = { glucose_records: Array<{ glucose_value: any, measurement_period: number, record_time: any }> };

export type GlucoseStatisticsChartQueryQueryVariables = Exact<{
  startDate?: InputMaybe<Scalars['timestamptz']['input']>;
  endDate?: InputMaybe<Scalars['timestamptz']['input']>;
  measurementPeriod?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GlucoseStatisticsChartQueryQuery = { glucose_records: Array<{ glucose_value: any, measurement_period: number, record_time: any }> };

export type GlucoseStatisticsPieChartQueryQueryVariables = Exact<{
  startDate?: InputMaybe<Scalars['timestamptz']['input']>;
  endDate?: InputMaybe<Scalars['timestamptz']['input']>;
}>;


export type GlucoseStatisticsPieChartQueryQuery = { tooLarge: { aggregate?: { count: number } | null }, tooSmall: { aggregate?: { count: number } | null }, normal: { aggregate?: { count: number } | null } };

export type IndexPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQueryQuery = { ads: Array<{ name?: string | null, type: number, image: string, link: string }>, check_ins: Array<{ check_in_date: any, id: any, consecutive_days: number, is_continuation: boolean }>, check_in_settings: Array<{ inaugural: any, following: any }> };

export type CheckInMutationMutationVariables = Exact<{
  object: Check_Ins_Insert_Input;
}>;


export type CheckInMutationMutation = { insert_check_ins_one?: { id: any } | null };

export type LabReportRecordDetailQueryQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type LabReportRecordDetailQueryQuery = { lab_report_records_by_pk?: { assay_date: any, images: Array<string>, remarks?: string | null, report_type: number } | null };

export type DeleteLabReportRecordMutationMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteLabReportRecordMutationMutation = { delete_lab_report_records_by_pk?: { id: any } | null };

export type LabReportListQueryQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
}>;


export type LabReportListQueryQuery = { lab_report_records: Array<{ id: any, assay_date: any, report_type: number }> };

export type InsertLabReportRecordOneMutationMutationVariables = Exact<{
  object: Lab_Report_Records_Insert_Input;
}>;


export type InsertLabReportRecordOneMutationMutation = { insert_lab_report_records_one?: { id: any } | null };

export type UpdateLabReportRecordOneMutationMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  object: Lab_Report_Records_Set_Input;
}>;


export type UpdateLabReportRecordOneMutationMutation = { update_lab_report_records_by_pk?: { id: any } | null };

export type MedicalReportRecordOneQueryQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type MedicalReportRecordOneQueryQuery = { medical_examination_records_by_pk?: { exam_date: any, images: Array<string>, remarks?: string | null } | null };

export type DeleteMedicalReportRecordMutationMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteMedicalReportRecordMutationMutation = { delete_medical_examination_records_by_pk?: { id: any } | null };

export type MedicalReportListQueryQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
}>;


export type MedicalReportListQueryQuery = { medical_examination_records: Array<{ id: any, exam_date: any }> };

export type MedicalReportRecordDetailQueryQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type MedicalReportRecordDetailQueryQuery = { medical_examination_records_by_pk?: { exam_date: any, images: Array<string>, remarks?: string | null } | null };

export type InsertMedicalReportRecordOneMutationMutationVariables = Exact<{
  object: Medical_Examination_Records_Insert_Input;
}>;


export type InsertMedicalReportRecordOneMutationMutation = { insert_medical_examination_records_one?: { id: any } | null };

export type UpdateMedicalReportRecordOneMutationMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  object: Medical_Examination_Records_Set_Input;
}>;


export type UpdateMedicalReportRecordOneMutationMutation = { update_medical_examination_records_by_pk?: { id: any } | null };

export type MedicationReminderListQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MedicationReminderListQueryQuery = { medication_reminders: Array<{ id: any, name: string, usage_dosage?: string | null }> };

export type DeleteMedicationReminderMutationMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteMedicationReminderMutationMutation = { delete_medication_reminders_by_pk?: { id: any } | null };

export type InsertMedicationReminderMutationMutationVariables = Exact<{
  object: Medication_Reminders_Insert_Input;
}>;


export type InsertMedicationReminderMutationMutation = { insert_medication_reminders_one?: { id: any } | null };

export type UpdateUserInfoMutationMutationVariables = Exact<{
  id: Scalars['String']['input'];
  object: Users_Set_Input;
}>;


export type UpdateUserInfoMutationMutation = { update_users_by_pk?: { id: string } | null };

export type InsertSmsCodeMutationMutationVariables = Exact<{
  object: Sms_Codes_Insert_Input;
}>;


export type InsertSmsCodeMutationMutation = { insert_sms_codes_one?: { created_at: any } | null };

export type SmsCodeQueryQueryVariables = Exact<{
  phone_number: Scalars['String']['input'];
  captcha: Scalars['String']['input'];
}>;


export type SmsCodeQueryQuery = { sms_codes: Array<{ id: any }> };


export const CholesterolRecordDetailQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CholesterolRecordDetailQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cholesterol_records_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diastolic_pressure"}},{"kind":"Field","name":{"kind":"Name","value":"medication_record"}},{"kind":"Field","name":{"kind":"Name","value":"pulse_rate"}},{"kind":"Field","name":{"kind":"Name","value":"record_time"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}},{"kind":"Field","name":{"kind":"Name","value":"symptoms"}},{"kind":"Field","name":{"kind":"Name","value":"systolic_pressure"}}]}}]}}]} as unknown as DocumentNode<CholesterolRecordDetailQueryQuery, CholesterolRecordDetailQueryQueryVariables>;
export const DeleteCholesterolRecordMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCholesterolRecordMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_cholesterol_records_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteCholesterolRecordMutationMutation, DeleteCholesterolRecordMutationMutationVariables>;
export const CholesterolRecordListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CholesterolRecordListQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cholesterol_records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"record_time"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diastolic_pressure"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"systolic_pressure"}},{"kind":"Field","name":{"kind":"Name","value":"pulse_rate"}},{"kind":"Field","name":{"kind":"Name","value":"record_time"}}]}}]}}]} as unknown as DocumentNode<CholesterolRecordListQueryQuery, CholesterolRecordListQueryQueryVariables>;
export const InsertCholesterolRecordOneMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertCholesterolRecordOneMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"cholesterol_records_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_cholesterol_records_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertCholesterolRecordOneMutationMutation, InsertCholesterolRecordOneMutationMutationVariables>;
export const UpdateCholesterolRecordOneMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCholesterolRecordOneMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"cholesterol_records_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_cholesterol_records_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateCholesterolRecordOneMutationMutation, UpdateCholesterolRecordOneMutationMutationVariables>;
export const CholesterolStandardsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CholesterolStandardsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cholesterol_standards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diastolic_pressure"}},{"kind":"Field","name":{"kind":"Name","value":"systolic_pressure"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_cholesterol_standards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diastolic_pressure"}},{"kind":"Field","name":{"kind":"Name","value":"systolic_pressure"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CholesterolStandardsQueryQuery, CholesterolStandardsQueryQueryVariables>;
export const InsertUserCholesterolStandardsMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertUserCholesterolStandardsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_cholesterol_standards_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user_cholesterol_standards_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertUserCholesterolStandardsMutationMutation, InsertUserCholesterolStandardsMutationMutationVariables>;
export const UpdateUserCholesterolStandardsMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserCholesterolStandardsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_cholesterol_standards_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_cholesterol_standards_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateUserCholesterolStandardsMutationMutation, UpdateUserCholesterolStandardsMutationMutationVariables>;
export const CholesterolStatisticsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CholesterolStatisticsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cholesterol_records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"record_time"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"record_time"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diastolic_pressure"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"medication_record"}},{"kind":"Field","name":{"kind":"Name","value":"pulse_rate"}},{"kind":"Field","name":{"kind":"Name","value":"record_time"}},{"kind":"Field","name":{"kind":"Name","value":"systolic_pressure"}}]}}]}}]} as unknown as DocumentNode<CholesterolStatisticsQueryQuery, CholesterolStatisticsQueryQueryVariables>;
export const CholesterolStatisticsChartQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CholesterolStatisticsChartQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cholesterol_records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"record_time"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"record_time"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diastolic_pressure"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"medication_record"}},{"kind":"Field","name":{"kind":"Name","value":"pulse_rate"}},{"kind":"Field","name":{"kind":"Name","value":"record_time"}},{"kind":"Field","name":{"kind":"Name","value":"systolic_pressure"}}]}}]}}]} as unknown as DocumentNode<CholesterolStatisticsChartQueryQuery, CholesterolStatisticsChartQueryQueryVariables>;
export const CholesterolStatisticsPieChartQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CholesterolStatisticsPieChartQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"tooLarge"},"name":{"kind":"Name","value":"cholesterol_records_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"too_large"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"record_time"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"tooSmall"},"name":{"kind":"Name","value":"cholesterol_records_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"too_small"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"record_time"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"normal"},"name":{"kind":"Name","value":"cholesterol_records_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"too_large"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"too_small"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"record_time"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<CholesterolStatisticsPieChartQueryQuery, CholesterolStatisticsPieChartQueryQueryVariables>;
export const GlucoseRecordOneQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GlucoseRecordOneQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"glucose_records_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diet_record"}},{"kind":"Field","name":{"kind":"Name","value":"exercise_record"}},{"kind":"Field","name":{"kind":"Name","value":"glucose_value"}},{"kind":"Field","name":{"kind":"Name","value":"measurement_period"}},{"kind":"Field","name":{"kind":"Name","value":"medication_record"}},{"kind":"Field","name":{"kind":"Name","value":"record_time"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_glucose_standards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"glucose_standards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<GlucoseRecordOneQueryQuery, GlucoseRecordOneQueryQueryVariables>;
export const DeleteGlucoseRecordMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteGlucoseRecordMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_glucose_records_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteGlucoseRecordMutationMutation, DeleteGlucoseRecordMutationMutationVariables>;
export const GlucoseRecordListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GlucoseRecordListQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"glucose_records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"record_time"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"glucose_value"}},{"kind":"Field","name":{"kind":"Name","value":"measurement_period"}},{"kind":"Field","name":{"kind":"Name","value":"record_time"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GlucoseRecordListQueryQuery, GlucoseRecordListQueryQueryVariables>;
export const GlucoseRecordQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GlucoseRecordQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_glucose_standards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"glucose_standards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<GlucoseRecordQueryQuery, GlucoseRecordQueryQueryVariables>;
export const GlucoseRecordUpdateQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GlucoseRecordUpdateQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"glucose_records_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diet_record"}},{"kind":"Field","name":{"kind":"Name","value":"exercise_record"}},{"kind":"Field","name":{"kind":"Name","value":"glucose_value"}},{"kind":"Field","name":{"kind":"Name","value":"measurement_period"}},{"kind":"Field","name":{"kind":"Name","value":"medication_record"}},{"kind":"Field","name":{"kind":"Name","value":"record_time"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}}]}}]}}]} as unknown as DocumentNode<GlucoseRecordUpdateQueryQuery, GlucoseRecordUpdateQueryQueryVariables>;
export const InsertGlucoseRecordMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertGlucoseRecordMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"glucose_records_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_glucose_records_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertGlucoseRecordMutationMutation, InsertGlucoseRecordMutationMutationVariables>;
export const UpdateGlucoseRecordMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateGlucoseRecordMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"glucose_records_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_glucose_records_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateGlucoseRecordMutationMutation, UpdateGlucoseRecordMutationMutationVariables>;
export const GlucoseStandardsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GlucoseStandardsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"glucose_standards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_glucose_standards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<GlucoseStandardsQueryQuery, GlucoseStandardsQueryQueryVariables>;
export const InsertUserGlucoseStandardsMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertUserGlucoseStandardsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_glucose_standards_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user_glucose_standards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<InsertUserGlucoseStandardsMutationMutation, InsertUserGlucoseStandardsMutationMutationVariables>;
export const UpdateUserGlucoseStandardsMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserGlucoseStandardsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updates"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_glucose_standards_updates"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_glucose_standards_many"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UpdateUserGlucoseStandardsMutationMutation, UpdateUserGlucoseStandardsMutationMutationVariables>;
export const GlucoseStatisticsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GlucoseStatisticsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"glucose_records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"record_time"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"record_time"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"glucose_value"}},{"kind":"Field","name":{"kind":"Name","value":"measurement_period"}},{"kind":"Field","name":{"kind":"Name","value":"record_time"}}]}}]}}]} as unknown as DocumentNode<GlucoseStatisticsQueryQuery, GlucoseStatisticsQueryQueryVariables>;
export const GlucoseStatisticsChartQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GlucoseStatisticsChartQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"measurementPeriod"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"glucose_records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"record_time"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"measurement_period"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"measurementPeriod"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"record_time"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"glucose_value"}},{"kind":"Field","name":{"kind":"Name","value":"measurement_period"}},{"kind":"Field","name":{"kind":"Name","value":"record_time"}}]}}]}}]} as unknown as DocumentNode<GlucoseStatisticsChartQueryQuery, GlucoseStatisticsChartQueryQueryVariables>;
export const GlucoseStatisticsPieChartQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GlucoseStatisticsPieChartQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"tooLarge"},"name":{"kind":"Name","value":"glucose_records_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"too_large"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"record_time"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"tooSmall"},"name":{"kind":"Name","value":"glucose_records_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"too_small"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"record_time"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"normal"},"name":{"kind":"Name","value":"glucose_records_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"too_large"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"too_small"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"record_time"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<GlucoseStatisticsPieChartQueryQuery, GlucoseStatisticsPieChartQueryQueryVariables>;
export const IndexPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IndexPageQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ads"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"IntValue","value":"0"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"check_ins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"check_in_date"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"check_in_date"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"consecutive_days"}},{"kind":"Field","name":{"kind":"Name","value":"is_continuation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"check_in_settings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inaugural"}},{"kind":"Field","name":{"kind":"Name","value":"following"}}]}}]}}]} as unknown as DocumentNode<IndexPageQueryQuery, IndexPageQueryQueryVariables>;
export const CheckInMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CheckInMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"check_ins_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_check_ins_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CheckInMutationMutation, CheckInMutationMutationVariables>;
export const LabReportRecordDetailQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LabReportRecordDetailQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lab_report_records_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assay_date"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}},{"kind":"Field","name":{"kind":"Name","value":"report_type"}}]}}]}}]} as unknown as DocumentNode<LabReportRecordDetailQueryQuery, LabReportRecordDetailQueryQueryVariables>;
export const DeleteLabReportRecordMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteLabReportRecordMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_lab_report_records_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteLabReportRecordMutationMutation, DeleteLabReportRecordMutationMutationVariables>;
export const LabReportListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LabReportListQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lab_report_records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"assay_date"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assay_date"}},{"kind":"Field","name":{"kind":"Name","value":"report_type"}}]}}]}}]} as unknown as DocumentNode<LabReportListQueryQuery, LabReportListQueryQueryVariables>;
export const InsertLabReportRecordOneMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertLabReportRecordOneMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"lab_report_records_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_lab_report_records_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertLabReportRecordOneMutationMutation, InsertLabReportRecordOneMutationMutationVariables>;
export const UpdateLabReportRecordOneMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLabReportRecordOneMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"lab_report_records_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_lab_report_records_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateLabReportRecordOneMutationMutation, UpdateLabReportRecordOneMutationMutationVariables>;
export const MedicalReportRecordOneQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MedicalReportRecordOneQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"medical_examination_records_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exam_date"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}}]}}]}}]} as unknown as DocumentNode<MedicalReportRecordOneQueryQuery, MedicalReportRecordOneQueryQueryVariables>;
export const DeleteMedicalReportRecordMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMedicalReportRecordMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_medical_examination_records_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteMedicalReportRecordMutationMutation, DeleteMedicalReportRecordMutationMutationVariables>;
export const MedicalReportListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MedicalReportListQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"medical_examination_records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"exam_date"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"exam_date"}}]}}]}}]} as unknown as DocumentNode<MedicalReportListQueryQuery, MedicalReportListQueryQueryVariables>;
export const MedicalReportRecordDetailQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MedicalReportRecordDetailQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"medical_examination_records_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exam_date"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}}]}}]}}]} as unknown as DocumentNode<MedicalReportRecordDetailQueryQuery, MedicalReportRecordDetailQueryQueryVariables>;
export const InsertMedicalReportRecordOneMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertMedicalReportRecordOneMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"medical_examination_records_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_medical_examination_records_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertMedicalReportRecordOneMutationMutation, InsertMedicalReportRecordOneMutationMutationVariables>;
export const UpdateMedicalReportRecordOneMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMedicalReportRecordOneMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"medical_examination_records_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_medical_examination_records_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateMedicalReportRecordOneMutationMutation, UpdateMedicalReportRecordOneMutationMutationVariables>;
export const MedicationReminderListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MedicationReminderListQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"medication_reminders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"usage_dosage"}}]}}]}}]} as unknown as DocumentNode<MedicationReminderListQueryQuery, MedicationReminderListQueryQueryVariables>;
export const DeleteMedicationReminderMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMedicationReminderMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_medication_reminders_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteMedicationReminderMutationMutation, DeleteMedicationReminderMutationMutationVariables>;
export const InsertMedicationReminderMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertMedicationReminderMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"medication_reminders_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_medication_reminders_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertMedicationReminderMutationMutation, InsertMedicationReminderMutationMutationVariables>;
export const UpdateUserInfoMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserInfoMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"users_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateUserInfoMutationMutation, UpdateUserInfoMutationMutationVariables>;
export const InsertSmsCodeMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertSmsCodeMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"sms_codes_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_sms_codes_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<InsertSmsCodeMutationMutation, InsertSmsCodeMutationMutationVariables>;
export const SmsCodeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SmsCodeQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"captcha"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sms_codes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"captcha"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"captcha"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SmsCodeQueryQuery, SmsCodeQueryQueryVariables>;