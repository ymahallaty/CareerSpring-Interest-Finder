import Link from "next/link";

export default function enterprising() {
  return (
    <div className="pageDiv">
      <h1 className="titleH1 ">
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
        <button className="blueButton">Back</button>
      </Link>
    </div>
  );
}
