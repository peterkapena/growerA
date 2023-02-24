import { IS_DEVELOPER } from "../../common";
import { FormFieldModel } from "../../types";
import * as yup from "yup";

export type AddProductFormModel = {
  formId: string;
  formFields: AddProductFormFieldsModel;
};

export type AddProductFormFieldsModel = {
  flgProductType: FormFieldModel;
  quantity: FormFieldModel;
};

export const addProductFormModel = {
  formId: "addProductForm",
  formFields: {
    flgProductType: {
      label: "Type of Product",
      name: "flgProductType",
    },
    quantity: {
      label: "Quantity",
      name: "quantity",
    },
    unitPrice: {
      label: "Unit price",
      name: "unitPrice",
    },
  },
};

export const addProductFormInitialValues = {
  [addProductFormModel.formFields.flgProductType.name]: IS_DEVELOPER ? "" : "",
  [addProductFormModel.formFields.quantity.name]: IS_DEVELOPER ? 33 : undefined,
  [addProductFormModel.formFields.unitPrice.name]: IS_DEVELOPER
    ? 33
    : undefined,
} as AddProductFormValueModel;

export type AddProductFormValueModel = {
  flgProductType: string;
  quantity: number;
  unitPrice: number;
};

export const addProductFormValidationSchema = yup.object({
  [addProductFormModel.formFields.flgProductType.name]: yup
    .string()
    .required("required"),
  [addProductFormModel.formFields.quantity.name]: yup
    .number()
    .required("required"),
  [addProductFormModel.formFields.unitPrice.name]: yup
    .number()
    .required("required"),
});
