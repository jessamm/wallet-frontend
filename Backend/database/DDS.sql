DROP DATABASE IF EXISTS  wallet;
CREATE DATABASE IF NOT EXISTS wallet;
USE wallet;

-- Contendra la informacion principal del usuario (administrador)
CREATE TABLE IF NOT EXISTS `user`(
    id INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL COMMENT 'Nombres del Usuario',
    last_name VARCHAR(100) COMMENT 'Apellidos del Usuario',
    email VARCHAR(255) UNIQUE COMMENT 'correo electronico',
    `password` VARCHAR(50) COMMENT 'Contraseña para inicio de Session',
    `admin` BIT DEFAULT 0 COMMENT 'Define el permiso de usuario 0.user , 1.admin',
    validated BIT DEFAULT 0 COMMENT 'Estado de la cuenta del usuario 0:No validado 1:validado',
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de creacion del usuario',
    update_date TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Fecha de ultima modificacion de algun parametro del usuario'
);

-- Vinculacion entre el usuario y la validacion de su cuenta
CREATE TABLE IF NOT EXISTS mail_validation(
    id INT AUTO_INCREMENT PRIMARY KEY,
    code_1 TINYINT NOT NULL COMMENT 'Pimer numero de 0-99 ',
    code_2 TINYINT NOT NULL COMMENT 'Segundo numero de 0-99 ',
    code_3 TINYINT NOT NULL COMMENT 'Tercer numero de 0-99 ',
    code_4 TINYINT NOT NULL COMMENT 'Cuarto numero de 0-99 ',
    id_user INT NOT NULL COMMENT 'Relacion al usuario que se esta validando',
    CONSTRAINT FOREIGN KEY (id_user) REFERENCES `user`(id),
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de solucitud de validacion'
);

-- Define las diferentes categorias en la modalidad de metas personales 
-- (Medico, hogar, gastos varios, etc)
CREATE TABLE IF NOT EXISTS categorie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL COMMENT 'Nombre categoria'
);

-- Gestionar las diferentes cuentas bancarias del usuario
-- para tarjetas de credito o debito incluir datos adicionales
CREATE TABLE IF NOT EXISTS bank_account(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name_bank_account varchar(30),
    date_out TIMESTAMP COMMENT 'Fecha de vencimiento',
    validation_digits VARCHAR(5) COMMENT 'Numero de validacion para tarjetas.',
    number_account VARCHAR(15) COMMENT 'Numero de cuenta.',
    id_user INT, 
    mount NUMERIC(6,2) COMMENT 'Monto total que tendra la cuenta.',
    type_bank ENUM('Credito','Debito','Ahorro'),
    FOREIGN KEY (id_user) REFERENCES `user`(id)
);

-- contiene un numero de metas, definidas por un periodo de tiempo establecido
CREATE TABLE IF NOT EXISTS goal(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_user INT,
    detail VARCHAR(255),
    date_init TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de inicio',
    date_end TIMESTAMP COMMENT 'Fecha de finalizacion',
    FOREIGN KEY (id_user) REFERENCES `user`(id)
);

-- un objetivo establecido destinado a que el usuario, pueda definir 
-- un gasto maximo.
CREATE TABLE IF NOT EXISTS goal_line (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    id_user INT,
    id_goal INT,
    date_init TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de inicio',
    date_end TIMESTAMP COMMENT 'Fecha de finalizacion',
    id_categorie INT,
    mount_limit FLOAT COMMENT 'limite de gasto de la meta',
    mount_actual FLOAT COMMENT 'Saldo actual gastado',
    FOREIGN KEY (id_goal) REFERENCES goal(id),
    FOREIGN KEY (id_user) REFERENCES `user`(id),
    FOREIGN KEY (id_categorie) REFERENCES categorie(id)
);

-- Manejar las transacciones en las lineas de meta, del usuario ejem:
-- Medico---> gasto monto (transaction_line) = 200
CREATE TABLE IF NOT EXISTS transaction_line (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    id_goal_line INT COMMENT 'Llave foranea, para vincular el objetivo de la transaccion.',
    id_account INT COMMENT 'Llave foranea, para vincular en donde descargar el monto.',
    mount FLOAT COMMENT 'Monto a realizar la operacion',
    FOREIGN KEY (id_goal_line) REFERENCES goal_line(id),
    FOREIGN KEY (id_account) REFERENCES bank_account(id)
);

-- contiene un numero de planes de ahorro, definidos por un periodo de tiempo establecido
CREATE TABLE IF NOT EXISTS planning(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_user INT,
    detail VARCHAR(255),
    date_init TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de inicio',
    date_end TIMESTAMP COMMENT 'Fecha de finalizacion',
    FOREIGN KEY (id_user) REFERENCES `user`(id)
);

-- Mismo concepto de una meta, pero su enfoque esta en definir un plan de ahorro.
-- se implementaran las mismas categorias.
CREATE TABLE IF NOT EXISTS planning_line (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    id_goal INT,
    id_user INT,
    id_categorie INT,
    date_init TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de inicio',
    date_end TIMESTAMP COMMENT 'Fecha de finalizacion',
    mount_limit FLOAT COMMENT 'limite de gasto de la meta',
    mount_actual FLOAT COMMENT 'Saldo actual gastado',
    FOREIGN KEY (id_goal) REFERENCES goal(id),
    FOREIGN KEY (id_user) REFERENCES `user`(id),
    FOREIGN KEY (id_categorie) REFERENCES categorie(id)
);

-- Respaldo de todas las operaciones efectuadas en la plataforma,
-- esta data solo estara disponible a nivel administrador (Opcion de exportar registros a excel y pdf)
CREATE TABLE IF NOT EXISTS binnacle (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    id_user INT,
    date_operation TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de la operacion',
    description_operation VARCHAR(255) COMMENT 'Breve descripcion de la operacion, adjuntar montos y categoria en la cual se efectuo.',
    type_operation ENUM('Registro de gasto','Registro de ahorro'),
    FOREIGN KEY (id_user) REFERENCES `user`(id)
);

-- new version 2.1

 





