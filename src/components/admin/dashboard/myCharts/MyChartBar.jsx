import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MyChartBar = () => {
  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Guitars",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: "#FFFB7D",
      },
      {
        label: "Amps",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: "#FBAB7E",
      },
      {
        label: "Others",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: "#85FFBD",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
export default MyChartBar;
