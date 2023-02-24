import { Chip, Typography } from "@mui/material";
import Order from "../../components/order/";
import DataTable from "../../components/other/DataTable";
import CustomTabs, { CustomTabPanelProps } from "../../components/Tab/Tabs";

const statuses = ["Requested", "Completed", "Cancelled"];

const orders = [
  {
    _id: 111,
    name: "Maize",
    quantity: 1212,
    unitPrice: 0.44,
  },
  {
    _id: 22,
    name: "Beanse",
    quantity: 1212,
    unitPrice: 0.44,
  },
  {
    _id: 33,
    name: "Spinnach",
    quantity: 1212,
    unitPrice: 0.44,
  },
  {
    id: 44,
    name: "Bananas",
    quantity: 1212,
    unitPrice: 0.44,
  },
  {
    _id: 55,
    name: "Oranges",
    quantity: 1212,
    unitPrice: 0.44,
  },
  {
    _id: 66,
    name: "Potatoes",
    quantity: 1212,
    unitPrice: 0.44,
  },
  {
    _id: 1411,
    name: "Apples",
    quantity: 1212,
    unitPrice: 0.44,
  },
  {
    _id: 222,
    name: "Lemon",
    quantity: 1212,
    unitPrice: 0.44,
  },
];

export default function Products() {
  return (
    <div>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Products
      </Typography>
      <CustomTabs tabs={tabs}></CustomTabs>
    </div>
  );
}

const columns = [
  {
    field: "name",
    headerName: "Product",
    flex: 2,
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

const tabs: CustomTabPanelProps[] = statuses.map((status) => ({
  label: status,
  element: (
    <DataTable
      disableColumnMenu
      rows={orders.map((order, index) => ({ id: index, ...order }))}
      // SelectableRow={(_) => true}
      columns={columns}
    ></DataTable>
  ),
}));
