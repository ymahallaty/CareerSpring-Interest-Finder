"use client";

import React from "react";
import { useState} from "react";
import Questions from "../../components/Questions.js";
import Link from "next/link";
import QuizButtons from "../../components/QuizButtons.js";
import CustomizedProgressBar from "../../components/CustomizedProgressBar.js";
import useSWR from "swr";

import axios from "axios";

const fetcher = url => axios.get(url).then(res => res.data)
 

export default function CareerAssessment() {
  // this is where the answers to the questions are stored.
  const [answers, setAnswers] = useState("");
  // this is the progress bar keeping track of the users answers
  const [progressValue, setProgressValue] = useState(0);

  const { data, error } = useSWR('/api', fetcher)

  if (error) return <div>Failed to load</div>;
  if (!data) return null;



  const clickRadioBtn = (question, value) => {
    setAnswers((initialAnswers) => {
      if (!initialAnswers[question]) {
        const newValue = Math.min(progressValue + 1.67, 100);
        setProgressValue(newValue);
      }
      const testObj = {...initialAnswers, [question]: value}
      const initalObj = Object.entries(testObj)
      const finalObj = initalObj.sort(([getA], [getB]) => {
          return Number([getA][0].slice(question.length - 1)) - Number([getB][0].slice(question.length - 1))
      })
      const returnObj = Object.fromEntries(finalObj)
      // console.log("returnObj: ", returnObj)
      return returnObj
    });
  };
  console.log(answers);
  const getAnswerChoices = data.answer_options.answer_option 
  console.log("getAnswerChoices: ", getAnswerChoices)
  const getQuestions = data.question
  console.log("getQuestions: ", getQuestions)

  const testing = getQuestions.map((ele) => {
    console.log(ele)
    // console.log("id: ", i + 1)
  })
  console.log("Here is the data:", data)
  console.log('here is map data: ', testing)

  return (
    <div className="testDiv">
      {/* <img className=" w-1/4" src={careerspringlogo} alt="careerspring logo"/> */}
      <h1 className="titleH1 max-w-[99.5%]">
        Career Interest Finder Questions
      </h1>
        <div className="flex justify-center my-10">
          <CustomizedProgressBar value={progressValue} />
        </div>
      
      {/* lg:w-2/4 */}

      <section className="text-left m-auto md:w-3/4 py-1.5 ">
        <div className="py-1.5">
          <p className="text-[20px] mb-4">
            Read each question carefully and decide how you would feel about
            doing each type of work:
          </p>
        </div>

        {
          getQuestions.map((ele, i) => {
            return (

              <Questions
                key={i + 1}
                answers={answers}
                question={`question${i + 1}`}
                clickRadioBtn={clickRadioBtn}
                writtenQuestion={`Question ${i + 1}: ${ele.text}`}
                />
            )
          
        
            })
        }
      </section>

      {/* <QuizButtons
                back = '/welcome'
                next = '#'
            /> */}
      <div className="flex justify-around align-center items-center py-5">
        <Link href="/welcome">
          {/* p-[65px] */}
          <button className=" blueButton">
            Back
          </button>
        </Link>
        <Link href="/ending">
          <button className=" blueButton">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
