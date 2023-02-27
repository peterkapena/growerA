import { gql, useMutation } from "@apollo/client";
import { GridActionsCellItem, GridColumns } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import PageLabel from "../../components/labels/PageLabel";
import DataTable from "../../components/other/DataTable";
import { GetFlagsByTypeQuery } from "../../__generated__/graphql";
import { useQuery } from "@apollo/client";
import Loading from "../../components/other/Loading";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../common";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, CardHeader, Box, Button, CardContent } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function Flags() {
  const { flagTypeId } = useParams();

  return (
    <>
      <PageLabel>Flags</PageLabel>
      <FlagDataGrid flagTypeId={flagTypeId}></FlagDataGrid>
    </>
  );
}

const GetFlagsByType_Flags_Page = gql(`
query GetFlagsByType_Flags_Page($input: Float!) {
  getFlagsByType(input: $input) {
    description
    _id
  }
}
`);

const AddOrUpdateFlag = gql(`
  mutation AddOrUpdateFlag($input: AddOrUpdateFlag!) {
    addOrUpdateFlag(input: $input)
  }
  `);

type FlagDataGridProps = {
  flagTypeId: string | undefined;
};

export function FlagDataGrid({ flagTypeId }: FlagDataGridProps) {
  const navigate = useNavigate();
  const { data, loading } = useQuery<GetFlagsByTypeQuery>(
    GetFlagsByType_Flags_Page,
    {
      variables: { input: Number(flagTypeId || 0) },
    }
  );

  const [addOrUpdateFlag] = useMutation(AddOrUpdateFlag, {
    refetchQueries: ["GetFlagsByType_Flags_Page"],
  });

  const deleteFlag = (flag: DataTableType) => {
    console.log(flag);
    addOrUpdateFlag({
      variables: {
        input: {
          description: flag.description,
          flagTypeId: Number(flagTypeId || 0),
          _id: flag.id,
          archived: true,
        },
      },
    });
  };

  if (loading) return <Loading></Loading>;

  const columns: GridColumns<DataTableType> = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "description",
      headerName: "Description",
    },
    {
      headerName: "Actions",
      field: "actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          showInMenu
          onClick={() => {
            console.log("ss");
            deleteFlag(params.row);
          }}
        />,
      ],
    },
  ];

  return (
    <>
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
                onClick={() => navigate(PAGES.FLAG + "/" + flagTypeId)}
              >
                Add a flag
              </Button>
            </Box>
          }
        ></CardHeader>
        <CardContent>
          <DataTable
            rows={rows(data)}
            columns={columns}
            onRowClick={(params) =>
              navigate(PAGES.FLAG + "/" + flagTypeId + "/" + params.id)
            }
            columnVisibilityModel={{ id: false }}
          ></DataTable>
        </CardContent>
      </Card>
    </>
  );
}

function rows(data: GetFlagsByTypeQuery | undefined): DataTableType[] {
  if (!data) return [];

  const { getFlagsByType } = data;
  return getFlagsByType.map((f) => ({
    description: f.description,
    id: f._id,
  }));
}

type DataTableType = {
  id: string;
  description: string;
};
