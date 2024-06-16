"use client";

import React from "react";
import { useState,useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import riasecStore from "../../stores/riasecStore"
import Image from 'next/image';
import sun from "../../../../../public/assets/sun-solid.svg"

const fetcher = async(url) => {
    try{
      const res = await axios.get(url)
      return res.data
    }catch(err){
      console.error(err)
    }  
}

export default function Career() {

    const searchParams = useSearchParams();
    const area = searchParams.get('area');

    const riasec = riasecStore(state => state.riasecArray);
    const [zone, setZone] = useState(3);
    const [careers, setCareers] = useState([]);

    const sendToRoute = `/assessment/api/careers?area=${area}&job_zone=${zone}`
    const { data, error } = useSWR(sendToRoute, fetcher);

    console.log('Data', data);

    useEffect(() => {
        if (data) {
            setCareers(data.career);
        }
    }, [data]);

    const changeZone = (newZone) => {
        setZone(newZone);
    }


    return (
        <div className="pageDiv">
            <div className="text-center">
            <h1 className="titleH1">All {area} Careers Job Zone {zone}</h1>
            </div>
            
            <h1 className="text-xl m-3">Click to change your preferred job zone: </h1>
            <div className="flex flex-row justify-center ">
                <button className="orangeBut" onClick={() => changeZone(3)}>3</button>
                <button className="orangeBut" onClick={() => changeZone(4)}>4</button>
                <button className="orangeBut" onClick={() => changeZone(5)}>5</button>
            </div>
            <h1 className="text-xl mt-10">{area}: {riasec[1]} </h1>
            <h1 className="text-xl mt-10"> {area} careers that fit your preparation level:</h1>
            <div className="icon-text">
                <Image src={sun} alt="bright outlook" width={33} height={33}/>
                = Bright Outlook   
            </div>
            <div className="careers-container">
                {careers.map(career => (
                    <div key={career.code} className="career-card">
                    <a href={career.href}>{career.title}</a>
                    {career.tags.bright_outlook && (<Image src={sun} alt="bright outlook" width={33} height={33}/>)}
                    </div>
                ))}
            </div>
            <Link href="/"> <button className="blueButton">Back</button> </Link>
        </div>
    )
}