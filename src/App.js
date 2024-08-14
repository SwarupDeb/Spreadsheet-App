import React, { useState } from "react";
import Grid from "./components/Grid";
import SearchFilter from "./components/SearchFilter";
import Pagination from "./components/Pagination";
import FileButton from "./components/FileButton";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <FileButton />
        <SearchFilter />
      </div>
      <Grid />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
