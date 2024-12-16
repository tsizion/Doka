/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home";
import ReferralForm from "./components/Forms/ReferralForm";
import UserForm from "./components/Forms/userForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="referral" element={<ReferralForm onSubmit={() => {}} />} />
      <Route path="signup" element={<UserForm />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
