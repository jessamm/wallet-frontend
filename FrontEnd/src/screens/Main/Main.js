import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import profile from '../../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Main/Main.css";
import Grafica from '../Grafica/Grafica';
import Cuentas from '../Cuentas/Cuentas';
import Estadistica from '../Estadistica/Estadistica';
import '../../fontawesome/fontawesome'
import CrearCuentaAhorro from '../Cuentas/CrearCuentaAhorro';
import CrearCuentaEfectivo from '../Cuentas/CrearCuentaEfectivo';
//import finanzas from '../assets/img/finanzas.jpg';


const Main = () => {
    return (
        <div className="login-page" style={{ height: '100vh' }} >
            <header className="barra-lateral">
                <div className="d-flex flex-column">

                    <div className="profile">
                        {/*<img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">*/}
                        <img src={profile} className="span-img-profile rounded-circle img-fluid" alt="logo" />
                        <h1 className="text-light"><Link to="/main/grafica" className="navbar-a-header-pro">Nombre Usuario</Link></h1>
                        <div className="social-links mt-3 text-center">
                            <Link to="/" className="twitter"><i className="bx bxl-twitter"></i></Link>
                            <Link to="/" className="facebook"><i className="bx bxl-facebook"></i></Link>
                            <Link to="/" className="instagram"><i className="bx bxl-instagram"></i></Link>
                        </div>
                    </div>

                    <nav className="navbar nav-menu navbar">
                        <ul>
                            <li><Link to="/main/grafica" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'home']} size="2x" /><span>Inicio</span></Link></li>
                            <li><Link to="/main/estadistica" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'sort-amount-down']} size="2x" /><span>Estadisticas</span></Link></li>
                            <li><Link to="/main/cuentas" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'user-circle']} size="2x" /><span>Cuentas</span></Link></li>
                            <li><Link to="" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'tools']} size="2x" /><span>Configuracion</span></Link></li>
                            <li><Link to="" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'door-open']} size="2x" /><span>Cerrar Sesion</span></Link></li>

                        </ul>
                    </nav>{/*<!-- .nav-menu -->*/}
                </div>
            </header>

            <main className="main-main container ml-5">
                <div className="container">
                    <Switch>
                        <Route exact path="/main/grafica" component={Grafica} />
                        {/*<Route exact path='/main/cuentas' component={Cuentas}></Route>
                         <Route exact path='/main/estadistica' component={Estadistica}></Route>
                        <Route exact path='/main/crear-cuenta-ahorro' component={CrearCuentaAhorro}></Route>
                        <Route exact path='/main/crear-cuenta-efectivo' component={CrearCuentaEfectivo}></Route> */}
                        <Redirect to="/main/grafica" />
                    </Switch>
                </div>

            </main>
        </div>
    )
}

export default Main;
