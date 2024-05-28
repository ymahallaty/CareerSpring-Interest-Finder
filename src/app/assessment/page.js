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
// this is to keep track of the users answers
  const [answers, setAnswers] = useState({});

// the hooks below is related to page pagination
  const [progressValue, setProgressValue] = useState(0);
  // this state should be part of the global state in order to have access to the very last link when a prospect
  // user clicks on the BACK BUTTON on the /end page to return and edit their answers to the career assessment page
  const [url, setUrl] = useState('https://services.onetcenter.org/ws/mnm/interestprofiler/questions');


  const [questions, setQuestions] = useState([]);
  const [prevPage, setPervPage] = useState(0)
  const [nextPage, setNextPage] = useState(0)

  // the concern is whatever or not a page_id is need on the external url, and not just internally 
  const [page_id, setPage_id] = useState(1)

  const shouldFetch = page_id <= 5 && page_id >= 1;

//keep in mind
  // console.log("get the shouldFetch: ",  shouldFetch)
  const fetchURL = shouldFetch ? `../assessment/api?url=${encodeURIComponent(url)}` : null

  const { data, error } = useSWR(fetchURL, fetcher);

  useEffect(() => {
    if (error) {
      console.error('Failed to load:', error);
    }

    if (data) {
      // console.log('showing the data: ', data.link[0].href) 7
      // console.log('showing all of the data: ', data) 8
      setQuestions(data.question);
    }
  }, [data, error]);

  // useEffect(( ) => {
  //   // console.log('current page (updated): ', pageNum);
  //   console.log('CURRENT PAGE_ID (another update): ', page_id)
  //   // console.log('current prevPage: ', prevPage)
  //   console.log('CURRENT NEXTPAGE: ', nextPage)
  // }, [page_id, nextPage])



  if (error) return <div>Failed to load</div>;
  // I forgot to add the && with shouldFetch (2)
  if (!data && shouldFetch) return null;

//keep in mind
  // console.log("is the link there: ", data?.link)
  // console.log("is the length there? ", data.link.length)
  // console.log("getting the pageNum: ", pageNum)
// keep in mind
  // console.log('getting the nextPage: ', nextPage)


  // console.log('is the page valid: ', isPageValid)
  //without the question mark in the middle, I will immedately get an undefined type error 
  const isPrevThere = data?.link ? () => data.link.find(prev => prev.rel === 'prev') : null;
  const isNextThere = data?.link ? () => !data.link.find(next => next.rel === 'next')? null : data.link.find(next => next.rel === 'next') : null

  const findNextIndex = (element) => element.rel === 'next' 


  const isIndexOfNextThere = data?.link ? data.link.findIndex(isNextThere) === -1? null: data.link.findIndex(findNextIndex) : null
  // console.log('isIndexOfNextThere: ', isIndexOfNextThere)  1

  const isThisPageValid = data?.link && data.link.length > nextPage;
  const getNextURL = isThisPageValid ? data.link[nextPage].href : null;
  const getPrevURL = !isPrevThere? null: data.link[prevPage].href


// keep in mind
  console.log('get all of the data: ', data)

  const clickRadioBtn = (question, value) => {
    setAnswers((initialAnswers) => {
      if (!initialAnswers[question]) {
        const newValue = Math.min(progressValue + 1.67, 100);
        setProgressValue(newValue);
      }
      const addAnswers = {...initialAnswers, [question]: value}
      const answersArray = Object.entries(addAnswers)
      const sortAnswersArray = answersArray.sort(([getA], [getB]) => {
          return Number([getA][0].slice(question.length - 1)) - Number([getB][0].slice(question.length - 1))
      })
      const getQNAObject = Object.fromEntries(sortAnswersArray)
      return getQNAObject
    });
  };

  console.log('Here are the answers: ', answers)

  const getOnlyStringAnswersObj = Object.values(answers).toString().replaceAll(",", "")
  console.log("The object to reference when submitting the answers: ", getOnlyStringAnswersObj) 

  // console.log('get your data: ', data) 
  // console.log('get your answers to questions: ', data.answer_options) 
  console.log('get your answers to questions in the form of an array: ', data?.answer_options.answer_option)
  
  const pickYourAnswerArray = data?.answer_options.answer_option ? data.answer_options.answer_option: null

const handleNextClick = () => {

  const getNextURLParams = getNextURL? new URL(getNextURL).searchParams: null
  
  const start = getNextURLParams? Number(getNextURLParams.get('start')): null
  const end = getNextURLParams? Number(getNextURLParams.get('end')) : null

  if(page_id <= 5){
    if(start === 13 && end === 24){
      setNextPage(isIndexOfNextThere + 1)

    }

    setPage_id(initalNum => initalNum + 1)
    if(getNextURL){
      setUrl(getNextURL)
    }
  }
  else{
    return 
  }

}

const handlePerviousClick = () => {
  const getPrevURLParams = getPrevURL? new URL(getPrevURL).searchParams: null
  
  const start = getPrevURLParams? Number(getPrevURLParams.get('start')): null
  const end = getPrevURLParams? Number(getPrevURLParams.get('end')) : null

    if(page_id > 1){
      if(start === 1 && end === 12){
        setNextPage(isIndexOfNextThere - 1)

      }

      setPage_id(initalNum => initalNum - 1)
      if(getPrevURL){
        setUrl(getPrevURL)
      }
    }else {
      return
    }

}

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
          {
            questions.map((ele, i) => {
              return (
                
                <Questions
                  key={i + 1}
                  answers={answers}
                  question={`question${ele.index}`}
                  clickRadioBtn={clickRadioBtn}
                  writtenQuestion={`Question ${ele.index}: ${ele.text}`}
                  pickYourAnswerArray={pickYourAnswerArray}
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
        <Link href={page_id > 1? `/assessment?page_id=${page_id - 1}`  :`/welcome`}>

          <button onClick={handlePerviousClick} className=" blueButton">
            Back
          </button>
        </Link>

        {/* <Link href="/ending">
          <button className=" blueButton">
            Next
          </button>
        </Link> */}
        <Link href={page_id < 5? `/assessment?page_id=${page_id + 1}`:`/ending`}>
          <button onClick={handleNextClick} className=" blueButton">
            Next
          </button>
        </Link>

      </div>
           
    </div>
    
  );
  
}