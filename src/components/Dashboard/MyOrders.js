import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrder] = useState([]);

  const [user, loading] = useAuthState(auth);
  const email = user.email;

  useEffect(() => {
    fetch(`https://gentle-oasis-35718.herokuapp.com/order/${email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [email]);
  console.log(orders);
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
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
            {orders.map((order, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>
                  <div class="avatar w-[50px]">
                    <div class="w-24 rounded-xl">
                      <img src={order.img} />
                    </div>
                  </div>
                </td>
                <td>{order.itemName}</td>
                <td>{order.quantity}</td>
                <td>$ {order.quantity * order.price}</td>
                <td>
                  <button className="btn btn-primary">pay</button>
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
