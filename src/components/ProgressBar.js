"use client";
import React, { useState, useEffect } from "react";
import CustomizedProgressBar from "./CustomizedProgressBar";

export default function ProgressBar() {
  const [progressValue, setProgressValue] = useState(0);

  const handleButtonClick = () => {
    const newValue = Math.min(progressValue + 1.67, 100); // Cap the value at 100
    setProgressValue(newValue);
  };

  return (
    <>
      <div className="flex mt-10 items-center flex-col">
        <CustomizedProgressBar value={progressValue} />
        <button className="m-20 p-5 bg-slate-400 rounded" onClick={handleButtonClick}>{/*testing butt*/}
          Increase
        </button>
      </div>
    </>
  );
}
