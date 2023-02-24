import { FormFieldModel } from "../../types";
import * as yup from "yup";
import { GetPersonSchema } from "../../__generated__/graphql";

export type BasicDetailsFormModel = {
  formId: string;
  formFields: BasicDetailsFormFieldsModel;
};

export type BasicDetailsFormFieldsModel = {
  username: FormFieldModel;
  password: FormFieldModel;
  organisationId: FormFieldModel;
};

export const basicDetailsFormModel = {
  formId: "basicDetailsForm",
  formFields: {
    surName: {
      label: "Surname",
      name: "surName",
    },
    givenName: {
      label: "Given name",
      name: "givenName",
    },
    flgGender: {
      label: "Gender",
      name: "flgGender",
    },
    flgMaritalStatus: {
      label: "Marital status",
      name: "flgMaritalStatus",
    },
  },
};

export function basicDetailsormInitialValues(
  data: GetPersonSchema
): BasicDetailsormValueModel {
  return {
    [basicDetailsFormModel.formFields.surName.name]: data.surName,
    [basicDetailsFormModel.formFields.givenName.name]: data.givenName,
    [basicDetailsFormModel.formFields.flgGender.name]: data.flgGender,
    [basicDetailsFormModel.formFields.flgMaritalStatus.name]:
      data.flgMaritalStatus,
  } as BasicDetailsormValueModel;
}

export type BasicDetailsormValueModel = {
  surName: string;
  givenName: string;
  flgGender: string;
  flgMaritalStatus: string;
};

export const BasicDetailsormValidationSchema = yup.object({
  [basicDetailsFormModel.formFields.surName.name]: yup
    .string()
    .required("required"),
  [basicDetailsFormModel.formFields.givenName.name]: yup
    .string()
    .required("required"),
  [basicDetailsFormModel.formFields.flgGender.name]: yup
    .string()
    .required("required"),
  [basicDetailsFormModel.formFields.flgMaritalStatus.name]: yup
    .string()
    .required("required"),
});
