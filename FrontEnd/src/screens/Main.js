import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/img/profile-img.jpg';
import finanzas from '../assets/img/finanzas.jpg';


const Main = () => {
    return (
        <div className="login-page" style={{ height: '100vh' }} >
            <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
            <header className="header-main">
                <div className="d-flex flex-column">

                <div className="profile">
                    <img src={profile} className="span-img-profile rounded-circle img-fluid" alt="logo" />
                    <h1 className="text-light">
                        <Link to="/Main" className="navbar-a-header-pro">Nombre Usuario</Link>
                    </h1>
                    <div className="social-links mt-3 text-center">
                        <Link to="/Main" className="twitter"><i className="bx bxl-twitter"></i></Link>
                        <Link to="/Main" className="facebook"><i className="bx bxl-facebook"></i></Link>
                        <Link to="/Main" className="instagram"><i className="bx bxl-instagram"></i></Link>
                    </div>
                </div>

                <nav className="nav-menu-mein navbar">
                    <ul>
                        <li className="li-nav-main"><Link to="" className="a-nav-menu"><span>Inicio</span></Link></li>
                        <li className="li-nav-main"><Link to="" className="a-nav-menu"><span>Estadisticas</span></Link></li>
                        <li className="li-nav-main"><Link to="" className="a-nav-menu"><span>Cuentas</span></Link></li>
                        <li className="li-nav-main"><Link to="" className="a-nav-menu"><span>Balance</span></Link></li>
                        <li className="li-nav-main"><Link to="" className="a-nav-menu"><span>Configuracion</span></Link></li>
                        <li className="li-nav-main"><Link to="" className="a-nav-menu"><span>Cerrar Sesión</span></Link></li>
                    </ul>
                </nav>
                </div>
            </header>
            <main className="main">
                <section className="topbar d-flex align-items-center">
                    <div className="container-s d-flex justify-content-center justify-content-md-between">
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-envelope d-flex align-items-center">
                                <Link to="#" className="correoTop">Wallet@gmail.com</Link>
                            </i>
                            <i className="bi bi-phone d-flex align-items-center ms-4">
                                <span>+504 XXXX-XXXX</span>
                            </i>
                        </div>
                        <div className="social-links d-none d-md-flex align-items-center">
                            <Link to="" className="twitter"><i className="bi bi-twitter"></i></Link>
                            <Link to="" className="facebook"><i className="bi bi-facebook"></i></Link>
                            <Link to="" className="instagram"><i className="bi bi-instagram"></i></Link>
                        </div>
                    </div>
                </section>
                <header className="header-uno d-flex align-items-center">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <h1><Link to="#">WALLET HONDURAS</Link></h1>
                    </div>
                    <nav className="navbar-landing">
                        <ul>
                        <li><Link to="" className="active">Inicio</Link></li>
                        <li><Link to="/Informacion">Informacion</Link></li>
                        <li><Link to="/Main">Equipo</Link></li>
                        <li><Link to="">Contactanos</Link></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
            </main>
        </div>
    )
}

export default Main;
