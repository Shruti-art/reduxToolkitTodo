import { configureStore } from "@reduxjs/toolkit"; // core redux
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
