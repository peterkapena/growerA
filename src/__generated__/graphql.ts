/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddOrUpdateFlag = {
  _id?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  description: Scalars['String'];
  flagTypeId: Scalars['Float'];
};

export type AddProductSchemaInput = {
  flgProductType: Scalars['String'];
  quantity: Scalars['Float'];
  unitPrice: Scalars['Float'];
};

export type AdminGetUsersSchema = {
  __typename?: 'AdminGetUsersSchema';
  _id: Scalars['String'];
  adminApproved: Scalars['Boolean'];
  entPersonName?: Maybe<Scalars['String']>;
  organisationName: Scalars['String'];
  username: Scalars['String'];
};

export type CreateUserInput = {
  entPersonId?: InputMaybe<Scalars['String']>;
  organisationId: Scalars['String'];
  password: Scalars['String'];
  roles: Array<Scalars['String']>;
  username: Scalars['String'];
};

export type EditAddressDetailsSchema = {
  _id: Scalars['String'];
  line1: Scalars['String'];
  line2: Scalars['String'];
  line3: Scalars['String'];
  line4: Scalars['String'];
  line5: Scalars['String'];
  line6: Scalars['String'];
};

export type EditContactDetailsSchema = {
  _id: Scalars['String'];
  cellNumber1: Scalars['String'];
  cellNumber2: Scalars['String'];
  email: Scalars['String'];
};

export type EditPersonBasicDetailsSchema = {
  _id: Scalars['String'];
  flgGender: Scalars['String'];
  flgMaritalStatus: Scalars['String'];
  givenName: Scalars['String'];
  surName: Scalars['String'];
};

export type FlagSchema = {
  __typename?: 'FlagSchema';
  _id: Scalars['String'];
  archived: Scalars['Boolean'];
  description: Scalars['String'];
  flagTypeId: Scalars['Float'];
};

export type GetFlagByTypeAndDescription = {
  description: Scalars['String'];
  type: Scalars['Float'];
};

export type GetFlagSchema = {
  __typename?: 'GetFlagSchema';
  _id: Scalars['String'];
  description: Scalars['String'];
  flagType: Scalars['String'];
  flagTypeId: Scalars['Float'];
};

export type GetFlagType = {
  __typename?: 'GetFlagType';
  id: Scalars['String'];
  typeName: Scalars['String'];
};

export type GetOrganisationsSchema = {
  __typename?: 'GetOrganisationsSchema';
  _id: Scalars['String'];
  name: Scalars['String'];
};

export type GetPersonSchema = {
  __typename?: 'GetPersonSchema';
  _id: Scalars['String'];
  addressId: Scalars['String'];
  cellNumber1: Scalars['String'];
  cellNumber2: Scalars['String'];
  contactId: Scalars['String'];
  email: Scalars['String'];
  flgGender: Scalars['String'];
  flgMaritalStatus: Scalars['String'];
  gender: Scalars['String'];
  givenName: Scalars['String'];
  line1: Scalars['String'];
  line2: Scalars['String'];
  line3: Scalars['String'];
  line4: Scalars['String'];
  line5: Scalars['String'];
  line6: Scalars['String'];
  maritalStatus: Scalars['String'];
  organisation: Scalars['String'];
  organisationId: Scalars['String'];
  surName: Scalars['String'];
};

export type GetPersonsSchema = {
  __typename?: 'GetPersonsSchema';
  _id: Scalars['String'];
  gender: Scalars['String'];
  givenName: Scalars['String'];
  maritalStatus: Scalars['String'];
  organisation: Scalars['String'];
  surName: Scalars['String'];
};

export type GetProductsSchema = {
  __typename?: 'GetProductsSchema';
  _id: Scalars['String'];
  name: Scalars['String'];
  organisationId: Scalars['String'];
  organisationName: Scalars['String'];
  quantity: Scalars['Float'];
  type: Scalars['String'];
  unitPrice: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addOrUpdateFlag: Scalars['Boolean'];
  addProduct: ProductSchema;
  createUser: UserSchema;
  editAddressDetails: Scalars['Boolean'];
  editContactDetails: Scalars['Boolean'];
  editPersonBasicDetails: Scalars['Boolean'];
  editProduct: Scalars['Boolean'];
  register: RegisterSchema;
  signin: SigninOutput;
  toggleAdminApproved: Scalars['Boolean'];
  verifyToken: VerifyTokenSchema;
};


export type MutationAddOrUpdateFlagArgs = {
  input: AddOrUpdateFlag;
};


export type MutationAddProductArgs = {
  input: AddProductSchemaInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationEditAddressDetailsArgs = {
  input: EditAddressDetailsSchema;
};


export type MutationEditContactDetailsArgs = {
  input: EditContactDetailsSchema;
};


export type MutationEditPersonBasicDetailsArgs = {
  input: EditPersonBasicDetailsSchema;
};


export type MutationEditProductArgs = {
  id: Scalars['String'];
  input: AddProductSchemaInput;
};


export type MutationRegisterArgs = {
  input: RegisterSchemaInput;
};


export type MutationSigninArgs = {
  input: SigninInput;
};


export type MutationToggleAdminApprovedArgs = {
  approved: Scalars['Boolean'];
  id: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  input: Scalars['String'];
};

export type ProductSchema = {
  __typename?: 'ProductSchema';
  _id: Scalars['String'];
  flgProductType: Scalars['String'];
  organisationId: Scalars['String'];
  quantity: Scalars['Float'];
  unitPrice: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  adminGetUsers: Array<AdminGetUsersSchema>;
  getFlag: GetFlagSchema;
  getFlagByTypeAndDescription: FlagSchema;
  getFlagTypes: Array<GetFlagType>;
  getFlagsByType: Array<FlagSchema>;
  getOrganisations: Array<GetOrganisationsSchema>;
  getPerson: GetPersonSchema;
  getPersons: Array<GetPersonsSchema>;
  getProduct: GetProductsSchema;
  getProducts: Array<GetProductsSchema>;
  getProductsByOrganisation: Array<GetProductsSchema>;
  testQuery: Scalars['String'];
};


export type QueryGetFlagArgs = {
  input: Scalars['String'];
};


export type QueryGetFlagByTypeAndDescriptionArgs = {
  input: GetFlagByTypeAndDescription;
};


export type QueryGetFlagsByTypeArgs = {
  input: Scalars['Float'];
};


export type QueryGetPersonArgs = {
  input: Scalars['String'];
};


export type QueryGetProductArgs = {
  input: Scalars['String'];
};


export type QueryGetProductsByOrganisationArgs = {
  input: Scalars['String'];
};

export type RegisterAddressSchema = {
  __typename?: 'RegisterAddressSchema';
  _id: Scalars['String'];
  line1: Scalars['String'];
  line2: Scalars['String'];
  line3: Scalars['String'];
  line4: Scalars['String'];
  line5: Scalars['String'];
  line6: Scalars['String'];
};

export type RegisterAddressSchemaInput = {
  line1: Scalars['String'];
  line2: Scalars['String'];
  line3: Scalars['String'];
  line4: Scalars['String'];
  line5: Scalars['String'];
  line6: Scalars['String'];
};

export type RegisterContactSchema = {
  __typename?: 'RegisterContactSchema';
  _id: Scalars['String'];
  cellNumber: Scalars['String'];
  cellNumber2: Scalars['String'];
  email: Scalars['String'];
};

export type RegisterContactSchemaInput = {
  cellNumber: Scalars['String'];
  cellNumber2: Scalars['String'];
  email: Scalars['String'];
};

export type RegisterOrganisationSchema = {
  __typename?: 'RegisterOrganisationSchema';
  _id: Scalars['String'];
  address: RegisterAddressSchema;
  contact: RegisterContactSchema;
  name: Scalars['String'];
};

export type RegisterOrganisationSchemaInput = {
  address: RegisterAddressSchemaInput;
  contact: RegisterContactSchemaInput;
  name: Scalars['String'];
  organisationType: Scalars['Float'];
};

export type RegisterPersonSchema = {
  __typename?: 'RegisterPersonSchema';
  _id: Scalars['String'];
  address: RegisterAddressSchema;
  contact: RegisterContactSchema;
  dob: Scalars['String'];
  flgGender: Scalars['String'];
  flgMaritalStatus: Scalars['String'];
  givenName: Scalars['String'];
  surName: Scalars['String'];
};

export type RegisterPersonSchemaInput = {
  address: RegisterAddressSchemaInput;
  contact: RegisterContactSchemaInput;
  dob: Scalars['String'];
  flgGender: Scalars['String'];
  flgMaritalStatus: Scalars['String'];
  givenName: Scalars['String'];
  surName: Scalars['String'];
};

export type RegisterSchema = {
  __typename?: 'RegisterSchema';
  organisation: RegisterOrganisationSchema;
  person: RegisterPersonSchema;
};

export type RegisterSchemaInput = {
  organisation: RegisterOrganisationSchemaInput;
  password: Scalars['String'];
  person: RegisterPersonSchemaInput;
  username: Scalars['String'];
};

export type SigninInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SigninOutput = {
  __typename?: 'SigninOutput';
  email?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  surName?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserSchema = {
  __typename?: 'UserSchema';
  _id: Scalars['String'];
  adminApproved: Scalars['Boolean'];
  entPersonId?: Maybe<Scalars['String']>;
  organisationId: Scalars['String'];
  password: Scalars['String'];
  roles: Array<Scalars['String']>;
  username: Scalars['String'];
};

export type VerifyTokenSchema = {
  __typename?: 'VerifyTokenSchema';
  email?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  isValid: Scalars['Boolean'];
  organisationId: Scalars['String'];
  surName?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type EditAddressDetailsMutationVariables = Exact<{
  input: EditAddressDetailsSchema;
}>;


export type EditAddressDetailsMutation = { __typename?: 'Mutation', editAddressDetails: boolean };

export type GetFlagsByTypeQueryVariables = Exact<{
  input: Scalars['Float'];
}>;


export type GetFlagsByTypeQuery = { __typename?: 'Query', getFlagsByType: Array<{ __typename?: 'FlagSchema', description: string, _id: string }> };

export type EditPersonBasicDetailsMutationVariables = Exact<{
  input: EditPersonBasicDetailsSchema;
}>;


export type EditPersonBasicDetailsMutation = { __typename?: 'Mutation', editPersonBasicDetails: boolean };

export type EditContactDetailsMutationVariables = Exact<{
  input: EditContactDetailsSchema;
}>;


export type EditContactDetailsMutation = { __typename?: 'Mutation', editContactDetails: boolean };

export type VerifyTokenMutationVariables = Exact<{
  input: Scalars['String'];
}>;


export type VerifyTokenMutation = { __typename?: 'Mutation', verifyToken: { __typename?: 'VerifyTokenSchema', username?: string | null, token: string, email?: string | null, surName?: string | null, givenName?: string | null, isValid: boolean, organisationId: string } };

export type GetFlagQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type GetFlagQuery = { __typename?: 'Query', getFlag: { __typename?: 'GetFlagSchema', flagTypeId: number, flagType: string, description: string, _id: string } };

export type AddOrUpdateFlagMutationVariables = Exact<{
  input: AddOrUpdateFlag;
}>;


export type AddOrUpdateFlagMutation = { __typename?: 'Mutation', addOrUpdateFlag: boolean };

export type GetFlagTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFlagTypesQuery = { __typename?: 'Query', getFlagTypes: Array<{ __typename?: 'GetFlagType', id: string, typeName: string }> };

export type GetFlagsByType_Flags_PageQueryVariables = Exact<{
  input: Scalars['Float'];
}>;


export type GetFlagsByType_Flags_PageQuery = { __typename?: 'Query', getFlagsByType: Array<{ __typename?: 'FlagSchema', description: string, _id: string }> };

export type RegisterMutationVariables = Exact<{
  input: RegisterSchemaInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterSchema', person: { __typename?: 'RegisterPersonSchema', surName: string, givenName: string }, organisation: { __typename?: 'RegisterOrganisationSchema', name: string } } };

export type SigninMutationVariables = Exact<{
  input: SigninInput;
}>;


export type SigninMutation = { __typename?: 'Mutation', signin: { __typename?: 'SigninOutput', username?: string | null, token?: string | null, email?: string | null, surName?: string | null, givenName?: string | null, message?: string | null } };

export type GetProductsByOrganisationQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type GetProductsByOrganisationQuery = { __typename?: 'Query', getProductsByOrganisation: Array<{ __typename?: 'GetProductsSchema', unitPrice: number, quantity: number, name: string, _id: string }> };

export type GetPersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPersonsQuery = { __typename?: 'Query', getPersons: Array<{ __typename?: 'GetPersonsSchema', _id: string, surName: string, givenName: string, gender: string, maritalStatus: string, organisation: string }> };

export type GetPersonQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type GetPersonQuery = { __typename?: 'Query', getPerson: { __typename?: 'GetPersonSchema', _id: string, surName: string, givenName: string, gender: string, maritalStatus: string, organisation: string, email: string, cellNumber1: string, cellNumber2: string, line1: string, line2: string, line3: string, line4: string, line5: string, line6: string, organisationId: string, contactId: string, addressId: string } };

export type GetPersonEditQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type GetPersonEditQuery = { __typename?: 'Query', getPerson: { __typename?: 'GetPersonSchema', _id: string, surName: string, givenName: string, gender: string, maritalStatus: string, organisation: string, email: string, cellNumber1: string, cellNumber2: string, line1: string, line2: string, line3: string, line4: string, line5: string, line6: string, organisationId: string, contactId: string, addressId: string, flgGender: string, flgMaritalStatus: string } };

export type AddProductMutationVariables = Exact<{
  input: AddProductSchemaInput;
}>;


export type AddProductMutation = { __typename?: 'Mutation', addProduct: { __typename?: 'ProductSchema', quantity: number, organisationId: string, flgProductType: string, _id: string } };

export type GetProductQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type GetProductQuery = { __typename?: 'Query', getProduct: { __typename?: 'GetProductsSchema', _id: string, quantity: number, type: string, name: string, unitPrice: number } };

export type EditProductMutationVariables = Exact<{
  input: AddProductSchemaInput;
  id: Scalars['String'];
}>;


export type EditProductMutation = { __typename?: 'Mutation', editProduct: boolean };

export type Add_UserQueryVariables = Exact<{ [key: string]: never; }>;


export type Add_UserQuery = { __typename?: 'Query', getOrganisations: Array<{ __typename?: 'GetOrganisationsSchema', _id: string, name: string }>, getPersons: Array<{ __typename?: 'GetPersonsSchema', givenName: string, surName: string, _id: string }> };

export type AdminGetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetUsersQuery = { __typename?: 'Query', adminGetUsers: Array<{ __typename?: 'AdminGetUsersSchema', _id: string, entPersonName?: string | null, organisationName: string, username: string, adminApproved: boolean }> };

export type ToggleAdminApprovedMutationVariables = Exact<{
  id: Scalars['String'];
  approved: Scalars['Boolean'];
}>;


export type ToggleAdminApprovedMutation = { __typename?: 'Mutation', toggleAdminApproved: boolean };


export const EditAddressDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditAddressDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditAddressDetailsSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editAddressDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<EditAddressDetailsMutation, EditAddressDetailsMutationVariables>;
export const GetFlagsByTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFlagsByType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFlagsByType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<GetFlagsByTypeQuery, GetFlagsByTypeQueryVariables>;
export const EditPersonBasicDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditPersonBasicDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditPersonBasicDetailsSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editPersonBasicDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<EditPersonBasicDetailsMutation, EditPersonBasicDetailsMutationVariables>;
export const EditContactDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditContactDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditContactDetailsSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editContactDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<EditContactDetailsMutation, EditContactDetailsMutationVariables>;
export const VerifyTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"isValid"}},{"kind":"Field","name":{"kind":"Name","value":"organisationId"}}]}}]}}]} as unknown as DocumentNode<VerifyTokenMutation, VerifyTokenMutationVariables>;
export const GetFlagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFlag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFlag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flagTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"flagType"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<GetFlagQuery, GetFlagQueryVariables>;
export const AddOrUpdateFlagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddOrUpdateFlag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddOrUpdateFlag"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addOrUpdateFlag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<AddOrUpdateFlagMutation, AddOrUpdateFlagMutationVariables>;
export const GetFlagTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFlagTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFlagTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeName"}}]}}]}}]} as unknown as DocumentNode<GetFlagTypesQuery, GetFlagTypesQueryVariables>;
export const GetFlagsByType_Flags_PageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFlagsByType_Flags_Page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFlagsByType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<GetFlagsByType_Flags_PageQuery, GetFlagsByType_Flags_PageQueryVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterSchemaInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"givenName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organisation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const SigninDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SigninInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<SigninMutation, SigninMutationVariables>;
export const GetProductsByOrganisationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductsByOrganisation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductsByOrganisation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<GetProductsByOrganisationQuery, GetProductsByOrganisationQueryVariables>;
export const GetPersonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"maritalStatus"}},{"kind":"Field","name":{"kind":"Name","value":"organisation"}}]}}]}}]} as unknown as DocumentNode<GetPersonsQuery, GetPersonsQueryVariables>;
export const GetPersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPerson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"maritalStatus"}},{"kind":"Field","name":{"kind":"Name","value":"organisation"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"cellNumber1"}},{"kind":"Field","name":{"kind":"Name","value":"cellNumber2"}},{"kind":"Field","name":{"kind":"Name","value":"line1"}},{"kind":"Field","name":{"kind":"Name","value":"line2"}},{"kind":"Field","name":{"kind":"Name","value":"line3"}},{"kind":"Field","name":{"kind":"Name","value":"line4"}},{"kind":"Field","name":{"kind":"Name","value":"line5"}},{"kind":"Field","name":{"kind":"Name","value":"line6"}},{"kind":"Field","name":{"kind":"Name","value":"organisationId"}},{"kind":"Field","name":{"kind":"Name","value":"contactId"}},{"kind":"Field","name":{"kind":"Name","value":"addressId"}}]}}]}}]} as unknown as DocumentNode<GetPersonQuery, GetPersonQueryVariables>;
export const GetPersonEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPerson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"maritalStatus"}},{"kind":"Field","name":{"kind":"Name","value":"organisation"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"cellNumber1"}},{"kind":"Field","name":{"kind":"Name","value":"cellNumber2"}},{"kind":"Field","name":{"kind":"Name","value":"line1"}},{"kind":"Field","name":{"kind":"Name","value":"line2"}},{"kind":"Field","name":{"kind":"Name","value":"line3"}},{"kind":"Field","name":{"kind":"Name","value":"line4"}},{"kind":"Field","name":{"kind":"Name","value":"line5"}},{"kind":"Field","name":{"kind":"Name","value":"line6"}},{"kind":"Field","name":{"kind":"Name","value":"organisationId"}},{"kind":"Field","name":{"kind":"Name","value":"contactId"}},{"kind":"Field","name":{"kind":"Name","value":"addressId"}},{"kind":"Field","name":{"kind":"Name","value":"flgGender"}},{"kind":"Field","name":{"kind":"Name","value":"flgMaritalStatus"}}]}}]}}]} as unknown as DocumentNode<GetPersonEditQuery, GetPersonEditQueryVariables>;
export const AddProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddProductSchemaInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"organisationId"}},{"kind":"Field","name":{"kind":"Name","value":"flgProductType"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<AddProductMutation, AddProductMutationVariables>;
export const GetProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}}]}}]}}]} as unknown as DocumentNode<GetProductQuery, GetProductQueryVariables>;
export const EditProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddProductSchemaInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<EditProductMutation, EditProductMutationVariables>;
export const Add_UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ADD_USER"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOrganisations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"getPersons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<Add_UserQuery, Add_UserQueryVariables>;
export const AdminGetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminGetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminGetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"entPersonName"}},{"kind":"Field","name":{"kind":"Name","value":"organisationName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"adminApproved"}}]}}]}}]} as unknown as DocumentNode<AdminGetUsersQuery, AdminGetUsersQueryVariables>;
export const ToggleAdminApprovedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleAdminApproved"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"approved"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleAdminApproved"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"approved"},"value":{"kind":"Variable","name":{"kind":"Name","value":"approved"}}}]}]}}]} as unknown as DocumentNode<ToggleAdminApprovedMutation, ToggleAdminApprovedMutationVariables>;