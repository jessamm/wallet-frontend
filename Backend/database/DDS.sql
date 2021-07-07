CREATE DATABASE IF NOT EXISTS wallet;
USE wallet;

/* La tabla Usuario cuenta con la informacion del Usuario */

CREATE TABLE IF NOT EXISTS User(
    id INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL COMMENT 'Nombres del Usuario',
    last_name VARCHAR(100) COMMENT 'Apellidos del Usuario',
    email VARCHAR(190) UNIQUE COMMENT 'correo electronico',
    `password` VARCHAR(50) COMMENT 'Contraseña para inicio de Session',
    validated BIT DEFAULT 0 COMMENT 'Estado de la cuenta del usuario 0:No validado 1:validado',
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de creacion del usuario',
    update_date TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Fecha de ultima modificacion de algun parametro del usuario'
);


/* La tabla mail_validation lleva registro de las validaciones de las cuentas */
CREATE TABLE IF NOT EXISTS mail_validation(
    id INT AUTO_INCREMENT PRIMARY KEY,
    code_1 TINYINT NOT NULL COMMENT 'Pimer numero de 0-99 ',
    code_2 TINYINT NOT NULL COMMENT 'Segundo numero de 0-99 ',
    code_3 TINYINT NOT NULL COMMENT 'Tercer numero de 0-99 ',
    code_4 TINYINT NOT NULL COMMENT 'Cuarto numero de 0-99 ',
    fk_id_user INT NOT NULL COMMENT 'Relacion al usuario que se esta validando',
    CONSTRAINT FOREIGN KEY (fk_id_user) REFERENCES User(id),
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de solucitud de validacion'
);

/*Esta tabla funciona como un catalogo que contendra los tipos de Transacciones con detalles del mismo */
CREATE TABLE IF NOT EXISTS TransactionType(
idTransactionType int not null primary key auto_increment,
nameTransaction varchar(20),
descriptionTransaction varchar(120)
);

/*Llevara cada una de las transacciones realizadas
-El id de la transaccion es auto_incremental, 
-El campo fecha se llena automaticamente usando la hora de la transaccion
*/
CREATE TABLE IF NOT EXISTS TransactionDetail(
idTransactionDetails int not null primary key auto_increment,
idUser INT,
idTransactionType int,
mount numeric(8,2),
dateTransaction timestamp default current_timestamp on update current_timestamp,
Foreign key (idUser) references User(id),
Foreign key (idTransactionType) references TransactionType(idTransactionType)
);