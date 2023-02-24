import { IS_DEVELOPER } from "../../common";
import { FormFieldModel } from "../../types";
import * as yup from "yup";

export type ProductEditFormModel = {
  formId: string;
  formFields: ProductEditFormFieldsModel;
};

export type ProductEditFormFieldsModel = {
  flgProductType: FormFieldModel;
  quantity: FormFieldModel;
};

export const productEditFormModel = {
  formId: "productEditForm",
  formFields: {
    flgProductType: {
      label: "Type of Product",
      name: "flgProductType",
    },
    quantity: {
      label: "Quantity",
      name: "quantity",
    },
  },
};

export const productEditFormInitialValues = (product: any) => {
  return {
    [productEditFormModel.formFields.flgProductType.name]: product.type,
    [productEditFormModel.formFields.quantity.name]: product.quantity,
  } as ProductEditFormValueModel;
};

export type ProductEditFormValueModel = {
  flgProductType: string;
  quantity: number;
};

export const productEditFormValidationSchema = yup.object({
  [productEditFormModel.formFields.flgProductType.name]: yup
    .string()
    .required("required"),
  [productEditFormModel.formFields.quantity.name]: yup
    .number()
    .required("required"),
});