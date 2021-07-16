import React,  {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import "../CreateUser/CreateUser";
//import github from '../assets/img/github.svg';
//import google from '../assets/img/google.svg';


const API = process.env.REACT_APP_API;

const CreateUser = () => {

    
    const [name, setName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitCreate = async (e) => {
        e.preventDefault();   
        
        const json_data = {
            'name': name,
            'last_name': last_name,
            'email': email,
            'password': password
        };

        const res = await fetch(`${API}/create-user`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(json_data),
        });

     const data = await res.json();
        if (data.result == "success"){
            window.location.href = "http://localhost:3000/authentication";
            //aler('usuruario permitido')
        }
        else{
            alert("Usuario o contraseña no permitidos");
        }
    };



    return (
        <div className="register-page" >
            <div className="wrapper">
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
                                <li><Link to="/"><FontAwesomeIcon icon={['fa', 'home']}/> Inicio</Link></li>
                                <li><Link to="/Equipo"><FontAwesomeIcon icon={['fa', 'users']}/> Equipo</Link></li>
                                <li><Link to="/create-user" className="active"><FontAwesomeIcon icon={['fa', 'align-justify']}/> Suscribete</Link></li>
                                <li><Link to="/login"><FontAwesomeIcon icon={['fa', 'user']}/> Iniciar Sesion</Link></li>
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
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card bg-secondary shadow border-0">
                                    <div className="card-header bg-white pb-5">
                                        <div className="text-muted text-center mb-3"><h2>Registrate Con Nosotros</h2></div>
                                    </div>
                                    <div className="card-body px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            
                                        </div>
                                        <form>
                                            <div className="form-group">
                                                <div className="input-group input-group-alternative mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><FontAwesomeIcon icon={['fa', 'user-secret']}/></span>
                                                    </div>
                                                    <input className="form-control" placeholder="Nombre" type="text" onChange={(e) => setName(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group input-group-alternative mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><FontAwesomeIcon icon={['fa', 'user-secret']}/></span>
                                                    </div>
                                                    <input className="form-control" placeholder="Apellido" type="text" onChange={(e) => setLastName(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group input-group-alternative mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><FontAwesomeIcon icon={['fa', 'at']}/></span>
                                                    </div>
                                                    <input className="form-control" placeholder="Numero de Teléfono o Correo" type="email" onChange={(e) => setEmail(e.target.value)}/>
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
                                            <div className="row my-4">
                                                <div className="col-12">
                                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                                        <input className="custom-control-input" id="customCheckRegister" type="checkbox" />
                                                        <label className="custom-control-label" htmlFor="customCheckRegister"><span>Estoy de acuerdo con el <Link to="#">Privacy Policy</Link></span></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button type="button" className="btn btn-primary mt-4" onClick={handleSubmitCreate}>Crear cuenta</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
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

export default CreateUser
