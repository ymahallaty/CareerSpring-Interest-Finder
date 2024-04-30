"use client"

import React from "react";
import { useState } from "react";
// import careerspringlogo from "../../resources/careerspring-logo.png"
import Questions from "../../components/Questions.js"
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
        <>
            <Questions
                answers ={answers}
                clickRadioBtn= {clickRadioBtn}
            />
        </>
    )
}