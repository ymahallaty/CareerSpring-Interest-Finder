import Link from "next/link";

//routes are named in alphabetical order to make them easy to search for now. Will update
//when we know what each route will be for
export default function BottomNav() {
    return (
        <>
        <h1>Click the number underneath the circle to test out routes.</h1>
            <div className="overflow-x-auto">
        
                <ul className="steps">
                    <li className="step underline"><Link href="/assessment">Career Interest Finder Assessment</Link></li>
                    <li className="step underline"><Link href="/enter-scores">Enter Scores</Link></li>
                    <li className="step underline"><Link href="/user-agreement">User Agreement</Link></li>
                    <li className="step underline"><Link href="/assessment/results">Career Interest Finder Results</Link></li>
                    <li className="step underline"><Link href="/assessment/results/realistic">Realistic Interest Information</Link></li>
                    <li className="step underline"><Link href="/assessment/results/investigative">Investigative Interest Information</Link></li>
                    <li className="step underline"><Link href="/assessment/results/artistic">Artistic Interest Information</Link></li>
                    <li className="step underline"><Link href="/assessment/results/social">Social Interest Information</Link></li>
                    <li className="step underline"><Link href="/assessment/results/enterprising">Enterprising Interest Information</Link></li>
                    <li className="step underline"><Link href="/assessment/results/conventional">Conventional Interest Information</Link></li>
                    <li className="step underline"><Link href="/assessment/job-zones">Information About Job Zones</Link></li>
                    <li className="step underline"><Link href="/assessment/job-zones/job-zone-3">Job Zone 3</Link></li>
                    <li className="step underline"><Link href="/assessment/job-zones/job-zone-4">Job Zone 4</Link></li>
                    <li className="step underline"><Link href="/assessment/job-zones/job-zone-5">Job Zone 5</Link></li>
                </ul>
            </div>
        </>
    )
}