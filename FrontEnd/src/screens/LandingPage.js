import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/global.css"

const LandingPage = () => {
    return (
        <div className="landing-page" >
            <div className="wrapper">

                <section className="d-flex align-items-center top-bar">
                    <div className="container-s d-flex justify-content-center justify-content-md-between">
                        
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-envelope d-flex align-items-center">
                                <Link to="#" className="correoTop">Wallet@gmail.com
                                </Link>
                            </i>
                            <i className="bi bi-phone d-flex align-items-center ms-4">
                                <span className="telefonoTop">+504 1111-2222</span>
                            </i>
                        </div>

                        <div className="social-links d-none d-md-flex align-items-center">
                            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </section>

                <header className="d-flex align-items-center header">
                    <div className="container-s d-flex justify-content-between align-items-center">
                        <div className="h1-logo">
                                <Link to="#" ><h1 className="h1-texto">WALLET HONDURAS</h1>
                                </Link>
                        </div>

                        <nav className="navbar">
                            <ul className="ul-nav">
                            <li className="li-nav"><Link to="#" className="navbar-a">Inicio</Link></li>
                            <li className="li-nav"><Link to="#" className="navbar-a">Informacion</Link></li>
                            <li className="li-nav"><Link to="#" className="navbar-a">Equipo</Link></li>
                            <li className="li-nav"><Link to="#" className="navbar-a">Contactanos</Link></li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
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
        </div>
    )
}

export default LandingPage
