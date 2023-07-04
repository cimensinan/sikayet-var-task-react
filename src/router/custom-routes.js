import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentsPage from "../pages/students-page";
import NotFoundPage from "../pages/not-found-page";
import SignInPage from "../pages/sign-in-page";
import DashboardPage from "../pages/dashboard-page";
import ProtectedRoute from "./protected-route";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<SignInPage />} />
          <Route path="dashboard">
            <Route
              index
              element={
                <ProtectedRoute admin={true}>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="students"
              element={
                <ProtectedRoute admin={true}>
                  <StudentsPage />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
