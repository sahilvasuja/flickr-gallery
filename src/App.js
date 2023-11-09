
import './App.css';
import Gallery from './Gallery';
import Header from './Header';
import React, { useState } from 'react';
import Suggestions from './Suggestion';
export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const initialSuggestions = ['bird', 'sun', 'match', 'beach', 'hotel', 'mountain'];
  const [suggestions, setSuggestions] = useState(initialSuggestions);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const handleSaveHistory = (query) => {
    setSearchHistory([...searchHistory, query]);
  
  };
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
  };
  return (
   <>
     
   <div className='flex flex-col bg-gray-100'>
    <div className='bg-green-700 fixed  w-full'>
    <Header  setSearchHistory={setSearchHistory} onSearch={handleSearch} searchHistory={searchHistory}  onSaveHistory={handleSaveHistory} />
   <Suggestions suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
  
    </div>
   <div className="flex-grow overflow-y-auto px-4 py-[124px]">
 
   <Gallery   searchQuery={searchQuery}  />
      </div>
  
   </div>
   
   </>
  )
}
