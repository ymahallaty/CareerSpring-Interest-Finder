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
  const [answers, setAnswers] = useState("");

// the hooks below is related to page pagination
  const [progressValue, setProgressValue] = useState(0);
  const [url, setUrl] = useState('https://services.onetcenter.org/ws/mnm/interestprofiler/questions');
  const [questions, setQuestions] = useState([]);

  // this works well for going to the next page because it is specfically focus on going to the next page
  const [pageNum, setPageNum] = useState(0)

  const [prevPage, setPervPage] = useState(0)
  const [page_id, setPage_id] = useState(1)


  const shouldFetch = page_id <= 5 && page_id >= 1;
  // const shouldFetch = page_id <= 5 && page_id >= 1;

  console.log("get the shouldFetch: ",  shouldFetch)
  const fetchURL = shouldFetch ? `../assessment/api?url=${encodeURIComponent(url)}` : null

  // const { data, error } = useSWR(() => shouldFetch ? `../assessment/api?url=${encodeURIComponent(url)}` : null, fetcher);
 // I forgot to take out the callback function, and just input fetchURL (1)
  const { data, error } = useSWR(fetchURL, fetcher);

  useEffect(() => {
    if (error) {
      console.error('Failed to load:', error);
    }

    if (data) {
      console.log('showing the data: ', data.link[0].href)
      console.log('showing all of the data: ', data)
      setQuestions(data.question);
    }
  }, [data, error]);

  useEffect(( ) => {
    console.log('current page (updated): ', pageNum);
    console.log('current page_id (another update): ', page_id)
    // console.log('current prevPage: ', prevPage)
  }, [pageNum, page_id])

  if (error) return <div>Failed to load</div>;
  // I forgot to add the && with shouldFetch (2)
  if (!data && shouldFetch) return null;


  // there is a data?.link instead of data.link (6)
  // const isPageValid = data.link && data.link.length > pageNum;
  const isPageValid = data?.link && data.link.length > pageNum;
  console.log("is the link there: ", data?.link)
  // console.log("is the length there? ", data.link.length)
  console.log("getting the pageNum: ", pageNum)
  console.log('is the page valid: ', isPageValid)

  // I commented out the console.log to see if it would be the cause of errors (5)
  // console.log('showing if isPageValid: ', isPageValid)

  // the value of the testingURL needs to be changed to null (3)
  const testingURL = isPageValid ? data.link[pageNum].href : null;
  // console.log('display data.link: ', data.link)
  // const isPrevThere = data?.link && data.link === undefined? null : () => data.link.find(prev => prev.rel === 'prev') 
  
  const isPrevThere = data?.link ? () => data.link.find(prev => prev.rel === 'prev') : null;
  // const isPrevThere = data.link ? () => data.link.find(prev => prev.rel === 'prev') : null;

  // const isPrevThereIndex = data.link.findIndex(isPrevThere)
  // const grabPrevLink = (element) => element.rel === 'prev'

  // const dataLinks = data.link
  // const isPrevThereIndex = data.link.findIndex(grabPrevLink)
  // console.log('getting the index: ', isPrevThereIndex)
  // console.log("show the prev: ", isPrevThere)

  //comment this out because I was getting an error
  // console.log("show the LINKS!: ", data.link)
  // console.log("get the index for prevPage: ", isPrevThereIndex)
  // && isPrevThere.includes('prev')
  // setPervPage(isPrevThereIndex)
  // const prevURL = isPrevThere === undefined ? null: data.link[prevPage].href
  const prevURL = !isPrevThere? null: data.link[prevPage].href
  // console.log('here is the prevURL: ', prevURL)

  console.log('testingURL for now: ', testingURL)

  console.log('get all of the data: ', data)

  // let currentPage = 0
  // const testingURL = data.link[pageNum].href; 

  // I will console.log the if statement (7/8)
  // if (!isPageValid) {
  //   console.warn(`Invalid pageNum: ${pageNum} for data.link length: ${data.link ? data.link.length : 'undefined'}`);
  // }
  console.log('getting the testingURL: ', testingURL)

  // console.log("grab the url: ", window.location.search)

  // console.log('current page: ', pageNum)
  console.log("the number of the page id: ", page_id)

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


  // const getQuestions = data.question
  // console.log("getQuestions: ", getQuestions)

  const getOnlyStringAnswersObj = Object.values(answers).toString().replaceAll(",", "")

  console.log("The object to reference when submitting the answers: ", getOnlyStringAnswersObj)

  // this is to save the questions inside of state management


  // console.log('here is the questions state: ', questions)


// write out some conditional logic involving the O*NET API and using the data.length

// the const handleNextClick I added a setPage_id in the else statement and comment out the return(4)
const handleNextClick = () => {
  if(page_id <= 5){
    setPageNum((prevNum) => prevNum === 0? prevNum + 1: prevNum);
    setPage_id(initalNum => initalNum + 1)
    // setPage_id(initalNum => initalNum + 1)
    if(testingURL){
      setUrl(testingURL)
    }
    // if(testingURL !== '$'){
    //   setUrl(testingURL)
    // }
  }
  else{
    // setPage_id((initialNum) => initialNum + 1);
    return 
  }

}

// write out some conditional logic involving the O*NET API and using the data.length
const handlePerviousClick = () => {
  if(page_id > 1){
    // setPageNum((prevNum) => prevNum === 0? prevNum + 1: prevNum);
    setPage_id(initalNum => initalNum - 1)
    if(prevURL){
      setUrl(prevURL)
    }
  }else {
    return
  }
  // setPageNum((prevNum) => Math.max(prevNum - 1, 0));
  // setUrl(testingURL);
}

console.log('current pageNum --final: ', pageNum)

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
      
      {/* <Link href="/assessment">
        <button onClick={handlePerviousClick}>Back</button>
      </Link>

      <Link href={`/assessment?page_id=${pageNum + 1}`}>
        <button onClick={
          handleNextClick
          // () => {  
          //   setPageNum((prevNum) => prevNum === 0? prevNum + 1: prevNum);
          //   setUrl(testingURL);  
          // }
          
          
          // () => {
          // console.log('testing')
          // setUrl(() => {
            
          //   return testingURL
          // })
          // setPageNum((initalNum) => initalNum++)
          // // setPageNum((initalNum) => initalNum++)
          // // console.log('current page: ', pageNum)
          // }
          
          }>Next</button>
      </Link> */}


          
    </div>
    
  );
  
}
