import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API = process.env.REACT_APP_API;

const CuentasPorAprobar = () => {
    const nameUsuario = localStorage.getItem("name");
    const last_nameUsuario = localStorage.getItem("last_name");
    const emailUsuario = localStorage.getItem("email");
    /*
    const idUsuario = JSON.parse(localStorage.getItem("idUsuario"));
    const nameUsuario = JSON.parse(localStorage.getItem("name"));
    const last_nameUsuario = JSON.parse(localStorage.getItem("last_name"));
    const emailUsuario = JSON.parse(localStorage.getItem("email"));
    */
    //nombre apellido, fecha, ¿Estado?
    const [datos, setDatos] = useState([]);
    
    const obtenerDatos = async () => {
        const res = await fetch(`${API}/account-validation`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(),
        });
        const data = await res.json();
        if(data){
            setDatos(data);
        }
    }
    useEffect(() =>{
        obtenerDatos();
    }, [])

    const cerrarSesion = async (e) => {
        e.preventDefault();

        localStorage.clear();
        window.location.href = "http://localhost:3000/login";
    }

    return (
        <div className="login-page" style={{ height: '100vh' }} >
            <header className="barra-lateral">
                <div className="d-flex flex-column">

                    <div className="profile">
                        {/*<img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">*/}
                        <img src={profile} className="span-img-profile rounded-circle img-fluid" alt="" />
                        <h1 className="text-light"><Link to="/main/grafica" className="navbar-a-header-pro">{nameUsuario} {last_nameUsuario}</Link></h1>
                        <div className="social-links mt-3 text-center">
                            <h3>{emailUsuario}</h3>
                        </div>
                    </div>
                    {/*<!-- .nav-menu -->*/}
                    <nav className="navbar nav-menu navbar">
                        <ul>
                            <li><Link to="/gestion-usuarios" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'home']} size="2x" /><span className="m-2" >Gestion Usuario</span></Link></li>
                            <li><Link to="/bitacora" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'home']} size="2x" /><span className="m-2" >Bitacora</span></Link></li>
                            <li><Link to="/cuentas-por-aprobar" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'home']} size="2x" /><span className="m-2" >Cuentas por aprobar</span></Link></li>
                            <li><Link to="/Administrador" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'tools']} size="2x" /><span className="m-2" >Configuracion</span></Link></li>
                            <li><Link to="" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'door-open']} size="2x" onClick={cerrarSesion}/><span>Cerrar Sesion</span></Link></li>
                        </ul>
                    </nav>{/*<!-- .nav-menu -->*/}
                </div>
            </header>

            <main className="main-main">
                <div className="panel-header panel-header-sm">

                </div>
                <div className="content">
                    <div className="row-perfil">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="text-center">Cuentas por aprobar</h3>
                                </div>
                                <div className="card-body">
                                    <table class="table table-sm mt-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Aceptar</th>
                                                <th scope="col">Denegar</th>
                                                <th scope="col">Nombre cuenta</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                datos.map((datos, key)=>{
                                                    return (
                                                    <tr>
                                                        <th scope="row">{key++}</th>
                                                        <td>
                                                            <button className="btn btn-sm btn-success" >Aprobar</button>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-sm btn-danger" >Denegar</button>
                                                        </td>
                                                        <td>{datos.name} {datos.last_name}</td>
                                                        <td>{/**crear fecha creacion de cuenta */}</td>
                                                        <td>Pendiente</td>
                                                    </tr>
                                                    )
                                                })
                                            } 
                                        </tbody>
                                    </table>
                                    <button className="btn btn-sm btn-primary m-2" >Guardar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CuentasPorAprobar
