const colors=require('colors')
const express=require('express')
const app=express()
const morgan=require('morgan')
const port = process.env.PORT || 3000 
var ubi,hora;
app.use(morgan('dev'))
app.use(express.json())
app.listen(port,()=>{
//
console.log(`servidor en puerto `+port)
})
//
app.set('view engine','ejs')
//
app.get('/ubi',(req,res)=>{
    res.send({
        ubi:ubi,
        hora:hora
    })
})
app.put('/',(req,res)=>{
    hora=req.body.hora,
    ubi=req.body.ubi
    console.log(ubi);
    console.log(hora);
    res.send([200])
})
app.use(express.static('public'))