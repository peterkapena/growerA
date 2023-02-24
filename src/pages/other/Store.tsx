import { gql, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/other/DataTable";
import Loading from "../../components/other/Loading";
import { useUser } from "../../redux/userSlice";
import { GetProductsByOrganisationQuery } from "../../__generated__/graphql";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../common";
import AddIcon from "@mui/icons-material/Add";
import PageLabel from "../../components/labels/PageLabel";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Product",
    renderCell: (params: any) => {
      return <Typography variant="subtitle1">{params.row.name}</Typography>;
    },
  },
  {
    field: "quantity",
    headerName: "Quantity",
  },
  {
    field: "unitPrice",
    headerName: "Unit price",
  },
];

const GetProductsByOrganisation = gql(`
query GetProductsByOrganisation($input: String!) {
  getProductsByOrganisation(input: $input) {
    unitPrice
    quantity     
    name
    _id
  }
}
`);

export default function Store() {
  const user = useUser();
  const { data, loading } = useQuery(GetProductsByOrganisation, {
    variables: { input: user.organisationId },
  });
  const navigate = useNavigate();

  if (loading) return <Loading></Loading>;

  return (
    <>
      <PageLabel>Store</PageLabel>
      <Card>
        <CardHeader
          title={
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                borderRadius: 1,
              }}
            >
              <Button
                endIcon={<AddIcon />}
                variant="outlined"
                onClick={() => navigate(PAGES.PRODUCT)}
              >
                Add a product to the store
              </Button>
            </Box>
          }
        ></CardHeader>
        <CardContent>
          <DataTable
            disableColumnMenu
            rows={rows(data)}
            columns={columns}
            onRowClick={(param) => navigate(PAGES.PRODUCT + "/" + param.row.id)}
          ></DataTable>
        </CardContent>
      </Card>
    </>
  );
}

type StorePropType = {
  id: string;
  quantity: number;
  name: string;
  unitPrice: number;
};

function rows(
  data: GetProductsByOrganisationQuery | undefined
): StorePropType[] {
  if (!data) return [];

  const { getProductsByOrganisation } = data;

  return getProductsByOrganisation.map((u) => ({
    id: u._id,
    quantity: u.quantity,
    name: u.name,
    unitPrice: u.unitPrice,
  }));
}
