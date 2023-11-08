import React from 'react';

const Suggestions = ({ suggestions, onSuggestionClick }) => {
  return (
    <div className="flex flex-wrap mt-2">
      {suggestions.map((suggestion, index) => (
        <div key={index} className="mr-2 mb-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => onSuggestionClick(suggestion)}
          >
            {suggestion}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
