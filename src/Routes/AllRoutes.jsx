import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Component/Admin/Login";
import Data from "../Component/Admin/Data";
import Report from "../Component/Admin/Reports";
import User from "../Component/User";
import Navbar from "../Component/Admin/Navbar";
import Home from "../Component/HomeSection/Home";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/data"
          element={
            <PrivateRoute>
              <Data />
            </PrivateRoute>
          }
        />

        <Route
          path="/report"
          element={
            <PrivateRoute>
              <Report />
            </PrivateRoute>
          }
        />

        <Route path="/report" element={<Report />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
