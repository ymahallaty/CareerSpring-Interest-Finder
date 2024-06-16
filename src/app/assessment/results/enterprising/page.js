"use client";

import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import riasecStore from "../../stores/riasecStore"

export default function Enterprising() {
  const setArray = riasecStore(state => state.setRiasecArray);
  const searchParams = useSearchParams();
  const riasecString = searchParams.get('riasec');
  const riasecArray = riasecString.split(',').map(Number);
  setArray(riasecArray);

  return (
    <div className="pageDiv">
      <h1 className="titleH1">
        Enterprising Interest Informantion
      </h1>
      <h1 className="text-xl mb-5 ">
        {" "}
        People with Enterprising interests like work that has to do with
        starting up and carrying out business projects. These people like taking
        action rather than thinking about things.
      </h1>
      <h1 className="text-xl mb-5 list-disc">They like:</h1>
      <ul>
        <li>Persuading and leading people</li>
        <li>Making decisions</li>
        <li>Taking risks for profits</li>
      </ul>
      <div className="mt-20"> 
      <Link href="/assessment/results"> 
      <button className="blueButton"> Back 
      </button> 
      </Link> 
      </div>
    </div>
  );
}
