import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DietChart from '../components/DietChart';

const DashboardPage = () => {
  const [dietData, setDietData] = useState({ labels: [], calories: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/diet');
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

  return (
    <div>
      <h2>Dashboard</h2>
      <DietChart data={dietData} />
    </div>
  );
};

export default DashboardPage;
