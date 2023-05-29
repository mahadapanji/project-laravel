import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login/Login';

function ListPage() {
  const listPage = [
    {
      path: '/dashboard',
      component: <Dashboard />,
      isPrivate: true,
    },
    {
      path: '/',
      component: <Login />,
      isPrivate: false,
    },
  ];

  return listPage;
}

export default ListPage;
