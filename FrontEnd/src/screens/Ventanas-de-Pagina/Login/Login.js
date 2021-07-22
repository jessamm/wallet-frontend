import "./Login.css";
import React, {useState} from 'react';
<<<<<<< HEAD
import  { useHistory } from 'react-router-dom'
=======
import  { Redirect } from 'react-router-dom'
>>>>>>> 2540c883e40d3be0bf79efaa46cf4e4fc9b5677c
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
<<<<<<< HEAD
import { Mail } from "@material-ui/icons";
=======
>>>>>>> 2540c883e40d3be0bf79efaa46cf4e4fc9b5677c


const API = process.env.REACT_APP_API;



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Wallet
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
<<<<<<< HEAD
  const history = useHistory();
=======
>>>>>>> 2540c883e40d3be0bf79efaa46cf4e4fc9b5677c
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
        e.preventDefault();  
        if (email.trim() == "" || password.trim() == "") {
            alert("No puede dejar campos vacios");
        }
        else{
            const json_data = {
                'email': email,
                'password':password
            };

            const res = await fetch(`${API}/login`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(json_data),
            });

            const data = await res.json();

            /* @data["Session"] devuelve 4 posibles valores
                1: Session iniciada correctamente
                2: El email no ha sido verificado
                3: la contraseña es incorrecta
                4: este correo no existe en los registros
            */
            if (data["Session"] == 1){
                //Session inciada
                localStorage.setItem('Session_email', data["Data"][0].email);
                localStorage.setItem('Session_name', data["Data"][0].name);
                localStorage.setItem('Session_id', data["Data"][0].id);
                window.location.href = "http://localhost:3000/dashboard";
            }
            else if (data["Session"] == 2){
                //El email no se ha verificado, redirigir a la pagina de validacion
<<<<<<< HEAD
                history.push({
                  pathname: './Authentication',
                  state: { mail: email }
                });
=======
                return <Redirect to='/dashboard'/>
>>>>>>> 2540c883e40d3be0bf79efaa46cf4e4fc9b5677c
            }
            else if (data["Session"] == 3){
                alert("Contraseña incorrecta");
            }
            else if (data["Session"] == 4){                
                alert("Este correo no esta registrado");
            }
            else{
                alert("Problemas en el servidor");
            }
        }
    };
  
    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electronico"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Mantener session activa"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Iniciar Session
          </Button>
          <Grid container>
<<<<<<< HEAD
            <Grid item>
              <Link href="./create-user" variant="body2">
=======
            <Grid item xs>
              <Link href="#" variant="body2">
                Recuperar Contraseña
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
>>>>>>> 2540c883e40d3be0bf79efaa46cf4e4fc9b5677c
                {"No tienes cuenta? Crear usuario"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}