import { configureStore } from "@reduxjs/toolkit";
import rentReducer from "./features/rentsSlice";
import flatReducer from "./features/flatsSlice";

export const store = configureStore({
  reducer: {
    rents: rentReducer,
    flats: flatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
