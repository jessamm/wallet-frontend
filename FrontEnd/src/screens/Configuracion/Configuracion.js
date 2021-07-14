import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../screens/Configuracion/Configuracion.css";


//import finanzas from '../assets/img/finanzas.jpg';


const Configuracion = () => {
    return (
        <>
        <div className="login-page" style={{ height: '100vh' }} >
            <header className="barra-lateral">
                <div className="d-flex flex-column">

                    <div className="profile">
                        {/*<img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle">*/}
                        <img src={profile} className="span-img-profile rounded-circle img-fluid" alt="logo" />
                        <h1 className="text-light"><Link to="/Main" className="navbar-a-header-pro">Nombre Usuario</Link></h1>
                        <div className="social-links mt-3 text-center">
                            <Link to="/" className="">Iconos<i className="bx bxl-twitter"></i></Link>
                            <Link to="/" className="">Iconos<i className="bx bxl-facebook"></i></Link>
                            <Link to="/" className="">Iconos<i className="bx bxl-instagram"></i></Link>
                        </div>
                    </div>

                    <nav className="navbar nav-menu navbar">
                        <ul>
                            <li><Link to="/main" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'home']} size="2x"/><span>Inicio</span></Link></li>
                            <li><Link to="/Estadistica" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'sort-amount-down']}size="2x"/><span>Estadisticas</span></Link></li>
                            <li><Link to="/Cuentas" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'user-circle']}size="2x"/><span>Cuentas</span></Link></li>
                            <li><Link to="/configuracion" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'tools']}size="2x"/><span>Configuracion</span></Link></li>
                            <li><Link to="" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'door-open']}size="2x"/><span>Cerrar Sesion</span></Link></li>
                            
                        </ul>
                    </nav>{/*<!-- .nav-menu -->*/}
                </div>
            </header>
            
            <main className="main-main">
                <div className="panel-header panel-header-sm"></div>
                <div className="content">
                    <div className="row-perfil">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="title">Configuracion Perfil</h5>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row-perfil">
                                            <div className="pr-1 col-md-6">
                                                <div className="form-group">
                                                    <label>Imagen perfil (por corregir)</label>
                                                    <input disabled="" placeholder="Correo" type="text" className="form-control" value=""></input>
                                                </div>
                                            </div>
                                            
                                            <div className="pl-1 col-md-6">
                                                <div className="form-group">
                                                    <label for="">Correo Electronico</label>
                                                    <input placeholder="Correo Electronico" type="Correo Electronico" className="form-control"></input>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="pr-1 col-md-6">
                                                <div className="form-group">
                                                    <label>Nombre</label>
                                                    <input placeholder="Nombre" type="text" className="form-control" value=""></input>
                                                </div>
                                            </div>
                                            <div className="pl-1 col-md-6">
                                                <div className="form-group">
                                                    <label>Apellido</label>
                                                    <input placeholder="Apellido" type="text" className="form-control" value=""></input>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Direccion</label>
                                                    <input placeholder="Direccion" type="text" className="form-control" value=""></input>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="pr-1 col-md-4">
                                                <div className="form-group">
                                                    <label>Ciudad</label>
                                                    <input placeholder="Ciudad" type="text" className="form-control" value=""></input>
                                                </div>
                                            </div>
                                            <div className="px-1 col-md-4">
                                                <div className="form-group">
                                                    <label>Pais</label>
                                                    <input placeholder="Pais" type="text" className="form-control" value=""></input>
                                                </div>
                                            </div>
                                            <div className="pl-1 col-md-4">
                                                <div className="form-group">
                                                    <label>Postal Code</label>
                                                    <input placeholder="Codigo Postal" type="number" className="form-control"></input>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Sobre Mi</label>
                                                    <textarea cols="80" placeholder="Descripcion de perfil" rows="4" className="form-control">
                                                    </textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary my-4">Actualizar Perfil</button>
                                        </div>
                                    </form>
                                </div> 
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card-user card">
                                {/*}
                                <div className="image">
                                    <img className="img-fondo" src=""></img>
                                </div>
                                */}
                                <div className="card-body">
                                    <div className="author">
                                        <Link to="" className="usuario-config">
                                            <img alt="..." className="avatar border-gray" src={profile}></img>
                                            <h5 className="title">@Nombre Usuario</h5>
                                        </Link>
                                    </div>
                                    <p></p>
                                    <p className="description text-center">
                                        "Descripcion 
                                        <br></br>Descripcion <br></br>Descripcion"
                                    </p>
                                   
                                    
                                    <p className="description text-center">Balance:</p>
                                </div>

                                <hr></hr>
{/**
                                <div className="button-container">
                                    <a href="#pablo" className="btn-neutral btn-icon btn-round btn btn-default btn-lg">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#pablo" className="btn-neutral btn-icon btn-round btn btn-default btn-lg">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#pablo" className="btn-neutral btn-icon btn-round btn btn-default btn-lg">
                                        <i className="fab fa-google-plus-g"></i>
                                    </a>
                                </div>
 */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </> 
    );
}

export default Configuracion;
