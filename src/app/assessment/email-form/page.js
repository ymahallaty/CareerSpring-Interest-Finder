"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    school: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post("/api/add-user-data", formData);
      alert("Data sent successfully");
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        school: "",
      });
      // Optionally, show a success message or redirect the user
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        // Display the error message from the server response
        alert("Error sending data: " + error.response.data.error);
      } else {
        // Handle other types of errors
        alert("An error occurred while sending data.");
      }
      console.error("Error sending data:", error);
      // Handle errors gracefully
    }
  };

  return (
    <div className="block-group block-padding content-center">
      <div className="text-center">
        <h1 className="titleH1 space-y-6 py-5 text-4xl text-black leading-relaxed">
          In Order To Get Your List Of Suggested Careers Based On Your Career
          Interest Finder Results Send Your Scores Directly To Your Email. This
          Is Required.
        </h1>
      </div>
      <form
        className="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
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
            value={formData.email}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
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
            value={formData.firstName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
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
            value={formData.lastName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
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
            value={formData.school}
            onChange={handleChange}
          ></input>
        </div>
      </form>
      <div className="flex justify-between pt-10">
        <Link href="/assessment/results/career">
          <button className="blueB py-5 text-base leading-7 text-white p-[65px] rounded-md">
            Back
          </button>
        </Link>

        <Link href="/assessment/job-zones">
          <button
            className="blueB py-5 px-5 text-base text-wrap leading-7 text-white p-4 rounded-md"
            type="button" // Change type to button
            onClick={() => {
              handleSubmit(); // Call handleSubmit function on button click
            }}
          >
            Explore Job Zones
          </button>
        </Link>
      </div>
    </div>
  );
}
