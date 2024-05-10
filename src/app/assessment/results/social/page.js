import Link from "next/link";

export default function social() {
  return (
    <div className="pageDiv">
      <h1 className="titleH1">
        Social Interest Information
      </h1>


      <p className="paragraph">
        People with Social interests like working with others to help them learn
        and grow. They like working with people more than workking with objects,
        machines, or information
      </p>

      <h2 className="space-y-6 py-5 text-base leading-7 text-gray-600">They like:</h2>
      <ul className="mb-7 pl-10 list-disc">
        <li className="px-2">Teaching</li>
        <li className="px-2">Giving advice</li>
        <li className="px-2">Helping and being of service to people</li>
      </ul>
      <Link href="/assessment/results/career"><button className="blueButton">Back</button></Link>
    </div>
  );
}
