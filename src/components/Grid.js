import React from "react";
import { useSelector } from "react-redux";
import Cell from "./Cell";

const Grid = () => {
  const cells = useSelector((state) => state.spreadsheet.cells);

  return (
    <div className="grid grid-cols-10 gap-0.5">
      {cells.map((cellValue, index) => (
        <Cell key={index} index={index} value={cellValue} />
      ))}
    </div>
  );
};

export default Grid;
