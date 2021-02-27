const express =require('express');
const app=express();
const path=require('path')

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','views');

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(8500,()=>{
    console.log("App running on 8500");
})