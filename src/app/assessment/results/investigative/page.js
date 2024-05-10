import Link from "next/link";

export default function investigative() {
    return (
        <div className="pageDiv">
        <h1 className="titleH1">Investigative Interest Information</h1>
        <h1 className="text-xl mb-5 "> People with Investigative interests like work that has to do with ideas and thinking rather than physical activity or leading people. </h1>
        <h1 className="text-xl mb-5 list-disc">They like:</h1>
      <ul>
        <li className="text-xl">Searching for facts</li>
        <li className="text-xl"> Figuring out problems</li>
      </ul>
        <button className="mt-10 blueB py-5 text-base leading-7 text-white p-[65px] rounded-md">
          <Link href="/assessment/results/career">Back</Link>
        </button>
    </div>
    )
}