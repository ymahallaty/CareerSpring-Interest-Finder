import Link from "next/link";

export default function artistic() {
  return (
    <div className="pageDiv">
      <h1 className="titleH1">Artistic Interest Information</h1>
      <div className="paragraph">
      <h1 className="text-xl mb-5 ">

        People with Artistic interests like work that deals with the artistic
        side of things, such as acting, music, art, and design.{" "}
      </h1>
      <h1 className="text-xl mb-5 list-disc">They like:</h1>
      <ul>
        <li className="text-xl">Creativity in their work</li>
        <li className="text-xl">Work that can be done without following a set of rules</li>
      </ul>
      </div>
      <Link href="/assessment/results/career">
        <button className="blueButton"> Back
        </button>
      </Link>
    </div>
  );
}
