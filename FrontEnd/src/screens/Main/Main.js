import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Main/Main.css";
//import finanzas from '../assets/img/finanzas.jpg';


const Main = () => {
    return (
        <div className="login-page" style={{ height: '100vh' }} >
            <header className="barra-lateral">
                <div className="d-flex flex-column">

                    <div className="profile">
                        {/*<img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">*/}
                        <img src={profile} className="span-img-profile rounded-circle img-fluid" alt="logo" />
                        <h1 className="text-light"><Link to="/Main" className="navbar-a-header-pro">Nombre Usuario</Link></h1>
                        <div className="social-links mt-3 text-center">
                            <Link to="/" className="twitter"><i className="bx bxl-twitter"></i></Link>
                            <Link to="/" className="facebook"><i className="bx bxl-facebook"></i></Link>
                            <Link to="/" className="instagram"><i className="bx bxl-instagram"></i></Link>
                        </div>
                    </div>

                    <nav className="navbar nav-menu navbar">
                        <ul>
                            <li><Link to="/main" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'home']} size="2x"/><span>Inicio</span></Link></li>
                            <li><Link to="" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'sort-amount-down']}size="2x"/><span>Estadisticas</span></Link></li>
                            <li><Link to="" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'user-circle']}size="2x"/><span>Cuentas</span></Link></li>
                            <li><Link to="" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'tools']}size="2x"/><span>Configuracion</span></Link></li>
                            <li><Link to="" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'door-open']}size="2x"/><span>Cerrar Sesion</span></Link></li>
                            
                        </ul>
                    </nav>{/*<!-- .nav-menu -->*/}
                </div>
            </header>
            
            <main className="main-main">
                ACA IRIAN LAS PANTALLAS , ME IMAGINO
            </main>
        </div>
    )
}

export default Main;
