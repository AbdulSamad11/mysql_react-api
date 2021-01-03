const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud',
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get',(req,res)=>{

  const insert = "SELECT * FROM crud.movie_reviews;"
  db.query(insert, (err,result)=>{
    res.send(result)
  })
})

app.post('/api/insert',(req,res)=>{
const movieName = req.body.movieName;
const movieReview = req.body.movieReview;

  const insert = "insert into crud.movie_reviews(movieName,movieReview) values(?,?)"
  db.query(insert, [movieName,movieReview], (err,result)=>{
    console.log(result)
  })
})

app.listen(3001,()=>{
  console.log('app running on port 3001')
})