// let fs = require('fs');
// fs.writeFile('Omkar', 'Omkar Is Good Devloper',()=>{
//     console.log('File Is Created')
// })


// let fs = require('fs');
// fs.appendFile('Omkar', 'Omkar Is Good Devloper \n',()=>{
//     console.log('File Is Generated')
// })

let fs = require('fs');
fs.readFile('os.js','utf-8',(err,data) =>{
    if(err) throw err;
    console.log(data)
})
 fs.readFile('index.html', 'utf-8', (err,data)=>{
    if(err) throw err;
    console.log(data)
 })