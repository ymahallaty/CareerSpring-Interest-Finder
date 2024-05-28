"use client";

import React from "react";
import { useState,useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";

const fetcher = url => axios.get(url).then(res => res.data);

export default function jobZone4() {
    
  const [zone_info, setZone_info] = useState([]);

  const [url, setUrl] = useState('https://services.onetcenter.org/ws/mnm/interestprofiler/job_zones');

  const fetchURL = `../../../assessment/api?url=${encodeURIComponent(url)}`;

  const { data, error } = useSWR(fetchURL, fetcher);

  useEffect(() => {
    if (error) {
      console.error('Failed to load:', error);
    }

    if (data) {
      setZone_info(data.job_zone[3]);
      console.log(data.job_zone[3]);
    }
  }, [data, error]);
  
    return (
    <div className="pageDiv">
      <h1 className="titleH1">
        Information On Job Zone 4: High Job Preparation
      </h1>

      <div>
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
        <Link href="/assessment/job-zones">
          <button className="blueButton">
            Back
          </button>
          </Link>
        </div>
        <section class="gap"></section>
      </div>
    </div>
  );
}
