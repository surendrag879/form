import { createSlice } from "@reduxjs/toolkit";
import { getLocalData, setLocalData } from "../Helper/storage";

const user = getLocalData("user");
console.log(user)
const initialState = {
  user: user,
  error: null,
  message: null,
};

const listSlice = createSlice({
  name: "List",
  initialState,
  reducers: {
    deleteData: (state, action) => {
      const id = action.payload;
      const clone = [...state.user];
      clone.splice(id, 1);
      setLocalData("user", clone);

    //   window.location.reload();
    },
    updateData: (state, action) => {
      const data = action.payload;
      const cloneUsers = [...state.user];
      const userIndex = cloneUsers.findIndex((cloneIndex)=>cloneIndex.id===data.id);
      cloneUsers[userIndex] = {...data};
      setLocalData('user',cloneUsers)
    //   window.location.reload();
    },
  },
});

export const { editData, updateData, deleteData } = listSlice.actions;
export default listSlice.reducer;
