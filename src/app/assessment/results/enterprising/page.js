import Link from "next/link";

export default function enterprising() {
  return (
    <div className="ml-52 mr-52">
      <h1 className="text-6xl mt-5 mb-14 flex justify-center title text-wrap ">
        Enterprising Interest Informantion
      </h1>
      <h1 className="text-xl mb-5 ">
        {" "}
        People with Enterprising interests like work that has to do with
        starting up and carrying out business projects. These people like taking
        action rather than thinking about things.
      </h1>
      <h1 className="text-xl mb-5 list-disc">They like:</h1>
      <ul>
        <li>Persuading and leading people</li>
        <li>Making decisions</li>
        <li>Taking risks for profits</li>
      </ul>
        <Link href="/assessment/results/career"><button className="blueButtons flex justify-center">Back</button></Link>
    </div>
  );
}
