import { Bar } from "react-chartjs-2";

export const BarChart = ({ chartData }) => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: chartData.title,
      },
      legend: {
        display: false,
      },
    },
    datasets: {
      bar: {
        barPercentage: 0.5, // Adjust the width of the bars
        categoryPercentage: 0.7, // Adjust the width of the bars relative to the available space
      },
    },
    responsive: true,
  };
  return (
    <div className="chart-container">
      <Bar data={chartData} options={options} />
    </div>
  );
};
