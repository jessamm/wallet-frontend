import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
//Ventanas de pagina
import Authentication from './screens/Ventanas-de-Pagina/Authentication/Authentication';
import CreateUser from './screens/Ventanas-de-Pagina/CreateUser/CreateUser';
import LandingPage from './screens/Ventanas-de-Pagina/LandingPage/LandingPage';
import Login from './screens/Ventanas-de-Pagina/Login/Login';
import Equipo from './screens/Ventanas-de-Pagina/Equipo/Equipo';
import RecuperacionPassword from './screens/Ventanas-de-Pagina/RecuperacionPassword/RecuperacionPassword';

//Ventanas de Usuario
import Main from './screens/Ventanas-de-Usuario/Main/Main';
import Configuracion from './screens/Ventanas-de-Usuario/Configuracion/Configuracion';
import Estadistica from './screens/Ventanas-de-Usuario/Estadistica/Estadistica';
import Cuentas from './screens/Ventanas-de-Usuario/Cuentas/Cuentas';
import Administrador from './screens/Ventanas-de-Usuario/Administrador/Administrador';

import CrearCuentaAhorro from './screens/Ventanas-de-Usuario/Cuentas/CrearCuentaAhorro';
import CrearCuentaEfectivo from './screens/Ventanas-de-Usuario/Cuentas/CrearCuentaEfectivo';


const App = () => {
  return (
    <Router>
      <Route exact path='/' component={LandingPage}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/RecuperacionPassword' component={RecuperacionPassword}></Route>
      <Route exact path='/create-user' component={CreateUser}></Route>
      <Route exact path='/authentication' component={Authentication}></Route>
      <Route exact path='/equipo' component={Equipo}></Route>
      <Route exact path='/cuentas' component={Cuentas}></Route>
      <Route exact path='/crear-cuenta-ahorro' component={CrearCuentaAhorro}></Route>
      <Route exact path='/crear-cuenta-efectivo' component={CrearCuentaEfectivo}></Route>
      <Route path='/main' component={Main}></Route>
      <Route exact path='/configuracion' component={Configuracion}></Route>
      <Route exact path='/Estadistica' component={Estadistica}></Route>
      <Route exact path='/Administrador' component={Administrador}></Route>
    </Router>
  )
}

export default App
