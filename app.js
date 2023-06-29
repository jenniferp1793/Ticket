import express from "express";
import 'dotenv/config'
import clientes  from "./routes/clientes.js";

const app = express()
app.use(express.json())
app.use(   "/api/clientes"   ,clientes)


app.listen(process.env.PORT,()=>{
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
  
})