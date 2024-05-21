"use client"


import Link from "next/link";
// import { Router, useRouter } from 'next/router' 
import {Router, useRouter } from 'next/navigation'
import { useStore } from "zustand";
import urlStore from "../assessment/stores/useStore";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter()
  const showURL = urlStore((state) => state.url)


  useEffect(() => {
    console.log('here is the global url updated: ', showURL)
  },[showURL])

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

        <Link href="/">
        <button className="blueButton">
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

        <button className="blueButton" onClick={() => {
          // console.log("getting the route info back: ", Router.back())
          router.back()
          }}>
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
