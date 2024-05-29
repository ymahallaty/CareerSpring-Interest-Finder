"use client";

import React from "react";
import { useState,useEffect } from "react";
import Questions from "../../components/Questions.js";
import Link from "next/link";
import QuizButtons from "../../components/QuizButtons.js";
import CustomizedProgressBar from "../../components/CustomizedProgressBar.js";

export default function CareerAssessment() {
  // this is where the answers to the questions are stored.
  const [answers, setAnswers] = useState({
  question1: '',
  question2: '',
  question3: '',
  question4: '',
  question5: '',
  question6: '',
  question7: '',
  question8: ''});
  const [progressValue, setProgressValue] = useState(0);

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value
    });
  };

  // Check if all questions are answered
  const areAllQuestionsAnswered = () => {
   return Object.values(answers).every(answers => answers.trim() !== '');
  };


  const clickRadioBtn = (question, value) => {
    setAnswers((initialAnswers) => {
      if (!initialAnswers[question]) {
        const newValue = Math.min(progressValue + 1.67, 100);
        setProgressValue(newValue);
      }
      const testObj = {...initialAnswers, [question]: value}
      const initalObj = Object.entries(testObj)
      // console.log("initalObj: ", initalObj)
      const finalObj = initalObj.sort(([getA], [getB]) => {
          // console.log('getA: ', [getA])
          // console.log('getA sliced: ', [getA][0].slice(question.length - 1))
          // console.log('getA sliced, and parsed: ', Number([getA][0].slice(question.length - 1)))
          return Number([getA][0].slice(question.length - 1)) - Number([getB][0].slice(question.length - 1))
      })
      // console.log("finalObj: ", finalObj)
      const returnObj = Object.fromEntries(finalObj)
      // console.log("returnObj: ", returnObj)
      return returnObj
    });
  };
  console.log(answers);

  function handleClick(){
    
    if(!areAllQuestionsAnswered()){
      alert("Please answer all questions")
    }
  }

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
        <Questions
          answers={answers}
          question="question1"
          name="question1"
          value={answers}
          clickRadioBtn={clickRadioBtn}
          writtenQuestion="Question 1: Build kitchen cabinets"
          onChange={handleChange}
        />
        <Questions
          answers={answers}
          name="question2"
          question="question2"
          value={answers}
          clickRadioBtn={clickRadioBtn}
          writtenQuestion="Question 2: Lay brick or tile"
          onChange={handleChange}
        />
        <Questions
          answers={answers}
          clickRadioBtn={clickRadioBtn}
          question="question3"
          name="question3"
          value={answers}
          onChange={handleChange}
          writtenQuestion="Question 3: Develop a new medicine"
        />
        <Questions
          answers={answers}
          clickRadioBtn={clickRadioBtn}
          onChange={handleChange}
          question="question4"
          name="question4"
          value={answers}
          writtenQuestion="Question 4: Study ways to reduce water pollution"
        />
        <Questions
          answers={answers}
          clickRadioBtn={clickRadioBtn}
          onChange={handleChange}
          question="question5"
          name="question5"
          value={answers}
          writtenQuestion="Question 5: Write books or plays"
        />
        <Questions
          answers={answers}
          clickRadioBtn={clickRadioBtn}
          onChange={handleChange}
          question="question6"
          name="question6"
          value={answers}
          writtenQuestion="Question 6: Play a musical instrument"
        />
        <Questions
          answers={answers}
          clickRadioBtn={clickRadioBtn}
          onChange={handleChange}
          question="question7"
          name="question7"
          value={answers}
          writtenQuestion="Question 7: Teach an individual an exercise routine"
        />
        <Questions
          answers={answers}
          clickRadioBtn={clickRadioBtn}
          onChange={handleChange}
          question="question8"
          name="question8"
          value={answers}
          writtenQuestion="Question 8: Help people with personal or emotional problems"
        />
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
          <button className=" blueButton" disabled={!areAllQuestionsAnswered()}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
