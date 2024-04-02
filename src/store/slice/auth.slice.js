import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState :{
    name : "test"
  },
  reducers: {
    setUsersData: (state, action) => {
      state.name = action.payload
    },
  },
});

export const { setUsersData } = authSlice.actions;
export default authSlice.reducer;
