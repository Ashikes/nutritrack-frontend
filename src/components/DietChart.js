import React from 'react';
import { Line } from 'react-chartjs-2';

const DietChart = ({ data }) => {
  const chartData = {
    labels: 'label',
    datasets: [
      {
        label: 'Calories',
        data: data.calories,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default DietChart;
