import React from "react";

const RatingFilter = React.memo(({ filterRating, setFilterRating }) => {

   
  return (
    <div className="filter-container">
      <label>Filter by rating: </label>
      <select value={filterRating} onChange={(e) => setFilterRating(e.target.value)}>
        <option value="all">All</option>
        <option value="8">8+</option>
        <option value="7">7+</option>
        <option value="6">6+</option>
      </select>
    </div>
  );
});

export default RatingFilter;
