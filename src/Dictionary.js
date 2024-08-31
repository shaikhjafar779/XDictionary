import React, { useState } from 'react';

// Initial dictionary state
const initialDictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    const entry = initialDictionary.find(entry => entry.word.toLowerCase() === normalizedSearchTerm);

    if (entry) {
      setResult(entry.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>XDictionary</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter a word"
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <button
        onClick={handleSearch}
        style={{ padding: '8px', fontSize: '16px', marginLeft: '10px' }}
      >
        Search
      </button>
      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        {result}
      </div>
    </div>
  );
};

export default Dictionary;
