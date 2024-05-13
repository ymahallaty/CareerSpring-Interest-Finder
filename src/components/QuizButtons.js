import React from "react";
import Link from "next/link";

export default function QuizButtons({back, next}){
    return (
        <section className='flex justify-around align-center items-center py-5'>
            <Link href={back} className="blueButton">
                {/* <button className="mt-10 w-1/4 h-14 text-base px-4 py-2 bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer">
                    Back
                </button> */}
                <button>
                    Back
                </button>
            </Link>
            <Link href={next} className="blueButton">
                {/* <button className="mt-10 w-1/4 h-14 text-base px-4 py-2 bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer">
                    Next
                </button> */}
                <button>
                    Next
                </button>
            </Link>
        </section>
       
    )
}