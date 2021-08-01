import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//importaciones material-ui
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Menu from '../../../Components/Menu/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const API = process.env.REACT_APP_API;
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

const MetasPlanes = () => {
    const classes = useStyles();
    const [openMetas, setOpenMetas] = useState(false);
    const [openPlan, setOpenPlan] = useState(false);

    /**llenado de tablas */
    const [datosMetas, setDatosMetas] = useState([]);
    const [planAhorro, setPlanAhorro] = useState([]);
    const [categorias, setCategorias] = useState([]);
    // localStorage.getItem(1)
    const idUsuario = localStorage.getItem("idUsuario");
    const nameUsuario = localStorage.getItem("name");
    const last_nameUsuario = localStorage.getItem("last_name");
    const emailUsuario = localStorage.getItem("email");
    /*
    const idUsuario = JSON.parse(localStorage.getItem("idUsuario"));
    const nameUsuario = JSON.parse(localStorage.getItem("name"));
    const last_nameUsuario = JSON.parse(localStorage.getItem("last_name"));
    const emailUsuario = JSON.parse(localStorage.getItem("email"));
    */

    const styles = (theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 400,
        },
        table: {
            minWidth: 650,
        },
    });

    const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });

    const DialogContent = withStyles((theme) => ({
        root: {
            padding: theme.spacing(2),
        },
    }))(MuiDialogContent);

    const DialogActions = withStyles((theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(1),
        },
    }))(MuiDialogActions);

    //llenar datos metas
    const obtenerDatosMetas = async () => {

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
    //llenar plan ahorro
    const obtenerPlanAhorro = async () => {

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
    const obtenerCategorias = async () => {
        const res = await fetch(`${API}/get-categories`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(),
        });
        const data = await res.json();
        if (data) {
            setCategorias(data);
        }
    }

    const handleCloseMetas = () => {
        setOpenMetas(false);
    }

    const handleOpenMetas = () => {
        setOpenMetas(true);
    }

    const handleClosePlan = () => {
        setOpenPlan(false);
    }

    const handleOpenPlan = () => {
        setOpenPlan(true);
    }

    useEffect(() => {
        obtenerDatosMetas();
        obtenerPlanAhorro();
        obtenerCategorias();
    }, [])

    //METAS de gasto
    //const [id_categorie, setId_categorie] = useState("");
    const [mount_limit, setMount_limit] = useState("");
    const [date_end, setDate_end] = useState("");
    const [nameMeta, setNameMeta] = useState("");
    const [id_categorie, setIdCategorie] = useState("");
    //agregar a la base el nombre de las metas

    const [errorLlenado, handleError] = useState(false);

    const handleSubmitMetas = async (e) => {
        e.preventDefault();

        if (mount_limit.trim() === "" || date_end === "" || nameMeta.trim() === "") {
            handleError(true);
            alert("Todos los campos deben ser llenados");
            return;
        }
        handleError(false);

        const json_data = {
            'id_user': idUsuario,
            'date_end': date_end,
            'id_categorie': id_categorie,
            'mount_limit': mount_limit
        };

        const res = await fetch(`${API}/set-goals`, {
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
    //AHORROS
    //se usa id categorie y mount limit de arriba date end
    const [nameAhorro, setNameAhorro] = useState(""); //agregar nombre al ahorro

    const handleSubmitPlan = async (e) => {
        e.preventDefault();

        if (mount_limit.trim() === "" || date_end === "" || nameAhorro.trim() === "") {
            handleError(true);
            alert("Todos los campos deben ser llenados");
            return;
        }
        handleError(false);

        const json_data = {
            'id_user': idUsuario,
            'date_end': date_end,
            'id_categorie': id_categorie,
            'mount_limit': mount_limit
            //'nameAhorro': nameAhorro
        };

        const res = await fetch(`${API}/set-planning`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json_data),
        });

        if (res.status) {
            const data = await res.json();
            console.log(data.Session);
        };
    };

    const EliminarMeta = async (e) => {
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
            console.log("==========================Meta eliminada ==============================");
        };
    };

    const EliminarPlan = async (e) => {
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
            console.log("==========================Plan eliminado ==============================");
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
                                        <h5 className="title">Metas creadas</h5>
                                    </div>
                                    <div className="card-body">

                                        <TableContainer component={Paper}>
                                            <Table className={styles.table} size="small" aria-label="a dense table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell color="primary" align="right">Nombre Usuario</TableCell>
                                                        <TableCell color="primary" align="right">Descripcion</TableCell>
                                                        <TableCell color="primary" align="right">Fecha Inicio</TableCell>
                                                        <TableCell color="primary" align="right">Maximo a Gastar</TableCell>
                                                        <TableCell color="primary" align="right">Gastos Actuales</TableCell>
                                                        <TableCell color="primary" align="right">Eliminar</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {datosMetas.map((row) => (
                                                        <TableRow key={row.name}>
                                                            <TableCell component="th" scope="row">{row.nameUsuario}</TableCell>
                                                            <TableCell align="right">{row.description}</TableCell>
                                                            <TableCell align="right">{row.date_init}</TableCell>
                                                            <TableCell align="right">{row.mount_limit}</TableCell>
                                                            <TableCell align="right">{row.mount_actual}</TableCell>
                                                            <TableCell align="right">
                                                                <Button size="small" style={{ backgroundColor: '#e53935', color: '#fff' }} >Eliminar</Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                    </div>
                                    <br></br>
                                    <Button size="small" variant="contained" className="m-3" color="primary" onClick={handleOpenMetas}>
                                        Agregar
                                    </Button>
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

                                        <TableContainer component={Paper}>
                                            <Table className={styles.table} size="small" aria-label="a dense table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell color="primary" align="right">Nombre Usuario</TableCell>
                                                        <TableCell color="primary" align="right">Descripcion</TableCell>
                                                        <TableCell color="primary" align="right">Fecha Inicio</TableCell>
                                                        <TableCell color="primary" align="right">Fecha Final</TableCell>
                                                        <TableCell color="primary" align="right">Monto actual</TableCell>
                                                        <TableCell color="primary" align="right">Eliminar</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {planAhorro.map((row) => (
                                                        <TableRow key={row.name}>
                                                            <TableCell component="th" scope="row">{row.nameUsuario}</TableCell>
                                                            <TableCell align="right">{row.description}</TableCell>
                                                            <TableCell align="right">{row.date_init}</TableCell>
                                                            <TableCell align="right">{row.mount_limit}</TableCell>
                                                            <TableCell align="right">{row.mount_actual}</TableCell>
                                                            <TableCell align="right">
                                                                <Button size="small" style={{ backgroundColor: '#e53935', color: '#fff' }} >Eliminar</Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                        <table class="table table-sm mt-4 d-none">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Nombre Usuario</th>
                                                    <th scope="col">Descripcion</th>
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
                                                                <td>{nameUsuario} {last_nameUsuario}</td>
                                                                <td>{datos.date_init}</td>
                                                                <td>L {datos.date_end}</td>
                                                                <td>L {datos.mount_actual}</td>
                                                                <th scope="col">
                                                                    <button className="btn btn-sm btn-danger" onClick={EliminarPlan}>Eliminar</button>
                                                                </th>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <br></br>
                                    <Button size="small" variant="contained" className="m-3" color="primary" onClick={handleOpenPlan}>
                                        Agregar
                                    </Button>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>    
                </Container>
            </main>
            { /* MODAL METAS */}
                <div>
                    <Dialog onClose={handleCloseMetas} aria-labelledby="customized-dialog-title" open={openMetas}>
                        <DialogTitle id="customized-dialog-title" onClose={handleCloseMetas}>
                            Registro metas
                        </DialogTitle>
                        <DialogContent dividers>
                            <TextField
                                id="standard-full-width"
                                label="Limite"
                                style={{ marginTop: 8, width: '100%' }}
                                placeholder="Ingrese el limite"
                                helperText="Limite"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="datetime-local"
                                label="Fecha"
                                type="date"
                                style={{ marginTop: 8, width: '100%' }}
                                defaultValue="2017-05-24T10:30"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="standard-full-width"
                                label="Nombre meta"
                                style={{ marginTop: 8, width: '100%' }}
                                placeholder="Ingrese el nombre meta"
                                helperText="Nombre meta"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                select
                                label="Seleccione"
                                helperText="Seleccione una categoria"
                                style={{ width: '100%' }}
                            >
                                {categorias.map((option) => (
                                    <MenuItem key={option.name} value={option.name}>
                                        {option.name}
                                    </MenuItem>
                                ))}
                            </TextField>

                            {errorLlenado ? (
                                <Typography gutterBottom>
                                    Todos los campos deben ser llenados
                                </Typography>
                            ) : null}

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseMetas} color="primary">
                                Guardar
                            </Button>
                            <Button onClick={handleCloseMetas} color="secondary">
                                Cancelar
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                { /* FIN MODAL METAS */}

                { /* MODAL PLAN */}
                <div>
                    <Dialog onClose={handleClosePlan} aria-labelledby="customized-dialog-title" open={openPlan}>
                        <DialogTitle id="customized-dialog-title" onClose={handleClosePlan}>
                            Registro plan
                        </DialogTitle>
                        <DialogContent dividers>
                            <TextField
                                id="standard-full-width"
                                label="Limite"
                                style={{ marginTop: 8, width: '100%' }}
                                placeholder="Ingrese el limite"
                                helperText="Limite"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="datetime-local"
                                label="Fecha Final"
                                type="date"
                                style={{ marginTop: 8, width: '100%' }}
                                defaultValue="2017-05-24T10:30"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="standard-full-width"
                                label="Nombre Ahorro"
                                style={{ marginTop: 8, width: '100%' }}
                                placeholder="Ingrese el Nombre Ahorro"
                                helperText="Nombre Ahorro"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                select
                                label="Seleccione"
                                helperText="Seleccione una categoria"
                                style={{ width: '100%' }}
                            >
                                {categorias.map((option) => (
                                    <MenuItem key={option.name} value={option.name}>
                                        {option.name}
                                    </MenuItem>
                                ))}
                            </TextField>

                            {errorLlenado ? (
                                <Typography gutterBottom>
                                    Todos los campos deben ser llenados
                                </Typography>
                            ) : null}

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClosePlan} color="primary">
                                Guardar
                            </Button>
                            <Button onClick={handleClosePlan} color="secondary">
                                Cancelar
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                { /* FIN MODAL PLAN */}
        </div>
    )
}

export default MetasPlanes;
