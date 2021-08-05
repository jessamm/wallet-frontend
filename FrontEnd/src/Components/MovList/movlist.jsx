import React, { useState, useEffect } from 'react';
//import Link from '@material-ui/core/Link';
import { Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title/title';


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
  const session_id = localStorage.getItem("Session_id");
  const classes = UseStyles();
  const [movimientos, setMovimientos]=useState([]);

  const dataMovimientos = async () => {
    const json_data = {
        'id_user' : session_id        
      };
      const res = await fetch(`${API}/get-movimientos-recientes`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(json_data),
      });

      const data = await res.json();

      if (data) {
        //console.log(data)
        setMovimientos(data);
      }else{
        console.log("error al mandar informacion")
      }
  };
  useEffect(() => {
    dataMovimientos();
  }, [])


  return (
    <React.Fragment>
      <Title align="center">Movimientos recientes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>nombre</TableCell>
            <TableCell>categoria</TableCell>
            <TableCell>monto</TableCell>
            <TableCell align="right">fecha y hora</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

         {movimientos.length>0 ?
         ( movimientos.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.descripcion}</TableCell>
            <TableCell>{item.categoria}</TableCell>
            <TableCell>{item.mount}</TableCell>
            <TableCell align="right">{item.date_trans}</TableCell>
          </TableRow>
        )))
         :
         (<TableRow>
              <TableCell style={{color:"red"}}>No tienes movimientos recientes para visualizar, o actualiza la pagina</TableCell>
         </TableRow>) } 
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" to="/#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
