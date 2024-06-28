"use client";
// import React, { useState } from "react";
import React, {Suspense, useState} from "react";
import {useSearchParams} from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import emailjs from '@emailjs/browser';
import { z } from "zod";

const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
const publicKey = process.env.NEXT_PUBLIC_KEY;

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  firstName: z.string().regex(/^[A-Za-z\s]+$/, "First name is required"),
  lastName: z.string().regex(/^[A-Za-z\s]+$/, "Last name is required"),
});

function EmailForm() {
  const router = useRouter();
  const showParams = useSearchParams();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    school: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const riasecString = showParams.get('riasec');
  const riaSec = riasecString.split(',').map(Number);

  // console.log('here is the riaSec: ', riaSec)

  const handleSubmit = async (event) => {
    // event.preventDefault()
    const result = formSchema.safeParse(formData);

    // console.log('get result: ', result)

// this is for emailJS

  // const templateID = process.env.REACT_APP_TEMPLATE_ID;
  // const serviceID = process.env.REACT_APP_SERVICE_ID;
  // const publicKey = process.env.REACT_APP_PUBLIC_KEY;


  const templateParams = {
    to_name: formData.firstName,
    realistic_score: riaSec[0],
    investigative_score: riaSec[1],
    artistic_score: riaSec[2],
    social_score: riaSec[3],
    enterprising_score: riaSec[4],
    conventional_score: riaSec[5]
  }

  // emailjs
  // .sendForm(serviceID, templateID, templateParams, {
  //   publicKey: publicKey,
  // })
  // .then(
  //   () => {
  //     console.log('SUCCESS!');
  //   },
  //   (error) => {
  //     console.log('FAILED...', error.text);
  //   },
  // );
  // debugger
  // emailjs.send(serviceID, templateID, templateParams, {
  //   publicKey: publicKey,
  // })
  //   .then(
  //     () => {
  //       console.log('SUCCESS!');
  //     },
  //     (error) => {
  //       console.log('FAILED...', error.text);
  //     },
  //   );

    if (!result.success) {
      alert(result.error.errors.map((err) => err.message).join("\n"));
      // nextPage(false)
      return false;
    }

    try {
      const response = await axios.post("/add-user-data/api", formData);
      alert("Data sent successfully");

      emailjs.send(serviceID, templateID, templateParams, {
        publicKey: publicKey,
      })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        school: "",
      });
      // console.log('here is the updated data: ', formData)
      // console.log('here is your response: ', response)
      // nextPage(true)
      return true
      // router.push("/assessment/job-zones");
      // Optionally, show a success message or redirect the user
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert("Error sending data: " + error.response.data.error);
      } else {
        alert("An error occurred while sending data.");
      }
      console.error("Error sending data:", error);
      return false
    }
  };

  const nextPage = (success) => {
    if(success){
      return `/assessment/job-zones?riasec=${riaSec}`
      // console.log('IT WORKS!!!!')
    }
    return `/assessment/email-form?riasec=${riaSec}`
  }

  // function getRiaSec(){
  //   const endingUrl = new URL (window.location.href)
  //   const showParams = endingUrl.searchParams
  //   // const showAnswers = showParams.get('answers')
  //   const riasecString = showParams.get('riasec');
  //   const riasec = riasecString.split(',').map(Number);
  //   // console.log('here are the answers: ', getAnswers)
  //   return riasec
  // }
  // const riasecString = showParams.get('riasec');
  // const riaSec = riasecString.split(',').map(Number);
  // const riaSec = getRiaSec()

  // function oldOrNewBackRoute(){
  //   const endingUrl = new URL (window.location.href)
  //   const showParams = endingUrl.searchParams
  //   const answers = showParams.get('answers')
  // }

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
        <div className="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 text-base interFont">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2 interFont"
              htmlFor="username"
            >
              Enter your email
            </label>
            <input
              className="interFont shadow appearance-none border rounded w-full
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
              className="block text-gray-700 text-lg font-bold mb-2 interFont"
              htmlFor="username"
            >
              Enter your first name
            </label>
            <input
              className="interFont shadow appearance-none border rounded w-full
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
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="username"
            >
              Enter your last name
            </label>
            <input
              className=" interFont shadow appearance-none border rounded w-full
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
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="username"
            >
              Enter your school
            </label>
            <input
              className="shadow appearance-none border rounded w-full
            py-2 px-3 text-gray-700 leading-tight focus:outline-none
            focus:shadow-outline interFont"
              id="school"
              type="text"
              placeholder="Please enter the fulle name. ie 'Career Spring University'"
              value={formData.school}
              onChange={handleChange}
            ></input>
            
          </div>
        </div>

        <div className="flex justify-between pt-10">
          <Link href={`/assessment/results?riasec=${riaSec}`}>
            <button className="blueButton">
              Back
            </button>
          </Link>
          {/* <Link href = {`${nextPage()}`}></Link> */}
            <button
              className="blueButton"
              type="button" // Change type to button
              onClick={ async () => {
                const isValid = await handleSubmit(); // Call handleSubmit function on button click
                // const isValid = await handleSubmit(); // without the await, it goes up if the boolean value is false
                if(isValid){
                  router.push(nextPage(true))
                }
              }}
            >
              Explore Job Zones
            </button>
          
        </div>
      </form>
    </div>
  );
}

const Page = () => {
  // const router = useRouter()
  return (
    <Suspense>
      <EmailForm/>
    </Suspense>
  )
}

export default Page