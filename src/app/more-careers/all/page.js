"use client";

import React, {Suspense} from "react";
import { useState,useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import riasecStore from "../../assessment/stores/riasecStore"
import Image from 'next/image';
import sun from "../../../../public/assets/sun-solid.svg"

const fetcher = async(url) => {
    try{
      const res = await axios.get(url)
      return res.data
    }catch(err){
      console.error(err)
    }  
}

function AllCareers() {

    const searchParams = useSearchParams();
    const area = searchParams.get('area');
    const riasecString = searchParams.get('riasec');
    const riasec = riasecString.split(',').map(Number);
    

    // const riasec = riasecStore(state => state.riasecArray);
    const [zone, setZone] = useState(searchParams.get('job_zone'));
    const [careers, setCareers] = useState([]);

    const sendToRoute = `/assessment/api/more-careers?area=${area}&job_zone=${zone}`
    const { data, error } = useSWR(sendToRoute, fetcher);

    // console.log('Data', data);

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
            
            <h1 className="text-xl m-3 interFont">Click to change your preferred job zone: </h1>
            <div className="flex flex-row justify-center">
                <button className="orangeBut" onClick={() => changeZone(3)}>3</button>
                <button className="orangeBut" onClick={() => changeZone(4)}>4</button>
                <button className="orangeBut" onClick={() => changeZone(5)}>5</button>
            </div>
            <h1 className="text-xl mt-10 interFont">{area}: 
              {area == 'Realistic' && riasec[0]}
              {area == 'Investigative' && riasec[1]}
              {area == 'Artistic' && riasec[2]}
              {area == 'Social' && riasec[3]}
              {area == 'Enterprising' && riasec[4]}
              {area == 'Conventional' && riasec[5]}
            </h1>
            <h1 className="text-xl mt-10 interFont"> {area} careers that fit your preparation level:</h1>
            <div className="icon-text">
                <Image src={sun} alt="bright outlook" width={33} height={33}/>
                = Bright Outlook   
            </div>
            <div className="careers-container">
                {careers.map(career => (
                    <div key={career.code} className="career-card">
                    <a href={`https://www.mynextmove.org/profile/summary/${career.code}`} target="_blank" rel="noopener noreferrer">{career.title} </a>
                    {career.tags.bright_outlook && (<Image src={sun} alt="bright outlook" width={33} height={33}/>)}
                    </div>
                ))}
            </div>
            <Link href={`/more-careers?riasec=${riasecString}&job_zone=${zone}`}> <button className="blueButton">Back</button> </Link>
        </div>
    )
}

const Page = () => {
    return (
      <Suspense>
        <AllCareers/>
      </Suspense>
    )
  }
  
export default Page