const {Router }=require('express');
const {Pool}=require('pg');

const config ={
    user: 'postgres',
    host:'localhost',
    password:'12345',
    database:'iniap'
} 

const db = new Pool(config);

const router = Router();


// Muestra todos los usuarios
router.get('/',async (req,res)=>{

    try {
        const sql = 'select * from users';
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
        const {nom,pass}= req.body;
        let sql = `insert into users(nombre,password_user) values ($1,$2)`;
        const data = await db.query(sql,[nom,pass],(err,rows,fiedls)=>{

            if (err) throw err;
            else{
                res.json({status:'equipo agregado'})
            }
        });

    } catch (e) {
        console.log(e);
    }
})
   


module.exports= router;