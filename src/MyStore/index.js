import { configureStore } from "@reduxjs/toolkit";
import Slices from './Slices'

const store = configureStore({
  reducer: {
    Data: Slices.reducer,
  },
});

export default store;
