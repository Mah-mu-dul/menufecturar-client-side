import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // fetch("http://localhost:5000/users")
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);

  const handleAdmin = (id) => {
    const role = "admin";
    const user = { role };

    console.log("clicked");

    // const url = `http://localhost:5000/users/${id}`;
    const url = `http://localhost:5000/users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("make admin sucessfull");
        window.location.reload();
      });
  };
  return (
    <div>
      {
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-white">
                <th>No.</th>
                <th>name</th>
                <th>email</th>
                <th>Roll</th>
                <th>Make Admin</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  {user.role !== "admin" && (
                    <td>
                      <button
                        onClick={() => handleAdmin(user._id)}
                        className="btn btn-primary"
                      >
                        make admin
                      </button>
                    </td>
                  )}
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default MakeAdmin;
