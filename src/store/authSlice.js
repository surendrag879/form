import { createSlice } from "@reduxjs/toolkit";
import { getLocalData, setLocalData } from "../Helper/storage";
const user = getLocalData("user");
let userLocal;
if (user) {
  userLocal = user.map((e) => e.email);
}
console.log(userLocal);
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
      console.log("signUpData", signUpData);

      let users = getLocalData("user");

      if (!users) {
        users = [];
      }
      debugger;
      if (user) {
        debugger;
        userLocal.forEach((item) => {
          console.log("item", item);

          if (item != signUpData.email) {
            debugger;
            users.push(signUpData);
            setLocalData("user", users);
            state.message = "Registration Successfully....";
            debugger;
          } else {
            debugger;
            state.message = "account already exits...";
            debugger;
          }
        });
      }
      debugger;
      users.push(signUpData);
      setLocalData("user", users);
      state.message = "Registration Successfully....";
    },

    signIn: (state, action) => {
      const obj = {
        email: action.payload.data.email,
        password: action.payload.data.password,
      };

      if (
        userLocal.email === obj.email &&
        userLocal.password === obj.password
      ) {
        state.isLoggedIn = true;
        state.message = "Login successfully";
        state.user = obj;
      } else {
        state.message = "username & password not match";
      }
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
