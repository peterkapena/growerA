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
  addressDetailsFormModel,
  addressDetailsormInitialValues,
  addressDetailsormValidationSchema,
  AddressDetailsFormValueModel,
} from "./addressDetailsFormModel";
import { gql } from "../../__generated__";
import { useMutation } from "@apollo/client";
import Loading from "../other/Loading";
import SaveIcon from "@mui/icons-material/Save";
import {
  EditAddressDetailsSchema,
  GetPersonSchema,
} from "../../__generated__/graphql";

type AddressDetailsProps = {
  data: GetPersonSchema;
};

const EditAddressDetails = gql(`
mutation EditAddressDetails($input: EditAddressDetailsSchema!) {
  editAddressDetails(input: $input)
}`);

export default function AddressDetails({ data }: AddressDetailsProps) {
  const { formFields, formId } = addressDetailsFormModel;
  const [error, setError] = useState(false);
  const [ok, setOk] = useState(false);

  const formik = useFormik<AddressDetailsFormValueModel>({
    initialValues: addressDetailsormInitialValues(data),
    validationSchema: addressDetailsormValidationSchema,
    onSubmit: _handleSubmit,
  });

  const [editAddressDetails] = useMutation(EditAddressDetails, {
    refetchQueries: ["GetPerson"],
  });

  async function _handleSubmit(
    values: AddressDetailsFormValueModel,
    actions: FormikHelpers<any>
  ) {
    if (IS_DEVELOPER) console.log(values);
    actions.setSubmitting(true);

    try {
      if (formik.isValid) {
        const input: EditAddressDetailsSchema = {
          _id: data.addressId,
          line1: values.line1,
          line2: values.line2,
          line3: values.line3,
          line4: values.line4,
          line5: values.line5,
          line6: values.line6,
        };
        const rtn = (await editAddressDetails({ variables: { input } })).data
          ?.editAddressDetails;
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
          <Typography variant="h6">Address details</Typography>
        </Box>
        <Grid item>
          <TextField
            label={formFields.line1.label}
            margin="normal"
            size="small"
            fullWidth
            type="text"
            id={formFields.line1.name}
            error={formik.touched.line1 && Boolean(formik.errors.line1)}
            helperText={formik.touched.line1 && formik.errors.line1}
            {...formik.getFieldProps(formFields.line1.name)}
          ></TextField>
          <TextField
            label={formFields.line2.label}
            margin="normal"
            size="small"
            fullWidth
            type="text"
            id={formFields.line2.name}
            error={formik.touched.line2 && Boolean(formik.errors.line2)}
            helperText={formik.touched.line2 && formik.errors.line2}
            {...formik.getFieldProps(formFields.line2.name)}
          ></TextField>
          <TextField
            label={formFields.line3.label}
            margin="normal"
            size="small"
            fullWidth
            type="text"
            id={formFields.line3.name}
            error={formik.touched.line3 && Boolean(formik.errors.line3)}
            helperText={formik.touched.line3 && formik.errors.line3}
            {...formik.getFieldProps(formFields.line3.name)}
          ></TextField>
          <TextField
            label={formFields.line4.label}
            margin="normal"
            size="small"
            fullWidth
            type="text"
            id={formFields.line4.name}
            error={formik.touched.line4 && Boolean(formik.errors.line4)}
            helperText={formik.touched.line4 && formik.errors.line4}
            {...formik.getFieldProps(formFields.line4.name)}
          ></TextField>{" "}
          <TextField
            label={formFields.line5.label}
            margin="normal"
            size="small"
            fullWidth
            type="text"
            id={formFields.line5.name}
            error={formik.touched.line5 && Boolean(formik.errors.line5)}
            helperText={formik.touched.line5 && formik.errors.line5}
            {...formik.getFieldProps(formFields.line5.name)}
          ></TextField>{" "}
          <TextField
            label={formFields.line6.label}
            margin="normal"
            size="small"
            fullWidth
            type="text"
            id={formFields.line6.name}
            error={formik.touched.line6 && Boolean(formik.errors.line6)}
            helperText={formik.touched.line6 && formik.errors.line6}
            {...formik.getFieldProps(formFields.line6.name)}
          ></TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={formik.isSubmitting}
            startIcon={<SaveIcon />}
          >
            {formik.isSubmitting ? <FormSubmitting></FormSubmitting> : "Save"}
          </Button>{" "}
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
