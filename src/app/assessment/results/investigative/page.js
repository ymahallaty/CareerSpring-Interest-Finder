import Link from "next/link";

export default function investigative() {
    return (
        <div className="pageDiv">
        <h1 className="titleH1">Investigative Interest Information</h1>
        <h1 className="text-xl mb-5 "> People with Investigative interests like work that has to do with ideas and thinking rather than physical activity or leading people. </h1>
        <h1 className="text-xl mb-5 ">They like:</h1>
        <h1 className="text-xl m-5">Searching for facts <br />
        Figuring out problems</h1>
        <Link href="/assessment/results/career"><button className="blueButton flex justify-center">Back</button></Link>
    </div>
    )
}