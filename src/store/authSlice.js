import { createSlice } from "@reduxjs/toolkit";
import { getLocalData, setLocalData } from "../Helper/storage";

const user = getLocalData("user");
// console.log("user ---", user);

const initialState = {
  user: user | null,
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
        email: action.payload.data.email,
        password: action.payload.data.password,
      };

      if (user && user.length > 0) {
        if (user.filter((d) => d.email === signUpData.email).length < 1) {
          user.push(signUpData);
          setLocalData("user", user);
          state.message = "Registration Successfully....";
        } else {
          state.message = "email already exits";
        }
      } else {
        user.push(signUpData);
        setLocalData("user", user);
        state.message = "Registration Successfully....";
      }
    },

    signIn: (state, action) => {
      const obj = {
        email: action.payload.data.email,
        password: action.payload.data.password,
      };
      state.isLoggedIn = true;
      state.message = "Login successfully";
      state.user = obj;
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.message = "";
      localStorage.removeItem("user");
    },
  },
});

export const { signUp, signIn, logout } = authSlice.actions;
export default authSlice.reducer;
