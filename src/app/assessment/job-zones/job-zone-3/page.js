"use client";

import React, { Suspense } from "react"; // Import Suspense
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
// import riasecStore from "../../../assessment/stores/riasecStore"; // Commented out unused import
import { useSearchParams } from "next/navigation";

const fetcher = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default function JobZone3() {
  const sendToRoute = "/assessment/api/job-zones";
  const { data, error, isLoading } = useSWR(sendToRoute, fetcher);

  let zone_info = [];
  if (data) {
    zone_info = data.job_zone[2];
  }

  return (
    <div className="block-group block-padding content-center">
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* Wrap useSearchParams in Suspense */}
        <JobZone3Content zone_info={zone_info} isLoading={isLoading} />
      </Suspense>
    </div>
  );
}

// Move content to separate component to make use of Suspense
function JobZone3Content({ zone_info, isLoading }) {
  const searchParams = useSearchParams();
  const riasecString = searchParams.get("riasec");

  if (isLoading) {
    return <div>Loading job zone information...</div>;
  }

  if (!zone_info || !zone_info.experience) {
    return <div>Job zone information not found.</div>;
  }

  return(
            <div className="block-group block-padding content-center">
                <h1 className="titleH1">Information On Job Zone 3: Medium Job Preparation</h1>

                <div className="paragraph">

                    <h2>
                        <strong>Experience</strong>
                    </h2>
                    <p>
                    {zone_info.experience}
                    </p>
                    <h2>
                        <strong>Training</strong>
                    </h2>
                    <p>
                    {zone_info.job_training}
                    </p>
                    <h2>
                        <strong>Education</strong>
                    </h2>
                    <p>
                    {zone_info.education}
                    </p>
                    <h2>
                        <strong>Examples</strong>
                    </h2>
                    <p>
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
