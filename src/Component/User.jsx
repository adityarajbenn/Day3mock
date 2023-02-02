import React from "react";
import { useState } from "react";

function User() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
    gender: "",
    country: "",
    profession: "",
  });
  function call(e) {
    e.preventDefault();
    fetch(`http://localhost:4000/userData`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    document.querySelector("form").reset();
    alert("successfully registered")
  }

  return (
    <div id="userFormDiv">
      <form
      id="userForm"
        onSubmit={(e) => {
          call(e);
        }}
        action="submit"
      >
        <input
          onChange={(e) => {
            setUserInfo({ ...userInfo, name: e.target.value });
          }}
          type="text"
          name=""
          id="name"
          placeholder="Name"
        />
        <input
          onChange={(e) => {
            setUserInfo({ ...userInfo, age: e.target.value });
          }}
          type="number"
          name=""
          id="age"
          placeholder="Age"
        />
        <input
          onChange={(e) => {
            setUserInfo({ ...userInfo, gender: e.target.value });
          }}
          type="text"
          name=""
          id="gender"
          placeholder="Gender"
        />
        <input
          onChange={(e) => {
            setUserInfo({ ...userInfo, country: e.target.value });
          }}
          type="text"
          name=""
          id="country"
          placeholder="Country"
        />
        <select
          onChange={(e) => {
            setUserInfo({ ...userInfo, profession: e.target.value });
          }}
          name=""
          id=""
        >
          <option value="">Profession</option>
          <option value="student">Student</option>
          <option value="employed">Employed</option>
        </select>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default User;
