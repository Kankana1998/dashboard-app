// src/components/ActivityChart.tsx

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '5', uv: 4000 },
  { name: '6', uv: 3000 },
  { name: '7', uv: 2000 },
  { name: '8', uv: 2780 },
  { name: '9', uv: 1890 },
  { name: '10', uv: 2390 },
  { name: '11', uv: 3490 },
  { name: '12', uv: 2000 },
  { name: '13', uv: 2780 },
  { name: '14', uv: 1890 },
  { name: '15', uv: 2390 },
  { name: '16', uv: 3490 },
  { name: '17', uv: 4000 },
  { name: '18', uv: 3000 },
  { name: '19', uv: 2000 },
  { name: '20', uv: 2780 },
  { name: '21', uv: 1890 },
];

const ActivityChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
