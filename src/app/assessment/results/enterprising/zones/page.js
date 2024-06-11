"use client";

import React from "react";
import { useState,useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import riasecStore from "../../../stores/riasecStore";
import Image from 'next/image';
import sun from "../../../../../../public/assets/sun-solid.svg"

const fetcher = url => axios.get(url).then(res => res.data);

export default function enterprising() {

    const riasec = riasecStore(state => state.riasecArray);
    const [zone, setZone] = useState(3);
    const [careers, setCareers] = useState([]);

    const url = `https://services.onetcenter.org/ws/mnm/interestprofiler/careers?area=Enterprising&job_zone=${zone}`;
    const fetchURL = `../../../assessment/api?url=${encodeURIComponent(url)}`;
    const { data, error } = useSWR(fetchURL, fetcher);

    useEffect(() => {
        if (error) {
            console.error('Failed to load:', error);
        }

        if (data) {
            setCareers(data.career);
        }
    }, [data, error]);

    const changeZone = (newZone) => {
        setZone(newZone);
    }


    return (
        <div className="pageDiv">
            <div className="text-center">
            <h1 className="titleH1">All Enterprising Careers Job Zone {zone}</h1>
            </div>
            
            <h1 className="text-xl m-3">Click to change your preferred job zone: </h1>
            <div className="flex flex-row justify-center ">
                <button className="orangeBut" onClick={() => changeZone(3)}>3</button>
                <button className="orangeBut" onClick={() => changeZone(4)}>4</button>
                <button className="orangeBut" onClick={() => changeZone(5)}>5</button>
            </div>
            <h1 className="text-xl mt-10">Enterprising: {riasec[1]} </h1>
            <h1 className="text-xl mt-10"> Enterprising careers that fit your preparation level:</h1>
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