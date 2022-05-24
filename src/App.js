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
function App() {
  return (
    <div className="text-black ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
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
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
