import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Authentication from './screens/Authentication/Authentication'; 
import CreateUser from './screens/CreateUser/CreateUser';
import LandingPage from './screens/LandingPage/LandingPage';
import Login from './screens/Login/Login';
import Equipo from './screens/Equipo/Equipo';
import Main from './screens/Main/Main';
import Configuracion from './screens/Configuracion/Configuracion';
import Estadistica from './screens/Estadistica/Estadistica';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Cuentas from './screens/Cuentas/Cuentas';
import CrearCuentaAhorro from './screens/Cuentas/CrearCuentaAhorro';
import CrearCuentaEfectivo from './screens/Cuentas/CrearCuentaEfectivo';



const App = () => {
  return (
    <Router>
      <Route exact path='/' component={LandingPage}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/create-user' component={CreateUser}></Route>
      <Route exact path='/authentication' component={Authentication}></Route>
      <Route exact path='/equipo' component={Equipo}></Route>
      <Route path='/main' component={Main}></Route>
      <Route exact path='/configuracion' component={Configuracion}></Route>
      <Route exact path='/Estadistica' component={Estadistica}></Route>
      <Route exact path='/Cuentas' component={Cuentas}></Route>
      
      <Route path='/crear-cuenta-ahorro' component={CrearCuentaAhorro}></Route>
      <Route path='/crear-cuenta-efectivo' component={CrearCuentaEfectivo}></Route>



    </Router>
  )
}

export default App
