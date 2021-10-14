const rutas  = require('express').Router();
const { password } = require('./config/conexion');
const conexion = require('./config/conexion')

//----------Asignacion de Rutas------------

router.get('/',(req, res)=>{
    let sql ='select * from users'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })

})

// get un equipo
router.get('/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from users where id_user = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar equipo
router.post('/',( req, res)=>{
    const{nombre, password} = req.body

    let sql = `insert into users(nombre, password_user) values('${nombre}','${password}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo agregado'})
        }
    })
})

//eliminar 
router.delete('/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from users where id_user = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo eliminado'})
        }
    })
});

//modificar
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre, password} = req.body

    let sql = `update users set 
                nombre ='${nombre}',
                logo='${password}'
                where id_user = '${id}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo modificado'})
        }
    })

})

//-----------------------------------------
module.exports= rutas;                                                                                                                                                                           