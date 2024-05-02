export default function page() {
    return (
      <div className="relative bg-white text-black m-4 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <h1 className="space-y-6 py-5 text-4xl text-center text-gray-600 leading-relaxed">Great Job! You Answered All Questions!</h1>
        <p className="space-y-6 py-5 text-base leading-7 text-gray-600">
          You can review or change your answers at any time by selecting the back
          button at the bottom of the screen, or by returning to the first screen of questions
          with the button below
        </p>
        <div className="text-center mb-6">
          <button className="bg-career-blue py-5 text-base leading-7 text-white p-4 rounded-md">Go back to the first page</button>
        </div>
        <p className="space-y-6 py-5 text-base leading-7 text-gray-600">When you are ready use the "Get Interest Results" button to see your Interest Profiler</p>
        <div className="flex justify-between">
          <button className="bg-career-blue px-14 py-5 text-base leading-7 text-white rounded-md">Back</button>
          <button className="bg-career-blue px-1 text-base leading-7 text-white rounded-md">Get Interest Results</button>
        </div>
      </div>
    );
  }
