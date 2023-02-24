import { FormFieldModel } from "../../types";
import * as yup from "yup";
import { GetPersonSchema } from "../../__generated__/graphql";

export type ContactDetailsFormModel = {
  formId: string;
  formFields: ContactDetailsFormFieldsModel;
};

export type ContactDetailsFormFieldsModel = {
  email: FormFieldModel;
  cellNumber1: FormFieldModel;
  cellNumber2: FormFieldModel;
};

export const contactDetailsFormModel = {
  formId: "contactDetailsForm",
  formFields: {
    cellNumber1: {
      label: "Tel. Number",
      name: "cellNumber1",
    },
    email: {
      label: "Email",
      name: "email",
    },
    cellNumber2: {
      label: "Alternative Tel. Number",
      name: "cellNumber2",
    },
  },
};

export function contactDetailsormInitialValues(
  data: GetPersonSchema
): ContactDetailsormValueModel {
  return {
    [contactDetailsFormModel.formFields.email.name]: data.email,
    [contactDetailsFormModel.formFields.cellNumber1.name]: data.cellNumber1,
    [contactDetailsFormModel.formFields.cellNumber2.name]: data.cellNumber2,
  } as ContactDetailsormValueModel;
}

export type ContactDetailsormValueModel = {
  email: string;
  cellNumber1: string;
  cellNumber2: string;
};

export const contactDetailsormValidationSchema = yup.object({
  [contactDetailsFormModel.formFields.email.name]: yup
    .string()
    .required("required"),
  [contactDetailsFormModel.formFields.cellNumber1.name]: yup
    .string()
    .required("required"),
  [contactDetailsFormModel.formFields.cellNumber2.name]: yup
    .string()
    .required("required"),
});
