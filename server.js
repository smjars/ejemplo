const http = require("http");

let contenido = `<h1>Titulo</h1> 
<h2>Sub-Titulo</h2>
`;
const server = http.createServer((req,res)=>{
    res.end(contenido);
});

server.listen(8080);

console.log("Corriendo server, puerto 8080");