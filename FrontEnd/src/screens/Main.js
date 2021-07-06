import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/img/profile-img.jpg';


const Main = () => {
    return (
        <div className="login-page" style={{ height: '100vh' }} >
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

                <nav className=" navbar nav-menu navbar">
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
                                <Link to="" className="twitter" className="bi bi-twitter"></Link>
                                <Link to="" className="facebook" className="bi bi-facebook"></Link>
                                <Link to="" className="instagram" className="bi bi-instagram"></Link>
                            </div>
                        </div>
                </section>
                <header className="d-flex align-items-center header">
                        <div className="container-s d-flex justify-content-between align-items-center">
                            <div className="h1-logo">
                                <Link to="/Login" ><h1 className="h1-texto">WALLET HONDURAS</h1>
                                </Link>
                            </div>
                            <nav className="navbar">
                                <ul className="ul-nav">
                                <li className="li-nav"><Link to="" className="navbar-a">Inicio</Link></li>
                                <li className="li-nav"><Link to="/Informacion" className="navbar-a">Informacion</Link></li>
                                <li className="li-nav"><Link to="" className="navbar-a">Equipo</Link></li>
                                <li className="li-nav"><Link to="" className="navbar-a">Contactanos</Link></li>
                                </ul>
                            </nav>
                        </div>
                </header>
            </main>
        </div>
    )
}

export default Main;
