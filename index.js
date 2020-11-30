const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const app= express();
const port = 8001;


app.use(express.urlencoded());



//setting up static files
app.use(express.static('assets'));
app.use(expressEjsLayouts);

// app.set('layout extractStyles',true);
// // extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


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