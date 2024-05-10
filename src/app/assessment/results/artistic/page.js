import Link from "next/link";

export default function artistic() {
    return (
        <div className="pageDiv">
            <h1 className="titleH1">Artistic Interest Information</h1>
            <h1 className="text-xl mb-5 "> People with Artistic interests like work that deals with the artistic side of things, such as acting, music, art, and design. </h1>
            <h1 className="text-xl mb-5 ">They like:</h1>
            <h1 className="text-xl m-5">Creativity in their work <br />
                Work that can be done without following a set of rules</h1>
            <Link href="/assessment/results/career"><button className="blueButton flex justify-center">Back</button></Link>
        </div>
    )
}