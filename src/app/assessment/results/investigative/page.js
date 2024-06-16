"use client";

import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import riasecStore from "../../stores/riasecStore"

export default function Investigative() {
  const setArray = riasecStore(state => state.setRiasecArray);
  const searchParams = useSearchParams();
  const riasecString = searchParams.get('riasec');
  const riasecArray = riasecString.split(',').map(Number);
  setArray(riasecArray);

    return (
        <div className="pageDiv">
        <h1 className="titleH1">Investigative Interest Information</h1>
        <h1 className="text-xl mb-5 "> People with Investigative interests like work that has to do with ideas and thinking rather than physical activity or leading people. </h1>
        <h1 className="text-xl mb-5 list-disc">They like:</h1>
      <ul>
        <li className="text-xl">Searching for facts</li>
        <li className="text-xl"> Figuring out problems</li>
      </ul>
      <Link href={`/assessment/results?riasec=${riasecString}`}>
        <button className="blueButton"> Back
        </button>
        </Link>
    </div>
    )
}