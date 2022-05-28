import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bg from "../../images/bg1.png";

import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { reload } from "firebase/auth";
import auth from "../../firebase.init";
import axios from "axios";

const Login = () => {
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      alert("email sent");
      location.reload();
    } else {
      alert("email required");
    }
  };
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handlesubmit = async (event) => {
    event.preventDefault();

    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);

    const { data } = await axios.post("http://localhost:5000/login", {
      email,
    });
    localStorage.setItem("accessToken", data.token);
    navigate(from, { replace: true });
  };
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  //  we use useEffect to solve a warning  Cannot update a component (`BrowserRouter`) while rendering a different component (`Login`). To locate the bad setState() call inside `Login`, follow the stack trace as described

  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [user, gUser, from, navigate]);
  if (gUser) {
    const info = {
      name: gUser.user.displayName,
      email: gUser.user.email,
      role: "user",
    };
    //add fetch to update user
  }

  let msg;

  if (error) {
    msg = error.message.slice(22, error.message.length - 2);
  }

  if (gError) {
    msg = gError?.message.slice(22, gError.message.length - 2);
  }

  return (
    <div className="bg-blue-50 py-5 pb-20">
      <div className="card w-[80%] lg:w-1/2 mx-auto mt-20 shadow-xl">
        <div className="card-body">
          <h2 className=" mx-auto text-3xl font-bold">Login</h2>
          <form className="" onSubmit={handlesubmit}>
            <label className="label  ">
              <span className="label-text">Email</span>
            </label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              className="mx-auto input input-bordered input-primary w-full "
            />

            <label className="label  ">
              <span className="label-text">Password</span>
            </label>
            <input
              ref={passwordRef}
              name="password"
              type="password"
              className=" mx-auto input input-bordered input-primary w-full "
            />
            <span className="label-text-alt text-lg text-red-700">
              <p>{msg}</p>
            </span>

            <div className="card-actions flex-col  justify-center">
              {loading || gLoading || sending ? (
                <button className="btn btn-accent mx-auto mt-3 text-white w-full loading">
                  loading
                </button>
              ) : (
                <button className="btn btn-accent mx-auto mt-3 text-white w-full">
                  Login
                </button>
              )}
              <label className="label  mx-auto">
                <span></span>
                <span className="label-text text-xl">
                  <Link to="/signup" className="text-[green]">
                    register
                  </Link>
                </span>
              </label>
              <div className=""></div>
            </div>
          </form>
          <button onClick={resetPassword} className="label-text text-xl  ">
            {" "}
            <p className=" text-red-500 ">forgot password? </p>
          </button>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn mx-auto btn-accent text-white w-full"
          >
            <h2 className="text-lg">login with goolge</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
