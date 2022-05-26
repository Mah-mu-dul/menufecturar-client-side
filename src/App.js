import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Shared/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import About from "./components/About";
import Signup from "./components/Signup/Signup";
import RequreAuth from "./components/Shared/RequireAuth";
import MyOrders from "./components/Dashboard/MyOrders";
import MyReviews from "./components/Dashboard/MyReviews";
import Purchese from "./components/purchese/Purchese";
import Myprofile from "./components/Dashboard/Myprofile";
import AddItems from "./components/Dashboard/AddItems";
import ManageProduct from "./components/Dashboard/ManageProduct";
import ManageOrders from "./components/Dashboard/ManageOrders";
import MakeAdmin from "./components/Dashboard/MakeAdmin";
import Portfolio from "./components/Home/Portfolio";
import Error from "./components/Shared/Error";
function App() {
  return (
    <div className="text-black ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/dashboard"
          element={
            <RequreAuth>
              <Dashboard />
            </RequreAuth>
          }
        >
          <Route index element={<MyOrders />} />
          <Route path="review" element={<MyReviews />} />
          <Route path="profile" element={<Myprofile />} />
          <Route path="addproduct" element={<AddItems />} />
          <Route path="manageproducts" element={<ManageProduct />} />
          <Route path="manageorders" element={<ManageOrders />} />
          <Route path="makeadmin" element={<MakeAdmin />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/purchess"
          element={
            <RequreAuth>
              <Purchese />
            </RequreAuth>
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
