let express = require('express');
let app = express();
let port = 1221;

app.get('/',(req,res)=>{
    res.send('Omkar Is good Devloper')
})


app.get('/om',(req,res)=>{
    res.send('Omkar Is good Devloper and Good Digital Marketer')
})

app.get('/omi', (req,res)=>{
    res.send('OmKAr Is Expert In Javscript')
})

app.get('/12', (req,res)=>{
    res.send('OmKAr Is Expert In Javscript Devloper')
})

app.listen(port,()=>{
    console.log(`Server Is Running At:${port}`)
})