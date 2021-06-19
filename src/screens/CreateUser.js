import React, { useState } from 'react';

const CreateUser = () => {

    const [confirmation, setConfirmation] = useState(false);
    const [user, setUser] = useState({
        name: '',
        password: '',
        email: ''
    });

    const { name, password, email } = user;

    const handleNext = () => {
        console.log(user);
    }

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleImputCheckbox = (e) => {
        setConfirmation(e.target.checked);
    }

    return (
        <>
            <div className="main-login" >
                <main className="form-signin">

                    <h4 className="h3 mb-4 fw-normal text-center text-primary">Crear Cuenta</h4>

                    <div className="form-group mt-4 mb-4" >
                        <p className="text-sm" > <b>Nombre completo</b> </p>
                        <div className="form-floating">
                            <label className="sr-only" htmlFor="nombre">Nombre completo</label>
                            <div className="input-group mb-2 mr-sm-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="fas fa-user"></i></div>
                                </div>
                                <input type="text" className="form-control" id="nombre" name="name" onChange={handleInputChange} value={name} required  placeholder="Nombre completo" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group mt-4 mb-4" >
                        <p className="text-sm" > <b>Numero de Teléfono o Correo</b> </p>
                        <div className="form-floating">
                            <label className="sr-only" htmlFor="email">Numero de Teléfono o Correo</label>
                            <div className="input-group mb-2 mr-sm-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="fas fa-mobile-alt"></i></div>
                                </div>
                                <input id="email" name="email" onChange={handleInputChange} value={email} type="text" className="form-control" required placeholder="Teléfono o correo" />
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

                    <div className="checkbox mb-3">
                        <label>
                            <input onChange={handleImputCheckbox} name="confirmation"  type="checkbox" className="text-warning"/> <b><span className="text-terminos m-0" >Aceptas que estas de acuerdo con nuestros. <br></br> <span className="text-warning m-0 ml-3" >Terminos y Condiciones</span></span></b>
                        </label>
                    </div>

                    <button disabled={!confirmation} onClick={handleNext} className="w-100 btn btn-sm btn-warning mb-2 mt-2" type="button"><b className="text-sm" >Siguiente</b></button>
                </main>
            </div>
        </>
    )
}

export default CreateUser;
