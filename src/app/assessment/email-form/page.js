import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div
      className="relative bg-white my-10 text-black font-serif pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto
    sm:max-w-xl sm:rounded-lg sm:px-10">
      <div className="text-center">
        <h1 className="font-bold  space-y-6 py-5 text-4xl text-gray-600 leading-relaxed">
          In Order To Get Your List Of Suggested Careers Based On Your Career
          Interest Finder Results Send Your Scores Directly To Your Email. This
          Is Required.
        </h1>
      </div>
      <form className="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Enter your email
          </label>
          <input
            className="shadow appearance-none border rounded w-full
            py-2 px-3 text-gray-700 leading-tight focus:outline-none
            focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter Email"
          ></input>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Enter your first name
          </label>
          <input
            className="shadow appearance-none border rounded w-full
            py-2 px-3 text-gray-700 leading-tight focus:outline-none
            focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="Enter your first name"
          ></input>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Enter your last name
          </label>
          <input
            className="shadow appearance-none border rounded w-full
            py-2 px-3 text-gray-700 leading-tight focus:outline-none
            focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Enter your last name"
          ></input>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Enter your school
          </label>
          <input
            className="shadow appearance-none border rounded w-full
            py-2 px-3 text-gray-700 leading-tight focus:outline-none
            focus:shadow-outline"
            id="school"
            type="text"
            placeholder="Enter your school you attend"
          ></input>
        </div>
      </form>

      <div className="flex justify-between">
        <Link
          href="/assessment/results/career"
          className="w-full h-full flex items-center justify-center"
        >
          <button
            className="bg-career-blue-btn flex text-white hover:bg-blue-600
          items-center justify-center px-4 py-2"
          >
            Back
          </button>
        </Link>

        <Link
          href="/assessment/job-zones"
          className=" w-full h-full flex items-center justify-center"
        >
          <button
            className="bg-career-blue-btn flex text-white hover:bg-blue-600
          items-center justify-center px-4 py-2"
          >
            Explore Job Zones
          </button>
        </Link>
      </div>
    </div>
  );
}
