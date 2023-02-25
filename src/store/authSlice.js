import { createSlice } from "@reduxjs/toolkit";
import { getLocalData, setLocalData } from "../Helper/storage";


const initialState = {
  error: "",
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      let user = getLocalData("user");
      let signUpData = {
        name: action.payload.data.name,
        email: action.payload.data.email,
        password: action.payload.data.password,
      };
      // console.log(signUpData)
     
      if (user && user.length > 0) {
        if (user.filter((d) => d.email === signUpData.email).length < 1) {
          user.push(signUpData);
          setLocalData("user", user);
          state.message = "Registration Successfully....";
        } else {
          state.error = "email already exits";
        }
      } else {
        user.push(signUpData);
        setLocalData("user", user);
        state.message = "Registration Successfully....";
      }
    },

    signIn: (state, action) => {
      let user = getLocalData("user");
      const login = {
        email: action.payload.data.email,
        password: action.payload.data.password,
      };

      if (user && user.length > 0) {
        let username = user.find((d) => d.email === login.email);
        if (username) {
          if (username.email !== login.email) {
            state.message = "username incorrect try again...";
          } else if (username.password !== login.password) {
            state.message = "password incorrect try again...";
          } else if (
            username.email !== login.email &&
            username.password !== login.password
          ) {
            state.message = "username & password incorrect try again...";
          } else if (
            username.email === login.email &&
            username.password === login.password
          ) {
            state.message = "login successfully...";
            localStorage.setItem("isLoggedIn", true);
          }
        } else {
          state.message = "username not found";
        }
      } else {
        state.message = "username & password not found";
      }
    },
  },
});

export const { signUp, signIn} = authSlice.actions;
export default authSlice.reducer;
