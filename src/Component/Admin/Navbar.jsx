import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
        <Link to="/login">Login</Link>
        <Link to="/data">Data</Link>
        <Link to="/report">Report</Link>
    </div>
  )
}

export default Navbar