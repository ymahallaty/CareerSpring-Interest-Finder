import Link from "next/link";

export default function Page() {
  return (
    <div className="relative bg-white text-black m-4 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <h1 className="space-y-6 py-5 text-4xl text-center text-gray-600 leading-relaxed">
        Great Job! You Answered All Questions!
      </h1>
      <p className="space-y-6 py-5 text-base leading-7 text-gray-600">
        You can review or change your answers at any time by selecting the back
        button at the bottom of the screen, or by returning to the first screen
        of questions with the button below
      </p>
      <div className="text-center mb-6">
        <Link
          href="/welcome"
          className="w-full h-full flex items-center justify-center"
        >
          <button className="bg-career-blue-btn flex text-white hover:bg-blue-600 items-center justify-center px-4 py-2">
            Go back to the first page
          </button>
        </Link>
      </div>
      <p className="space-y-6 py-5 text-base leading-7 text-gray-600">
        When you are ready use the &quot;Get Interest Results&quot; button to
        see your Interest Profiler
      </p>

      <div className="flex justify-between">
        <Link
          href="/"
          className="w-full h-full flex items-center justify-center"
        >
          <button
            className="bg-career-blue-btn flex text-white hover:bg-blue-600
          items-center justify-center px-4 py-2"
          >
            Back
          </button>
        </Link>

        <Link
          href="/assessment/results/career"
          className=" w-full h-full flex items-center justify-center"
        >
          <button
            className="bg-career-blue-btn flex text-white hover:bg-blue-600
          items-center justify-center px-4 py-2"
          >
            Get Interest Results
          </button>
        </Link>
      </div>
    </div>
  );
}
