import Header from "../layouts/partials/header";
import { useState } from "react";

export default function PollEdit() {
  const MIN_OPTIONS = 2;
  const MAX_OPTIONS = 6;

  const [options, setOptions] = useState([
    { name: "Football", votes: 150 },
    { name: "Basketball", votes: 120 },
    { name: "Tennis", votes: 80 },
  ]);

  const [canVote, setCanVote] = useState(true); // Voting permission state
  const [isAnonymous, setIsAnonymous] = useState(true); // Anonymous voting state

  const handleAddOption = () => {
    if (options.length < MAX_OPTIONS) {
      setOptions([...options, { name: "", votes: 0 }]);
    } else {
      alert(`You can add a maximum of ${MAX_OPTIONS} options.`);
    }
  };

  const handleRemoveOption = (index) => {
    if (options.length > MIN_OPTIONS) {
      const newOptions = options.filter((_, i) => i !== index);
      setOptions(newOptions);
    } else {
      alert(`You must have at least ${MIN_OPTIONS} options.`);
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = options.map((option, i) =>
      i === index ? { ...option, name: value } : option
    );
    setOptions(newOptions);
  };

  const handleVotesChange = (index, value) => {
    const newOptions = options.map((option, i) =>
      i === index ? { ...option, votes: value } : option
    );
    setOptions(newOptions);
  };

  return (
    <div>
      <Header header={"Edit Poll"} link={"/poll"} arrow={true} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          <div className="space-y-1.5">
            {/* Poll Information */}
            <div className="bg-white px-4 rounded-md">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <h3 className="text-sm py-2 cursor-pointer border-b border-gray-250 font-medium">
                    Poll Information
                  </h3>
                </div>
                <div>
                  <button className="px-5 py-1 border text-sm text-red text-opacity-80 rounded-md font-semibold">
                    Deactivate
                  </button>
                </div>
              </div>
            </div>

            {/* Poll Edit Form */}
            <div className="bg-white w-full max-w-2xl mt-6 border rounded-lg">
              <div className="border-b px-4 xl:px-6 py-3">
                <div>
                  <h5 className="uppercase text-xl font-bold">Poll Details</h5>
                </div>
              </div>
              <div className="px-4 xl:px-6 py-4 grid grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs text-gray-600">Poll Title</p>
                  <input
                    type="text"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
                    placeholder="Poll title"
                    defaultValue="Favorite Sport"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Poll Question</p>
                  <input
                    type="text"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
                    placeholder="Poll question"
                    defaultValue="What is your favorite sport?"
                  />
                </div>
              </div>
              <div className="px-4 xl:px-6 pb-4">
                <p className="text-xs text-gray-600">Poll Description</p>
                <textarea
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md text-sm resize-none"
                  placeholder="Poll description"
                  defaultValue="A poll to determine the community's favorite sport."
                ></textarea>
                <p className="text-xs text-gray-600 mt-2">
                  Created by: <strong>JohnDoe</strong> | Created on:{" "}
                  <strong>December 7, 2023</strong>
                </p>
              </div>
            </div>

            {/* Poll Options */}
            <div className="bg-white w-full max-w-2xl border rounded-lg">
              <div className="border-b px-4 xl:px-6 py-3">
                <div>
                  <h5 className="uppercase text-xl font-bold">Poll Options</h5>
                </div>
              </div>
              <div className="px-4 xl:px-6 py-8 grid grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-4">
                {options.map((option, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-gray-600">Option</p>
                      <input
                        type="text"
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
                        value={option.name}
                        onChange={(e) =>
                          handleOptionChange(index, e.target.value)
                        }
                      />
                      <button
                        className="text-red-500 hover:text-red-700 text-xs"
                        onClick={() => handleRemoveOption(index)}
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-xs text-gray-600">
                      Votes:{" "}
                      <input
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
                        value={option.votes}
                        onChange={(e) =>
                          handleVotesChange(index, e.target.value)
                        }
                      />
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <button
                  onClick={handleAddOption}
                  className="px-4 py-2 bg-red bg-opacity-90 text-white rounded-md"
                >
                  Add Option
                </button>
              </div>
            </div>

            {/* Voting Permissions Section */}
            <div className="bg-white w-full max-w-2xl mt-6 border rounded-lg">
              <div className="border-b px-4 xl:px-6 py-3">
                <div>
                  <h5 className="uppercase text-xl font-bold">
                    Voting Permissions
                  </h5>
                </div>
              </div>
              <div className="px-4 xl:px-6 py-8 grid grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs text-gray-600">Allow Voting</p>
                  <select
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
                    value={canVote ? "anyone" : "authenticated"}
                    onChange={(e) => setCanVote(e.target.value === "anyone")}
                  >
                    <option value="anyone">Anyone</option>
                    <option value="authenticated">Authenticated Users</option>
                  </select>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Anonymous Voting</p>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                    />
                    <span className="text-sm text-gray-600">
                      Enable Anonymous Voting
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* General Information */}
            <div className="bg-white w-full max-w-2xl border rounded-lg">
              <div className="border-b px-4 xl:px-6 py-3">
                <div>
                  <h5 className="uppercase text-xl font-bold">
                    General Information
                  </h5>
                </div>
              </div>
              <div className="px-4 xl:px-6 py-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs text-gray-600">Category</p>
                  <select
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
                    defaultValue="Sports"
                  >
                    <option value="Sports">Sports</option>
                    <option value="News">News</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Business & Politics">
                      Business & Politics
                    </option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Education & Careers">
                      Education & Careers
                    </option>
                  </select>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Ending Time</p>
                  <input
                    type="datetime-local"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
                    defaultValue="2023-12-31T23:59"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Status</p>
                  <select
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
                    defaultValue="Active"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Archived">Archived</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Save and Cancel Buttons */}
            <div className="flex justify-end space-x-2 p-4 mt-4">
              <button className="px-5 py-2 border text-xs rounded-md font-medium bg-red bg-opacity-90 text-white hover:bg-blue-600">
                Save Changes
              </button>
              <button className="px-5 py-2 border text-xs rounded-md font-medium bg-gray-500 text-white hover:bg-gray-600">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
