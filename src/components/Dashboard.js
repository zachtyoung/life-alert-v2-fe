import React from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
  } from 'recharts';
function Dashboard() {
    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300
        }
      ]
        
                                  

    return (
        <div className='component-container'>
            <div className='chart'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d"/>
      </BarChart>
      </ResponsiveContainer>
            </div>
            <div className="data-container">
            <div className='data-card'>Events:2</div>
            <div className='data-card'>Average Duration: 5 minutes</div>
            <div className='data-card'>Max dB: 99</div>
            <div className='data-card'>Intensity: 120</div>
            </div>
        </div>
    )
}

export default Dashboard
