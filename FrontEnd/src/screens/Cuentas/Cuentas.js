import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Cuentas = () => {
    const [cuentasAhorro, setCuentasAhorro] = useState([]);
    const [cuentasEfectivo, setCuentasEfectivo] = useState([]);


    const obtenerCuentasAhorro = async () => {
        const urlApi = '';
        const response = await fetch(urlApi);
        if (response.status === 200) {
            const body = response.json();
            setCuentasAhorro(body);
        }
    }

    const obtenerCuentasEfectivo = async () => {
        const urlApi = '';
        const response = await fetch(urlApi);
        if (response.status === 200) {
            const body = response.json();
            setCuentasEfectivo(body);
        }
    }

    useEffect(() => {
        obtenerCuentasAhorro();
        obtenerCuentasEfectivo();
    }, [])


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
                    {
                        cuentasAhorro.map((cuenta, key) => {
                            return (
                                <tr>
                                    <th scope="row">{key++}</th>
                                    <td>{cuenta.nombreBanco}</td>
                                    <td>$ {cuenta.saldoMes}</td>
                                    <td>$ {cuenta.saldoActual}</td>
                                    <td>$ {cuenta.balance}</td>
                                    <th scope="col">
                                        <button className="btn btn-sm btn-danger" >Eliminar</button>
                                    </th>
                                </tr>
                            )
                        })
                    }
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
                    {
                        cuentasEfectivo.map((cuenta, key) => {
                            return (
                                <tr>
                                    <th scope="row">{key++}</th>
                                    <td>{cuenta.nombreBanco}</td>
                                    <td>$ {cuenta.saldoMes}</td>
                                    <td>$ {cuenta.saldoActual}</td>
                                    <td>$ {cuenta.balance}</td>
                                    <th scope="col">
                                        <button className="btn btn-sm btn-danger" >Eliminar</button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Cuentas
