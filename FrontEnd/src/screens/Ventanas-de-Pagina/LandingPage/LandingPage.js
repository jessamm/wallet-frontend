import React from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/global.css"
import WhyUs from '../../../assets/img/finanzas.jpg';
import fin from '../../../assets/img/finanzas1.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import "../../fontawesome/fontawesome.js";
//import Header from '../Componentes/header';
//import Logo from '../assets/img/logo.jpeg';
//import seccionUno from '../assets/img/features-1.svg/';
/*<img src="assets/img/features-1.svg" className="img-fluid" alt="">*/


const LandingPage = () => {
    return (
        <div className="landing-page" >
            {/*<div className="wrapper">*/}
                {/*aca comenzamos a trabajar arriba del seccion 
                    es un comentario en react js*/}
                
                <header className="header header-scrolled fixed-top d-flex align-items-center header-transparent">
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="logo">
                            <h1 className="text-light">
                                <Link to="/" ><span>Wallet</span></Link>
                            </h1>
                            {/**ARREGLAR LOGO POR SI SE NECESITA */}
                            {/*<Link to="/"><img src={Logo} className="img-fluid" alt="" /></Link>*/}
                            
                        </div>
                        <nav className="navbar-global">
                            <ul>
                                <li><Link to="/" className="active"><FontAwesomeIcon icon={['fa', 'home']}/> Inicio</Link></li>
                                <li><Link to="/equipo"><FontAwesomeIcon icon={['fa', 'users']}/> Equipo</Link></li>
                                <li><Link to="/create-user"><FontAwesomeIcon icon={['fa', 'align-justify']}/> Suscribete</Link></li>
                                <li><Link to="/login"><FontAwesomeIcon icon={['fa', 'user']}/> Iniciar Sesion</Link></li>
                            </ul>
                            <i class="bi bi-list mobile-nav-toggle"></i>
                        </nav>
                    </div>
                </header>
                {/*<!-- ======= Hero Section ======= -->*/}
                <section className="hero d-flex justify-cntent-center align-items-center">
                    <div className="heroCarousel container carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
                        {/*<!-- Slide 1 -->*/}
                        <div className="carousel-item active">
                            <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">¡Bienvenido a <span>Wallet!</span></h2>
                            <h2 style={{color: "DarkGrey"}}>La plataforma que te ayuda a gestionar tus finanzas personales. ¡Ahorra dinero, vive mejor!</h2>
                            <Link to="/create-user" className="btn-get-started animate__animated animate__fadeInUp">SUSCRIBETE</Link>
                            </div>
                        </div>

                        {/*<!-- Slide 2 -->
                        <div className="carousel-item">
                            <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                            <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                            <Link to="/" className="btn-get-started animate__animated animate__fadeInUp">Lee Mas</Link>
                            </div>
                        </div>

                        {/*<!-- Slide 3 -->
                        <div className="carousel-item">
                            <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                            <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                            <Link to="/" className="btn-get-started animate__animated animate__fadeInUp">Lee Mas</Link>
                            </div>
                        </div>*/}
                        <Link to="#heroCarousel" className="carousel-control-prev" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
                        </Link>
                        <Link to="#heroCarousel" className="carousel-control-next" role="button" data-bs-slide="prev">
                            <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
                        </Link>
        
                    </div>
                </section>
                {/*<!-- End Hero -->*/}
                <main className="main">
                    {/*<!-- ======= Services Section ======= -->*/}
                    <section className="services">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
                                   
                                    <div className="icon-box icon-box-pink">
                                    <div className="icon"> <FontAwesomeIcon icon={['fa', 'dollar-sign']}/><i className="bx bxl-dribbble"></i></div>
                                    <h4 className="title"><Link to="/">Cuentas</Link></h4>
                                    <p className="description">Haz el registro de tus cuentas bancarias y tus tarjetas de crédito.</p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon-box icon-box-cyan">
                                    <div className="icon"><FontAwesomeIcon icon={['fa', 'search-dollar']}/><i className="bx bx-file"></i></div>
                                    <h4 className="title"><Link to="/">Seguimiento</Link></h4>
                                    <p className="description">Mantén el registro de tus activos de forma segura. </p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon-box icon-box-green">
                                    <div className="icon"><FontAwesomeIcon icon={['fa', 'hand-holding-usd']}/><i className="bx bx-tachometer"></i></div>
                                    <h4 className="title"><Link to="/">Estadísticas</Link></h4>
                                    <p className="description">Visualiza el progreso de tus ingresos y egresos de forma gráfica.</p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon-box icon-box-blue">
                                    <div className="icon"><FontAwesomeIcon icon={['fa', 'wallet']}/><i className="bx bx-world"></i></div>
                                    <h4 className="title"><Link to="/">Metas y resultados</Link></h4>
                                    <p className="description">Define tus metas y visualiza los resultados.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr></hr>
                    {/*<!-- End Services Section -->*/}
                    {/*<!-- ======= Why Us Section ======= -->*/}
                    <section class="feature" data-aos="fade-up" date-aos-delay="200">
                        <div class="container">
                            <div class="row" style={{color:"white"}}>
                                <div class="col-lg-6 video-box">
                                    {/*<img src="assets/img/why-us.jpg" class="img-fluid" alt="">*/}
                                    <img src={WhyUs} className="img-fluid" alt="" />
                                    {/*INVESTIGAR SOBRE BROWSER ROUTER*/}
                                    {/*<Link to="https://www.youtube.com/watch?v=EOIq3y6TPP4" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></Link>*/}
                                </div>
                                <div class="col-lg-6 d-flex flex-column justify-content-center p-5">
                                    <div class="icon-box">
                                        <div class="icon"><FontAwesomeIcon icon={['fa', 'fingerprint']}/><i class="bx bx-fingerprint"></i></div>
                                        <h4 class="title"><Link to="/">Productividad</Link></h4>
                                        <p class="description" style={{color:"black"}}>Haz uso de tu información financiera de una mejor manera.</p>
                                    </div>
                                    <div class="icon-box">
                                        <div class="icon"><FontAwesomeIcon icon={['fa', 'hand-point-up']}/><i class="bx bx-gift"></i></div>
                                        <h4 class="title"><Link to="/">Tecnología</Link></h4>
                                        <p class="description" style={{color:"black"}}>Deja que la tecnología sea una aliada para lograr sus objetivos financieros.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<!-- End Why Us Section -->*/}
                    {/**<!-- ======= Features Section ======= --> */}
                    <hr></hr>
                    <section className="features">
                        <div className="container">
                            <div className="section-title">
                                <h2>Características</h2>
                                {/*<p>Posee una interfaz atractiva al usuario.</p>*/}
                            </div>

                            <div className="row" data-aos="fade-up">
                                <div className="col-md-5">
                                    {/**INVESTIGAR SOBRE SVG */}
                                    <img src={fin} className="img-fluid" alt="" />
                                    {/*<img src="assets/img/features-1.svg" className="img-fluid" alt="">*/}
                                </div>
                                <div className="col-md-7 pt-4">
                                    <ul>
                                        <li><i className="bi bi-check"></i> Posee una interfaz intuitiva</li>
                                        <li><i className="bi bi-check"></i> 1. Lleva el control de tus cuentas bancarias.</li>
                                        <li><i className="bi bi-check"></i> 2. Controla el registro de tus movimientos.</li>
                                        <li><i className="bi bi-check"></i> 3. Establece metas de ahorro.</li>
                                        <li><i className="bi bi-check"></i> 4. Visualiza la información proporcionada de forma gráfica.</li>
                                        <li><i className="bi bi-check"></i> 5. Visualiza tus logros.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/**<!-- End Features Section --> */}
                </main>
                {/** */}
                <hr></hr>
                <footer className="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                    <div class="footer-newsletter">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <h4>Suscribete</h4>
                                    <p>Registrese en Wallet y comience a controlar su vida financiera</p>
                                </div>
                                <div class="col-lg-6">
                                    <form>
                                        {/**<input className="form-control" placeholder="Correo" type="email" onChange={(e) => setEmail(e.target.value)}/> */}
                                        <input type="submit" value="Suscribete"></input><input type="email" name="email"></input>
                                    {/*<input type="email" name="email"><input type="submit" value="Subscribe">*/}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="copyright">
                            &copy; Copyright <strong><span>Wallet</span></strong>. All Rights Reserved
                        </div>
                        <div class="credits">
                            Designed by Grupo Wallet
                        </div>
                    </div>
                </footer>
                {/** */}

                {/*
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
                </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default LandingPage
