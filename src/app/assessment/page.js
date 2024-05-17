"use client";

import React from "react";
import { useState,useEffect } from "react";
import Questions from "../../components/Questions.js";
import Link from "next/link";
import QuizButtons from "../../components/QuizButtons.js";
import CustomizedProgressBar from "../../components/CustomizedProgressBar.js";

import useSWR from "swr";
import axios from "axios";

const fetcher = url => axios.get(url).then(res => res.data)

export default function CareerAssessment() {
  const [answers, setAnswers] = useState("");
  const [progressValue, setProgressValue] = useState(0);
  const [url, setUrl] = useState('https://services.onetcenter.org/ws/mnm/interestprofiler/questions');
  const [questions, setQuestions] = useState([]);

  const { data, error } = useSWR(() => url ? `../assessment/api?url=${encodeURIComponent(url)}` : null, fetcher);

  useEffect(() => {
    if (error) {
      console.error('Failed to load:', error);
    }

    if (data) {
      console.log('showing the data: ', data.link[0].href)
      setQuestions(data.question);
    }
  }, [data, error]);

  if (error) return <div>Failed to load</div>;
  if (!data) return null;

  const testingURL = data.link[0].href; 
  
  /*
  // this is where the answers to the questions are stored.

  // debugger
  const [answers, setAnswers] = useState("");
  const [progressValue, setProgressValue] = useState(0);
  const [url, setUrl] = useState('https://services.onetcenter.org/ws/mnm/interestprofiler/questions')
  const [questions, setQuestions] = ([])



  const { data, error } = useSWR(() => url? `../assessment/api?url=${encodeURIComponent(url)}` : null, fetcher);

  // if (error) return <div>Failed to load</div>;
  // if (!data) return null;

  // const [questions, setQuestions] = ([])

  useEffect(() => {
    if (error) {
      console.error('Failed to load:', error);
    }

    if(data){
      setQuestions(data.question)
      // setQuestions(() => {data.question})
    }
    

  }, [data, error])

  if (error) return <div>Failed to load</div>;
  if (!data) return null;


  console.log("get the url: ", url)

*/
  // const { data, error } = useSWR('../assessment/api', fetcher)

  // const { data, error } = useSWR(() => url? `../assessment/api?url=${encodeURIComponent(url)}` : null, fetcher);



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
      return returnObj
    });
  };
  console.log(answers);

  // const getAnswerChoices = data.answer_options.answer_option 
  // console.log("getAnswerChoices: ", getAnswerChoices)


  const getQuestions = data.question
  // console.log("getQuestions: ", getQuestions)

  const getOnlyStringAnswersObj = Object.values(answers).toString().replaceAll(",", "")

  console.log("The object to reference when submitting the answers: ", getOnlyStringAnswersObj)

  // this is to save the questions inside of state management


  console.log('here is the questions state: ', questions)




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
            questions.map((ele, i) => {
              console.log('testing this map: ', ele.index)
              return (
                
                <Questions
                  key={i + 1}
                  answers={answers}
                  question={`question${ele.index}`}
                  clickRadioBtn={clickRadioBtn}
                  writtenQuestion={`Question ${ele.index}: ${ele.text}`}
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
      
      <Link href="/assessment">
        <button onClick={() => {
          console.log('testing')
          setUrl("https://services.onetcenter.org/ws/mnm/interestprofiler/questions")
          
          }}>Back</button>
      </Link>

      <Link href="/assessment?page_id=1">
        <button onClick={() => {
          console.log('testing')
          setUrl(testingURL)
          
          }}>Next</button>
      </Link>



    </div>
  );
}
