import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ToDo from "../types";
import ToDosState from "./types";

const initialToDoState: ToDosState = {
  toDos: [],
};

const toDosSlice = createSlice({
  name: "todos",
  initialState: initialToDoState,
  reducers: {
    loadToDos: (
      _currentToDoState,
      action: PayloadAction<ToDo[]>,
    ): ToDosState => ({
      toDos: action.payload,
    }),
  },
});

export const toDosReducer = toDosSlice.reducer;
export const { loadToDos: loadToDosActionCreator } = toDosSlice.actions;
