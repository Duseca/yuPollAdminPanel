import Header from "../layouts/partials/header";

export default function PollView() {
  return (
    <div>
      <Header header={"Poll Details"} link={"/poll"} arrow={true} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          <div className="space-y-1.5">
            {/* Header Section */}
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

            {/* Poll General Details */}
            <div className="bg-white max-w-2xl px-4 xl:px-6 py-5 border rounded-lg">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Favorite Sport</h2>
                <p>Question : <span> What is your favorite sport?</span></p>
                <p className="text-sm text-gray-600">
                  A poll to determine the community's favorite sport.
                </p>
                <p className="text-xs text-gray-600">
                  Created by: <strong>JohnDoe</strong> | Created on:{" "}
                  <strong>December 7, 2023</strong>
                </p>
              </div>
            </div>

            {/* Poll Options and Votes */}
            <div className="bg-white w-full max-w-2xl border rounded-lg">
              <div className="border-b px-4 xl:px-6 py-3">
                <div>
                  <h5 className="uppercase text-xl font-bold">Poll Options</h5>
                </div>
              </div>
              <div className="px-4 xl:px-6 py-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs text-gray-600">Option</p>
                  <h6 className="text-sm font-medium">Football</h6>
                  <p className="text-xs text-gray-600">
                    Votes: <strong>150</strong>
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Option</p>
                  <h6 className="text-sm font-medium">Basketball</h6>
                  <p className="text-xs text-gray-600">
                    Votes: <strong>120</strong>
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Option</p>
                  <h6 className="text-sm font-medium">Tennis</h6>
                  <p className="text-xs text-gray-600">
                    Votes: <strong>80</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Poll Voting Permissions and Anonymous Voting */}
            <div className="bg-white w-full max-w-2xl border rounded-lg">
              <div className="border-b px-4 xl:px-6 py-3">
                <div>
                  <h5 className="uppercase text-xl font-bold">
                    Voting Permissions
                  </h5>
                </div>
              </div>
              <div className="px-4 xl:px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs text-gray-600">Vote Permissions</p>
                  <div className="flex items-center gap-2">
                    <label className="text-sm">Public</label>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Anonymous Voting</p>
                  <div className="flex items-center gap-2">
                    <label className="text-sm">Allowed</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
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
                  <h6 className="text-sm font-medium">Sports</h6>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Likes</p>
                  <h6 className="text-sm font-medium">200</h6>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Comments</p>
                  <h6 className="text-sm font-medium">60</h6>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Ending Time</p>
                  <h6 className="text-sm font-medium">
                    December 31, 2023, 11:59 PM
                  </h6>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Status</p>
                  <h6 className="text-sm font-medium">Active</h6>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Total Votes</p>
                  <h6 className="text-sm font-medium">350</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
