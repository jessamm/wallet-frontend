import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import github from '../assets/img/github.svg';
import google from '../assets/img/google.svg';


const API = process.env.REACT_APP_API;

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();   
        
        const json_data = {
            'user': email,
            'password':password
        };

        const res = await fetch(`${API}/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(json_data),
        });

        const data = await res.json();
        if (data.Session){

//--------------cambiar a la ventana Main--------------

            alert("Session Iniciada");
        }
        else{
            alert("Datos incorrectos");
        }
    };


    return (
        <div className="login-page" style={{height: '100vh'}} >
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
                                    <form >
                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-email-83" /></span>
                                                </div>
                                                <input className="form-control" placeholder="Correo" type="email" onChange={(e) => setEmail(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="form-group focused">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
                                                </div>
                                                <input className="form-control" placeholder="Contraseña" type="password" onChange={(e) => setPassword(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="custom-control custom-control-alternative custom-checkbox">
                                            <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                                            <label className="custom-control-label" htmlFor=" customCheckLogin"><span>Recuérdame</span></label>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary my-4" onClick={handleSubmit}>Iniciar sesión</button>
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

export default Login;