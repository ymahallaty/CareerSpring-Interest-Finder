import Link from "next/link";

export default function Page() {
  return (
    <div className="block-group block-padding content-center">
      <div className="text-center">
      <h1 className="titleH1">
        Great Job! You Answered All Questions!
      </h1>
      </div>
      <p className="space-y-6 py-5 text-base leading-7 text-black">
        You can review or change your answers at any time by selecting the back
        button at the bottom of the screen, or by returning to the first screen
        of questions with the button below
      </p>

      <div className="text-center mb-6">

        <Link href="/assessment">
        <button className="blueB py-5 text-base leading-7 text-white p-[65px] rounded-md">
        Go back to the first page
        </button>
      </Link>
      </div>

      <p className="space-y-6 py-5 text-base leading-7 text-black">
        When you are ready use the &quot;Get Interest Results&quot; button to
        see your Interest Profiler
      </p>

      <div className="flex justify-between pt-10">
      <Link href="/assessment">
        <button className="blueB py-5 text-base leading-7 text-white p-[65px] rounded-md">
          Back
        </button>
      </Link>
      <Link href="/assessment/results/career">
        <button className="blueB py-5 text-base text-wrap leading-7 text-white p-4 rounded-md">
        Get Interest Results
        </button>
      </Link>
      </div>
    </div>
  );
}
