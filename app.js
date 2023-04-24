const fastiy = require('fastify') 
const path = require("path");

const server = fastiy({logger:true})

server.register(require("@fastify/static"),{
    root:path.join(__dirname, 'front'),
    prefix:'/front/'
})

server.get('/*',(req,res)=> res.sendFile('index.html'))
server.listen({port:8080},(err,addr)=>{
    if(err){ console.error(err) }
    console.log(`Server started listen at ${addr}`)
})