import React from "react";
import filtericon from "../../assest/filtering.svg";
import roundicon from "../../assest/ci_grid-big-round.svg";
import viewlisticon from "../../assest/bi_view-list (1).svg";
import line from "../../assest/Line 5.svg";

const Filter = ({ onSortChange, onSearch, onShowChange, totalItemsCount, showPerPage }) => { // Added showPerPage to destructured props
  const handleSortChange = (e) => {
    const { name, value } = e.target;
    onSortChange(name === "sortBy" ? value : null, name === "sortOrder" ? value : null);
  };

  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  const handleShowChange = (e) => {
    const { value } = e.target;
    onShowChange(value);
  };

  return (
    <div className="h-[100px] bg-pink-300 flex justify-between items-center" style={{ backgroundColor: "rgba(249, 241, 231, 1)" }}>
      <div className="flex items-center">
        <img src={filtericon} alt="" className="ml-9" />
        <h3 className="px-3">Filter</h3>
        <img src={roundicon} alt="" className="px-3" />
        <img src={viewlisticon} alt="" className="px-3" />
        <img src={line} alt="" className="px-3" />
        <p className="px-3">
          Showing 1–{ showPerPage} of {totalItemsCount} results
        </p>
      </div>
      <div className="flex items-center">
        <p className="px-2">Show</p>
        <input
          type="number"
          value={showPerPage}
          onChange={handleShowChange}
          className="w-[55px] h-[30px] px-2 text-black text-center"
        />
        <p className="px-2">Sort by</p>
        <select name="sortBy" onChange={handleSortChange} className="w-[188px] h-[30px] text-left">
          <option value="price">Price</option>
          <option value="alphabetically">Alphabetically</option>
        </select>
        <select name="sortOrder" onChange={handleSortChange} className="w-[188px] h-[30px] text-left">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter product Name"
          onChange={handleSearch}
          className="w-[188px] h-[30px] mr-9 text-left"
        />
      </div>
    </div>
  );
};

export default Filter;
