const socket = io('/singladura');
console.log('Server');

socket.on('Hola',function(data){
    console.log(data);
});


