import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const handlesubmit = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const role = "user";
    const user = { name, email, role };
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });

      fetch("https://gentle-oasis-35718.herokuapp.com/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          event.target.reset();
        });
      navigate(from, { replace: true });
  };

  const handleGogle = () => {
    signInWithGoogle();
  };
  if (gUser) {
    const info = {
      name: gUser.user.displayName,
      email: gUser.user.email,
      role: "user",
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {});
    navigate(from, { replace: true });
  }

  let msg;

  if (error) {
    msg = error.message.slice(22, error.message.length - 2);
  }

  if (gError) {
    msg = gError?.message.slice(22, gError.message.length - 2);
  }
  if (updateError) {
    msg = updateError?.message.slice(22, updateError.message.length - 2);
  }

  return (
    <div>
      <div className="card w-[80%] lg:w-1/2 mx-auto mt-20 shadow-xl">
        <div className="card-body">
          <h2 className=" mx-auto text-3xl font-bold">Sign up</h2>
          <form className="" onSubmit={handlesubmit}>
            <label className="label  ">
              <span className="label-text">Name</span>
            </label>
            <input
              ref={nameRef}
              required
              name="name"
              type="text"
              className="mx-auto input input-bordered input-primary w-full "
            />
            <label className="label  ">
              <span className="label-text">Email</span>
            </label>
            <input
              ref={emailRef}
              required
              name="email"
              type="email"
              className="mx-auto input input-bordered input-primary w-full "
            />

            <label className="label  ">
              <span className="label-text">Password</span>
            </label>
            <input
              minLength="6"
              required
              ref={passwordRef}
              name="password"
              type="password"
              className=" mx-auto input input-bordered input-primary w-full "
            />
            <span className="label-text-alt text-lg text-red-700">
              <p>{msg}</p>
            </span>

            <div className="card-actions flex-col  justify-center">
              {loading || gLoading || updating ? (
                <button className="btn btn-accent mx-auto mt-3 text-white w-full loading">
                  loading
                </button>
              ) : (
                <button className="btn btn-accent mx-auto mt-3 text-white w-full">
                  Signup
                </button>
              )}
              <label className="label  mx-auto">
                <span className="label-text text-xl">
                  Already have an account?{" "}
                  <Link to="/login" className="text-secondary">
                    Login
                  </Link>
                </span>
              </label>

              <div className="divider">OR</div>
            </div>
          </form>
          <button
            onClick={handleGogle}
            className="btn mx-auto btn-accent text-white w-full"
          >
            <h2 className="text-lg">Continue with goolge</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
