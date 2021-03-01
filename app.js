const express =require('express');
const app=express();
const path=require('path')
const userRoutes = require('./routes/userRoutes')

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','views');

app.use('/',userRoutes)

app.listen(8500,()=>{
    console.log("App running on 8500");
})