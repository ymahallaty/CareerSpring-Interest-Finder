"use client"

import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import urlStore from "../assessment/stores/urlStore";
import renderAnswersStore from "../assessment/stores/renderAnswersStore";
import pageIDStore from "../assessment/stores/pageIdStore"

function Page() {

  const showURL = urlStore((state) => state.url)
  const updateURL = urlStore((state) => state.setUrl)

  const setAnswersObject = renderAnswersStore((state) => state.setAnswersObject)
  const showAnswersObject = renderAnswersStore((state) => state.answersObject)

  const setPageId = pageIDStore((state) => state.setPage_id)
  const showPageId = pageIDStore((state) => state.page_id)

  useEffect(() => {
    updateURL('https://services.onetcenter.org/ws/mnm/interestprofiler/questions');
  }, []);

  function startingSurvey(){
    if(showAnswersObject !== ''){
      setAnswersObject('')
    }
    if(showPageId !== '1'){
      setPageId('1')
    }
  }


  console.log('showURL: ', showURL);

  return (
    <div className="pageDiv">
      <h1 className="titleH1 ">Career Interest Finder</h1>
      <h3 className="space-y-6 py-5 text-black leading-7 ">
        Unsure about what path to pursue? Take the Career Interest Finder to
        discover what types of careers you’d like to explore! The O*NET Interest
        Profiler asks you a series of questions about work activities and asks
        you to rank how much you like or dislike doing them. Based on your
        answers, you will receive a set of results that corresponds to different
        career options that you can look into.You will rank each question based
        on how you would feel doing each type of work:
      </h3>
      <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
        <li>Strongly dislike</li>
        <li>Dislike</li>
        <li>Unsure</li>
        <li>Like</li>
        <li>Strongly like</li>
      </ol>
      <p className="space-y-6 py-5 text-base leading-7 text-black">Remember, there are no right or wrong answers!</p>
      <Link href={`/assessment?page_id=${1}`}>
        <button onClick={startingSurvey} className="orangeBrand py-5 text-base leading-7 text-white p-[65px] rounded-md"> Start Career Interest Finder
        </button>
      </Link>
      <p className="space-y-6 py-5 text-base leading-7 text-black">Taken the Interest Profiler before?</p>
      <Link href="/enter-scores">
        <button className="orangeBrand py-5 text-base leading-7 text-white p-[65px] rounded-md"> Enter Scores
        </button>
      </Link>
      <br />
      <div className="mt-5">
        <Link href="/user-agreement" className="space-y-6 py-5 text-base underline">User Agreement Proper Use</Link>
      </div>
    </div>
  );
}

export default Page;
