// About.jsx

import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          About Indian Freedom Fighters
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <Image
              src="/gandhi.jpg"
              alt="gandhiji"
              width={300}
              height={200}
            ></Image>
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Mahatma Gandhi</h2>
              <p className="text-lg">
                Mahatma Gandhi, known as the Father of the Nation, advocated for
                non-violent civil disobedience and led movements such as the
                Salt March, which galvanized millions against British
                oppression.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <Image
              src="/netaji.jpg"
              alt="Netaji"
              width={300}
              height={200}
            ></Image>
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Subhas Chandra Bose</h2>
              <p className="text-lg">
                Subhas Chandra Bose, a fiery nationalist, believed in armed
                struggle and founded the Indian National Army (INA) to fight
                alongside Axis powers against the British during World War II.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <Image
              src="/bhagat-singh.jpg"
              alt="Bhagat"
              width={300}
              height={200}
            ></Image>
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Bhagat Singh</h2>
              <p className="text-lg">
                Bhagat Singh, a revolutionary socialist, became a symbol of
                youth resistance after his execution by the British. He
                advocated for complete independence and sacrificed his life for
                the cause.
              </p>
            </div>
          </div>
        </div>


        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <Image
              src="/nehru.jpeg"
              alt="Nehru"
              width={300}
              height={300}
            ></Image>
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Jawaharlal Nehru</h2>
              <p className="text-lg">
                Jawaharlal Nehru, the first Prime Minister of independent India,
                played a crucial role in the country's struggle for freedom. He
                was a prominent leader of the Indian National Congress and a
                staunch advocate of secularism and democracy.
              </p>
              
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <Image
              src="/laxmibai.jpg"
              alt="jhasi-rani"
              width={300}
              height={200}
            ></Image>
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Rani Lakshmibai</h2>
              <p className="text-lg">
                Rani Lakshmibai of Jhansi was a prominent female freedom fighter
                who fiercely resisted British rule during the Indian Rebellion
                of 1857, inspiring generations with her bravery and leadership.
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg">
          These are just a few among many who dedicated their lives to the
          freedom struggle, leaving a lasting legacy of courage, sacrifice, and
          determination for future generations to remember and honor.
        </p>
      </div>
    </div>
  );
};

export default page;
