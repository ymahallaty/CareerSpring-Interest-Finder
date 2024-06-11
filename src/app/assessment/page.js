"use client";

import React from "react";
import { useState,useEffect } from "react";
import { useRouter } from 'next/navigation'
import Questions from "../../components/Questions.js";
import Link from "next/link";
// import QuizButtons from "../../components/QuizButtons.js";
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

/*******************************************************************
  This was the state to insert into the fetcher variable above to fetch data from the
  O*NET API. Currently, to fetch such data, the url is grab from the zuzstand urlStore function.
********************************************************************/


// the hooks below is related to page pagination
  const [prevPage, setPervPage] = useState(0)
  const [nextPage, setNextPage] = useState(0)
  const { showPageId, increasePage_id, decreasePage_id} = pageIDStore();

/*
    The urlStore hook is used to ensure that when the prospect user clicks on the back to return the assessment survey,
    the url store will be reference to fetch the data and render the last set of 12 questions (48-60). This is also follow-up
    by the back and next button functionality dynmatically working.
*/

  const showURL = urlStore((state) => state.url)
  const updateURL = urlStore((state) => state.setUrl);
  // console.log('I HOPE THE SHOWURL SHOWS THE BACKEND: ', showURL)

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
        if(showURL){
          const url = new URL(showURL)
          const urlParams = url.searchParams
          const getLength = [...urlParams].length

          if(getLength){ 
            let start = urlParams.get('start')
            let end = urlParams.get('end')
            return `http://localhost:3000/assessment/api?start=${start}&end=${end}`

          }
        }
        return `http://localhost:3000/assessment/api`
      }
      catch(error){
        console.error(error)
      }
    }else{
      return null
    }
  }

  const fetchURL = displayURL()
  // console.log('show the fetchURL: ', fetchURL)
  // const { data, error} = useSWR(fetchURL, fetcher, {
  //   onError: (error) => {
  //     if (error) {
  //       return console.error('Failed to load:', error);
  //     }
  //   },
  //   onSuccess: (data) => {
  //     if (data) {
  //       // setQuestions(data.question)
  //       // debugger
  //       // console.log('testing data: ', data)
  //       return data;
  //     }
  //   }
  // });

  const { data, error} = useSWR(fetchURL, fetcher);

/*
    This useEffect is used when the user refreshes the page
*/

  // useEffect(() => {

  //   const handleBeforeUnload = (event) => {
  //     event.preventDefault();
  //     // A flag is set in session storage when the page is being reloaded
  //     sessionStorage.setItem('isReloading', 'true');
  //   };
  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   // Check if the page is being reloaded
  //   if (sessionStorage.getItem('isReloading') === 'true') {
  //     sessionStorage.removeItem('isReloading'); // Clear the flag
  //     router.replace('/welcome'); // Redirect the user back to the home page
  //   }

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, [router, answers]);

  
  useEffect(() => {
    const showAnswersObjectLength = Object.keys(showAnswersObject).length
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
  // console.log('refreshingPage and current page_id: ', showPageId)
  if(showPageId !== 1 && nextPage !== 1){
    // console.log('HELLO YOUR NEXTPAGE HAS INCREASE')
    setNextPage(1)
  }else if(showPageId === 1 && nextPage !==0){
    setNextPage(0)
  }
}

refreshingPage()

/******************************************************************

  The short hand conditional logic stored in variables is to ensure that the url links from the
  O*NET API is dynmatically stored to reference from the handleClicks functions further below.

  It has been commented out as the code has been moved to the handle clicks for local variable scope and modularize code

*****************************************************************/

  // const isPrevThere = data?.link ? () => (data.link.find(prev => prev.rel === "prev")) : null;
  // // console.log("isPrevThere: ", isPrevThere())
  // // const isNextThere = data?.link ? () => !data.link.find(next => next.rel === 'next')? null : data.link.find(next => next.rel === 'next') : null
  // const isNextThere = data?.link ? () => data.link.find(prev => prev.rel === "next") : null;
  // // console.log('isNextThere: ', isNextThere())



  // const findNextIndex = (element) => element.rel === 'next'
  // const findPrevIndex = (element) => element.rel === 'prev'


  // const isIndexOfNextThere = data?.link ? data.link.findIndex(isNextThere) === -1? null: data.link.findIndex(findNextIndex) : null
  // // console.log('isIndexOfNextThere: ', isIndexOfNextThere)  1

  // const isIndexOfPrevThere = data?.link ? data.link.findIndex(isPrevThere)? null: data.link.findIndex(findPrevIndex) : null

  // const isThisPageValid = data?.link && data.link.length > nextPage

  // const getNextURL = typeof isIndexOfNextThere !== 'number'? null: data.link[nextPage].href;
  // const getPrevURL = typeof isIndexOfPrevThere !== 'number'? null: data.link[prevPage].href;

  // console.log('get next url: ', getNextURL)
  // console.log('get prev url: ', getPrevURL)

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
      // const getOnlyStringAnswersObj = Object.values(answers).toString().replaceAll(",", "")
      // setAnswersObject(getOnlyStringAnswersObj);
      // console.log('HERE IS THE OBJECT: ', getQNAObject)
      setTimeout(() => {
        // const getOnlyStringAnswersObj = Object.values(getQNAObject).toString().replaceAll(",", "")
       setAnswersObject(getQNAObject);     
       }, 0)
      return getQNAObject
    });
  };

/*******************************************************

  Using the logic above to get the right numbers to go to different pages within
  the career assessment survey, you can then click the 'pervious' or 'next' button.

**********************************************************/


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
        console.log('get inital status-prev: ', showURL)
        console.log('get update status-prev: ', showURL)
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

  // let isFunctionCalled = false;

  // if(!areAllQuestionsAnswered()){
  //   alert("Please answer all questions")
  // }

  if(showPageId < 5){
    let isFunctionCalled = false;
    if(start === 13 && end === 24){
      setNextPage(isIndexOfNextThere + 1)

    }

    // setPage_id(initalNum => initalNum + 1)
    // console.log('before the global page_id is updated: ', showPageId)
  //  <Link className="[overflow-anchor:none]" href={showPageId < 5? `/assessment`:`/ending`}>  </Link>
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
function disableButton (){
  if(page_id === 1){
    if(Object.keys(answers).length !== 12){
      console.log("is this thing on")
      return (true)
    }
    else {
      return (false)
    }
   }
   if(page_id === 2){
    if(Object.keys(answers).length !== 24){
      console.log("is this thing on????")
      return (true)
    }
    else {
      return (false)
    }
   }
   if(page_id === 3){
    if(Object.keys(answers).length !== 36){
      return (true)
    }
    else {
      return (false)
    }
   }
   if(page_id === 4){
    if(Object.keys(answers).length !== 48){
      return (true)
    }
    else {
      return (false)
    }
   }
   if(page_id === 5){
    if(Object.keys(answers).length !== 60){
      return (true)
    }
    else {
      return (false)
    }
   }
}



const pickYourAnswerArray = data?.answer_options.answer_option ? data.answer_options.answer_option: null
// const getQuestions = Array.from(data.question)
const getQuestions = data.question
// function handleClick(){
//   //   if(!areAllQuestionsAnswered()){
//   //     alert("Please answer all questions")
//   //   }
//   // }
// }

// console.log('what is the current value of the nextPage state: ', nextPage)
// console.log('what is the current value of the prevPage state: ', prevPage)

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

      {/* <QuizButtons
                back = '/welcome'
                next = '#'
            /> */}
      <div className="flex justify-around align-center items-center py-5">
        {/* <Link className=" [overflow-anchor:none]" href={showPageId > 1? `/assessment`  :`/welcome`}>

          <button onClick={handlePerviousClick} className=" blueButton [overflow-anchor:none] ">
            Back
          </button>
        </Link> */}
          <button onClick={handlePerviousClick} className=" blueButton [overflow-anchor:none] ">
            Back
          </button>


        {/* <Link href="/ending">
          <button className=" blueButton">
            Next
          </button>
        </Link> */}
        {/* <Link href={page_id < 5? `/assessment?page_id=${page_id + 1}`:`/ending`}> */}
        {/* <Link className="[overflow-anchor:none]" href={showPageId < 5? `/assessment`:`/ending`}>
          <button 
          disabled={disableButton()}
          onClick={handleNextClick}
          className=" blueButton [overflow-anchor:none]"
          // disabled={!areAllQuestionsAnswered()}
          >
            Next
          </button>
        </Link> */}
        {/* <Link className="[overflow-anchor:none]" href={showPageId < 5? `/assessment`:`/ending`}>        </Link> */}
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
          // disabled={!areAllQuestionsAnswered()}
          >
            Next
          </button>


      </div>

    </div>

  );
}
