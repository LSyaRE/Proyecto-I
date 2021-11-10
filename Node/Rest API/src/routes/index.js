const { Router } = require('express');
const { Pool } = require('pg');
const _ = require('underscore');

const config = require('./database/db')

const db = new Pool(config);

const router = Router();




// Muestra todos los equipos
router.get('/', async (req, res) => {

    try {
        const sql = `select per.nombres_personas,
        eq.marca_equipos,eq.modelo_equipos,eq.num_serie_equipos,ma.lan_mac,ma.wifi_mac,i.lan_ip,i.wifi_ip,eq.ordinal_equipos,
        eq.buy_age_equipos,es.nom_estado,eq.observacion_equipos,ti.nom_tipo
        from equipos as eq 
        inner join asignacion as asi on eq.id_equipos=asi.id_asignacion 
        inner join personas as per on asi.cedula_personas=per.cedula_personas
        inner join conexion as con on con.id_equipos=eq.id_equipos
        inner join ip as i on con.id_ip=i.id_ip
        inner join estado as es on eq.id_estado=es.id_estado
        inner join tipo as ti on eq.id_tipo=ti.id_tipo
        inner join mac as ma on con.id_mac=ma.id_mac
        `;
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

//Muestra a los equipos delimitados
router.get('/:id', async (req, res) => {

    try {
        const { id } = req.params;
        let sql = `select per.nombres_personas,
        eq.marca_equipos,eq.modelo_equipos,eq.num_serie_equipos,ma.lan_mac,ma.wifi_mac,i.lan_ip,i.wifi_ip,eq.ordinal_equipos,
        eq.buy_age_equipos,es.nom_estado,eq.observacion_equipos,ti.nom_tipo
        from equipos as eq 
        inner join asignacion as asi on eq.id_equipos=asi.id_asignacion 
        inner join personas as per on asi.cedula_personas=per.cedula_personas
        inner join conexion as con on con.id_equipos=eq.id_equipos
        inner join ip as i on con.id_ip=i.id_ip
        inner join estado as es on eq.id_estado=es.id_estado
        inner join tipo as ti on eq.id_tipo=ti.id_tipo
        inner join mac as ma on con.id_mac=ma.id_mac where asi.id_departamentos=$1`;
        const data = await db.query(sql, [id], (err, rows, fiedls) => {

            if (err) throw err;
            else {
                res.json(rows.rows)
            }
        });

    } catch (e) {
        console.log(e);
    }
});

//Agregar 

        router.post('/', async (req, res) => {

            try {
                console.log(req.body)
                const {numSerie, marca, modelo, ordinal,buyAge, observacion, ip_wifi, ip_lan, mac_wifi, mac_lan, depart } = req.body;
                let sql = `insert into equipos values ((select MAX (id_equipos +1)idnew from equipos),0,0,${numSerie},'${marca}','${modelo}',${ordinal},${buyAge},'${observacion}');
            insert into ip values((select MAX (id_equipos +1)idnew from equipos),'${ip_wifi}','${ip_lan}');
            insert into mac values((select MAX (id_equipos +1)idnew from equipos),'${mac_wifi}','${mac_lan}');
            insert into conexion values ((select MAX (id_equipos +1)idnew from equipos),(select MAX (id_equipos +1)idnew from equipos),(select MAX (id_equipos +1)idnew from equipos),(select MAX (id_equipos +1)idnew from equipos));
            insert into asignacion values ((select MAX (id_equipos +1)idnew from equipos),'N/A',${depart},(select MAX (id_equipos +1)idnew from equipos));`;
                const data = await db.query(sql, (err, rows, fiedls) => {

                    if (err) throw err;
                    else {
                        res.json({ status: 'equipo agregado' })
                    }
                });
            } catch (e) {
                console.log(e);
                };
                });



                //actualizar los datos

                router.put('/:id', async (req, res) => {

                    try {
                        const { id } = req.params;
                        const { nom, pass } = req.body;
                        let sql = `update users set 
                                    nombre=${nom},
                                    password_user=${pass} 
                                    where id_user= $1`;
                        const data = await db.query(sql, [id, nom, pass], (err, rows, fiedls) => {

                            if (err) throw err;
                            else {
                                res.json({ status: 'Equipo modificado' })
                            }
                        });

                    } catch (e) {
                        console.log(e);
                    };
                });


                // Eliminar datos
                router.delete('/:id', async (req, res) => {

                    try {
                        const { id } = req.params;
                        let sql = 'delete from users where id_user= $1';
                        const data = await db.query(sql, [id], (err, rows, fiedls) => {

                            if (err) throw err;
                            else {
                                res.send('Se ha eliminado los datos ')
                            }
                        });

                    } catch (e) {
                        console.log(e);
                    }
                });

                module.exports = router;