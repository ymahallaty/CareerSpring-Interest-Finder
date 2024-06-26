"use client"

import React, {Suspense} from "react";
import Link from "next/link";
import {useRouter } from 'next/navigation'
import {useSearchParams} from "next/navigation";
// import urlStore from "../assessment/stores/urlStore";
// import renderAnswersStore from "../assessment/stores/renderAnswersStore";
// import pageIDStore from "../assessment/stores/pageIdStore";
// import { useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
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
  // const showURL = urlStore((state) => state.url)
  // const updateURL = urlStore((state) => state.setUrl)
  // const showAnswerObject = renderAnswersStore((state) => state.answersObject);
  // const {showPageId, defaultPage_id} = pageIDStore()


  // const renderAnswers = renderAnswersStore((state) => state.answersObject);

  // const renderAnswers = () => {
  //   // const endingUrl = new URL (window.location.href)
  //   const showParams = useSearchParams();
  //   // const showParams = endingUrl.searchParams
  //   const getAnswers = showParams.get('answers')
  //   console.log('here are the answers: ', getAnswers)
  //   const polishedAnswers = Object.values(getAnswers).toString().replaceAll(',', '');
  //   const getRoute = `/assessment/api/ending?answers=${polishedAnswers}`
  //   // return `/assessment/api/ending?answers=${polishedAnswers}`
  //   // return stringAnswers
  //   return [polishedAnswers, getRoute]
  // }
  // const [stringAnswers, getRoute] = renderAnswers()
  const showParams = useSearchParams();
  const getAnswers = showParams.get('answers')
  console.log('here are the answers: ', getAnswers)
  const stringAnswers = Object.values(getAnswers).toString().replaceAll(',', '');
  const getRoute = `/assessment/api/ending?answers=${stringAnswers}`

    // const stringAnswers = Object.values(getAnswers).toString().replaceAll(',', '');
  // const setArray = riasecStore((state) => state.setRiasecArray);


  // const stringAnswers = Object.values(renderAnswers).toString().replaceAll(',', '');

  // const polishedAnswers = renderAnswers()
  // console.log('here are your polishedAnswers: ', polishedAnswers)

  // function returnStrAnswers(){
  //   return `/assessment/api/ending?answers=${polishedAnswers}`
  // }

  // function returnPolishedAnswers(){
  //   return `/assessment/api/ending?answers=${polishedAnswers}`
  // }

  // http://localhost:3001/ending?answers=544554345454435545554544453545444544554354554455453445443354
  // const sendToRoute = renderAnswers()
  const sendToRoute = getRoute
  console.log('sendToRoute: ', sendToRoute)
  const { data, error } = useSWR(sendToRoute, fetcher);

  // const setArray = riasecStore(state => state.setRiasecArray);
  let results = [];
  let riasec = [];
  console.log('stringAnswers: ', stringAnswers)
  if(stringAnswers && data){
      results = data.result;
      // console.log('HERE ARE THE RESULTS: ', results)
      // var riasecArray = results.map(result => result.score);
      let riasecArray = results.map(result => result.score);
      riasec = riasecArray;
      console.log('what is the riasec: ', riasec)
      console.log('what is being passed on: ', riasec.join(",") )
      // riasec.join(",")
      // setArray(riasecArray);
  }


  // const renderAnswers = renderAnswersStore((state) => state.answersObject)
  // console.log('here are the renderAnswers for the medium page: ', renderAnswers)

  // const convertToStr = Object.values(showAnswerObject).toString().replaceAll(",", "");
  // debugger
  // const stringAnswers =  Object.values(renderAnswers).toString().replaceAll(",", "");
  // console.log('the string value of renderAnswers: ', stringAnswers)

  function returnStrAnswers(){
    // return `/assessment/api/medium-prep?answers=${stringAnswers}`
    return `/assessment/api/ending?answers=${stringAnswers}`
  }

  // const sendToRoute = returnStrAnswers()
  // const { data, error } = useSWR(sendToRoute, fetcher);

  // const setArray = riasecStore(state => state.setRiasecArray);
  // let results = [];

  // if(stringAnswers && data){
  //     results = data.result;
  //     // console.log('HERE ARE THE RESULTS: ', results)
  //     const riasecArray = results.map(result => result.score);
  //     setArray(riasecArray);
  // }

  function handleFirstPageClick(){
    // debugger
    const endingUrl = new URL (window.location.href)
    const showParams = endingUrl.searchParams
    const getAnswers = showParams.get('answers')
    console.log('here are the answers: ', getAnswers)
    // const convertToStr = getAnswers.toString()

    // if(showPageId !== 1){
    //   defaultPage_id(1)
    // }
    // updateURL('https://services.onetcenter.org/ws/mnm/interestprofiler/questions')
    // router.back('/assessment')
    //  router.push('/assessment')
    router.push(`/assessment?page_id=1&start=1&end=12&answers=${getAnswers}`)
    //  router.push(`/assessment?page_id=1&start=1&end=12&answers=${getAnswers}`)
  }


  function handleLastPageClick(){
    const endingUrl = new URL (window.location.href)
    const showParams = endingUrl.searchParams
    const getAnswers = showParams.get('answers')

    // if(showURL !== "https://services.onetcenter.org/ws/mnm/interestprofiler/questions?start=49&end=60"){
    //   updateURL('https://services.onetcenter.org/ws/mnm/interestprofiler/questions?start=49&end=60')
    // }
    // if(showPageId !== 5){
    //   defaultPage_id(5)
    // }
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
        <button onClick={handleFirstPageClick} className="blueButton">
        Go back to the first page
        </button>

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

      <Link href={`/assessment/results?answers=${stringAnswers}&riasec=${riasec.join(",")}`}>
        <button className="blueButton">
        Get Interest Results
        </button>
      </Link>
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