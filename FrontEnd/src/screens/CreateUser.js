import React,  {useState} from 'react';
import { Link } from 'react-router-dom'
import github from '../assets/img/github.svg';
import google from '../assets/img/google.svg';


const API = process.env.REACT_APP_API;

const CreateUser = () => {

    
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitCreate = async (e) => {
        e.preventDefault();   
        
        const json_data = {
            'name': name,
            'last_name': lastname,
            'email': email,
            'password':password
        };

        const res = await fetch(`${API}/create-user`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(json_data),
        });

        const data = await res.json();
        if (data.result == "success"){

            alert("Usuario Creado");
        }
        else{
            alert("Algo fallo");
        }
    };



    return (
        <div className="register-page" >
            <div className="wrapper">
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
                                        <div className="text-muted text-center mb-3"><small>Registrate con</small></div>
                                        <div className="text-center">
                                            <button className="btn btn-neutral btn-icon mr-4">
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
                                            <small>O regístrate con credenciales</small>
                                        </div>
                                        <form>
                                            <div className="form-group">
                                                <div className="input-group input-group-alternative mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="ni ni-hat-3" /></span>
                                                    </div>
                                                    <input className="form-control" placeholder="Nombre" type="text" onChange={(e) => setName(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group input-group-alternative mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="ni ni-hat-3" /></span>
                                                    </div>
                                                    <input className="form-control" placeholder="Apellido" type="text" onChange={(e) => setLastName(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group input-group-alternative mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="ni ni-email-83" /></span>
                                                    </div>
                                                    <input className="form-control" placeholder="Numero de Teléfono o Correo" type="email" onChange={(e) => setEmail(e.target.value)}/>
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
        </div>
    )
}

export default CreateUser
