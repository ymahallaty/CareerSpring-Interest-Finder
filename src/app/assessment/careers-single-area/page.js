"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Characteristic from '../../../components/Characteristic';
import JobZone from '../../../components/JobZone';

export default function Page() {
  // const [selectedData, setSelectedData] = useState([]);

  // Function to handle receiving data from Characteristic component
  // const handleDataSelected = (data) => {
  //   setSelectedData(data);
  // };

  return (
    // <div className='titleH1'>
    //   <div>
    //     All <Characteristic onData={handleDataSelected} /> careers Job Zone <JobZone />
    //   </div>
    //   {/* Display the selected data */}
    //   {selectedData.map((career, index) => (
    //     <div key={index}>
    //       {career.title}, {career.iconName}, {career.interest}, {career.jobZone}
    //     </div>
    //   ))}
    // </div>
    <div>
      <ul>
          <li className="underline"><Link href="/assessment/results/career?area=Realistic">Realistic</Link></li>
          <li className="underline"><Link href="/assessment/results/career?area=Investigative">Investigative</Link></li>
          <li className="underline"><Link href="/assessment/results/career?area=Artistic">Artistic</Link></li>
          <li className="underline"><Link href="/assessment/results/career?area=Social">Social</Link></li>
          <li className="underline"><Link href="/assessment/results/career?area=Enterprising">Enterprising</Link></li>
          <li className="underline"><Link href="/assessment/results/career?area=Conventional">Conventional</Link></li>
      </ul>
    </div>
  );
}
