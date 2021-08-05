import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Fragment } from 'react';

const UseStyles = makeStyles({
  root: {
    minWidth: 245,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function deposits(props) {
  const classes = UseStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.title}
        </Typography>
        {props.money.length>0 ? (
        <Typography variant="h5" component="h2">
          L {props.money}
        </Typography>):
        (<p style={{color:"red"}}>Lo sentimos, no se puede acceder a la informacion, recargue la pagina</p>)}
        
        <Typography className={classes.pos} color="textSecondary">
          Movimiento
        </Typography>
        <Typography variant="body2" component="p">
          Este es el resumen de:
          <br />
          {props.title}
        </Typography>

      </CardContent>
      
    </Card>
    </React.Fragment>
  );
}
