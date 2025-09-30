import * as http from 'http';
import { app } from './app';


const server = http.createServer(app)
console.log(app)

const port = process.env.PORT

server.listen(port,()=>{
    console.log(`Servidor iniciado na porta ${port}`)
})