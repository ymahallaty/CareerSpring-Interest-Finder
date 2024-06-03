"use client";

import React from 'react'
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, CategoryScale, LinearScale,
   BarElement, Title, Tooltip, Legend
 } from 'chart.js';
import {lineChartData} from "../CHART_DATA";
import riasecStore from "../app/assessment/stores/riasecStore";


ChartJS.register(CategoryScale, LinearScale,
  BarElement, Title, Tooltip, Legend);

export default function HorizontalBarChart() {

  let riasecScore = [];
  riasecScore = riasecStore(state => state.riasecArray);
  riasecScore[6] = 80;
  lineChartData.datasets[0].data = riasecScore;

    const options = {
      indexAxis: 'y',
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            beginAtZero: true,  // Ensure bars start at 0
            callback: (value) => `${value}`, // Display labels without decimals
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            display: false, // Hide the default y-axis labels
        },
          afterFit: (scale) => {
            scale.width = 100; // Adjust for desired label spacing
          },
        },
      },
      plugins: {
        legend: {
            display: false, // Remove default legend
        },
        datalabels: {
            anchor: 'end',   // Anchor labels at the end of the bars
            align: 'end',    // Align labels to the right
            offset: 4,       // Adjust for spacing between bar and label
            formatter: (value, context) => context.chart.data.labels[context.dataIndex], // Use original labels
        },
    },
    
    };

    return (
      <>
        <Bar options={options} data={lineChartData}  plugins={[ChartDataLabels]}/>
      </>
    );
  }
