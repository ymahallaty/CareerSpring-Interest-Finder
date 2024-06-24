"use client";

import React from "react";
import { useState,useEffect } from "react";
import { useRouter } from 'next/navigation'
import Questions from "../../components/Questions.js";
import Link from "next/link";
import CustomizedProgressBar from "../../components/CustomizedProgressBar.js";
import urlStore from "./stores/urlStore.js";
import renderAnswersStore from "./stores/renderAnswersStore.js"
import pageIDStore from "./stores/pageIdStore.js";
import useSWR from "swr";
import axios from "axios";


const fetcher = async(url) => {
  try{
    const res = await axios.get(url)
    return res.data
  }catch(err){
    console.error(err)
  }

}

export default function CareerAssessment() {

// this is to keep track of the users answers
  const [answers, setAnswers] = useState({});

// to keep of the prospect users progress
  const [progressValue, setProgressValue] = useState(0);

// the hooks below is related to page pagination
  const [prevPage, setPrevPage] = useState(0)
  const [nextPage, setNextPage] = useState(0)
  const { showPageId, increasePage_id, decreasePage_id} = pageIDStore();

/*
    The urlStore hook is used to ensure that when the prospect user clicks on the back to return the assessment survey,
    the url store will be reference to fetch the data and render the last set of 12 questions (48-60). This is also follow-up
    by the back and next button functionality dynmatically working.
*/

  const showURL = urlStore((state) => state.url)
  const updateURL = urlStore((state) => state.setUrl);

  const setAnswersObject = renderAnswersStore((state) => state.setAnswersObject)
  const showAnswersObject = renderAnswersStore((state) => state.answersObject)

  const router = useRouter()

/*
    The shouldFetch variable is to keep track of what page the prospect user is on for the assessment survey. If they are
    either the first or last page, the value of fetchURL will be null b/c they are either returning to the welcome page or
    entering the ending page (the end of the assessment survey)
*/

  const shouldFetch = showPageId <= 5 && showPageId >= 1; 

  function displayURL(){
    if(shouldFetch){
      try{
        // showURL
        // showURL !== ''
        if(showURL !== ''){
          const url = new URL(showURL)
          const urlParams = url.searchParams
          const getLength = [...urlParams].length

          if(getLength){ 
            let start = urlParams.get('start')
            let end = urlParams.get('end')
            // return `http://localhost:3000/assessment/api?start=${start}&end=${end}`
            return `/assessment/api?start=${start}&end=${end}`

          }
        }
        // return `http://localhost:3000/assessment/api`
        return `/assessment/api`
      }
      catch(error){
        console.error(error)
      }
    }else{
      return null
    }
  }

  const fetchURL = displayURL()
  const { data, error} = useSWR(fetchURL, fetcher);

  
  useEffect(() => {
    /*
      Instead of using the showAnswersObject, I can instead parse out the eventual
      query string of answers and add or replace it to the code below

    */
    const showAnswersObjectLength = Object.keys(showAnswersObject).length
    console.log('here is how the showAnswersObject looks like: ', showAnswersObject)
    console.log('here is how the showAnswersObjectLength looks like: ', showAnswersObjectLength)
    const getProgressValue = Math.floor(progressValue)

    if(showAnswersObjectLength >= 12 && Math.floor(getProgressValue) === 0 ){

      const renderAnswers = Math.min(progressValue + (1.67 * showAnswersObjectLength), 100)

      if(showAnswersObjectLength >= 60){
        setProgressValue(renderAnswers)
      }else if(showAnswersObjectLength >= 48 && showPageId === 5){
        setProgressValue(renderAnswers)
      }else if(showAnswersObjectLength >= 36 && showPageId === 4){
        setProgressValue(renderAnswers)
      }else if(showAnswersObjectLength >= 24 && showPageId === 3){
        setProgressValue(renderAnswers)
      }else if(showPageId === 2){
        setProgressValue(renderAnswers)
      }else if( showPageId === 1){
        setProgressValue(renderAnswers)
      }  
      const renderParsedAnswers = showAnswersObject
      setAnswers(renderParsedAnswers)
    }
  }, [showAnswersObject, progressValue,showPageId ])

  if (error) return <div>Failed to load</div>;
  if (!data && shouldFetch) return null;

  // Check if all questions are answered
  // This is commented out because it causes an error
  // const areAllQuestionsAnswered = () => {
  //   return Object.values(answers).every(answers => answers.trim() !== '');
  // };

/*************************************************************************

    This conditional logic is needed to ensure that when the prospect user clicks on the back button from the ending page to return
    to the assessment survey, they will be able to navigate back and fourth without coming across funky errors.

    This is subject to change however.

***************************************************************************/


function refreshingPage(){
  if(showPageId !== 1 && nextPage !== 1){
    setNextPage(1)
  }else if(showPageId === 1 && nextPage !==0){
    setNextPage(0)
  }
}

refreshingPage()

  const clickRadioBtn = (question, value) => {

    setAnswers((initialAnswers) => {
      
      if (!initialAnswers[question]) {
  
        const newValue = Math.min(progressValue + 1.67, 100);
        setProgressValue(newValue);
      }
      const addAnswers = {...initialAnswers, [question]: value}
      const answersArray = Object.entries(addAnswers)


      const sortAnswersArray = answersArray.sort(([a], [b]) => {
          return Number([a][0].slice(question.length - 1)) - Number([b][0].slice(question.length - 1))
      })
      const getQNAObject = Object.fromEntries(sortAnswersArray)
      setTimeout(() => {
       setAnswersObject(getQNAObject);     
       }, 0)
      return getQNAObject
    });
  };


const handlePerviousClick = (e) => {

  const isPrevThere = data?.link ? () => (data.link.find(prev => prev.rel === "prev")) : null;
  const findPrevIndex = (element) => element.rel === 'prev'
  const isIndexOfPrevThere = data?.link ? data.link.findIndex(isPrevThere)? null: data.link.findIndex(findPrevIndex) : null
  const getPrevURL = typeof isIndexOfPrevThere !== 'number'? null: data.link[prevPage].href;
  const getPrevURLParams = getPrevURL? new URL(getPrevURL).searchParams: null

  const isNextThere = data?.link ? () => data.link.find(prev => prev.rel === "next") : null;
  const findNextIndex = (element) => element.rel === 'next'
  const isIndexOfNextThere = data?.link ? data.link.findIndex(isNextThere) === -1? null: data.link.findIndex(findNextIndex) : null

  const start = getPrevURLParams? Number(getPrevURLParams.get('start')): null
  const end = getPrevURLParams? Number(getPrevURLParams.get('end')) : null

    if(showPageId > 1){
      let isFunctionCalled = false; 

      if((start === 1 && end === 12) && showPageId !== 0){
        setNextPage(isIndexOfNextThere - 1)

      }

       setTimeout(() => {
        if(!isFunctionCalled){
          decreasePage_id()
        }

        isFunctionCalled = true
       }, 0)
      
      if(getPrevURL){
        updateURL(getPrevURL)
        
      }

      router.push('/assessment')
    }else {
      // return
      router.push('/welcome')
    }

}


const handleNextClick = (e) => {

  const isNextThere = data?.link ? () => data.link.find(prev => prev.rel === "next") : null;
  const findNextIndex = (element) => element.rel === 'next'
  const isIndexOfNextThere = data?.link ? data.link.findIndex(isNextThere) === -1? null: data.link.findIndex(findNextIndex) : null
  const getNextURL = typeof isIndexOfNextThere !== 'number'? null: data.link[nextPage].href;
  const getNextURLParams = getNextURL? new URL(getNextURL).searchParams: null

  const start = getNextURLParams? Number(getNextURLParams.get('start')): null
  const end = getNextURLParams? Number(getNextURLParams.get('end')) : null

  // if(!areAllQuestionsAnswered()){
  //   alert("Please answer all questions")
  // }

  if(showPageId < 5){
    let isFunctionCalled = false;
    if(start === 13 && end === 24){
      setNextPage(isIndexOfNextThere + 1)

    }

    if(showPageId < 5){
      setTimeout(() => {
        if(!isFunctionCalled){
            increasePage_id()
        }
        isFunctionCalled = true
       }, 0)
    }

    if(getNextURL){
      updateURL(getNextURL)
    }
    router.push('/assessment')
  }
  else{
    // return
    router.push('/ending')
  }
}

// this function handles the disable button seperately for each page
function disableButton() {
  const requiredAnswers = showPageId * 12;

  if (requiredAnswers && Object.keys(answers).length !== requiredAnswers) {
    return true;
  }

  return false;
}


// console.log('here is data: ', data)
// console.log('more data: ', data.answer_options.answer_option)
const pickYourAnswerArray = data?.answer_options.answer_option ? data.answer_options.answer_option: null
const getQuestions = data.question

  // console.log('Here are the answers: ', answers)
  // const getOnlyStringAnswersObj = Object.values(answers).toString().replaceAll(",", "")
  // console.log("The object to reference when submitting the answers: ", getOnlyStringAnswersObj)

function handleClick(){
    if(!areAllQuestionsAnswered()){
      alert("Please answer all questions")
    }
  
}


  return (
    <div className="testDiv [overflow-anchor:none]">
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
            getQuestions.map((ele, i) => {
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

      <div className="flex justify-around align-center items-center py-5">
          <button onClick={handlePerviousClick} className=" blueButton [overflow-anchor:none] ">
            Back
          </button>
          <button 
          // onClick={() => {
          //   if(!areAllQuestionsAnswered()){
          //     alert("Please answer all questions")
          //     } else {
          //       handleNextClick()
          //     }
          // }}
          onClick={handleNextClick}
          className=" blueButton [overflow-anchor:none]"
          disabled={disableButton()}
          >
            Next
          </button>


      </div>

    </div>

  );
}
