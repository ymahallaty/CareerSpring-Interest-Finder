"use client"
// is the use client actually necessary since there are no state

import React from "react";

export default function Questions({answers, clickRadioBtn, writtenQuestion,question, pickYourAnswerArray}){
    
    return (
        <div className="py-1.5 px-9 interFont [overflow-anchor:none]">
            {/* text-[18px] */}
        <form className="mx-auto [overflow-anchor:none]">
            <fieldset>
                <legend className="text-blue-900 font-bold text-[20px] [overflow-anchor:none]">
                    {writtenQuestion}
                </legend>
    
                <section className="flex leading-10 gap-8 justify-start items-center text-[16px] w-[108%] pt-2.5 pb-1.5 [overflow-anchor:none]  ">
                    {
                      !pickYourAnswerArray? null: pickYourAnswerArray.map((ele, index) => {
                        return (
                            <div className=" [overflow-anchor:none]" key={index + 1}>
                                <label className="flex gap-[0.3125rem] answer-option-labels [overflow-anchor:none]">
                                    <input
                                        onChange={() => clickRadioBtn(question ,ele.value)}
                                        type="radio" 
                                        value={ele.value}
                                        checked={answers[question] === ele.value}
                                        />
                                        <span>{ele.name}</span>
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