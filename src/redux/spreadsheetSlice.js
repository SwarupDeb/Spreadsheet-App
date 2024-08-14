import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cells: Array(1000).fill(""),
  history: [],
  future: [],
  highlightedCells: [],
};

const spreadsheetSlice = createSlice({
  name: "spreadsheet",
  initialState,
  reducers: {
    updateCell: (state, action) => {
      const { index, value } = action.payload;
      state.history.push([...state.cells]);
      state.cells[index] = value;
      state.future = [];
      state.highlightedCells = [];
    },
    undo: (state) => {
      if (state.history.length > 0) {
        state.future.push([...state.cells]);
        state.cells = state.history.pop();
      } else {
        alert("No more changes to undo.");
      }
    },
    redo: (state) => {
      if (state.future.length > 0) {
        state.history.push([...state.cells]);
        state.cells = state.future.pop();
      } else {
        alert("No more changes to redo.");
      }
    },
    searchCells: (state, action) => {
      const query = action.payload.toLowerCase();
      if (query) {
        state.highlightedCells = state.cells
          .map((cell, index) =>
            cell.toLowerCase().includes(query) ? index : -1
          )
          .filter((index) => index !== -1);
      } else {
        state.highlightedCells = [];
      }
    },
  },
});

export const { updateCell, undo, redo, searchCells } = spreadsheetSlice.actions;
export default spreadsheetSlice.reducer;
