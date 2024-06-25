"use client";

import Link from "next/link";
import { Suspense } from "react";
import riasecStore from "../../assessment/stores/riasecStore";
import {useSearchParams} from "next/navigation";

function JobZones (){

    // const riasec = riasecStore(state => state.riasecArray);

    // let riasecString = "";

    // if(typeof window !== 'undefined'){
    //     const localURL = new URL(window.location.href);
    //     const searchParams = localURL.searchParams
    //     riasecString = searchParams.get('riasec');
    //   }

    const showParams = useSearchParams();
    const riaSecString =  showParams.get('riasec')
    const riasec = riaSecString.split(',').map(Number);
    // const searchParams = useSearchParams();
    // const riasecString = searchParams.get('riasec');

    return(
        <div className="block-group block-padding content-center">
            <h1 className="titleH1">Information About Job Zones</h1>
            <p>
                <strong>To focus your search, think about the following question:</strong>
                <br></br>
                <br></br>
                How much education, training, and experience do I need to do the job?
                <br></br>
                <br></br>
                Each O*NET career is one of five Job Zones, which are groups of careers that need the same level of experience, education and training. Different careers need different amounts of preparation. You will be asked to pick a Job Zone. Using your Job Zone and your interests, the Interest Profiler will help you identify and explore careers that might be right for you.
            </p>
            <br></br>
            <p>
            Select each Job Zone below to read more about the experience, education, and training needed. Read carefully to find the Job Zone that’s right for you.
            </p>
            <br></br>
            <p>
            You can click on any Job Zone below to learn more. When you are ready, click the “Find Careers for You” button to continue.
            </p>
            <ul>
                <li className="underline"><Link href={`/assessment/job-zones/job-zone-3?riasec=${riasec}`}>Job Zone 3: Medium Job Preparation</Link></li>
                <li className="underline"><Link href={`/assessment/job-zones/job-zone-4?riasec=${riasec}`}>Job Zone 4: High Job Preparation</Link></li>
                <li className="underline"><Link href={`/assessment/job-zones/job-zone-5?riasec=${riasec}`}>Job Zone 5: Extensive Job Preparation</Link></li>
            </ul>
            <div className="button-container">
               <Link href={`/assessment/email-form?riasec=${riasec}`}> 
                <button className="blueB py-5 text-base leading-7 text-white p-[65px] rounded-md">
                  Back</button>
                </Link>
               <Link href={`/careers?riasec=${riasec}`}><button className="blueB py-5 text-base text-wrap leading-7 text-white p-4 rounded-md">Find Careers for You</button></Link>
            </div>
        </div>
    )
}

const Page = () => {
    return (
      <Suspense>
        <JobZones/>
      </Suspense>
    )
  }
  
  export default Page