import Link from "next/link";

export default function jobZones (){
    return( 
        <div className="block-group block-padding content-center">
            <h1 className="text-6xl mt-5 mb-4 flex justify-center title text-wrap">Information About Job Zones</h1>
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
                <li className="underline"><a href="/assessment/job-zones/job-zone-3">Job Zone 3: Medium Job Preparation</a></li>
                <li className="underline"><a href="/assessment/job-zones/job-zone-4">Job Zone 4: High Job Preparation</a></li>
                <li className="underline"><a href="/assessment/job-zones/job-zone-5">Job Zone 5: Extensive Job Preparation</a></li>
            </ul>
            <div className="button-container">
                <button className="blueButtons"><Link href="">Back</Link></button>
                <button className="blueButtons"><Link href="">Find Careers for You</Link></button>
            </div>
        </div>
    )
}