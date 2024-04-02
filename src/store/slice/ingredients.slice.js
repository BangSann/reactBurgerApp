import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      nama: "Cheese",
      harga: 5000,
    },
    {
      nama: "Lettuce",
      harga: 1000,
    },
    {
      nama: "Tomato",
      harga: 2500,
    },
    {
      nama: "Pickles",
      harga: 2500,
    },
    {
      nama: "Meat",
      harga: 14000,
    },
    {
      nama: "Mayo",
      harga: 4000,
    },
    {
      nama: "Sauce",
      harga: 4000,
    },
  ],
};

export const ingredientsSlice = createSlice({
  name: "allIngredients",
  initialState,
  reducers: {
    setIngredients: (state, action) => {
      const sampel = [...state.value];
      sampel.push(action.payload);
      state.value = sampel;
    },
  },
});

export const { setIngredients } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
