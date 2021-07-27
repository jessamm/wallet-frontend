import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/img/profile-img.jpg';
import "../Configuracion/Configuracion.css";
import Menu from '../../../Components/Menu/Menu';
import { makeStyles } from '@material-ui/core/styles';



const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }));


//import finanzas from '../assets/img/finanzas.jpg';
const API = process.env.REACT_APP_API;

const Configuracion = () => {
    const classes = useStyles();
    //
    const nameUsuario = localStorage.getItem("name");
    const last_nameUsuario = localStorage.getItem("last_name");
    const emailUsuario = localStorage.getItem("email");
    const direccionUsuario = localStorage.getItem("direccion");
    const ciudadUsuario = localStorage.getItem("ciudad");
    const telefonoUsuario = localStorage.getItem("telefono");
    const paisUsuario = localStorage.getItem("pais");
    const codigoPostalUsuario = localStorage.getItem("codigoPostal");
    const descripcionUsuario = localStorage.getItem("descripcion");
    //
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
    const [telefono, setTelefono] = useState("")
    const [urlImagen, setUrlImage]=useState("")
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
            'descripcion': descripccion,
            'telefono':telefono
        }

        const res = await fetch(`${API}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });

        const data = await res.json();
        console.log(data);
        //crear condicion y sustituir valores en BD
    };


    const handelSutmitImagen = (e) => {
        let imagen = e.target.files[0];
        setImagen(imagen);
        setNameImage(imagen.name);
    }

    const subirImagen=async(e)=>{
        let formData=new FormData();
        let imagen=e.target.files[0];
        let uploadPreset='h7gfbvl6';
        let urlApiImagen='https://api.cloudinary.com/v1_1/dnnfs5ttk/image/upload';
        formData.append('file',imagen);
        formData.append('upload_preset',uploadPreset);  
        
        const response= await fetch(urlApiImagen,{
            method:'POST',
            body: formData
        });

        const body= await response.json();
        const {url}=body;

        const res =await fetch('Direccion de su endepoing para visualizar la foto',{
            method:'PUT',
            body: JSON.stringify({urlFoto: url})
        });
        const bodyFoto=await res.json();
        console.log(bodyFoto);
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
        <>

                <div className={classes.root}>
                <Menu>

                </Menu>
                <main style={{marginTop:"8vh"}} className={classes.content}>
                    <div className="content">
                        <div className="row-perfil"  style={{marginTop:"10vh"}}>
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
                                                        <input onChange={subirImagen} className="d-none" type="file" id="input-img-perfil" />
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
                                                        <input placeholder="Correo Electronico" type="email" className="form-control">{emailUsuario}</input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="pr-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Nombre</label>
                                                        <input placeholder="Nombre" type="text" className="form-control" >{nameUsuario}</input>
                                                    </div>
                                                </div>
                                                <div className="pl-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Apellido</label>
                                                        <input placeholder="Apellido" type="text" className="form-control" >{last_nameUsuario}</input>
                                                    </div>
                                                </div>
                                                <div className="pl-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Contraseña</label>
                                                        <input placeholder="Contraseña" type="password" className="d-none form-control" ></input>
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
                                                        <input placeholder="Direccion" type="text" className="form-control" >{direccionUsuario}</input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Telefono</label>
                                                        <input placeholder="Numero de telefono" type="text" className="form-control" >{telefonoUsuario}</input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="pr-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Ciudad</label>
                                                        <input placeholder="Ciudad" type="text" className="form-control" >{ciudadUsuario}</input>
                                                    </div>
                                                </div>
                                                <div className="px-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Pais</label>
                                                        <input placeholder="Pais" type="text" className="form-control" >{paisUsuario}</input>
                                                    </div>
                                                </div>
                                                <div className="pl-1 col-md-4">
                                                    <div className="form-group">
                                                        <label>Codigo Postal</label>
                                                        <input placeholder="Codigo Postal" type="number" className="form-control" >{codigoPostalUsuario}</input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Sobre Mi</label>
                                                        <textarea cols="80" placeholder="Descripcion de perfil" rows="4" className="form-control" >{descripcionUsuario}</textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#exampleModal1">
                                                            Actualizar Perfil
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
                                                <img alt="..." className="avatar border-gray" src={profile}></img>
                                                <h5 className="title">{nameUsuario} {last_nameUsuario}</h5>
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

                                    <div>
                                        {/* Button trigger modal */}

                                        {/* Modal */}
                                        <div style={{marginTop:"5vh"}} className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                            <input placeholder="Codigo Postal" onChange={(e) => setContraseña(e.target.value)} type="password" className="form-control" ></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Contraseña nueva</label>
                                                            <input placeholder="Codigo Postal" onChange={(e) => setContraseñaNueva(e.target.value)} type="password"  className="form-control" ></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Confirmar Contraseña</label>
                                                            <input placeholder="Codigo Postal" onChange={(e) => setConfirmar(e.target.value)} type="password"  className="form-control"></input>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
                                                        <button type="button" onClick={actualizarContrasena} className="btn btn-sm btn-primary">Actualizar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div style={{marginTop:"5vh"}} className="modal fade" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Actualizar Perfil</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="form-group">
                                                            <label>Correo Electronico</label>
                                                            <input placeholder="Ingrese su correo electronico" onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" ></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Nombre</label>
                                                            <input placeholder="Ingrese su nombre" onChange={(e) => setName(e.target.value)} type="text"  className="form-control" ></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Apellido</label>
                                                            <input placeholder="Ingrese su apellido" onChange={(e) => setLastName(e.target.value)} type="text"  className="form-control"></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Direccion</label>
                                                            <input placeholder="Ingrese su direccion" onChange={(e) => setDireccion(e.target.value)} type="text"  className="form-control"></input>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group">
                                                                <label>Ciudad</label>
                                                                <input placeholder="Ingrese su cuidad"  onChange={(e) => setCiudad(e.target.value)} type="text"  className="form-control"></input>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Pais</label>
                                                                <input placeholder="Ingrese su Pais"  onChange={(e) => setPais(e.target.value)} type="text"  className="form-control"></input>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Codigo Postal</label>
                                                                <input placeholder="Ingrese su codigo Postal"  onChange={(e) => setCodigoPostal(e.target.value)} type="text"  className="form-control"></input>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Telefono</label>
                                                                <input placeholder="Ingrese su numero de telefono"  onChange={(e) => setTelefono(e.target.value)} type="text"  className="form-control"></input>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Descripcion del perfil</label>
                                                            <textarea placeholder="Descripcion del perfil"  onChange={(e) => setDescripccion(e.target.value)} type="text"  className="form-control"></textarea>
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
        </>
    );
}
export default Configuracion;
