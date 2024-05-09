"use client"

import React from "react";
import { useState } from "react";
import Questions from "../../components/Questions.js"
import QuizButtons from "../../components/QuizButtons.js"

export default function CareerAssessment(){
// this is where the answers to the questions are stored.
    const [answers, setAnswers] = useState("");

    const clickRadioBtn = (question, value) =>{

        setAnswers((initalAnswers) => {
            return {
                ...initalAnswers,
                [question]: value
            }
        })

    }
    console.log(answers)

    return (
        <div className = "bg-white text-black text-center pt-10 pb-8 shadow-xl max-w-fit m-auto mt-4" >
            {/* <img className=" w-1/4" src={careerspringlogo} alt="careerspring logo"/> */}
            <h1 className = "text-[44px]">Career Interest Finder Questions</h1>
            <p>(Progressive Bar)</p>
            {/* lg:w-2/4 */}
            
            <section className="text-left m-auto md:w-3/4 py-1.5 px-9  ">
                <div className="py-1.5">
                    <p className="text-[20px] ">Read each question carefully and decide how you would feel about doing each type of work:
                    </p>
                </div>
                <Questions
                    answers ={answers}
                    question = "question1"
                    clickRadioBtn= {clickRadioBtn}
                    writtenQuestion= "Question 1: Build kitchen cabinets"
                />
                <Questions
                    answers ={answers}
                    question = "question2"
                    clickRadioBtn= {clickRadioBtn}
                    writtenQuestion= "Question 2: Lay brick or tile"
                />
                <Questions
                    answers ={answers}
                    clickRadioBtn= {clickRadioBtn}
                    question = "question3"
                    writtenQuestion= "Question 3: Develop a new medicine"
                />
                <Questions
                    answers ={answers}
                    clickRadioBtn= {clickRadioBtn}
                    question = "question4"
                    writtenQuestion= "Question 4: Study ways to reduce water pollution"
                />
                <Questions
                    answers ={answers}
                    clickRadioBtn= {clickRadioBtn}
                    question = "question5"
                    writtenQuestion= "Question 5: Write books or plays"
                />
                <Questions
                    answers ={answers}
                    clickRadioBtn= {clickRadioBtn}
                    question = "question6"
                    writtenQuestion= "Question 6: Play a musical instrument"
                />
                <Questions
                    answers ={answers}
                    clickRadioBtn= {clickRadioBtn}
                    question = "question7"
                    writtenQuestion= "Question 7: Teach an individual an exercise routine"
                />
                <Questions
                    answers ={answers}
                    clickRadioBtn= {clickRadioBtn}
                    question = "question8"
                    writtenQuestion= "Question 8: Help people with personal or emotional problems"
                />
            </section>

            <QuizButtons/>
            <section>
              <p className="text-[20px]">Copyright © 2023 – CareerSpring. All rights reserved. Registered 501(c)(3), EIN 85-1275392</p>  
            </section>
            
        </div>  
    )
}