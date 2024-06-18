import React from 'react';

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Indian Freedom Fighters Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for each freedom fighter */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Mahatma Gandhi
              </h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas in pulvinar neque.
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Another freedom fighter */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Subhas Chandra Bose
              </h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas in pulvinar neque.
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Another freedom fighter */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Bhagat Singh
              </h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas in pulvinar neque.
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
