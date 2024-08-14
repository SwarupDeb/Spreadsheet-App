import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCell } from "../redux/spreadsheetSlice";

import * as XLSX from "xlsx";

const FileButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cells = useSelector((state) => state.spreadsheet.cells);
  const dispatch = useDispatch();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleDownload = () => {
    const worksheetData = [];
    const numberOfColumns = 10; // Adjust according to your grid setup

    // Convert the cells array into a 2D array representing rows and columns
    for (let i = 0; i < cells.length; i += numberOfColumns) {
      worksheetData.push(cells.slice(i, i + numberOfColumns));
    }

    // Create a worksheet and workbook
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Create and download the .xlsx file
    XLSX.writeFile(workbook, "spreadsheet.xlsx");
  };

  const handleImport = (e) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const importedCells = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Flatten the 2D array to a 1D array and update the cells
      const flattenedCells = importedCells.flat();
      dispatch(updateCell(flattenedCells));
    };
    fileReader.readAsArrayBuffer(e.target.files[0]);
  };

  return (
    <div className="relative flex space-x-2 mb-4">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-black text-white px-4 py-2 rounded "
      >
        File
      </button>
      {isHovered && (
        <div
          className="absolute bg-white border rounded top-10 shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <label className="block px-4 py-2 cursor-pointer hover:bg-gray-100">
            Import
            <input
              type="file"
              accept=".xlsx"
              onChange={handleImport}
              className="hidden"
            />
          </label>
          <button
            onClick={handleDownload}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Download
          </button>
        </div>
      )}
    </div>
  );
};

export default FileButton;
