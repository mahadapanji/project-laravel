import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login/Login";
import ListProduct from "../pages/Product/ListProduct";
import AddProduct from "../pages/Product/AddProduct";
import ListOrder from "../pages/Order/ListOrder";

function ListPage() {
  const listPage = [
    {
      path: "/",
      component: <Login />,
      isPrivate: false,
    },
    {
      path: "/dashboard",
      component: <Dashboard />,
      isPrivate: true,
    },

    {
      path: "/product",
      component: <ListProduct />,
      isPrivate: true,
    },
    {
      path: "/product/add",
      component: <AddProduct />,
      isPrivate: true,
    },
    {
      path: "/order",
      component: <ListOrder />,
      isPrivate: true,
    },
  ];

  return listPage;
}

export default ListPage;
