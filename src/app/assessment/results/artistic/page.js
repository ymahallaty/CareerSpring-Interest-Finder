"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import riasecStore from "../../stores/riasecStore"

function Artistic() {
  const setArray = riasecStore(state => state.setRiasecArray);
  const searchParams = useSearchParams();
  const riasecString = searchParams.get('riasec');
  const riasecArray = riasecString.split(',').map(Number);
  setArray(riasecArray);

  return (
    <div className="pageDiv">
      <h1 className="titleH1">Artistic Interest Information</h1>
      <div className="paragraph">
      <h1 className="text-xl mb-5 ">

        People with Artistic interests like work that deals with the artistic
        side of things, such as acting, music, art, and design.{" "}
      </h1>
      <h1 className="text-xl mb-5 list-disc">They like:</h1>
      <ul>
        <li className="text-xl">Creativity in their work</li>
        <li className="text-xl">Work that can be done without following a set of rules</li>
      </ul>
      </div>
      <Link href={`/assessment/results?riasec=${riasecString}`}>
        <button className="blueButton"> Back
        </button>
      </Link>
    </div>
  );
}

const Page = () => {
  return (
    <Suspense>
      <Artistic/>
    </Suspense>
  )
}

export default Page
