import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState({
        password: '',
        email: ''
    });

    const { password, email } = user;

    const handleLogin = () => {
        console.log(user);
    }

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    return (
        <>
            <div className="main-login" >
                <main className="form-signin">

                    <h4 className="h3 mb-4 fw-normal text-center text-primary">Inicia Session</h4>
                    <p className="text-center" > <b className="text-sm" >Estamos impacientes por comenzar</b> </p>


                    <div className="form-group mt-4 mb-4" >
                        <p className="text-sm" > <b>Numero de Teléfono o Correo</b> </p>
                        <div className="form-floating">
                            <label className="sr-only" htmlFor="email">Username</label>
                            <div className="input-group mb-2 mr-sm-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="fas fa-user"></i></div>
                                </div>
                                <input name="email" value={email} onChange={handleInputChange} type="text" className="form-control" id="email" required placeholder="Teléfono o correo" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group mt-4 mb-4" >
                        <p> <b className="text-sm">Contraseña</b> </p>
                        <div className="form-floating">
                            <label className="sr-only" htmlFor="password">Username</label>
                            <div className="input-group mb-2 mr-sm-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text icono-password"><i className="fas fa-lock"></i></div>
                                </div>
                                <input type="password" id="password" name="password" onChange={handleInputChange} value={password} className="form-control" placeholder="Contraseña" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-sm text-muted text-center">
                        <Link to="/" >Olvidaste tu usuario?</Link>
                    </div>

                    <button onClick={handleLogin} className="w-100 btn btn-sm btn-warning mb-2 mt-2" type="button"><b className="text-sm" >Iniciar</b> </button>
                    <Link to="/create-user" className="w-100 btn btn-sm btn-default mb-2 mt-2" type="button"><b className="text-sm" >Crear usuario</b></Link>

                </main>
            </div>
        </>

    )
}

export default Login;
