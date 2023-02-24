import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";
import { IS_DEVELOPER, PAGES, STR_TOKEN, STR_USER } from "../../common";
import { gql } from "../../__generated__";
import { useMutation } from "@apollo/client";
import { SigninInput } from "../../__generated__/graphql";
import { FormSubmitting } from "../../components/other/Submitting";
import { AlertDialog } from "../../components/other/Dialogs";
import { useState } from "react";

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const SIGNIN = gql(`
mutation Signin($input: SigninInput!) {
  signin(input: $input) {
    username
    token
    email
    surName
    givenName
    message
  }
}
`);

export default function Signin() {
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      username: IS_DEVELOPER ? "peterkapena" : "",
      password: IS_DEVELOPER ? "LS0tLS1CRUdJTiBQVUJMSUMgS" : "",
    },
    validationSchema: validationSchema,
    onSubmit: _handleSubmit,
  });

  const [signin] = useMutation(SIGNIN);

  async function _handleSubmit(values: any, actions: FormikHelpers<any>) {
    actions.setSubmitting(true);
    sessionStorage.removeItem(STR_USER);

    try {
      if (formik.isValid) {
        const input: SigninInput = {
          password: values.password,
          username: values.username,
        };

        const rtn = (await signin({ variables: { input } })).data?.signin;
        if (IS_DEVELOPER) console.log(rtn);

        if (rtn?.message) {
          setMessage(rtn?.message);
        } else if (rtn?.token) {
          sessionStorage.setItem(STR_TOKEN, rtn.token);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          window.location.href = PAGES.HOME;
        }
      }
    } catch (e) {
      setMessage(
        "An error occurred while signing in. Please try again later. If the problem persists, please contact the support"
      );
      if (IS_DEVELOPER) console.log(JSON.stringify(e));
    }
    actions.setSubmitting(false);
  }

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={5}
        md={8}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "dark"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={7}
        md={4}
        component={Paper}
        elevation={6}
        square
        sx={{}}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="div"
            // onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <form onSubmit={formik.handleSubmit}>
              <TextField
                id="username"
                type="text"
                fullWidth
                label="Username"
                size="small"
                margin="normal"
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
                {...formik.getFieldProps("username")}
              />
              <TextField
                id="password"
                type="password"
                fullWidth
                label="Password"
                size="small"
                margin="normal"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                {...formik.getFieldProps("password")}
              />

              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                disabled={formik.isSubmitting}
                size="small"
              >
                {formik.isSubmitting ? (
                  <FormSubmitting></FormSubmitting>
                ) : (
                  "Sign in"
                )}
              </Button>
            </form>
            {message && (
              <AlertDialog
                title={"Please note"}
                message={message}
                onClose={() => setMessage("")}
              ></AlertDialog>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
