import React from 'react';
import { Link} from 'react-router-dom';
import profile from '../../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnyChart from 'anychart-react';

const Estadistica = () => {

    const complexSettings = {
        width: 800,
        height: 600,
        type: 'column',
        data: "Gastos Fijos,50\nIngresos Fijos,30\nGastos Variables,66\nIngresos Variables,80",
        title: 'Estadisticas Parciales',
        yAxis: [1, {
            orientation: 'right',
            enabled: true,
            labels: {
                format: '{%Value}{decimalPoint:\\,}',
                fontColor: 'blue'
            }
        }],
        legend: {
            background: 'lightgreen 0.4',
            padding: 0
        },
        lineMarker: {
            value: 4.5
        }
    };
    return (
        <div className="login-page" style={{ height: '100vh' }} >
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
                    <p>Ira Informacion del usuario fija, como el balance y nombre de usuario</p>
                </div>
                <div className="content">
                    <div className="row-perfil">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="text-center" >Graficos</h3>
                                </div>
                                <div className="card-body">
                                    <AnyChart {...complexSettings}/>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Estadistica;
