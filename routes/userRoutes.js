const express = require("express");
const Router = express.Router();

Router.get('/',(req,res)=>{
    res.render('index')
})
Router.get('/about',(req,res)=>{
    res.render('about-us')
})
Router.get('/gallery',(req,res)=>{
    res.render('gallery')
})
Router.get('/packages',(req,res)=>{
    res.render('packages')
})
Router.get('/trainers',(req,res)=>{
    res.render('trainers')
})
Router.get('/contact',(req,res)=>{
    res.render('contact')
})
Router.get('/portfolio',(req,res)=>{
    res.render('portfolio')
})

module.exports = Router;