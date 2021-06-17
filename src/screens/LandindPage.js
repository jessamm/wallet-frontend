import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg'


const LandindPage = () => {
    return (
        <>
            <div className="main-login bg-blue text-center" >
                <main className="form-signin bg-blue">

                    <img src={logo} alt="logo" width="75%" height="75%" className="img-fluid" />

                    <p className="text-warning text-center" >"Lo único que es un activo o un pasivo eres Tú Mismo, por qué en la última instancia eres tú quien puede hacer el dinero sea un activo o un pasivo"</p>

                    <p className="text-white text-center text-sm" >Comienza a mejorar tus finanzas personales estamos aqui para ayudarte</p>

                    <Link to="/create-user" className="w-100 btn btn-warning mb-2 mt-2"><b className="text-sm" >Comenzemos</b></Link>

                </main>
            </div>
        </>
    )
}

export default LandindPage
