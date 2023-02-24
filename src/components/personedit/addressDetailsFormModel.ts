import { FormFieldModel } from "../../types";
import * as yup from "yup";
import { GetPersonSchema } from "../../__generated__/graphql";

export type AaddressDetailsFormModel = {
  formId: string;
  formFields: AaddressDetailsFormFieldsModel;
};

export type AaddressDetailsFormFieldsModel = {
  email: FormFieldModel;
  line1: FormFieldModel;
  line2: FormFieldModel;
  line3: FormFieldModel;
  line4: FormFieldModel;
  line5: FormFieldModel;
  line6: FormFieldModel;
};

export const addressDetailsFormModel = {
  formId: "addressDetailsForm",
  formFields: {
    line1: {
      label: "Plot",
      name: "line1",
    },
    line2: {
      label: "Village",
      name: "line2",
    },
    line3: {
      label: "Parish/Ward",
      name: "line3",
    },
    line4: {
      label: "Subcountry",
      name: "line4",
    },
    line5: {
      label: "County/Municipality",
      name: "line5",
    },
    line6: {
      label: "District",
      name: "line6",
    },
  },
};

export function addressDetailsormInitialValues(
  data: GetPersonSchema
): AddressDetailsFormValueModel {
  return {
    [addressDetailsFormModel.formFields.line1.name]: data.line1,
    [addressDetailsFormModel.formFields.line2.name]: data.line2,
    [addressDetailsFormModel.formFields.line3.name]: data.line3,
    [addressDetailsFormModel.formFields.line4.name]: data.line4,
    [addressDetailsFormModel.formFields.line5.name]: data.line5,
    [addressDetailsFormModel.formFields.line6.name]: data.line6,
  } as AddressDetailsFormValueModel;
}

export type AddressDetailsFormValueModel = {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  line6: string;
};

export const addressDetailsormValidationSchema = yup.object({
  [addressDetailsFormModel.formFields.line1.name]: yup
    .string()
    .required("required"),
  [addressDetailsFormModel.formFields.line2.name]: yup
    .string()
    .required("required"),
  [addressDetailsFormModel.formFields.line3.name]: yup
    .string()
    .required("required"),
  [addressDetailsFormModel.formFields.line4.name]: yup
    .string()
    .required("required"),
  [addressDetailsFormModel.formFields.line5.name]: yup
    .string()
    .required("required"),
  [addressDetailsFormModel.formFields.line6.name]: yup
    .string()
    .required("required"),
});
