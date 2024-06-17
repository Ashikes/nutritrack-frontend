import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DietChart from '../components/DietChart';
import { getDietData } from '../services/api';

const DietplanPage = () => {
  const [dietData, setDietData] = useState({ labels: [], calories: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDietData();
        console.log(response.data);
        const data = response.data;

        const labels = data.map((item) => item.date);
        const calories = data.map((item) => item.calories);

        setDietData({ labels, calories });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const sampleData = {
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [5, 6, 7],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
      {
        label: 'Dataset 2',
        data: [3, 2, 1],
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,0.2)',
      },
    ],
  };
  

  return (
    <div>
      <h2>Dietplan</h2>
      <DietChart data={sampleData} />
    </div>
  );
};

export default DietplanPage;
