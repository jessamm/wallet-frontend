import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/img/profile-img.jpg';
import "../Configuracion/Configuracion.css";
import Menu from '../../../Components/Menu/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FilledInput from '@material-ui/core/FilledInput';



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
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [imagen, setImagen] = useState(null);
    const [contraseña, setContraseña] = useState('');
    const [contraseñaNueva, setContraseñaNueva] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [last_name, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [nameImage, setNameImage] = useState('')
    //campos nuevos favor agregar a la base
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [pais, setPais] = useState("");
    const [codigoPostal, setCodigoPostal] = useState('');
    const [descripccion, setDescripccion] = useState('');
    const [telefono, setTelefono] = useState('')
    const [urlImagen, setUrlImage] = useState('')
    const [editar, setEditar] = useState(false)
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
            'telefono': telefono
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

    useEffect(() => {
        getUser();
    }, [])

    const getUser = () => {

        let nameUsuario = localStorage.getItem("name");
        let last_nameUsuario = localStorage.getItem("last_name");
        let emailUsuario = localStorage.getItem("email");
        let direccionUsuario = localStorage.getItem("direccion");
        let ciudadUsuario = localStorage.getItem("ciudad");
        let telefonoUsuario = localStorage.getItem("telefono");
        let paisUsuario = localStorage.getItem("pais");
        let codigoPostalUsuario = localStorage.getItem("codigoPostal");
        let descripcionUsuario = localStorage.getItem("descripcion");

        setName(nameUsuario);
        setLastName(last_nameUsuario);
        setCiudad(ciudadUsuario);
        setEmail(emailUsuario);
        setDireccion(direccionUsuario);
        setDescripccion(descripcionUsuario);
        setTelefono(telefonoUsuario);
        setCodigoPostal(codigoPostalUsuario);
        setPais(paisUsuario);

    }

    const subirImagen = async (e) => {
        let formData = new FormData();
        let imagen = e.target.files[0];
        let uploadPreset = 'h7gfbvl6';
        let urlApiImagen = 'https://api.cloudinary.com/v1_1/dnnfs5ttk/image/upload';
        formData.append('file', imagen);
        formData.append('upload_preset', uploadPreset);

        const response = await fetch(urlApiImagen, {
            method: 'POST',
            body: formData
        });

        const body = await response.json();
        const { url } = body;

        const res = await fetch('Direccion de su endepoing para visualizar la foto', {
            method: 'PUT',
            body: JSON.stringify({ urlFoto: url })
        });
        const bodyFoto = await res.json();
        console.log(bodyFoto);
    }

    const openDialogoImagen = () => {
        document.getElementById('input-img-perfil').click();
    }

    const actualizarContrasena = () => {
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


            // try {
            //     let response = await fetch(`${API}/`, {
            //         method: "POST",
            //         headers: { "Content-Type": "application/json" },
            //         body: JSON.stringify(data),
            //     });
            //     let body = await response.json();

            //     console.log('Respuesta del servidor => ', body)

            // } catch (error) {
            //     console.error(error);
            // }


        }
    }

    const actualizarInformacion = () => {
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

        // try {
        //     let response = await fetch(`${API}/`, {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(data),
        //     });
        //     let body = await response.json();

        //     console.log('Respuesta del servidor => ', body)

        // } catch (error) {
        //     console.error(error);
        // }

    }

    const cerrarSesion = async (e) => {
        e.preventDefault();

        localStorage.clear();
        window.location.href = "http://localhost:3000/login";
    }

    return (
        <>
            <div className={classes.root}>
                <Menu />
                <main style={{ marginTop: "8vh" }} className={classes.content}>
                    <div className="content">
                        <div className="row-perfil d-flex justify-content-center" style={{ marginTop: "10vh" }}>
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="title">Configuracion Perfil</h5>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row-perfil m-2">
                                                <div className="col-md-12 d-none">
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

                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <TextField
                                                            style={{ width: '100%' }}
                                                            id="standard-multiline-flexible"
                                                            label="Correo Electronico"
                                                            multiline
                                                            maxRows={4}
                                                            value={email}
                                                            onChange={e => setEmail(e.target.value)}
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row m-2">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <TextField
                                                            style={{ width: '100%' }}
                                                            id="standard-multiline-flexible"
                                                            label="Nombre"
                                                            multiline
                                                            maxRows={4}
                                                            value={name}
                                                            onChange={e => setName(e.target.value)}
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <TextField
                                                            style={{ width: '100%' }}
                                                            id="standard-multiline-flexible"
                                                            label="Correo Electronico"
                                                            multiline
                                                            maxRows={4}
                                                            value={last_name}
                                                            onChange={e => setLastName(e.target.value)}
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">

                                                        <div className="row" >
                                                            <div className="col-6" >
                                                                <Button variant="contained" color="primary" data-toggle="modal" data-target="#exampleModal2" >
                                                                    Actualiza contraseña
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row m-2">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <TextField
                                                            style={{ width: '100%' }}
                                                            id="standard-multiline-flexible"
                                                            label="Direccion"
                                                            multiline
                                                            maxRows={4}
                                                            value={direccion}
                                                            onChange={e => setDireccion(e.target.value)}
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <TextField
                                                            style={{ width: '100%' }}
                                                            id="standard-multiline-flexible"
                                                            label="Numero de telefono"
                                                            multiline
                                                            maxRows={4}
                                                            value={telefono}
                                                            onChange={e => setTelefono(e.target.value)}
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row m-2">
                                                <div className="pr-1 col-md-12">
                                                    <div className="form-group">
                                                        <TextField
                                                            style={{ width: '100%' }}
                                                            id="standard-multiline-flexible"
                                                            label="Ciudad"
                                                            multiline
                                                            maxRows={4}
                                                            value={ciudad}
                                                            onChange={e => setCiudad(e.target.value)}
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <TextField
                                                            style={{ width: '100%' }}
                                                            id="standard-multiline-flexible"
                                                            label="Ciudad"
                                                            multiline
                                                            maxRows={4}
                                                            value={pais}
                                                            onChange={e => setPais(e.target.value)}
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <TextField
                                                            style={{ width: '100%' }}
                                                            id="standard-multiline-flexible"
                                                            label="Codigo Postal"
                                                            multiline
                                                            maxRows={4}
                                                            value={codigoPostal}
                                                            onChange={e => setCodigoPostal(e.target.value)}
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row m-2">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <TextareaAutosize
                                                            onChange={e => setDescripccion(e.target.value)}
                                                            style={{ width: '100%' }}
                                                            aria-label="minimum height"
                                                            minRows={7} 
                                                            value={descripccion}
                                                            placeholder="Sobre mi"
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <Button variant="contained" color="primary" data-toggle="modal" data-target="#exampleModal1">
                                                    Actualizar Perfil
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 d-none">
                                <div className="card-user card">
                                    <div className="card-body">
                                        <div className="author">
                                            <Link to="/#" className="usuario-config">
                                                <img alt="..." className="avatar border-gray" src={profile}></img>
                                                <h5 className="title">{name} {last_name}</h5>
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

                                    <div>
                                        {/* Button trigger modal */}

                                        {/* Modal */}
                                        <div style={{ marginTop: "5vh" }} className="modal fade" id="exampleModal2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                            <input placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} type="password" className="form-control" ></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Contraseña nueva</label>
                                                            <input placeholder="Contraseña nueva" value={contraseñaNueva} onChange={(e) => setContraseñaNueva(e.target.value)} type="password" className="form-control" ></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Confirmar Contraseña</label>
                                                            <input placeholder="Confirmar contraseña" value={confirmar} onChange={(e) => setConfirmar(e.target.value)} type="password" className="form-control"></input>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <Button variant="contained" color="secondary" data-dismiss="modal">Cerrar</Button>
                                                        <Button variant="contained" color="primary" onClick={actualizarContrasena} >Actualizar</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div style={{ marginTop: "5vh" }} className="modal fade" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Actualizar Perfil</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="col-md-12">
                                                            <div className="form-group m-2 mt-0">
                                                                <TextField
                                                                    style={{ width: '100%' }}
                                                                    id="standard-multiline-flexible"
                                                                    label="Correo Electronico"
                                                                    maxRows={4}
                                                                    value={email}
                                                                    onChange={e => setEmail(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="form-group m-2">
                                                                <TextField
                                                                    style={{ width: '100%' }}
                                                                    id="standard-multiline-flexible"
                                                                    label="Nombre"
                                                                    maxRows={4}
                                                                    value={name}
                                                                    onChange={e => setName(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="form-group m-2">
                                                                <TextField
                                                                    style={{ width: '100%' }}
                                                                    id="standard-multiline-flexible"
                                                                    label="Apellido"
                                                                    maxRows={4}
                                                                    value={last_name}
                                                                    onChange={e => setLastName(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="form-group m-2">
                                                                <TextField
                                                                    style={{ width: '100%' }}
                                                                    id="standard-multiline-flexible"
                                                                    label="Direccion"
                                                                    maxRows={4}
                                                                    value={direccion}
                                                                    onChange={e => setDireccion(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-6" >
                                                                <div className="form-group m-2">
                                                                    <TextField
                                                                        style={{ width: '100%' }}
                                                                        id="standard-multiline-flexible"
                                                                        label="Cuidad"
                                                                        maxRows={4}
                                                                        value={ciudad}
                                                                        onChange={e => setCiudad(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-6" >
                                                                <div className="form-group m-2">
                                                                    <TextField
                                                                        style={{ width: '100%' }}
                                                                        id="standard-multiline-flexible"
                                                                        label="Pais"
                                                                        maxRows={4}
                                                                        value={pais}
                                                                        onChange={e => setPais(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-6" >
                                                                <div className="form-group m-2">
                                                                    <TextField
                                                                        style={{ width: '100%' }}
                                                                        id="standard-multiline-flexible"
                                                                        label="Codigo postal"
                                                                        maxRows={4}
                                                                        value={codigoPostal}
                                                                        onChange={e => setCodigoPostal(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-6" >
                                                                <div className="form-group m-2">
                                                                    <TextField
                                                                        style={{ width: '100%' }}
                                                                        id="standard-multiline-flexible"
                                                                        label="telefono"
                                                                        maxRows={4}
                                                                        value={telefono}
                                                                        onChange={e => setTelefono(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="form-group m-2">
                                                                    <TextareaAutosize
                                                                        onChange={e => setDescripccion(e.target.value)}
                                                                        style={{ width: '100%', height: '100%' }}
                                                                        aria-label="minimum height"
                                                                        minRows={5}
                                                                        value={descripccion}
                                                                        placeholder="Descripcion perfil"

                                                                    />
                                                                </div>
                                                            </div>
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
