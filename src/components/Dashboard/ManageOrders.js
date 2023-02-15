import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageOrders = () => {
  let [orders, setOrders] = useState([]);
  const [display, setDisplay] = useState([]);
  const [filterByType, setFilterByType] = useState(orders);
  // console.log(orders);

  // to find all types of items
  let allitems = new Set();
  display?.map((order) => allitems.add(order.itemName));
  let allitemsinarray = new Array(...allitems).join("  ").split("  ");

  // experiment
  useEffect(() => {
    fetch("https://menufecturer-server-git-main-wanna-be-pro.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  // setDisplay(orders)

  const shipedHandle = (id) => {
    const status = "shiped";
    const order = { status };

    const url = `https://menufecturer-server-git-main-wanna-be-pro.vercel.app/order/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("make shiped sucessfull");
        window.location.reload();
      });
    console.log("shipped for ", id);
  };
  const mailHandle = (order) => {
console.log(order)
  }

  const filterorders = (status) => {
    console.log("clicked for", status);
    if (status === "all") {
      setDisplay(orders);
      setFilterByType(display);
    } else {
      const display = orders?.filter((order) => order.status === status);
      setDisplay(display);
      setFilterByType(display);
      console.log(display);
    }
  };
  const filterOrderByItem = (item, display) => {
    console.log(item);
    const show = display?.filter((order) => order.itemName == item);
    // setFilterByType(show);

    console.log(display);
    console.log(show);
  };
  // console.log(orders);

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex justify-center">
          <button
            onClick={() => {
              filterorders("all");
            }}
            className="btn btn-sm borde-0 border-rose-500 text-black hover:text-white m-5 "
          >
            All orders
          </button>
          <button
            onClick={() => {
              filterorders("paid");
            }}
            className="btn btn-sm borde-0 border-pink-500 text-black hover:text-white m-5 "
          >
            paid orders
          </button>
          <button
            onClick={() => {
              filterorders("unpaid");
            }}
            className="btn btn-sm borde-0 border-pink-500 text-black hover:text-white m-5 "
          >
            Unpaid orders
          </button>
          <button
            onClick={() => {
              filterorders("shiped");
            }}
            className="btn btn-sm borde-0 border-pink-500 text-black hover:text-white m-5 "
          >
            shiped orders
          </button>

          {/* dropdown start here  */}
          <button className="text-black  ">
            <div className="dropdown dropdown-hover h-10">
              <label
                tabIndex="0"
                className="btn m-1  btn-sm borde-0 border-pink-500  text-black hover:text-white "
              >
                orders by Item
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {allitemsinarray?.map((order, i) => (
                  <li key={i} className="border-b-2">
                    <p onClick={() => filterOrderByItem(order, display)}>
                      {order}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </button>
          <button className="uppercase font-bold btn-sm disabled border rounded-md border-green-500 text-black  m-5 ">
            total {orders?.length} {orders?.[0]?.status}
          </button>
        </div>

        {/* table start here */}
        <table className="table w-full">
          <thead>
            <tr className="text-white">
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Quantity</th>
              <th>status</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {filterByType?.map((order, i) => (
              <tr key={i + 1}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar w-[50px]">
                    <div className="w-24 rounded-xl">
                      <img alt="" src={order?.img} />
                    </div>
                  </div>
                </td>
                <td>{order?.itemName}</td>
                <td>{order?.email}</td>
                <td>{order?.quantity}</td>
                <td>{order?.status}</td>
                <td>
                  {order.status === "paid" ? (
                    <button
                      onClick={() => shipedHandle(order._id)}
                      className="btn btn-primary"
                    >
                      Ship
                    </button>
                  ) : (
                    <a href={`mailto:${order.email}`}>
                    <button
                      className="btn btn-secondary"
                    >
                      Mail
                    </button>
                    </a>
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

export default ManageOrders;
