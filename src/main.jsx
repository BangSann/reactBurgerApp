import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import AboutUs from './page/about.jsx';
import OrderPage from './page/orderPage/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path :"https://react-burger-app-psi.vercel.app/aboutUs",
    element: <AboutUs/>
  },
  {
    path :"/order",
    element : <OrderPage/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
