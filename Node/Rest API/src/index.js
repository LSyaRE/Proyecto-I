const express = require('express');
const app = express();
const morgan = require('morgan');




//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);


//routes 
app.use(require('./routes/index'));




// empezando servidor 
app.listen(app.get('port'),() =>{

    console.log(`Server on port  ${app.get('port')}`);
})