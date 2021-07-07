import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/global.css"

const LandingPage = () => {
    return (
        <div className="landing-page" >
            <div className="wrapper">
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

                <div className="section section-hero section-shaped">
                    <div className="shape shape-style-3 shape-default">
                        <span className="span-150" />
                        <span className="span-50" />
                        <span className="span-50" />
                        <span className="span-75" />
                        <span className="span-100" />
                        <span className="span-75" />
                        <span className="span-50" />
                        <span className="span-100" />
                        <span className="span-50" />
                        <span className="span-100" />
                    </div>
                    <div className="page-header">
                        <div className="container shape-container d-flex align-items-center py-lg">
                            <div className="col px-0">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-6 text-center">
                                        <h2 className="display-4 font-weight-normal text-white">Comienza a mejorar tus finanzas personales estamos aqui para ayudarte</h2>

                                        <h5 className="text-white h6 font-weight-bold">Lo único que es un activo o un pasivo eres Tú Mismo, por qué en la última instancia eres tú quien puede hacer el dinero sea un activo o un pasivo</h5>
                                        <div className="btn-wrapper mt-4">
                                            <Link to="/Login" className="btn btn-secondary my-4 btn-icon mt-3 mb-sm-0">
                                                Comenzar
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg x={0} y={0} viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                        </svg>
                    </div>
                </div>
            </div>

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
                                    <li><i className="bx bx-chevron-right"></i> <Link to="">Inicio</Link></li>
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

export default LandingPage
