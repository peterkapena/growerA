import { gql } from "../../__generated__";
import { useMutation, useQuery } from "@apollo/client";
import DataTable from "../../components/other/DataTable";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Loading from "../../components/other/Loading";
import { AdminGetUsersQuery } from "../../__generated__/graphql";
import { Switch, Typography } from "@mui/material";

const AdminGetUsers = gql(`
query AdminGetUsers {
  adminGetUsers {
    _id
    entPersonName
    organisationName
    username
    adminApproved
  }
}
`);

const ToggleAdminApproved = gql(`
mutation ToggleAdminApproved($id: String!, $approved: Boolean!) {
  toggleAdminApproved(id: $id, approved: $approved)
}

`);

const RenderApproved = (props: GridRenderCellParams<boolean>) => {
  const { value, row } = props;
  const [tooggleApproved] = useMutation(ToggleAdminApproved);
  function onChange(_: any, checked: boolean) {
    tooggleApproved({ variables: { id: row.id, approved: checked } });
  }

  return <Switch onChange={onChange} defaultChecked={value} color="primary" />;
};

export default function Users() {
  const { data, loading } = useQuery(AdminGetUsers);

  if (loading) return <Loading></Loading>;

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Users
      </Typography>
      <DataTable
        rows={rows(data)}
        columns={columns}
        columnVisibilityModel={{ id: false }}
      ></DataTable>
    </>
  );
}

type UserDataTableType = {
  id: string;
  entPersonName: string | null | undefined;
  organisationName: string;
  username: string;
  adminApproved: boolean;
};

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
  },
  {
    field: "entPersonName",
    headerName: "Full name",
  },
  { field: "organisationName", headerName: "Organisation" },
  { field: "username", headerName: "Username", flex: 2 },
  {
    field: "adminApproved",
    headerName: "Approved",
    type: "boolean",
    renderCell: RenderApproved,
  },
];

function rows(data: AdminGetUsersQuery | undefined): UserDataTableType[] {
  if (!data) return [];

  const { adminGetUsers } = data;

  return adminGetUsers.map((u) => ({
    id: u._id,
    entPersonName: u.entPersonName,
    organisationName: u.organisationName,
    adminApproved: u.adminApproved,
    username: u.username,
  }));
}
