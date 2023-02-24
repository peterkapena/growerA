import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import { useState } from "react";
import { IS_DEVELOPER } from "../../common";
import {
  EditPersonBasicDetailsSchema,
  GetPersonSchema,
} from "../../__generated__/graphql";
import { AlertDialog } from "../other/Dialogs";
import { FormSubmitting } from "../other/Submitting";
import {
  basicDetailsFormModel,
  basicDetailsormInitialValues,
  BasicDetailsormValidationSchema,
  BasicDetailsormValueModel,
} from "./basicDetailsFormModel";
import { gql } from "../../__generated__";
import { useMutation, useQuery } from "@apollo/client";
import Loading from "../other/Loading";
import SaveIcon from "@mui/icons-material/Save";
type BasicDetailsProps = {
  data: GetPersonSchema;
};

const GET_FLAGS_GENDER_TYPE = gql(`
query GetFlagsByType($input: Float!) {
    getFlagsByType(input: $input) {
      description
      _id
    }
  }
`);
const GET_FLAGS_MARITALSTATUS_TYPE = gql(`
query GetFlagsByType($input: Float!) {
    getFlagsByType(input: $input) {
      description
      _id
    }
  }
`);
const EditPersonBasicDetails = gql(`
mutation EditPersonBasicDetails($input: EditPersonBasicDetailsSchema!) {
  editPersonBasicDetails(input: $input)
}
`);

export default function BasicDetails({ data }: BasicDetailsProps) {
  const { formFields, formId } = basicDetailsFormModel;
  const [error, setError] = useState(false);
  const [ok, setOk] = useState(false);

  const genderQuery = useQuery(GET_FLAGS_GENDER_TYPE, {
    variables: { input: 1 },
  });

  const martialStatusQuery = useQuery(GET_FLAGS_MARITALSTATUS_TYPE, {
    variables: { input: 2 },
  });

  const formik = useFormik<BasicDetailsormValueModel>({
    initialValues: basicDetailsormInitialValues(data),
    validationSchema: BasicDetailsormValidationSchema,
    onSubmit: _handleSubmit,
  });
  const [editPersonBasicDetails] = useMutation(EditPersonBasicDetails, {
    refetchQueries: ["GetPerson"],
  });

  async function _handleSubmit(
    values: BasicDetailsormValueModel,
    actions: FormikHelpers<any>
  ) {
    if (IS_DEVELOPER) console.log(values);
    actions.setSubmitting(true);

    try {
      if (formik.isValid) {
        const input: EditPersonBasicDetailsSchema = {
          _id: data._id,
          flgGender: values.flgGender,
          flgMaritalStatus: values.flgMaritalStatus,
          givenName: values.givenName,
          surName: values.surName,
        };

        const rtn = (await editPersonBasicDetails({ variables: { input } }))
          .data?.editPersonBasicDetails;
        if (IS_DEVELOPER) console.log(rtn);
        setOk(Boolean(rtn));
      }
    } catch (e) {
      setError(true);
      if (IS_DEVELOPER) console.log(JSON.stringify(e));
    }
    actions.setSubmitting(false);
  }

  if (!data || genderQuery.loading || martialStatusQuery.loading)
    return <Loading></Loading>;

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
          <Typography variant="h6">Basic details</Typography>
        </Box>
        <Grid item>
          <TextField
            label={formFields.givenName.label}
            margin="normal"
            size="small"
            fullWidth
            type="text"
            id={formFields.givenName.name}
            error={formik.touched.givenName && Boolean(formik.errors.givenName)}
            helperText={formik.touched.givenName && formik.errors.givenName}
            {...formik.getFieldProps(formFields.givenName.name)}
          ></TextField>
          <TextField
            label={formFields.surName.label}
            margin="normal"
            size="small"
            fullWidth
            type="text"
            id={formFields.surName.name}
            error={formik.touched.surName && Boolean(formik.errors.surName)}
            helperText={formik.touched.surName && formik.errors.surName}
            {...formik.getFieldProps(formFields.surName.name)}
          ></TextField>
          <TextField
            label={formFields.flgGender.label}
            fullWidth
            margin="normal"
            size="small"
            select
            id={formFields.flgGender.name}
            error={formik.touched.flgGender && Boolean(formik.errors.flgGender)}
            helperText={formik.touched.flgGender && formik.errors.flgGender}
            {...formik.getFieldProps(formFields.flgGender.name)}
          >
            {genderQuery.data?.getFlagsByType?.map((option) => (
              <MenuItem key={option._id} value={option._id}>
                {option.description}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label={formFields.flgMaritalStatus.label}
            fullWidth
            margin="normal"
            size="small"
            select
            id={formFields.flgMaritalStatus.name}
            error={
              formik.touched.flgMaritalStatus &&
              Boolean(formik.errors.flgMaritalStatus)
            }
            helperText={
              formik.touched.flgMaritalStatus && formik.errors.flgMaritalStatus
            }
            {...formik.getFieldProps(formFields.flgMaritalStatus.name)}
          >
            {martialStatusQuery.data?.getFlagsByType?.map((option) => (
              <MenuItem key={option._id} value={option._id}>
                {option.description}
              </MenuItem>
            ))}
          </TextField>
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
