import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";

import Home from "../pages/home/Home.jsx";
import CategoryByProduct from "../pages/category/CategoryByProduct.jsx";
import ProductDetail from "../pages/category/ProductDetail.jsx";
import NotificationPage from "../pages/notify/NotificationPage.jsx";
import UserPage from "../pages/user/UserPage.jsx";
import PurchaseHistory from "../pages/cart/PurchaseHistory.jsx";
import HomeCart from "../pages/cart/HomeCart.jsx";
import UpdatePage from "../pages/shared/pages/Update.jsx";





const MyApp = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<Home setTasks={setTasks} tasks={tasks} />} />
              <Route path="/categoryByProduct" element={<CategoryByProduct setTasks={setTasks} tasks={tasks} />} />
              <Route path="/detailProduct" element={<ProductDetail setTasks={setTasks} tasks={tasks} />} />
              <Route path="/notificationPage" element={<NotificationPage setTasks={setTasks} tasks={tasks} />} />
              <Route path="/contactUser" element={<UserPage setTasks={setTasks} tasks={tasks} />} />
              <Route path="/purchaseHistory" element={<PurchaseHistory setTasks={setTasks} tasks={tasks} />} />
              {/* <Route path="/update" element={<UpdatePage setTasks={setTasks} tasks={tasks} />} /> */}
              <Route path="/homeCart" element={<HomeCart setTasks={setTasks} tasks={tasks} />} />


            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
