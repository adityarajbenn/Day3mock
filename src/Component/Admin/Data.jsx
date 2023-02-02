import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";

function Data() {
  const [userData, setUserData] = useState([]);
  const [country, setCountry] = useState("country");
  const [gender, setGender] = useState("gender");
  const [name, setName] = useState("none");
  const [nameSearch,setNameSearch] = useState("");


    
  useEffect(() => {
    fetch(`http://localhost:4000/userData?gender=${gender}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  },[gender]);

  useEffect(() => {
    fetch(`http://localhost:4000/userData?country=${country}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  },[country]);

  useEffect(() => {
    fetch(`http://localhost:4000/userData?name=${name}`)
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err)=>{alert("error: User Not found")})
  },[name]);

  
  useEffect(() => {
    fetch(`http://localhost:4000/userData`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  },[]);

  return (
    <>
    
    <Navbar/>
      <div>
        <select onChange={(e)=>{setCountry(e.target.value)}} name="" id="">
          <option value="country">Country</option>
          <option value="India">India</option>
          <option value="Nepal">Nepal</option>
          <option value="Bangladesh">Bangladesh</option>
        </select>
        <select onChange={(e)=>{setGender(e.target.value)}} name="" id="">
          <option value="gender">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <div>
          <input onChange={(e)=>{setNameSearch(e.target.value)}} type="text" name="" id="" />
          <button onClick={()=>{setName(nameSearch)}} >Search name</button>
        </div>
      </div>
      <div className="dataDiv">
        {userData?.map((elem) => {
          return (
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: "10px",
              }}
            >
              <img src="" alt="" />
              <h3>Name: {elem.name}</h3>
              <p>Age: {elem.age}</p>
              <p>Gender: {elem.gender}</p>
              <p>Country: {elem.country}</p>
              <p>Profession: {elem.profession}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Data;
