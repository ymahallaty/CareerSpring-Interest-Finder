"use client";
import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale,
    PointElement, LineElement, Title, Tooltip, Legend
 } from 'chart.js';
 import {lineChartData} from "../CHART_DATA";

ChartJS.register(CategoryScale, LinearScale,
    PointElement, LineElement, Title, Tooltip, Legend);

export default function HorizontalBarChart() {
    const options = {};

    return (
      <>
        <Line options={options} data={lineChartData}/>
      </>
    );
  }
