import React from 'react';
import { Link } from 'react-router-dom';


const Informacion = () => {
    return (
        <div className="login-page" style={{ height: '100vh' }} >
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
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </nav>
                    </div>
            </header>

            <section className="breadcrumbs">
                <div className="container-info">
                    <ol className="breadcrumbs-ol">
                        <li><Link to="" className="breadcrumbs-link">Inicio / -</Link></li>
                        <li> Informacion</li>
                    </ol>
                    <h2 className="breadcrumbs-h2">Informacion</h2>
                </div>
            </section>

            <section className="about-section-info">
                <div className="container-info">
                    <div className="row-info">
                        <div className="col-lg-6">
                            Imagen
                        </div>
                        <div className="col-lg-6-info pt-4-info pt-lg-0-info content">
                            <h3 className="h3-info">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="fst-italic p-info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                            </p>

                            <ul className="ul-info">
                            <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>

                            <p className="p-info">
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-newsletter">
                <div className="container-news">
                    <div className="row-info">
                        <div className="col-lg-6-news">
                            <h4 className="h4-news">Boletin de Noticias</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        </div>
                        <div className="col-lg-6">
                            <form action="" method="post">
                            <Link to="/Login" className="btn btn-secondary my-4 btn-icon mt-3 mb-sm-0 boton-news">Suscribete</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Informacion;
