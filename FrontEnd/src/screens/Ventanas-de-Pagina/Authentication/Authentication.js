import React,  {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
//import google from '../assets/img/google.svg';
//import github from '../assets/img/github.svg';


const API = process.env.REACT_APP_API;

const Authentication = () => {

    const [error, handleError] = useState(false);

    const [input_1, setInput_1] = useState("");
    const [input_2, setInput_2] = useState("");
    const [input_3, setInput_3] = useState("");
    const [input_4, setInput_4] = useState("");

    const handleSubmitValidator = async (e) => {
        e.preventDefault();

        if (input_1.trim() === "" || input_2.trim() === "" || input_3.trim() === "" || input_4.trim() === "") {
            handleError(true);
            return;
        }
        
        const json_data = {
            'input_1': input_1,
            'input_2': input_2,
            'input_3': input_3,
            'input_4': input_4,
            'id_validation': 1
        };

        const res = await fetch(`${API}/mail-validation`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(json_data),
        });

        const data = await res.json();
        if (data.result == "True"){
            window.location.href = "http://localhost:3000/metas-planes";
            alert("Usuario Creado");
        }
        else{
            alert("Algo fallo");
        }
    };


    return (
        <div className="login-page" style={{ height: '100vh' }} >
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
                            <i className="bi bi-list mobile-nav-toggle"></i>
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
                                    <div className="text-muted text-center mb-3 "><small className="h3 font-weight-bold" >Crear cuenta</small></div>
                                    <div className="text-muted text-center mb-1 text-primary"><small className="font-weight-bold">Autenticación OTP</small></div>
                                </div>
                                <div className="card-body px-lg-5 py-lg-5">
                                    <div className="text-center mb-4">
                                        <p className="text-sm text-center mt-2 text-primary font-weight-bold" style={{ fontSize: 11 }} >Ingrese el codigo de Autenticacion enviado a<br></br> (Teléfono o correo)</p>
                                    </div>
                                    <form>
                                        <div className="row" >

                                            <div className="col-3" >
                                                <div className="form-group m-0">
                                                    <div className="input-group input-group-alternative">
                                                        <input className="form-control" type="number" min="0" max="1" onChange={(e) => setInput_1(e.target.value)}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-3" >
                                                <div className="form-group mb-3">
                                                    <div className="input-group input-group-alternative">
                                                        <input className="form-control" type="number" min="0" max="1"onChange={(e) => setInput_2(e.target.value)}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-3" >
                                                <div className="form-group mb-3">
                                                    <div className="input-group input-group-alternative">
                                                        <input className="form-control" type="number" min="0" max="1"onChange={(e) => setInput_3(e.target.value)}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-3" >
                                                <div className="form-group mb-3">
                                                    <div className="input-group input-group-alternative">
                                                        <input className="form-control" type="number" min="0" max="1"onChange={(e) => setInput_4(e.target.value)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {error ? (
                                        <p className="alert alert-danger error-p text-white">
                                            Debe llenar todos los campos
                                        </p>
                                        ) : null}
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary my-4" onClick={handleSubmitValidator} >Validar y crear</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Authentication;
