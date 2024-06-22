"use client";

import Link from "next/link";
import {Suspense} from "react";
import { useSearchParams } from 'next/navigation';
import riasecStore from "../../stores/riasecStore";

function Social() {
  const setArray = riasecStore(state => state.setRiasecArray);
  const searchParams = useSearchParams();
  const riasecString = searchParams.get('riasec');
  const riasecArray = riasecString.split(',').map(Number);
  setArray(riasecArray);

  return (
    <div className="pageDiv">
      <h1 className="titleH1">
        Social Interest Information
      </h1>


      <p className="paragraph">
        People with Social interests like working with others to help them learn
        and grow. They like working with people more than workking with objects,
        machines, or information.
      </p>

      <h1 className="text-xl mb-5 list-disc">They like:</h1>
      <ul className="mb-7 pl-10 list-disc">
        <li className="text-xl">Teaching</li>
        <li className="text-xl">Giving advice</li>
        <li className="text-xl">Helping and being of service to people</li>
      </ul>
      <div className="mt-20"> 
      <Link href={`/assessment/results?riasec=${riasecString}`}> 
      <button className="blueButton"> Back 
      </button> 
      </Link> 
      </div>
      
    </div>
  );
}

const Page = () => {
  return (
    <Suspense>
      <Social/>
    </Suspense>
  )
}

export default Page
