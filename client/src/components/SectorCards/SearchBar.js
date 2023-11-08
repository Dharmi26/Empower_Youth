import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="my-12 mx-auto max-w-md relative">
      <input
        type="text"
        placeholder="Search Trainings"
        className="px-4 py-2 w-full bg-white text-gray-800 placeholder-gray-500 border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
        onChange={handleSearch}
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <FaSearch className="text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBar;
