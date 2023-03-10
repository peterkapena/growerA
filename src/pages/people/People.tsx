import { gql, useQuery } from "@apollo/client";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/other/DataTable";
import Loading from "../../components/other/Loading";
import { GetPersonsQuery } from "../../__generated__/graphql";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../common";
import PageLabel from "../../components/labels/PageLabel";

export default function People() {
  return (
    <>
      <PageLabel>People</PageLabel>
      <PeopleGrid></PeopleGrid>
    </>
  );
}

const getPersons = gql(`
query GetPersons {
  getPersons {
    _id
    surName
    givenName
    gender
    maritalStatus
    organisation
  }
}
`);

export function PeopleGrid() {
  const { data, loading } = useQuery<GetPersonsQuery>(getPersons);
  const navigate = useNavigate();

  if (loading) return <Loading></Loading>;

  return (
    <>
      <DataTable
        rows={rows(data)}
        columns={columns}
        onRowClick={(params) => navigate(PAGES.PERSON + "/" + params.id)}
        columnVisibilityModel={{ id: false }}
      ></DataTable>
    </>
  );
}

type DataTableType = {
  id: string;
  givenName: string;
  surName: string;
  gender: string;
  maritalStatus: string;
  organisation: string;
};

function rows(data: GetPersonsQuery | undefined): DataTableType[] {
  if (!data) return [];

  const { getPersons } = data;

  return getPersons.map((p) => ({
    id: p._id,
    gender: p.gender,
    givenName: p.givenName,
    maritalStatus: p.maritalStatus,
    organisation: p.organisation,
    surName: p.surName,
  }));
}

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
  },
  {
    field: "givenName",
    headerName: "Given name",
  },
  { field: "surName", headerName: "Surname" },
  { field: "gender", headerName: "Gender" },
  { field: "maritalStatus", headerName: "Marital status" },
  {
    field: "organisation",
    headerName: "Organisation",
  },
];
