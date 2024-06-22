import {create} from 'zustand';
import {useState} from 'react';
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
      const data = await fetchSomeData(); // Replace with your data fetching logic
      setRiasecArray(data);
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