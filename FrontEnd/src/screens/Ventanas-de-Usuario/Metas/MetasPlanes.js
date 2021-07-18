import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API = process.env.REACT_APP_API;

const MetasPlanes = () => {
    /**llenado de tablas */
    const [datosMetas, setDatosMetas] = useState([]);
    const [planAhorro, setPlanAhorro] = useState([]);

    const obtenerDatosMetas = async () => {
        const response = await fetch(`${API}/get-goals`);
        if (response.status){
            const body = await response.json();
            setDatosMetas(body);
        }
    }
    const obtenerPlanAhorro = async () => {
        const response = await fetch(`${API}/get-planning`);
        if (response.status){
            const body = await response.json();
            setPlanAhorro(body);
        }
    }
    useEffect(() =>{
        obtenerDatosMetas();
        obtenerPlanAhorro();
    }, [])

    //METAS de gasto
    const [id_categorie, setId_categorie] = useState("");
    const [mount_limit, setMount_limit] = useState("");
    const [date_end, setDate_end] = useState("");
    const [nameMeta, setNameMeta] = useState("");//agregar a la base el nombre de las metas

    const [errorLlenado, handleError] = useState(false);

    const handleSubmitMetas = async (e) => {
        e.preventDefault();

        if(id_categorie.trim() === "" || mount_limit.trim()==="" || date_end === "" || nameMeta.trim()===""){
            handleError(true);
            alert("Todos los campos deben ser llenados");
            return;
        }
        handleError(false);

        const json_data = {
            'id_categorie': id_categorie,
            'mount_limit': mount_limit,
            'date_end': date_end,
            'nameMeta': nameMeta
        };

        const res = await fetch(`${API}/set-goals`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(json_data),
        });
        //const data = await res.json();
        //console.log(data.Session);
        if(res.status){
            const data = await res.json();
            console.log(data.Session);
        }
    };
    //AHORROS
    //se usa id categorie y mount limit de arriba date end
    const [nameAhorro, setNameAhorro] = useState(""); //agregar nombre al ahorro


    const handleSubmitAhorro = async (e) => {
        e.preventDefault();

        if(id_categorie.trim() === "" || mount_limit.trim()==="" || date_end === "" || nameAhorro.trim()===""){
            handleError(true);
            alert("Todos los campos deben ser llenados");
            return;
        }
        handleError(false);

        const json_data = {
            'id_categorie': id_categorie,
            'mount_limit': mount_limit,
            'date_end': date_end,
            'nameAhorro': nameAhorro
        };

        const res = await fetch(`${API}/set-planning`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(json_data),
        });

        if(res.status){
            const data = await res.json();
            console.log(data.Session);
        };
    };

    return (
        <div>
            <div className="login-page" style={{ height: '100vh' }}>
                <header className="barra-lateral">

                    <div className="d-flex flex-column">

                        <div className="profile">
                            {/*<img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">*/}
                            <img src={profile} className="span-img-profile rounded-circle img-fluid" alt="logo" />
                            <h1 className="text-light"><Link to="/main/grafica" className="navbar-a-header-pro">Nombre Usuario</Link></h1>
                            <div className="social-links mt-3 text-center">
                                <Link to="/" className="twitter"><i className="bx bxl-twitter"></i></Link>
                                <Link to="/" className="facebook"><i className="bx bxl-facebook"></i></Link>
                                <Link to="/" className="instagram"><i className="bx bxl-instagram"></i></Link>
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
                                        <h5 className="title">Metas creadas</h5>
                                    </div>
                                    <div className="card-body">

                                        <table class="table table-sm mt-4">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Nombre Usuario</th>
                                                    <th scope="col">Fecha Inicio</th>
                                                    <th scope="col">Categoria</th>
                                                    <th scope="col">Maximo a Gastar</th>
                                                    <th scope="col">Gastos Actuales</th>
                                                    <th scope="col">Eliminar</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    datosMetas.map((datos, key) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row">{key++}</th>
                                                                <td>{datos.name} {datos.last_name}</td>
                                                                <td>{datos.date_init}</td>
                                                                <td>{datos.id_categorie}</td>
                                                                <td>L {datos.mount_limit}</td>
                                                                <td>L {datos.mount_actual}</td>
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
                                    <br></br>
                                    <button type="button" class="btn btn-sm btn-primary m-2" data-toggle="modal" data-target="#modal1">
                                        Agregar
                                    </button>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>


                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="title">Plan de ahorro</h5>
                                    </div>
                                    <div className="card-body">
                                        <table class="table table-sm mt-4">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Nombre Usuario</th>
                                                    <th scope="col">Fecha Inicio</th>
                                                    <th scope="col">Fecha Final</th>
                                                    <th scope="col">Monto Actual</th>
                                                    <th scope="col">Eliminar</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    planAhorro.map((datos, key) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row">{key++}</th>
                                                                <td>{datos.name} {datos.last_name}</td>
                                                                <td>{datos.date_init}</td>
                                                                <td>L {datos.date_end}</td>
                                                                <td>L {datos.mount_actual}</td>
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
                                    <br></br>
                                    <button type="button" class="btn btn-sm btn-primary m-2" data-toggle="modal" data-target="#modal2">
                                        Agregar
                                    </button>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>


                        </div>
                    </div>
                </main>

                { /* MODAL */}

                <div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header text-center">
                                <h5 class="modal-title" id="exampleModalLabel">Registro plan</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Categoria</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Categoria" onChange={(e) => setId_categorie(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Limite</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Limite" onChange={(e) => setMount_limit(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Fecha Final</label>
                                        <input type="date" className="form-control" id="formGroupExampleInput2" onChange={(e) => setDate_end(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Nombre Ahorro</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Nombre" onChange={(e) => setNameAhorro(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            {errorLlenado ? (
                                <p className="alert alert-danger error-p text-white">
                                    Todos los campos deben ser llenados
                                </p>
                            ) : null}
                            <div class="modal-footer">
                                <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-sm btn-primary m-2" data-toggle="modal" data-target="#modal1" onClick={handleSubmitAhorro}>
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header text-center">
                                <h5 class="modal-title" id="exampleModalLabel">Registro metas</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Categoria</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Categoria" onChange={(e) => setId_categorie(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Limite</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Limite" onChange={(e) => setMount_limit(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Fecha Final</label>
                                        <input type="date" className="form-control" id="formGroupExampleInput2" onChange={(e) => setDate_end(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Nombre Meta</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Nombre" onChange={(e) => setNameMeta(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            {errorLlenado ? (
                                <p className="alert alert-danger error-p text-white">
                                    Todos los campos deben ser llenados
                                </p>
                            ) : null}
                            <div class="modal-footer">
                                <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-sm btn-primary m-2" data-toggle="modal" data-target="#modal1" onClick={handleSubmitMetas}>
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MetasPlanes;
