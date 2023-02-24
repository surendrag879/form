import { createSlice } from "@reduxjs/toolkit";
import { getLocalData, setLocalData } from "../Helper/storage";
const user = getLocalData("user");
// console.log("user ---", user);
// const isLoggedInUser = getLocalData("isLoggedIn");
// console.log('isLoggedInUser',isLoggedInUser)

const initialState = {
  user: user,
  status: "",
  error: "",
  message: "",
  ...(user ? { isLoggedIn: true } : { isLoggedIn: false }),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      let signUpData = {
        name: action.payload.data.name,
        email: action.payload.data.email,
        password: action.payload.data.password,
      };

      if (user && user.length > 0) {
        if (user.filter((d) => d.email === signUpData.email).length < 1) {
          user.push(signUpData);
          setLocalData("user", user);
          state.status = "success";
          state.message = "Registration Successfully....";
        } else {
          state.status = "failed";
          state.error = "email already exits";
        }
      } else {
        user.push(signUpData);
        setLocalData("user", user);
        state.status = "success";
        state.message = "Registration Successfully....";
      }
    },

    signIn: (state, action) => {
    
      const login = {
        email: action.payload.data.email,
        password: action.payload.data.password,
      };

      if (user && user.length > 0) {
        let username = user.find((d) => d.email === login.email);
        if (username) {
          if (username.email !== login.email) {
            state.message = "username not found";
          } else if (username.password !== login.password) {
            state.message = "password not found";
          } else if (
            username.email !== login.email &&
            username.password !== login.password
          ) {
            state.message = "username & password not found";
          } else if (
            username.email === login.email &&
            username.password === login.password
          ) {
            state.message = "login successfully...";
            localStorage.setItem("isLoggedIn", JSON.stringify(true));
            
            // isLoggedInUser ? : <Navigate to="/" />;
          }
        } else {
          state.message = "username not found";
        }
      } else {
        state.message = "username & password not found";
      }
    },

    logout: (state) => {
      console.log("clickedd");
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const { signUp, signIn, logout } = authSlice.actions;
export default authSlice.reducer;
