import { configureStore } from "@reduxjs/toolkit";
import Authreducer from "../store/UserSlice";
import ProductReducer from "../store/ProductsSlice";

export const store = configureStore({
  reducer: {
    user: Authreducer,
    products: ProductReducer,
  },
});
