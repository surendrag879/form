import React, { useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { signIn, signUp } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  let isLogin = localStorage.getItem("isLoggedIn");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { error, message } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    show
      ? dispatch(signUp({ data }))
      : dispatch(
          signIn({ data }),
          isLogin ? navigate("/dashboard") : navigate("/")
        );

    reset();
  };

  return (
    <>
      {show ? (
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
          <span className="title">Registration</span>
          {message ? (
            <span style={{ color: "green" }}>{message}</span>
          ) : (
            <span style={{ color: "red" }}>{error}</span>
          )}
          <input
            type="text"
            placeholder="Enter name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <input
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors.email && (
            <span style={{ color: "red" }}>*Email* is mandatory </span>
          )}

          <input
            type="password"
            placeholder="Enter password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span style={{ color: "red" }}>*password* is mandatory </span>
          )}
          <span className="account-register">
            already have account?
            <button onClick={() => setShow(false)}>Login</button>
          </span>
          <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
        </form>
      ) : (
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
          <p className="title">Login</p>
          <span style={{ color: "red" }}>{message}</span>
          <input
            type="email"
            placeholder="Enter username"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors.email && (
            <span style={{ color: "red" }}>username is required </span>
          )}

          <input
            type="password"
            placeholder="Enter password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span style={{ color: "red" }}>password is required </span>
          )}
          <span className="account-register">
            don't have account?
            <button onClick={() => setShow(true)}>registration</button>
          </span>
          <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
        </form>
      )}
    </>
  );
}
export default Login;
