import React,  {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const API = process.env.REACT_APP_API;


const UseStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


  
export default function Authentication(props) {

    const history = useHistory();
    const [error, handleError] = useState(false);

    const [input_1, setInput_1] = useState("");
    const [input_2, setInput_2] = useState("");
    const [input_3, setInput_3] = useState("");
    const [input_4, setInput_4] = useState("");

    function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (input_1.trim() == "" || input_2.trim() == "" || input_3.trim() == "" || input_4.trim() == "") {
            handleError(true);
            return;
        }
        
        const json_data = {
            'input_1': pad(input_1),
            'input_2': pad(input_2),
            'input_3': pad(input_3),
            'input_4': pad(input_4),
            'email': props.location.state.mail
        };

        console.log(json_data);

        const res = await fetch(`${API}/mail-validation`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(json_data),
        });

        const data = await res.json();
        if (data.result == true){
            alert("Usuario Validado");
            history.push('./login');
        }
        else{
            alert("Codigo incorrecto");
        }
    };
    const classes = UseStyles();

    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h3" variant="h5">
          ingrese el codigo enviado al correo: {props.location.state.mail} para validar su cuenta
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField
                name="code_1"
                id="numer_1"
                variant="outlined"
                inputProps={{min: 0, style: { textAlign: 'center' }}}
                autoFocus
                onInput = {(e) =>{
                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
                }}                
                onChange={(e) => setInput_1(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                name="code_2"
                id="numer_2"
                variant="outlined"
                inputProps={{min: -1, style: { textAlign: 'center' }}}
                onInput = {(e) =>{
                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
                }}
                onChange={(e) => setInput_2(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                name="code_3"
                id="numer_3"
                variant="outlined"
                inputProps={{min: 0, style: { textAlign: 'center' }}}
                onInput = {(e) =>{
                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
                }}
                onChange={(e) => setInput_3(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                name="code_4"
                id="numer_4"
                variant="outlined"
                inputProps={{min: 0, style: { textAlign: 'center' }}}
                onInput = {(e) =>{
                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
                }}
                onChange={(e) => setInput_4(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
                <br></br>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Validar usuario
          </Button>
        </form>
      </div>
    </Container>
    )
}

