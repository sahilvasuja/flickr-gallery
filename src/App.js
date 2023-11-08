
import './App.css';
import Gallery from './Gallery';
import Header from './Header';
import React, { useState } from 'react';
import Suggestions from './Suggestion';
export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState(['bird', 'sun', 'match', 'virat kohli', 'beach', 'hotel', 'mauntain']);

  const handleSearch = (query) => {
    console.log("app")
    setSearchQuery(query);
  };
  
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
  };
  return (
   <>
   <div className=' bg-gray-300'>
   <Header  onSearch={handleSearch}/>
   <Suggestions suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
    
   <Gallery  searchQuery={searchQuery}  />
   </div>
   
   </>
  )
}
