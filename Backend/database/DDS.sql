CREATE DATABASE IF NOT EXISTS wallet;
USE wallet;

/* La tabla Usuario cuenta con la informacion del Usuario */

CREATE TABLE IF NOT EXISTS `user`(
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL COMMENT 'Nombres del Usuario',
    last_name VARCHAR(100) COMMENT 'Apellidos del Usuario',
    email VARCHAR(255) UNIQUE COMMENT 'correo electronico',
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
    id_user INT NOT NULL COMMENT 'Relacion al usuario que se esta validando',
    CONSTRAINT FOREIGN KEY (id_user) REFERENCES `user`(id_user),
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de solucitud de validacion'
);

/*Esta tabla funciona como un catalogo que contendra los tipos de Transacciones con detalles del mismo */
CREATE TABLE IF NOT EXISTS transaction_type(
    idTransactionType INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nameTransaction VARCHAR(20),
    descriptionTransaction VARCHAR(120)
);

/*Llevara cada una de las transacciones realizadas
-El id de la transaccion es auto_incremental, 
-El campo fecha se llena automaticamente usando la hora de la transaccion
*/
CREATE TABLE IF NOT EXISTS transaction_detail(
    idTransactionDetails INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_user INT,
    idTransactionType INT,
    mount NUMERIC(8,2),
    dateTransaction TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_user) REFERENCES `user`(id_user),
    FOREIGN KEY (idTransactionType) REFERENCES transaction_type(idTransactionType)
);
/*Tabla para guardar las metas de ahorro del usuario*/
CREATE TABLE IF NOT EXISTS goal(
    id_goal INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_user INT,
    -- mount NUMERIC(6,2),
    detail VARCHAR(255),
    FOREIGN KEY (id_user) REFERENCES `user`(id_user)
);

/*Tabla para llevar el registro de las cuentas de banco del usuario*/
CREATE TABLE IF NOT EXISTS bank_account(
    id_bank_account INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name_bank_account varchar(30),
    id_user INT, 
    mount NUMERIC(6,2),
    FOREIGN KEY (id_user) REFERENCES `user`(id_user)
);

-- tables new

CREATE TABLE IF NOT EXISTS categorie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL COMMENT 'Nombre categoria'
);

CREATE TABLE IF NOT EXISTS goal_line (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_goal INT,
    id_categorie INT,
    mount FLOAT COMMENT 'Cantidad de la meta',
    FOREIGN KEY (id_goal) REFERENCES goal(id_goal),
    FOREIGN KEY (id_categorie) REFERENCES categorie(id)
);

