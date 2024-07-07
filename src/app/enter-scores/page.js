"use client";

import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import riasecStore from "../assessment/stores/riasecStore"

export default function EnterScores() {
  const setArray = riasecStore(state => state.setRiasecArray);
  const router = useRouter();

  const [data, setData] = useState({
    realistic: '',
    investigative: '',
    artistic: '',
    social: '',
    enterprising: '',
    conventional: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const storeRiasecScore = (event) => {
    event.preventDefault();
    setData({
      realistic: '',
      investigative: '',
      artistic: '',
      social: '',
      enterprising: '',
      conventional: ''
    })
    const riasecArray = Object.values(data);
    // console.log('Riasec Data', riasecArray);
    setArray(riasecArray);
    if(riasecArray[0] !== '' 
        && riasecArray[1] !== ''
        && riasecArray[2] !== ''
        && riasecArray[3] !== ''
        && riasecArray[4] !== ''
        && riasecArray[5] !== ''){
          router.push(`/assessment/results?riasec=${riasecArray.join(',')}`)
        }else{
          alert('your answers are incomplete')
        }
    // router.push(`/assessment/results?riasec=${riasecArray.join(',')}`);
  }
  return (
    <div className="pageDiv">
      <h1 className="titleH1">Enter Your Scores Here</h1>
      <h1 className="paragraph">
        If you have previously taken the O*Net Interest Profiler, you can enter
        your interest scores below. You will be able to view and print your
        score report, choose a Job Zone, and view and print careers matching
        your profile.
      </h1>
      <div>
        <div className="grid grid-cols-2 interFont ">
          <label htmlFor="score1">Realistic</label>
          <input
            type="text"
            name="realistic"
            value={data.realistic}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-2-4-2 interFont">
          <label htmlFor="score2">Investigative</label>
          <input
            type="text"
            name="investigative"
            value={data.investigative}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-2-4-2 interFont">
          <label htmlFor="score3">Artistic</label>
          <input
            type="text"
            name="artistic"
            value={data.artistic}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-2-4-2 interFont">
          <label htmlFor="score4">Social</label>
          <input
            type="text"
            name="social"
            value={data.social}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-2-4-2 interFont">
          <label htmlFor="score5">Enterprising</label>
          <input
            type="text"
            name="enterprising"
            value={data.enterprising}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-2-4-2 interFont">
          <label htmlFor="score6">Conventional</label>
          <input
            type="text"
            name="conventional"
            value={data.conventional}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
          />
        </div>
      </div>

      <div className="mt-20 flex justify-between">
        <Link href="/">
          <button className="blueButton">
            Back
          </button>
        </Link>
          <button onClick={storeRiasecScore} className="blueButton">
            Next
          </button>
      </div>
    </div>
  );
}