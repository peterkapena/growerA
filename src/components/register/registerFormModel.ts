import { FormFieldModel } from "../../types";

export default {
  formId: "captureForm",
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
    dob: {
      label: "Date of Birth",
      name: "dob",
    },
    username: {
      label: "Username (auto-generated)",
      name: "username",
    },
    password: {
      label: "Password (Please enter your password)",
      name: "password",
    },
    orgName: {
      label: "Organisation name",
      name: "orgName",
    },
    cellNumber: {
      label: "Tel. Number",
      name: "cellNumber",
    },
    cellNumber2: {
      label: "Other Tel. number",
      name: "cellNumber2",
    },
    email: {
      label: "Email",
      name: "email",
    },
    line1: {
      label: "District",
      name: "line1",
    },
    line2: {
      label: "County/Municipality",
      name: "line2",
    },
    line3: {
      label: "Subcounty",
      name: "line3",
    },
    line4: {
      label: "Parish/Ward",
      name: "line4",
    },
    line5: {
      label: "Village",
      name: "line5",
    },
    line6: {
      label: "Plot",
      name: "line6",
    },
  },
} as RegisterFormModel;

type RegisterFormModel = {
  formId: string;
  formFields: RegisterFormFieldsModel;
};

export type RegisterFormFieldsModel = {
  surName: FormFieldModel;
  givenName: FormFieldModel;
  flgGender: FormFieldModel;
  flgMaritalStatus: FormFieldModel;
  dob: FormFieldModel;
  username: FormFieldModel;
  password: FormFieldModel;
  orgName: FormFieldModel;
  cellNumber: FormFieldModel;
  cellNumber2: FormFieldModel;
  email: FormFieldModel;
  line1: FormFieldModel;
  line2: FormFieldModel;
  line3: FormFieldModel;
  line4: FormFieldModel;
  line5: FormFieldModel;
  line6: FormFieldModel;
};

export type RegisterFormikValues = {
  surName: string;
  givenName: string;
  flgGender: string;
  flgMaritalStatus: string;
  dob: string;
  username: string;
  password: string;
  orgName: string;
  cellNumber: string;
  cellNumber2: string;
  email: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  line6: string;
  type: number;
};

export type RegisterFormStepModel = {
  formik: any;
  formFields: RegisterFormFieldsModel;
};
