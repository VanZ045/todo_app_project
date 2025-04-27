import React from 'react';

const FilterSortControls = ({ setFilterUserId, setSortOrder }) => {
  return (
    <div className="filter-sort-controls">
      <div>
        <label>Filter by User ID:</label>
        <select onChange={(e) => setFilterUserId(e.target.value)}>
          <option value="">All</option>
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Sort Uncompleted:</label>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortControls;
