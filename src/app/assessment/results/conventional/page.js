import Link from "next/link";

export default function enterprising() {
  return (
    <div className="ml-52 mr-52">
      <h1 className="text-6xl mt-5 mb-14 flex justify-center title text-wrap ">
        Conventional Interest Informational Page{" "}
      </h1>
      <h1 className="text-xl mb-5 ">
        {" "}
        People with Conventional interests like work that follows set procedures
        and routines. They prefer working with information and paying attention
        to details rather than working with ideas.
      </h1>
      <h1 className="text-xl mb-5 list-disc">They like:</h1>
      <ul>
        <li>Working with clear rules</li>
        <li>Following a strong leader</li>
      </ul>
      <Link href="/assessment/results/career">
        <button className="blueButtons flex justify-center">Back</button>
      </Link>
    </div>
  );
}
