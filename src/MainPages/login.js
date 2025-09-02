import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import img from "../assests/img.jpg";
import { Link } from "react-router-dom";
import GoogleButton from "../components/GoogleButton";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section
      className="transition-all duration-300 min-h-screen px-4 sm:px-6 md:px-8 relative flex items-center justify-center"
      style={{
        background:
          "linear-gradient(to left, #461212 35%, #711D1D 66%, #8D2424 83%, #AC2C2C 100%)",
      }}
    >
      {/* 🔥 Black Blur Layer */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent backdrop-blur-sm z-0"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div
          className="w-full md:w-1/2 space-y-3  mb-10 md:mt-8 flex flex-col "
          // items-center
          // md:items-start
        >
          <h1
            className="text-3xl md:text-4xl font-bold text-center md:text-left"
            style={{
              fontFamily: "Roboto",
            }}
          >
            <span className="text-white">Fitness</span>{" "}
            <span className="text-[#FF0000]">Gym</span>
          </h1>

          <div className="text-center md:text-left">
            <h2
              className="text-xl text-white font-bold "
              style={{
                fontFamily: "Poltawski Nowy",
              }}
            >
              Sign In
            </h2>
            <p
              className="text-white text-sm leading-snug mt-1 mb-7"
              style={{
                fontFamily: "Rubik",
                fontWeight: 400,
              }}
            >
              Please login to continue to your account.
            </p>
          </div>

          <form className="space-y-4 w-full flex flex-col items-center md:items-start">
            {/* Email */}
            <div className="relative w-[80%] sm:w-[60%] md:w-[70%]">
              <label
                htmlFor="email"
                className="absolute -top-2 left-5 px-1 text-xs text-white bg-[#822121] md:bg-[#942525]"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className="w-full px-3 py-2 rounded-xl text-white placeholder-white shadow-sm focus:outline-none text-sm bg-transparent border border-white"
              />
            </div>

            {/* Password */}
            <div className="relative w-[80%] sm:w-[60%] md:w-[70%]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-3 py-2 rounded-xl text-white placeholder-white shadow-sm focus:outline-none text-sm bg-transparent border border-white pr-10"
              />
              {showPassword ? (
                // Eye-off icon
                <svg
                  onClick={() => setShowPassword(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#ffffff"
                      d="M460.465 264.803c-41.315 74.193-119.667 120.282-204.438 120.282-84.826 0-163.177-46.089-204.493-120.282-3.182-5.761-3.182-11.851 0-17.607C92.85 173.004 171.201 126.92 256.027 126.92c84.771 0 163.122 46.084 204.438 120.276 3.238 5.756 3.238 11.846 0 17.607zm26.392-32.317c-46.638-83.767-135.085-135.798-230.83-135.798-95.8 0-184.247 52.031-230.885 135.798-8.34 14.946-8.34 32.081 0 47.016 46.638 83.767 135.085 135.809 230.885 135.809 95.745 0 184.192-52.042 230.83-135.809 8.34-14.934 8.34-32.07 0-47.016zm-230.83 85.528c34.183 0 62.001-27.818 62.001-62.017s-27.818-62.017-62.001-62.017c-34.238 0-62.056 27.818-62.056 62.017s27.819 62.017 62.056 62.017zm0-154.266c-50.918 0-92.288 41.387-92.288 92.25 0 50.874 41.371 92.244 92.288 92.244 50.863 0 92.233-41.371 92.233-92.244 0-50.863-41.37-92.25-92.233-92.25z"
                    />
                  </g>
                </svg>
              ) : (
                // Eye icon
                <svg
                  onClick={() => setShowPassword(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  xmlSpace="preserve"
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <g>
                    <path
                      d="m306.6 252.29 33.13 33.13a88.238 88.238 0 0 0 5.02-29.42c0-48.93-39.81-88.74-88.74-88.74-10.31 0-20.21 1.77-29.42 5.02l33.13 33.13c25.02 1.82 45.06 21.86 46.88 46.88zM118.82 386.29c42.6 23.72 89.43 36.23 135.55 36.23h1.64c32.23.22 64.8-5.71 96.06-17.28l40.85 40.85c3.71 3.71 8.57 5.57 13.44 5.57s9.73-1.86 13.44-5.57c7.42-7.42 7.42-19.45 0-26.87L92.57 91.99c-7.42-7.42-19.45-7.42-26.87 0s-7.42 19.45 0 26.87l24.76 24.76c-31.56 22.41-59.44 50.99-81.73 83.99-11.64 17.25-11.64 39.54 0 56.8 28.75 42.57 66.82 77.8 110.08 101.89zm134.7-79.62c-26-1.27-46.91-22.18-48.18-48.18zM40.23 248.86c20.98-31.07 47.51-57.67 77.54-77.94l54.82 54.82c-3.44 9.45-5.31 19.63-5.31 30.25 0 48.93 39.81 88.74 88.74 88.74 10.62 0 20.8-1.88 30.25-5.32l35.75 35.75c-21.23 6.17-42.9 9.35-64.35 9.35h-1.77c-40.19.27-81.15-10.59-118.58-31.42-38.08-21.2-71.65-52.31-97.07-89.95-2.93-4.34-2.93-9.94 0-14.27z"
                      fill="#ffffff"
                    />
                    <path
                      d="M503.29 227.6c-28.75-42.57-66.82-77.8-110.08-101.89-42.6-23.72-89.43-36.23-135.56-36.23h-3.28c-31.39 0-63.11 5.8-93.6 16.98l30.11 30.11c20.95-6 42.33-9.09 63.49-9.09h1.77c40.14-.3 81.15 10.59 118.58 31.42 38.08 21.2 71.65 52.31 97.07 89.95 2.93 4.34 2.93 9.94 0 14.27-20.83 30.84-47.12 57.28-76.87 77.49l27.29 27.29c31.29-22.34 58.94-50.75 81.07-83.52 11.64-17.25 11.64-39.54 0-56.79z"
                      fill="#ffffff"
                    />
                  </g>
                </svg>
              )}
            </div>

            {/* Keep me logged in + Forgot */}
            <div
              className="flex flex-row  items-center justify-between w-[80%] sm:w-[60%]  md:w-[70%] text-xs gap-2"
              style={{
                fontFamily: "Rubik",
              }}
            >
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="peer hidden" />
                <span
                  className="w-4 h-4 rounded border border-white flex items-center justify-center
               peer-checked:bg-[#541515] peer-checked:before:content-['✔'] 
               peer-checked:before:text-white peer-checked:before:text-xs"
                ></span>
                <span className="text-white">Keep me logged in</span>
              </label>
              <button
                className="text-white hover:underline"
                style={{
                  fontWeight: 400,
                }}
              >
                Forgot Password?
              </button>
            </div>

            {/* Buttons */}
            <div className="flex flex-col w-[80%] sm:w-[60%] md:w-[70%] space-y-2">
              <Link
                to="/"
                className="w-full px-4 py-2 bg-white text-center text-black rounded-xl  font-semibold text-sm"
                style={{
                  fontFamily: "Rubik",
                }}
              >
                Sign In
              </Link>

              <div className="flex items-center w-full my-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-2 text-gray-400 text-xs font-medium">
                  or
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <GoogleButton>
                Sign In with Google <FcGoogle className="text-lg" />
              </GoogleButton>

              {/* Bottom link */}
              <div
                className="w-[35%] flex justify-center mt-6 absolute bottom-4 "
                style={{
                  fontFamily: "Rubik",
                }}
              >
                <p
                  className="text-white text-xs"
                  style={{
                    fontWeight: 400,
                  }}
                >
                  Need an account?{" "}
                  <Link
                    className="text-[#FF0000] font-semibold underline"
                    to="/signup"
                  >
                    Create One
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 hidden md:flex justify-end rounded-lg mt-10">
          <img
            src={img}
            alt="gym"
            className="rounded-3xl shadow-lg max-w-sm w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
