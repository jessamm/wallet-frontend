import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import github from '../assets/img/github.svg';
//import google from '../assets/img/google.svg';



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
        console.log(data.Session);
        if (data.Session == true){
            window.location.href = "http://localhost:3000/main";
//--------------cambiar a la ventana Main--------------
            alert("Session Iniciada");
        }
        else{
            alert("Datos incorrectos");
        }
    };


    return (
        <div className="login-page" style={{height: '100vh'}} >  
            {/**HEADER */} 
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
                                <li><Link to="/" ><FontAwesomeIcon icon={['fa', 'home']}/> Inicio</Link></li>
                                <li><Link to="/"><FontAwesomeIcon icon={['fa', 'users']}/> Equipo</Link></li>
                                <li><Link to="/create-user"><FontAwesomeIcon icon={['fa', 'align-justify']}/> Suscribete</Link></li>
                                <li><Link to="/login" className="active"><FontAwesomeIcon icon={['fa', 'user']}/> Iniciar Sesion</Link></li>
                            </ul>
                            {/*<i className="bi bi-list mobile-nav-toggle"></i>*/}
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
                                    <div className="text-muted text-center mb-3"><h4>Inicia sesión con</h4></div>
                                </div>
                                <div className="card-body px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                    </div>
                                    <form >
                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><FontAwesomeIcon icon={['fa', 'at']}/></span>
                                                </div>
                                                <input className="form-control" placeholder="Correo" type="email" onChange={(e) => setEmail(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="form-group focused">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><FontAwesomeIcon icon={['fa', 'lock']}/></span>
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
                                    <Link to="/RecuperacionPassword" className="text-light"><small>¿Se te olvidó tu contraseña?</small></Link>
                                </div>
                                <div className="col-6 text-right">
                                    <Link to="/create-user" className="text-light"><small>Crear una nueva cuenta</small></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/**FOOOOTER */}

            <footer className="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                    <div class="container">
                        <div class="copyright">
                            &copy; Copyright <strong><span>Wallet</span></strong>. 
                        </div>
                        <div class="credits">
                            Diseñado por Grupo Wallet
                        </div>
                    </div>
            </footer>
        </div>
    )
}

export default Login;