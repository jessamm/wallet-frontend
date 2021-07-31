import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title/title';
import { Component } from 'react';

const API = process.env.REACT_APP_API;
const idUsuario = localStorage.getItem("idUsuario");

function preventDefault(event) {
  event.preventDefault();
}

const UseStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Movlist() {
  const classes = UseStyles();
  const url='https://jsonplaceholder.typicode.com/users'
  const [data,setData]=useState([])

//Funcion para llamar la data de ultimos movimientos
  const movimientosRecientes=async()=>{
    const response=await fetch(url)
    console.log(response.status)
    const responseJSON=await response.json()
    setData(responseJSON)
    console.log(responseJSON)
  }

  useEffect(() => {
    movimientosRecientes()  
  }, []);

  return (
    <React.Fragment>
      <Title align="center">Movimientos recientes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>nombre</TableCell>
            <TableCell>tipo</TableCell>
            <TableCell>monto</TableCell>
            <TableCell align="right">Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

         {data.length>0 ?
         ( data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.username}</TableCell>
            <TableCell>{item.username}</TableCell>
            <TableCell align="right">{item.email}</TableCell>
          </TableRow>
        )))
         :
         (<TableRow>
              <TableCell style={{color:"red"}}>No tienes movimientos recientes para visualizar</TableCell>
         </TableRow>) } 
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
