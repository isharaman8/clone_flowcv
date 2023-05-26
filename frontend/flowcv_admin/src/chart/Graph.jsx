"use client";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import { Data } from "../../utils/data";
import { BarChart } from "../../components/BarChart";

Chart.register(CategoryScale);

const Graph = ({ selectedOption }) => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),

        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
    title: "Users Gained between 2019-2023",
  });

  useEffect(() => {
    setChartData({
      labels: Data.map((data) => data.year),
      datasets: [
        {
          label:
            selectedOption === "userSignups" ? "Users Gained" : "Total Revenue",
          data:
            selectedOption === "userSignups"
              ? Data.map((data) => data.userGain)
              : Data.map((data) => data.revenue),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
      title:
        selectedOption === "userSignups"
          ? "Users Gained between 2019-2023"
          : "Total revenue between 2019-2023",
    });
  }, [selectedOption]);

  return <div className="App">{<BarChart chartData={chartData} />}</div>;
};

export default Graph;
