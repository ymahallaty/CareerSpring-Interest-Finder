import Link from "next/link";
import HorizontalBarChart from "@/components/HorizontalBarChart";
export default function Medium() {
    // <Link href="/assessment/job-zones/job-zone-3/medium-prep"
    // /Users/marsbaby/Desktop/TKH/pro/CareerSpring-Interest-Finder/src/app/assessment/job-zones/job-zone-3/medium-prep/mediumprep.js
    return (
        <>
            <div className="pageDiv">
                <h1 className="titleH1">
                    Job Zone 3: Medium Job Preparation
                </h1>
                <h1 className="text-xl m-3">Click to change your preferred job zone: </h1>
                <div className="flex flex-row justify-center ">
                    <Link href="/assessment/job-zones/job-zone-3/medium-prep"> <button className="orangeBut">3</button></Link>
                    <Link href="/assessment/job-zones/job-zone-4/medium-prep"><button className="orangeBut">4</button></Link>
                    <Link href="/assessment/job-zones/job-zone-5/medium-prep">  <button className="orangeBut">5</button></Link>
                </div>
                <div className="flex flex-row justify-center mt-10 mb-10">
                    <img className="w-56" src="/assets/Hexagon.png" />
                </div>
                <HorizontalBarChart />
                <h1 className="mt-3">Here are your results related to your Interests Profile in your chosen Job Zone! Choose a job zone to see jobs that correlate with one another. Click on a career to learn more about each role.</h1>
                <h1>= Good Fit
                    = Great Fit
                    = Best Fit
                    = Bright Outlook</h1>
                <div className="flex justify-between pt-10">
                    <Link href="/assessment/job-zones/job-zone-3">
                        <button className="blueButton">
                            Back
                        </button>
                    </Link>
                    <Link href="/assessment/job-zones/job-zone-3">
                        <button className="blueButton">
                            Find More Careers
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}