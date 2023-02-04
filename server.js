const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("Que pepes perro");
});

server.listen(3000);

console.log("Corriendo server, puerto 3000");