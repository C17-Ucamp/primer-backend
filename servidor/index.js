const express = require('express')
const app = express();
const PORT = 5003;
const cors = require('cors')
const {productosRouter} = require('./apis/index')
//req = petición
//res = resultado

//middleware
app.use(cors())
app.use(express.json())


 app.use('/products', productosRouter)


// app.get('/productos', (req,res)=>{
//     res.send(productosRouter)
// })

app.get('/',(req,res)=>{
 res.send({"usuarios":["usuario1","usuario2","usuario3"]})
 })

 app.get('/app', (req,res)=>{
     res.send("Hola estoy vivx")
 })


app.listen(PORT,()=>{
    console.log(`Servidor conectado en puerto ${PORT}`)
})
