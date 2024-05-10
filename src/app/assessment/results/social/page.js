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

      <h1 className="text-xl mb-5 list-disc">They like:</h1>
      <ul className="mb-7 pl-10 list-disc">
        <li className="text-xl">Teaching</li>
        <li className="text-xl">Giving advice</li>
        <li className="text-xl">Helping and being of service to people</li>
      </ul>
      <button className="mt-10 blueB py-5 text-base leading-7 text-white p-[65px] rounded-md">
          <Link href="/assessment/results/career">Back</Link>
        </button>
    </div>
  );
}
