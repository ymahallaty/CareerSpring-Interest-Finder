import Link from "next/link";
export default function investigative() {
    return (
        <div className="ml-52 mr-52">
            <h1 className="text-6xl mt-5 flex justify-center title text-wrap text-center">All Investigative Careers Job Zone 3</h1>
            <h1 className="text-xl m-3">Click to change your preferred job zone: </h1>
            <div className="flex flex-row justify-center">
                <button className="orangeBrand grid grid-col mr-10 font-bold"><Link href="/">3</Link></button>
                <button className="orangeBrand grid grid-col ml-10 mr-10 font-bold"><Link href="/">4</Link></button>
                <button className="orangeBrand flex flex-row ml-10 mr-10 font-bold"><Link href="/">5</Link></button>
            </div>
            <h1 className="text-xl mt-10">Investigative: (Score) </h1>
            <h1 className="text-xl mt-10"> Investigative careers that fit your preparation level:</h1>

            <button className="blueButtons flex justify-center"><Link href="/">Back</Link></button>
        </div>
    )
}