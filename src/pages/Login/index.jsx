import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../App.css";
import { signIn, signUp } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
let isLogin = localStorage.getItem("isLoggedIn");
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, message, status} = useSelector((state) => state.auth);
  const [login, setLogin] = useState(false);
  // const [success, setSuccess] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login
      ? dispatch(signUp({ data }))
      : dispatch(
          signIn({ data }),
          isLogin ? navigate("/dashboard") : navigate("/")
        );

    reset();
  };
  // useEffect(() => {
  //   debugger;
  //   const isLoggedIn = localStorage.getItem("isLoggedIn");
  //   setIsLogin(isLoggedIn);
  // }, [signIn]);
  return (
    <>
      <div className="App">
        {login ? (
          <form className="App" onSubmit={handleSubmit(onSubmit)}>
            <span className="title">Registration</span>
            {status === "success" ? (
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

            <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            <span className="account-register">
              already have account
              <button onClick={() => setLogin(false)}>Login</button>
            </span>
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
            <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            <span className="account-register">
              don't have account
              <button onClick={() => setLogin(true)}>register</button>
            </span>
          </form>
        )}
      </div>
    </>
  );
}
export default Login;
