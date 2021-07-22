import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import "./Main.css";
/*
import Grafica from '../Grafica/Grafica';
import Cuentas from '../Cuentas/Cuentas';
import Estadistica from '../Estadistica/Estadistica';*/
//import finanzas from '../assets/img/finanzas.jpg';

const API = process.env.REACT_APP_API;

const Administrador = () => {
    


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [imagen, setImagen] = useState(null);
    const [contraseña, setContraseña] = useState('');
    const [contraseñaNueva, setContraseñaNueva] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [last_name, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [nameImage, setNameImage] = useState('')
    //campos nuevos favor agregar a la base
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [pais, setPais] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");
    const [descripccion, setDescripccion] = useState("");
    const [telefono,setTelefono]=useState("");
    /*falta implementacion dinamica en imput*/
    const handleSubmitActualizar = async (e) => {
        e.preventDefault();

        const json_data = {
            'email': email,
            'name': name,
            'last_name': last_name,
            'password': password,
            'direccion': direccion,
            'ciudad': ciudad,
            'pais': pais,
            'codigoPostal': codigoPostal,
            'descripcion': descripccion
        }

        const res = await fetch(`${API}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });

        const data = await res.json();
        console.log(data)
        //crear condicion y sustituir valores en BD
    };


    const handelSutmitImagen = (e) => {
        let imagen = e.target.files[0];
        setImagen(imagen);
        setNameImage(imagen.name);
    }

    const openDialogoImagen = () => {
        document.getElementById('input-img-perfil').click();
    }

    const actualizarContrasena = () =>{
        if (contraseñaNueva !== confirmar) {
            console.log('NO hacer la peticion');
        } else {
            console.log('hacer la peticion');

            let data = {
                contraseña,
                confirmar,
                contraseñaNueva
            }
            console.log(data)
        }
    }
    //foto,name, apellido, descripcion, balance

    const actualizarInformacion = () =>{
            let data = {
                email,
                name,
                last_name,
                direccion,
                ciudad,
                pais,
                telefono,
                descripccion,
                codigoPostal
            }
            console.log(data)
    }

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
                        <img src={imagen} className="span-img-profile rounded-circle img-fluid" alt="" />
                        <h1 className="text-light"><Link to="/main/grafica" className="navbar-a-header-pro"></Link></h1>
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
                            <li><Link to="" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'door-open']} size="2x" onClick={cerrarSesion}/><span>Cerrar Sesion</span></Link></li>
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
                                                        <label>Imagen perfil</label>
                                                        <input onChange={handelSutmitImagen} className="d-none" type="file" id="input-img-perfil" />
                                                        <input disabled="" placeholder="img" type="text" className="form-control d-none"></input>
                                                        <div className="alert subir-img" role="alert" onClick={openDialogoImagen} >
                                                            <p className="text-dark text-sm" >
                                                                <span>
                                                                    <img height="25px" width="25px" src="https://png.pngtree.com/png-clipart/20190903/original/pngtree-file-icon-png-image_4419863.jpg" alt=""/>
                                                                </span> {nameImage.trim() === 0 ? 'Haz click para subir la imagen' : nameImage}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="pl-1 col-md-6">
                                                    <div className="form-group">
                                                        <label>Correo Electronico</label>
                                                        <input placeholder="Correo Electronico" type="email" className="form-control"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="pr-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Nombre</label>
                                                        <input placeholder="Nombre" type="text" className="form-control" ></input>
                                                    </div>
                                                </div>
                                                <div className="pl-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Apellido</label>
                                                        <input placeholder="Apellido" type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="pl-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Contraseña</label>
                                                        <input placeholder="Contraseña" type="password" className="d-none form-control"></input>
                                                        <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#exampleModal">
                                                            Actualiza contraseña
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Direccion</label>
                                                        <input placeholder="Direccion" type="text" className="form-control" ></input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Telefono</label>
                                                        <input placeholder="Numero de telefono" type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="pr-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Ciudad</label>
                                                        <input placeholder="Ciudad" type="text" className="form-control" ></input>
                                                    </div>
                                                </div>
                                                <div className="px-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Pais</label>
                                                        <input placeholder="Pais" type="text" className="form-control" ></input>
                                                    </div>
                                                </div>
                                                <div className="pl-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Codigo Postal</label>
                                                        <input placeholder="Codigo Postal" type="number" className="form-control" ></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Sobre Mi</label>
                                                        <textarea cols="80" placeholder="Descripcion de perfil" rows="4" className="form-control" >
                                                        </textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#actualizar">
                                                            Actualiza Perfil
                                                        </button>
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
                                                <img alt="..." className="avatar border-gray" src={imagen}></img>
                                                <h5 className="title">{} {}</h5>
                                            </Link>
                                        </div>
                                        <p></p>
                                        <p className="description text-center">
                                            {}
                                        </p>


                                        <p className="description text-center">Balance:</p>
                                        <p className="description text-center">{}</p>
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

                                    <div>
                                        {/* Button trigger modal */}

                                        {/* Modal */}
                                        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Actualizar contraseña</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="form-group">
                                                            <label>Contraseña anterior</label>
                                                            <input placeholder="Contraseña Actual" onChange={(e) => setContraseña(e.target.value)} type="password" className="form-control" ></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Contraseña nueva</label>
                                                            <input placeholder="Nueva contraseña" onChange={(e) => setContraseñaNueva(e.target.value)} type="password"  className="form-control" ></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Confirmar Contraseña</label>
                                                            <input placeholder="Confirme contraseña" onChange={(e) => setConfirmar(e.target.value)} type="password"  className="form-control"></input>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
                                                        <button type="button" onClick={actualizarContrasena} className="btn btn-sm btn-primary">Actualizar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Modal para actualizar*/}
                                        <div className="modal fade" id="actualizar" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Actualizar contraseña</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="form-group">
                                                            <label>Correo</label>
                                                            <input placeholder="Correo electronico" onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" ></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Nombre</label>
                                                            <input placeholder="Nombre" onChange={(e) => setName(e.target.value)} type="text"  className="form-control" ></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Apellido</label>
                                                            <input placeholder="Apellido" onChange={(e) => setLastName(e.target.value)} type="text"  className="form-control"></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Direccion</label>
                                                            <input placeholder="Direccion" onChange={(e) => setDireccion(e.target.value)} type="text"  className="form-control"></input>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group">
                                                                <label>Ciudad</label>
                                                                <input placeholder="Ciudad" onChange={(e) => setCiudad(e.target.value)} type="text"  className="form-control"></input>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Pais</label>
                                                                <input placeholder="Pais" onChange={(e) => setPais(e.target.value)} type="text"  className="form-control"></input>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Codigo postal</label>
                                                                <input placeholder="codigo postal" onChange={(e) => setCodigoPostal(e.target.value)} type="text"  className="form-control"></input>
                                                            </div>
                                                            <div className="form-group">
                                                            <label>Telefono</label>
                                                            <input placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)} type="text"  className="form-control"></input>
                                                        </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Descripcion de Perfil</label>
                                                            <textarea cols="80" placeholder="Descripcion de perfil" rows="4" className="form-control" onChange={(e) => setDescripccion(e.target.value)}></textarea>
                                                        </div>                                                        
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
                                                        <button type="button" onClick={actualizarInformacion} className="btn btn-sm btn-primary">Actualizar</button>
                                                    </div>
                                                </div>
                                            </div>
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
export default Administrador;
