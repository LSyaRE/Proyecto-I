CREATE database iniap;


CREATE Table personas (
    cedula_personas VARCHAR(15) NOT NULL,
    nombre_personas VARCHAR(50) NOT NULL,
    apellido_personas VARCHAR(50) NOT NULL,
    pass_personas VARCHAR(30),
    PRIMARY KEY(cedula_personas)
);

CREATE Table departamentos (
    id_departamentos INTEGER,
    nom_departamentos VARCHAR(50),
    PRIMARY KEY (id_departamentos)
);

CREATE Table estado (
    id_estado SMALLINT NOT NULL,
    nom_estado VARCHAR(20) NOT NULL,
    primary KEY(id_estado)
);

CREATE Table tipo (
    id_tipo SMALLINT NOT NULL,
    nom_tipo VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_tipo)
);


CREATE Table equipos (
    id_equipos INTEGER NOT NULL,
    id_tipo SMALLINT NOT NULL,
    id_estado SMALLINT NOT NULL,
    num_serie_equipos INTEGER NOT NULL,
    marca_equipos VARCHAR(50) NOT NULL,
    modelo_equipos VARCHAR(50) NOT NULL,
    ordinal_equipos INTEGER NOT NULL,
    buy_age_equipos INTEGER NOT NULL,
    observacion_equipos VARCHAR(100) NOT NULL,
    PRIMARY KEY (id_equipos),
    FOREIGN KEY (id_tipo) REFERENCES tipo(id_tipo),
    FOREIGN KEY (id_estado) REFERENCES estado(id_estado)

);

CREATE Table conexion(
    id_conexion INTEGER NOT NULL,
    id_equipos INTEGER NOT NULL,
    tipo_conexion VARCHAR(10) NOT NULL,
    ip_conexion VARCHAR(20),
    mac_addres_conexion VARCHAR(20),
    PRIMARY KEY(id_conexion),
    FOREIGN KEY(id_equipos) REFERENCES equipos(id_equipos)

);


CREATE Table asignacion(
    id_asignacion INTEGER NOT NULL,
    cedula_personas VARCHAR(15) NOT NULL,
    id_departamentos INTEGER NOT NULL,
    id_equipos INTEGER NOT NULL,
    PRIMARY KEY (id_asignacion), 
    FOREIGN KEY(cedula_personas) REFERENCES personas(cedula_personas),
    FOREIGN KEY(id_departamentos) REFERENCES departamentos(id_departamentos),
    FOREIGN KEY(id_equipos) REFERENCES equipos(id_equipos)
);
