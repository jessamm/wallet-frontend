import React from 'react';
import { Link } from 'react-router-dom'

const Cuentas = () => {
    return (
        <div className="container" >
            <h3 className="mt-4 card-title">Cuentas de ahorro </h3>

            <Link className="btn btn-sm btn-primary m-2" >Agregar cuenta</Link>

            <table class="table table-sm mt-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre del banco</th>
                        <th scope="col">Saldo mes anterior</th>
                        <th scope="col">Saldo actual</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Eliminar</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Banco atlantida</td>
                        <td>$ 1200</td>
                        <td>$ 5000</td>
                        <td>$ 5000</td>
                        <th scope="col">
                            <button className="btn btn-sm btn-danger" >Eliminar</button>
                        </th>
                    </tr>
                </tbody>
            </table>


            <h3 className="mt-4 card-title">Cuentas de efectivo </h3>

            <Link className="btn btn-sm btn-primary m-2" >Agregar cuenta</Link>

            <table class="table table-sm mt-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre del banco</th>
                        <th scope="col">Saldo mes anterior</th>
                        <th scope="col">Saldo actual</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Eliminar</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Banco atlantida</td>
                        <td>$ 1200</td>
                        <td>$ 5000</td>
                        <td>$ 5000</td>
                        <th scope="col">
                            <button className="btn btn-sm btn-danger" >Eliminar</button>
                        </th>

                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Cuentas
