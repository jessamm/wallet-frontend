import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Deposits from './Components/Deposits/deposits';
import Orders from './Components/MovList/movlist';
import Menu from './Components/Menu/Menu';


const API = process.env.REACT_APP_API;


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      
        Wallet
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [informacion, setInformacion] = useState([]);
  const session_id = localStorage.getItem("Session_id");
  //const [array, setArray] = useState([]);
  const dataDeposits = async () => {
    const json_data = {
        'id_user' : session_id        
      };
      const res = await fetch(`${API}/get-dashboard-data`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(json_data),
      });

      const data = await res.json();

      if (data) {
        //console.log(data)
        setInformacion(data);
      }else{
        console.log("error al mandar informacion")
      }
  };
  useEffect(() => {
    dataDeposits();
  }, [])
  
  console.log("============INFO==============",informacion[0], "====================INFORMACION");
 /* const balance = informacion[0].Balance;
  const totalIngreso = informacion[0].totalIngreso;
  const totalEgreso = informacion[0].totalEgreso;

  console.log("==============INFO==========",balance," ",totalEgreso," ",totalIngreso)
 */
  //const array = informacion[0];
  //console.log(array, "===============ARRAYYYYYYYYYYYY","===========BALANCE========",array.Balance)
  //console.log(informacion,"=============INFORMACION")
  //console.log(array.Balance, "==========BALANCE")
  //setArray(informacion[0]);
  return (
      <div className={classes.root}>
        <Menu>
          {/**Barra Lateral y Barra Horizontal */}
        </Menu>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            
            {/* CardViews */}
            <Grid item xs={12} md={4} lg={3}>
              <Deposits money={informacion.map(item=>(item.Balance))} title="Balance"/>              
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Deposits money={informacion.map(item=>(item.totalEgreso))} title="Gastos"/>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Deposits money={informacion.map(item=>(item.totalIngreso))} title="Bancos"/>              
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
    );
}