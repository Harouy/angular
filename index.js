const express=require('express')
const bodyParse=require('body-parser')
const bodyParser = require('body-parser')
const Cors =require('cors')
const { request } = require('http')
const { Client } = require('pg')
const app=express()
const port=3000

const client =new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'OUSSAMA2003',
    database: 'postgres'
    
})
app.use(Cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })

)
app.get('/', (request,response) => {
 response.json()
})
app.listen(port);
client.connect();
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();


})

 app.post('/',(req,response) =>{
    
const data=req.body;
console.log(data);
 client.query('INSERT INTO resee (Nom) VALUES($1)',[data] , (error, result) => {
    if (error) {
      // Handle the error
      throw error;
    } }) 
  

}) 