"use client";

import React from "react";
import { useState,useEffect } from "react";
import HorizontalBarChart from "../../../../components/HorizontalBarChart";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import riasecStore from "../../stores/riasecStore"
import { useRouter } from 'next/navigation';
import renderAnswersStore from "../../stores/renderAnswersStore";

const fetcher = url => axios.get(url).then(res => res.data);

export default function Page() {
  
  const answers = renderAnswersStore((state) => state.answersObject);
  const stringAnswers = Object.values(answers).toString().replaceAll(",", "");
  // console.log(stringAnswers);

  const [results, setResults] = useState([]);

    const url = `https://services.onetcenter.org/ws/mnm/interestprofiler/results?answers=${stringAnswers}`;
    const fetchURL = `../../../assessment/api?url=${encodeURIComponent(url)}`;
    const { data, error } = useSWR(fetchURL, fetcher);

  useEffect(() => {
    if (error) {
      console.error('Failed to load:', error);
    }

    if (data) {
      setResults(data.result);
      // console.log(data.result);
    }
  }, [data, error]);

  const setArray = riasecStore(state => state.setRiasecArray);
  const router = useRouter();

  let riasec = [];
  for (let i = 0; i < results.length; i++){
    riasec.push(results[i].score);
  }

  setArray(riasec);

  const areas = ["Realistic", "Investigative", "Artistic", "Social", "Enterprising", "Conventional"];
  const scoredAreas = areas.map((area,index) => ({area, score: riasec[index]}));
  const topThreeScores = scoredAreas.sort((a,b) => b.score - a.score).slice(0,3);
  const TopThreeCode = topThreeScores.map(scoredArea => scoredArea.area.charAt(0)).join('');

  return (
    <div className="pageDiv">
        <h1 className="titleH1">
          Here Are Your Career Interest Results!
        </h1>
        <div className="paragraph">
      <div className="space-y-6 py-5 text-base text-center leading-7 text-black">
        Congratulations! You&apos;ve scored highest in
        <div>{TopThreeCode}</div>
      </div>
      <h2 className="space-y-6 py-5 text-base leading-7 text-black">
        Click on the following links to learn more about each interest:
      </h2>
      <ul className="mb-7 pl-10 list-disc">
        <li className="px-2">
          <a
            href="/assessment/results/realistic"
            className="pr-2 font-bold text-[#81a058] underline"
          >
            Realistic
          </a>
          - People with Realistic interest like work that includes practical,
          hands-on problems and answers.
        </li>
        <li className="px-2">
          <a
            href="/assessment/results/investigative"
            className="pr-2 font-bold text-[#81a058] underline"
          >
            Investigative
          </a>
          - People with Investigative interest like work that has to do with
          ideas and thinking rather than physical activity or leading people.
        </li>
        <li className="px-2">
          <a
            href="/assessment/results/artistic"
            className="pr-2 font-bold text-[#81a058] underline"
          >
            Artistic
          </a>
          - People with Artistic interests like work that deals with the
          artistic side of things, such as acting, music, art, and design.
        </li>
        <li className="px-2">
          <a
            href="/assessment/results/social"
            className="pr-2 font-bold text-[#81a058] underline"
          >
            Social
          </a>
          - People with Social interests like working with others to help them
          learn and grow.
        </li>
        <li className="px-2">
          <a
            href="/assessment/results/enterprising"
            className="pr-2 font-bold text-[#81a058] underline"
          >
            Enterprising
          </a>
          - People with Enterprising interests like work that has to do with
          starting up and carrying out business projects.
        </li>
        <li className="px-2">
          <a
            href="/assessment/results/conventional"
            className="pr-2 font-bold text-[#81a058] underline"
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
        {riasec.length && <HorizontalBarChart/>}
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
            <td className="border-2 px-4 py-2">{results.length && results[0].score}</td>
          </tr>
          <tr>
            <td className="border-2 px-4 py-2">Investigative</td>
            <td className="border-2 px-4 py-2">{results.length && results[1].score}</td>
          </tr>
          <tr>
            <td className="border-2 px-4 py-2">Artistic</td>
            <td className="border-2 px-4 py-2">{results.length && results[2].score}</td>
          </tr>
          <tr>
            <td className="border-2 px-4 py-2">Social</td>
            <td className="border-2 px-4 py-2">{results.length && results[3].score}</td>
          </tr>
          <tr>
            <td className="border-2 px-4 py-2">Enterprising</td>
            <td className="border-2 px-4 py-2">{results.length && results[4].score}</td>
          </tr>
          <tr>
            <td className="border-2 px-4 py-2">Conventional</td>
            <td className="border-2 px-4 py-2">{results.length && results[5].score}</td>
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
