export default function Page() {
  return (
    <div className="pageDiv">
      <div className="text-center">
      <h1 className="titleH1">
        Great Job! You Answered All Questions!
      </h1>
      </div>
      <p className="space-y-6 py-5 text-base leading-7 text-gray-600">
        You can review or change your answers at any time by selecting the back
        button at the bottom of the screen, or by returning to the first screen
        of questions with the button below
      </p>
      <div className="text-center mb-6">
        <button className="blueB py-5 text-base leading-7 text-white p-4 rounded-md">
          Go back to the first page
        </button>
      </div>
      <p className="space-y-6 py-5 text-base leading-7 text-gray-600">
        When you are ready use the &quot;Get Interest Results&quot; button to
        see your Interest Profiler
      </p>
      <div className="flex justify-between">
        <button className="blueB py-5 text-base leading-7 text-white p-4 rounded-md">
          Back
        </button>
        <button className="blueB py-5 text-base leading-7 text-white p-4 rounded-md">
          Get Interest Results
        </button>
      </div>
    </div>
  );
}
