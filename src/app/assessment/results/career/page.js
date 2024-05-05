import React from "react";
import HorizontalBarChart from "../../../../components/HorizontalBarChart";

export default function page() {
  return (
    <div className="relative bg-white my-10 text-black px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div className="text-center">
        <h1 className="font-bold space-y-6 py-5 text-4xl text-gray-600 leading-relaxed">
          Here Are Your Career Interest Results!
        </h1>
      </div>
      <div className="space-y-6 py-5 text-base leading-7 text-gray-600">
        Congratulations! You've scored highest in
        <div>-API call text-</div>
      </div>
      <h2 className="space-y-6 py-5 text-base leading-7 text-gray-600">
        Click on the following links to learn more about each interest:
      </h2>
      <ul className="mb-7 pl-10 list-disc">
        <li className="px-2">
          <a href="/assessment/results/realistic" className="pr-2 font-bold">
            Realistic
          </a>
          - People with Realistic interest like work that includes practical,
          hands-on problems and answers.
        </li>
        <li className="px-2">
          <a
            href="/assessment/results/investigative"
            className="pr-2 font-bold"
          >
            Investigative
          </a>
          - People with Investigative interest like work that has to do with
          ideas and thinking rather than physical activity or leading people.
        </li>
        <li className="px-2">
          <a href="/assessment/results/artistic" className="pr-2 font-bold">
            Artistic
          </a>
          - People with Artistic interests like work that deals with the
          artistic side of things, such as acting, music, art, and design.
        </li>
        <li className="px-2">
          <a href="/assessment/results/social" className="pr-2 font-bold">
            Social
          </a>
          - People with Social interests like working with others to help them
          learn and grow.
        </li>
        <li className="px-2">
          <a href="/assessment/results/enterprising" className="pr-2 font-bold">
            Enterprising
          </a>
          - People with Enterprising interests like work that has to do with
          starting up and carrying out business projects.
        </li>
        <li className="px-2">
          <a href="/assessment/results/conventional" className="pr-2 font-bold">
            Conventional
          </a>
          - People with Conventional interests like work that follows set
          procedures and routines.
        </li>
      </ul>
      <div>
        <img src="../../../../assets/Hexagon.png" alt="interests-hexagon" />
      </div>
      <div>
        <HorizontalBarChart />
      </div>
      <div>
        <div>
          <div className="grid grid-cols-2 ">
            <label htmlFor="score1">Realistic</label>
          </div>
          <div className="grid grid-cols-2 gap-2-4-2">
            <label htmlFor="score2">Investigative</label>
          </div>
          <div className="grid grid-cols-2 gap-2-4-2">
            <label htmlFor="score3">Artistic</label>
          </div>
          <div className="grid grid-cols-2 gap-2-4-2">
            <label htmlFor="score4">Social</label>
          </div>
          <div className="grid grid-cols-2 gap-2-4-2">
            <label htmlFor="score5">Enterprising</label>
          </div>
          <div className="grid grid-cols-2 gap-2-4-2">
            <label htmlFor="score6">Conventional</label>
          </div>
        </div>
      </div>
    </div>
  );
}
