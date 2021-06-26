CREATE DATABASE wallet;
use wallet;

/*La tabla Usuario cuenta con la informacion del Usuario en donde se almacenara la contraseña y IdUsuario el cual puede ser un numero de 
telefono o correo electronico.
*/
CREATE TABLE UserInformation(
idUser Varchar(30) not null primary key,
pass varchar(20),  
firstName Varchar(15) not null,
secondName Varchar(15),
surname Varchar(15) not null,
secondSurname Varchar(15)
);


/*Esta tabla funciona como un catalogo que contendra los tipos de Transacciones con detalles del mismo*/
CREATE TABLE TransactionType(
idTransactionType int not null primary key auto_increment,
nameTransaction varchar(20),
descriptionTransaction varchar(120)
);

/*Llevara cada una de las transacciones realizadas
-El id de la transaccion es auto_incremental, 
-El campo fecha se llena automaticamente usando la hora de la transaccion
*/
CREATE TABLE TransactionDetail(
idTransactionDetails int not null primary key auto_increment,
idUser Varchar(30),
idTransactionType int,
mount numeric(8,2),
dateTransaction timestamp default current_timestamp on update current_timestamp,
Foreign key (idUser) references UserInformation(idUser),
Foreign key (idTransactionType) references TransactionType(idTransactionType)
);


