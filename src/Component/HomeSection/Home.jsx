import React from "react";
import Login from "../Admin/Login";
import User from "../User";
import { Link } from "react-router-dom";
import AllRoutes from "../../Routes/AllRoutes";

function Home() {
  return (
    <div id="homeDiv">
      <div>
        <h1>
          <Link to="/login">Admin</Link>
        </h1>
        <h1>
          <Link to="/user">User</Link>
        </h1>
      </div>
    </div>
  );
}

export default Home;
