import {create} from 'zustand';
import {useState, useEffect} from 'react';
import HorizontalBarChart from '@/components/HorizontalBarChart';
/*

ZUSTAND LOGIC

const riasecStore = 
create(set => ({
  riasecArray: [],
  setRiasecArray: newArray => set({ riasecArray: newArray })
})); */


//tentative template for new riasecStore without Zustand
const riasecStore = () => {
  const [riasecArray, setRiasecArray] = useState([]);

  useEffect(() => {
    // Example of fetching data and updating the state
    const fetchData = async () => {
      try {
        const response = await fetch('https://services.onetcenter.org/ws/mnm/interestprofiler/careers?answers={}'); // Replace with your actual API endpoint
        const data = await response.json();
        setRiasecArray(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mb-10">
      {riasecArray.length > 0 && <HorizontalBarChart />}
    </div>
  );
};

export default riasecStore;