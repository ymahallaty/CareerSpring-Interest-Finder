"use client"

import React from "react";
import {useState} from "react"


export default function Questions({answers, clickRadioBtn}){

    // const answers = props.answers;
    // const clickRadioBtn = props.clickRadioBtn;
    
    return (
        <div className = "bg-white text-black text-center pt-10 pb-8 shadow-xl max-w-fit m-auto mt-4">
            {/* <img className=" w-1/4" src={careerspringlogo} alt="careerspring logo"/> */}
            <h1 className = "text-[44px]">Career Interest Finder Questions</h1>
            <p>(Progressive Bar)</p>
            {/* lg:w-2/4 */}
            <section className="text-left m-auto md:w-3/4 py-1.5 px-9  ">
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
                        <fieldset>
                            <legend className="text-blue-800 font-bold">
                                Question 2: Lay brick or tile
                            </legend>
                            {/* data container */}
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
                        </fieldset>
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