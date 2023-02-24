import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { RegisterFormStepModel } from "./registerFormModel";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { IS_DEVELOPER } from "../../common";
import { MenuItem } from "@mui/material";
import { gql, useQuery } from "@apollo/client";
import { GetFlagsByTypeQuery } from "../../__generated__/graphql";

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

export default function Step2Capture(props: RegisterFormStepModel) {
  const { formik, formFields } = props;

  const un =
    formik.values[formFields.givenName.name].replace(" ", "") +
    formik.values[formFields.surName.name].replace(" ", "").trim();

  const [username, setUsername] = React.useState(un);

  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs(formik.values[formFields.dob.name])
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    formik.setFieldValue(formFields.dob.name, newValue);
  };

  function computeUsername(input: any) {
    switch (input.target.name) {
      case formFields.surName.name:
        formik.setFieldValue(formFields.surName.name, input.target.value);
        break;
      case formFields.givenName.name:
        formik.setFieldValue(formFields.givenName.name, input.target.value);
        break;
    }

    formik.setFieldValue(formFields.username.name, un);
    setUsername(un);
    if (IS_DEVELOPER) console.log(un);
  }
  const genderQuery = useQuery<GetFlagsByTypeQuery>(GET_FLAGS_GENDER_TYPE, {
    variables: { input: 1 },
  });

  const martialStatusQuery = useQuery<GetFlagsByTypeQuery>(
    GET_FLAGS_MARITALSTATUS_TYPE,
    {
      variables: { input: 2 },
    }
  );

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id={formFields.givenName.name}
            type="text"
            fullWidth
            label={formFields.givenName.label}
            size="small"
            margin="normal"
            error={formik.touched.givenName && Boolean(formik.errors.givenName)}
            helperText={formik.touched.givenName && formik.errors.givenName}
            {...formik.getFieldProps(formFields.givenName.name)}
            onChange={computeUsername}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id={formFields.surName.name}
            type="text"
            fullWidth
            label={formFields.surName.label}
            size="small"
            margin="normal"
            error={formik.touched.surName && Boolean(formik.errors.surName)}
            helperText={formik.touched.surName && formik.errors.surName}
            {...formik.getFieldProps(formFields.surName.name)}
            onChange={computeUsername}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
        </Grid>
        <Grid item xs={12} sm={6}>
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
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label={formFields.dob.label}
              inputFormat="DD/MM/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params: TextFieldProps) => (
                <TextField
                  {...params}
                  id={formFields.dob.name}
                  label={formFields.dob.label}
                  margin="normal"
                  fullWidth
                  error={formik.touched.dob && Boolean(formik.errors.dob)}
                  helperText={formik.touched.dob && formik.errors.dob}
                  {...formik.getFieldProps(formFields.dob.name)}
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <br></br>
      <Typography variant={"h5"}>Authentication details</Typography>
      <br></br>
      <Typography variant={"body1"}>
        These will be used for your sign in once your account has been approved.
        Please store these in a safe environmemt for future use
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id={formFields.username.name}
            type="text"
            fullWidth
            label={formFields.username.label}
            size="small"
            margin="normal"
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            {...formik.getFieldProps(formFields.username.name)}
            value={username}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id={formFields.password.name}
            type="password"
            fullWidth
            label={formFields.password.label}
            size="small"
            margin="normal"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            {...formik.getFieldProps(formFields.password.name)}
          />
        </Grid>
      </Grid>
    </>
  );
}
