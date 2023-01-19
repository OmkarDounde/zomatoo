// let http = require('http');
// let fs = require('fs');
// let port = 4000;

// let server = http.createServer((req,res) =>{
//     fs.readFile('data.json', 'utf-8',(err,data)=>{
//         if(err) throw err;
//         res.write(data);
//         res.end()
//     })
// })

// server.listen(port)




// let http = require('http');
// let fs =  require('fs');
// let port = 200;

// let server = http.createServer((req,res)=>{
//     fs.readFile('data.json','utf-8',(err,data)=>{
//         if(err) throw err;
//         res.write(data);
//         res.end()
//     })
// })

// server.listen(port)


let http = require('http');
let fs = require('fs');
let port = 4568;

let server = http.createServer((req,res)=>{
    fs.readFile('Omkar', 'utf-8', (err,data)=>{
        if(err) throw err;
        res.write(data);
        res.end()
    })
})

server.listen(port)