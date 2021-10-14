const { Pool}= require('pg')

const config ={
    user: 'postgres',
    host: 'localhost',
    password:'12345',
    database:'iniap'
};

const pool= new Pool(config);

pool.connect((err)=> {
    if(err){

        console.log('Ha ocurrido un error'+ err)
    }
    else{
        console.log('Conexion exitosa')
    }

});

module.exports= config;