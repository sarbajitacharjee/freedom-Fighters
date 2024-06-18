// Gandhi.jsx

import React from 'react';

const Gandhi = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Mahatma Gandhi</h1>
        <div className="flex space-x-4 mb-6">
          <img
            className="w-48 h-48 object-cover rounded-lg shadow-md"
            src="/gandhi.jpg"  // Replace with actual image URL
            alt="Mahatma Gandhi"
          />
          <div className="flex-1">
            <p className="text-gray-700 leading-relaxed">
              Mahatma Gandhi, born on October 2, 1869, in Porbandar, India, was a pivotal figure in India's struggle for independence against British rule.
              He employed nonviolent civil disobedience, emphasizing the power of truth and moral courage.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              His advocacy for peace and nonviolent resistance inspired movements for civil rights and freedom across the world.
              He led nationwide campaigns for various social causes, including the Salt Satyagraha in 1930, which protested against the British salt monopoly.
            </p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Gandhi's philosophy of Satyagraha (truth force) and Ahimsa (nonviolence) became guiding principles for movements advocating social justice and equality.
          His efforts ultimately led to India gaining independence on August 15, 1947.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Mahatma Gandhi's life and teachings continue to resonate globally as a symbol of peace, freedom, and the power of moral conviction.
        </p>
      </div>
    </div>
  );
};

export default Gandhi;
