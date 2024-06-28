"use client";

import React, {Suspense} from "react";
import { useState,useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import Image from 'next/image';
import sun from "../../../public/assets/sun-solid.svg";
import goodFit from "../../../public/assets/star-regular.svg";
import greatFit from "../../../public/assets/star-half.svg";
import bestFit from "../../../public/assets/star-solid.svg";
import HighestScore from "../../components/HighestScore"
import HorizontalBarChart from "../../components/HorizontalBarChart";
import {useSearchParams} from "next/navigation";

const fetcher = async(url) => {
    try{
      const res = await axios.get(url)
      return res.data
    }catch(err){
      console.error(err)
    }  
}

function Careers() {

    // const riasec = riasecStore(state => state.riasecArray);

    const searchParams = useSearchParams();
    const riasecString = searchParams.get('riasec');
    const riasec = riasecString.split(',').map(Number);

    const [zone, setZone] = useState(3);
    const [careers, setCareers] = useState([]);

    const sendToRoute = `/assessment/api/careers?Realistic=${riasec[0]}&Investigative=${riasec[1]}&Artistic=${riasec[2]}&Social=${riasec[3]}&Enterprising=${riasec[4]}&Conventional=${riasec[5]}&job_zone=${zone}`
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
            <h1 className="titleH1">
                {zone == 3 && <div className="interFont">Job Zone 3: Medium Job Preparation</div>}
                {zone == 4 && <div className="interFont">Job Zone 4: High Job Preparation</div>}
                {zone == 5 && <div className="interFont">Job Zone 5: Extensive Job Preparation</div>}
            </h1>
            </div>
            
            <h1 className="text-xl interFont">Click to change your preferred job zone: </h1>
            <div className="flex flex-row justify-center ">
                <button className="orangeBut interFont mb-5" onClick={() => changeZone(3)}>3</button>
                <button className="orangeBut interFont mb-5" onClick={() => changeZone(4)}>4</button>
                <button className="orangeBut interFont mb-5" onClick={() => changeZone(5)}>5</button>
            </div>
            <HighestScore />
            <div>
                {/* <Image src="/assets/Hexagon.png" alt="interests-hexagon" width={33} height={33}/> */}
                <img src="/assets/Hexagon.png" alt="interests-hexagon" />
            </div>
            <HorizontalBarChart />
            <h1 className="mt-3 paragraph text-xl">
                Here are your results related to your Interests Profile in your chosen Job Zone! Choose a job zone to see jobs that correlate with one another. Click on a career to learn more about each role.
            </h1>
            <div className="icon-text">
                <Image src={goodFit} alt="good fit" width={33} height={33}/>= Good Fit
                <Image src={greatFit} alt="great fit" width={33} height={33}/>= Great Fit
                <Image src={bestFit} alt="best fit" width={33} height={33}/>= Best Fit
                <Image src={sun} alt="bright outlook" width={33} height={33}/>= Bright Outlook   
            </div>
            <div className="careers-container">
                {careers.map(career => (
                    <div key={career.code} className="career-card">
                    <a href={`https://www.mynextmove.org/profile/summary/${career.code}`} target="_blank" rel="noopener noreferrer">{career.title} </a>
                    {career.tags.bright_outlook && (<Image src={sun} alt="bright outlook" width={33} height={33}/>)}
                    {career.fit == 'Good' && (<Image src={goodFit} alt="good fit" width={33} height={33}/>)}
                    {career.fit == 'Great' && (<Image src={greatFit} alt="great fit" width={33} height={33}/>)}
                    {career.fit == 'Best' && (<Image src={bestFit} alt="best fit" width={33} height={33}/>)}
                    </div>
                ))}
            </div>
            <div className="button-container">
                <Link href={`/assessment/job-zones?riasec=${riasecString}`}> 
                    <button className="blueButton">Back</button>
                </Link>
                <Link href={`/more-careers?riasec=${riasecString}&job_zone=${zone}`}> 
                    <button className="blueButton">Find More Careers</button> 
                </Link>
            </div>
        </div>
    )
}

const Page = () => {
    return (
      <Suspense>
        <Careers/>
      </Suspense>
    )
  }
  
  export default Page