"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { send } from 'emailjs-com';
import { z } from "zod";


const templateID = process.env.REACT_APP_TEMPLATE_ID;
const serviceID = process.env.REACT_APP_SERVICE_ID;

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  firstName: z.string().regex(/^[A-Za-z\s]+$/, "First name is required"),
  lastName: z.string().regex(/^[A-Za-z\s]+$/, "Last name is required"),
  school: z.string().regex(/^[A-Za-z0-9]{6}$/, "School code is required"),
});

export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    school: "",
  });
  // code to send emails to users with score using email js
  const onSubmit = (e) => {
    e.preventDefault();
  };
//added setToSendBelow
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const result = formSchema.safeParse(formData);

    if (!result.success) {
      alert(result.error.errors.map((err) => err.message).join("\n"));
      return;
    }

    try {
      const response = await axios.post("/add-user-data/api", formData);
      alert("Data sent successfully");
      send(
        "service_8bge4g5",
        "template_e4fzd7i",
        {to_name:formData.firstName, from_name:"career spring",message:"your score is high"},
        '0i4ajxZzVDqD8fYxr'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        school: "",
      });
      router.push("/assessment/job-zones");
      // Optionally, show a success message or redirect the user
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert("Error sending data: " + error.response.data.error);
      } else {
        alert("An error occurred while sending data.");
      }
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="pageDiv">
      <div className="text-center">
        <h1 className="titleH1 space-y-6 py-5 text-4xl text-black leading-relaxed">
          In Order To Get Your List Of Suggested Careers Based On Your Career
          Interest Finder Results Send Your Scores Directly To Your Email. This
          Is Required.
        </h1>
      </div>
      <form>
        <div className="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
        </div>

        <div className="flex justify-between pt-10">
          <Link href="/assessment/results/career">
            <button className="blueButton">
              Back
            </button>
          </Link>
          <button
            className="blueButton"
            type="button" // Change type to button
            onClick={() => {
              handleSubmit(); // Call handleSubmit function on button click
            }}
          >
            Explore Job Zones
          </button>
        </div>
      </form>
    </div>
  );
}
