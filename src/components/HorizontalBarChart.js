"use client";
import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale,
   BarElement, Title, Tooltip, Legend
 } from 'chart.js';
 import {lineChartData} from "../CHART_DATA";

ChartJS.register(CategoryScale, LinearScale,
  BarElement, Title, Tooltip, Legend);

export default function HorizontalBarChart() {
    const options = {
      indexAxis: 'y'
    };

    return (
      <>
        <Bar options={options} data={lineChartData}/>
      </>
    );
  }
