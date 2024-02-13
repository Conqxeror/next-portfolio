import React from 'react'
import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
  return (
    <div>
        <div className="py-12 bg-gray-100 h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold leading-8 text-gray-900 sm:text-4xl">
            Education
          </h2>
        </div>
        <div className="mt-10">
          <div className="bg-white overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <ul className="divide-y divide-gray-200">
                {/* Theem College of Engineering */}
                <li className="py-4 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FaGraduationCap className="text-gray-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Theem College of Engineering, Boisar, India
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Computer Engineering
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      Expected Graduation: May 2025
                    </p>
                  </div>
                </li>
                {/* Dnyan Bharati Societys Sau Sitabai Ramkrishna Karandikar College */}
                <li className="py-4 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FaGraduationCap className="text-gray-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Dnyan Bharati Societys Sau Sitabai Ramkrishna Karandikar College of Arts, Commerce & Science, Dahanu, India
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Senior Secondary Science
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      Graduation: March 2021
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
