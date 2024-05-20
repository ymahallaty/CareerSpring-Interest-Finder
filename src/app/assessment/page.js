"use client";

import React, { useState } from "react";
import Questions from "../../components/Questions.js";
import Link from "next/link";
import CustomizedProgressBar from "../../components/CustomizedProgressBar.js";
import useSWR from "swr";
import axios from "axios";


const fetcher = url => axios.get(url).then(res => res.data);

export default function CareerAssessment() {
  const [answers, setAnswers] = useState({}); // Use object to store answers
  const [progressValue, setProgressValue] = useState(0);
  const { data, error } = useSWR('../assessment/api', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return null;

  const clickRadioBtn = (question, value) => {
    setAnswers(prevAnswers => { // Access prevAnswers here
      const newAnswers = {
        ...prevAnswers, // Copy previous answers
        [question]: value, // Update the selected question's answer
      };

      // Update progress only if this is the first answer for the question
      if (!prevAnswers[question]) {
        setProgressValue(Math.min(progressValue + 1.67, 100));
      }

      return newAnswers; // Return the updated answers object
    });
  };

  const getQuestions = data?.question || [];

  // Extract only the answer values (1-5)
  const answersArray = Object.values(answers);

  // Join answer values into a comma-separated string
  const answersString = answersArray.join(",");

  return (
   <div className="testDiv">
    <h1 className="titleH1 max-w-[99.5%]">
      Career Interest Finder Questions
    </h1>
    <div className="flex justify-center my-10">
      <CustomizedProgressBar value={progressValue} />
    </div>
    <section className="text-left m-auto md:w-3/4 py-1.5 ">
      <div className="py-1.5">
        <p className="text-[20px] mb-4">
          Read each question carefully and decide how you would feel about
          doing each type of work:
        </p>
      </div>
      {getQuestions.map((ele, i) => (
        <Questions
          key={i + 1}
          answers={answers}
          question={`question${i + 1}`}
          clickRadioBtn={clickRadioBtn}
          writtenQuestion={`Question ${i + 1}: ${ele.text}`}
        />
      ))}
    </section>
    <div className="flex justify-around align-center items-center py-5">
      <Link href="/welcome">
        <button className=" blueButton">Back</button>
      </Link>
      <Link href="/ending">
        <button className=" blueButton">Next</button>
      </Link>
    </div>
  </div>
);
}

