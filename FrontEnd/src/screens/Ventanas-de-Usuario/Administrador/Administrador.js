import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import "./Main.css";
/*
import Grafica from '../Grafica/Grafica';
import Cuentas from '../Cuentas/Cuentas';
import Estadistica from '../Estadistica/Estadistica';*/
//import finanzas from '../assets/img/finanzas.jpg';


const Administrador = () => {
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
                        {/*<!-- .nav-menu -->*/}
                    <nav className="navbar nav-menu navbar">
                        <ul>
                            <li><Link to="/main" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'home']} size="2x" /><span>Inicio</span></Link></li>
                            <li><Link to="/configuracion" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'tools']} size="2x" /><span>Configuracion</span></Link></li>
                            <li><Link to="" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'door-open']} size="2x" /><span>Cerrar Sesion</span></Link></li>
                        </ul>
                    </nav>{/*<!-- .nav-menu -->*/}
                </div>
            </header>

            <main className="main-main">
                <div className="panel-header panel-header-sm">

                </div>
                <div className="content">
                    <div className="row-perfil">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="text-center">Ventana Administrador</h3>
                                </div>
                                <div className="card-body">
                                <table class="table table-sm mt-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Nombre Usuario</th>
                                                <th scope="col">Apellido Usuario</th>
                                                <th scope="col">Correo</th>
                                                <th scope="col">Fecha Creacion Cuenta</th>
                                                <th scope="col">Ultimo inicio sesion</th>
                                                <th scope="col">Eliminar</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>XXXX XXXX</td>
                                                <td>XXXX XXXX</td>
                                                <td>XXX@XXX.com</td>
                                                <td>XX/xX/XX</td>
                                                <td>XX/XX/XX</td>
                                                <th scope="col">
                                                    <button className="btn btn-sm btn-danger" >Eliminar</button>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>   
            </main>
        </div>
    )
}

export default Administrador;