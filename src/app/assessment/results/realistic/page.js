import Link from "next/link";

export default function realistic() {
  return (
    <div className="pageDiv">
     
        <h1 className="titleH1">
          Realistic Interest Information
        </h1>
    

      <p className="paragraph">
        People with Realistic interest like work that includes practical,
        hands-on problems and answers. Often people with Realistic interest do
        not like career that involve paperwork or working closely with others.
      </p>

      <h2 className="space-y-6 py-5 text-base leading-7 text-gray-600">
        They like:
      </h2>
      <ul className="mb-7 pl-10 list-disc">
        <li className="px-2">Working with plants and animals</li>
        <li className="px-2">Real-world materials like wood, tools, and machinery</li>
        <li className="px-2">Outside work</li>
      </ul>
      <Link href="/assessment/results/career"><button className="blueButton ">Back</button></Link>
    </div>
  );
}
