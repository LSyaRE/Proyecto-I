create database if not exists iniap;

create table prueba(

    id_prueba int,
    nombre varchar(50),
    descripcion varchar(100)
);

INSERT INTO prueba VALUES (1,'Prueba1','se hizo una prueba de la base de datos');

select * from prueba;

create table users(

    id_user int,
    nombre varchar(50),
    password_user varchar(100)
);

INSERT INTO users VALUES 
(1,'Jonas','INIAP2021'),
(2,'Valeria','INIAP2021'),
(3,'Joshua','INIAP2021');