import CustomTabs, { CustomTabPanelProps } from "../../components/Tab/Tabs";
import { FlagTypesDataGrid } from "../flag/FlagTypes";
import { UsersDataGrid } from "../user/Users";

const tabs: CustomTabPanelProps[] = [
  {
    element: <UsersDataGrid></UsersDataGrid>,
    label: "Users",
  },
  {
    element: <FlagTypesDataGrid></FlagTypesDataGrid>,
    label: "Flags",
  },
];

export default function Admin() {
  return <CustomTabs tabs={tabs}></CustomTabs>;
}
