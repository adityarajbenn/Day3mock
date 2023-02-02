import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import myAction from "../../Redux/action";

function Login() {
    const [user, setUser] = useState({
        email:"",
        password:""
    })
    let Navigate= useNavigate();

  function login(e) {
    e.preventDefault();
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then((res)=>res.json())
    .then((data)=>{
        if (data.token){
            myAction(true);
            Navigate("/data");
        }
    })
  }
  return (
    
    <div>
      <form
        onSubmit={(e) => {
          login(e);
        }}
        action=""
      >
        <input onChange={(e)=>{setUser({...user,email:e.target.value})}} type="text" placeholder="Enter Email" />
        <input onChange={(e)=>{setUser({...user,password:e.target.value})}} type="password" name="" id="" placeholder="Enter Password" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Login;
