import React from "react";
import Link from "next/link";

export default function QuizButtons({back, next}){
    return (
        <section className='flex justify-around align-center items-center py-5'>
            <Link href={back} className="blueButton">
                <button>
                    Back
                </button>
            </Link>
            <Link href={next} className="blueButton">
                <button>
                    Next
                </button>
            </Link>
        </section>
       
    )
}