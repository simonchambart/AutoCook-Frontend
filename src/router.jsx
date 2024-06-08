import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Home from './pages/Home';
import SoldOut1 from './pages/SoldOut1';
import SoldOut2 from './pages/SoldOut2';
import SoldOut3 from './pages/SoldOut3';
import SoldOut4 from './pages/SoldOut4';
import Basket from './pages/Basket';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate replace to="/home" />,
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/soldout1',
        element: <SoldOut1 />
      },
      {
        path: '/soldout2',
        element: <SoldOut2 />
      },
      {
        path: '/soldout3',
        element: <SoldOut3 />
      },
      {
        path: '/soldout4',
        element: <SoldOut4 />
      },
      {
        path: '/basket',
        element: <Basket />
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/logout',
        element: <Logout />,
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ]
  },
]);

export default router;
