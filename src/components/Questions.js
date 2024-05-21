"use client"

import React from "react";

export default function Questions({answers, clickRadioBtn, writtenQuestion,question, pickYourAnswerArray}){
    
    return (
        <div className="py-1.5 px-9">
            {/* text-[18px] */}
        <form className="mx-auto">
            <fieldset>
                <legend className="text-blue-900 font-bold text-[20px]">
                    {writtenQuestion}
                </legend>
    
                <section className="flex leading-10 gap-8 justify-center items-center text-[16px] w-[108%] pt-2.5 pb-1.5  ">
                    {
                      !pickYourAnswerArray? null: pickYourAnswerArray.map((ele, index) => {
                        return (
                            <div key={index + 1}>
                                <label className="answer-option-labels">
                                    <input
                                        onChange={() => clickRadioBtn(question ,ele.value)}
                                        type="radio" 
                                        value={ele.value}
                                        checked={answers[question] === ele.value}
                                        />
                                        {ele.name}
                                </label>
                            </div>

                        )
                      })     
                    }                   
                </section>
            </fieldset>
        </form>

    </div> 

    )
}