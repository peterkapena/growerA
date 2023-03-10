import { createBrowserRouter } from "react-router-dom";
import Page404 from "./pages/other/Page404";
import Store from "./pages/other/Store";
import DashboardAppPage from "./pages/other/DashboardAppPage";
import { PAGES } from "./common";
import Signin from "./pages/other/Signin";
import Dashboard from "./layouts/dashboard/Dashboard";
import Order from "./pages/order";
import Product from "./pages/product/Product";
import Register from "./pages/other/Register";
import Products from "./pages/other/Products";
import ProductEdit from "./pages/product/ProductEdit";
import Users from "./pages/user/Users";
import Farms from "./pages/farms/Farms";
import People from "./pages/people/People";
import Person from "./pages/people/Person";
import PersonEdit from "./pages/people/PersonEdit";
import AddUser from "./pages/user/AddUser";
import Admin from "./pages/admin/Admin";
import Flags from "./pages/flag/Flags";
import Flag from "./pages/flag/Flag";

export const routes = createBrowserRouter([
  {
    errorElement: <Page404></Page404>,
    path: PAGES.HOME,
    element: <Dashboard />,
    children: [
      {
        path: PAGES.HOME,
        element: <DashboardAppPage></DashboardAppPage>,
      },
      {
        path: PAGES.PRODUCT,
        element: <Product></Product>,
      },
      {
        path: PAGES.STORE,
        element: <Store />,
      },
      {
        path: PAGES.ORDERS,
        element: <Order />,
      },
      {
        path: PAGES.PRODUCT + "/:productId",
        element: <ProductEdit />,
      },
      {
        path: PAGES.PRODUCTS,
        element: <Products />,
      },
      {
        path: PAGES.USERS,
        element: <Users />,
      },
      {
        path: PAGES.ADDUSER,
        element: <AddUser />,
      },

      {
        path: PAGES.FARMS,
        element: <Farms />,
      },
      {
        path: PAGES.PEOPLE,
        element: <People></People>,
      },
      {
        path: PAGES.PERSON + "/:personId",
        element: <Person></Person>,
      },
      {
        path: PAGES.PERSONEDIT + "/:personId",
        element: <PersonEdit></PersonEdit>,
      },
      {
        path: PAGES.FLAGS + "/:flagTypeId",
        element: <Flags></Flags>,
      },
      {
        path: PAGES.FLAG + "/:flagTypeId/:flagId?",
        element: <Flag></Flag>,
      },
      {
        path: PAGES.ADMIN,
        element: <Admin></Admin>,
      },
    ],
  },
  {
    path: PAGES.SIGNIN,
    element: <Signin />,
  },
  {
    path: PAGES.REGISTER,
    element: <Register />,
  },
]);
