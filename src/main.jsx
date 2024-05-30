import React from 'react';
import ReactDOM from 'react-dom/client';
import {Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './contexts/Auth.context';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Home from './pages/Home';
import SoldOut from './pages/SoldOut';
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
        path: '/route1',
        element: <SoldOut />
      },
      {
        path: '/route2',
        element: <SoldOut />
      },
      {
        path: '/route3',
        element: <SoldOut />
      },
      {
        path: '/route4',
        element: <SoldOut />
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();