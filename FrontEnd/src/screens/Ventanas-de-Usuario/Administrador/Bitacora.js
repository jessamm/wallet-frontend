import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from '../../../assets/img/profile-img.jpg';

const API = process.env.REACT_APP_API;

const Bitacora = () => {
    //const idUsuario = localStorage.getItem("idUsuario");
    const nameUsuario = localStorage.getItem("name");
    const last_nameUsuario = localStorage.getItem("last_name");
    const emailUsuario = localStorage.getItem("email");
    /*
    const idUsuario = JSON.parse(localStorage.getItem("idUsuario"));
    const nameUsuario = JSON.parse(localStorage.getItem("name"));
    const last_nameUsuario = JSON.parse(localStorage.getItem("last_name"));
    const emailUsuario = JSON.parse(localStorage.getItem("email"));
    */

    //nombre apellido, correo, fecha transaccion, tipo
    const [datosBitacora, setdatosBitacora] = useState([]);

    const obtenerBitacora = async () => {
        /*const json_data = {
            
            'id_user': idUsuario
        };*/
        const res = await fetch(`${API}/total-binnacles`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(),
        });
        const data = await res.json();
        if(data){
            setdatosBitacora(data);
        }
    }
    useEffect(() =>{
        obtenerBitacora();
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
                                    <h3 className="text-center">Bitacora</h3>
                                </div>
                                <div className="card-body container">
                                    <h3 className="text-center">Lista de actividad</h3>


                                    <table class="table table-sm mt-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Usuario</th>
                                                <th scope="col">Descripcion Operacion</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Tipo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                datosBitacora.map((datos,key)=>{
                                                    return(
                                                        <tr>
                                                            <th scope="row">{key++}</th>
                                                            <td>{datos.id_user}</td>
                                                            <td>{datos.description_operation}</td>
                                                            <td>{datos.date_operation}</td>
                                                            <td>{datos.type_operation}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Bitacora
