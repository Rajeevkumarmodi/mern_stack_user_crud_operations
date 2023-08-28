import React, { useEffect, useState } from "react";
import "./show_all_users.css";
import { Link } from "react-router-dom";

function Show_all_users() {
  const [user, setUser] = useState([]);

  const showUsers = async () => {
    try {
      const res = await fetch("http://localhost:8080/allusers");
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showUsers();
  }, []);

  const dataDelete = async (email) => {
    try {
      const res = await fetch(`http://localhost:8080/${email}`, {
        method: "DELETE",
      });
      const data = await res.json();
      showUsers();
    } catch (error) {
      console.log("call error", error);
    }
  };

  return (
    <div>
      <h1 className="heading">All Users</h1>
      <table className="">
        <thead>
          <tr>
            <th>SI No</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {user.map((data, index) => {
            return (
              <tr key={data._id} className="table_row">
                <td>{index}</td>
                <td>{data.name}</td>
                <td>{data.userName}</td>
                <td>{data.email}</td>
                <td>{data.number}</td>
                <td className="buttons">
                  <Link to={`/${data._id}`} className="updateBtn">
                    Update
                  </Link>
                  <button
                    onClick={() => {
                      dataDelete(data.email);
                    }}
                    className="deleteBtn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Show_all_users;
