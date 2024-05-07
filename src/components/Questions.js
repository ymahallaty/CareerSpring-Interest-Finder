"use client"

import React from "react";

export default function Questions({answers, clickRadioBtn, writtenQuestion, question}){
    
    return (
        <div className="py-1.5">
        <form className="mx-auto text-[18px]">
            <fieldset>
                <legend className="text-blue-900 font-bold">
                    {writtenQuestion}
                </legend>
    
                <section className="flex leading-10 gap-4 justify-center items-center ">
                    <div>
                        <label className="answer-option-labels">
                            <input 
                                // name={questionNum} 
                                onChange={() => clickRadioBtn(question ,"1")} 
                                type="radio" 
                                value="1"
                                checked={answers[question] === "1"}
                                />
                                Strongly Dislike
                        </label>
                    </div>
                    <div>
                        <label className="answer-option-labels">
                            <input 
                                // name={questionNum}
                                onChange={() => clickRadioBtn(question ,"2")} 
                                type="radio" 
                                value="2"
                                checked={answers[question]=== "2"}
                                />
                                Dislike
                        </label>
                    </div>
                    <div>
                        <label className="answer-option-labels">
                            <input 
                                // name={questionNum}
                                onChange={() => clickRadioBtn(question, "3") } 
                                type="radio" 
                                value="3"
                                checked={answers[question] === "3"}
                                />
                                Unsure
                        </label>
                    </div>
                    <div>
                        <label className="answer-option-labels">
                            <input 
                                // name={questionNum}
                                onChange={() => clickRadioBtn(question ,"4")} 
                                type="radio" 
                                value="4"
                                checked={answers[question] === "4"}
                                />
                                Like
                        </label>
                    </div>
                    <div>
                        <label className="answer-option-labels">
                            <input 
                                // name={questionNum}
                                onChange={() => {clickRadioBtn(question ,"5")}} 
                                type="radio" 
                                value="5"
                                checked={answers[question] === "5"}
                                />
                                Strongly Like
                        </label>
                    </div>
                    
                </section>
            </fieldset>
        </form>

    </div> 

    )
}