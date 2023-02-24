import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FormikHelpers, useFormik } from "formik";
import { IS_DEVELOPER, PAGES } from "../../common";
import { gql } from "../../__generated__";
import { useQuery } from "@apollo/client";
import { FormSubmitting } from "../../components/other/Submitting";
import { AlertDialog } from "../../components/other/Dialogs";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  addUserFormModel,
  addUserormInitialValues,
  addUserormValidationSchema,
  AddUserormValueModel,
} from "./addUserFormModel";
import { Grid, MenuItem } from "@mui/material";

const ADD_USER = gql(`
query ADD_USER {
  getOrganisations {
    _id
    name
  }
  getPersons {
    givenName
    surName
    _id
  }
}
`);

export default function AddUser() {
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState<string>();
  const { formFields, formId } = addUserFormModel;
  const formik = useFormik<AddUserormValueModel>({
    initialValues: addUserormInitialValues,
    validationSchema: addUserormValidationSchema,
    onSubmit: _handleSubmit,
  });

  const { data } = useQuery(ADD_USER);

  async function _handleSubmit(
    values: AddUserormValueModel,
    actions: FormikHelpers<any>
  ) {
    if (IS_DEVELOPER) console.log(values);
    actions.setSubmitting(true);

    try {
      if (formik.isValid) {
        // const input: SigninInput = {
        //   password: values.password,
        //   username: values.username,
        // };
        // const rtn = (await createUser({ variables: { input } })).data
        //   ?.createUser;
        // if (IS_DEVELOPER) console.log(rtn);
        // if (rtn?.username) {
        //   setUserName(rtn?.username);
        // }
      }
    } catch (e) {
      setError(true);
      if (IS_DEVELOPER) console.log(JSON.stringify(e));
    }
    actions.setSubmitting(false);
  }

  return (
    <Grid container width={500} component="main" sx={{}}>
      <Grid item>
        <Typography component="h1" variant="h5">
          Create a user account
        </Typography>
        <form id={formId} onSubmit={formik.handleSubmit}>
          <TextField
            label={formFields.organisationId.label}
            margin="normal"
            size="small"
            fullWidth
            select
            id={formFields.organisationId.name}
            error={
              formik.touched.organisationId &&
              Boolean(formik.errors.organisationId)
            }
            helperText={
              formik.touched.organisationId && formik.errors.organisationId
            }
            {...formik.getFieldProps(formFields.organisationId.name)}
          >
            {data?.getOrganisations?.map((option) => (
              <MenuItem key={option._id} value={option._id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label={formFields.personId.label}
            margin="normal"
            size="small"
            fullWidth
            select
            id={formFields.personId.name}
            error={formik.touched.personId && Boolean(formik.errors.personId)}
            helperText={formik.touched.personId && formik.errors.personId}
            {...formik.getFieldProps(formFields.personId.name)}
          >
            {data?.getPersons?.map((option) => (
              <MenuItem key={option._id} value={option._id}>
                {option.surName + ", " + option.givenName}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id={formFields.username.name}
            type="text"
            label={formFields.username.label}
            size="small"
            fullWidth
            margin="normal"
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            {...formik.getFieldProps(formFields.username.name)}
          />
          <TextField
            id={formFields.password.name}
            type="password"
            label={formFields.password.label}
            fullWidth
            size="small"
            margin="normal"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            {...formik.getFieldProps(formFields.password.name)}
          />
          <Button
            color="primary"
            fullWidth
            variant="contained"
            type="submit"
            disabled={formik.isSubmitting}
            size="small"
          >
            {formik.isSubmitting ? <FormSubmitting></FormSubmitting> : "Create"}
          </Button>
        </form>
        {error && (
          <AlertDialog
            message={
              "Invalid password or username. If this persists, please contact support."
            }
            onClose={() => setError(false)}
          ></AlertDialog>
        )}
        {userName && (
          <AlertDialog
            message={`User ${userName} has been created. Would you like to test sign in with his password?`}
            onClose={() => setUserName("")}
            onConfirm={() => {
              window.open(PAGES.SIGNIN, "_blank");
            }}
          ></AlertDialog>
        )}
      </Grid>
    </Grid>
  );
}

export function UserAddMenus() {
  return (
    <>
      {/* <StyledTreeItem nodeId="Users" labelText="Users">
        <StyledTreeItem
          nodeId="Add a new user"
          labelText="Add a new user"
          onClick={() => {
            navigate(PAGES.ADDUSER);
          }}
        />
      </StyledTreeItem> */}
    </>
  );
}
