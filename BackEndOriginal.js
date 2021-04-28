const express = require('express');
const app = express();
const cs = require('CORS');
const port = 3000;

app.use(cs());
app.use(express.json());

app.get("/", (req,res) =>{
    //res.send("I got your request and there nothing here");

    res.send('Nick');
})

/*
app.post("/SendJSON", (req, res)=>{

   var name = req.body.Name;
   var id = req.body.ID;
   console.log("Name: " + name + "\nID: " + id);
   res.send("Your JSON object has been printed to the console.")
})

app.get('/GetString', (req, res)=>{

    res.send("Here is a message string from the Back-End using the GET method");
})*/


app.listen(port,()=>{
    console.log('Example app listening at http://localhost:${port}');
})