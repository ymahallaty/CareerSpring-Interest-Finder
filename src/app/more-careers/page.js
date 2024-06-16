"use client";

import React from "react";
import { useState,useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import riasecStore from "../assessment/stores/riasecStore";
import Image from 'next/image';
import HighestScore from "../../components/HighestScore";
import HorizontalBarChart from "../../components/HorizontalBarChart";
import Table from "../../components/Table";

const fetcher = async(url) => {
    try{
      const res = await axios.get(url)
      return res.data
    }catch(err){
      console.error(err)
    }  
}

export default function moreCareers() {

    const searchParams = useSearchParams();
    const area = searchParams.get('area');
    const riasecString = searchParams.get('riasec');

    // const riasec = riasecStore(state => state.riasecArray);
    const [zone, setZone] = useState(searchParams.get('job_zone'));
    const [careers, setCareers] = useState([]);

    const sendToRoute = `/assessment/api/more-careers?area=${area}&job_zone=${zone}`
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
            <h1 className="titleH1">Find More Careers In A Single Area: Job Zone {zone}</h1>
            </div>
            <HighestScore />
            <h1 className="text-xl mt-10">Select the interest area below that you want to explore. Your Interest Profiler results are shown.</h1>
            <div>
              <ul>
                  <li className="underline"><Link href={`/more-careers/all?riasec=${riasecString}&area=Realistic&job_zone=${zone}`}>Realistic</Link></li>
                  <li className="underline"><Link href={`/more-careers/all?riasec=${riasecString}&area=Investigative&job_zone=${zone}`}>Investigative</Link></li>
                  <li className="underline"><Link href={`/more-careers/all?riasec=${riasecString}&area=Artistic&job_zone=${zone}`}>Artistic</Link></li>
                  <li className="underline"><Link href={`/more-careers/all?riasec=${riasecString}&area=Social&job_zone=${zone}`}>Social</Link></li>
                  <li className="underline"><Link href={`/more-careers/all?riasec=${riasecString}&area=Enterprising&job_zone=${zone}`}>Enterprising</Link></li>
                  <li className="underline"><Link href={`/more-careers/all?riasec=${riasecString}&area=Conventional&job_zone=${zone}`}>Conventional</Link></li>
              </ul>
            </div>
            <img src="/assets/Hexagon.png" alt="interests-hexagon" />
            <div className="mb-10">
                <HorizontalBarChart />
            </div>
            <Table />
            <Link href={`/careers?riasec=${riasecString}`}> <button className="blueButton">Back</button> </Link>
        </div>
    )
}
