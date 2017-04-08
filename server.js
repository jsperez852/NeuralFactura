// importar
var express = require('express');

// instanciar
var app = express();

//vistas
//app.set("views",__dirname + '/views');
// ruteo
app.get('/', function(req, res){
    res.sendfile(__dirname + '/views/index.html');
});
app.get('/empleado', function(req, res){
    res.sendfile(__dirname + '/views/empleado/index.html');
});
//archivos estaticos
app.use(express.static(__dirname + '/src'));
//rutas de error
app.use(function(req, res) {
    res.status(404).send('404: No se encontro la página indicada.', 404);
});
app.use(function(err, req, res, next) {
    res.status(500).send('500: Ha ocurrido un error grave en el servidor');
});
// escuchar
app.listen(3000);

console.log("Servidor Express escuchando en modo %s", app.settings.env);