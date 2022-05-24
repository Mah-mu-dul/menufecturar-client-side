import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile text-black">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          <h2>this is dashboard</h2>
          <Outlet />
         
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-2/5 lg:w-auto bg-base-100 ">
            <li>
              <Link to='/dashboard'>My orders</Link>
            </li>
            <li>
              <Link to='/dashboard/review'>My reviews</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
