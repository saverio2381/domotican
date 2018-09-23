const socket = io('/singladura');
console.log('Server');

socket.on('Hola',function(data){
    console.log(data);
});

socket.on('client:message', function(data){
    socket.emit('server:message','index.js Oido cocina, has dicho: ' , data );
});

