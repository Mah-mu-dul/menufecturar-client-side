import React, { Component } from "react";
import "./Error.css";

class Error extends Component {
  render() {
    return (
      <div>
        <div className="text-5xl  text-center  text-white bg-[#333333]  er w-100 ">
          <div className="py-[20%]">
            <h1>404 </h1>
            <div className=""></div>
            <h2>page not found</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
