"use client"
import React, { useState } from 'react';
import Gandhi from './Gandhi'; // Adjust the path based on your project structure

const ToggleButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="mt-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleVisibility}
      >
        Toggle Gandhi
      </button>

      {isVisible && <Gandhi />}
    </div>
  );
};

export default ToggleButton;
