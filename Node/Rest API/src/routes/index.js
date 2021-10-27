const {Router }=require('express');
const {Pool}=require('pg');
const _ = require('underscore');

const config =require('./database/db')

const db = new Pool(config);

const router = Router();




// Muestra todos los usuarios
router.get('/',async (req,res)=>{

    try {
        const sql = 'select * from personas';
        const data = await db.query(sql,(err,rows,fiedls)=>{

            if (err) throw err;
            else{
                res.json(rows.rows)
            }
        });
        
        
    } catch (e) {
        console.log(e);
    }    
    });

//Muestra a un usuario
router.get('/:id',async (req,res)=>{

    try {
        const {id} = req.params;
        let sql = 'select * from users where id_user= $1';
        const data = await db.query(sql,[id],(err,rows,fiedls)=>{

            if (err) throw err;
            else{
                res.json(rows.rows)
            }
        });
        
    } catch (e) {
        console.log(e);
    }    
    });

//Agregar usuario
router.post('/', async (req,res)=>{

    try {
        
        const {id,nom,pass}= req.body;
        if (id!=null && nom!=null && pass!=null){
            let sql = `insert into users values ($1,$2,$3)`;
            const data = await db.query(sql,[id,nom,pass],(err,rows,fiedls)=>{
    
                if (err) throw err;
                else{
                    res.json({status:'equipo agregado'})
                }
            });
        }
        else{
            console.log('Los valores no deben ser nulos')
        };
    


    } catch (e) {
        console.log(e);
    };
});
   
//actualizar los datos

router.put('/:id', async (req,res)=>{

    try {
        const {id} = req.params;
        const {nom,pass}= req.body;
        let sql = `update users set 
                                    nombre=$2,
                                    password_user=$3 
                                    where id_user= $1`;
        const data = await db.query(sql,[id,nom,pass],(err,rows,fiedls)=>{

            if (err) throw err;
            else{
                res.json({status:'Equipo modificado'})
            }
        });

    } catch (e) {
        console.log(e);
    };
});


// Eliminar datos
router.delete('/:id',async (req,res)=>{

    try {
        const {id} = req.params;
        let sql = 'delete from users where id_user= $1';
        const data = await db.query(sql,[id],(err,rows,fiedls)=>{

            if (err) throw err;
            else{
                res.send('Se ha eliminado los datos ')
            }
        });
        
    } catch (e) {
        console.log(e);
    }    
    });

module.exports= router;