import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import listReducer from "./listSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    list: listReducer,
  },
});

export default store;
