import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import profile from '../../../assets/img/profile-img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnyChart from 'anychart-react';

const Estadistica = () => {

    const nameUsuario = localStorage.getItem("name");
    const last_nameUsuario = localStorage.getItem("last_name");
    const emailUsuario = localStorage.getItem("email");

    const [data, setData] = useState([1,2,3,4]);

    const obtenerData = async () => {
        const response = await fetch('');

        if (response.status === 200) {
            const body = await response.json();
            setData(body)
        }
    }
    useEffect(() => {
        obtenerData();
    }, []);

    const complexSettings = {
        width: 800,
        height: 600,
        type: 'pie',
        data: data,
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
                        <img src={profile} className="span-img-profile rounded-circle img-fluid" alt="logo" />
                        <h1 className="text-light">{nameUsuario} {last_nameUsuario}</h1>
                        <div className="social-links mt-3 text-center">
                            <h3>{emailUsuario}</h3>
                        </div>
                    </div>

                    <nav className="navbar nav-menu navbar">
                        <ul>
                            <li><Link to="/main" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'home']} size="2x" /><span>Inicio</span></Link></li>
                            <li><Link to="/Estadistica" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'sort-amount-down']} size="2x" /><span>Estadisticas</span></Link></li>
                            <li><Link to="/Cuentas" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'user-circle']} size="2x" /><span>Cuentas</span></Link></li>
                            <li><Link to="/metas-planes" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'user-circle']} size="2x" /><span>Metas y planes</span></Link></li>
                            <li><Link to="/configuracion" className="nav-link scrollto active"><FontAwesomeIcon icon={['fa', 'tools']} size="2x" /><span>Configuracion</span></Link></li>
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
/**import React, { useEffect, useState } from 'react';
import AnyChart from 'anychart-react'

const Grafica = () => {

    const [data, setData] = useState([1, 2, 3, 4]);

    const complexSettings = {
        width: 700,
        height: 500,
        type: 'pie',
        data: data,
        title: 'Resumen',
        yAxis: [1, {
            orientation: 'center',
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

    const obtenerData = async () => {
        const urlApi = '';
        const response = await fetch(urlApi);
        if (response.status === 200) {
            const body = await response.json();
            setData(body);
        }
    }

    useEffect(() => {
        obtenerData();
    }, [])


    return (
        <div className="container" >
            <h1 className="text-center" >Grafica</h1>
            <AnyChart
                {...complexSettings}
            />
        </div>
    )
}

export default Grafica;
**/