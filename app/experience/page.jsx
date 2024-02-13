import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Experience() {
  return (
    <div>
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold leading-8 text-gray-900 sm:text-4xl">
              Work Experience
            </h2>
          </div>
          <div className="mt-10">
            <div className="bg-white overflow-hidden shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <div className="flex items-center">
                  <FaBriefcase className="text-3xl text-gray-500 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Full Stack Developer
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Freighting Softwares, Mumbai, India
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      (May 2023 - Present)
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <ul className="list-disc list-inside">
                    <li>
                      Developed and maintained web pages using EJS for a
                      startup.
                    </li>
                    <li>
                      Created RESTful APIs using Express and Node.js,
                      contributing to seamless software integration.
                    </li>
                    <li>
                      Implemented Bootstrap for effective and responsive design.
                    </li>
                    <li>
                      Utilized MongoDB, JWT, and AWS technologies in the
                      development process.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold leading-8 text-gray-900 sm:text-4xl">
              Open Source Contributions
            </h2>
          </div>
          <div className="mt-10">
            <div className="bg-white overflow-hidden shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <ul className="divide-y divide-gray-200">
                  {/* Refine.dev Contributions */}
                  <li className="py-4">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      <a href="https://github.com/refinedev">Refine.dev</a>
                    </h3>
                    <ul className="mt-2">
                      <li>
                        <a
                          href="https://github.com/refinedev/refine/pull/5538"
                          className="flex items-center space-x-2"
                        >
                          <FaGithub className="text-gray-500" />
                          <span>
                            feat(core): configure useCan's queryOptions globally
                            and through CanA…
                          </span>
                        </a>
                        <p className="text-sm text-gray-600 pb-5">
                          This contribution was made on Jan 20
                        </p>
                      </li>
                      <li>
                        <a
                          href="https://github.com/refinedev/refine/pull/5522"
                          className="flex items-center space-x-2"
                        >
                          <FaGithub className="text-gray-500" />
                          <span>
                            feat(core): add success notification support for
                            auth provider methods #5473
                          </span>
                        </a>
                        <p className="text-sm text-gray-600 pb-5">
                          This contribution was made on Jan 16
                        </p>
                      </li>
                      <li>
                        <a
                          href="https://github.com/refinedev/refine/pull/5515"
                          className="flex items-center space-x-2"
                        >
                          <FaGithub className="text-gray-500" />
                          <span>
                            feat(doc): generated query params in doc - #5509
                          </span>
                        </a>
                        <p className="text-sm text-gray-600 pb-5">
                          This contribution was made on Jan 15
                        </p>
                      </li>
                      <li>
                        <a
                          href="https://github.com/refinedev/refine/pull/5508"
                          className="flex items-center space-x-2"
                        >
                          <FaGithub className="text-gray-500" />
                          <span>fix(hasura): nested sorting abilities</span>
                        </a>
                        <p className="text-sm text-gray-600 pb-5">
                          This contribution was made on Jan 12
                        </p>
                      </li>
                      {/* Add other contributions similarly */}
                    </ul>
                  </li>
                  {/* Meshery Contributions */}
                  <li className="py-4">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      <a href="https://github.com/meshery">Meshery</a>
                    </h3>
                    <ul className="mt-2">
                      <li>
                        <a
                          href="https://github.com/meshery/meshery/pull/9892"
                          className="flex items-center space-x-2"
                        >
                          <FaGithub className="text-gray-500" />
                          <span>
                            Fixed many links including the issue #9892
                          </span>
                        </a>
                        <p className="text-sm text-gray-600">
                          This contribution was made on Jan 11
                        </p>
                      </li>
                      {/* Add other contributions similarly */}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
