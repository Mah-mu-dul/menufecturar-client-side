import React, { useRef, useState } from "react";
import { Button, Form, Toast } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import SocialLogin from "./SocialLogin";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../Add-new-item/AddItems.css";
import Loading from "../common/Loading/Loading";
import axios from "axios";

const Login = () => {
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const navigateRegister = () => {
    navigate("/register");
  };
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (sending || loading) {
    <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
    toast("Login in sucessfull");
  }
  if (error) {
    window.location.reload();
    return <>{alert(error.message.slice(22, error.message.length - 2))}</>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://infinite-hamlet-19135.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.token);
    navigate(from, { replace: true });
  };

  return (
    <div className=" mb-5 code-pro">
      <div className="login  mx-auto mt-5">
        <div className="text-center">
          {" "}
          <h2>Welcome back </h2>
        </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button ariant="primary" type="submit">
            Log in
          </Button>
        </Form>
        <div className="orHolder">
          <div className="or"></div>S<p className="mx-2">or</p>
          <div className="or"></div>
        </div>
        <p>{error}</p>
        <SocialLogin></SocialLogin>
        <p className="text-end">
          new to here? than
          <button onClick={resetPassword} className="batn">
            {" "}
            change password?
          </button>{" "}
        </p>
        <ToastContainer />

        <p className="text-end">
          new to here? than{" "}
          <Link
            to={"/register"}
            className="text-danger text-decoration-none"
            onClick={navigateRegister}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
