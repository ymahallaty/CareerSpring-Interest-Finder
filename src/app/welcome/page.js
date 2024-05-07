
import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div className="relative bg-white m-5 text-black px-6 pt-5 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">

      <h1 className="space-y-6 py-5 text-4xl leading-7 text-gray-600">Career Interest Finder</h1>
      <h3 className="space-y-6 py-5 text-base leading-7 text-gray-600">
        Unsure about what path to pursue? Take the Career Interest Finder to
        discover what types of careers you’d like to explore! The O*NET Interest
        Profiler asks you a series of questions about work activities and asks
        you to rank how much you like or dislike doing them. Based on your
        answers, you will receive a set of results that corresponds to different
        career options that you can look into.You will rank each question based
        on how you would feel doing each type of work:
      </h3>
      <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
        <li>Strongly dislike</li>
        <li>Dislike</li>
        <li>Unsure</li>
        <li>Like</li>
        <li>Strongly like</li>
      </ol>
      <p className="space-y-6 py-5 text-base leading-7 text-gray-600">Remember, there are no right or wrong answers!</p>
      <button className="orangeBrand space-y-6 py-5 text-base leading-7 text-gray-600 hover:bg-yellow-600"><Link href="/assessment">Start Career Interest Finder</Link></button>
      <p className="space-y-6 py-5 text-base leading-7 text-gray-600">Taken the Interest Profiler before?</p>
      <button className="orangeBrand space-y-6 pb-5 text-base leading-7 text-gray-600 hover:bg-yellow-600"><Link href="/enter-scores">Enter Scores</Link></button>
      <br/>
      <a href="/user-agreement" class="space-y-6 py-5 text-base hover:underline">User Agreement Proper Use</a>
    </div>
  );
}

export default Page;
