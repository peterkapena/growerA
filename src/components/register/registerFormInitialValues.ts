import { generateName, IS_DEVELOPER } from "../../common";
import registerFormModel from "./registerFormModel";

const { formFields } = registerFormModel;

export default {
  [formFields.surName.name]: IS_DEVELOPER ? generateName() : "",
  [formFields.givenName.name]: IS_DEVELOPER ? generateName() : "",
  [formFields.flgGender.name]: "",
  [formFields.flgMaritalStatus.name]: "",
  [formFields.cellNumber.name]: IS_DEVELOPER ? "0812174767" : "",
  [formFields.cellNumber2.name]: IS_DEVELOPER ? "029999999" : "",
  [formFields.email.name]: IS_DEVELOPER ? "peterkapenapeter@gmail.com" : "",
  [formFields.line1.name]: IS_DEVELOPER ? generateName() : "",
  [formFields.line2.name]: IS_DEVELOPER ? generateName() : "",
  [formFields.line3.name]: IS_DEVELOPER ? generateName() : "",
  [formFields.line4.name]: IS_DEVELOPER ? generateName() : "",
  [formFields.line5.name]: IS_DEVELOPER ? generateName() : "",
  [formFields.line6.name]: IS_DEVELOPER ? generateName() : "",
  [formFields.surName.name]: IS_DEVELOPER ? generateName() : "",
  [formFields.username.name]: IS_DEVELOPER ? "farmer1" : "",
  [formFields.dob.name]: IS_DEVELOPER ? "17/03/1993" : "",
  [formFields.password.name]: IS_DEVELOPER ? "LS0tLS1CRUdJTiBQVUJMSUMgS" : "",
  [formFields.orgName.name]: IS_DEVELOPER ? generateName() : "",
} as RegisterFormValueModel;

export type RegisterFormValueModel = {
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
};
