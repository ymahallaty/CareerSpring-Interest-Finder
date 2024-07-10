"use client"

import React, {Suspense} from "react";
import Link from "next/link";
import {useRouter } from 'next/navigation'
import {useSearchParams} from "next/navigation";
// import { useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
import {timeStamp} from "@/components/TimeStamp";
// import { getTimestamp } from "swr/dist/_internal";
// import riasecStore from "../assessment/stores/riasecStore"

const fetcher = async(url) => {
  try{

    const res = await axios.get(url);
    return res.data;

  }catch(err){
    console.error(err)
  }

}

 function Ending() {
  const router = useRouter()

  const showParams = useSearchParams();
  const getAnswers = showParams.get('answers')
  // console.log('here are the answers: ', getAnswers)
  const stringAnswers = Object.values(getAnswers).toString().replaceAll(',', '');
  const getRoute = `/assessment/api/ending?answers=${stringAnswers}`

  const sendToRoute = getRoute
  // console.log('sendToRoute: ', sendToRoute)
  const { data, error } = useSWR(sendToRoute, fetcher);

  // const setArray = riasecStore(state => state.setRiasecArray);
  let results = [];
  let riasec = [];
  // console.log('stringAnswers: ', stringAnswers)
  if(stringAnswers && data){
      results = data.result;
      // console.log('HERE ARE THE RESULTS: ', results)
      // var riasecArray = results.map(result => result.score);
      let riasecArray = results.map(result => result.score);
      riasec = riasecArray;
      // console.log('what is the riasec: ', riasec)
      // console.log('what is being passed on: ', riasec.join(",") )
      // riasec.join(",")
      // setArray(riasecArray);
  }


  function handleFirstPageClick(){
    // debugger
    const endingUrl = new URL (window.location.href)
    const showParams = endingUrl.searchParams
    const getAnswers = showParams.get('answers')
    // console.log('here are the answers: ', getAnswers)
    // const convertToStr = getAnswers.toString()

    router.push(`/assessment?page_id=1&start=1&end=12&answers=${getAnswers}`)
    //  router.push(`/assessment?page_id=1&start=1&end=12&answers=${getAnswers}`)
  }

  function handleLastPageClick(){
    const endingUrl = new URL (window.location.href)
    const showParams = endingUrl.searchParams
    const getAnswers = showParams.get('answers')

    router.push(`/assessment?page_id=5&start=49&end=60&answers=${getAnswers}`)
  }

  if (error) return <div>Failed to load</div>;
  if (!data) return null;


  return (
    <div className="pageDiv">
      <h1 className="titleH1">
        Great Job! You Answered All Questions!
      </h1>
      <h1 className="paragraph">
        You can review or change your answers at any time by selecting the back
        button at the bottom of the screen, or by returning to the first screen
        of questions with the button below
      </h1>

      <div className="text-center mb-6">

      {/* <Link href="/assessment?page_id=1&start=1&end=12">      </Link> */}
        {/* <button onClick={handleFirstPageClick} className="blueButton">
        Go back to the first page
        </button> */}

        <Link href={`/assessment/results?answers=${stringAnswers}&riasec=${riasec.join(",")}`}>
        {/* bg-[#ff9e1b] */}
        <button className="orangeButton text-white ">
        Get Interest Results
        </button>
        </Link>

      </div>

      <h1 className="paragraph">
        When you are ready use the &quot;Get Interest Results&quot; button to
        see your Interest Profiler
      </h1>

      <div className="flex justify-between pt-10">
      {/* <Link href="/assessment">
        <button className="blueButton">
          Back
        </button>
      </Link> */}

        <button className="blueButton" onClick={handleLastPageClick}>
          Back
        </button>

      {/* <Link href={`/assessment/results?answers=${stringAnswers}&riasec=${riasec.join(",")}`}>
        <button className="blueButton">
        Get Interest Results
        </button>
      </Link> */}
        <button onClick={handleFirstPageClick} className="blueButton">
          Go back to the first page
        </button>
      </div>
    </div>
  );
}

const Page = () => {
  // const router = useRouter()
  return (
    <Suspense>
      <Ending/>
    </Suspense>
  )
}

export default Page