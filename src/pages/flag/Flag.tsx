import { useMutation, useQuery } from "@apollo/client";
import { Grid, Typography, TextField, MenuItem, Button } from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { IS_DEVELOPER, PAGES } from "../../common";
import PageLabel from "../../components/labels/PageLabel";
import { AlertDialog } from "../../components/other/Dialogs";
import Loading from "../../components/other/Loading";
import { FormSubmitting } from "../../components/other/Submitting";
import { gql } from "../../__generated__";
import { GetFlagSchema } from "../../__generated__/graphql";
import Page404 from "../other/Page404";
import {
  flagFormModel,
  flagFormInitialValues,
  flagFormValidationSchema,
  FlagormValueModel,
} from "./flagUserFormModel";
import { useNavigate } from "react-router-dom";

const GetFlag = gql(`
    query GetFlag($input: String!) {
        getFlag(input: $input) {
        flagTypeId
        flagType
        description
        _id
        }
  }`);

const AddOrUpdateFlag = gql(`
  mutation AddOrUpdateFlag($input: AddOrUpdateFlag!) {
    addOrUpdateFlag(input: $input)
  }
  `);

export default function Flag() {
  const { flagId, flagTypeId } = useParams();

  const { data, loading } = useQuery(GetFlag, {
    variables: { input: flagId || "" },
  });
  if (loading) return <Loading></Loading>;

  return (
    <FlagForm
      flagTypeId={flagTypeId}
      data={data?.getFlag as GetFlagSchema}
    ></FlagForm>
  );
}

type FlagFormProps = {
  data: GetFlagSchema | undefined;
  flagTypeId: string | undefined;
};

function FlagForm({ data, flagTypeId }: FlagFormProps) {
  const [error, setError] = useState(false);
  const [ok, setOk] = useState<boolean>();
  const { formFields, formId } = flagFormModel;
  const formik = useFormik<FlagormValueModel>({
    initialValues: flagFormInitialValues,
    validationSchema: flagFormValidationSchema,
    onSubmit: _handleSubmit,
  });
  const navigate = useNavigate();

  const [addOrUpdateFlag] = useMutation(AddOrUpdateFlag, {
    refetchQueries: ["GetFlagsByType_Flags_Page"],
  });

  if (!flagTypeId && !data) {
    return <Page404></Page404>;
  }

  async function _handleSubmit(
    values: FlagormValueModel,
    actions: FormikHelpers<any>
  ) {
    if (IS_DEVELOPER) console.log(values);
    actions.setSubmitting(true);

    try {
      if (formik.isValid) {
        // alert(JSON.stringify(values));
        const input: FlagormValueModel = values;
        const rtn = (
          await addOrUpdateFlag({
            variables: {
              input: {
                description: input.description,
                flagTypeId: Number(flagTypeId),
                _id: data?._id,
              },
            },
          })
        ).data?.addOrUpdateFlag;
        if (IS_DEVELOPER) console.log(rtn);
        setOk(rtn);
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
        <PageLabel>
          {data?.description
            ? `Editing ${data.description} flag`
            : "Add a flag"}
        </PageLabel>
        <form id={formId} onSubmit={formik.handleSubmit}>
          <TextField
            label={formFields.description.label}
            margin="normal"
            size="small"
            fullWidth
            id={formFields.description.name}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
            {...formik.getFieldProps(formFields.description.name)}
          ></TextField>

          <Button
            color="primary"
            fullWidth
            variant="contained"
            type="submit"
            disabled={formik.isSubmitting}
            size="small"
          >
            {formik.isSubmitting ? (
              <FormSubmitting></FormSubmitting>
            ) : data ? (
              "Update"
            ) : (
              "Create"
            )}
          </Button>
        </form>
        {error && (
          <AlertDialog
            message={"An error happened and the flag was not edited or added."}
            onClose={() => setError(false)}
          ></AlertDialog>
        )}
        {ok && (
          <AlertDialog
            message={
              data?._id
                ? `${data?.description} has been updated.`
                : "The flag has been added. Would like to return to the Grid?"
            }
            onClose={() => setOk(false)}
            onConfirm={() => {
              navigate(-1);
            }}
          ></AlertDialog>
        )}
      </Grid>
    </Grid>
  );
}
