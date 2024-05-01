"use client"

import React from "react";
import {useState} from "react"


export default function Questions({answers, clickRadioBtn, writtenQuestion, questionNum}){

    // const answers = props.answers;
    // const clickRadioBtn = props.clickRadioBtn;
    
    return (
        <div className="py-1.5">
        <form className="mx-auto text-[18px]">
            <fieldset>
                <legend className="text-blue-900 font-bold">
                    {writtenQuestion}
                </legend>
                {/* data container */}
                <section className="flex leading-10 gap-4 justify-center items-center ">
                    <div>
                        <label className="answer-option-labels">
                            <input 
                                name={questionNum} 
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
                                name={questionNum}
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
                                name={questionNum}
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
                                name={questionNum}
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
                                name={questionNum}
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
                <legend className="text-blue-800 font-bold">
                    Question 2: Lay brick or tile
                </legend>
                <section className="flex leading-10 gap-4 justify-center items-center ">
                    <div>
                        <label className="answer-option-labels">
                            <input 
                                name="question-2" 
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
                                name="question-2"
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
                                name="question-2"
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
                                name="question-2"
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
                                name="question-2"
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

    )
}