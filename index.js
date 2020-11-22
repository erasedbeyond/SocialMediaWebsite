const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const app= express();
const port = 8001;



app.use(expressEjsLayouts);


//setting up static files
app.use(express.static('assets'));


//use  express route
app.use('/', require('./routes'));


//set up view engine
app.set('view engine', 'ejs');
app.set('views','./views');



app.listen(port,function(err){
    if(err){
        console.log(`Error is running the server: ${err}`)
    }
    console.log(`server is up and running at port: ${port}`)
});