// Header.js
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = ({setSearchHistory, onSearch, onSaveHistory, searchHistory }) => {
   
    const [query, setQuery] = useState('');  
    const handleClear = () => {
        setSearchHistory([])
        setQuery('')
    };
    const [showSearchHistory, setShowSearchHistory] = useState(false);
const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
      onSaveHistory(query);
    }
  };
  const handleInputFocus = () => {
    setShowSearchHistory(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowSearchHistory(false);
    }, 500);
  };
  return (
    <>
       <div className="navbar z-1 top-0 left-0 right-0  bg-teal-500">
  <div className="flex-1">
    <a href='/' className="btn btn-ghost normal-case text-2xl">𝖋𝖔𝖙𝖔-𝖋𝖔𝖑𝖎𝖔 </a>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
  <div className="form-control">
 


              <div className="flex gap-2">
  <input
    type="text"
    className="input w-24 border-none md:w-auto"
    placeholder="Search..."
    value={query}
    onChange={handleChange}
    onFocus={handleInputFocus}
    onBlur={handleInputBlur}
  />
    
  <button className='text-blue-800 text-2xl' onClick={handleSearch}>
    <FontAwesomeIcon icon={faSearch} />
  </button>

</div>
      {showSearchHistory && searchHistory.length > 0 &&  (
        <div className="absolute right-0 mt-11 mr-16 bg-white border border-gray-300 rounded-lg shadow-lg z-10 w-52">
          <ul>
            {searchHistory.map((query, index) => (
              <li key={index} className="p-3 hover:bg-gray-100 cursor-pointer">
                {query}
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleClear()}
            className="block w-full text-left px-4 py-2 bg-red-500 text-white font-bold hover:bg-red-600 rounded-b"
          >
            Clear History
          </button>
        </div>
      )}
   </div>
 
</div>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
        </div>
      </label>
   
  </div>
 
</div>

  
    </>
 

  );
};

export default Header;
