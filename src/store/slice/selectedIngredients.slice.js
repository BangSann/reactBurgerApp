import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value : [
  ]
};

const selectedIngredient = createSlice({
  name: "selectedIngredients",
  initialState,
  reducers: {
    setSelectedIngredients: (state, action) => {
      const sampel = [...state.value];
      sampel.push(action.payload);
      state.value = sampel;
    },
    unSelectIngredients : (state ,action) =>{
      const sampel = [...state.value];
      sampel.splice(action.payload , 1);
      state.value = sampel;
    },
    resetIngredients : (state, action) =>{
      state.value = action.payload
    }
  },
});

export const { setSelectedIngredients,unSelectIngredients,resetIngredients } = selectedIngredient.actions;
export default selectedIngredient.reducer;
