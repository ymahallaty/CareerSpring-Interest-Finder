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
    console.log('here is your window.location.href from the fetcher function: ', window.location.href)
    console.log('here is your data from the fetcher function: ', res.data)


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

// start and end of a set of questions retrieved from the ONET API

const [startAndEnd, setStartAndEnd]= useState({
  start: "1",
  end: "12"
})

const [numberPage, setNumberPage] = useState(1)

  const [currentUrl, setCurrentUrl] = useState('/assessment/api')
  const [displayPageId, setDisplayPageId]= useState(1)

  //The current page that the user is currently viewing
  const [currentPage, setCurrentPage] = useState(1)

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

  const setAnswersObject = renderAnswersStore((state) => state.setAnswersObject)
  const showAnswersObject = renderAnswersStore((state) => state.answersObject)

  const router = useRouter()

/*
    The shouldFetch variable is to keep track of what page the prospect user is on for the assessment survey. If they are
    either the first or last page, the value of fetchURL will be null b/c they are either returning to the welcome page or
    entering the ending page (the end of the assessment survey)
*/

  // const shouldFetch = showPageId <= 5 && showPageId >= 1; 

  function displayURL(){
    const shouldFetch = currentPage <= 5 && currentPage >= 1; 
    if(shouldFetch){
      try{
          // debugger
        // showURL
        // showURL !== ''
        // console.log('get the current localUrl inside the displayURL: ', window.location.href)

        const localURL = new URL(window.location.href)
        const localParams = localURL.searchParams
        const localStart = localParams.get('start')
        const localEnd = localParams.get('end')
        const localPage_Id = localParams.get('page_id')

        console.log('here is the local start: ', localStart)
        console.log('here is the local end: ', localEnd)
        console.log('here is the local page_id: ', localPage_Id)
        // setTimeout(() => {
        //   console.log('get the current url from the setTimeout: ', window.location.href)   
        //   }, 0)

        // || localPage_Id !== '1'
        //&& localPage_Id !== '1'
        // debugger
        // && localPage_Id !== '1'
        // showURL !== ''
        if(currentUrl === '/assessment/api' &&  localPage_Id !== "1"){
          // this is for when the page is refresh
          // debugger
          console.log('here is the local start inside the first if statement: ', localStart)
          console.log('here is the local end inside the first if statement: ', localEnd)
          
          const insertCurrentPage = parseInt(localPage_Id)
          setCurrentPage(insertCurrentPage)
          let isFunctionCalled = false
          setTimeout(() => {
            if(!isFunctionCalled){
                // increasePage_id()
                setStartAndEnd(() => ({
                  start: localStart,
                  end: localEnd
                }))
    
            }
            isFunctionCalled = true
           }, 0)
          // setNumberPage(Number(localPage_Id))

          // let isFunctionCalled2 = false
          // setTimeout(() => {
          //   if(!isFunctionCalled2){
          //       // increasePage_id()
          //       setDisplayPageId(parseInt(localPage_Id))
    
    
          //   }
          //   isFunctionCalled2 = true
          //  }, 0)

          
          return `/assessment/api?start=${localStart}&end=${localEnd}`

// currentUrl !== '/assessment/api'
        }else if(startAndEnd.start !== "1" && startAndEnd.end !== "12"){
          // console.log('get the current localUrl inside the if statement: ', window.location.href)

          // const localURL = new URL(window.location.href) // local global state
          // const localParams = localURL.searchParams
          // const localStart = localParams.get('start')
          // const localEnd = localParams.get('end')
          // const localPage_Id = localParams.get('page_id')




          // const localUrl = new URL(showURL) // zuzstand state
          // const localUrl2 = new URL(currentUrl)
          // const urlParams = localUrl.searchParams
          // const getLength = [...urlParams].length
          // && localPage_Id !== '1'

          // && localPage_Id !== '1'
          const getStart = startAndEnd.start
          const getEnd = startAndEnd.end

          const testingUrl = new URL(`/assessment/api?start=${getStart}&end=${getEnd}`, location)
          console.log('WHAT IS THE TESTING URL: ', testingUrl)
          const testingParams = testingUrl.searchParams
          console.log('WHAT IS THE TESTING PARAMS: ', testingParams)
          const testingLength = [...testingParams].length
          console.log('WHAT IS THE TESTING LENGTH: ', testingLength)
          // getLength
          if(testingLength){ 
            // let start = urlParams.get('start')
            // let end = urlParams.get('end')
            // return `http://localhost:3000/assessment/api?start=${start}&end=${end}`
            // console.log('from the localhost url: ', localURL)
            // console.log('here is the localStart: ', localStart)
            // console.log('here is the localEnd: ', localEnd)
            // console.log('here is the start from the onet: ',start )
            // console.log('here is the start from the onet: ',end )

            // return `/assessment/api?start=${start}&end=${end}`

            // return `/assessment/api?start=${localStart}&end=${localEnd}`

            // return `/assessment/api?start=${startAndEnd.start}&end=${startAndEnd.end}`
            return `/assessment/api?start=${getStart}&end=${getEnd}`
          }

        }else{
          console.log('get the current url inside the else statement: ', window.location.href)
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

  // const sendToRoute = displayURL()
  // const { data, error} = useSWR(sendToRoute, fetcher);

  useEffect(() => {
    // console.log('get the current url inside the useEffect: ', window.location.href)

    //
    setCurrentUrl(displayURL())
  },[startAndEnd])

  const {data, error, isLoading} = useSWR(currentUrl !== null? currentUrl: null, fetcher )
  
  useEffect(() => {
    /*
      Instead of using the showAnswersObject, I can instead parse out the eventual
      query string of answers and add or replace it to the code below

    */
    const showAnswersObjectLength = Object.keys(showAnswersObject).length
    // console.log('here is how the showAnswersObject looks like: ', showAnswersObject)
    // console.log('here is how the showAnswersObjectLength looks like: ', showAnswersObjectLength)
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
  if (!data) return null;

  console.log('here is the current data: ', data)
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

console.log('here are the answers: ', answers)
const stringAnswers =  Object.values(answers).toString().replaceAll(",", "");
console.log('here are the stringAnswers: ', stringAnswers)

const handlePerviousClick = (e) => {

  // const isPrevThere = data?.link ? () => (data.link.find(prev => prev.rel === "prev")) : null;
  // const findPrevIndex = (element) => element.rel === 'prev'
  // const isIndexOfPrevThere = data?.link ? data.link.findIndex(isPrevThere)? null: data.link.findIndex(findPrevIndex) : null
  // const getPrevURL = typeof isIndexOfPrevThere !== 'number'? null: data.link[prevPage].href;
  // const getPrevURLParams = getPrevURL? new URL(getPrevURL).searchParams: null

  // const isNextThere = data?.link ? () => data.link.find(prev => prev.rel === "next") : null;
  // const findNextIndex = (element) => element.rel === 'next'
  // const isIndexOfNextThere = data?.link ? data.link.findIndex(isNextThere) === -1? null: data.link.findIndex(findNextIndex) : null

  // const start = getPrevURLParams? Number(getPrevURLParams.get('start')): null
  // const end = getPrevURLParams? Number(getPrevURLParams.get('end')) : null

  const localUrl = new URL(window.location.href)
  console.log('here is the localUrl: ', localUrl)
  const showParams = localUrl.searchParams
  console.log('here is the showParams: ', showParams)
  const page_id = showParams.get('page_id')
  console.log('here is the page_id: ', page_id)
  let perviousPageNumber = parseInt(page_id)
  let convertToStr;

    // if(showPageId > 1){


    //   let isFunctionCalled = false; 

    //   if((start === 1 && end === 12) && showPageId !== 0){
    //     setNextPage(isIndexOfNextThere - 1)

    //   }

    //    setTimeout(() => {
    //     if(!isFunctionCalled){
    //       decreasePage_id()
    //     }

    //     isFunctionCalled = true
    //    }, 0)
      
    //   if(getPrevURL){
    //     updateURL(getPrevURL)
        
    //   }

    //   if(perviousPageNumber > 1){
    //     perviousPageNumber = perviousPageNumber - 1
    //     convertToStr = perviousPageNumber.toString()
    //   }


    //   // router.push(`/assessment?page_id=${perviousPageNumber}`)
    //   // router.push(`/assessment?page_id=${convertToStr}&start=${start}&end=${end}`)
    //   // router.push(`/assessment?page_id=${convertToStr}&start=${start}&end=${end}&answers=${stringAnswers}`)

    //   // router.push('/assessment')
    // }else {
    //   // return
    //   // router.push('/welcome')
    //   console.log('going to the pervious page, which is the welcome page')
    // }



    // the updated code
  const isPrev = data.link.find(link => link.rel === 'prev')
  if(isPrev){
    // debugger
    console.log('is your isPrev there: ', isPrev)
    const apiURL = isPrev? new URL (isPrev.href): null

    console.log('what is the apiURL: ', apiURL)

    const apiParams = apiURL.searchParams

    const isStart = apiParams.get('start')
    const isEnd = apiParams.get('end')

    if((isStart === 1 && isEnd === 12) && showPageId !== 0){
      setNextPage(isIndexOfNextThere - 1)

    }

    setCurrentPage((prevState) => prevState - 1)
    // setStartAndEnd(() => ({
    //   start: isStart,
    //   end: isEnd
    // }))


    let isFunctionCalled = false
    // let isFunctionCalled2 = false
    setTimeout(() => {
      if(!isFunctionCalled){
          // increasePage_id()
          setStartAndEnd(() => ({
            start: isStart,
            end: isEnd
          }))

      }
      isFunctionCalled = true
     }, 0)

    // setTimeout(() => {
    //   if(!isFunctionCalled2){
    //       // increasePage_id()
    //       setDisplayPageId(page_id => page_id - 1)


    //   }
    //   isFunctionCalled2 = true

    //  }, 0)
    // let perviousPageNumber2;
    // let convertToStr22
    // if(perviousPageNumber2 > 1){
    //   perviousPageNumber2 = perviousPageNumber - 1
    //   convertToStr22 = perviousPageNumber.toString()
    // }

    // setNumberPage((pageNum) => pageNum - 1)
    // debugger
    const convertToStr2 = (perviousPageNumber - 1).toString()
    console.log('the page_id number from numberPage: ', convertToStr2)
    console.log('what is the display_page_id: ', displayPageId)
    router.push(`/assessment?page_id=${convertToStr2}&start=${isStart}&end=${isEnd}&answers=${stringAnswers}`)


  }else{
    // console.log('going to the pervious page, which is the welcome page')
    router.push('/welcome')
  }

}


const handleNextClick = (e) => {
  // debugger

  // console.log('what is the currentURL: ', currentUrl)
  // const isNextThere = data?.link ? () => data.link.find(prev => prev.rel === "next") : null;
  // const findNextIndex = (element) => element.rel === 'next'
  // const isIndexOfNextThere = data?.link ? data.link.findIndex(isNextThere) === -1? null: data.link.findIndex(findNextIndex) : null
  // const getNextURL = typeof isIndexOfNextThere !== 'number'? null: data.link[nextPage].href;
  // const getNextURLParams = getNextURL? new URL(getNextURL).searchParams: null

  // const start = getNextURLParams? Number(getNextURLParams.get('start')): null
  // const end = getNextURLParams? Number(getNextURLParams.get('end')) : null

  // // debugger
  // console.log('here is the start: ', start)
  // console.log('here is the end: ', end)

  const localUrl = new URL(window.location.href)
  console.log('here is the localUrl: ', localUrl)
  const showParams = localUrl.searchParams
  console.log('here is the showParams: ', showParams)
  const page_id = showParams.get('page_id')
  console.log('here is the page_id: ', page_id)
  let nextPageNumber = parseInt(page_id)
  let convertToStr;
  // debugger
  // if(!areAllQuestionsAnswered()){
  //   alert("Please answer all questions")
  // }

  // const url = new URL(showURL)
  // const showParams = url.searchParams
  // const page_id = showParams.get('page_id')
  // console.log(page_id)



  // if(showPageId < 5){
  //   // debugger

  //   let isFunctionCalled = false;
  //   //referring to the very next url, and that value is meant to remain as that 
  //   if(start === 13 && end === 24){
  //     setNextPage(isIndexOfNextThere + 1)

  //   }


  //   //the setTimeOut will be taken out eventually 
  //   if(showPageId < 5){
  //     setTimeout(() => {
  //       if(!isFunctionCalled){
  //           increasePage_id()
  //       }
  //       isFunctionCalled = true
  //      }, 0)
  //   }

  //   console.log('what is the getNextUrl: ', getNextURL); 
  //   if(getNextURL){
  //     updateURL(getNextURL)
  //   }

  //   if(nextPageNumber < 5){
  //     nextPageNumber = nextPageNumber + 1
  //     convertToStr = nextPageNumber.toString()
  //   }
  //   // else{
  //   //   nextQueryObject = {
  //   //     pathname: `/ending`,
  //   //   }
  //   // }
 
  //   console.log('here is the convertToStr: ', convertToStr)
  //   // debugger
  //   // router.push(`/assessment?page_id=${convertToStr}&start=${start}&end=${end}`)
  //   // router.push(`/assessment?page_id=${convertToStr}&start=${start}&end=${end}&answers=${stringAnswers}`)
  //   // router.push('/assessment')




  // }
  // else{
  //   // return
  //   // router.push(`/ending?answers=${stringAnswers}`)
  //   console.log('going to the next page, which is the ending page')
  // }


    // the updated code
    const isNext = data.link.find(link => link.rel === 'next')
    if(isNext){
      // debugger
      console.log('is your isNext there: ', isNext)
      const apiURL = isNext? new URL (isNext.href): null
  
      console.log('what is the apiURL: ', apiURL)
  
      const apiParams = apiURL.searchParams
  
      const isStart = apiParams.get('start')
      const isEnd = apiParams.get('end')

      if(isStart === 13 && isEnd === 24){
        setNextPage(isIndexOfNextThere + 1)
  
      }
      // setStartAndEnd(() => ({
      //   start: isStart,
      //   end: isEnd
      // }))
      setCurrentPage((prevState) => prevState + 1)
      let isFunctionCalled = false
      // let isFunctionCalled2 = false
      setTimeout(() => {
        if(!isFunctionCalled){
            // increasePage_id()
            setStartAndEnd(() => ({
              start: isStart,
              end: isEnd
            }))

        }
        isFunctionCalled = true
       }, 0)

      // setTimeout(() => {
      //   if(!isFunctionCalled2){
      //       // increasePage_id()
      //       setDisplayPageId(page_id => page_id + 1)
      //   }
      //   isFunctionCalled2 = true

      //  }, 0)

      // let nextPageNumber2;
      // let convertToStr22
      // if(nextPageNumber2 > 1){
      //   nextPageNumber2 = perviousPageNumber - 1
      //   convertToStr22 = perviousPageNumber.toString()
      // }
  
      // setNumberPage((pageNum) => pageNum + 1)
      const convertToStr2 = (nextPageNumber + 1 ).toString()
      console.log('the page_id number from numberPage: ', convertToStr2)
      router.push(`/assessment?page_id=${convertToStr2}&start=${isStart}&end=${isEnd}&answers=${stringAnswers}`)
    }else{
      router.push(`/ending?answers=${stringAnswers}`)
      console.log('going to the next page, which is the ending page')
    }

}

// this function handles the disable button seperately for each page
function disableButton (){
  // debugger
  console.log('get the showPageId from the disable button: ', showPageId)

  // const localUrl = new URL(window.location.href)
  // console.log('here is the localUrl: ', localUrl)
  // const showParams = localUrl.searchParams
  // console.log('here is the showParams: ', showParams)
  // const page_id = showParams.get('page_id')
  // console.log('here is the page_id: ', page_id)
  // let showPageId2 = parseInt(page_id)

  // console.log('get the showPageId2 from the disable button: ', showPageId2)

  const getStart = startAndEnd.start
  const getEnd = startAndEnd.end
  console.log('get the getStart from the disable button: ', getStart)
  console.log('get the getEnd from the disable button: ', getEnd)

  // console.log('get the displayPage_id: ', displayPageId)
  // showPageId === 1
  // getStart === '1' && getEnd === '12'

  // getStart === '1' && getEnd === '12'
  // displayPageId === 1
  if(getStart === '1' && getEnd === '12'){
    console.log('get the length of the answers: ', Object.keys(answers).length)
    // !==
    if(Object.keys(answers).length >= 12){
      console.log("is this thing on")
      return (false)
    }
    else {
      return (true)
    }
   }




   if(getStart === '13' && getEnd === '24'){
    if(Object.keys(answers).length >= 24){
      // console.log("is this thing on????")
      return (false)
    }
    else {
      return (true)
    }
   }
   if(getStart === '25' && getEnd === '36'){
    if(Object.keys(answers).length >= 36){
      return (false)
    }
    else {
      return (true)
    }
   }
   if(getStart === '37' && getEnd === '48'){
    if(Object.keys(answers).length >= 48){
      return (false)
    }
    else {
      return (true)
    }
   }
   if(getStart === '49' && getEnd === '60'){
    if(Object.keys(answers).length !== 60){
      return (true)
    }
    else {
      return (false)
    }
   }
}

// console.log('here is data: ', data)
// console.log('more data: ', data.answer_options.answer_option)

// const pickYourAnswerArray = data?.answer_options.answer_option ? data.answer_options.answer_option: null
// const getQuestions = data.question

// console.log('getQuestions: ', getQuestions)

  // console.log('Here are the answers: ', answers)
  // const getOnlyStringAnswersObj = Object.values(answers).toString().replaceAll(",", "")
  // console.log("The object to reference when submitting the answers: ", getOnlyStringAnswersObj)

function handleClick(){
    if(!areAllQuestionsAnswered()){
      alert("Please answer all questions")
    }
  
}

// function testingFunction(){
//   const url = new URL(showURL)
//   const showParams = url.searchParams
//   const page_id = showParams.get('page_id')
//   console.log('here is the page_id: ', page_id)

//   let convertToNum = parseInt(page_id)
//   console.log('convert to number: ', convertToNum)


//   if(convertToNum < 5){
//     convertToNum = convertToNum + 1
//     const convertToStr = convertToNum.toString()
//     return {
//       pathname: `/assessment`,
//       query: {page_id: convertToStr}
//     }
//   }else{
//     return {
//       pathname: `/ending`
//     }
//   }
// }

// going to the next url
const localUrl = new URL(window.location.href)
console.log('here is the localUrl in the global env: ', localUrl)
const showParams = localUrl.searchParams
const local_page_id = showParams.get('page_id')
console.log('here is the page_id: ', local_page_id)

console.log('here is the current page: ', currentPage)

// let nextQueryObject;
// let perviousQueryObject;


// let nextPageNumber = parseInt(page_id)
// console.log('convert to number: ', nextPageNumber)

// let perviousPageNumber = parseInt(page_id)

function navigatePages(){
  // debugger
  const localUrl = new URL(window.location.href)
  console.log('here is the  in navigatePages: ', localUrl)
  const showParams = localUrl.searchParams
  const local_page_id = showParams.get('page_id')
  console.log('here is the page_id: ', local_page_id)

  let nextPageNumber = parseInt(page_id)
  console.log('convert to number: ', nextPageNumber)

  let perviousPageNumber = parseInt(page_id)



  if(nextPageNumber < 5){
    nextPageNumber = nextPageNumber + 1
    const convertToStr = nextPageNumber.toString()
    nextQueryObject = {
      pathname: `/assessment`,
      query: {page_id: convertToStr}
    }
  }
  // else{
  //   nextQueryObject = {
  //     pathname: `/ending`,
  //   }
  // }

  if(perviousPageNumber > 1){
    perviousPageNumber = perviousPageNumber + 1
    const convertToStr = perviousPageNumber.toString()
    perviousQueryObject = {
      pathname: `/assessment`,
      query: {page_id: convertToStr}
    }
  }else{
    // perviousQueryObject = {
    //   pathname: `/welcome`,
    // }
    router.push(`/welcome`)
  }

}

// navigatePages()

// console.log('get next query object: ', nextQueryObject)
// console.log('get pervious query object: ', perviousQueryObject)





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
        {isLoading && <div>Loading data...</div>}
          {
            !isLoading && data && data.question && data.question.length >= 1 && data.question.map((ele, i) => {
              return (

                <Questions
                  key={i + 1}
                  answers={answers}
                  question={`question${ele.index}`}
                  clickRadioBtn={clickRadioBtn}
                  writtenQuestion={`Question ${ele.index}: ${ele.text}`}
                  pickYourAnswerArray={data?.answer_options.answer_option ? data.answer_options.answer_option: null}
                  />
              )

              })
          }

      </section>

      <div className="flex justify-around align-center items-center py-5">
        {/* <Link href={perviousQueryObject}></Link> */}
          <button onClick={handlePerviousClick} className=" blueButton [overflow-anchor:none] ">
            Back
          </button>




        {/* <Link href={nextQueryObject}>          </Link> */}
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
