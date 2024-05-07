import Link from "next/link";
export default function investigative() {
    return (
        <div className="ml-52 mr-52">
        <h1 className="text-6xl mt-5 mb-14 flex justify-center title text-wrap">Artistic Interest Information</h1>
        <h1 className="text-xl mb-5 "> People with Investigative interests like work that has to do with ideas and thinking rather than physical activity or leading people. </h1>
        <h1 className="text-xl mb-5 ">They like:</h1>
        <h1 className="text-xl m-5">Searching for facts <br />
        Figuring out problems</h1>
        <button className="blueButtons flex justify-center"><Link href="/">Back</Link></button>
    </div>
    )
}