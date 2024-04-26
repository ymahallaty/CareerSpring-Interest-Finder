"use client";
import React, { useState, useEffect } from "react";
import CustomizedProgressBar from "./CustomizedProgressBar";

export default function ProgressBar() {
  const [progressValue, setProgressValue] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  const handleRadioClick = (questionId, choiceId) => {
    if (!answeredQuestions[questionId]) {
      const increment = 1.67;
      // Update the progress value by the increment
      const newValue = Math.min(progressValue + increment, 100); // Cap the value at 100
      setProgressValue(newValue);

      // Mark the question as answered
      setAnsweredQuestions({ ...answeredQuestions, [questionId]: true });
    }
  };

  return (
    <div className="flex mt-10 items-center flex-col h-screen">
        <CustomizedProgressBar value={progressValue} />
    </div>
  );
}

{/* {/* <div className="flex flex-col mt-4">
<div className="flex flex-col mt-4">
  <h2>Question#1:</h2>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(1, 1)}
    />
    Strongly Dislike
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(1, 2)}
    />
    Dislike
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(1, 3)}
    />
    Unsure
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(1, 4)}
    />
    Like
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(1, 5)}
    />
    Strongly Like
  </label>
</div>
<div className="flex flex-col mt-4">
  <h2>Question#2:</h2>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(2, 1)}
    />
    Strongly Dislike
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(2, 2)}
    />
    Dislike
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(2, 3)}
    />
    Unsure
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(2, 4)}
    />
    Like
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(2, 5)}
    />
    Strongly Like
  </label>
</div>
<div className="flex flex-col mt-4">
  <h2>Question#3:</h2>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(3, 1)}
    />
    Strongly Dislike
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(3, 2)}
    />
    Dislike
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(3, 3)}
    />
    Unsure
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(3, 4)}
    />
    Like
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(3, 5)}
    />
    Strongly Like
  </label>
</div>
<div className="flex flex-col mt-4">
  <h2>Question#4:</h2>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(4, 1)}
    />
    Strongly Dislike
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(4, 2)}
    />
    Dislike
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(4, 3)}
    />
    Unsure
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(4, 4)}
    />
    Like
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(4, 5)}
    />
    Strongly Like
  </label>
</div>
<div className="flex flex-col mt-4">
  <h2>Question#5:</h2>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(5, 1)}
    />
    Strongly Dislike
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(5, 2)}
    />
    Dislike
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(5, 3)}
    />
    Unsure
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(5, 4)}
    />
    Like
  </label>
  <label>
    <input
      type="radio"
      name="choice"
      onClick={() => handleRadioClick(5, 5)}
    />
    Strongly Like
  </label>
</div> *
</div> */}