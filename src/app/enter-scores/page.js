export default function enterScores() {
    return (
      <div className="relative bg-white text-black px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <h1 className="space-y-6 py-5 text-4xl text-gray-600 leading-relaxed">
          Enter Your Scores Here
        </h1>
        <p className="space-y-6 py-5 text-base leading-7 text-gray-600">
          If you have previously taken the O*Net Interest Profiler, you can enter
          your interest scores below. You will be able to view and print your
          score report, choose a Job Zone, and view and print careers matching
          your profile.
        </p>
        <div>
          <div className="grid grid-cols-2 ">
            <label htmlFor="score1">Realistic</label>
            <input
              type="text"
              id="score1"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-2-4-2">
            <label htmlFor="score2">Investigative</label>
            <input
              type="text"
              id="score2"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-2-4-2">
            <label htmlFor="score3">Artistic</label>
            <input
              type="text"
              id="score3"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-2-4-2">
            <label htmlFor="score4">Social</label>
            <input
              type="text"
              id="score4"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-2-4-2">
            <label htmlFor="score5">Enterprising</label>
            <input
              type="text"
              id="score5"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-2-4-2">
            <label htmlFor="score6">Conventional</label>
            <input
              type="text"
              id="score6"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            />
          </div>
        </div>
      </div>
    );
  }
