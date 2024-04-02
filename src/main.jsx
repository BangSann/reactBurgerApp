import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AboutUs from "./page/about.jsx";
import OrderPage from "./page/orderPage/index.jsx";

import { Provider } from "react-redux";
import { store } from "./store/index.js";
import OrderList from "./page/orderPage/orderList.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/order" element={<OrderPage/>}/>
          {/* <Route path="/order/:slug" element={<OrderList/>}/> */}
        </Routes>
      </BrowserRouter>
    </Provider>
);
