CREATE DATABASE ino_vla_labs;

CREATE USER 'vla_ctor'@'localhost' IDENTIFIED BY 'l4b50l';

GRANT ALL PRIVILEGES ON ino_vla_labs.* TO 'vla_ctor'@'localhost';

USE ino_vla_labs;

CREATE TABLE area (
id_area INT(2) AUTO_INCREMENT PRIMARY KEY,
nombre_area VARCHAR(50) NOT NULL,
ubicacion VARCHAR(100) DEFAULT '',
CONSTRAINT uc_na UNIQUE (nombre_area)
);

CREATE TABLE wc (
id_wc INTEGER AUTO_INCREMENT PRIMARY KEY,
id_area INTEGER NOT NULL,
descripcion VARCHAR(100) NOT NULL,
genero CHAR(1) NOT NULL,
capacidad INTEGER DEFAULT 100,
ubicacion VARCHAR(100) DEFAULT '',
FOREIGN KEY (id_area) REFERENCES area(id_area),
CONSTRAINT UNIQUE (id_area, descripcion, genero)
);

CREATE TABLE registros (
id_registro INTEGER AUTO_INCREMENT PRIMARY KEY,
id_wc INTEGER NOT NULL,
fecha_conteo TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
cantidad INTEGER NOT NULL,
FOREIGN KEY (id_wc) REFERENCES wc(id_wc)
);

CREATE TABLE servicio (
id_servicio INTEGER AUTO_INCREMENT PRIMARY KEY,
id_wc INTEGER NOT NULL,
fecha_servicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (id_wc) REFERENCES wc(id_wc)
);


#DROP DATABASE ino_vla_labs;