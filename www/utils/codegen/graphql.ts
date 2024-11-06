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
  bigint: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  uuid: { input: any; output: any; }
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

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Episode_Images_Aggregate_Bool_Exp = {
  count?: InputMaybe<Episode_Images_Aggregate_Bool_Exp_Count>;
};

export type Episode_Images_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Episode_Images_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Episode_Images_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "episode_images" */
export type Episode_Images_Aggregate_Order_By = {
  avg?: InputMaybe<Episode_Images_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Episode_Images_Max_Order_By>;
  min?: InputMaybe<Episode_Images_Min_Order_By>;
  stddev?: InputMaybe<Episode_Images_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Episode_Images_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Episode_Images_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Episode_Images_Sum_Order_By>;
  var_pop?: InputMaybe<Episode_Images_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Episode_Images_Var_Samp_Order_By>;
  variance?: InputMaybe<Episode_Images_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "episode_images" */
export type Episode_Images_Arr_Rel_Insert_Input = {
  data: Array<Episode_Images_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Episode_Images_On_Conflict>;
};

/** order by avg() on columns of table "episode_images" */
export type Episode_Images_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "episode_images". All fields are combined with a logical 'AND'. */
export type Episode_Images_Bool_Exp = {
  _and?: InputMaybe<Array<Episode_Images_Bool_Exp>>;
  _not?: InputMaybe<Episode_Images_Bool_Exp>;
  _or?: InputMaybe<Array<Episode_Images_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  episode?: InputMaybe<Episodes_Bool_Exp>;
  episode_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image_description?: InputMaybe<String_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "episode_images" */
export enum Episode_Images_Constraint {
  /** unique or primary key constraint on columns "id" */
  EpisodeImagesPkey = 'episode_images_pkey'
}

/** input type for incrementing numeric columns in table "episode_images" */
export type Episode_Images_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "episode_images" */
export type Episode_Images_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  episode?: InputMaybe<Episodes_Obj_Rel_Insert_Input>;
  episode_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image_description?: InputMaybe<Scalars['String']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
};

/** order by max() on columns of table "episode_images" */
export type Episode_Images_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  episode_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_description?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "episode_images" */
export type Episode_Images_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  episode_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_description?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "episode_images" */
export type Episode_Images_On_Conflict = {
  constraint: Episode_Images_Constraint;
  update_columns?: Array<Episode_Images_Update_Column>;
  where?: InputMaybe<Episode_Images_Bool_Exp>;
};

/** Ordering options when selecting data from "episode_images". */
export type Episode_Images_Order_By = {
  created_at?: InputMaybe<Order_By>;
  episode?: InputMaybe<Episodes_Order_By>;
  episode_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_description?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: episode_images */
export type Episode_Images_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "episode_images" */
export enum Episode_Images_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EpisodeId = 'episode_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageDescription = 'image_description',
  /** column name */
  ImageUrl = 'image_url'
}

/** input type for updating data in table "episode_images" */
export type Episode_Images_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  episode_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image_description?: InputMaybe<Scalars['String']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
};

/** order by stddev() on columns of table "episode_images" */
export type Episode_Images_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "episode_images" */
export type Episode_Images_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "episode_images" */
export type Episode_Images_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "episode_images" */
export type Episode_Images_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Episode_Images_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Episode_Images_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  episode_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image_description?: InputMaybe<Scalars['String']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "episode_images" */
export type Episode_Images_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "episode_images" */
export enum Episode_Images_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EpisodeId = 'episode_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageDescription = 'image_description',
  /** column name */
  ImageUrl = 'image_url'
}

export type Episode_Images_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Episode_Images_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Episode_Images_Set_Input>;
  /** filter the rows which have to be updated */
  where: Episode_Images_Bool_Exp;
};

/** order by var_pop() on columns of table "episode_images" */
export type Episode_Images_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "episode_images" */
export type Episode_Images_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "episode_images" */
export type Episode_Images_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

export type Episode_Persons_Aggregate_Bool_Exp = {
  count?: InputMaybe<Episode_Persons_Aggregate_Bool_Exp_Count>;
};

export type Episode_Persons_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Episode_Persons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Episode_Persons_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "episode_persons" */
export type Episode_Persons_Aggregate_Order_By = {
  avg?: InputMaybe<Episode_Persons_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Episode_Persons_Max_Order_By>;
  min?: InputMaybe<Episode_Persons_Min_Order_By>;
  stddev?: InputMaybe<Episode_Persons_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Episode_Persons_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Episode_Persons_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Episode_Persons_Sum_Order_By>;
  var_pop?: InputMaybe<Episode_Persons_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Episode_Persons_Var_Samp_Order_By>;
  variance?: InputMaybe<Episode_Persons_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "episode_persons" */
export type Episode_Persons_Arr_Rel_Insert_Input = {
  data: Array<Episode_Persons_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Episode_Persons_On_Conflict>;
};

/** order by avg() on columns of table "episode_persons" */
export type Episode_Persons_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "episode_persons". All fields are combined with a logical 'AND'. */
export type Episode_Persons_Bool_Exp = {
  _and?: InputMaybe<Array<Episode_Persons_Bool_Exp>>;
  _not?: InputMaybe<Episode_Persons_Bool_Exp>;
  _or?: InputMaybe<Array<Episode_Persons_Bool_Exp>>;
  episode?: InputMaybe<Episodes_Bool_Exp>;
  episode_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Int_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "episode_persons" */
export enum Episode_Persons_Constraint {
  /** unique or primary key constraint on columns "id" */
  EpisodePersonsPkey = 'episode_persons_pkey'
}

/** input type for incrementing numeric columns in table "episode_persons" */
export type Episode_Persons_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  person_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "episode_persons" */
export type Episode_Persons_Insert_Input = {
  episode?: InputMaybe<Episodes_Obj_Rel_Insert_Input>;
  episode_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** order by max() on columns of table "episode_persons" */
export type Episode_Persons_Max_Order_By = {
  episode_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "episode_persons" */
export type Episode_Persons_Min_Order_By = {
  episode_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "episode_persons" */
export type Episode_Persons_On_Conflict = {
  constraint: Episode_Persons_Constraint;
  update_columns?: Array<Episode_Persons_Update_Column>;
  where?: InputMaybe<Episode_Persons_Bool_Exp>;
};

/** Ordering options when selecting data from "episode_persons". */
export type Episode_Persons_Order_By = {
  episode?: InputMaybe<Episodes_Order_By>;
  episode_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: episode_persons */
export type Episode_Persons_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "episode_persons" */
export enum Episode_Persons_Select_Column {
  /** column name */
  EpisodeId = 'episode_id',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "episode_persons" */
export type Episode_Persons_Set_Input = {
  episode_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  person_id?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** order by stddev() on columns of table "episode_persons" */
export type Episode_Persons_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "episode_persons" */
export type Episode_Persons_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "episode_persons" */
export type Episode_Persons_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "episode_persons" */
export type Episode_Persons_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Episode_Persons_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Episode_Persons_Stream_Cursor_Value_Input = {
  episode_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  person_id?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "episode_persons" */
export type Episode_Persons_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** update columns of table "episode_persons" */
export enum Episode_Persons_Update_Column {
  /** column name */
  EpisodeId = 'episode_id',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  Role = 'role'
}

export type Episode_Persons_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Episode_Persons_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Episode_Persons_Set_Input>;
  /** filter the rows which have to be updated */
  where: Episode_Persons_Bool_Exp;
};

/** order by var_pop() on columns of table "episode_persons" */
export type Episode_Persons_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "episode_persons" */
export type Episode_Persons_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "episode_persons" */
export type Episode_Persons_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

export type Episodes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Episodes_Aggregate_Bool_Exp_Count>;
};

export type Episodes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Episodes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Episodes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "episodes" */
export type Episodes_Aggregate_Order_By = {
  avg?: InputMaybe<Episodes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Episodes_Max_Order_By>;
  min?: InputMaybe<Episodes_Min_Order_By>;
  stddev?: InputMaybe<Episodes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Episodes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Episodes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Episodes_Sum_Order_By>;
  var_pop?: InputMaybe<Episodes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Episodes_Var_Samp_Order_By>;
  variance?: InputMaybe<Episodes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "episodes" */
export type Episodes_Arr_Rel_Insert_Input = {
  data: Array<Episodes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Episodes_On_Conflict>;
};

/** order by avg() on columns of table "episodes" */
export type Episodes_Avg_Order_By = {
  media_length?: InputMaybe<Order_By>;
  season?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "episodes". All fields are combined with a logical 'AND'. */
export type Episodes_Bool_Exp = {
  _and?: InputMaybe<Array<Episodes_Bool_Exp>>;
  _not?: InputMaybe<Episodes_Bool_Exp>;
  _or?: InputMaybe<Array<Episodes_Bool_Exp>>;
  author?: InputMaybe<String_Comparison_Exp>;
  chapters_type?: InputMaybe<String_Comparison_Exp>;
  chapters_url?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  episode_images?: InputMaybe<Episode_Images_Bool_Exp>;
  episode_images_aggregate?: InputMaybe<Episode_Images_Aggregate_Bool_Exp>;
  episode_persons?: InputMaybe<Episode_Persons_Bool_Exp>;
  episode_persons_aggregate?: InputMaybe<Episode_Persons_Aggregate_Bool_Exp>;
  episode_type?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_title?: InputMaybe<String_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  keywords?: InputMaybe<String_Array_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  media_length?: InputMaybe<Bigint_Comparison_Exp>;
  media_type?: InputMaybe<String_Comparison_Exp>;
  media_url?: InputMaybe<String_Comparison_Exp>;
  podcast?: InputMaybe<Podcasts_Bool_Exp>;
  podcast_id?: InputMaybe<Uuid_Comparison_Exp>;
  pub_date?: InputMaybe<Timestamp_Comparison_Exp>;
  season?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "episodes" */
export enum Episodes_Constraint {
  /** unique or primary key constraint on columns "id" */
  EpisodesPkey = 'episodes_pkey'
}

/** input type for incrementing numeric columns in table "episodes" */
export type Episodes_Inc_Input = {
  media_length?: InputMaybe<Scalars['bigint']['input']>;
  season?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "episodes" */
export type Episodes_Insert_Input = {
  author?: InputMaybe<Scalars['String']['input']>;
  chapters_type?: InputMaybe<Scalars['String']['input']>;
  chapters_url?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  episode_images?: InputMaybe<Episode_Images_Arr_Rel_Insert_Input>;
  episode_persons?: InputMaybe<Episode_Persons_Arr_Rel_Insert_Input>;
  episode_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_title?: InputMaybe<Scalars['String']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  link?: InputMaybe<Scalars['String']['input']>;
  media_length?: InputMaybe<Scalars['bigint']['input']>;
  media_type?: InputMaybe<Scalars['String']['input']>;
  media_url?: InputMaybe<Scalars['String']['input']>;
  podcast?: InputMaybe<Podcasts_Obj_Rel_Insert_Input>;
  podcast_id?: InputMaybe<Scalars['uuid']['input']>;
  pub_date?: InputMaybe<Scalars['timestamp']['input']>;
  season?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** order by max() on columns of table "episodes" */
export type Episodes_Max_Order_By = {
  author?: InputMaybe<Order_By>;
  chapters_type?: InputMaybe<Order_By>;
  chapters_url?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  episode_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_title?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  media_length?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Order_By>;
  media_url?: InputMaybe<Order_By>;
  podcast_id?: InputMaybe<Order_By>;
  pub_date?: InputMaybe<Order_By>;
  season?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "episodes" */
export type Episodes_Min_Order_By = {
  author?: InputMaybe<Order_By>;
  chapters_type?: InputMaybe<Order_By>;
  chapters_url?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  episode_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_title?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  media_length?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Order_By>;
  media_url?: InputMaybe<Order_By>;
  podcast_id?: InputMaybe<Order_By>;
  pub_date?: InputMaybe<Order_By>;
  season?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** input type for inserting object relation for remote table "episodes" */
export type Episodes_Obj_Rel_Insert_Input = {
  data: Episodes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Episodes_On_Conflict>;
};

/** on_conflict condition type for table "episodes" */
export type Episodes_On_Conflict = {
  constraint: Episodes_Constraint;
  update_columns?: Array<Episodes_Update_Column>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};

/** Ordering options when selecting data from "episodes". */
export type Episodes_Order_By = {
  author?: InputMaybe<Order_By>;
  chapters_type?: InputMaybe<Order_By>;
  chapters_url?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  episode_images_aggregate?: InputMaybe<Episode_Images_Aggregate_Order_By>;
  episode_persons_aggregate?: InputMaybe<Episode_Persons_Aggregate_Order_By>;
  episode_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_title?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  media_length?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Order_By>;
  media_url?: InputMaybe<Order_By>;
  podcast?: InputMaybe<Podcasts_Order_By>;
  podcast_id?: InputMaybe<Order_By>;
  pub_date?: InputMaybe<Order_By>;
  season?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: episodes */
export type Episodes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "episodes" */
export enum Episodes_Select_Column {
  /** column name */
  Author = 'author',
  /** column name */
  ChaptersType = 'chapters_type',
  /** column name */
  ChaptersUrl = 'chapters_url',
  /** column name */
  Description = 'description',
  /** column name */
  EpisodeType = 'episode_type',
  /** column name */
  Id = 'id',
  /** column name */
  ImageTitle = 'image_title',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  Link = 'link',
  /** column name */
  MediaLength = 'media_length',
  /** column name */
  MediaType = 'media_type',
  /** column name */
  MediaUrl = 'media_url',
  /** column name */
  PodcastId = 'podcast_id',
  /** column name */
  PubDate = 'pub_date',
  /** column name */
  Season = 'season',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "episodes" */
export type Episodes_Set_Input = {
  author?: InputMaybe<Scalars['String']['input']>;
  chapters_type?: InputMaybe<Scalars['String']['input']>;
  chapters_url?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  episode_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_title?: InputMaybe<Scalars['String']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  link?: InputMaybe<Scalars['String']['input']>;
  media_length?: InputMaybe<Scalars['bigint']['input']>;
  media_type?: InputMaybe<Scalars['String']['input']>;
  media_url?: InputMaybe<Scalars['String']['input']>;
  podcast_id?: InputMaybe<Scalars['uuid']['input']>;
  pub_date?: InputMaybe<Scalars['timestamp']['input']>;
  season?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** order by stddev() on columns of table "episodes" */
export type Episodes_Stddev_Order_By = {
  media_length?: InputMaybe<Order_By>;
  season?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "episodes" */
export type Episodes_Stddev_Pop_Order_By = {
  media_length?: InputMaybe<Order_By>;
  season?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "episodes" */
export type Episodes_Stddev_Samp_Order_By = {
  media_length?: InputMaybe<Order_By>;
  season?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "episodes" */
export type Episodes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Episodes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Episodes_Stream_Cursor_Value_Input = {
  author?: InputMaybe<Scalars['String']['input']>;
  chapters_type?: InputMaybe<Scalars['String']['input']>;
  chapters_url?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  episode_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_title?: InputMaybe<Scalars['String']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  link?: InputMaybe<Scalars['String']['input']>;
  media_length?: InputMaybe<Scalars['bigint']['input']>;
  media_type?: InputMaybe<Scalars['String']['input']>;
  media_url?: InputMaybe<Scalars['String']['input']>;
  podcast_id?: InputMaybe<Scalars['uuid']['input']>;
  pub_date?: InputMaybe<Scalars['timestamp']['input']>;
  season?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "episodes" */
export type Episodes_Sum_Order_By = {
  media_length?: InputMaybe<Order_By>;
  season?: InputMaybe<Order_By>;
};

/** update columns of table "episodes" */
export enum Episodes_Update_Column {
  /** column name */
  Author = 'author',
  /** column name */
  ChaptersType = 'chapters_type',
  /** column name */
  ChaptersUrl = 'chapters_url',
  /** column name */
  Description = 'description',
  /** column name */
  EpisodeType = 'episode_type',
  /** column name */
  Id = 'id',
  /** column name */
  ImageTitle = 'image_title',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  Link = 'link',
  /** column name */
  MediaLength = 'media_length',
  /** column name */
  MediaType = 'media_type',
  /** column name */
  MediaUrl = 'media_url',
  /** column name */
  PodcastId = 'podcast_id',
  /** column name */
  PubDate = 'pub_date',
  /** column name */
  Season = 'season',
  /** column name */
  Title = 'title'
}

export type Episodes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Episodes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Episodes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Episodes_Bool_Exp;
};

/** order by var_pop() on columns of table "episodes" */
export type Episodes_Var_Pop_Order_By = {
  media_length?: InputMaybe<Order_By>;
  season?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "episodes" */
export type Episodes_Var_Samp_Order_By = {
  media_length?: InputMaybe<Order_By>;
  season?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "episodes" */
export type Episodes_Variance_Order_By = {
  media_length?: InputMaybe<Order_By>;
  season?: InputMaybe<Order_By>;
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

/** Boolean expression to filter rows from the table "persons". All fields are combined with a logical 'AND'. */
export type Persons_Bool_Exp = {
  _and?: InputMaybe<Array<Persons_Bool_Exp>>;
  _not?: InputMaybe<Persons_Bool_Exp>;
  _or?: InputMaybe<Array<Persons_Bool_Exp>>;
  episode_persons?: InputMaybe<Episode_Persons_Bool_Exp>;
  episode_persons_aggregate?: InputMaybe<Episode_Persons_Aggregate_Bool_Exp>;
  href?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  img?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  podcast_persons?: InputMaybe<Podcast_Persons_Bool_Exp>;
  podcast_persons_aggregate?: InputMaybe<Podcast_Persons_Aggregate_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "persons" */
export enum Persons_Constraint {
  /** unique or primary key constraint on columns "id" */
  PersonsPkey = 'persons_pkey'
}

/** input type for incrementing numeric columns in table "persons" */
export type Persons_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "persons" */
export type Persons_Insert_Input = {
  episode_persons?: InputMaybe<Episode_Persons_Arr_Rel_Insert_Input>;
  href?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  podcast_persons?: InputMaybe<Podcast_Persons_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting object relation for remote table "persons" */
export type Persons_Obj_Rel_Insert_Input = {
  data: Persons_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Persons_On_Conflict>;
};

/** on_conflict condition type for table "persons" */
export type Persons_On_Conflict = {
  constraint: Persons_Constraint;
  update_columns?: Array<Persons_Update_Column>;
  where?: InputMaybe<Persons_Bool_Exp>;
};

/** Ordering options when selecting data from "persons". */
export type Persons_Order_By = {
  episode_persons_aggregate?: InputMaybe<Episode_Persons_Aggregate_Order_By>;
  href?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  podcast_persons_aggregate?: InputMaybe<Podcast_Persons_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: persons */
export type Persons_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "persons" */
export enum Persons_Select_Column {
  /** column name */
  Href = 'href',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "persons" */
export type Persons_Set_Input = {
  href?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "persons" */
export type Persons_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Persons_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Persons_Stream_Cursor_Value_Input = {
  href?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "persons" */
export enum Persons_Update_Column {
  /** column name */
  Href = 'href',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role'
}

export type Persons_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Persons_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Persons_Set_Input>;
  /** filter the rows which have to be updated */
  where: Persons_Bool_Exp;
};

export type Podcast_Persons_Aggregate_Bool_Exp = {
  count?: InputMaybe<Podcast_Persons_Aggregate_Bool_Exp_Count>;
};

export type Podcast_Persons_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Podcast_Persons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Podcast_Persons_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "podcast_persons" */
export type Podcast_Persons_Aggregate_Order_By = {
  avg?: InputMaybe<Podcast_Persons_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Podcast_Persons_Max_Order_By>;
  min?: InputMaybe<Podcast_Persons_Min_Order_By>;
  stddev?: InputMaybe<Podcast_Persons_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Podcast_Persons_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Podcast_Persons_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Podcast_Persons_Sum_Order_By>;
  var_pop?: InputMaybe<Podcast_Persons_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Podcast_Persons_Var_Samp_Order_By>;
  variance?: InputMaybe<Podcast_Persons_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "podcast_persons" */
export type Podcast_Persons_Arr_Rel_Insert_Input = {
  data: Array<Podcast_Persons_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Podcast_Persons_On_Conflict>;
};

/** order by avg() on columns of table "podcast_persons" */
export type Podcast_Persons_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "podcast_persons". All fields are combined with a logical 'AND'. */
export type Podcast_Persons_Bool_Exp = {
  _and?: InputMaybe<Array<Podcast_Persons_Bool_Exp>>;
  _not?: InputMaybe<Podcast_Persons_Bool_Exp>;
  _or?: InputMaybe<Array<Podcast_Persons_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Int_Comparison_Exp>;
  podcast?: InputMaybe<Podcasts_Bool_Exp>;
  podcast_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "podcast_persons" */
export enum Podcast_Persons_Constraint {
  /** unique or primary key constraint on columns "id" */
  PodcastPersonsPkey = 'podcast_persons_pkey'
}

/** input type for incrementing numeric columns in table "podcast_persons" */
export type Podcast_Persons_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  person_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "podcast_persons" */
export type Podcast_Persons_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['Int']['input']>;
  podcast?: InputMaybe<Podcasts_Obj_Rel_Insert_Input>;
  podcast_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** order by max() on columns of table "podcast_persons" */
export type Podcast_Persons_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  podcast_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "podcast_persons" */
export type Podcast_Persons_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  podcast_id?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "podcast_persons" */
export type Podcast_Persons_On_Conflict = {
  constraint: Podcast_Persons_Constraint;
  update_columns?: Array<Podcast_Persons_Update_Column>;
  where?: InputMaybe<Podcast_Persons_Bool_Exp>;
};

/** Ordering options when selecting data from "podcast_persons". */
export type Podcast_Persons_Order_By = {
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  podcast?: InputMaybe<Podcasts_Order_By>;
  podcast_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: podcast_persons */
export type Podcast_Persons_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "podcast_persons" */
export enum Podcast_Persons_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  PodcastId = 'podcast_id'
}

/** input type for updating data in table "podcast_persons" */
export type Podcast_Persons_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  person_id?: InputMaybe<Scalars['Int']['input']>;
  podcast_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** order by stddev() on columns of table "podcast_persons" */
export type Podcast_Persons_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "podcast_persons" */
export type Podcast_Persons_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "podcast_persons" */
export type Podcast_Persons_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "podcast_persons" */
export type Podcast_Persons_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Podcast_Persons_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Podcast_Persons_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  person_id?: InputMaybe<Scalars['Int']['input']>;
  podcast_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** order by sum() on columns of table "podcast_persons" */
export type Podcast_Persons_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** update columns of table "podcast_persons" */
export enum Podcast_Persons_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  PodcastId = 'podcast_id'
}

export type Podcast_Persons_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Podcast_Persons_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Podcast_Persons_Set_Input>;
  /** filter the rows which have to be updated */
  where: Podcast_Persons_Bool_Exp;
};

/** order by var_pop() on columns of table "podcast_persons" */
export type Podcast_Persons_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "podcast_persons" */
export type Podcast_Persons_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "podcast_persons" */
export type Podcast_Persons_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "podcasts". All fields are combined with a logical 'AND'. */
export type Podcasts_Bool_Exp = {
  _and?: InputMaybe<Array<Podcasts_Bool_Exp>>;
  _not?: InputMaybe<Podcasts_Bool_Exp>;
  _or?: InputMaybe<Array<Podcasts_Bool_Exp>>;
  author?: InputMaybe<String_Comparison_Exp>;
  categories?: InputMaybe<String_Array_Comparison_Exp>;
  copyright?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  episodes?: InputMaybe<Episodes_Bool_Exp>;
  episodes_aggregate?: InputMaybe<Episodes_Aggregate_Bool_Exp>;
  funding_url?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_link?: InputMaybe<String_Comparison_Exp>;
  image_title?: InputMaybe<String_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  keywords?: InputMaybe<String_Array_Comparison_Exp>;
  language?: InputMaybe<String_Comparison_Exp>;
  owner_email?: InputMaybe<String_Comparison_Exp>;
  owner_name?: InputMaybe<String_Comparison_Exp>;
  podcast_persons?: InputMaybe<Podcast_Persons_Bool_Exp>;
  podcast_persons_aggregate?: InputMaybe<Podcast_Persons_Aggregate_Bool_Exp>;
  pub_date?: InputMaybe<Timestamp_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  transistor_url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "podcasts" */
export enum Podcasts_Constraint {
  /** unique or primary key constraint on columns "id" */
  PodcastsPkey = 'podcasts_pkey',
  /** unique or primary key constraint on columns "slug" */
  PodcastsSlugKey = 'podcasts_slug_key'
}

/** input type for inserting data into table "podcasts" */
export type Podcasts_Insert_Input = {
  author?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  copyright?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  episodes?: InputMaybe<Episodes_Arr_Rel_Insert_Input>;
  funding_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_link?: InputMaybe<Scalars['String']['input']>;
  image_title?: InputMaybe<Scalars['String']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  language?: InputMaybe<Scalars['String']['input']>;
  owner_email?: InputMaybe<Scalars['String']['input']>;
  owner_name?: InputMaybe<Scalars['String']['input']>;
  podcast_persons?: InputMaybe<Podcast_Persons_Arr_Rel_Insert_Input>;
  pub_date?: InputMaybe<Scalars['timestamp']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  transistor_url?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting object relation for remote table "podcasts" */
export type Podcasts_Obj_Rel_Insert_Input = {
  data: Podcasts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Podcasts_On_Conflict>;
};

/** on_conflict condition type for table "podcasts" */
export type Podcasts_On_Conflict = {
  constraint: Podcasts_Constraint;
  update_columns?: Array<Podcasts_Update_Column>;
  where?: InputMaybe<Podcasts_Bool_Exp>;
};

/** Ordering options when selecting data from "podcasts". */
export type Podcasts_Order_By = {
  author?: InputMaybe<Order_By>;
  categories?: InputMaybe<Order_By>;
  copyright?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  episodes_aggregate?: InputMaybe<Episodes_Aggregate_Order_By>;
  funding_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_link?: InputMaybe<Order_By>;
  image_title?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  owner_email?: InputMaybe<Order_By>;
  owner_name?: InputMaybe<Order_By>;
  podcast_persons_aggregate?: InputMaybe<Podcast_Persons_Aggregate_Order_By>;
  pub_date?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  transistor_url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: podcasts */
export type Podcasts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "podcasts" */
export enum Podcasts_Select_Column {
  /** column name */
  Author = 'author',
  /** column name */
  Categories = 'categories',
  /** column name */
  Copyright = 'copyright',
  /** column name */
  Description = 'description',
  /** column name */
  FundingUrl = 'funding_url',
  /** column name */
  Id = 'id',
  /** column name */
  ImageLink = 'image_link',
  /** column name */
  ImageTitle = 'image_title',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  Language = 'language',
  /** column name */
  OwnerEmail = 'owner_email',
  /** column name */
  OwnerName = 'owner_name',
  /** column name */
  PubDate = 'pub_date',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
  /** column name */
  TransistorUrl = 'transistor_url'
}

/** input type for updating data in table "podcasts" */
export type Podcasts_Set_Input = {
  author?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  copyright?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  funding_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_link?: InputMaybe<Scalars['String']['input']>;
  image_title?: InputMaybe<Scalars['String']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  language?: InputMaybe<Scalars['String']['input']>;
  owner_email?: InputMaybe<Scalars['String']['input']>;
  owner_name?: InputMaybe<Scalars['String']['input']>;
  pub_date?: InputMaybe<Scalars['timestamp']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  transistor_url?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "podcasts" */
export type Podcasts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Podcasts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Podcasts_Stream_Cursor_Value_Input = {
  author?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  copyright?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  funding_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_link?: InputMaybe<Scalars['String']['input']>;
  image_title?: InputMaybe<Scalars['String']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  language?: InputMaybe<Scalars['String']['input']>;
  owner_email?: InputMaybe<Scalars['String']['input']>;
  owner_name?: InputMaybe<Scalars['String']['input']>;
  pub_date?: InputMaybe<Scalars['timestamp']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  transistor_url?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "podcasts" */
export enum Podcasts_Update_Column {
  /** column name */
  Author = 'author',
  /** column name */
  Categories = 'categories',
  /** column name */
  Copyright = 'copyright',
  /** column name */
  Description = 'description',
  /** column name */
  FundingUrl = 'funding_url',
  /** column name */
  Id = 'id',
  /** column name */
  ImageLink = 'image_link',
  /** column name */
  ImageTitle = 'image_title',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  Language = 'language',
  /** column name */
  OwnerEmail = 'owner_email',
  /** column name */
  OwnerName = 'owner_name',
  /** column name */
  PubDate = 'pub_date',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
  /** column name */
  TransistorUrl = 'transistor_url'
}

export type Podcasts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Podcasts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Podcasts_Bool_Exp;
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

export type GetEpisodeQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetEpisodeQuery = { __typename?: 'query_root', episodes_by_pk?: { __typename?: 'episodes', id: any, author?: string | null, description?: string | null, episode_type?: string | null, image_url?: string | null, image_title?: string | null, keywords?: Array<string> | null, link?: string | null, media_length?: any | null, media_type?: string | null, media_url?: string | null, pub_date?: any | null, season?: number | null, title?: string | null, chapters_type?: string | null, chapters_url?: string | null, podcast_id?: any | null } | null };

export type UpdateEpisodeMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
  image_title: Scalars['String']['input'];
  image_url: Scalars['String']['input'];
  keywords: Array<Scalars['String']['input']> | Scalars['String']['input'];
  episode_type: Scalars['String']['input'];
}>;


export type UpdateEpisodeMutation = { __typename?: 'mutation_root', update_episodes_by_pk?: { __typename?: 'episodes', id: any, description?: string | null, title?: string | null, image_title?: string | null, image_url?: string | null, keywords?: Array<string> | null, episode_type?: string | null } | null };

export type GetPodcastQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPodcastQuery = { __typename?: 'query_root', podcasts: Array<{ __typename?: 'podcasts', id: any, title?: string | null, description?: string | null, author?: string | null, categories?: Array<string> | null, copyright?: string | null, funding_url?: string | null, language?: string | null, image_title?: string | null, image_url?: string | null, keywords?: Array<string> | null, owner_email?: string | null, owner_name?: string | null, episodes: Array<{ __typename?: 'episodes', id: any, title?: string | null, author?: string | null, pub_date?: any | null, season?: number | null, image_url?: string | null, episode_type?: string | null }> }> };

export type UpdatePodcastMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  description: Scalars['String']['input'];
  author: Scalars['String']['input'];
  categories: Array<Scalars['String']['input']> | Scalars['String']['input'];
  copyright: Scalars['String']['input'];
  funding_url: Scalars['String']['input'];
  image_title: Scalars['String']['input'];
  image_url: Scalars['String']['input'];
  keywords: Array<Scalars['String']['input']> | Scalars['String']['input'];
  owner_email: Scalars['String']['input'];
  owner_name: Scalars['String']['input'];
}>;


export type UpdatePodcastMutation = { __typename?: 'mutation_root', update_podcasts_by_pk?: { __typename?: 'podcasts', id: any, description?: string | null, author?: string | null, categories?: Array<string> | null, copyright?: string | null, funding_url?: string | null, image_title?: string | null, image_url?: string | null, keywords?: Array<string> | null, owner_email?: string | null, owner_name?: string | null } | null };

export type GetPodcastsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPodcastsQuery = { __typename?: 'query_root', podcasts: Array<{ __typename?: 'podcasts', id: any, title?: string | null, slug?: string | null }> };


export const GetEpisodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEpisode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"episodes_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"episode_type"}},{"kind":"Field","name":{"kind":"Name","value":"image_url"}},{"kind":"Field","name":{"kind":"Name","value":"image_title"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"media_length"}},{"kind":"Field","name":{"kind":"Name","value":"media_type"}},{"kind":"Field","name":{"kind":"Name","value":"media_url"}},{"kind":"Field","name":{"kind":"Name","value":"pub_date"}},{"kind":"Field","name":{"kind":"Name","value":"season"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"chapters_type"}},{"kind":"Field","name":{"kind":"Name","value":"chapters_url"}},{"kind":"Field","name":{"kind":"Name","value":"podcast_id"}}]}}]}}]} as unknown as DocumentNode<GetEpisodeQuery, GetEpisodeQueryVariables>;
export const UpdateEpisodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateEpisode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image_title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image_url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keywords"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"episode_type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_episodes_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image_title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image_title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image_url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image_url"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"keywords"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keywords"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"episode_type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"episode_type"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image_title"}},{"kind":"Field","name":{"kind":"Name","value":"image_url"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"episode_type"}}]}}]}}]} as unknown as DocumentNode<UpdateEpisodeMutation, UpdateEpisodeMutationVariables>;
export const GetPodcastDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPodcast"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"podcasts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"copyright"}},{"kind":"Field","name":{"kind":"Name","value":"funding_url"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"image_title"}},{"kind":"Field","name":{"kind":"Name","value":"image_url"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"owner_email"}},{"kind":"Field","name":{"kind":"Name","value":"owner_name"}},{"kind":"Field","name":{"kind":"Name","value":"episodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pub_date"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"pub_date"}},{"kind":"Field","name":{"kind":"Name","value":"season"}},{"kind":"Field","name":{"kind":"Name","value":"image_url"}},{"kind":"Field","name":{"kind":"Name","value":"episode_type"}}]}}]}}]}}]} as unknown as DocumentNode<GetPodcastQuery, GetPodcastQueryVariables>;
export const UpdatePodcastDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePodcast"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"author"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categories"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"copyright"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"funding_url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image_title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image_url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keywords"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner_email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_podcasts_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"Variable","name":{"kind":"Name","value":"author"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categories"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categories"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"copyright"},"value":{"kind":"Variable","name":{"kind":"Name","value":"copyright"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"funding_url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"funding_url"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image_title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image_title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image_url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image_url"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"keywords"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keywords"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"owner_email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner_email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"owner_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner_name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"copyright"}},{"kind":"Field","name":{"kind":"Name","value":"funding_url"}},{"kind":"Field","name":{"kind":"Name","value":"image_title"}},{"kind":"Field","name":{"kind":"Name","value":"image_url"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"owner_email"}},{"kind":"Field","name":{"kind":"Name","value":"owner_name"}}]}}]}}]} as unknown as DocumentNode<UpdatePodcastMutation, UpdatePodcastMutationVariables>;
export const GetPodcastsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPodcasts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"podcasts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetPodcastsQuery, GetPodcastsQueryVariables>;