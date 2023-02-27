import { generateName, IS_DEVELOPER } from "../../common";
import { FormFieldModel } from "../../types";
import * as yup from "yup";

export type FlagFormModel = {
  formId: string;
  formFields: FlagFormFieldsModel;
};

export type FlagFormFieldsModel = {
  username: FormFieldModel;
  password: FormFieldModel;
  organisationId: FormFieldModel;
};

export const flagFormModel = {
  formId: "addUserForm",
  formFields: {
    description: {
      label: "Description",
      name: "description",
    },
    // flagTypeId: {
    //   label: "Type",
    //   name: "flagTypeId",
    // },
  },
};

export const flagFormInitialValues = {
  [flagFormModel.formFields.description.name]: "",
  // [flagFormModel.formFields.flagTypeId.name]: "",
} as FlagormValueModel;

export type FlagormValueModel = {
  description: string;
  // flagTypeId: string;
};

export const flagFormValidationSchema = yup.object({
  [flagFormModel.formFields.description.name]: yup
    .string()
    .required("required"),
  // [flagFormModel.formFields.flagTypeId.name]: yup.string().required("required"),
});
