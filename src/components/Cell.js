import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCell } from "../redux/spreadsheetSlice";

const Cell = ({ index, value }) => {
  const [editMode, setEditMode] = useState(false);
  const [cellValue, setCellValue] = useState(value);
  const dispatch = useDispatch();
  const highlightedCells = useSelector(
    (state) => state.spreadsheet.highlightedCells
  );

  const handleBlur = () => {
    setEditMode(false);
    dispatch(updateCell({ index, value: cellValue }));
  };

  const isHighlighted = highlightedCells.includes(index);

  return (
    <div
      className={`border p-2 text-sm text-center ${
        isHighlighted ? "bg-yellow-300" : "bg-white"
      }`}
      onClick={() => setEditMode(true)}
    >
      {editMode ? (
        <input
          className="w-full text-center"
          value={cellValue}
          onChange={(e) => setCellValue(e.target.value)}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        cellValue
      )}
    </div>
  );
};

export default Cell;
