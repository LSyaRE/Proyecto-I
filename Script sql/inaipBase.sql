CREATE database iniap;


CREATE Table personas (
    cedula_personas VARCHAR(15) NOT NULL,
    nombres_personas VARCHAR(50) NOT NULL,
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

CREATE Table ip (
    id_ip INTEGER NOT NULL,
    wifi_ip VARCHAR(20) NOT NULL,
    lan_ip VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_ip)
);

CREATE Table mac (
    id_mac INTEGER NOT NULL,
    wifi_mac VARCHAR(20) NOT NULL,
    lan_mac VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_mac)
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
    id_ip INTEGER,
    id_mac INTEGER,
    PRIMARY KEY(id_conexion),
    FOREIGN KEY(id_equipos) REFERENCES equipos(id_equipos),
    FOREIGN KEY(id_ip) REFERENCES ip(id_ip),
    FOREIGN KEY(id_mac) REFERENCES mac(id_mac)

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
