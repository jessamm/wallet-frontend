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
                                <span>Wallet</span>
                            </h1>
                            {/**ARREGLAR LOGO POR SI SE NECESITA */}
                            {/*<Link to="/"><img src={Logo} className="img-fluid" alt="" /></Link>*/}
                            
                        </div>
                        <nav className="navbar-global">
                            <ul>
                                <li><Link to="/#" className="active"><FontAwesomeIcon icon={['fa', 'home']}/> Inicio</Link></li>
                                <li><Link to="/equipo"><FontAwesomeIcon icon={['fa', 'users']}/> Equipo</Link></li>
                                <li><Link to="/create-user"><FontAwesomeIcon icon={['fa', 'align-justify']}/> Suscribete</Link></li>
                                <li><Link to="/login"><FontAwesomeIcon icon={['fa', 'user']}/> Iniciar Sesion</Link></li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
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
                                    <h4 className="title">Cuentas</h4>
                                    <p className="description">Haz el registro de tus cuentas bancarias y tus tarjetas de crédito.</p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon-box icon-box-cyan">
                                    <div className="icon"><FontAwesomeIcon icon={['fa', 'search-dollar']}/><i className="bx bx-file"></i></div>
                                    <h4 className="title">Seguimiento</h4>
                                    <p className="description">Mantén el registro de tus activos de forma segura. </p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon-box icon-box-green">
                                    <div className="icon"><FontAwesomeIcon icon={['fa', 'hand-holding-usd']}/><i className="bx bx-tachometer"></i></div>
                                    <h4 className="title">Estadísticas</h4>
                                    <p className="description">Visualiza el progreso de tus ingresos y egresos de forma gráfica.</p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon-box icon-box-blue">
                                    <div className="icon"><FontAwesomeIcon icon={['fa', 'wallet']}/><i className="bx bx-world"></i></div>
                                    <h4 className="title">Metas y resultados</h4>
                                    <p className="description">Define tus metas y visualiza los resultados.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr></hr>
                    {/*<!-- End Services Section -->*/}
                    {/*<!-- ======= Why Us Section ======= -->*/}
                    <section className="feature" data-aos="fade-up" date-aos-delay="200">
                        <div className="container">
                            <div className="row" style={{color:"white"}}>
                                <div className="col-lg-6 video-box">
                                    {/*<img src="assets/img/why-us.jpg" className="img-fluid" alt="">*/}
                                    <img src={WhyUs} className="img-fluid" alt="" />
                                    {/*INVESTIGAR SOBRE BROWSER ROUTER*/}
                                    {/*<Link to="https://www.youtube.com/watch?v=EOIq3y6TPP4" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></Link>*/}
                                </div>
                                <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
                                    <div className="icon-box">
                                        <div className="icon"><FontAwesomeIcon icon={['fa', 'fingerprint']}/><i className="bx bx-fingerprint"></i></div>
                                        <h4 className="title"><Link to="/#">Productividad</Link></h4>
                                        <p className="description" style={{color:"black"}}>Haz uso de tu información financiera de una mejor manera.</p>
                                    </div>
                                    <div className="icon-box">
                                        <div className="icon"><FontAwesomeIcon icon={['fa', 'hand-point-up']}/><i className="bx bx-gift"></i></div>
                                        <h4 className="title"><Link to="/#">Tecnología</Link></h4>
                                        <p className="description" style={{color:"black"}}>Deja que la tecnología sea una aliada para lograr sus objetivos financieros.</p>
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
                    <div className="footer-newsletter">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4>Suscribete</h4>
                                    <p>Registrese en Wallet y comience a controlar su vida financiera</p>
                                </div>
                                <div className="col-lg-6">
                                    <form>
                                        {/**<input className="form-control" placeholder="Correo" type="email" onChange={(e) => setEmail(e.target.value)}/> */}
                                        <input type="submit" value="Suscribete"></input><input type="email" name="email"></input>
                                    {/*<input type="email" name="email"><input type="submit" value="Subscribe">*/}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Wallet</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Designed by Grupo Wallet
                        </div>
                    </div>
                </footer>
        </div>
    )
}

export default LandingPage
