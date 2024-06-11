"use client";

import React from "react";
import { useState,useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import riasecStore from "../../../stores/riasecStore"

const fetcher = url => axios.get(url).then(res => res.data);

export default function Artistic() {

    const riasec = riasecStore(state => state.riasecArray);
    const [zone, setZone] = useState(3);
    const [careers, setCareers] = useState([]);

    const url = `https://services.onetcenter.org/ws/mnm/interestprofiler/careers?area=Artistic&job_zone=${zone}`;
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
            <h1 className="titleH1">All Artistic Careers Job Zone {zone}</h1>
            </div>
            
            <h1 className="text-xl m-3">Click to change your preferred job zone: </h1>
            <div className="flex flex-row justify-center ">
                <button className="orangeBut" onClick={() => changeZone(3)}>3</button>
                <button className="orangeBut" onClick={() => changeZone(4)}>4</button>
                <button className="orangeBut" onClick={() => changeZone(5)}>5</button>
            </div>
            <h1 className="text-xl mt-10">Artistic: {riasec[1]} </h1>
            <h1 className="text-xl mt-10"> Artistic careers that fit your preparation level:</h1>
            <div>
            <ul>
                {careers.map(career => (
                <li key={career.code}>
                    <div>
                    <a href={career.href}>{career.title}</a>
                    {career.tags.bright_outlook ? (<p>🌞</p>) : null}
                    </div>
                </li>
                ))}
            </ul>
            </div>
            <Link href="/"> <button className="blueButton">Back</button> </Link>
        </div>
    )
}