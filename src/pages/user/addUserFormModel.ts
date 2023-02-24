import { generateName, IS_DEVELOPER } from "../../common";
import { FormFieldModel } from "../../types";
import * as yup from "yup";

export type AddUserFormModel = {
  formId: string;
  formFields: AddUserFormFieldsModel;
};

export type AddUserFormFieldsModel = {
  username: FormFieldModel;
  password: FormFieldModel;
  organisationId: FormFieldModel;
};

export const addUserFormModel = {
  formId: "addUserForm",
  formFields: {
    organisationId: {
      label: "Organisation",
      name: "organisationId",
    },
    personId: {
      label: "Person",
      name: "personId",
    },
    username: {
      label: "Username",
      name: "username",
    },
    password: {
      label: "Password",
      name: "password",
    },
  },
};

export const addUserormInitialValues = {
  [addUserFormModel.formFields.username.name]: IS_DEVELOPER
    ? generateName()
    : "",
  [addUserFormModel.formFields.password.name]: IS_DEVELOPER
    ? "LS0tLS1CRUdJTiBQVUJMSUMgS"
    : "",
  [addUserFormModel.formFields.organisationId.name]: IS_DEVELOPER
    ? generateName()
    : "",
} as AddUserormValueModel;

export type AddUserormValueModel = {
  organisationId: string;
  personId: string;
  username: string;
  password: string;
};

export const addUserormValidationSchema = yup.object({
  [addUserFormModel.formFields.organisationId.name]: yup
    .string()
    .required("required"),
  [addUserFormModel.formFields.personId.name]: yup
    .string()
    .required("required"),
  [addUserFormModel.formFields.username.name]: yup
    .string()
    .required("required"),
  [addUserFormModel.formFields.password.name]: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
