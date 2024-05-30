"use client";

import React from "react";
import { useState,useEffect } from "react";
import { useRouter } from 'next/navigation'
import Questions from "../../components/Questions.js";
import Link from "next/link";
import QuizButtons from "../../components/QuizButtons.js";
import CustomizedProgressBar from "../../components/CustomizedProgressBar.js";
import urlStore from "./stores/urlStore.js/index.js";
import useSWR from "swr";
import axios from "axios";

// const fetcher = url => axios.get(url).then(res => res.data)

const fetcher = showURL => axios.get(showURL).then(res => res.data)

export default function CareerAssessment() {

// this is to keep track of the users answers
  const [answers, setAnswers] = useState({});

// to keep of the prospect users progress


// the hooks below is related to page pagination


  const [progressValue, setProgressValue] = useState(0);

  // Check if all questions are answered
  const areAllQuestionsAnswered = () => {
   return Object.values(answers).every(answers => answers.trim() !== '');
  };



/*******************************************************************
  This was the state to insert into the fetcher variable above to fetch data from the
  O*NET API. Currently, to fetch such data, the url is grab from the zuzstand urlStore function.
********************************************************************/

// const [url, setUrl] = useState('https://services.onetcenter.org/ws/mnm/interestprofiler/questions');

// the hooks below is related to page pagination
  const [questions, setQuestions] = useState([]);
  const [prevPage, setPervPage] = useState(0)
  const [nextPage, setNextPage] = useState(0)

  // the concern is whatever or not a page_id is needed on the external url, and not just internally
  const [page_id, setPage_id] = useState(1)
  console.log('the beginning of page_id: ', page_id)

/*
    The urlStore hook is used to ensure that when the prospect user clicks on the back to return the assessment survey,
    the url store will be reference to fetch the data and render the last set of 12 questions (48-60). This is also follow-up
    by the back and next button functionality dynmatically working.
*/

  const showURL = urlStore((state) => state.url)
  console.log('where is the showURL: ', showURL)
  const updateURL = urlStore((state) => state.setUrl);

  const router = useRouter()

/*
    The shouldFetch variable is to keep track of what page the prospect user is on for the assessment survey. If they are
    either the first or last page, the value of fetchURL will be null b/c they are either returning to the welcome page or
    entering the ending page (the end of the assessment survey)
*/

  const shouldFetch = page_id <= 5 && page_id >= 1;

  const fetchURL = shouldFetch ? `../assessment/api?url=${encodeURIComponent(showURL)}` : null

  const { data, error, isLoading } = useSWR(fetchURL, fetcher);

/*
    This useEffect is to ensure that the data is fetch dynmaically
*/

  useEffect(() => {
    if (error) {
      console.error('Failed to load:', error);
    }

    if (data) {
      setQuestions(data.question);
      console.log('what is the current state of page_id in useEffect: ', page_id)
    }
  // the bottom depdency is the final depdency array
  }, [data, error]);

  //this dependency array was used perviously
  // [data, error, showURL, page_id]

  console.log('what is the updated state of page_id after useEffect: ', page_id)
  // console.log('get new window.location.search:' , window.location.search)

/*
    This useEffect is used when the user refreshes the page
*/
  useEffect(() => {

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      // A flag is set in session storage when the page is being reloaded
      sessionStorage.setItem('isReloading', 'true');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Check if the page is being reloaded
    if (sessionStorage.getItem('isReloading') === 'true') {
      sessionStorage.removeItem('isReloading'); // Clear the flag
      router.replace('/welcome'); // Redirect the user back to the home page
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [router, answers]);



  if (error) return <div>Failed to load</div>;
  // I forgot to add the && with shouldFetch (2)
  if (!data && shouldFetch) return null;


/*************************************************************************

    This conditional logic is needed to ensure that when the prospect user clicks on the back button from the ending page to return
    to the assessment survey, they will be able to navigate back and fourth without coming across funky errors.

    This is subject to change however.

***************************************************************************/

  function refreshing4PageIDState(){
    if(page_id === 1){

      console.log("what's up?")
      const getStoreURL = new URL(showURL)
      const getStringNums = new URLSearchParams(getStoreURL.search)
      const getStartNum = getStringNums.get('start')
      const getEndNum = getStringNums.get('end')

      const currentURL = new URL(window.location.href)
      const parseURL = new URLSearchParams(currentURL.search)
      console.log('the currentURL: ', currentURL)
      const getPageID = parseURL.get('page_id')

      console.log("The page_id is really one: ", page_id)
      console.log("The PAGE_ID of the url is: ", getPageID)
      console.log("What is the value of nextPage? It is: ", nextPage)

      if(getEndNum === '60' && getStartNum === '49'){
        console.log('IT WORKS!!!!')
        setPage_id(5)
        if(nextPage === 0){
          console.log('It really does work, for the last page')
          setNextPage(1)
        }
      }else if(getPageID !== '1' && nextPage === 0){
        // console.log('this is me refreshing that page: ', getPageID)
        // console.log('this is the value of the nextPage state: ', nextPage)
        // setNextPage((initalNum) => initalNum + 1)
      }
      else{
        console.log('no changes here')
      }

    }else{
      const currentURL = new URL(window.location.href)
      const parseURL = new URLSearchParams(currentURL.search)
      // console.log('the currentURL: ', currentURL)
      const getPageID = parseURL.get('page_id')
      // console.log(getPageID)
      // page_id
      if(Number(getPageID) !== 1 && nextPage === 0){
        setNextPage(1)
      }else{
        console.log('it is not working')
      }
    }
  }

  refreshing4PageIDState()


/******************************************************************

  The short hand conditional logic stored in variables is to ensure that the url links from the
  O*NET API is dynmatically stored to reference from the handleClicks functions further below.

*****************************************************************/

  const isPrevThere = data?.link ? () => (data.link.find(prev => prev.rel === "prev")) : null;
  // console.log("isPrevThere: ", isPrevThere())
  // const isNextThere = data?.link ? () => !data.link.find(next => next.rel === 'next')? null : data.link.find(next => next.rel === 'next') : null
  const isNextThere = data?.link ? () => data.link.find(prev => prev.rel === "next") : null;
  // console.log('isNextThere: ', isNextThere())



  const findNextIndex = (element) => element.rel === 'next'
  const findPrevIndex = (element) => element.rel === 'prev'


  const isIndexOfNextThere = data?.link ? data.link.findIndex(isNextThere) === -1? null: data.link.findIndex(findNextIndex) : null
  // console.log('isIndexOfNextThere: ', isIndexOfNextThere)  1

  const isIndexOfPrevThere = data?.link ? data.link.findIndex(isPrevThere)? null: data.link.findIndex(findPrevIndex) : null

  const isThisPageValid = data?.link && data.link.length > nextPage

  const getNextURL = typeof isIndexOfNextThere !== 'number'? null: data.link[nextPage].href;
  const getPrevURL = typeof isIndexOfPrevThere !== 'number'? null: data.link[prevPage].href;

  console.log('get next url: ', getNextURL)
  console.log('get prev url: ', getPrevURL)
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

    // Marcia will create a new object under here which will be referenced and mapped out on the answers section
    // The name answers can be change to storeAnswers and setStoreAnswers
    // Marcia's state variable can be checkAnswers/trackAnswers and setCheckAnswers/setTrackAnswers
  };

  console.log('Here are the answers: ', answers)

  const getOnlyStringAnswersObj = Object.values(answers).toString().replaceAll(",", "")
  // console.log("The object to reference when submitting the answers: ", getOnlyStringAnswersObj)
  // console.log('get your data: ', data)
  // console.log('get your answers to questions: ', data.answer_options)

  console.log('get your answers to questions in the form of an array: ', data?.answer_options.answer_option)



/*******************************************************

  Using the logic above to get the right numbers to go to different pages within
  the career assessment survey, you can then click the 'pervious' or 'next' button.

**********************************************************/


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
        console.log('get inital status-prev: ', showURL)
        updateURL(getPrevURL)
        console.log('get update status-prev: ', showURL)
      }
    }else {
      return
    }

}


const handleNextClick = () => {

  const getNextURLParams = getNextURL? new URL(getNextURL).searchParams: null

  const start = getNextURLParams? Number(getNextURLParams.get('start')): null
  const end = getNextURLParams? Number(getNextURLParams.get('end')) : null

  if(!areAllQuestionsAnswered()){
    alert("Please answer all questions")
  }

  if(page_id <= 5){
    if(start === 13 && end === 24){
      setNextPage(isIndexOfNextThere + 1)

    }

    setPage_id(initalNum => initalNum + 1)
    if(getNextURL){
      updateURL(getNextURL)
    }
  }
  else{
    return
  }
}

const pickYourAnswerArray = data?.answer_options.answer_option ? data.answer_options.answer_option: null

function handleClick(){
    if(!areAllQuestionsAnswered()){
      alert("Please answer all questions")
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
          <button onClick={() => {
            if(!areAllQuestionsAnswered()){
              alert("Please answer all questions")
              } else {
                handleNextClick()
              }
          }}
          className=" blueButton"
          disabled={!areAllQuestionsAnswered()}>
            Next
          </button>
        </Link>

      </div>

    </div>

  );
}
