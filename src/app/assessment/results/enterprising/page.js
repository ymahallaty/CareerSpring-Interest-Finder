import Link from "next/link";

export default function enterprising() {
  return (
    <div className="block-group block-padding content-center">
      <h1 className="titleH1">
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
      <div className="mt-20"> 
      <Link href="/assessment/results/career"> 
      <button className="blueB py-5 text-base leading-7 text-white p-[65px] rounded-md"> Back 
      </button> 
      </Link> 
      </div>
    </div>
  );
}
