var http = require("http");

var manejador = function(solicitud, respuesta) {
    console.log("Recibimos una nueva petición en: " + solicitud.url);

    respuesta.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

   
    respuesta.end("Hola Mundo desde mi servidor Node.js en localhost");
};


var servidor = http.createServer(manejador);


var puerto = 8080;
servidor.listen(puerto, function() {
    console.log("Servidor escuchando en http://localhost:" + puerto);
});
