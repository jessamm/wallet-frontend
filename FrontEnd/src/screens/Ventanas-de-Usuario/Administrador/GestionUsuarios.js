import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GestionUsuarios = () => {
    return (
        <div className="login-page" style={{ height: '100vh' }} >
            <header className="barra-lateral">
                <div className="d-flex flex-column">

                    <div className="profile">
                        {/*<img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">*/}
                        <img src={profile} className="span-img-profile rounded-circle img-fluid" alt="logo" />
                        <h1 className="text-light"><Link to="/main/grafica" className="navbar-a-header-pro">@Nombre Usuario</Link></h1>
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
                                    <h3 className="text-center">Gestion de usuarios</h3>
                                </div>
                                <div className="card-body">
                                    <h3 >Listado de usuarios</h3>


                                    <button type="button" class="btn btn-sm btn-primary m-2" data-toggle="modal" data-target="#exampleModal">
                                        Agreagr
                                    </button>

                                    <table class="table table-sm mt-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Nombre Usuario</th>
                                                <th scope="col">Correo</th>
                                                <th scope="col">Fecha Creacion Cuenta</th>
                                                <th scope="col">Admin</th>
                                                <th scope="col">Eliminar</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>XXXX XXXX</td>
                                                <td>XXXX XXXX</td>
                                                <td>XXX@XXX.com</td>
                                                <td>XX/xX/XX</td>
                                                <td>XX/XX/XX</td>
                                                <th scope="col">
                                                    <button className="btn btn-sm btn-danger" >Eliminar</button>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Agregar nuevo usuario</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div>
                                                        <div className="form-group">
                                                            <label >Nombre</label>
                                                            <input type="text" className="form-control" placeholder="Nombre" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Apellido</label>
                                                            <input type="text" className="form-control" placeholder="Apellido" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label >Nombre de usuario</label>
                                                            <input type="text" className="form-control" placeholder="Nombre Usuario" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label >Correo</label>
                                                            <input type="email" className="form-control" placeholder="Correo electronico" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label >Contraseña</label>
                                                            <input type="email" className="form-control" placeholder="Contraseña" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label >Confirmar Contraseña</label>
                                                            <input type="email" className="form-control" placeholder="Confirmar Contraseña" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
                                                    <button type="button" class="btn btn-sm btn-primary">Guardar</button>
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

export default GestionUsuarios
