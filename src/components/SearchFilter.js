import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCells, undo, redo } from "../redux/spreadsheetSlice";

const SearchFilter = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchCells(query));
  };

  const handleClear = () => {
    setQuery("");
    dispatch(searchCells(""));
  };

  const handleUndo = () => {
    dispatch(undo());
  };

  const handleRedo = () => {
    dispatch(redo());
  };

  return (
    <div className="flex space-x-2 mb-4">
      <input
        className="border p-2 rounded"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleSearch}
      >
        Search
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={handleClear}
      >
        Clear
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleUndo}
      >
        Undo
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleRedo}
      >
        Redo
      </button>
    </div>
  );
};

export default SearchFilter;
