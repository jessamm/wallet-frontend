CREATE DATABASE wallet;
use wallet;

/*La tabla Usuario cuenta con la informacion del Usuario en donde se almacenara la contraseña y IdUsuario el cual puede ser un numero de 
telefono o correo electronico.
*/
CREATE TABLE Usuario(
idUsuario Varchar(30) not null primary key,
contraseña varchar(20),  
firstName Varchar(15) not null,
segundoNombre Varchar(15),
primerApellido Varchar(15) not null,
segundoSegundo Varchar(15)
);


/*Esta tabla funciona como un catalogo que contendra los tipos de Transacciones con detalles del mismo*/
CREATE TABLE TipoTransaccion(
idTipoTransaccion int not null primary key auto_increment,
NombreTransaccion varchar(20),
Descripcion varchar(120)
);

/*Llevara cada una de las transacciones realizadas
-El id de la transaccion es auto_incremental, 
-El campo fecha se llena automaticamente usando la hora de la transaccion
*/
CREATE TABLE Transacciones(
idTransacciones int not null primary key auto_increment,
idUsuario Varchar(30),
idTipoTransaccion int,
cantidad numeric(8,2),
fecha timestamp default current_timestamp on update current_timestamp,
Foreign key (idUsuario) references Usuario(idUsuario),
Foreign key (idTipoTransaccion) references TipoTransaccion(idTipoTransaccion)
);


