import { FormFieldModel } from "../../types";
import * as yup from "yup";

export type ProductEditFormModel = {
  formId: string;
  formFields: ProductEditFormFieldsModel;
};

export type ProductEditFormFieldsModel = {
  flgProductType: FormFieldModel;
  quantity: FormFieldModel;
  unitPrice: FormFieldModel;
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
    unitPrice: {
      label: "Unit price",
      name: "unitPrice",
    },
  },
};

export const productEditFormInitialValues = (product: any) => {
  return {
    [productEditFormModel.formFields.flgProductType.name]: product.type,
    [productEditFormModel.formFields.quantity.name]: product.quantity,
    [productEditFormModel.formFields.unitPrice.name]: product.quantity,
  } as ProductEditFormValueModel;
};

export type ProductEditFormValueModel = {
  flgProductType: string;
  quantity: number;
  unitPrice: number;
};

export const productEditFormValidationSchema = yup.object({
  [productEditFormModel.formFields.flgProductType.name]: yup
    .string()
    .required("required"),
  [productEditFormModel.formFields.quantity.name]: yup
    .number()
    .required("required"),
  [productEditFormModel.formFields.unitPrice.name]: yup
    .number()
    .required("required"),
});
