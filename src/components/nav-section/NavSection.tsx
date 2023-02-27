import { NavLink as RouterLink } from "react-router-dom";
import { Box, List, ListItemText } from "@mui/material";
import { StyledNavItem, StyledNavItemIcon } from "./styles";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../common";
import { ReactElement } from "react";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AddIcon from "@mui/icons-material/Add";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import StoreIcon from "@mui/icons-material/Store";
import PeopleIcon from "@mui/icons-material/People";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const menus: NavItemProps[] = [
  {
    title: "dashboard",
    path: PAGES.HOME,
    icon: <AnalyticsIcon />,
  },
  {
    title: "Admin",
    path: PAGES.ADMIN,
    icon: <AdminPanelSettingsIcon />,
  },
  {
    title: "Grower store",
    path: PAGES.STORE,
    icon: <StoreIcon />,
  },
  {
    title: "People",
    path: PAGES.PEOPLE,
    icon: <PeopleIcon />,
  },
  {
    title: "Farms",
    path: PAGES.FARMS,
    icon: <AgricultureIcon />,
  },
  {
    title: "Market",
    path: PAGES.PRODUCTS,
    icon: <StorefrontIcon />,
  },
  {
    title: "My Orders",
    path: PAGES.ORDERS,
    icon: <ShoppingCartIcon />,
  },
];

export default function NavSection() {
  const navigate = useNavigate();

  return (
    <Box>
      <List disablePadding sx={{ p: 1 }}>
        {menus.map((menu) => (
          <NavItem
            key={menu.title}
            icon={menu.icon}
            path={menu.path}
            title={menu.title}
            info={menu.info}
            onClick={() => navigate(menu.path || "")}
          />
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }}>
        <NavItem
          icon={<AddIcon />}
          title={"Add a product in store"}
          path={PAGES.PRODUCT}
          onClick={() => navigate(PAGES.PRODUCT)}
        />
      </Box>
      {/* <NavItem
        icon={<AppRegistrationIcon />}
        title={"REGISTER"}
        path={PAGES.REGISTER}
        onClick={() => navigate(PAGES.REGISTER)}
      /> */}
    </Box>
  );
}

type NavItemProps = {
  title: string;
  path?: string;
  icon: ReactElement;
  info?: string;
  onClick?: () => void;
};

export function NavItem(props: NavItemProps) {
  const { title, path, icon, info, onClick } = props;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      onClick={onClick}
      sx={{
        "&.active": {
          color: "text.primary",
          bgcolor: "action.selected",
          fontWeight: "fontWeightBold",
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
