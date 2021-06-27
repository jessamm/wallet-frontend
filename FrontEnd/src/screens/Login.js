import React from 'react';
import { Link } from 'react-router-dom';
import github from '../assets/img/github.svg';
import google from '../assets/img/google.svg';

const Login = () => {
    return (
        <div className="login-page" style={{height: '100vh'}} >
            
            <section id="topbar" class="d-flex align-items-center">
                <div class="container d-flex justify-content-center justify-content-md-between">
                    <div class="contact-info d-flex align-items-center">
                        <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contacto@ejemplo.com</a></i>
                        <i class="bi bi-phone d-flex align-items-center ms-4"><span>+504 3153-9251</span></i>
                    </div>
                    <div class="social-links d-none d-md-flex align-items-center">
                        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>  
            </section>

            <header id="header" class="d-flex align-items-center">
                <div class="container d-flex justify-content-between align-items-center">

                <div class="logo">
                    <h1><a href="index.html">Wallet</a></h1>
                </div>

                <nav id="navbar" class="navbar">
                    <ul>
                        <li><a class="active" href="index.html">Inicio</a></li>
                        <li><a href="about.html">Informacion</a></li>
                        <li><a href="services.html">Servicios</a></li>
                        <li><a href="portfolio.html">Portafolio</a></li>
                        <li><a href="team.html">Equipo</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contactanos</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
                </div>
            </header>

            <section className="section section-shaped section-lg">
                <div className="shape shape-style-1 bg-gradient-default">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <div className="container mt-0">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="card bg-secondary shadow border-0">
                                <div className="card-header bg-white pb-5">
                                    <div className="text-muted text-center mb-3"><small>Inicia sesión con</small></div>
                                    <div className="btn-wrapper text-center">
                                        <button className="btn btn-neutral btn-icon">
                                            <span className="btn-inner--icon"><img src={github} alt="logo" /></span>
                                            <span className="btn-inner--text">Github</span>
                                        </button>
                                        <button className="btn btn-neutral btn-icon">
                                            <span className="btn-inner--icon"><img src={google} alt="logo" /></span>
                                            <span className="btn-inner--text">Google</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small>O inicie sesión con credenciales</small>
                                    </div>
                                    <form>
                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-email-83" /></span>
                                                </div>
                                                <input className="form-control" placeholder="Numero de Teléfono o Correo" type="email" />
                                            </div>
                                        </div>
                                        <div className="form-group focused">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
                                                </div>
                                                <input className="form-control" placeholder="Contraseña" type="password" />
                                            </div>
                                        </div>
                                        <div className="custom-control custom-control-alternative custom-checkbox">
                                            <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                                            <label className="custom-control-label" htmlFor=" customCheckLogin"><span>Recuérdame</span></label>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary my-4">Iniciar sesión</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <Link to="/" className="text-light"><small>¿Se te olvidó tu contraseña?</small></Link>
                                </div>
                                <div className="col-6 text-right">
                                    <Link to="/create-user" className="text-light"><small>Crear una nueva cuenta</small></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;