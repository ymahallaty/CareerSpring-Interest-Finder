"use client";

import React from "react";
import { useState,useEffect } from "react";
import HorizontalBarChart from "../../../../components/HorizontalBarChart";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";

const fetcher = url => axios.get(url).then(res => res.data);

export default function Page() {

  const [url, setUrl] = useState('https://services.onetcenter.org/ws/mnm/interestprofiler/results?answers=553421321134342523523523254115342111351145453111231155343444');

  const fetchURL = `../../../assessment/api?url=${encodeURIComponent(url)}`;

  const { data, error } = useSWR(fetchURL, fetcher);

  useEffect(() => {
    if (error) {
      console.error('Failed to load:', error);
    }

    if (data) {
      console.log(data);
    }
  }, [data, error]);

  return (
    <div className="pageDiv">
        <h1 className="titleH1">
          Here Are Your Career Interest Results!
        </h1>
        <div className="paragraph">
      <div className="space-y-6 py-5 text-base text-center leading-7 text-black">
        Congratulations! You&apos;ve scored highest in
        <div>-API call text-</div>
      </div>
      <h2 className="space-y-6 py-5 text-base leading-7 text-black">
        Click on the following links to learn more about each interest:
      </h2>
      <ul className="mb-7 pl-10 list-disc">
        <li className="px-2">
          <a
            href="/assessment/results/realistic"
            className="pr-2 font-bold text-[#81a058] hover:underline"
          >
            Realistic
          </a>
          - People with Realistic interest like work that includes practical,
          hands-on problems and answers.
        </li>
        <li className="px-2">
          <a
            href="/assessment/results/investigative"
            className="pr-2 font-bold text-[#81a058] hover:underline"
          >
            Investigative
          </a>
          - People with Investigative interest like work that has to do with
          ideas and thinking rather than physical activity or leading people.
        </li>
        <li className="px-2">
          <a
            href="/assessment/results/artistic"
            className="pr-2 font-bold text-[#81a058] hover:underline"
          >
            Artistic
          </a>
          - People with Artistic interests like work that deals with the
          artistic side of things, such as acting, music, art, and design.
        </li>
        <li className="px-2">
          <a
            href="/assessment/results/social"
            className="pr-2 font-bold text-[#81a058] hover:underline"
          >
            Social
          </a>
          - People with Social interests like working with others to help them
          learn and grow.
        </li>
        <li className="px-2">
          <a
            href="/assessment/results/enterprising"
            className="pr-2 font-bold text-[#81a058] hover:underline"
          >
            Enterprising
          </a>
          - People with Enterprising interests like work that has to do with
          starting up and carrying out business projects.
        </li>
        <li className="px-2">
          <a
            href="/assessment/results/conventional"
            className="pr-2 font-bold text-[#81a058] hover:underline"
          >
            Conventional
          </a>
          - People with Conventional interests like work that follows set
          procedures and routines.
        </li>
      </ul>
      </div>
      <div>
        <img src="/assets/Hexagon.png" alt="interests-hexagon" />
      </div>
      <div className="mb-10">
        <HorizontalBarChart />
      </div>
      <table className="pt-6 border-collapse border-2">
        <thead>
          <tr>
            <th className="border-2">Characteristic</th>
            <th className="border-2">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 px-4 py-2">Realistic</td>
            <td className="border-2 px-4 py-2">0</td>
          </tr>
          <tr>
            <td className="border-2 px-4 py-2">Investigative</td>
            <td className="border-2 px-4 py-2">0</td>
          </tr>
          <tr>
            <td className="border-2 px-4 py-2">Artistic</td>
            <td className="border-2 px-4 py-2">0</td>
          </tr>
          <tr>
            <td className="border-2 px-4 py-2">Social</td>
            <td className="border-2 px-4 py-2">0</td>
          </tr>
          <tr>
            <td className="border-2 px-4 py-2">Enterprising</td>
            <td className="border-2 px-4 py-2">0</td>
          </tr>
          <tr>
            <td className="border-2 px-4 py-2">Conventional</td>
            <td className="border-2 px-4 py-2">0</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between pt-10">
      <Link href="/ending">
        <button className="blueButton">
          Back
        </button>
      </Link>
      <Link href="/assessment/email-form">
        <button className="blueButton">
          Next
        </button>
      </Link>
      </div>
    </div>
  );
}
