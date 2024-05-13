import Link from "next/link";

export default function enterprising() {
  return (
    <div className="block-group block-padding content-center">
      <h1 className="titleH1 ">
        Conventional Interest Informational Page{" "}
      </h1>
      <h1 className="text-xl mb-5 ">
        People with Conventional interests like work that follows set procedures
        and routines. They prefer working with information and paying attention
        to details rather than working with ideas.
      </h1>
      <h1 className="text-xl mb-5 list-disc">They like:</h1>
      <ul>
        <li className="text-xl">Working with clear rules</li>
        <li className="text-xl">Following a strong leader</li>
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
