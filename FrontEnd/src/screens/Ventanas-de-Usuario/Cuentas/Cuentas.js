import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Configuracion/Configuracion.css";

const Cuentas = () => {

    const [cuentasAhorro, setCuentasAhorro] = useState([]);
    const [cuentasEfectivo, setCuentasEfectivo] = useState([]);
    const [saldoMesAnterior,setSaldoMesAnterior]=useState("");
    const [saldoActual,setSaldoActual]=useState("");
    const [nombreBanco,setNombreBanco]=useState("");
    //
    const idUsuario = localStorage.getItem("idUsuario");
    const nameUsuario = localStorage.getItem("name");
    const last_nameUsuario = localStorage.getItem("last_name");
    const emailUsuario = localStorage.getItem("email");
    


    const obtenerCuentasAhorro = async () => {
        const response = await fetch('');

        if (response.status === 200) {
            const body = await response.json();
            setCuentasAhorro(body)
        }
    }

    const obtenerCuentasEfectivo = async () => {
        const response = await fetch('');

        if (response.status === 200) {
            const body = await response.json();
            setCuentasEfectivo(body)
        }
    }

    useEffect(() => {
        //    obtenerCuentasAhorro();
        //    obtenerCuentasEfectivo();
    }, [])

    return (
        <div className="login-page" style={{ height: '100vh' }}>
            <header className="barra-lateral">

                <div className="d-flex flex-column">

                    <div className="profile">
                        {/*<img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">*/}
                        <img src={profile} className="span-img-profile rounded-circle img-fluid" alt="logo" />
                        <h1 className="text-light">{nameUsuario} {last_nameUsuario}</h1>
                            <div className="social-links mt-3 text-center">
                            <h3>{emailUsuario}</h3>
                            
                        </div>
                    </div>

                    <nav className="navbar nav-menu navbar">
                        <ul>
                            <li><Link to="/main" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'home']} size="2x" /><span>Inicio</span></Link></li>
                            <li><Link to="/Estadistica" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'sort-amount-down']} size="2x" /><span>Estadisticas</span></Link></li>
                            <li><Link to="/Cuentas" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'user-circle']} size="2x" /><span>Cuentas</span></Link></li>
                            <li><Link to="/metas-planes" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'user-circle']} size="2x" /><span>Metas y planes</span></Link></li>
                            <li><Link to="/configuracion" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'tools']} size="2x" /><span>Configuracion</span></Link></li>
                            <li><Link to="" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'door-open']} size="2x" /><span>Cerrar Sesion</span></Link></li>
                        </ul>
                    </nav>{/*<!-- .nav-menu -->*/}
                </div>
            </header>
            <main className="main-main">
                <div className="panel-header panel-header-sm"></div>

                <div className="content">
                    <div className="row-perfil">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="title">Cuentas de Ahorro </h5>
                                        <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#cuentaahorro">
                                            Agregar Cuenta
                                        </button>
                                </div>
                                <div className="card-body">

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
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="title">Cuentas de efectivo</h5>
                                    <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#cuentaefectivo">
                                            Agregar Cuenta
                                    </button>
                                </div>
                                <div className="card-body">
                                    <table class="table table-sm mt-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Categoria</th>
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
                            </div>
                        </div>




                     {/* Modal */}
                     <div className="modal fade" id="cuentaahorro" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Cuenta de ahorro</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>                                                </button>
                                                </div>
                                                    <div className="modal-body">
                                                        <div className="form-group">
                                                            <label>Nombre del banco</label>
                                                            <input placeholder="Ingrese el nombre del banco"  onChange={(e) => setNombreBanco(e.target.value)} type="text" className="form-control" ></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Saldo Mes Anterior</label>
                                                            <input placeholder="Ingrese saldo mes anterior"  onChange={(e) => setSaldoMesAnterior(e.target.value)} type="text"  className="form-control" ></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Saldo Actual</label>
                                                            <input placeholder="Ingrese saldo actual" placonChange={(e) => setSaldoMesAnterior(e.target.value)} type="text"  className="form-control"></input>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
                                                        <button type="button" className="btn btn-sm btn-primary">Agregar</button>
                                                    </div>
                                    </div>
                                </div>
                        </div>


                        <div className="modal fade" id="cuentaefectivo" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Cuenta en efectivo</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>                                                </button>
                                                </div>
                                                    <div className="modal-body">
                                                        <div className="form-group">
                                                            <label>Categoria</label>
                                                            <input placeholder="Ingrese el nombre del banco"  onChange={(e) => setNombreBanco(e.target.value)} type="text" className="form-control" ></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Saldo Mes Anterior</label>
                                                            <input placeholder="Ingrese saldo mes anterior"  onChange={(e) => setSaldoMesAnterior(e.target.value)} type="text"  className="form-control" ></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Saldo Actual</label>
                                                            <input placeholder="Ingrese saldo actual" placonChange={(e) => setSaldoMesAnterior(e.target.value)} type="text"  className="form-control"></input>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
                                                        <button type="button" className="btn btn-sm btn-primary">Agregar</button>
                                                    </div>
                                    </div>
                                </div>
                        </div>


                    </div>
                </div>
            </main>

        </div>
    )
}

export default Cuentas
/*import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        // obtenerCuentasAhorro();
        // obtenerCuentasEfectivo();
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
*/
