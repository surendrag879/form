import React from "react";
import { useForm } from "react-hook-form";
import "../../App.css";
import { signUp } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Registartion() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message);
  console.log(message);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(signUp(data));
    reset();
  };

  return (
    <>
      <div className="App">
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
          <span className="title">Registration</span>
          <span style={{ color: "red" }}>{message}</span>
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
        </form>
        <span className="account-register">
          already have account<button>Login</button>
        </span>
      </div>
    </>
  );
}
export default Registartion;
