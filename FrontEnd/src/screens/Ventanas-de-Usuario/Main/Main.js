import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Main.css";
import '../../../fontawesome/fontawesome';
import { Pie, PolarArea } from 'react-chartjs-2';
/*
import Grafica from '../Grafica/Grafica';
import Cuentas from '../Cuentas/Cuentas';
import Estadistica from '../Estadistica/Estadistica';*/
//import finanzas from '../assets/img/finanzas.jpg';


const Main = () => {

    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: '# of Votes',
                data: [50, 25, 25],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="login-page" style={{ height: '100vh' }} >
            <header className="barra-lateral">
                <div className="d-flex flex-column">

                    <div className="profile">
                        {/*<img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">*/}
                        <img src={profile} className="span-img-profile rounded-circle img-fluid" alt="logo" />
                        <h1 className="text-light"><Link to="/main/grafica" className="navbar-a-header-pro">@Nombre Usuario</Link></h1>
                        <div className="social-links mt-3 text-center">
                            <Link to="/" className=""><i className="bx bxl-twitter"></i></Link>
                            <Link to="/" className=""><i className="bx bxl-facebook"></i></Link>
                            <Link to="/" className=""><i className="bx bxl-instagram"></i></Link>
                        </div>
                    </div>

                    <nav className="navbar nav-menu navbar">
                        <ul>
                            <li><Link to="/main" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'home']} size="2x" /><span>Inicio</span></Link></li>
                            <li><Link to="/Estadistica" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'sort-amount-down']} size="2x" /><span>Estadisticas</span></Link></li>
                            <li><Link to="/Cuentas" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'user-circle']} size="2x" /><span>Cuentas</span></Link></li>
                            <li><Link to="/configuracion" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'tools']} size="2x" /><span>Configuracion</span></Link></li>
                            <li><Link to="" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'door-open']} size="2x" /><span>Cerrar Sesion</span></Link></li>

                        </ul>
                    </nav>{/*<!-- .nav-menu -->*/}
                </div>
            </header>

            <main className="main-main">
                <div className="panel-header panel-header-sm">INFORMACION FIJA SE PONDRA POSTERIORMENTE</div>
                <div className="content">
                    <div className="row-perfil">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="text-center d-none">INICIO</h3>
                                </div>
                                <div className="card-body">
                                    <h1 className="d-none" >aca vas a trabajar Emerson</h1>
                                    <div className="row" >
                                        <div className="col-md-4 p-4" >
                                        <p className="font-weight-bold h6" >Dashboard</p>

                                            <p className="font-weight-bold h3" >$2,128,022.00</p>
                                            <br></br>
                                            <div className="row" >
                                                <div className="col-6" >
                                                    <p className="font-weight-bold h5" >$2,128,022.00</p>
                                                    <br></br>
                                                    <button className="btn btn-sm btn-primary btn-block mt-2" >boton 1</button>
                                                </div>
                                                <div className="col-6" >
                                                    <p className="font-weight-bold h5" >$2,128,022.00</p>
                                                    <br></br>

                                                    <button className="btn btn-sm btn-secondary btn-block mt-2" >boton 2</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4" >
                                            <PolarArea data={data} />
                                        </div>
                                        <div className="col-md-3" >
                                            <ul class="list-group border-0" >
                                                <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                                                    Red
                                                    <span className="badge badge-primary badge-pill">50%</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                                                    Blue
                                                    <span className="badge badge-primary badge-pill">25%</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                                                    Yellow
                                                    <span className="badge badge-primary badge-pill">25%</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row mt-5 p-4" >
                                        <div className="col-md-9" >
                                            <p className="font-weight-bold" >Titulo</p>
                                            <div className="row" >
                                                <div className="col-md-3" >
                                                    <div className="p-2 bg-warning" style={{ borderRadius: 10 }} >
                                                        <p>icono</p>
                                                        <p className="font-weight-bold text-white mb-5" >nombre</p>
                                                        <p className="font-weight-bold text-white text-center" >$2,128,022.00</p>
                                                        <p className="text-sm text-muted text-white text-center" >Subtitulo</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3" >
                                                    <div className="p-2 bg-cyan rounded-3" style={{ borderRadius: 10 }} >
                                                        <p>icono</p>
                                                        <p className="font-weight-bold text-white mb-5" >nombre</p>
                                                        <p className="font-weight-bold text-white text-center" >$2,128,022.00</p>
                                                        <p className="text-sm text-muted text-white text-center" >Subtitulo</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3" >
                                                    <div className="p-2 bg-primary rounded-3" style={{ borderRadius: 10 }} >
                                                        <p>icono</p>
                                                        <p className="font-weight-bold text-white mb-5" >nombre</p>
                                                        <p className="font-weight-bold text-white text-center" >$2,128,022.00</p>
                                                        <p className="text-sm text-muted text-white text-center" >Subtitulo</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3" >
                                                    <div className="p-2 bg-success rounded-3" style={{ borderRadius: 10 }} >
                                                        <p>icono</p>
                                                        <p className="font-weight-bold text-white mb-5" >nombre</p>
                                                        <p className="font-weight-bold text-white text-center" >$2,128,022.00</p>
                                                        <p className="text-sm text-muted text-white text-center" >Subtitulo</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3" >
                                            <p className="font-weight-bold" >Titulo</p>
                                            <div className="card" style={{ borderRadius: 10 }}  >
                                                <div className="card-body" >
                                                    <p className="font-weight-bold" > <span>Icono</span> 0,069% </p>
                                                    <div class="progress">
                                                        <div class="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card" style={{ borderRadius: 10 }}  >
                                                <div className="card-body" >
                                                    <p className="font-weight-bold" > <span>Icono</span> 0,075% </p>
                                                    <div class="progress">
                                                        <div class="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main;
/*import React from 'react';
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
                        {/*<img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">
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
                    </nav>{/*<!-- .nav-menu -->
                </div>
            </header>

            <main className="main-main container ml-5">
                <div className="container">
                    <Switch>
                        <Route exact path="/main/grafica" component={Grafica} />
                        {/*<Route exact path='/main/cuentas' component={Cuentas}></Route>
                         <Route exact path='/main/estadistica' component={Estadistica}></Route>
                        <Route exact path='/main/crear-cuenta-ahorro' component={CrearCuentaAhorro}></Route>
                        <Route exact path='/main/crear-cuenta-efectivo' component={CrearCuentaEfectivo}></Route>
                        <Redirect to="/main/grafica" />
                    </Switch>
                </div>

            </main>
        </div>
    )
}

export default Main;
*/