"use client"
import { useState, useEffect } from "react";
import { Suspense } from "react";
import HorizontalBarChart from "../../../../../components/HorizontalBarChart"
import JobDiv from "../../../../../components/JobDiv";
// import renderAnswersStore from "../../../stores/renderAnswersStore";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";


// const fetcher = url => axios.get(url).then(res => res.data);

const fetcher = async(url) => {
    try{
    //   console.log('show the url: ', url)
      const res = await axios.get(url)
    //   console.log("here is res: ", res)
      return res.data
    }catch(err){
      console.error(err)
    }
  
  }

function Medium() {


    // const renderAnswers = renderAnswersStore((state) => state.answersObject)
    // console.log('here are the renderAnswers: ', renderAnswers)
    // const stringAnswers =  Object.values(renderAnswers).toString().replaceAll(",", "");

    function returnStrAnswers(){
        // const localURL = new URL(window.location.href)
        // const localParams = localURL.searchParams
        // const riasecString = localParams.get('riasec');
        // const riasec = riasecString.split(',').map(Number);

        // const showParams = useSearchParams();
        // const riaSecString =  showParams.get('riasec')
        // const riasec = riaSecString.split(',').map(Number);
        // console.log('riasec: ', riasec)
  
        const testingAnswers= '544544453444454335534444255435443445545444445335544444454555'
        // return `/assessment/api/medium-prep?riasec=${riasec}`
        return `/assessment/api/medium-prep?answers=${testingAnswers}`
        // return `/assessment/api/medium-prep?answers=${stringAnswers}`
    
      } 
    
    const testingAnswers= '544544453444454335534444255435443445545444445335544444454555'
    const returnAnswers = `/assessment/api/medium-prep?answers=${testingAnswers}`

    // const sendToRoute = returnStrAnswers()
    const sendToRoute = returnAnswers
    const { data, error } = useSWR(sendToRoute, fetcher);
    
    // console.log('here is the data: ', data)

  /*
    const oNetAnswerApi = `https://services.onetcenter.org/ws/mnm/interestprofiler/careers?answers=${objValuesToString(renderAnswersStore().answersObject)}`
    console.log(oNetAnswerApi)
  */
    if (error) return <div>Failed to load</div>;
    if (!data) return null;
  
    // console.log('here is the data: ', data)

    return (
        <>
            <div className="pageDiv">
                <h1 className="titleH1">
                    Job Zone 3: Medium Job Preparation
                </h1>
                <h1 className="text-xl m-3 interFont">Click to change your preferred job zone: </h1>
                <div className="flex flex-row justify-center ">
                    <Link href="/assessment/job-zones/job-zone-3/medium-prep"> <button className="orangeBut">3</button></Link>
                    <Link href="/assessment/job-zones/job-zone-4/medium-prep"><button className="orangeBut">4</button></Link>
                    <Link href="/assessment/job-zones/job-zone-5/medium-prep">  <button className="orangeBut">5</button></Link>
                </div>
                <div className="flex flex-row justify-center mt-10 mb-10">
                    <img className="w-56" src="/assets/Hexagon.png" />
                </div>
                <HorizontalBarChart />
                <h1 className="mt-3 interFont">Here are your results related to your Interests Profile in your chosen Job Zone! Choose a job zone to see jobs that correlate with one another. Click on a career to learn more about each role.</h1>
                <h1 className="textB">
                    <div className="flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="#23619a" d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>= Good Fit
                    <svg xmlns="http://www.w3.org/2000/svg" width="30"
                        height="30" viewBox="0 0 576 512"><path fill="#23619a" d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" /></svg> = Great Fit
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="#23619a" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>= Best Fit
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#ff9e1b" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" /></svg>= Bright Outlook
                    </div>
                </h1>


                <JobDiv name="Travel" link="https://www.mynextmove.org/profile/summary/41-3041.00" />

                <JobDiv name="Concierges" link="https://www.mynextmove.org/profile/summary/39-6012.00" />


                <div className="flex justify-between pt-10">
                    <Link href="/assessment/job-zones/job-zone-3">
                        <button className="blueButton">
                            Back
                        </button>
                    </Link>
                    <Link href="/assessment/job-zones/job-zone-3/medium-prep/moreCareers">
                        <button className="blueButton">
                            Find More Careers
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

const Page = () => {
    return (
      <Suspense>
        <Medium/>
      </Suspense>
    )
  }
//   http://localhost:3001/assessment/email-form?riasec=34,31,35,33,31,34
  export default Page

  // PROMETHEUS/justcus/CareerSpring-Interest-Finder/src/app/assessment/job-zones/job-zone-3/medium-prep/page.js