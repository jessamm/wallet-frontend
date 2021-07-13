import React from 'react'

const CrearCuentaAhorro = () => {
    return (
        <div className="container" >
            <h3 className="mt-4 card-title">Agregar cuentas de ahorro</h3>

            <div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Nombre</label>
                        <input type="text" className="form-control" placeholder="Nombre de cuenta" />
                    </div>
                    <div className="form-group col-md-6">
                        <label >Monto inicial</label>
                        <input type="number" className="form-control" placeholder="Monton inicial" />
                    </div>
                </div>

                <button type="button" className="btn btn-sm btn-primary">Guardar</button>
            </div>
        </div>
    )
}

export default CrearCuentaAhorro
