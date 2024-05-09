import Link from "next/link";

export default function social() {
  return (
    <div className="relative bg-white my-10 text-black px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div className="text-center">
        <h1 className="font-bold space-y-6 py-5 text-4xl text-gray-600 leading-relaxed">
          Social Interest Information
        </h1>
      </div>

      <p className="space-y-6 py-5 text-base leading-7 text-gray-600">
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
      <Link href="/assessment/results/career"><button className="blueButtons flex justify-center">Back</button></Link>
    </div>
  );
}
