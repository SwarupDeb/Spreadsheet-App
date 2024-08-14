import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  cells: Array(1000).fill(""), // Default 1000 empty cells
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
      state.history.push([...state.cells]); // Save current state to history
      state.cells[index] = value; // Update the specific cell
      state.future = []; // Clear future after any new update
      Cookies.set("spreadsheetData", JSON.stringify(state.cells), { expires: 7 });
    },
    undo: (state) => {
      // console.log("Undo called", state.history);
      if (state.history.length > 0) {
        state.future.push([...state.cells]);
        state.cells = state.history.pop();
        // console.log("Undo performed", state.cells);
      }
    },
    redo: (state) => {
      if (state.future.length > 0) {
        state.history.push([...state.cells]); // Save current state to history
        state.cells = state.future.pop(); // Restore last undone state from future
        state.highlightedCells = []; // Clear any highlights
        Cookies.set("spreadsheetData", JSON.stringify(state.cells), { expires: 7 });
      }
    },
    clearCells: (state) => {
      state.history.push([...state.cells]); // Save current state to history
      state.cells = Array(1000).fill(""); // Clear all cells
      state.future = []; // Clear future after clearing cells
      state.highlightedCells = []; // Clear any highlights
      Cookies.set("spreadsheetData", JSON.stringify(state.cells), { expires: 7 });
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
    loadFromCookies: (state) => {
      const cookieData = Cookies.get("spreadsheetData");
      if (cookieData) {
        state.cells = JSON.parse(cookieData);
      }
    },
  },
});

export const {
  updateCell,
  undo,
  redo,
  clearCells,
  searchCells,
  loadFromCookies,
} = spreadsheetSlice.actions;
export default spreadsheetSlice.reducer;
