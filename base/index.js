const { Pool}= require('pg')

const config ={
    user: 'postgres',
    host: 'localhost',
    password:'12345',
    database:'iniap'
};

const pool= new Pool(config);

const getUsers = async () => {

    try {
    const res= await pool.query('select * from users');
    console.log(res.rows)
    // pool.end(); acaba la conexion

        
    } catch (error) {
        console.log(error)
        
    }
    
}

const insertUsers = async () => {

    try {

    const text=  'INSERT INTO users VALUES ($1,$2,$3);'
    const values= ['10','Alan','INIAP2021'] 
    const res= await pool.query(text,values);

    console.log(res)
    // pool.end(); acaba la conexion

        
    } catch (error) {
        console.log(error)
        
    }
    
}
insertUsers()
getUsers()