import { Chip, Typography } from "@mui/material";
import Order from "../../components/order/";
import DataTable from "../../components/other/DataTable";
import CustomTabs, { CustomTabPanelProps } from "../../components/Tab/Tabs";

const statuses = ["Requested", "Completed", "Cancelled"];

const orders = [
  {
    date: "01/02/2023",
    product: "Maize",
    quantity: "100",
    statuses: [
      {
        date: "01/02/2023",
        status: statuses[0],
      },
      {
        date: "01/02/2023",
        status: statuses[2],
      },
    ],
    customer: {
      organisation: "Grower",
      fullName: "Farmer 1",
      cellNumber: "0812174767",
      address: "1234 Main St",
    },
  },
  {
    date: "03/02/2023",
    product: "Beans",
    quantity: "10",
    statuses: [
      {
        date: "03/02/2023",
        status: statuses[0],
      },
      {
        date: "04/02/2023",
        status: statuses[1],
      },
    ],
    customer: {
      organisation: "Grower 2",
      fullName: "Farmer 2",
      cellNumber: "0812174767",
      address: "1234 Old street",
    },
  },
  {
    date: "05/02/2023",
    product: "Peanuts",
    quantity: "40",
    statuses: [
      {
        date: "05/02/2023",
        status: statuses[0],
      },
      {
        date: "05/02/2023",
        status: statuses[2],
      },
    ],
    customer: {
      organisation: "Grower",
      fullName: "Farmer 3",
      cellNumber: "0812174767",
      address: "1234 New street",
    },
  },
  {
    date: "01/02/2023",
    product: "Spinach",
    quantity: "34",
    statuses: [
      {
        date: "01/02/2023",
        status: statuses[0],
      },
      {
        date: "01/02/2023",
        status: statuses[2],
      },
    ],
    customer: {
      organisation: "Grower",
      fullName: "Farmer 4",
      cellNumber: "0812174767",
      address: "1234 Big Green",
    },
  },
];

export default function Orders() {
  return (
    <div>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Orders
      </Typography>
      <CustomTabs tabs={tabs}></CustomTabs>
    </div>
  );
}

const tabs: CustomTabPanelProps[] = statuses.map((status) => ({
  label: status,
  element: (
    <DataTable
      disableColumnMenu
      rows={orders.map((order, index) => ({ id: index, ...order }))}
      // SelectableRow={(_) => true}
      columns={[
        {
          field: "order",
          headerName: "Order",
          flex: 2,
          renderCell: (params) => {
            return <Order order={params.row}></Order>;
          },
        },
        {
          field: "status",
          headerName: "Status",
          renderCell: (params) => {
            return (
              <Chip
                variant="filled"
                color="info"
                size="medium"
                label={params.row.statuses[1].status}
              />
            );
          },
        },
      ]}
    ></DataTable>
  ),
}));
