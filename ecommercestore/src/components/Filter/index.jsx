import React, { useState } from "react";
import filtericon from "../../assest/filtering.svg";
import roundicon from "../../assest/ci_grid-big-round.svg";
import viewlisticon from "../../assest/bi_view-list (1).svg";
import line from "../../assest/Line 5.svg";

const Filter = ({ handleSort, handleShowItems }) => {
  const [sortBy, setSortBy] = useState("");
  const [showItems, setShowItems] = useState(12);

  const handleChange = (e) => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);
    handleSort(selectedSortBy);
  };

  const handleItemsChange = (e) => {
    const numItems = parseInt(e.target.value);
    setShowItems(numItems);
    handleShowItems(e);
  };

  return (
    <div
      className="flex  justify-between items-center h-[100px]"
      style={{ backgroundColor: "rgba(249, 241, 231, 1)" }}
    >
      <div className="flex justify-between mx-[80px] w-full">
        <div className="flex items-center justify-between">
          <div className="flex justify-between w-[200px] items-center">
            <img src={filtericon} alt="filter icon" />
            <p>Filters</p>
            <img src={roundicon} alt="round icon" />
            <img src={viewlisticon} alt="veiw list icon" />
            <img src={line} alt="line" />
          </div>
          <div className="ml-8">
            <h5>Showing 1–16 of 32 results</h5>
          </div>
        </div>
        <div className="flex justify-between w-[300px] items-center mr-[100px]">
          <div className="flex justify-between items-center w-[80px]">
            <p>Show</p>
            <input
              type="text"
              className="h-[38px] w-[36px] p-[10px]"
              value={showItems}
              onChange={handleItemsChange} 
            />
          </div>
          <div className="flex justify-between items-center w-[230px]">
            <h5 className="ml-10">Sort by</h5>
            <select
              value={sortBy}
              onChange={handleChange}
              className="p-[10px] h-[38px] w-[168px]"
            >
              <option value="">Select</option>
              <option value="price">Price</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
