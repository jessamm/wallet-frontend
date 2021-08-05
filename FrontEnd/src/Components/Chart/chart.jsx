import React from 'react';
//import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis,CartesianGrid, Tooltip, Legend } from 'recharts';
import Title from '../Title/title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

export default function Chart(props) {

  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      {props.title=="Pagos Realizados" ? 
      ( <LineChart width={730} height={250} data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
         <Line type="monotone" dataKey="mount" stroke="#8884d8" />
         <Line type="monotone" dataKey="date_trans" stroke="#8884d8" />
         </LineChart>):
         ( <LineChart width={730} height={250} data={props.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name_bank_account" />
          <YAxis />
          <Tooltip />
          <Legend />
           <Line type="monotone" dataKey="mount" stroke="#8884d8" />
           <Line type="monotone" dataKey="date_out" stroke="#8884d8" />
           </LineChart>)}
       
    </React.Fragment>
  );
}
