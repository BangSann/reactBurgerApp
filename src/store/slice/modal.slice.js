import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState :{
    value : false
  },
  reducers: {
    showModal: (state, action) => {
      state.value = true
    },
    hideModal : (state ,action) =>{
      state.value = false
    },
  },
});

export const { showModal,hideModal } = modalSlice.actions;
export default modalSlice.reducer;