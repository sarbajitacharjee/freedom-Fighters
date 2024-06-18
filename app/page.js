// Home.jsx
"use client"
import React, { useState } from 'react';


import Gandhi from '@/Components/Gandhi';
const Home = () => {

  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the state on button click
  };
  function GG() {
    return <Gandhi/>
  }

  return (

    <>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Indian Freedom Fighters</h1>
        <p className="text-lg mb-6 leading-relaxed">
          India's struggle for independence was marked by the sacrifices and bravery of numerous
          freedom fighters who fought against British colonial rule. Here are some notable figures:
        </p>
        <ul className="list-disc pl-4">
          <li className="mb-2">Mahatma Gandhi - Leader of the Indian independence movement</li>
          <li className="mb-2">Subhas Chandra Bose - Advocated for complete independence from Britain</li>
          <li className="mb-2">Bhagat Singh - Known for his acts of defiance against British rule</li>
          <li className="mb-2">Rani Lakshmi Bai - Iconic leader in the Indian Rebellion of 1857</li>
          <li className="mb-2">Jawaharlal Nehru - First Prime Minister of independent India</li>
        </ul>
        <p className="mt-6 text-sm text-gray-600">
          These are just a few among the many who contributed to India's struggle for freedom.
        </p>
      </div>
    </div>

    <div>
      <button className="bg-green-500 text-black p-4" onClick={GG}>
        Click This
      </button>
      {isClicked}
    </div>
    
    </>
  );
};
export default Home;
