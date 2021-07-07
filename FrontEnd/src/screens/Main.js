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
            <section className="about">
                <div className="container-s">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>"Temporal"</h1>
                            <img src={finanzas} className="img-fluid" alt="logo" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p class="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                            </p>
                            <ul>
                            <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>
                            <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            </main>
            <footer className="footer">
                
                <div className="footer-newsletter">
                    <div className="container-s">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>Boletin de Noticias</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            </div>
                            
                            <div className="col-lg-6">
                                <Link to="/create-user" className="btn btn-secondary my-4 btn-icon mt-3 mb-sm-0 boton-news">Suscribete</Link>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Enlaces</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/LandingPage">Inicio</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/Informacion">Informacion</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="">Equipo</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="">Terminos de Condicion</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="">Politicas de Privacidad</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Nuestros servicios</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="">Ayuda Financiera</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="">Soporte Financier</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="">Organizacion de Ingresos</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4>Contactanos</h4>
                                <p>
                                <p>Ciudad Universitaria </p>
                                <p>Francisco Morazan, Tegucigapta</p>
                                <p>Honduras</p>
                                <p><strong>Telefonos:</strong> +504 XXXX-XXXX</p>
                                <p><strong>Email:</strong> Wallet@gmail.com</p>
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-info">
                                <h3>Sobre Wallet</h3>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                                <div class="social-links mt-3">
                                    <Link to="" className="twitter"><i className="bx bxl-twitter"></i></Link>
                                    <Link to="" className="facebook"><i className="bx bxl-twitter"></i></Link>
                                    <Link to="" className="instagram"><i className="bx bxl-twitter"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Main;
