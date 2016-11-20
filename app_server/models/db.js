/**
 * Created by Julius Alvarado on 11/7/2016.
 */

var mongoose = require('mongoose');
var readLine = require ("readline");

if (process.platform === "win32"){
    var rl = readLine.createInterface ({
        input: process.stdin,
        output: process.stdout
    });
    rl.on ("SIGINT", function (){
        process.emit ("SIGINT");
    });
}

var dbUri = 'mongodb://localhost/parkour1';

mongoose.connect(dbUri);

mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to '+dbUri);
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error: '+err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose Disconnected');
});

var gracefulShutdown = function(msg, callback){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through '+msg);
        callback();
    });
};

process.once('SIGUSR2', function(){
    gracefulShutdown('nodemon restart', function(){
        process.kill(process.id, 'SIGUSR2');  // process.kill emits SIGUSR2 again
    });
});

process.on('SIGINT', function(){
    gracefulShutdown('app termination', function(){
        process.exit(0);
    });
});

process.on('SIGTERM', function(){
    gracefulShutdown('heroku app shutdown', function(){
        process.exit(0);
    })
});

require('./locationsSchema');

//\\