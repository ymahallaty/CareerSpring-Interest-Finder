import Link from "next/link";

export default function conventional() {
  return (
    <div className="ml-52 mr-52">
      <h1>Conventional Interest Info here</h1>
      <Link href="/assessment/results/career">
        <button className="blueButtons flex justify-center">Back</button>
      </Link>
    </div>
  );
}
