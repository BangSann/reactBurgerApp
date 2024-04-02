import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth.slice";
import ingredientsSlice from "./slice/ingredients.slice";
import selectedIngredientsSlice from "./slice/selectedIngredients.slice";
import showModal from "./slice/modal.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    ingredients: ingredientsSlice,
    selectedIngredient: selectedIngredientsSlice,
    showModal: showModal,
  },
});
