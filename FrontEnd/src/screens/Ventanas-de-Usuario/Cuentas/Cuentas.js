import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Configuracion/Configuracion.css";
import Menu from '../../../Components/Menu/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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


const API = process.env.REACT_APP_API;

const Cuentas = () => {
    const classes = useStyles();
    //probar 
    const idUsuario = localStorage.getItem("idUsuario");
    const nameUsuario = localStorage.getItem("name");
    const last_nameUsuario = localStorage.getItem("last_name");
    const emailUsuario = localStorage.getItem("email");

    const [cuentas, setCuentas] = useState([]);
    const [cuentasEfectivo, setCuentasEfectivo] = useState([]);
    const [Metas, setDatosMetas] = useState([]);
    const [Ahorro, setPlanAhorro] = useState([]);

    const [tipoCuenta, setTipoCuenta] = useState(0);
    const [nombreBanco, setNombreBanco] = useState("");
    const [fechaVencimiento, setFechaVencimiento] = useState("");
    const [csv, setCsv] = useState("");
    const [numeroCuenta, setNumeroCuenta] = useState("");
    const [monto, setMonto] = useState("");

    const obtenerCuentas = async () => {

        const json_data = {
            //verificar que el valor entre comillas sea igual al de la base por favor
            'id_user': idUsuario
        };
        const res = await fetch(`${API}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });
        const data = await res.json();
        if (data) {
            setCuentas(data);
        }
    }
    const obtenerPlan = async () => {

        const json_data = {
            //verificar que el valor entre comillas sea igual al de la base por favor
            'id_user': idUsuario
        };
        const res = await fetch(`${API}/get-planning`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });
        const data = await res.json();
        if (data) {
            setPlanAhorro(data);
        }
    }
    const obtenerMetas = async () => {

        const json_data = {
            //verificar que el valor entre comillas sea igual al de la base por favor
            'id_user': idUsuario
        };
        const res = await fetch(`${API}/get-goals`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });
        const data = await res.json();
        if (data) {
            setDatosMetas(data);
        }
    }
    //cambiar por pagos
    const obtenerCuentasEfectivo = async () => {
        const json_data = {
            //verificar que el valor entre comillas sea igual al de la base por favor
            'id_user': idUsuario
        };
        const res = await fetch(`${API}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });
        const data = await res.json();
        if (data) {
            setCuentasEfectivo(data);
        }
    }
    useEffect(() => {
        obtenerCuentas();
        obtenerCuentasEfectivo();
        obtenerMetas();
        obtenerPlan();
    })

    const handleSubmitCuentas= async (e) => {
        e.preventDefault();

        const json_data = {
            '': tipoCuenta,
            '': fechaVencimiento,
            '': csv,
            '': numeroCuenta,
            '': monto,
            '': nombreBanco,
        };

        const res = await fetch(`${API}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });
        //const data = await res.json();
        //console.log(data.Session);
        if (res.status) {
            const data = await res.json();
            console.log(data);
        }
    };

    const handleSubmitPagos = async (e) => {
        e.preventDefault();

        const json_data = {
        };

        const res = await fetch(`${API}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });
        //const data = await res.json();

        //console.log(data.Session);
        if (res.status) {
            const data = await res.json();
            console.log(data.Session);
        }
    };

    const EliminarCuentaEfectivo = async (e) => {
        const json_data = {
            'id_user': idUsuario
        };

        const res = await fetch(`${API}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });

        if (res.status) {
            //const data = await res.json();
            console.log("==========================Efectivo eliminada ==============================");
        };
    };

    const EliminarCuenta = async (e) => {
        const json_data = {
            'id_user': idUsuario
        };

        const res = await fetch(`${API}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });

        if (res.status) {
            //const data = await res.json();
            console.log("==========================Ahorro eliminado ==============================");
        };
    };
    
    const cerrarSesion = async (e) => {
        e.preventDefault();

        localStorage.clear();
        window.location.href = "http://localhost:3000/login";
    }

    return (
        <div className={classes.root}>
        <Menu>
          {/**Barra Lateral y Barra Horizontal */}
        </Menu>
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <div className="content">
                    <div className="row-perfil">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="title">Cuentas</h5>
                                    <div className="row" >
                                        <div className="col-6" >
                                            <div className="form-group">
                                                <select defaultValue={tipoCuenta} className="form-control" onChange={e => setTipoCuenta(e.target.value)} >
                                                    <option value="0"  >Seleccione cuenta</option>
                                                    <option value="1" >Debito</option>
                                                    <option value="2" >Ahorro</option>
                                                    <option value="3" >Credito</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6" >
                                            <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#cuentaahorro">
                                                Agregar Cuenta
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-body">

                                    <table class="table table-sm mt-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Nombre del banco</th>
                                                <th scope="col">CSV</th>
                                                <th scope="col">Numero Cuenta</th>
                                                <th scope="col">Tipo de cuenta</th>
                                                <th scope="col">Monto</th>
                                                <th scope="col">Eliminar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cuentas.map((cuenta, key) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row">{key++}</th>
                                                            <td>{cuenta.nombreBanco}</td>
                                                            <td>$ {cuenta.csv}</td>
                                                            <td>$ {cuenta.numeroCuenta}</td>
                                                            <td>$ {cuenta.tipoCuenta}</td>
                                                            <td>$ {cuenta.monto}</td>
                                                            <th scope="col">
                                                                <button className="btn btn-sm btn-danger" onClick={EliminarCuenta}>Eliminar</button>
                                                            </th>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="title">Pagos</h5>
                                    <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#cuentaefectivo">
                                        Agregar pago
                                    </button>
                                </div>
                                <div className="card-body">
                                    <table class="table table-sm mt-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Descripcion</th>
                                                <th scope="col">Monto</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Cuenta</th>
                                                <th scope="col">Eliminar</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cuentasEfectivo.map((cuenta, key) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row">{key++}</th>
                                                            <td>{nameUsuario} {last_nameUsuario}</td>
                                                            <td>$ {cuenta.saldoMes}</td>
                                                            <td>$ {cuenta.saldoActual}</td>
                                                            <td>$ {cuenta.balance}</td>
                                                            <th scope="col">
                                                                <button className="btn btn-sm btn-danger" onClick={EliminarCuentaEfectivo} >Eliminar</button>
                                                            </th>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Modal */}
                        <div className="modal fade" id="cuentaahorro" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        {
                                            tipoCuenta == 1 && <h5 className="modal-title" id="exampleModalLabel">Cuenta de Debito</h5>
                                        }

                                        {
                                            tipoCuenta == 2 && <h5 className="modal-title" id="exampleModalLabel">Cuenta de Ahorro</h5>
                                        }

                                        {
                                            tipoCuenta == 3 && <h5 className="modal-title" id="exampleModalLabel">Cuenta de Credito</h5>
                                        }

                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>                                                
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        {
                                            tipoCuenta == 1 &&
                                            <>
                                                <div className="form-group">
                                                    <label>Nombre del banco</label>
                                                    <input placeholder="Ingrese el nombre del banco" onChange={(e) => setNombreBanco(e.target.value)} type="text" className="form-control" ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>fecha vencimiento</label>
                                                    <input type="date" className="form-control" onChange={(e) => setFechaVencimiento(e.target.value)} ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>CSV</label>
                                                    <input placeholder="Ingrese CSV" type="text" className="form-control" onChange={(e) => setCsv(e.target.value)}></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Numero de cuenta</label>
                                                    <input placeholder="Ingrese el numero de cuenta" ptype="text" className="form-control" onChange={(e) => setNumeroCuenta(e.target.value)}></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Monto Cuenta</label>
                                                    <input placeholder="Ingrese Monto" type="text" className="form-control" onChange={(e) => setMonto(e.target.value)}></input>
                                                </div>
                                            </>
                                        }
                                        {
                                            tipoCuenta == 2 && 
                                            <>
                                                <div className="form-group">
                                                    <label>Nombre del banco</label>
                                                    <input placeholder="Ingrese el nombre del banco" onChange={(e) => setNombreBanco(e.target.value)} type="text" className="form-control" ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>fecha vencimiento</label>
                                                    <input type="date" className="form-control" onChange={(e) => setFechaVencimiento(e.target.value)} ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>CSV</label>
                                                    <input placeholder="Ingrese CSV" type="text" className="form-control" onChange={(e) => setCsv(e.target.value)}></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Numero de cuenta</label>
                                                    <input placeholder="Ingrese el numero de cuenta" ptype="text" className="form-control" onChange={(e) => setNumeroCuenta(e.target.value)}></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Monto Cuenta</label>
                                                    <input placeholder="Ingrese Monto" type="text" className="form-control" onChange={(e) => setMonto(e.target.value)}></input>
                                                </div>
                                            </>
                                        }
                                        {
                                            tipoCuenta == 3 &&
                                            <>
                                                <div className="form-group">
                                                    <label>Nombre del banco</label>
                                                    <input placeholder="Ingrese el nombre del banco" onChange={(e) => setNombreBanco(e.target.value)} type="text" className="form-control" ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>fecha vencimiento</label>
                                                    <input type="date" className="form-control" onChange={(e) => setFechaVencimiento(e.target.value)} ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>CSV</label>
                                                    <input placeholder="Ingrese CSV" type="text" className="form-control" onChange={(e) => setCsv(e.target.value)}></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Numero de cuenta</label>
                                                    <input placeholder="Ingrese el numero de cuenta" ptype="text" className="form-control" onChange={(e) => setNumeroCuenta(e.target.value)}></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Monto Cuenta</label>
                                                    <input placeholder="Ingrese Monto" type="text" className="form-control" onChange={(e) => setMonto(e.target.value)}></input>
                                                </div>
                                            </>
                                        }

                                        {
                                            tipoCuenta == 0 && <h5 className="modal-title text-center" id="exampleModalLabel">Seleccione un tipo de cuenta</h5>
                                        }

                                    </div>
                
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
                                        <button type="button" className="btn btn-sm btn-primary" onClick={handleSubmitCuentas}>Agregar</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="cuentaefectivo" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Agregar pagos</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>                                                
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label>Descripcion</label>
                                            <input placeholder="Seleccione la Descripcion" onChange={(e) => setNombreBanco(e.target.value)} type="text" className="form-control" ></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Monto</label>
                                            <input placeholder="Ingrese monto" type="text" className="form-control" onChange={(e) => setMonto(e.target.value)} ></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Cuenta</label>
                                            <select className="form-control" >
                                                {
                                                    cuentas.map((datos)=>{
                                                        return(
                                                            <option value={datos.id}>{datos.nombreBanco}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Tipo</label>
                                            <select defaultValue="0" className="form-control" >
                                                <option value="0" >Seleccione</option>
                                                {
                                                    Metas.map((datos)=>{
                                                        return(
                                                            <option value={datos.id}>{datos.nameMeta}</option>
                                                        )
                                                    })
                                                }
                                                {
                                                    Ahorro.map((datos)=>{
                                                        return(
                                                            <option value={datos.id}>{datos.nameMeta}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
                                        <button type="button" className="btn btn-sm btn-primary" onClick={handleSubmitPagos}>Agregar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    </div>
    )
}

export default Cuentas
