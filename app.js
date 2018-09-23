// Interprete intermedio que mantendrá los diferentes canales de comunicacion
const path = require('path');
const express = require('express');
const app = express();

const socket = require('socket.io');

app.set('port',process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(app.get('port'), () => {
    console.log('Servidor listo en puerto ' , app.get('port'));
})

const io = socket(server);

var singladura = io.of('/singladura');

singladura.on('connection',function(socket){
    
    singladura.emit('Hola','Bienvenidos a Singladura ',socket.id);

    singladura.on('client:message', function(data){
        singladura.emit('server:message','Oido cocina, has dicho: ' , data );
    });

});



