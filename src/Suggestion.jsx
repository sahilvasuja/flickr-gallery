
import React from 'react';

const Suggestions = ({ suggestions, onSuggestionClick }) => {
  return (
    <div className="flex justify-center  items-center bg-gray-100">
      <div className="bg-white p-5 shadow-lg my-2 rounded-lg">
        <div className="flex flex-wrap justify-center">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
              onClick={() => onSuggestionClick(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
