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
import Dashboard from './dashboard.js';
import Main from './screens/Ventanas-de-Usuario/Main/Main';
import Configuracion from './screens/Ventanas-de-Usuario/Configuracion/Configuracion';
import Estadistica from './screens/Ventanas-de-Usuario/Estadistica/Estadistica';
import Cuentas from './screens/Ventanas-de-Usuario/Cuentas/Cuentas';
import Administrador from './screens/Ventanas-de-Usuario/Administrador/Administrador';


import MetasPlanes from './screens/Ventanas-de-Usuario/Metas/MetasPlanes';
import GestionUsuarios from './screens/Ventanas-de-Usuario/Administrador/GestionUsuarios';
import Bitacora from './screens/Ventanas-de-Usuario/Administrador/Bitacora';
import CuentasPorAprobar from './screens/Ventanas-de-Usuario/Administrador/CuentasPorAprobar';
import ListaCuentas from './screens/Ventanas-de-Usuario/Cuentas/ListaCuentas';
import ListaPagos from './screens/Ventanas-de-Usuario/Cuentas/ListaPagos';
//import ConfigAdmin from './screens/Ventanas-de-Usuario/Administrador/Config-Admin';


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
    
      <Route path='/main' component={Main}></Route>
      <Route path='/dashboard' component={Dashboard}></Route>
      <Route exact path='/configuracion' component={Configuracion}></Route>
      <Route exact path='/metas-planes' component={MetasPlanes}></Route>
      <Route exact path='/listado-pagos' component={ListaPagos}></Route>
      <Route exact path='/listado-cuentas' component={ListaCuentas}></Route>
      <Route exact path='/Estadistica' component={Estadistica}></Route>
      <Route exact path='/Administrador' component={Administrador}></Route>
      <Route exact path='/gestion-usuarios' component={GestionUsuarios}></Route>
      <Route exact path='/cuentas-por-aprobar' component={CuentasPorAprobar}></Route>
      <Route exact path='/bitacora' component={Bitacora}></Route>
      {/**<Route exact path='/configAdmi' component={configAdmi}></Route>*/}
    </Router>
  )
}

export default App
