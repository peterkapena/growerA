import { gql, useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import PageLabel from "../../components/labels/PageLabel";
import DataTable from "../../components/other/DataTable";
import { useNavigate } from "react-router-dom";
import { GetFlagTypesQuery } from "../../__generated__/graphql";
import { PAGES } from "../../common";
import Loading from "../../components/other/Loading";

export default function FlagTypes() {
  return <PageLabel>Flags</PageLabel>;
}

const GetFlagTypes = gql(`
query GetFlagTypes {
  getFlagTypes {
    id
    typeName
  }
}
`);

export function FlagTypesDataGrid() {
  const { data, loading } = useQuery<GetFlagTypesQuery>(GetFlagTypes);
  const navigate = useNavigate();
  
  if (loading) return <Loading></Loading>;

  return (
    <>
      <DataTable
        rows={rows(data)}
        columns={columns}
        onRowClick={(params) => navigate(PAGES.FLAGS + "/" + params.id)}
        columnVisibilityModel={{ id: false }}
      ></DataTable>
    </>
  );
}

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
  },
  {
    field: "typeName",
    headerName: "Type",
  },
];
function rows(data: GetFlagTypesQuery | undefined): DataTableType[] {
  if (!data) return [];

  const { getFlagTypes } = data;

  return getFlagTypes;
}

type DataTableType = {
  id: string;
  typeName: string;
};
