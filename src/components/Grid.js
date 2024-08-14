import React from "react";
import { useSelector } from "react-redux";
import Cell from "./Cell";

const Grid = () => {
  const cells = useSelector((state) => state.spreadsheet.cells);
  const columns = 10; // Number of columns
  const rows = cells.length / columns;

  const generateColumnLetters = () => {
    return Array.from({ length: columns }, (_, i) =>
      String.fromCharCode(65 + i)
    ); // A, B, C, ...
  };

  return (
    <div className="grid grid-cols-11 gap-0.5">
      {/* Render the top header with column letters */}
      <div className="bg-gray-200 p-2 text-center font-bold"></div>
      {generateColumnLetters().map((letter) => (
        <div key={letter} className="bg-gray-200 p-2 text-center font-bold">
          {letter}
        </div>
      ))}

      {/* Render rows with row numbers on the left */}
      {Array.from({ length: rows }, (_, rowIndex) => (
        <React.Fragment key={rowIndex}>
          <div className="bg-gray-200 p-2 text-center font-bold">
            {rowIndex + 1}
          </div>
          {Array.from({ length: columns }, (_, colIndex) => {
            const cellIndex = rowIndex * columns + colIndex;
            return (
              <Cell
                key={cellIndex}
                index={cellIndex}
                value={cells[cellIndex]}
              />
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Grid;
