import React, {useState} from 'react';
import { Link } from 'react-router-dom';
//import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import github from '../assets/img/github.svg';
//import google from '../assets/img/google.svg';



const API = process.env.REACT_APP_API;

const RecuperacionPassword = () => {
    //loggeo
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
        //console.log(data.Session);
        if (data.Session === true){
            window.location.href = "http://localhost:3000/main";
//--------------cambiar a la ventana Main--------------
            alert("Session Iniciada");
        }
        else{
            alert("Datos incorrectos");
        }
    };
    const handleSubmitContraseña = async (e) =>{
        e.preventDefault();   
        
        const json_data = {
            'user': email
        };
        //crear metodo de cambio
        const res = await fetch(`${API}/`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(json_data),
        });
        const data = await res.json();
        //crear condicion
        //window.location.href = "http://localhost:3000/login";
    };
 

    return (
        <div className="login-page" style={{height: '100vh'}} >  
            {/**HEADER */} 
            <header className="header header-scrolled fixed-top d-flex align-items-center header-transparent">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo col-md-6">
                        <h1 className="text-light">
                            <Link to="/#" ><span>Wallet</span></Link>
                        </h1>
                        {/**ARREGLAR LOGO POR SI SE NECESITA */}
                        {/*<Link to="/"><img src={Logo} className="img-fluid" alt="" /></Link>*/}
                        
                    </div>
                    <nav className="navbar-global">
                            <ul>
                                <li><input className="form-control" placeholder="Correo Electronico" type="email" onChange={(e) => setEmail(e.target.value)}></input></li>
                                <li><input className="form-control" placeholder="Contraseña" type="password" onChange={(e) => setPassword(e.target.value)}></input></li>
                                <li><button type="button" className="btn btn-outline-light" onClick={handleSubmit}>Iniciar sesión</button></li>
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
                                <div className="card-header bg-white pb-5"></div>
                                <div className="text-muted text-center mb-3"><h5>Recupera tu cuenta</h5></div>
                                <div className="card-body px-lg-5 py-lg-5">
                                    <form >
                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><FontAwesomeIcon icon={['fa', 'at']}/></span>
                                                </div>
                                                <input className="form-control" placeholder="Correo Electronico" type="email" />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-outline-danger my-4"><Link to="/login">Cancelar</Link></button>
                                            <button type="button" className="btn btn-outline-primary my-4" onClick={handleSubmitContraseña}>Enviar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/**FOOOOTER */}
            <footer className="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Wallet</span></strong>. 
                        </div>
                        <div className="credits">
                            Diseñado por Grupo Wallet
                        </div>
                    </div>
            </footer>
        </div>
    )
}

export default RecuperacionPassword;