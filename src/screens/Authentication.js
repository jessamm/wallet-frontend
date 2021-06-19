import React from 'react';

const Authentication = () => {

    const sendAgain = () => {
        console.log('send again');
    }

    const validateAndCreate = () => {
        console.log('Validate and create')
    }

    return (
        <>
            <div className="main-login" >
                <main className="form-signin">

                    <h6 className="h3 mb-5 fw-normal text-center text-primary">Crear Cuenta</h6>

                    <h4 className="mt-5 mb-3 h5 fw-normal text-center text-primary">Autenticación OTP</h4>

                    <p className="text-sm text-center mt-2" style={{ fontSize: 11 }} >Ingrese el codigo de Autenticacion enviado a<br></br> (Teléfono 0 correo)</p>

                    <div className="row mt-5 mb-3" >
                        <div className="col-3" >
                            <input type="text" className="input-code" />
                        </div>
                        <div className="col-3" >
                            <input type="text" className="input-code" />
                        </div>
                        <div className="col-3" >
                            <input type="text" className="input-code" />
                        </div>
                        <div className="col-3" >
                            <input type="text" className="input-code" />
                        </div>
                    </div>

                    <p className="text-sm text-center mt-2 mb-5" style={{ fontSize: 11 }} >No recibi el codigo <span onClick={sendAgain} className="text-warning send-again" >reenviar</span></p>

                    <button onClick={validateAndCreate} className="w-100 btn btn-sm btn-warning mb-2 mt-5" type="button"><b className="text-sm" >Validar y crear</b></button>
                </main>
            </div>
        </>
    )
}

export default Authentication
