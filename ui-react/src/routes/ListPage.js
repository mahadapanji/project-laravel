import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login/Login";
import ListProduct from "../pages/Product/ListProduct";

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
  ];

  return listPage;
}

export default ListPage;
