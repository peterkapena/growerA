import * as yup from "yup";

import registerFormModel from "./registerFormModel";

export default function registerValidationSchema(
  formFields: typeof registerFormModel.formFields
) {
  return [
    yup.object({
      [formFields.orgName.name]: yup.string().required("required"),
      [formFields.cellNumber.name]: yup.string().required("required"),
      [formFields.cellNumber2.name]: yup.string().required("required"),
      [formFields.email.name]: yup
        .string()
        .required("required")
        .email("Invalid email"),
      [formFields.line1.name]: yup.string().required("required"),
      [formFields.line2.name]: yup.string().required("required"),
      [formFields.line3.name]: yup.string().required("required"),
      [formFields.line4.name]: yup.string().required("required"),
      [formFields.line5.name]: yup.string().required("required"),
      [formFields.line6.name]: yup.string().required("required"),
    }),
    yup.object({
      [formFields.surName.name]: yup.string().required("required"),
      [formFields.givenName.name]: yup.string().required("required"),
      [formFields.flgGender.name]: yup.string().required("required"),
      [formFields.flgMaritalStatus.name]: yup.string().required("required"),
      [formFields.dob.name]: yup
        .date()
        .typeError("Invalid")
        .required("required"),
      [formFields.username.name]: yup.string().required("required"),
      [formFields.password.name]: yup
        .string()
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
    }),
  ];
}
