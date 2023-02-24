import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FormikHelpers, useFormik } from "formik";
import React from "react";
import { Container, Step, StepLabel, Stepper } from "@mui/material";
import { FormSubmitting } from "../../components/other/Submitting";
import registerFormModel from "../../components/register/registerFormModel";
import Step1Register from "../../components/register/Step1Register";
import Step2Register from "../../components/register/Step2Register";
import registerValidationSchema from "../../components/register/registerValidationSchema";
import registerFormInitialValues, {
  RegisterFormValueModel,
} from "../../components/register/registerFormInitialValues";
import RegisterSuccess from "../../components/register/RegisterSuccess";
import { gql, useMutation } from "@apollo/client";
import { RegisterSchemaInput } from "../../__generated__/graphql";

const { formId, formFields } = registerFormModel;

const steps = ["Orgaisation details", "Your details", "Review and submit"];

function getStepContent(step: number, formik: any) {
  switch (step) {
    case 0:
      return <Step1Register formik={formik} formFields={formFields} />;
    case 1:
      return <Step2Register formik={formik} formFields={formFields} />;
    default:
      throw new Error("Unknown step");
  }
}

const REGISTER_SUBMIT = gql(`
mutation Register($input: RegisterSchemaInput!) {
  register(input: $input) {
    person {
      surName
      givenName
    }
    organisation {
      name
    }
  }
}
`);

export default function Register() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const formik = useFormik<RegisterFormValueModel>({
    initialValues: registerFormInitialValues,
    validationSchema: registerValidationSchema(formFields)[activeStep],
    onSubmit: _handleSubmit,
  });

  const isLastStep = activeStep === steps.length - 1;

  //   function _sleep(ms: number) {
  //     return new Promise((resolve) => setTimeout(resolve, ms));
  //   }

  const [register] = useMutation(REGISTER_SUBMIT);

  async function _submitForm(
    values: RegisterFormValueModel,
    actions: FormikHelpers<RegisterFormValueModel>
  ) {
    const input: RegisterSchemaInput = {
      organisation: {
        name: values.orgName,
        address: {
          line1: values.line1,
          line2: values.line2,
          line3: values.line3,
          line4: values.line4,
          line5: values.line5,
          line6: values.line6,
        },
        contact: {
          email: values.email,
          cellNumber: values.cellNumber,
          cellNumber2: values.cellNumber2,
        },
        organisationType: 1,
      },
      person: {
        surName: values.surName,
        givenName: values.givenName,
        dob: values.dob,
        flgGender: values.flgGender,
        flgMaritalStatus: values.flgMaritalStatus,
        address: {
          line1: values.line1,
          line2: values.line2,
          line3: values.line3,
          line4: values.line4,
          line5: values.line5,
          line6: values.line6,
        },
        contact: {
          email: values.email,
          cellNumber: values.cellNumber,
          cellNumber2: values.cellNumber2,
        },
      },
      password: values.password,
      username: values.username,
    };

    const rtn = await register({ variables: { input } });

    // if (IS_DEVELOPER) console.log(values);
    actions.setSubmitting(false);

    console.log(rtn);

    setActiveStep(activeStep + 1);
  }

  async function _handleSubmit(
    values: RegisterFormValueModel,
    formikHelpers: FormikHelpers<RegisterFormValueModel>
  ) {
    if (isLastStep) {
      _submitForm(values, formikHelpers);
    } else {
      setActiveStep(activeStep + 1);
      formikHelpers.setTouched({});
      formikHelpers.setSubmitting(false);
    }
  }

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        {activeStep === steps.length ? (
          <RegisterSuccess></RegisterSuccess>
        ) : (
          <Box component="div" sx={{ mt: 1 }}>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <form id={formId} onSubmit={formik.handleSubmit}>
              {isLastStep ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Review.
                  </Typography>
                  {Object.keys(formFields).map(
                    (fieldName) =>
                      fieldName !== formFields.password.name &&
                      fieldName !== formFields.flgGender.name &&
                      fieldName !== formFields.flgMaritalStatus.name &&
                      fieldName !== formFields.dob.name && (
                        <Typography key={fieldName} variant="subtitle1">
                          {formFields[fieldName as keyof typeof formFields]
                            .label +
                            ": " +
                            formik.values[
                              fieldName as keyof typeof formik.values
                            ]}
                        </Typography>
                      )
                  )}
                </React.Fragment>
              ) : (
                getStepContent(activeStep, formik)
              )}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  // color="primary"
                  type="submit"
                  size="small"
                  color="info"
                  disabled={formik.isSubmitting}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {formik.isSubmitting ? (
                    <FormSubmitting></FormSubmitting>
                  ) : isLastStep ? (
                    "Register"
                  ) : (
                    "Next"
                  )}
                </Button>
              </Box>
            </form>
          </Box>
        )}
      </Paper>
    </Container>
  );
}
