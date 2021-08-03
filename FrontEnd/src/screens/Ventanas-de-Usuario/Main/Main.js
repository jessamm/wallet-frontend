import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Main.css";
import '../../../fontawesome/fontawesome';
import { PolarArea } from 'react-chartjs-2';
/*
import Grafica from '../Grafica/Grafica';
import Cuentas from '../Cuentas/Cuentas';
import Estadistica from '../Estadistica/Estadistica';*/
//import finanzas from '../assets/img/finanzas.jpg';


const Main = () => {
    const nameUsuario = localStorage.getItem("name");
    const last_nameUsuario = localStorage.getItem("last_name");
    const emailUsuario = localStorage.getItem("email");

    const data = {
        labels: ['Gastos', 'Ingresos', 'Variables'],
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
    
    const cerrarSesion = async (e) => {
        e.preventDefault();

        localStorage.clear();
        window.location.href = "http://localhost:3000/login";
    }

    return (
        <div className="login-page" style={{ height: '100vh' }} >
            <header className="barra-lateral">
                <div className="d-flex flex-column">

                    <div className="profile">
                        {/*<img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">*/}
                        <img src={profile} className="span-img-profile rounded-circle img-fluid" alt="logo" />
                        <h1 className="text-light">{nameUsuario} {last_nameUsuario}</h1>
                        <div className="social-links mt-3 text-center">
                            <h3>{emailUsuario}</h3>
                        </div>
                    </div>

                    <nav className="navbar nav-menu navbar">
                        <ul>
                            <li><Link to="/main" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'home']} size="2x" /><span>Inicio</span></Link></li>
                            <li><Link to="/Estadistica" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'sort-amount-down']} size="2x" /><span>Estadisticas</span></Link></li>
                            <li><Link to="/Cuentas" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'user-circle']} size="2x" /><span>Cuentas</span></Link></li>
                            <li><Link to="/metas-planes" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'user-circle']} size="2x" /><span>Metas y planes</span></Link></li>
                            <li><Link to="/configuracion" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'tools']} size="2x" /><span>Configuracion</span></Link></li>
                            <li><Link to="/#" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'door-open']} size="2x" onClick={cerrarSesion} /><span>Cerrar Sesion</span></Link></li>

                        </ul>
                    </nav>{/*<!-- .nav-menu -->*/}
                </div>
            </header>

            <main className="main-main">
                <div className="panel-header panel-header-sm"></div>
                <div className="content">
                    <div className="row-perfil">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row" >
                                        <div className="col-md-4 p-4" >
                                            <p className="font-weight-bold h6" >Resumen General</p>
                                            <p className="font-weight-bold h3" >L 2,128,022.00</p>
                                            <br></br>
                                            <div className="row" >
                                                <div className="col-6" >
                                                    <p>Ingreso</p>
                                                    <p className="font-weight-bold h5" >L 2,128,022.00</p>
                                                    <br></br>
                                                    <button className="btn btn-sm btn-primary btn-block mt-2">Agregar Ingreso</button>
                                                </div>
                                                <div className="col-6" >
                                                    <p>Egreso</p>
                                                    <p className="font-weight-bold h5" >L 2,128,022.00</p>
                                                    <br></br>

                                                    <button className="btn btn-sm btn-secondary btn-block mt-2">Agregar Egreso</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4" >
                                            <PolarArea data={data} />
                                        </div>
                                        <div className="col-md-3" >
                                            <ul className="list-group border-0" >
                                                <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                                                    Gastos Fijos
                                                    <span className="badge badge-primary badge-pill">50%</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                                                    Ingresos
                                                    <span className="badge badge-primary badge-pill">25%</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                                                    Variables
                                                    <span className="badge badge-primary badge-pill">25%</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row mt-5 p-4" >
                                        <div className="col-md-9" >
                                            <p className="font-weight-bold" >Ultimos movimientos</p>
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
                                            <button className="btn btn-sm btn-danger btn-block mt-2 col-md-2 text-center">Eliminar Movimiento</button>
                                        </div>

                                        <div className="col-md-3" >
                                            <p className="font-weight-bold" >% Porcentaje del ultimo mes</p>
                                            <div className="card" style={{ borderRadius: 10 }}  >
                                                <div className="card-body" >
                                                    <p className="font-weight-bold"><span>Perdidas</span> 0,069% </p>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card" style={{ borderRadius: 10 }}  >
                                                <div className="card-body" >
                                                    <p className="font-weight-bold"><span>Ingresos</span> 0,075% </p>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
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
