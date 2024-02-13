import React from 'react'
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

import trelloImage from '../../public/images/trello-image.png';
import stormImage from '../../public/images/storm-image.png';
import parkingImage from '../../public/images/parking-image.png';

export default function Projects() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold leading-8 text-gray-900 sm:text-4xl">
            Projects
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Trello Clone E2E */}
          <div className="bg-white overflow-hidden shadow-lg rounded-lg">
            <Image src={trelloImage} alt="Trello Clone E2E" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold leading-6 text-gray-900">
                Trello Clone E2E
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Full-stack Trello Clone using Next.js, Server Actions, React, Prisma, Stripe, Tailwind, and MySQL.
              </p>
              <a
                href="https://github.com/Conqxeror/trello-clone-e2e"
                className="flex items-center mt-3 text-sm text-gray-600 hover:text-blue-600"
              >
                <FaGithub className="text-gray-500 mr-1" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          {/* Storm TeamHackathers */}
          <div className="bg-white overflow-hidden shadow-lg rounded-lg">
            <Image src={stormImage} alt="Storm TeamHackathers" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold leading-6 text-gray-900">
                Storm TeamHackathers
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Employee review system developed in a hackathon using Node.js and Express.js for building APIs.
              </p>
              <a
                href="https://github.com/Conqxeror/stormteamHackathers"
                className="flex items-center mt-3 text-sm text-gray-600 hover:text-blue-600"
              >
                <FaGithub className="text-gray-500 mr-1" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          {/* Smart Parking */}
          <div className="bg-white overflow-hidden shadow-lg rounded-lg">
            <Image src={parkingImage} alt="Smart Parking" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold leading-6 text-gray-900">
                Smart Parking
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                React app for finding parking spots, integrating React Routing, Bootstrap, and Google Maps (via Iframe).
              </p>
              <a
                href="https://github.com/Conqxeror/Smart-Parking"
                className="flex items-center mt-3 text-sm text-gray-600 hover:text-blue-600"
              >
                <FaGithub className="text-gray-500 mr-1" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
