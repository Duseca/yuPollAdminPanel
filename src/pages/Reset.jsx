import React from "react";
import logo from "../assets/logo1.png";

const Reset = () => {
  return (
    <div>
      {/* Logo and Stepper Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center cursor-pointer mb-4 lg:mb-0">
          <img src={logo} className="h-8" alt="Logo" />
        </div>
      </div>

      {/* Form Section */}
      <div className="min-h-96 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl my-6 text-start font-semibold">
            Change Password
          </h2>
          <p className="text-center text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            condimentum, lacus
          </p>

          {/* Form */}
          <form className="mt-6 space-y-6">
            {/* New Password */}
            <div>
              <label
                htmlFor="new-password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <div className="mt-1">
                <input
                  id="new-password"
                  name="new-password"
                  type="password"
                  required
                  className="appearance-none rounded-md border border-gray-300 px-3 py-2 w-full text-gray-900 sm:text-sm"
                  placeholder="Min. 8 characters"
                />
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>
              <div className="mt-1">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  className="appearance-none rounded-md border border-gray-300 px-3 py-2 w-full text-gray-900 sm:text-sm"
                  placeholder="Min. 8 characters"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm">
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-white bg-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
