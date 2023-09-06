import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    currentId: 4,
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.currentId++,
        text: action.payload.trim(),
        status: "todo",
      });
    },
    updateTodo: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload);
      state.todos[item].status =
        state.todos[item].status === "todo" ? "done" : "todo";
      state.todos.push(state.todos.splice(item, 1)[0]);
    },
    deleteTodo: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload);
      if (item > -1) {
        state.todos.splice(item, 1);
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
