import React from "react";
import Link from "next/link";

export default function QuizButtons({back, next}){
    return (
        <section className='flex justify-around align-center items-center py-5'>
            <Link href={back} className="bg-sky-600 w-2/12 h-14 rounded p-2.5">
                <button>
                    Back
                </button>
            </Link>
            <Link href={next} className="bg-sky-600 w-2/12 h-14 rounded p-2.5">
                <button>
                    Next
                </button>
            </Link>
        </section>
       
    )
}