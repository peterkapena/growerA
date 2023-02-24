import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FormikHelpers, useFormik } from "formik";
import { IS_DEVELOPER, PAGES } from "../../common";
import { gql, useMutation, useQuery } from "@apollo/client";
import { FormSubmitting } from "../../components/other/Submitting";
import { AlertDialog } from "../../components/other/Dialogs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  productEditFormInitialValues,
  productEditFormValidationSchema,
  ProductEditFormValueModel,
  productEditFormModel,
} from "./productEditFormModel";
import { MenuItem } from "@mui/material";
import {
  AddProductSchemaInput,
  GetProductsSchema,
} from "../../__generated__/graphql";
import { GET_FLAGS_PRODUCTS_TYPE } from "./ProductEdit";

type ProductEdit1Props = {
  data: GetProductsSchema;
};

const EditProduct = gql(`
mutation EditProduct($input: AddProductSchemaInput!, $id: String!) {
  editProduct(input: $input, id: $id)
}
`);

export function ProductEditForm({ data }: ProductEdit1Props) {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const { formFields, formId } = productEditFormModel;

  const GetFlagsProductTypeQuery = useQuery(GET_FLAGS_PRODUCTS_TYPE, {
    variables: { input: 3 },
  });

  const formik = useFormik<ProductEditFormValueModel>({
    initialValues: productEditFormInitialValues(data),
    validationSchema: productEditFormValidationSchema,
    onSubmit: _handleSubmit,
  });

  const [editProduct] = useMutation(EditProduct, {
    refetchQueries: ["GetProductsByOrganisation"],
  });

  async function _handleSubmit(
    values: ProductEditFormValueModel,
    actions: FormikHelpers<any>
  ) {
    actions.setSubmitting(true);
    try {
      if (formik.isValid) {
        const input: AddProductSchemaInput = {
          flgProductType: values.flgProductType,
          quantity: +values.quantity,
        };
        const rtn = (await editProduct({ variables: { input, id: data._id } }))
          .data.editProduct;
        if (IS_DEVELOPER) console.log(rtn);
        setSuccess(Boolean(rtn));
      }
    } catch (e) {
      setError(true);
      if (IS_DEVELOPER) console.log(JSON.stringify(e));
    }
    actions.setSubmitting(false);
  }
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Editing {data.name}
        </Typography>
        <form id={formId} onSubmit={formik.handleSubmit}>
          <TextField
            label={formFields.flgProductType.label}
            fullWidth
            margin="normal"
            size="small"
            select
            disabled
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
            {GetFlagsProductTypeQuery.data?.getFlagsByType?.map((option) => (
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
            message={"Edit succeeded."}
            onClose={() => navigate(PAGES.STORE)}
          ></AlertDialog>
        )}
      </Grid>
    </Grid>
  );
}
