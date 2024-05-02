export default function enterScores() {
    return (
      <div className="relative bg-white text-black px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <h1 className="space-y-6 py-5 text-4xl leading-7 text-gray-600 leading-relaxed">
          Enter Your Scores Here
        </h1>
        <p className="space-y-6 py-5 text-base leading-7 text-gray-600">
          If you've previously taken the O*Net Interest Profiler, you can enter
          your interest scores below. You will be able to view and print your
          score report, choose a Job Zone, and view and print careers matching
          your profile.
        </p>
        <div className="grid grid-cols-1 gap-4 text-center">
          <div>
            <label htmlFor="score1">Word 1</label>
            <input
              type="text"
              id="score1"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="score2">Word 2</label>
            <input
              type="text"
              id="score2"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="score3">Word 3</label>
            <input
              type="text"
              id="score3"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="score4">Word 4</label>
            <input
              type="text"
              id="score4"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="score5">Word 5</label>
            <input
              type="text"
              id="score5"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="score6">Word 6</label>
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
