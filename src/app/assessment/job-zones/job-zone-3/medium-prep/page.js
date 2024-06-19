"use client"
import { useState, useEffect, Suspense } from "react";
import HorizontalBarChart from "../../../../../components/HorizontalBarChart"
import JobDiv from "../../../../../components/JobDiv";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";


const fetcher = url => axios.get(url).then(res => res.data);

export default function Medium() {
    const [url, setUrl] = useState('https://services.onetcenter.org/ws/mnm/careers/')

    const fetchURL = `../../../assessment/api?url=${encodeURIComponent(url)}`;

  const { data, error } = useSWR(fetchURL, fetcher);

  useEffect(() => {
    if (error) {
      console.error("Failed to load:", error);
    }
  }, [error]); // No need to depend on 'data' here

  return (
    <div className="pageDiv">
      <h1 className="titleH1">Job Zone 3: Medium Job Preparation</h1>
      <h1 className="text-xl m-3">Click to change your preferred job zone:</h1>

      <div className="flex flex-row justify-center">
        <Link href="/assessment/job-zones/job-zone-3/medium-prep">
          <button className="orangeBut">3</button>
        </Link>
        <Link href="/assessment/job-zones/job-zone-4/medium-prep">
          <button className="orangeBut">4</button>
        </Link>
        <Link href="/assessment/job-zones/job-zone-5/medium-prep">
          <button className="orangeBut">5</button>
        </Link>
      </div>

      <div className="flex flex-row justify-center mt-10 mb-10">
        <img className="w-56" src="/assets/Hexagon.png" alt="Hexagon graphic" />
      </div>

      {/* Potential problem areas wrapped in Suspense */}
      <Suspense fallback={<div>Loading job results...</div>}>
        <HorizontalBarChart />

        {data ? (
          <>
            <h1 className="mt-3">
              Here are your results related to your Interests Profile in your chosen Job Zone!
              Choose a job zone to see jobs that correlate with one another. Click on a career
              to learn more about each role.
            </h1>

            <h1 className="textB">
              {/* Legend for job fit icons */}
              <div className="flex flex-row">
                {/* ... (SVG icons for Good Fit, Great Fit, Best Fit, Bright Outlook) ... */}
              </div>
            </h1>

            {/* Dynamically render JobDiv components */}
            {data.careers.map((career) => (
              <JobDiv
                key={career.name}
                name={career.name}
                link={career.link}
              />
            ))}
          </>
        ) : (
          <div>Loading career data...</div>
        )}
      </Suspense>

      {/* Navigation buttons */}
      <div className="flex justify-between pt-10">
        <Link href="/assessment/job-zones/job-zone-3">
          <button className="blueButton">Back</button>
        </Link>
        <Link href="/assessment/job-zones/job-zone-3/medium-prep/moreCareers">
          <button className="blueButton">Find More Careers</button>
        </Link>
      </div>
    </div>
  );
}