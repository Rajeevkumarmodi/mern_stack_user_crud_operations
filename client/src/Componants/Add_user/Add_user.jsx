import React, { useState } from "react";
import Style from "./add_user.module.css";
import { useNavigate } from "react-router-dom";

function Add_user() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [inputData, setInputData] = useState({
    name: "",
    userName: "",
    email: "",
    number: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
      });

      const serverRes = await res.json();
      console.log(serverRes);

      if (serverRes.index === 0) {
        setError(true);
      } else {
        navigate("/alluser");
        setError(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {error && <h2 className={Style.error}>*Please Enter Unique user Data</h2>}
      <h1 className={Style.form_heading}>Add User</h1>
      <form onSubmit={submitData} className={Style.add_user}>
        <input
          required
          onChange={changeHandler}
          className={Style.input_box}
          type="text"
          placeholder="Enter Name"
          name="name"
          value={inputData.name}
        />
        <input
          required
          onChange={changeHandler}
          className={Style.input_box}
          type="text"
          placeholder="Enter User Name"
          name="userName"
          value={inputData.userName}
        />
        <input
          required
          onChange={changeHandler}
          className={Style.input_box}
          type="email"
          placeholder="Enter Email Id"
          name="email"
          value={inputData.email}
        />
        <input
          required
          onChange={changeHandler}
          className={Style.input_box}
          type="number"
          placeholder="Enter Mobile Number"
          name="number"
          value={inputData.number}
        />
        <button className={Style.add_user_btn}>Add User</button>
      </form>
    </div>
  );
}

export default Add_user;
