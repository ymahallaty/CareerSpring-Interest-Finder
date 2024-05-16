"use client";

import React from "react";
import { useState,useEffect } from "react";
import Questions from "../../components/Questions.js";
import Link from "next/link";
import QuizButtons from "../../components/QuizButtons.js";
import CustomizedProgressBar from "../../components/CustomizedProgressBar.js";
import { useSearchParams } from "next/navigation.js";



export default function CareerAssessment() {
  // this is where the answers to the questions are stored.
  // the object is returnObj
  // research state mgnt with redux
  // useContext
  const [answers, setAnswers] = useState("");
  const [progressValue, setProgressValue] = useState(0);

  // original code

  // const clickRadioBtn = (question, value) => {
  //   setAnswers((initialAnswers) => {
  //     if (!initialAnswers[question]) {
  //       const newValue = Math.min(progressValue + 1.67, 100);
  //       setProgressValue(newValue);
  //     }
  //     const testObj = {...initialAnswers, [question]: value}
  //     const initalObj = Object.entries(testObj)
  //     const finalObj = initalObj.sort(([getA], [getB]) => {
  //         return Number([getA][0].slice(question.length - 1)) - Number([getB][0].slice(question.length - 1))
  //     })
  //     const returnObj = Object.fromEntries(finalObj)
  //     return returnObj
  //   });
  // };


  //
  const clickRadioBtn = (question, value) => {
    const updatedAnswers = { ...answers, [question]: value };

    setAnswers(updatedAnswers);

    const sortedAnswers = Object.fromEntries(
      Object.entries(updatedAnswers).sort(([a], [b]) => {
        return Number(a.slice(-1)) - Number(b.slice(-1));
      })
    );
    setProgressValue(
      Math.min(Object.keys(sortedAnswers).length * 100 / 1.67, 100)
    );
  };

  // const answersArray = Object.values(answers).map(Number);
  let answersArray = Object.values(answers).toString().replaceAll(',','');
  console.log(answersArray);
  // console.log(answersArray);

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

{/* Code chunck from ticket #400
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
          } */}

        <Questions
          answers={answers}
          question="question1"
          clickRadioBtn={clickRadioBtn}
          writtenQuestion="Question 1: Build kitchen cabinets"
        />
        <Questions
          answers={answers}
          question="question2"
          clickRadioBtn={clickRadioBtn}
          writtenQuestion="Question 2: Lay brick or tile"
        />
        <Questions
          answers={answers}
          clickRadioBtn={clickRadioBtn}
          question="question3"
          writtenQuestion="Question 3: Develop a new medicine"
        />
        <Questions
          answers={answers}
          clickRadioBtn={clickRadioBtn}
          question="question4"
          writtenQuestion="Question 4: Study ways to reduce water pollution"
        />
        <Questions
          answers={answers}
          clickRadioBtn={clickRadioBtn}
          question="question5"
          writtenQuestion="Question 5: Write books or plays"
        />
        <Questions
          answers={answers}
          clickRadioBtn={clickRadioBtn}
          question="question6"
          writtenQuestion="Question 6: Play a musical instrument"
        />
        <Questions
          answers={answers}
          clickRadioBtn={clickRadioBtn}
          question="question7"
          writtenQuestion="Question 7: Teach an individual an exercise routine"
        />
        <Questions
          answers={answers}
          clickRadioBtn={clickRadioBtn}
          question="question8"
          writtenQuestion="Question 8: Help people with personal or emotional problems"
        />
      </section>

      {/* <QuizButtons
                back = '/welcome'
                next = '#'
            /> */}
      <div className="flex justify-around align-center items-center py-5">
        <Link href="/welcome">
          <button className=" blueButton">Back</button>
        </Link>
        {/* answersArray is a state but is not global */}
        <Link
          href={{
            pathname: "/ending",
            query: {
              answers: answersArray,
            },
          }}
        >
          <button className=" blueButton">Next</button>
        </Link>
      </div>
    </div>
  );
}
