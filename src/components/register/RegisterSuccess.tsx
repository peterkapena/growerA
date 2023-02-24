import { Typography } from "@mui/material";
import React from "react";

function RegisterSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for your registration.
      </Typography>
      <Typography variant="subtitle1">
        We will be in touch with you once your account has been approved.
      </Typography>
    </React.Fragment>
  );
}

export default RegisterSuccess;
