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
        <Bar dataKey="pv" fill="#2f9bd1" />
        <Bar dataKey="uv" fill="#652fd1"/>
      </BarChart>
      </ResponsiveContainer>
            </div>
            <div className="data-container">
            <div><p>Events</p><div className='data-card'>2</div></div>
            <div><p>Average Duration</p><div className='data-card'>5</div></div>
            <div><p>Max dB</p><div className='data-card'>99</div></div>
            <div><p>Intensity</p><div className='data-card'>120</div></div>
            </div>
        </div>
    )
}

export default Dashboard
