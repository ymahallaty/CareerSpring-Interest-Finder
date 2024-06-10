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

// const fetcher = url => axios.get(url).then(res => res.data)

// const fetcher = showURL => axios.get(showURL).then(res => res.data)
//showURL was added in the fetch function parameter 
const fetcher = async(url) => {
  try{
    // debugger
    // axios.get(showURL).then(res => res.data)
    const res = await axios.get(url)
    // console.log('here is the value of res: ', res)
    // console.log('here is the value of res.data: ', res.data)
    return res.data
  }catch(err){
    console.error(err)
  }

}

export default function CareerAssessment() {

  // debugger
// this is to keep track of the users answers
  const [answers, setAnswers] = useState({});

// to keep of the prospect users progress
  const [progressValue, setProgressValue] = useState(0);

/*******************************************************************
  This was the state to insert into the fetcher variable above to fetch data from the
  O*NET API. Currently, to fetch such data, the url is grab from the zuzstand urlStore function.
********************************************************************/

// const [url, setUrl] = useState('https://services.onetcenter.org/ws/mnm/interestprofiler/questions');

// the hooks below is related to page pagination
  // const [questions, setQuestions] = useState([]);
  const [prevPage, setPervPage] = useState(0)
  const [nextPage, setNextPage] = useState(0)

  // the concern is whatever or not a page_id is needed on the external url, and not just internally
  // const [page_id, setPage_id] = useState(1)
  const { showPageId, increasePage_id, decreasePage_id} = pageIDStore();
  // console.log('the beginning of page_id: ', page_id)
  // console.log('the beginning of page_id: ', showPageId)

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

  // const shouldFetch = page_id <= 5 && page_id >= 1;
  const shouldFetch = showPageId <= 5 && showPageId >= 1; 

  // const fetchURL = shouldFetch ? `../assessment/api?url=${encodeURIComponent(showURL)}` : null

  // function displayURL(){
  //   if(shouldFetch){
  //     // debugger
  //     try{
  //       const url = new URL(showURL)
  //       console.log('SHOW THE DIFFERENT PARTS OF THE SHOW URL STORED IN THE URL VARIABLE: ', url)
  //       // debugger
  //       // const url = showURL
  //       console.log('here is the url inside the displayURL function: ', url.nextUrl)
  //       const urlParams = url.searchParams
  //       // const urlParams = new URLSearchParams(url)
  //       // console.log('show the urlParams: ', urlParams)
  //       // url.search
  //       const getLength = [...urlParams].length
  //       // console.log('here is the urlParams:', urlParams)
  //       // console.log('here is the getLength: ', getLength)
  //       if(getLength){  1
  //         // debugger
  //         // console.log('here is the url params: ', urlParams)
  //         // const urlParams = new URLSearchParams (url.search)
  //         // console.log('here is the url params: ', urlParams)
  //         let start = urlParams.get('start')
  //         let end = urlParams.get('end')
  //         // console.log('here is the start: ', start )
  //         // console.log('here is the end: ', end)
  //         return `../assessment/api?start=${start}&end=${end}`
  //         // return `../assessment/api?url=${encodeURIComponent(showURL)}`
  
  //       }else{
  //         // console.log('there is no query params: ', url.search)
  //         // console.log('here is the value of showURL: ', showURL)
  //         return `../assessment/api`
  //         // return `../assessment/api?url=${encodeURIComponent(showURL)}`
  //       }
  //     }
  //     catch(error){
  //       console.error(error)
  //     }
  //     // return `../assessment/api?url=${encodeURIComponent(showURL)}`
  //   }else{
  //     return null
  //   }
  // }

  function displayURL(){
    if(shouldFetch){
      // debugger
      try{

        // showURL !== '' 
        // console.log('getting the error before the if statement: ', isValidURL(showURL))
        //http://localhost:3000/assessment/api
        //showURL !== ''
        if(showURL){
          const url = new URL(showURL)
          console.log('SHOW THE DIFFERENT PARTS OF THE SHOW URL STORED IN THE URL VARIABLE: ', url)
          // debugger
          // const url = showURL
          // console.log('here is the url inside the displayURL function: ', url.nextUrl)
          const urlParams = url.searchParams
          // const urlParams = new URLSearchParams(url)
          console.log('show the urlParams: ', urlParams)
          // url.search
          const getLength = [...urlParams].length
          // console.log('here is the urlParams:', urlParams)
          console.log('here is the getLength: ', getLength)
          if(getLength){  1
            // debugger
            // console.log('here is the url params: ', urlParams)
            // const urlParams = new URLSearchParams (url.search)
            // console.log('here is the url params: ', urlParams)
            let start = urlParams.get('start')
            let end = urlParams.get('end')
            // console.log('here is the start: ', start )
            // console.log('here is the end: ', end)
            return `http://localhost:3000/assessment/api?start=${start}&end=${end}`
            // return `../assessment/api?start=${start}&end=${end}`
            // return `../assessment/api?url=${encodeURIComponent(showURL)}`
          }
        }
        return `http://localhost:3000/assessment/api`
        // return `../assessment/api`
      }
      catch(error){
        console.error(error)
      }
      // return `../assessment/api?url=${encodeURIComponent(showURL)}`
    }else{
      return null
    }
  }

  const fetchURL = displayURL()
  // const fetchURL = shouldFetch ? `../assessment/api?url=${encodeURIComponent(showURL)}` : null
  // const fetchURL = shouldFetch ? `../assessment/api?url=${encodeURIComponent(showURL)}` : null

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
    This useEffect is to ensure that the data is fetch dynmaically
*/

  // const { data, error, isLoading } = useSWR(fetchURL, fetcher);
  // useEffect(() => {
  //   if (error) {
  //     console.error('Failed to load:', error);
  //   }

  //   if (data) {
  //     setQuestions(data.question);
  //     // console.log('what is the current state of page_id in useEffect: ', page_id)
  //   }
  // // the bottom depdency is the final depdency array
  // }, [data, error]);

  //this dependency array was used perviously
  // [data, error, showURL, page_id]

  // console.log('what is the updated state of page_id after useEffect: ', page_id)
  // console.log('get new window.location.search:' , window.location.search)

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
    // const renderAnswers = Math.min(progressValue + (1.67 * showAnswersObjectLength), 100)
    const getProgressValue = Math.floor(progressValue)
    // console.log('LOOK HERE - renderAnswers: ', renderAnswers)
    // console.log('LOOK HERE - getProgressValue: ', getProgressValue)

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
      // console.log('here is you renderParsedAnswers', renderParsedAnswers)
      setAnswers(renderParsedAnswers)
    }
    // else{
    //   console.log('NOPE-NOPE-NOPE-NOPE-NOPE-NOPE-NOPE')
    // }
  }, [showAnswersObject, progressValue,showPageId ])

  if (error) return <div>Failed to load</div>;
  // I forgot to add the && with shouldFetch (2)
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



// keep in mind
  // console.log('PAGE ID FROM ZUSTAND: ', showPageId)
  // console.log('get all of the data: ', data)

  const clickRadioBtn = (question, value) => {

    setAnswers((initialAnswers) => {
      
      if (!initialAnswers[question]) {
  
        const newValue = Math.min(progressValue + 1.67, 100);
        setProgressValue(newValue);
      }
      const addAnswers = {...initialAnswers, [question]: value}
      const answersArray = Object.entries(addAnswers)

      // console.log('answersArray: ', answersArray)

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

    

    // Marcia will create a new object under here which will be referenced and mapped out on the answers section
    // The name answers can be change to storeAnswers and setStoreAnswers
    // Marcia's state variable can be checkAnswers/trackAnswers and setCheckAnswers/setTrackAnswers
    // setTimeout(() => {
    //  const getOnlyStringAnswersObj = Object.values(answers).toString().replaceAll(",", "")
    // setAnswersObject(getOnlyStringAnswersObj);     
    // }, 0)

  };

  // console.log('Here are the answers: ', answers)

  // const getOnlyStringAnswersObj = Object.values(answers).toString().replaceAll(",", "")
  
  // console.log("The object to reference when submitting the answers: ", getOnlyStringAnswersObj)


  // console.log('get your data: ', data)
  // console.log('get your answers to questions: ', data.answer_options)

  // console.log('get your answers to questions in the form of an array: ', data?.answer_options.answer_option)

  // console.log('LOOK HERE - THE VALUE OF THE PROGRESSIVE BAR IS NOW: ', progressValue)

/*******************************************************

  Using the logic above to get the right numbers to go to different pages within
  the career assessment survey, you can then click the 'pervious' or 'next' button.

**********************************************************/


const handlePerviousClick = (e) => {
  // e.preventDefault()
  // debugger
  const isPrevThere = data?.link ? () => (data.link.find(prev => prev.rel === "prev")) : null;
  const findPrevIndex = (element) => element.rel === 'prev'
  const isIndexOfPrevThere = data?.link ? data.link.findIndex(isPrevThere)? null: data.link.findIndex(findPrevIndex) : null
  const getPrevURL = typeof isIndexOfPrevThere !== 'number'? null: data.link[prevPage].href;
  const getPrevURLParams = getPrevURL? new URL(getPrevURL).searchParams: null

  const isNextThere = data?.link ? () => data.link.find(prev => prev.rel === "next") : null;
  const findNextIndex = (element) => element.rel === 'next'
  const isIndexOfNextThere = data?.link ? data.link.findIndex(isNextThere) === -1? null: data.link.findIndex(findNextIndex) : null

  // // console.log('get prev url: ', getPrevURL)

  const start = getPrevURLParams? Number(getPrevURLParams.get('start')): null
  const end = getPrevURLParams? Number(getPrevURLParams.get('end')) : null

  // let isFunctionCalled = false; 

    if(showPageId > 1){
      let isFunctionCalled = false; 

      if((start === 1 && end === 12) && showPageId !== 0){
        setNextPage(isIndexOfNextThere - 1)

      }

      // setPage_id(initalNum => initalNum - 1)
       setTimeout(() => {
        if(!isFunctionCalled){
          decreasePage_id()
        }

        isFunctionCalled = true
       }, 0)
      // console.log('get the local page_id update: ', page_id)
      // console.log('GET THE GLOBAL PAGE_ID UPDATE: ', showPageId)
      
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
  // e.preventDefault()

  // debugger
  // if(page_id === 1 && nextPage !== 0){

  // }
  
  const isNextThere = data?.link ? () => data.link.find(prev => prev.rel === "next") : null;
  // console.log("is isNextThere there: ", isNextThere)
  const findNextIndex = (element) => element.rel === 'next'
  const isIndexOfNextThere = data?.link ? data.link.findIndex(isNextThere) === -1? null: data.link.findIndex(findNextIndex) : null
  // console.log('what is IndexOfNextThere: ', isIndexOfNextThere)
  const getNextURL = typeof isIndexOfNextThere !== 'number'? null: data.link[nextPage].href;
  const getNextURLParams = getNextURL? new URL(getNextURL).searchParams: null

  const start = getNextURLParams? Number(getNextURLParams.get('start')): null
  const end = getNextURLParams? Number(getNextURLParams.get('end')) : null

  // let isFunctionCalled = false;

  // if(!areAllQuestionsAnswered()){
  //   alert("Please answer all questions")
  // }

  // if(page_id <= 5){
    // debugger
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
    // else{
    //   // debugger
    //   console.log('the current showPageId: ', showPageId)
    // }
    

    // console.log('get the local page_id update: ', page_id)
    // console.log('GET THE GLOBAL PAGE_ID UPDATE: ', showPageId)

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
        {/* <Link href={page_id > 1? `/assessment?page_id=${page_id - 1}`  :`/welcome`}> */}
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
