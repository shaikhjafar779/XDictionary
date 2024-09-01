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

  const handleSearch = (e) => {
    e.preventDefault();  

    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    
    // if (normalizedSearchTerm === "") {
    //   setResult("Word not found in the dictionary.");
    //   return;
    // }

    const entry = initialDictionary.find(entry => entry.word.toLowerCase() === normalizedSearchTerm);

    if (entry) {
      setResult(entry.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'left' }}>
      <h1>Dictionary App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for a word..."
          style={{ padding: '8px', fontSize: '16px' }}
        />
        <button
          type="submit"
          style={{ padding: '8px', fontSize: '16px', marginLeft: '10px' }}
        >
          Search
        </button>
      </form>
      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        <h3 style={{ textAlign: 'left' }}>Definition:</h3>
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default Dictionary;