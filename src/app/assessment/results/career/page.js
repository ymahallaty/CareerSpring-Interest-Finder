"use client";

import React from "react";
import HorizontalBarChart from "../../../../components/HorizontalBarChart";
import Link from "next/link";
import riasecStore from "../../stores/riasecStore"


export default function Page() {

 const riasec = riasecStore(state => state.riasecArray);

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
      <div className="paragraph text-center leading-7 text-black">
        Congratulations! You&apos;ve scored highest in
        <div>{TopThreeCode}</div>
      </div>
      <div className="paragraph">
        Click on the following links to learn more about each interest:
      </div>
      <ul className="mb-7 pl-10 list-disc">
        <li className="px-2">
          <a
            href="/assessment/results/realistic"
            className="resultsP"
          >
            Realistic
          </a>
          - People with Realistic interest like work that includes practical,
          hands-on problems and answers.
        </li>
        <li className="px-2">
          <a
            href="/assessment/results/investigative"
            className="resultsP"
          >
            Investigative
          </a>
          - People with Investigative interest like work that has to do with
          ideas and thinking rather than physical activity or leading people.
        </li>
        <li className="px-2">
          <a
            href="/assessment/results/artistic"
            className="resultsP"
          >
            Artistic
          </a>
          - People with Artistic interests like work that deals with the
          artistic side of things, such as acting, music, art, and design.
        </li>
        <li className="px-2">
          <a
            href="/assessment/results/social"
            className="resultsP"
          >
            Social
          </a>
          - People with Social interests like working with others to help them
          learn and grow.
        </li>
        <li className="px-2">
          <a
            href="/assessment/results/enterprising"
            className="resultsP"
          >
            Enterprising
          </a>
          - People with Enterprising interests like work that has to do with
          starting up and carrying out business projects.
        </li>
        <li className="px-2">
          <a
            href="/assessment/results/conventional"
            className="resultsP"
          >
            Conventional
          </a>
          - People with Conventional interests like work that follows set
          procedures and routines.
        </li>
      </ul>
      </div>
      <div className="flex flex-row justify-center">
        <img className="size-1/2" src="/assets/Hexagon.png" alt="interests-hexagon" />
      </div>
      <div className="mb-10 ">
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
            <td className="border-2 px-4 py-2">{riasec.length && riasec[0]}</td>
          </tr>
          <tr>
            <td className="border-2 px-4 py-2">Investigative</td>
            <td className="border-2 px-4 py-2">{riasec.length && riasec[1]}</td>
          </tr>
          <tr>
            <td className="border-2 px-4 py-2">Artistic</td>
            <td className="border-2 px-4 py-2">{riasec.length && riasec[2]}</td>
          </tr>
          <tr>
            <td className="border-2 px-4 py-2">Social</td>
            <td className="border-2 px-4 py-2">{riasec.length && riasec[3]}</td>
          </tr>
          <tr>
            <td className="border-2 px-4 py-2">Enterprising</td>
            <td className="border-2 px-4 py-2">{riasec.length && riasec[4]}</td>
          </tr>
          <tr>
            <td className="border-2 px-4 py-2">Conventional</td>
            <td className="border-2 px-4 py-2">{riasec.length && riasec[5]}</td>
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