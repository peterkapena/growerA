import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { RegisterFormStepModel } from "./registerFormModel";

export default function Step1Capture(props: RegisterFormStepModel) {
  const { formik, formFields } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          id={formFields.orgName.name}
          type="text"
          fullWidth
          label={formFields.orgName.label}
          inputMode="decimal"
          size="small"
          margin="normal"
          error={formik.touched.orgName && Boolean(formik.errors.orgName)}
          helperText={formik.touched.orgName && formik.errors.orgName}
          {...formik.getFieldProps(formFields.orgName.name)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id={formFields.cellNumber.name}
          type="tel"
          fullWidth
          label={formFields.cellNumber.label}
          inputMode="decimal"
          size="small"
          margin="normal"
          error={formik.touched.cellNumber && Boolean(formik.errors.cellNumber)}
          helperText={formik.touched.cellNumber && formik.errors.cellNumber}
          {...formik.getFieldProps(formFields.cellNumber.name)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id={formFields.cellNumber2.name}
          type="tel"
          fullWidth
          label={formFields.cellNumber2.label}
          inputMode="decimal"
          size="small"
          margin="normal"
          error={
            formik.touched.cellNumber2 && Boolean(formik.errors.cellNumber2)
          }
          helperText={formik.touched.cellNumber2 && formik.errors.cellNumber2}
          {...formik.getFieldProps(formFields.cellNumber2.name)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id={formFields.email.name}
          type="text"
          fullWidth
          label={formFields.email.label}
          size="small"
          margin="normal"
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          {...formik.getFieldProps(formFields.email.name)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id={formFields.line1.name}
          type="text"
          fullWidth
          label={formFields.line1.label}
          size="small"
          margin="normal"
          error={formik.touched.line1 && Boolean(formik.errors.line1)}
          helperText={formik.touched.line1 && formik.errors.line1}
          {...formik.getFieldProps(formFields.line1.name)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id={formFields.line2.name}
          type="text"
          fullWidth
          label={formFields.line2.label}
          size="small"
          margin="normal"
          error={formik.touched.line2 && Boolean(formik.errors.line2)}
          helperText={formik.touched.line2 && formik.errors.line2}
          {...formik.getFieldProps(formFields.line2.name)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id={formFields.line3.name}
          type="text"
          fullWidth
          label={formFields.line3.label}
          size="small"
          margin="normal"
          error={formik.touched.line3 && Boolean(formik.errors.line3)}
          helperText={formik.touched.line3 && formik.errors.line3}
          {...formik.getFieldProps(formFields.line3.name)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id={formFields.line4.name}
          type="text"
          fullWidth
          label={formFields.line4.label}
          size="small"
          margin="normal"
          error={formik.touched.line4 && Boolean(formik.errors.line4)}
          helperText={formik.touched.line4 && formik.errors.line4}
          {...formik.getFieldProps(formFields.line4.name)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id={formFields.line5.name}
          type="text"
          fullWidth
          label={formFields.line5.label}
          size="small"
          margin="normal"
          error={formik.touched.line5 && Boolean(formik.errors.line5)}
          helperText={formik.touched.line5 && formik.errors.line5}
          {...formik.getFieldProps(formFields.line5.name)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id={formFields.line6.name}
          type="text"
          fullWidth
          label={formFields.line6.label}
          size="small"
          margin="normal"
          error={formik.touched.line6 && Boolean(formik.errors.line6)}
          helperText={formik.touched.line6 && formik.errors.line6}
          {...formik.getFieldProps(formFields.line6.name)}
        />
      </Grid>
    </Grid>
  );
}
