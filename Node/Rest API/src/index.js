
//imports
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors'); 


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);


//routes 
app.use('/api/inicio',require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));




// start server
app.listen(app.get('port'),() =>{

    console.log(`Server on port  ${app.get('port')}`);
})