"use client";

import React, {Suspense} from "react";
import { useState,useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import {useSearchParams} from "next/navigation";

const fetcher = async(url) => {
  try{
    const res = await axios.get(url)
    return res.data
  }catch(err){
    console.error(err)
  }  
}

function JobZone4() {

    const sendToRoute = '/assessment/api/job-zones'
    const { data, error } = useSWR(sendToRoute, fetcher);

    let zone_info = [];

    if (data) {
      zone_info = data.job_zone[3];
      // console.log(data.job_zone[3]);
    }

    const searchParams = useSearchParams();
    const riasecString = searchParams.get('riasec');

    return (
    <div className="pageDiv">
      <h1 className="titleH1">
        Information On Job Zone 4: High Job Preparation
      </h1>

      <div>
        <h2>
          <strong>Experience</strong>
        </h2>
        <p className="interFont">
          {zone_info.experience}
        </p>
        <h2>
          <strong>Training</strong>
        </h2>
        <p className="interFont">
        {zone_info.job_training}
        </p>
        <h2>
          <strong>Education</strong>
        </h2>
        <p className="interFont">
        {zone_info.education}
        </p>
        <h2>
          <strong>Examples</strong>
        </h2>
        <p className="interFont">
        {zone_info.examples}
        </p>
        <div className="button-container mt-10">
        <Link href={`/assessment/job-zones?riasec=${riasecString}`}>
          <button className="blueButton">
            Back
          </button>
          </Link>
        </div>
        <section className="gap"></section>
      </div>
    </div>
  );
}

const Page = () => {
  return (
    <Suspense>
      <JobZone4/>
    </Suspense>
  )
}

export default Page
