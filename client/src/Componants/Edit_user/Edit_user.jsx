import React, { useState, useEffect } from "react";
import Style from "./edit_user.module.css";
import { useNavigate, useParams } from "react-router-dom";

function Edit_user() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    name: "",
    userName: "",
    email: "",
    number: "",
  });

  const { id } = useParams();
  const loadUserData = async () => {
    try {
      const res = await fetch(`http://localhost:8080/${id}`);
      const data = await res.json();
      setInputData(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const editUser = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:8080/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
      });

      const responce = await res.json();
      console.log(responce);

      navigate("/alluser");
    } catch (error) {}
  };

  return (
    <div>
      <h1 className={Style.form_heading}>Edit User</h1>
      <form className={Style.add_user}>
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
        <button onClick={editUser} className={Style.add_user_btn}>
          Edit User
        </button>
      </form>
    </div>
  );
}

export default Edit_user;
