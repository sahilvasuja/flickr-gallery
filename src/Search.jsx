import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
    // console.log(onSearch,'5')
  const handleChange = (e) => {
    console.log("object")
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className="input input-bordered w-24 md:w-auto"
      placeholder="Search..."
      value={query}
      onChange={handleChange}
    />
 
  );
};

export default SearchBar;
