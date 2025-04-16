import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData=[
    {
      "id": "s1",
      "name": "Alice",
      "physics": 85,
      "chemistry": 78,
      "math": 92
    },
    {
      "id": "s2",
      "name": "Bob",
      "physics": 76,
      "chemistry": 81,
      "math": 88
    },
    {
      "id": "s3",
      "name": "Charlie",
      "physics": 90,
      "chemistry": 87,
      "math": 94
    },
    {
      "id": "s4",
      "name": "Diana",
      "physics": 68,
      "chemistry": 74,
      "math": 70
    },
    {
      "id": "s5",
      "name": "Ethan",
      "physics": 82,
      "chemistry": 79,
      "math": 85
    },
    {
      "id": "s6",
      "name": "Fiona",
      "physics": 91,
      "chemistry": 93,
      "math": 89
    },
    {
      "id": "s7",
      "name": "George",
      "physics": 73,
      "chemistry": 69,
      "math": 77
    },
    {
      "id": "s8",
      "name": "Hannah",
      "physics": 88,
      "chemistry": 84,
      "math": 90
    },
    {
      "id": "s9",
      "name": "Ian",
      "physics": 79,
      "chemistry": 75,
      "math": 80
    },
    {
      "id": "s10",
      "name": "Julia",
      "physics": 95,
      "chemistry": 91,
      "math": 96
    }
  ]  


const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>

                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>

                <Line dataKey={"math"}></Line>
                <Line dataKey={"chemistry"} stroke='red'></Line>

            </LineChart>
            
        </div>
    );
};

export default ResultsChart;