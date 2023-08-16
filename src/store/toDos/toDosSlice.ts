import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ToDo from "../types";
import ToDoState from "./types";

const initialToDoState: ToDoState = {
  toDos: [],
};

const toDosSlice = createSlice({
  name: "todos",
  initialState: initialToDoState,
  reducers: {
    loadToDos: (
      _currentToDoState,
      action: PayloadAction<ToDo[]>,
    ): ToDoState => {
      const newState = {
        toDos: action.payload,
      };

      return newState;
    },
  },
});

export const toDosReducer = toDosSlice.reducer;
export const { loadToDos: loadToDosActionCreator } = toDosSlice.actions;
