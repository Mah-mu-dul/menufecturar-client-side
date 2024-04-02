import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";


const initialFilter = { status: 'all', itemName: '', selectedName: 'all' };

const ManageOrders = () => {
  let [orders, setOrders] = useState([]);

  const [display, setDisplay] = useState([]);
  const [filterByType, setFilterByType] = useState(orders);
  const [selectedType, setSelectType] = useState("All")






  //  new normalized  states 
  const [allOrders, setAllOrders] = useState([])
  const [DisplayOrders, setDisplayOrders] = useState([])
  const [filterParameters, setFilterParameters] = useState({ status: "", item: "" })
  const [reload, setReload] = useState(true)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/orders");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAllOrders(data);
        console.log(allOrders);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [reload])

  /*
  there are 4 cases:
      1. status all and items all
      2. status all and items spacific
      3. staus specific items all
      4. staus specific items specific
  */


  // useEffect(() => {

  //   const filteredData = allOrders.filter(item => {
  //     return (
  //       (filterParameters.status === 'all' || item.status === filterParameters.status) &&
  //       (item.itemName.includes(filterParameters.item) || filterParameters.item === '')
  //     );
  //   });
  //   setDisplayOrders(filteredData)


  //   console.log(DisplayOrders);
  //   console.log(filterParameters);
  // }, [filterParameters])




  // let allitemsinarray = [...new Set(display.map(item => item.itemName))];  // to find unique names in the display

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("http://localhost:5000/orders");
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     const data = await response.json();
    //     setOrders(data);
    //     setDisplay(data);
    //     console.log(data);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    //   setSelectType("all")
    // };

    // fetchData();
  }, []);

  // setDisplay(orders)

  const shipedHandle = (id) => {
    const status = "shiped";
    const order = { status };

    // const url = `http://localhost:5000/order/${id}`;
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
        toast.success("make shiped sucessfull");
        window.location.reload();
      });
    console.log("shipped for ", id);
  };

  const [filter, setFilter] = useState(initialFilter);
  const [uniqueItemNames, setUniqueItemNames] = useState([]);


  // Replace with your array of objects

  // Function to filter the data based on the filter criteria
  useEffect(() => {
    const filteredData = allOrders.filter(item => {
      return (
        (filter.status === 'all' || item.status === filter.status) &&
        (filter.selectedName === 'all' || item.itemName === filter.selectedName) &&
        (item.itemName.toLowerCase().includes(filter.itemName.toLowerCase()) || filter.itemName === '')
      );
    });
    setDisplayOrders(filteredData)
    console.log(DisplayOrders);
  }, [filter])

  // Function to handle changes in the filter dropdowns
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };
  
  return (
    <div>
      <div className="overflow-x-auto">
        <button
          onClick={() => {
            // filterorders("all");
            setReload(true)
            setFilterParameters({ ...filterParameters, status: "all", item: "all" })
          }}
          className="btn btn-sm borde-0 border-rose-500 text-black hover:bg-gray-200 mx-5"
        >
          Reload orders
        </button>
        <select name="status" onChange={handleFilterChange} value={filter.status}>
          <option value="all">All</option>
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
          <option value="shiped">Shipped</option>
        </select>
        
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            className="border  rounded m-2"
            name="itemName"
            value={filter.itemName}
            onChange={handleFilterChange}
          />
        </div>
        <div className="flex justify-center">

          <button
            onClick={() => {
              // filterorders("all");
              setFilterParameters({ ...filterParameters, status: "all", item: "all" })
            }}
            className="btn btn-sm borde-0 border-rose-500 text-black hover:bg-gray-200 m-5 "
          >
            All orders
          </button>
          <button
            onClick={() => {
              // filterorders("paid");
              // setSelectType("paid")
              setFilterParameters({ ...filterParameters, status: "paid", item: "all" })
            }}
            className="btn btn-sm borde-0 border-rose-500 text-black hover:bg-gray-200 m-5 "
          >
            paid orders
          </button>
          <button
            onClick={() => {
              // filterorders("unpaid");
              // setSelectType("unpaid")
              setFilterParameters({ ...filterParameters, status: "unpaid", item: "all" })
            }}
            className="btn btn-sm borde-0 border-rose-500 text-black hover:bg-gray-200 m-5 "
          >
            Unpaid orders
          </button>
          <button
            onClick={() => {
              // filterorders("shiped");
              setFilterParameters({ ...filterParameters, status: "shiped", item: "all" })
            }}
            className="btn btn-sm borde-0 border-rose-500 text-black hover:bg-gray-200 m-5 "
          >
            shiped orders
          </button>

          {/* dropdown start here  */}
          <button className="text-black  ">
            <div className="dropdown dropdown-hover h-10">
              <label
                tabIndex="0"
                className="btn m-1  btn-sm borde-0 border-rose-500  text-black hover:bg-gray-200 "
              >
                orders by Item
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {
                  DisplayOrders ? <li
                    className="border-b-2 mt-2"
                    onClick={() => setFilterParameters({ ...filterParameters, item: "all" })}>
                    All</li> : <></>
                }

                {DisplayOrders?.map((order, i) => (
                  <li key={i} className="border-b-2">
                    <p onClick={() => setFilterParameters({ ...filterParameters, item: order.itemName })}>

                      {order.itemName}
                    </p>
                  </li>
                ))}

              </ul>
            </div>
          </button>

          <button className="uppercase font-bold btn-sm disabled border rounded-md border-green-500 text-black  m-5 ">
            total {
              selectedType === "all" ? orders?.length + " Items" : (filterByType?.length + " " + filterByType?.[0]?.status)
            }

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
            {DisplayOrders?.map((order, i) => (
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
                    <a
                    // href={`mailto:${order.email}`}
                    >
                      <button
                        className={`btn normal-case bg-gray-100 hover:bg-gray-300 border-0 text-black `}
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
