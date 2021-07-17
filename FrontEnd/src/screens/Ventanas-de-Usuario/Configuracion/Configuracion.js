import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Configuracion/Configuracion.css";


//import finanzas from '../assets/img/finanzas.jpg';
const API = process.env.REACT_APP_API;

const Configuracion = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [imagen, setImagen] = useState(null);
    const [last_name, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [nameImage, setNameImage] = useState('')
    //campos nuevos favor agregar a la base
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [pais, setPais] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");
    const [descripccion, setDescripccion] = useState("");
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
    /*
    const getUsers = async () => {
        const res = await fetch(`${API}/`);
        const data = await res.json();
        //setUsers(data); 
    };


      };
*/

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
                                <Link to="/" className=""><i className="bx bxl-twitter"></i></Link>
                                <Link to="/" className=""><i className="bx bxl-facebook"></i></Link>
                                <Link to="/" className=""><i className="bx bxl-instagram"></i></Link>
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
                                                                    <img height="25px" width="25px" src="https://png.pngtree.com/png-clipart/20190903/original/pngtree-file-icon-png-image_4419863.jpg" />
                                                                </span> {nameImage.trim() == 0 ? 'Haz click para subir la imagen' : nameImage}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="pl-1 col-md-6">
                                                    <div className="form-group">
                                                        <label>Correo Electronico</label>
                                                        <input placeholder="Correo Electronico" type="email" className="form-control" onChange={(e) => setEmail(e.target.value)}></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="pr-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Nombre</label>
                                                        <input placeholder="Nombre" type="text" className="form-control" onChange={(e) => setName(e.target.value)}></input>
                                                    </div>
                                                </div>
                                                <div className="pl-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Apellido</label>
                                                        <input placeholder="Apellido" type="text" className="form-control" onChange={(e) => setLastName(e.target.value)}></input>
                                                    </div>
                                                </div>
                                                <div className="pl-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Contraseña</label>
                                                        <input placeholder="Contraseña" type="password" className="form-control" onChange={(e) => setPassword(e.target.value)}></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Direccion</label>
                                                        <input placeholder="Direccion" type="text" className="form-control" onChange={(e) => setDireccion(e.target.value)}></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="pr-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Ciudad</label>
                                                        <input placeholder="Ciudad" type="text" className="form-control" onChange={(e) => setCiudad(e.target.value)}></input>
                                                    </div>
                                                </div>
                                                <div className="px-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Pais</label>
                                                        <input placeholder="Pais" type="text" className="form-control" onChange={(e) => setPais(e.target.value)}></input>
                                                    </div>
                                                </div>
                                                <div className="pl-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Codigo Postal</label>
                                                        <input placeholder="Codigo Postal" type="number" className="form-control" onChange={(e) => setCodigoPostal(e.target.value)}></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Sobre Mi</label>
                                                        <textarea cols="80" placeholder="Descripcion de perfil" rows="4" className="form-control" onChange={(e) => setDescripccion(e.target.value)}>
                                                        </textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button type="button" className="btn btn-primary my-4" onClick={handleSubmitActualizar}>Actualizar Perfil</button>
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
