import React from "react";
import { Stepper } from "react-form-stepper";
import { Divider } from "@mui/material";
import logo from "../assets/logo1.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
      {/* Logo and Stepper Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center cursor-pointer mb-4 lg:mb-0">
          <img src={logo} className="h-8" alt="Logo" />
        </div>

        {/* Stepper */}
        <div className="flex-grow flex justify-center">
          <div className="pr-0 sm:pr-32 bg-white w-full sm:w-[50%]">
            <Stepper
              steps={[
                { label: "Login Process" },
                { label: "2 Step Verification" },
                { label: "Profile Completion" },
              ]}
              activeStep={0}
              styleConfig={{
                activeBgColor: "#E22400",
                completedBgColor: "#ECECEC",
                inactiveBgColor: "#E5E7EB",
                activeTextColor: "#060606",
                inactiveTextColor: "#C6C6C6",
                circleFontSize: "0px",
                size: "0.8rem",
              }}
            />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl my-6 text-center font-semibold">
            Login Now
          </h2>
          <p className="text-center text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            condimentum, lacus
          </p>

          {/* Form */}
          <form className="mt-6 space-y-6">
            {/* Email Address */}
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email-address"
                  name="email-address"
                  type="text"
                  required
                  className="appearance-none rounded-md border border-gray-300 px-3 py-2 w-full text-gray-900 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-md border border-gray-300 px-3 py-2 w-full text-gray-900 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Forget Password */}
            <div className="flex items-center justify-end">
              <Link to="/forget" className="block text-sm text-red hover:underline">
                Forgot Password?
              </Link>
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
              <Link
                to={"/"}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-white bg-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Login
              </Link>
            </div>
          </form>

          {/* Divider */}
          <Divider sx={{ my: 3, fontSize: "0.875rem", color: "#6B7280" }}>
            or login with
          </Divider>

          {/* Google Login Button */}
          <div>
            <button
              type="button"
              className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-xl shadow-sm bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <FcGoogle className="text-2xl mr-2"/>
              Sign in with Google
            </button>
          </div>
          <div className="text-center text-sm">
            <p>Not registered yet? <span className="text-red"> Create an Account </span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
