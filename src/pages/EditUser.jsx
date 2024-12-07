import { useState } from "react";
import Header from "../layouts/partials/header";

export default function EditUser() {
  // Static data for the user
  const [userData, setUserData] = useState({
    fullName: "Jane Doe",
    userName: "Jane123",
    email: "Jane@singit.com",
    phone: "+546736748565",
    dob: "October 22, 2023",
    gender: "Male",
    address: "Florida, California",
    profileImage:
      "https://images.pexels.com/photos/7289120/pexels-photo-7289120.jpeg?auto=compress&cs=tinysrgb&w=600",
  });

  const [newProfileImage, setNewProfileImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfileImage(URL.createObjectURL(file)); // Preview image
    }
  };

  const handleProfileImageClick = () => {
    document.getElementById("profile-image-input").click(); // Trigger the file input when the image is clicked
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the update logic here (e.g., API call to update user)
    console.log("Updated user data:", userData);
    if (newProfileImage) {
      console.log("New Profile Image:", newProfileImage);
    }
  };

  return (
    <div>
      <Header header={"Edit User"} link={"/users"} arrow={true} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3 shadow-md">
          <div className="space-y-1.5">
            <div className="bg-white px-4 rounded-md">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <h3 className="text-sm py-2 cursor-pointer border-b border-gray-250 font-medium">
                    Edit User Information
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-white max-w-2xl px-4 xl:px-6 py-5">
              <div className="flex items-center gap-4">
                <div>
                  <img
                    className="w-16 h-16 rounded-full ring-2 ring-gray-250 object-cover border cursor-pointer"
                    src={newProfileImage || userData.profileImage}
                    alt="user"
                    onClick={handleProfileImageClick}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    id="profile-image-input"
                    onChange={handleFileChange}
                    className="hidden" // Hidden until clicked
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mt-2">
                    {userData.fullName}
                  </h2>
                  <p className="text-xs text-gray-600">{userData.email}</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="bg-white w-full max-w-2xl">
                <div className="border-b px-4 xl:px-6 py-3">
                  <div>
                    <h5 className="uppercase text-xl font-bold">
                      Personal Information
                    </h5>
                  </div>
                </div>
                <div className="px-4 xl:px-6 py-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                  <div>
                    <p className="text-xs text-gray-600">Full Name</p>
                    <input
                      type="text"
                      value={userData.fullName}
                      onChange={(e) =>
                        setUserData({ ...userData, fullName: e.target.value })
                      }
                      className="text-sm font-medium border border-gray-300 rounded-md w-full px-4 py-2"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Date of Birth</p>
                    <input
                      type="text"
                      value={userData.dob}
                      onChange={(e) =>
                        setUserData({ ...userData, dob: e.target.value })
                      }
                      className="text-sm font-medium border border-gray-300 rounded-md w-full px-4 py-2"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Address</p>
                    <input
                      type="text"
                      value={userData.address}
                      onChange={(e) =>
                        setUserData({ ...userData, address: e.target.value })
                      }
                      className="text-sm font-medium border border-gray-300 rounded-md w-full px-4 py-2"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Username</p>
                    <input
                      type="text"
                      value={userData.userName}
                      onChange={(e) =>
                        setUserData({ ...userData, userName: e.target.value })
                      }
                      className="text-sm font-medium border border-gray-300 rounded-md w-full px-4 py-2"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Gender</p>
                    <input
                      type="text"
                      value={userData.gender}
                      onChange={(e) =>
                        setUserData({ ...userData, gender: e.target.value })
                      }
                      className="text-sm font-medium border border-gray-300 rounded-md w-full px-4 py-2"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Phone Number</p>
                    <input
                      type="text"
                      value={userData.phone}
                      onChange={(e) =>
                        setUserData({ ...userData, phone: e.target.value })
                      }
                      className="text-sm font-medium border border-gray-300 rounded-md w-full px-4 py-2"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Registered On</p>
                    <input
                      type="text"
                      value={userData.dob}
                      disabled
                      className="text-sm font-medium border border-gray-300 rounded-md w-full px-4 py-2"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 flex justify-end gap-2">
                <button
                  type="button"
                  className="px-5 py-2 border text-xs rounded-md font-medium bg-gray-200 text-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 border text-xs rounded-md font-medium bg-red bg-opacity-90 text-white"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
