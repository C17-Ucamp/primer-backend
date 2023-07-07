const express = require('express')
const app = express();
const PORT = 5003;

//req = petición
//res = resultado

app.get('/',(req,res)=>{
res.send({"usuarios":["usuario1","usuario2","usuario3"]})
})

app.get('/app', (req,res)=>{
    res.send("Hola soy la ruta app")
})


app.listen(PORT,()=>{
    console.log(`Servidor conectado en puerto ${PORT}`)
})
