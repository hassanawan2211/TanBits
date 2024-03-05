import React, { useState } from "react";
import filtericon from "../../assest/filtering.svg";
import roundicon from "../../assest/ci_grid-big-round.svg";
import viewlisticon from "../../assest/bi_view-list (1).svg";
import line from "../../assest/Line 5.svg";

const Filter = ({ onSortChange, onSearch, onShowChange, totalItemsCount, showPerPage }) => {
  const [sortBy, setSortBy] = useState("price"); 
  const [sortOrder, setSortOrder] = useState("asc"); 

  const handleSortChange = (e) => {
    const { value } = e.target;
    const [newSortBy, newSortOrder] = value.split("-");
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
    onSortChange(newSortBy, newSortOrder); 
  };

  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  const handleShowChange = (e) => {
    const { value } = e.target;
    onShowChange(value);
  };

  return (
    <div className="h-[100px] w-full flex justify-between items-center bg-[#F9F1E7]">
      <div className="flex items-center max-lg:justify-between">
        <img src={filtericon} alt="" className="ml-9 max-md:ml-2" />
        <h3 className="px-3 max-sm:hidden">Filter</h3>
        <img src={roundicon} alt="" className="px-3 max-md:hidden" />
        <img src={viewlisticon} alt="" className="px-3 max-md:hidden" />
        <img src={line} alt="" className="px-3 max-md:hidden" />
        <p className="px-3">
          Showing 1–{ showPerPage} of {totalItemsCount} results
        </p>
      </div>
      <div className="flex items-center">
        <p className="px-2 max-sm:hidden">Show</p>
        <input
          type="number"
          value={showPerPage}
          onChange={handleShowChange}
          className="w-[55px] h-[30px] px-2 text-black text-center max-sm:hidden"
        />
        <p className="px-2 max-md:px-3">Sort by</p>
        <select name="sortBy" value={`${sortBy}-${sortOrder}`} onChange={handleSortChange} className="w-[188px] max-lg:w-[120px] h-[30px] text-center">
          <option value="price-asc">Price Ascending</option>
          <option value="price-desc">Price Descending</option>
          <option value="alphabetically-asc">Alphabetically Ascending</option>
          <option value="alphabetically-desc">Alphabetically Descending</option>
        </select>
      </div>
      <div className="flex items-center max-md:gap-3">
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          className="w-[188px] max-lg:w-[100px] h-[30px] mr-9 max-md:mr-2 text-left p-2 text-black"
        />
      </div>
    </div>
  );
};

export default Filter;
