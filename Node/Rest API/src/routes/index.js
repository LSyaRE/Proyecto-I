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

router.get('/',async (req,res)=>{

    try {
        const data = await db.query('select * from users');
        res.json(data.rows)
        
    } catch (e) {
        console.log(e);
    }    
    });

   


module.exports= router;