"use client"

import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import urlStore from "../assessment/stores/urlStore";
import renderAnswersStore from "../assessment/stores/renderAnswersStore";
import pageIDStore from "../assessment/stores/pageIdStore"
import { useRouter } from 'next/navigation'

function Page() {

  const showURL = urlStore((state) => state.url)
  const updateURL = urlStore((state) => state.setUrl)

  const setAnswersObject = renderAnswersStore((state) => state.setAnswersObject)
  const showAnswersObject = renderAnswersStore((state) => state.answersObject)

  const {showPageId, defaultPage_id} = pageIDStore()

  const router = useRouter()

  useEffect(() => {
    // updateURL('http://localhost:3000/assessment/api')
    updateURL('');
    // updateURL('../assessment/api');
    
  }, [updateURL]);

  function startingSurvey(){
    if(showAnswersObject !== ''){
      setAnswersObject('')
    }
    if(showPageId !== 1){
      defaultPage_id(1)
    }

    // router.push(`/assessment?page_id=1`)
    
  }

  // const env = process.env.NODE_ENV
  // if(env == "development"){
  //   // Development-specific code
  //   console.log('Running in development mode');
  // }
  // else if (env == "production"){
  //   // Production-specific code
  //   console.log('Running in production mode');
  // }


  // console.log('showURL: ', showURL);
  // console.log('show page_id number', showPageId)

  return (
    <div className="pageDiv">
      <h1 className="titleH1 ">Career Interest Finder</h1>
      <h3 className="paragraph ">
        Unsure about what path to pursue? Take the Career Interest Finder to
        discover what types of careers you’d like to explore! The O*NET Interest
        Profiler asks you a series of questions about work activities and asks
        you to rank how much you like or dislike doing them. Based on your
        answers, you will receive a set of results that corresponds to different
        career options that you can look into.You will rank each question based
        on how you would feel doing each type of work:
      </h3>
      <ol className="ps-5 mt-2 space-y-1 list-decimal text-xl list-inside interFont">
        <li>Strongly dislike</li>
        <li>Dislike</li>
        <li>Unsure</li>
        <li>Like</li>
        <li>Strongly like</li>
      </ol>
      <h1 className="paragraph my-5">Remember, there are no right or wrong answers!</h1>
      <Link href={`/assessment?page_id=1&start=1&end=12`}>
      {/* <Link></Link> */}
        <button onClick={startingSurvey} className="orangeBrand py-5 text-base leading-7 text-white p-[65px] rounded-md interFont"> Start Career Interest Finder
        </button>
      </Link>
      <h1 className="paragraph my-4">Taken the Interest Profiler before?</h1>
      <Link href="/enter-scores">
        <button className="orangeBrand py-5 text-base leading-7 text-white p-[65px] rounded-md interFont"> Enter Scores
        </button>
      </Link>
      <br />
      <div className="mt-5">
        <Link href="/user-agreement" className="space-y-6 py-5 text-base underline interFont">User Agreement Proper Use</Link>
      </div>
    </div>
  );
}

export default Page;
