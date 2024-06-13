"use client"

import Link from "next/link";
import {useRouter } from 'next/navigation'
import urlStore from "../assessment/stores/urlStore";
import renderAnswersStore from "../assessment/stores/renderAnswersStore";
import pageIDStore from "../assessment/stores/pageIdStore";
import { useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
import riasecStore from "../assessment/stores/riasecStore"

const fetcher = async(url) => {
  try{
    // console.log('show the url: ', url)
    const res = await axios.get(url)
    // console.log("here is res: ", res)
    return res.data
  }catch(err){
    console.error(err)
  }

}

export default function Page() {
  const router = useRouter()
  const showURL = urlStore((state) => state.url)
  const updateURL = urlStore((state) => state.setUrl)
  // const showAnswerObject = renderAnswersStore((state) => state.answersObject);
  const {showPageId, defaultPage_id} = pageIDStore()

  const renderAnswers = renderAnswersStore((state) => state.answersObject)
  // console.log('here are the renderAnswers for the medium page: ', renderAnswers)

  // const convertToStr = Object.values(showAnswerObject).toString().replaceAll(",", "");
  // debugger
  const stringAnswers =  Object.values(renderAnswers).toString().replaceAll(",", "");
  // console.log('the string value of renderAnswers: ', stringAnswers)

  function returnStrAnswers(){
    // return `/assessment/api/medium-prep?answers=${stringAnswers}`
    return `/assessment/api/ending?answers=${stringAnswers}`

  } 

  const sendToRoute = returnStrAnswers()
  const { data, error } = useSWR(sendToRoute, fetcher);

  // const setArray = riasecStore(state => state.setRiasecArray);
  // let results = [];

  // if(stringAnswers && data){
  //     results = data.result;
  //     // console.log('HERE ARE THE RESULTS: ', results)
  //     const riasecArray = results.map(result => result.score);
  //     setArray(riasecArray);
  // }

  function handleFirstPageClick(){
    if(showPageId !== 1){
      defaultPage_id(1)
    }
    updateURL('https://services.onetcenter.org/ws/mnm/interestprofiler/questions')
    // router.back('/assessment')
     router.push('/assessment')
  }


  function handleLastPageClick(){
    if(showURL !== "https://services.onetcenter.org/ws/mnm/interestprofiler/questions?start=49&end=60"){
      updateURL('https://services.onetcenter.org/ws/mnm/interestprofiler/questions?start=49&end=60')
    }
    if(showPageId !== 5){
      defaultPage_id(5)
    }
    router.push('/assessment')
  }

    if (error) return <div>Failed to load</div>;
    if (!data) return null;
  
  // console.log('here is the data: ', data)

  return (
    <div className="pageDiv">
      <h1 className="titleH1">
        Great Job! You Answered All Questions!
      </h1>
      <p className="space-y-6 py-5 text-base leading-7 text-black">
        You can review or change your answers at any time by selecting the back
        button at the bottom of the screen, or by returning to the first screen
        of questions with the button below
      </p>

      <div className="text-center mb-6">

        <Link href="/assessment">
        <button onClick={handleFirstPageClick} className="blueButton">
        Go back to the first page
        </button>
      </Link>
      </div>

      <p className="space-y-6 py-5 text-base leading-7 text-black">
        When you are ready use the &quot;Get Interest Results&quot; button to
        see your Interest Profiler
      </p>

      <div className="flex justify-between pt-10">
      {/* <Link href="/assessment">
        <button className="blueButton">
          Back
        </button>
      </Link> */}

        <button className="blueButton" onClick={handleLastPageClick}>
          Back
        </button>

      <Link href="/assessment/results/career">
        <button className="blueButton">
        Get Interest Results
        </button>
      </Link>
      </div>
    </div>
  );
}
