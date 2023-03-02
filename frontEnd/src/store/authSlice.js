import { createSlice } from "@reduxjs/toolkit";
import { getLocalData, setLocalData } from "../Helper/storage";
const initialState = {
  error: null,
  message: null,
  isLoggedIn: null,
  status : 'idel'
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      let user = getLocalData("user");
      // console.log('userLocalData', user);
      let signUpData = {
        id: Date.now(),
        name: action.payload.data.name,
        email: action.payload.data.email,
        password: action.payload.data.password,
      };

      if (user && user.length > 0) {
        if (user.filter((d) => d.email === signUpData.email).length < 1) {
          user.push(signUpData);
          setLocalData("user", user);
          state.message = "Registration Successfully....";
        } else {
          state.error = "email already exits";
        }
      } else {
        // console.log('signUp',signUpData);
        user.push(signUpData);
        // console.log('user',user)
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
      // console.log("signIn", login);
      if (user && user.length > 0) {
        let username = user.find((d) => d.email === login.email);
        // console.log("username", username);
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
            state.isLoggedIn = true;
            setLocalData("isLoggedIn", true);
          }
        } else {
          state.message = "account not found";
        }
      } else {
        state.message = "Please register first after login";
      }
    },
  },
});

export const { signUp, signIn } = authSlice.actions;
export default authSlice.reducer;
