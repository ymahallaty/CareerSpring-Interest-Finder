import Link from "next/link";

export default function realistic() {
  return (
    <div className="pageDiv">
      <h1 className="titleH1">Realistic Interest Information</h1>

      <p className="paragraph">
        People with Realistic interest like work that includes practical,
        hands-on problems and answers. Often people with Realistic interest do
        not like career that involve paperwork or working closely with others.
      </p>
      <h1 className="text-xl mb-5 list-disc">They like:</h1>
      <ul>
        <li className="text-xl">Working with plants and animals</li>
        <li className="text-xl">
          Real-world materials like wood, tools, and machinery
        </li>
        <li className="text-xl">Outside work</li>
      </ul>
      <Link href="/assessment/results/career">
        <button className="blueButton">
          Back
        </button>
      </Link>
    </div>
  );
}
