import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import { useState } from "react";
import { IS_DEVELOPER } from "../../common";
import { AlertDialog } from "../other/Dialogs";
import { FormSubmitting } from "../other/Submitting";
import {
  contactDetailsFormModel,
  contactDetailsormInitialValues,
  contactDetailsormValidationSchema,
  ContactDetailsormValueModel,
} from "./contactDetailsFormModel";
import { gql } from "../../__generated__";
import { useMutation } from "@apollo/client";
import Loading from "../other/Loading";
import SaveIcon from "@mui/icons-material/Save";
import {
  EditContactDetailsSchema,
  GetPersonSchema,
} from "../../__generated__/graphql";

type ContactDetailsProps = {
  data: GetPersonSchema;
};

const EditContactDetails = gql(`
mutation EditContactDetails($input: EditContactDetailsSchema!) {
  editContactDetails(input: $input)
}`);

export default function ContactDetails({ data }: ContactDetailsProps) {
  const { formFields, formId } = contactDetailsFormModel;
  const [error, setError] = useState(false);
  const [ok, setOk] = useState(false);

  const formik = useFormik<ContactDetailsormValueModel>({
    initialValues: contactDetailsormInitialValues(data),
    validationSchema: contactDetailsormValidationSchema,
    onSubmit: _handleSubmit,
  });

  const [editContactDetails] = useMutation(EditContactDetails, {
    refetchQueries: ["GetPerson"],
  });

  async function _handleSubmit(
    values: ContactDetailsormValueModel,
    actions: FormikHelpers<any>
  ) {
    if (IS_DEVELOPER) console.log(values);
    actions.setSubmitting(true);

    try {
      if (formik.isValid) {
        const input: EditContactDetailsSchema = {
          _id: data.contactId,
          email: values.email,
          cellNumber1: values.cellNumber1,
          cellNumber2: values.cellNumber2,
        };
        console.log(values);
        const rtn = (await editContactDetails({ variables: { input } })).data
          ?.editContactDetails;
        if (IS_DEVELOPER) console.log(rtn);
        setOk(Boolean(rtn));
      }
    } catch (e) {
      setError(true);
      if (IS_DEVELOPER) console.log(JSON.stringify(e));
    }
    actions.setSubmitting(false);
  }

  if (!data) return <Loading></Loading>;

  return (
    <Grid>
      <form id={formId} onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <Typography variant="h6">Contact details</Typography>
        </Box>
        <Grid item>
          <TextField
            label={formFields.email.label}
            margin="normal"
            size="small"
            fullWidth
            type="text"
            id={formFields.email.name}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            {...formik.getFieldProps(formFields.email.name)}
          ></TextField>
          <TextField
            label={formFields.cellNumber1.label}
            margin="normal"
            size="small"
            fullWidth
            type="text"
            id={formFields.cellNumber1.name}
            error={
              formik.touched.cellNumber1 && Boolean(formik.errors.cellNumber1)
            }
            helperText={formik.touched.cellNumber1 && formik.errors.cellNumber1}
            {...formik.getFieldProps(formFields.cellNumber1.name)}
          ></TextField>
          <TextField
            label={formFields.cellNumber2.label}
            margin="normal"
            size="small"
            fullWidth
            type="text"
            id={formFields.cellNumber2.name}
            error={
              formik.touched.cellNumber2 && Boolean(formik.errors.cellNumber2)
            }
            helperText={formik.touched.cellNumber2 && formik.errors.cellNumber2}
            {...formik.getFieldProps(formFields.cellNumber2.name)}
          ></TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={formik.isSubmitting}
            startIcon={<SaveIcon />}
          >
            {formik.isSubmitting ? <FormSubmitting></FormSubmitting> : "Save"}
          </Button>
          {error && (
            <AlertDialog
              message={"An error happened."}
              onClose={() => setError(false)}
            ></AlertDialog>
          )}
          {ok && (
            <AlertDialog
              message={`Edit was successful`}
              onClose={() => setOk(false)}
            ></AlertDialog>
          )}
        </Grid>
      </form>
    </Grid>
  );
}
