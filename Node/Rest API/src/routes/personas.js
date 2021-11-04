const {Router }=require('express');
const {Pool}=require('pg');
const { where } = require('underscore');
const _ = require('underscore');

const config =require('./database/db')

const db = new Pool(config);

const router = Router();




// Muestra todos los equipos
router.get('/',async (req,res)=>{

    try {
        const sql = `select * from personas `;
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

//Muestra a los equipos delimitados
router.get('/:id',async (req,res)=>{

    try {
        const {id} = req.params;
        let sql = `select * from personas where cedula_personas=$1` ;
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
        console.log(req.body)
        const {cedula_personas,nombres_personas}= req.body;
            let sql = `insert into personas values ('${cedula_personas}','${nombres_personas}')`;
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
   
//actualizar los datos

router.put('/:id', async (req,res)=>{

    try {
        const {cedula_personas} = req.params;
        const {pass_personas}= req.body;
        let sql = `update personas set 
                                    pass_personas=${pass_personas}
                                    where cedula_personas= ${cedula_personas}`;
        const data = await db.query(sql,(err,rows,fiedls)=>{

            if (err) throw err.error;
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
        let sql = 'delete from personas where cedula_personas= $1';
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