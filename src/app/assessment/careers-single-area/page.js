"use client";
import React, { useState } from 'react';
import Characteristic from '../../../components/Characteristic';
import JobZone from '../../../components/JobZone';

export default function page() {
  const [selectedData, setSelectedData] = useState([]);

  // Function to handle receiving data from Characteristic component
  const handleDataSelected = (data) => {
    setSelectedData(data);
  };

  return (
    <div className='titleH1'>
      <div>
        All <Characteristic onData={handleDataSelected} /> careers Job Zone <JobZone />
      </div>
      {/* Display the selected data */}
      {selectedData.map((career, index) => (
        <div key={index}>
          {career.title}, {career.iconName}, {career.interest}, {career.jobZone}
        </div>
      ))}
    </div>
  );
}
