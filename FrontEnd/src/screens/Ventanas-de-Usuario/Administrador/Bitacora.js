import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API = process.env.REACT_APP_API;

const Bitacora = () => {
    //nombre apellido, correo, fecha transaccion, tipo
    const [datosBitacora, setdatosBitacora] = useState([]);

    const obtenerBitacora = async () => {
        const response = await fetch('');
        
        //if (response.status === ){
            const body = await response.json();
            setdatosBitacora(body)
       //} */
    }
    useEffect(() =>{
        //obtenerBitacora();
    }, [])

    //datos usuario || foto, nombre apellido
    const [datosUsuario, setDatosUsuario] = useState([]);
    const obtenerDatosUsuario = async () => {
        const response = await fetch('');
        
        //if (response.status === ){
            const body = await response.json();
            //setDatosUsuario(body)
       //} */
    }
    useEffect(() =>{
        //obtenerDatosUsuario();
    }, [])
    return (
        <div className="login-page" style={{ height: '100vh' }} >
            <header className="barra-lateral">
                <div className="d-flex flex-column">

                    <div className="profile">
                        {/*<img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">*/}
                        <img src={datosUsuario.foto} className="span-img-profile rounded-circle img-fluid" alt="" />
                        <h1 className="text-light"><Link to="/main/grafica" className="navbar-a-header-pro">{datosUsuario.name} {datosUsuario.last_name}</Link></h1>
                        <div className="social-links mt-3 text-center">
                            <Link to="/" className=""><i className="bx bxl-twitter"></i></Link>
                            <Link to="/" className=""><i className="bx bxl-facebook"></i></Link>
                            <Link to="/" className=""><i className="bx bxl-instagram"></i></Link>
                        </div>
                    </div>
                    {/*<!-- .nav-menu -->*/}
                    <nav className="navbar nav-menu navbar">
                        <ul>
                            <li><Link to="/gestion-usuarios" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'home']} size="2x" /><span className="m-2" >Gestion Usuario</span></Link></li>
                            <li><Link to="/bitacora" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'home']} size="2x" /><span className="m-2" >Bitacora</span></Link></li>
                            <li><Link to="/cuentas-por-aprobar" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'home']} size="2x" /><span className="m-2" >Cuentas por aprobar</span></Link></li>
                            <li><Link to="/Administrador" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'tools']} size="2x" /><span className="m-2" >Configuracion</span></Link></li>
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
                                                <th scope="col">Nombre Usuario</th>
                                                <th scope="col">Correo</th>
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
                                                            <td>{datos.name} {datos.last_name}</td>
                                                            <td>{datos.Correo}</td>
                                                            <td>{datos.fecha}</td>
                                                            <td>{datos.tipo}</td>
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