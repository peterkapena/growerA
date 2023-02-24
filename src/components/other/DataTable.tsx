import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridColumnVisibilityModel,
  GridEventListener,
  GridRowsProp,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { Paper } from "@mui/material";

export type DataTableProps<R extends GridValidRowModel> = {
  rows: GridRowsProp<R>;
  columns: GridColDef[];
  checkboxSelection?: boolean;
  columnVisibilityModel?: GridColumnVisibilityModel;
  disableColumnMenu?: boolean;
  onRowClick?: GridEventListener<"rowClick"> | undefined;
};

export default function DataTable<R extends GridValidRowModel>(
  props: DataTableProps<R>
) {
  const {
    rows,
    columns,
    checkboxSelection,
    columnVisibilityModel,
    disableColumnMenu,
    onRowClick,
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <DataGrid
        disableColumnMenu={disableColumnMenu}
        autoHeight
        rows={rows}
        columns={columns.map((c) => ({
          ...c,
          align: "left",
          headerAlign: "left",
          flex: c.flex || 1,
          renderHeader: (params: GridColumnHeaderParams) => (
            <Paper color="primary">
              <strong>{params.colDef.headerName}</strong>
            </Paper>
          ),
        }))}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={checkboxSelection}
        columnVisibilityModel={columnVisibilityModel}
        autoPageSize
        density="compact"
        onRowClick={onRowClick}
      />
    </div>
  );
}
