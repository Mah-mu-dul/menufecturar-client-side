import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyOrders = () => {
  const [orders, setOrder] = useState([{}]);
  // console.log(orders);

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const getItem = async (user) => {
      const email = user.email;
      const url = `http://localhost:5000/orders/${email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      // console.log(data);

      setOrder(data['result']);
      // console.log(data['result']);
    };
    getItem(user);
  }, [user]);

  const paymentHandle = (id) => {
    const status = "paid";
    const order = { status };

    const url = `http://localhost:5000/order/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("paid successfull");
        window.location.reload();
        console.log("shipped for ", id);
      });
    // console.log("clicked");
  };
  if (loading) {
    <Loading />;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-white">
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Total cost </th>
              <th>pay </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <tr key={order._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar w-[50px]">
                    <div className="w-24 rounded-xl">
                      <img src={order.img} />
                    </div>
                  </div>
                </td>
                <td>{order.itemName}</td>
                <td>{order.quantity}</td>
                <td>$ {order.quantity * order.price}</td>
                <td>
                  {order.status === "unpaid" ? (
                    <button
                      onClick={() => paymentHandle(order._id)}
                      className="btn btn-primary"
                    >
                      pay
                    </button>
                  ) : (
                    <>
                      <h1 className="text-3 font-bold">{order.status}</h1>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
