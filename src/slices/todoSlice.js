// SLICE FOR TODO LIST.

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // reducer for add a task to todo.
    addToDo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        desc: action.payload.desc,
        status: action.payload.status,
      };
      state.todos.push(todo);
    },
    // reducer for removing a task
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
    // reducer for updating the task's status 
    updateStatus: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].status = "Completed";
    },
  },
});

export const { addToDo, removeToDo, updateStatus } = todoSlice.actions;

export default todoSlice.reducer;
