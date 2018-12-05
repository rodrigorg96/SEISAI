#INSERCIÓN DE AREAS:
USE ino_vla_labs;

INSERT INTO area (nombre_area) VALUES ('ZPN1');
INSERT INTO area (nombre_area) VALUES ('ZPN2');
INSERT INTO area (nombre_area) VALUES ('ZPN3-LABS');
INSERT INTO area (nombre_area) VALUES ('OTROS');

#INSERCIÓN DE BAÑOS EN ZPN1:

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN1'),
	'.0 GYM', '1');

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN1'),
	'.0 GYM', '0');

#-------

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN1'),
	'.0', '1');

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN1'),
	'.0', '0');

#-------

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN1'),
	'.1', '1');

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN1'),
	'.1', '0');

#-------

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN1'),
	'.1 AUDITORIO', '1');

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN1'),
	'.1 AUDITORIO', '0');

#-------

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN1'),
	'.2', '1');

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN1'),
	'.2', '0');

#-------

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN1'),
	'.3', '1');

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN1'),
	'.3', '0');

#INSERCIÓN DE BAÑOS EN ZPN2

#-------

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN2'),
	'.1', '1');

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN2'),
	'.1', '0');

#-------

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN2'),
	'.2', '1');

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN2'),
	'.2', '0');
#-------

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN2'),
	'.3', '1');

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN2'),
	'.3', '0');
#-------

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN2'),
	'.4', '1');

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN2'),
	'.4', '0');

#-----
#INSERCIÓN DE BAÑOS EN ZPN3-LABS
#-------

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN3-LABS'),
	'ZPN3', '1');

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'ZPN3-LABS'),
	'ZPN3', '0');


#-----
#INSERCIÓN DE BAÑOS OTROS
#-------

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'OTROS'),
	'CANCHAS', '1');

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'OTROS'),
	'CANCHAS', '0');

#-------

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'OTROS'),
	'CASETA DE VIGILANCIA', '1');

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'OTROS'),
	'CASETA DE VIGILANCIA', '0');

#-------

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'OTROS'),
	'COMEDOR (ZPN 2.1)', '1');

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'OTROS'),
	'COMEDOR (ZPN 2.1)', '0');

#-------

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'OTROS'),
	'ENFERMERIA (ZPN1.0)', '1');

INSERT INTO wc (id_area, descripcion, genero) VALUES (
	(select id_area fROM area where nombre_area = 'OTROS'),
	'ENFERMERIA (ZPN1.0)', '0');


INSERT INTO registros(id_wc, cantidad) VALUES (1, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (2, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (3, 130);
INSERT INTO registros(id_wc, cantidad) VALUES (4, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (5, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (6, 220);
INSERT INTO registros(id_wc, cantidad) VALUES (7, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (8, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (9, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (10, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (11, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (12, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (13, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (14, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (15, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (16, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (17, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (18, 500);
INSERT INTO registros(id_wc, cantidad) VALUES (19, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (20, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (21, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (22, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (23, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (24, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (25, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (26, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (27, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (28, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (29, 300);
INSERT INTO registros(id_wc, cantidad) VALUES (30, 300);

INSERT INTO servicio(id_wc) VALUES (1);
INSERT INTO servicio(id_wc) VALUES (2);
INSERT INTO servicio(id_wc) VALUES (3);
INSERT INTO servicio(id_wc) VALUES (4);
INSERT INTO servicio(id_wc) VALUES (5);
INSERT INTO servicio(id_wc) VALUES (6);
INSERT INTO servicio(id_wc) VALUES (7);
INSERT INTO servicio(id_wc) VALUES (8);
INSERT INTO servicio(id_wc) VALUES (9);
INSERT INTO servicio(id_wc) VALUES (10);
INSERT INTO servicio(id_wc) VALUES (11);
INSERT INTO servicio(id_wc) VALUES (12);
INSERT INTO servicio(id_wc) VALUES (13);
INSERT INTO servicio(id_wc) VALUES (14);
INSERT INTO servicio(id_wc) VALUES (15);
INSERT INTO servicio(id_wc) VALUES (16);
INSERT INTO servicio(id_wc) VALUES (17);
INSERT INTO servicio(id_wc) VALUES (18);
INSERT INTO servicio(id_wc) VALUES (19);
INSERT INTO servicio(id_wc) VALUES (20);
INSERT INTO servicio(id_wc) VALUES (21);
INSERT INTO servicio(id_wc) VALUES (22);
INSERT INTO servicio(id_wc) VALUES (23);
INSERT INTO servicio(id_wc) VALUES (24);
INSERT INTO servicio(id_wc) VALUES (25);
INSERT INTO servicio(id_wc) VALUES (26);
INSERT INTO servicio(id_wc) VALUES (27);
INSERT INTO servicio(id_wc) VALUES (28);
INSERT INTO servicio(id_wc) VALUES (29);
INSERT INTO servicio(id_wc) VALUES (30);

