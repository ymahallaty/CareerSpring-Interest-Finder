"use client"

import React from "react";
import { useState } from "react";
// import careerspringlogo from "../../resources/careerspring-logo.png"

let nextId = 0;

export default function QuizPage(){
    const [tracking, setTracking] = useState([])
    const [answers, setAnswers] = useState('3');

    const clickRadioBtn = (e) =>{
        console.log('clicked')
        console.log("all the answers: ", e.target)
        console.log(e.target.value)
        // let currentAnswer = { 
        //     // 'name': e.target.name,
        //     'answer': e.target.value
        // }

        let currentAnswer = e.target.value; 
        let currentQuestionType = e.target.name; 

        // setAnswers(() => {
        //     return {
        //         "name": e.target.name,
        //         "answer": e.target.value
        //     }
        // })
        setAnswers(() => currentAnswer)
        trackingAnswers(answers, currentQuestionType)
        
    }

    function trackingAnswers(getAnswer, getQuestionType){
        // setTracking([...tracking, {id: nextId++, answer: answers}])
        let createObj = {
            "name": getQuestionType,
            "answer": getAnswer
        }
    
    // Check if any object in the tracking array matches the new object
    // let exists = tracking.some(obj => obj.name === createObj.name && obj.answer === createObj.answer);
    // if (exists) {
    //     console.log('The object already exists in the tracking array.');
    // } else {
    //     console.log('The object does not exist in the tracking array.');
    //     setTracking(prevTracking => [...prevTracking, createObj]);
    // }

        console.log('object: ', createObj)
        setTracking((initalTracking) => {
            // if(tracking.includes({"questionNum": getQuestionType})){
            //     console.log('yes')
            // }
            console.log('testing:', initalTracking)
            console.log('testing-2: ', tracking)
            console.log(initalTracking.includes(createObj, getAnswer))
            // if(initalTracking.includes(createObj, getQuestionType) && initalTracking.includes(createObj, getAnswer)){
            //     console.log('you already have it')

            // }
            return [...tracking, {"answer": getAnswer, "questionNum": getQuestionType}]
        })
    }
    
    console.log("current answer: ", answers)
    console.log('current tracking answers: ', tracking)

    return (
        
        <div className = "bg-white text-black text-center pt-10 pb-8 shadow-xl max-w-fit m-auto mt-4">
            {/* <img className=" w-1/4" src={careerspringlogo} alt="careerspring logo"/> */}
            <h1 className = "text-[44px]">Career Interest Finder Questions</h1>
            <p>(Progressive Bar)</p>
            {/* lg:w-2/4 */}
            <section className="text-left m-auto md:w-3/4 py-1.5  ">
                <div className="py-1.5">
                    <p className="text-[20px] ">Read each question carefully and decide how you would feel about doing each type of work:
                    </p>
                </div>
                <div className="py-1.5">
                    <form className="mx-auto">
                        <fieldset>
                            <legend className="text-blue-800 font-bold">
                                Question 1: Build kitchen cabinets
                            </legend>
                            {/* data container */}
                            <section className="flex leading-10 gap-4 justify-center items-center ">
                                <div>
                                    <label className="answer-option-labels">
                                        <input 
                                            name="question-1" 
                                            onChange={clickRadioBtn} 
                                            type="radio" 
                                            value="1"
                                            checked={answers === "1"}
                                            />
                                            Strongly Dislike
                                    </label>
                                </div>
                                <div>
                                    <label className="answer-option-labels">
                                        <input 
                                            name="question-1"
                                            onChange={clickRadioBtn} 
                                            type="radio" 
                                            value="2"
                                            checked={answers === "2"}
                                            />
                                            Dislike
                                    </label>
                                </div>
                                <div>
                                    <label className="answer-option-labels">
                                        <input 
                                            name="question-1"
                                            onChange={clickRadioBtn} 
                                            type="radio" 
                                            value="3"
                                            checked={answers === "3"}
                                            />
                                            Unsure
                                    </label>
                                </div>
                                <div>
                                    <label className="answer-option-labels">
                                        <input 
                                            name="question-1"
                                            onChange={clickRadioBtn} 
                                            type="radio" 
                                            value="4"
                                            checked={answers === "4"}
                                            />
                                            Like
                                    </label>
                                </div>
                                <div>
                                    <label className="answer-option-labels">
                                        <input 
                                            name="question-1"
                                            onChange={clickRadioBtn} 
                                            type="radio" 
                                            value="5"
                                            checked={answers === "5"}
                                            />
                                            Strongly Like
                                    </label>
                                </div>
                                
                            </section>
                        </fieldset>
                        {/* <fieldset>
                            <legend>
                                Question 2: Lay brick or tile
                            </legend>

                            <section>
                                <div>
                                    <label className="answer-option-labels">
                                        <input 
                                            name="question2" 
                                            onChange={clickRadioBtn} 
                                            type="radio" 
                                            value="1"
                                            checked={answers === "1"}
                                            />
                                            Strongly Dislike
                                    </label>
                                </div>
                                <div>
                                    <label className="answer-option-labels">
                                        <input 
                                            name="question2"
                                            onChange={clickRadioBtn} 
                                            type="radio" 
                                            value="2"
                                            checked={answers === "2"}
                                            />
                                            Dislike
                                    </label>
                                </div>
                                <div>
                                    <label className="answer-option-labels">
                                        <input 
                                            name="question2"
                                            onChange={clickRadioBtn} 
                                            type="radio" 
                                            value="3"
                                            checked={answers === "3"}
                                            />
                                            Unsure
                                    </label>
                                </div>
                                <div>
                                    <label className="answer-option-labels">
                                        <input 
                                            name="question2"
                                            onChange={clickRadioBtn} 
                                            type="radio" 
                                            value="4"
                                            checked={answers === "4"}
                                            />
                                            Like
                                    </label>
                                </div>
                                <div>
                                    <label className="answer-option-labels">
                                        <input 
                                            name="question2"
                                            onChange={clickRadioBtn} 
                                            type="radio" 
                                            value="5"
                                            checked={answers === "5"}
                                            />
                                            Strongly Like
                                    </label>
                                </div>
                                
                            </section>
                        </fieldset> */}

                    {/* 
                        <fieldset></fieldset>
                        <fieldset></fieldset>
                        <fieldset></fieldset>
                        <fieldset></fieldset>
                        <fieldset></fieldset>
                        <fieldset></fieldset>
                        <fieldset></fieldset>
                        <fieldset></fieldset>
                        <fieldset></fieldset>
                        <fieldset></fieldset> */}
                    </form>

                </div>
            </section>
            <section className='flex justify-around align-center items-center py-5'>
                <button className="bg-sky-600 w-2/12 h-14 rounded p-2.5">Back</button>
                <button className="bg-sky-600 w-2/12 h-14 rounded p-2.5">Next</button>
            </section>
            <section>
              <p className="text-[20px]">Copyright © 2023 – CareerSpring. All rights reserved. Registered 501(c)(3), EIN 85-1275392</p>  
            </section>
            
        </div>
    )
}