import React from "react";
import { FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa";

export default function Page() {
  return (
    <div className="py-12 bg-gray-100 h-screen  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold leading-8 text-gray-900 sm:text-4xl">
            Skills
          </h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Front-End Skills */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6 flex items-center">
                <FaCode className="text-3xl text-gray-500 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    Front-End
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    React JS, Next JS, Material UI
                  </p>
                </div>
              </div>
            </div>
            {/* Back-End Skills */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6 flex items-center">
                <FaServer className="text-3xl text-gray-500 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    Back-End
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Node JS, RESTful API, Express JS, JWT
                  </p>
                </div>
              </div>
            </div>
            {/* Databases */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6 flex items-center">
                <FaDatabase className="text-3xl text-gray-500 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    Databases
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    MongoDB, Prisma
                  </p>
                </div>
              </div>
            </div>
            {/* Technologies */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6 flex items-center">
                <FaTools className="text-3xl text-gray-500 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    Technologies
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Stripe, WebRTC, Web Socket, Git/GitHub, Redis, GraphQL,
                    Docker, TRPC, Recoil, Redux, Turbo Repo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
