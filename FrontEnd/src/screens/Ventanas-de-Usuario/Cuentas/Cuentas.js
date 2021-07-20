import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Configuracion/Configuracion.css";

const API = process.env.REACT_APP_API;

const Cuentas = () => {

    const [cuentasAhorro, setCuentasAhorro] = useState([]);
    const [cuentasEfectivo, setCuentasEfectivo] = useState([]);
    const [tipoCuenta, setTipoCuenta] = useState(0)
    const [saldoMesAnterior, setSaldoMesAnterior] = useState("");
    const [saldoActual, setSaldoActual] = useState("");
    const [nombreBanco, setNombreBanco] = useState("");
    //probar 
    const idUsuario = localStorage.getItem("idUsuario");
    const nameUsuario = localStorage.getItem("name");
    const last_nameUsuario = localStorage.getItem("last_name");
    const emailUsuario = localStorage.getItem("email");
    /*
    const idUsuario = JSON.parse(localStorage.getItem("idUsuario"));
    const nameUsuario = JSON.parse(localStorage.getItem("name"));
    const last_nameUsuario = JSON.parse(localStorage.getItem("last_name"));
    const emailUsuario = JSON.parse(localStorage.getItem("email"));
    */

    const [errorLlenado, handleError] = useState(false);

    const obtenerCuentasAhorro = async () => {

        const json_data = {
            //verificar que el valor entre comillas sea igual al de la base por favor
            'id_user': idUsuario
        };
        const res = await fetch(`${API}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });
        const data = await res.json();
        if (data) {
            setCuentasAhorro(data);
        }
    }

    const obtenerCuentasEfectivo = async () => {
        const json_data = {
            //verificar que el valor entre comillas sea igual al de la base por favor
            'id_user': idUsuario
        };
        const res = await fetch(`${API}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });
        const data = await res.json();
        if (data) {
            setCuentasEfectivo(data);
        }
    }
    useEffect(() => {
        obtenerCuentasAhorro();
        obtenerCuentasEfectivo();
    }, [])

    const handleSubmitCuentasAhorro = async (e) => {
        e.preventDefault();

        if (nombreBanco.trim() === "" || saldoMesAnterior === "" || saldoActual.trim() === "") {
            handleError(true);
            alert("Todos los campos deben ser llenados");
            return;
        }
        handleError(false);

        const json_data = {
            '': saldoMesAnterior,
            '': nombreBanco,
            '': saldoActual
        };

        const res = await fetch(`${API}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });
        //const data = await res.json();

        //console.log(data.Session);
        if (res.status) {
            const data = await res.json();
            console.log(data.Session);
        }
    };

    const handleSubmitCuentaEfectivo = async (e) => {
        e.preventDefault();

        if (nombreBanco.trim() === "" || saldoMesAnterior === "" || saldoActual.trim() === "") {
            handleError(true);
            alert("Todos los campos deben ser llenados");
            return;
        }
        handleError(false);

        const json_data = {
            '': saldoMesAnterior,
            '': nombreBanco,
            '': saldoActual
        };

        const res = await fetch(`${API}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });
        //const data = await res.json();

        //console.log(data.Session);
        if (res.status) {
            const data = await res.json();
            console.log(data.Session);
        }
    };

    const EliminarCuentaEfectivo = async (e) => {
        const json_data = {
            'id_user': idUsuario
        };

        const res = await fetch(`${API}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });

        if (res.status) {
            //const data = await res.json();
            console.log("==========================Efectivo eliminada ==============================");
        };
    };

    const EliminarCuentaAhorro = async (e) => {
        const json_data = {
            'id_user': idUsuario
        };

        const res = await fetch(`${API}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });

        if (res.status) {
            //const data = await res.json();
            console.log("==========================Ahorro eliminado ==============================");
        };
    };

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
                                    <div className="row" >
                                        <div className="col-6" >
                                            <div className="form-group">
                                                <select defaultValue={tipoCuenta} className="form-control" onChange={e => setTipoCuenta(e.target.value)} >
                                                    <option value="0"  >Seleccione cuenta</option>
                                                    <option value="1" >Debito</option>
                                                    <option value="2" >Ahorro</option>
                                                    <option value="3" >Credito</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6" >
                                            <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#cuentaahorro">
                                                Agregar Cuenta
                                            </button>
                                        </div>
                                    </div>

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
                                                                <button className="btn btn-sm btn-danger" onClick={EliminarCuentaAhorro}>Eliminar</button>
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
                                    <h5 className="title">Pagos</h5>
                                    <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#cuentaefectivo">
                                        Agregar pago
                                    </button>
                                </div>
                                <div className="card-body">
                                    <table class="table table-sm mt-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Descripcion</th>
                                                <th scope="col">Monto</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Cuenta</th>
                                                <th scope="col">Eliminar</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cuentasEfectivo.map((cuenta, key) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row">{key++}</th>
                                                            <td>{nameUsuario} {last_nameUsuario}</td>
                                                            <td>$ {cuenta.saldoMes}</td>
                                                            <td>$ {cuenta.saldoActual}</td>
                                                            <td>$ {cuenta.balance}</td>
                                                            <th scope="col">
                                                                <button className="btn btn-sm btn-danger" onClick={EliminarCuentaEfectivo} >Eliminar</button>
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
                                        {
                                            tipoCuenta == 1 && <h5 className="modal-title" id="exampleModalLabel">Cuenta de Debito</h5>
                                        }

                                        {
                                            tipoCuenta == 2 && <h5 className="modal-title" id="exampleModalLabel">Cuenta de Ahorro</h5>
                                        }

                                        {
                                            tipoCuenta == 3 && <h5 className="modal-title" id="exampleModalLabel">Cuenta de Credito</h5>
                                        }

                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>                                                </button>
                                    </div>
                                    <div className="modal-body">
                                        {
                                            tipoCuenta == 1 &&
                                            <>
                                                <div className="form-group">
                                                    <label>Nombre del banco</label>
                                                    <input placeholder="Ingrese el nombre del banco" onChange={(e) => setNombreBanco(e.target.value)} type="text" className="form-control" ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>fecha vencimiento</label>
                                                    <input type="date" className="form-control" ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>CSV</label>
                                                    <input placeholder="Ingrese CSV" type="text" className="form-control"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Numero de cuenta</label>
                                                    <input placeholder="Ingrese el numero de cuenta" ptype="text" className="form-control"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>CSV</label>
                                                    <input placeholder="Ingrese CSV" type="text" className="form-control"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Monto</label>
                                                    <input placeholder="Ingrese el monto" type="text" className="form-control"></input>
                                                </div>
                                            </>
                                        }
                                        {
                                            tipoCuenta == 2 && <>
                                                <div className="form-group">
                                                    <label>Nombre del banco</label>
                                                    <input placeholder="Ingrese el nombre del banco" onChange={(e) => setNombreBanco(e.target.value)} type="text" className="form-control" ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Numero de cuenta</label>
                                                    <input placeholder="Ingrese numero de cuenta" type="text" className="form-control" ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Monto</label>
                                                    <input placeholder="Ingrese el monto" type="text" className="form-control"></input>
                                                </div>
                                            </>
                                        }
                                        {
                                            tipoCuenta == 3 &&
                                            <>
                                                <div className="form-group">
                                                    <label>Nombre del banco</label>
                                                    <input placeholder="Ingrese el nombre del banco" onChange={(e) => setNombreBanco(e.target.value)} type="text" className="form-control" ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>fecha vencimiento</label>
                                                    <input type="date" className="form-control" ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>CSV</label>
                                                    <input placeholder="Ingrese CSV" type="text" className="form-control"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Numero de cuenta</label>
                                                    <input placeholder="Ingrese el numero de cuenta" ptype="text" className="form-control"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>CSV</label>
                                                    <input placeholder="Ingrese CSV" type="text" className="form-control"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Monto</label>
                                                    <input placeholder="Ingrese el monto" type="text" className="form-control"></input>
                                                </div>
                                            </>
                                        }

                                        {
                                            tipoCuenta == 0 && <h5 className="modal-title text-center" id="exampleModalLabel">Seleccione un tipo de cuenta</h5>
                                        }

                                    </div>
                                    {errorLlenado ? (
                                        <p className="alert alert-danger error-p text-white">
                                            Todos los campos deben ser llenados
                                        </p>
                                    ) : null}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
                                        <button type="button" className="btn btn-sm btn-primary" onClick={handleSubmitCuentasAhorro}>Agregar</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="modal fade" id="cuentaefectivo" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Agregar pagos</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>                                                </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label>Descripcion</label>
                                            <input placeholder="Seleccione la Descripcion" onChange={(e) => setNombreBanco(e.target.value)} type="text" className="form-control" ></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Monto</label>
                                            <input placeholder="Ingrese monto" onChange={(e) => setSaldoMesAnterior(e.target.value)} type="text" className="form-control" ></input>
                                        </div>
                                        <div className="form-group">
                                            <label>fecha</label>
                                            <input type="date" className="form-control"></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Cuenta</label>
                                            <select className="form-control" >
                                                <option>Cuenta 1</option>
                                                <option>Cuenta 2</option>
                                                <option>Cuenta 3</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Tipo</label>
                                            <select defaultValue="0" className="form-control" >
                                                <option value="0" >Seleccione</option>
                                                <option value="1" >Pago</option>
                                                <option value="2" >Meta</option>
                                            </select>
                                        </div>
                                    </div>
                                    {errorLlenado ? (
                                        <p className="alert alert-danger error-p text-white">
                                            Todos los campos deben ser llenados
                                        </p>
                                    ) : null}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
                                        <button type="button" className="btn btn-sm btn-primary" onClick={handleSubmitCuentaEfectivo}>Agregar</button>
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
