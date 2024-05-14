import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div
      className="pageDiv">
      
        <h1 className="titleH1 space-y-6 py-5 text-4xl text-black leading-relaxed">
          In Order To Get Your List Of Suggested Careers Based On Your Career
          Interest Finder Results Send Your Scores Directly To Your Email. This
          Is Required.
        </h1>

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
      <div className="flex justify-between pt-10">
      <Link href="/assessment/results/career">
        <button className="blueButton">
          Back
        </button>
      </Link>
      <Link href="/assessment/job-zones">
        <button className="blueButton">
          Explore Job Zones
        </button>
      </Link>
      </div>
    </div>
  );
}
