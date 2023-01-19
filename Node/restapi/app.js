let express = require('express');
let app = express();
let port = 1225;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = "mongodb://localhost:27017";
let db;


app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))
// let mongo = require('mongodb');
// let MongoClient = mongo.MongoClient;
// let mongoUrl = "mongodb://localhost:27017"
// let db;


// app.get('/',(req,res)=>{
//     res.send('Omkar Is good Devloper')
// })


// app.get('/location',(req,res)=>{
//     db.collections.('Location').find().toArray((err,results) =>{
//         if(err) throw err;
//         res.send(result)
//     })
// })

app.get('/location', (req,res)=>{
    db.collection('Location').find().toArray((err,results) =>{
                if(err) throw err;
                res.send(result)
            })
})





app.get('/omi', (req,res)=>{
    res.send('OmKAr Is Expert In Javscript')
})

app.get('/123', (req,res)=>{
    res.send('OmKAr Is Expert In Javscript Devloper')
})

app.listen(port,()=>{
    console.log(`Server Is Running At:${port}`)
})


app.get('/location',(req,res) => {
    db.collection('location').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
 })









MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,dc) => {
    if(err) console.log('Error while connecting');
    db = dc.db('Zomato');
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
})








// MongoClient.connect(mongoUrl,(err,dc)=>{
//      if(err) console.log('Error While Connecting');
//      db = dc.db('Zomato');
//      app.listen(port,() => {
//         console.log(`Server Is Running On Port ${port}`)
//      })
// })





// to connect mongodb


// MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,dc)=>{
//     if (err) console.log('Error While Connecting');
//     db = dc.db('Zomato');
//     app.listen(port,()=>{
//         console.log(`Server Is Running At:${port}`)
//     })
// })