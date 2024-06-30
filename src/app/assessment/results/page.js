"use client";

import React, {Suspense} from "react";
import HorizontalBarChart from "../../../components/HorizontalBarChart";
import Link from "next/link";
import { useRouter } from "next/router";
import {useSearchParams} from "next/navigation";
import HighestScore from "../../../components/HighestScore";
import Table from "../../../components/Table";

function Results() {
  // const router = useRouter()
  const searchParams = useSearchParams();
  const riasecString = searchParams.get('riasec');
  const riasec = riasecString.split(',').map(Number);
  // console.log(riasec);

  // const getAnswers = () => {
  //   const endingUrl = new URL (window.location.href)
  //   const showParams = endingUrl.searchParams
  //   const showAnswers = showParams.get('answers')
  //   console.log('here are the answers: ', getAnswers)
  //   return showAnswers
  // }

  // const stringAnswers = getAnswers()
  const stringAnswers = searchParams.get('answers')
  // console.log('stringAnswers: ', stringAnswers)

  const getHref = () => {
    if(stringAnswers){
      return `/ending?answers=${stringAnswers}`
    }else{
      return '/enter-scores'
    }
  }

  return (
    <div className="pageDiv">
        <h1 className="titleH1">
          Here Are Your Career Interest Results!
        </h1>
        <div className="paragraph">
        <HighestScore />
      <h1 className="paragraph">
        Click on the following links to learn more about each interest:
      </h1>
      <ul className="mb-7 pl-10 list-disc">
        <li className="px-2">
          <Link
            href={`/assessment/results/realistic?riasec=${riasecString}`}
            className="resultsP"
          >
            Realistic
          </Link>
          - People with Realistic interest like work that includes practical,
          hands-on problems and answers.
        </li>
        <li className="px-2">
          <Link
            href={`/assessment/results/investigative?riasec=${riasecString}`}
            className="resultsP"
          >
            Investigative
          </Link>
          - People with Investigative interest like work that has to do with
          ideas and thinking rather than physical activity or leading people.
        </li>
        <li className="px-2">
          <Link
            href={`/assessment/results/artistic?riasec=${riasecString}`}
            className="resultsP"
          >
            Artistic
          </Link>
          - People with Artistic interests like work that deals with the
          artistic side of things, such as acting, music, art, and design.
        </li>
        <li className="px-2">
          <Link
            href={`/assessment/results/social?riasec=${riasecString}`}
            className="resultsP"
          >
            Social
          </Link>
          - People with Social interests like working with others to help them
          learn and grow.
        </li>
        <li className="px-2">
          <Link
            href={`/assessment/results/enterprising?riasec=${riasecString}`}
            className="resultsP"
          >
            Enterprising
          </Link>
          - People with Enterprising interests like work that has to do with
          starting up and carrying out business projects.
        </li>
        <li className="px-2">
          <Link
            href={`/assessment/results/conventional?riasec=${riasecString}`}
            className="resultsP"
          >
            Conventional
          </Link>
          - People with Conventional interests like work that follows set
          procedures and routines.
        </li>
      </ul>
      </div>
      <div className="flex justify-center w-full">
        <img className="size-2/4" src="/assets/Hexagon.png" alt="interests-hexagon" />
      </div>
      <div className="flex justify-left mb-0 w-full h-96 mt-10">
        <div className="w-full h-full">{riasec.length && <HorizontalBarChart/>} </div>
      </div>
      <Table />
      <div className="flex justify-end pt-10">
      {/* <Link href={`/ending?answers=${stringAnswers}`}> */}
      {/* <Link href={getHref()}>
        <button className="blueButton">
          Back
        </button>
      </Link> */}
      <Link href={`/assessment/email-form?riasec=${riasecString}`}>
        <button className="blueButton">
          Next
        </button>
      </Link>
      </div>
    </div>
  );
}
// src\app\assessment\results\page.js
const Page = () => {
  // const router = useRouter()
  return (
    <Suspense>
      <Results/>
    </Suspense>
  )
}

export default Page