import React from 'react';
import { Link} from 'react-router-dom';
import profile from '../../../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cuentas = () => {
    return (
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
                            <li><Link to="/Cuentas"  className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'user-circle']} size="2x" /><span>Cuentas</span></Link></li>
                            <li><Link to="/configuracion" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'tools']} size="2x" /><span>Configuracion</span></Link></li>
                            <li><Link to="" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'door-open']} size="2x" /><span>Cerrar Sesion</span></Link></li>
                        </ul>
                    </nav>{/*<!-- .nav-menu -->*/}
                </div>
            </header>
            <main className="main-main">
                <div className="panel-header panel-header-sm">
                     informacion fija del perfil se agregara posteriormente
                </div>
                 
                <div className="content">
                    <div className="row-perfil">        
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="title">Cuentas de Ahorro</h5>
                                    <Link to="/crear-cuenta-ahorro" className="btn btn-sm btn-primary m-2" >Agregar cuenta</Link>
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
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Banco atlantida</td>
                                                <td>L 1200</td>
                                                <td>L 5000</td>
                                                <td>L 5000</td>
                                                <th scope="col">
                                                    <button className="btn btn-sm btn-danger" >Eliminar</button>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="title">Cuentas de efectivo</h5>
                                    <Link to="/crear-cuenta-efectivo" className="btn btn-sm btn-primary m-2" >Agregar cuenta</Link>
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
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Efectivo</td>
                                                <td>L 1200</td>
                                                <td>L 5000</td>
                                                <td>L 5000</td>
                                                <th scope="col">
                                                    <button className="btn btn-sm btn-danger" >Eliminar</button>
                                                </th>

                                            </tr>
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

export default Cuentas
