import { Link } from "react-router-dom";
import Header from "../layouts/partials/header";

export default function Poll() {
  return (
    <div>
      <Header header={"Manage Polls"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          {/* Search and Actions */}
          <div className="flex flex-wrap gap-4 justify-between bg-white px-4 py-2">
            <div className="max-w-xs w-full">
              <div className="relative w-full sm:w-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full px-4 py-2 outline-none pl-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search polls..."
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-full sm:w-auto sm:flex-row sm:items-center gap-4">
              <button className="px-5 py-2 border text-xs rounded-md font-medium">
                Download.csv
              </button>
            </div>
          </div>

          {/* Polls Table */}
          <div className="my-3">
            <div className="relative overflow-x-auto drop-shadow-xl bg-white sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b-2 bg-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Question
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Created By
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Votes
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Ending Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Created At
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(7)].map((_, i) => (
                    <tr
                      className="bg-white border-b hover:bg-gray-150/30"
                      key={i}
                    >
                      <td className="px-6 py-4">Favorite Sport</td>
                      <td className="px-6 py-4">
                        What is your favorite sport?
                      </td>
                      <td className="px-6 py-4">john123</td>
                      <td className="px-6 py-4">Sports</td>
                      <td className="px-6 py-4">235</td>
                      <td className="px-6 py-4">12/31/2023, 11:59 PM</td>
                      <td className="px-6 py-4">Active</td>
                      <td className="px-6 py-4">08/2019</td>
                      <td className="px-6 py-4 space-x-2">
                        <Link
                          to="/poll/view"
                          className="font-medium  text-white bg-red px-3 py-0.5 rounded-md bg-opacity-80"
                        >
                          View
                        </Link>
                        <Link
                          to="/poll/edit"
                          className="font-medium  text-white bg-red px-3 py-0.5 rounded-md bg-opacity-80"
                        >
                          Edit
                        </Link>
                        <Link
                          className="font-medium  text-white bg-red px-3 py-0.5 rounded-md bg-opacity-80"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
