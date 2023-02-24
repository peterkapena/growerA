import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FormikHelpers, useFormik } from "formik";
import { IS_DEVELOPER, PAGES } from "../../common";
import { gql } from "../../__generated__";
import { useMutation, useQuery } from "@apollo/client";
import { FormSubmitting } from "../../components/other/Submitting";
import { AlertDialog } from "../../components/other/Dialogs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addProductFormInitialValues,
  addProductFormValidationSchema,
  AddProductFormValueModel,
  addProductFormModel,
} from "./addProductFormModel";
import Loading from "../../components/other/Loading";
import { MenuItem } from "@mui/material";
import { AddProductSchemaInput } from "../../__generated__/graphql";

const GET_FLAGS_PRODUCTS_TYPE = gql(`
query GetFlagsByType($input: Float!) {
    getFlagsByType(input: $input) {
      description
      _id
    }
  }
`);
const ADD_PRODUCT = gql(`
mutation AddProduct($input: AddProductSchemaInput!) {
    addProduct(input: $input) {
      quantity
      organisationId
      flgProductType
      _id
    }
  }
`);

export default function Product() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { formFields, formId } = addProductFormModel;

  const formik = useFormik<AddProductFormValueModel>({
    initialValues: addProductFormInitialValues,
    validationSchema: addProductFormValidationSchema,
    onSubmit: _handleSubmit,
  });

  const { data, loading } = useQuery(GET_FLAGS_PRODUCTS_TYPE, {
    variables: { input: 3 },
  });
  const [addProduct] = useMutation(ADD_PRODUCT, {
    refetchQueries: ["GetProductsByOrganisation"],
  });
  const navigate = useNavigate();

  async function _handleSubmit(
    values: AddProductFormValueModel,
    actions: FormikHelpers<any>
  ) {
    actions.setSubmitting(true);

    try {
      if (formik.isValid) {
        const input: AddProductSchemaInput = {
          flgProductType: values.flgProductType,
          quantity: +values.quantity,
        };

        const rtn = (await addProduct({ variables: { input } })).data
          ?.addProduct;

        if (IS_DEVELOPER) console.log(rtn);
        setSuccess(Boolean(rtn?._id));
      }
    } catch (e) {
      setError(true);
      if (IS_DEVELOPER) console.log(JSON.stringify(e));
    }
    actions.setSubmitting(false);
  }

  if (loading) return <Loading></Loading>;

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item>
        <Typography variant="h4">Add a product to your store</Typography>
        <form id={formId} onSubmit={formik.handleSubmit}>
          <TextField
            label={formFields.flgProductType.label}
            fullWidth
            margin="normal"
            size="small"
            select
            id={formFields.flgProductType.name}
            error={
              formik.touched.flgProductType &&
              Boolean(formik.errors.flgProductType)
            }
            helperText={
              formik.touched.flgProductType && formik.errors.flgProductType
            }
            {...formik.getFieldProps(formFields.flgProductType.name)}
          >
            {data?.getFlagsByType?.map((option) => (
              <MenuItem key={option._id} value={option._id}>
                {option.description}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id={formFields.quantity.name}
            type="text"
            fullWidth
            label={formFields.quantity.label}
            size="small"
            margin="normal"
            error={formik.touched.quantity && Boolean(formik.errors.quantity)}
            helperText={formik.touched.quantity && formik.errors.quantity}
            {...formik.getFieldProps(formFields.quantity.name)}
          />

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={formik.isSubmitting}
            size="small"
          >
            {formik.isSubmitting ? <FormSubmitting></FormSubmitting> : "Submit"}
          </Button>
        </form>
        {error && (
          <AlertDialog
            title={"Please note"}
            message={"An error happened. Please try again later."}
            onClose={() => setError(false)}
          ></AlertDialog>
        )}
        {success && (
          <AlertDialog
            title={"Please note"}
            message={"The product has been added."}
            onClose={() => navigate(PAGES.STORE)}
          ></AlertDialog>
        )}
      </Grid>
    </Grid>
  );
}

export function AddProductMenus() {
  return <></>;
}
