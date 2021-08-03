import React from 'react';
//import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis,CartesianGrid, Tooltip, Legend } from 'recharts';
import Title from '../Title/title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const dia = [
  {
    "date": "12/05/2021",
    "mount": 4000,
  },
  {
    "date": "12/05/2020",
    "mount": 5000,
  },
  {
    "date": "12/05/2024",
    "mount": 1000,
  }
]

const semana = [
  {
    "date": "12/05/2021",
    "mount": 50000,
  },
  {
    "date": "12/05/2020",
    "mount": 5000,
  },
  {
    "date": "12/05/2024",
    "mount": 500,
  }
]

const mes = [
  {
    "date": "12/05/2021",
    "mount": 50,
  },
  {
    "date": "12/05/2020",
    "mount": 20,
  },
  {
    "date": "12/05/2024",
    "mount": 10,
  }
]


export default function Chart(props) {
  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      
      {props.title=='Hoy' ? 
      ( <LineChart width={730} height={250} data={dia}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
         <Line type="monotone" dataKey="mount" stroke="#8884d8" />
         </LineChart>):
      (props.title=='Semana')? 
      (<LineChart width={730} height={250} data={semana}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
         <Line type="monotone" dataKey="mount" stroke="#8884d8" />
         </LineChart>):
      (<LineChart width={730} height={250} data={mes}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
         <Line type="monotone" dataKey="mount" stroke="#8884d8" />
         </LineChart>)}
    </React.Fragment>
  );
}
