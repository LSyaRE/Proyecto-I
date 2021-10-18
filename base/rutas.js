const rutas  = require('express').Router();

const conexion = require('./config/conexion')

//----------Asignacion de Rutas------------

rutas.get('/',function(req,res){

    res.send('Hola Valeria xD');
}

)
//-----------------------------------------
module.exports= rutas;                                                                                                                                                                           