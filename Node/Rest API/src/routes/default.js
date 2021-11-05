const { Router } = require('express');
const { Pool } = require('pg');
const _ = require('underscore');

const config = require('./database/db')

const db = new Pool(config);

const router = Router();

router.get('/', async (req, res) => {

    try {
        const sql = `select MAX (id_equipos +1)idNew from equipos`;
        const data = await db.query(sql, (err, rows, fiedls) => {

            if (err) throw err;
            else {
                res.json(rows.rows)
            }
        });


    } catch (e) {
        console.log(e);
    }
});


router.post('/', async (req,res)=>{

try {
        let sql = `insert into estado values (0,'sin estado'),(1,'Bueno'),(2,'Regular'),(3,'Malo'),(4,'Baja');
        insert into tipo values (0,'sin tipo'),(1,'Laptop'),(2,'Escritorio'),(3,'Impresora');
        insert into personas values ('N/A','N/A');
        insert into departamentos values (0,'N/A'),(1,'Auditoria Interna')
        ,(2,'Administrativa Financiera'),(3,'Direccion Ejecutiva'),(4,'Asesoria Juridica')
        ,(5,'Poduccion y Serv.Esp.'),(6,'Talento Humano'),(7,'Transferencia de Tecn'),
        (8,'Investigacion y Gest. del Con.'),(9,'Planificacion y Gestion Estrat.'),
        (10,'Comunicacion Social'),(11,'Informacion y Comunicacion');`;
                    
        const data = await db.query(sql,(err,rows,fiedls)=>{

            if (err) throw err;
            else{
                res.json({status:'equipo agregado'})
            }
        });
} catch (e) {
console.log(e);
};
});


module.exports= router;
