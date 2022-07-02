import React from "react";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";

const ManageProductModal = ({ prod }, { setProduct }) => {
  const [user, loading] = useAuthState(auth);
  const handleDelete = (id) => {
    console.log("clicked delete");
    const url = `http://localhost:5000/services/${id}`;
    fetch(url, {
      method: "DELETE",
      body: user.email,
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Item deleted");
        console.log(data);
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-600">
            Do you want to delete?
          </h3>
          <p className="py-4 text-center text-2xl font-bold">{prod?.name}</p>
          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              onClick={() => handleDelete(prod._id)}
              className="btn btn-secondary text-white"
            >
              Yes
            </label>
            <label htmlFor="my-modal-6" className="btn btn-primary">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProductModal;
