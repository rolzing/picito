//cargando express
const express = require('express'), 
      path = require('path'),
      config = require('./server/configure');
// Creando la instancia de una aplicacion
var app = express();
//Guardando unas variables de entorno
app.set('port', process.env.PORT || 3000);
app.set('ip', process.env.IP || 'localhost');
// Configurar la ruta de las vistas
app.set('views', path.join(__dirname , '/views'));
// Aplicando configuraciones a nuestra App
app = config(app);
// Crear rutas de aplicacion
app.get('/', (req,res) => {
    // codificando la respuesta
    res.send("hola ito");
})
// Consultar las variables de entorno para recuperar IP y PORT
const IP = app.get('ip');
const PORT = app.get('port');
// Iniciar servidor
app.listen(PORT, IP, (err) => {
    if(err){
        console.log(`-Error ${err}`);
        throw err;
    }
    console.log(`-Server started => http://${IP}:${PORT}`);
});