


var con = require('./connection');
var express = require('express');
// const mysql = require('mysql')
var app = express();

app.use(express.static(__dirname+'/'))
// const port = process.env.PORT || 8080;

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/home.html');
});

app.post('/', function(req, res){
    var Name = req.body.Name;
    var Subject = req.body.Subject;
    var Email = req.body.Email;
    var Message = req.body.Message;
    var PhoneNumber = req.body.PhoneNumber;

    con.connect(function(error){
        if(error) throw error;

        var sql = "INSERT INTO users(Name, Subject, Email, Message, PhoneNUmber) VALUES ('" + Name + "', '" + Subject + "', '" + Email + "', '" + Message + "', '" + PhoneNumber + "')";
        con.query(sql, function(error){
            if(error) throw error;
            res.send('Message sent successfully');
        });
    })
});

app.post('/', function(req, res){
    var UserId = req.body.UserId;
    var Password = req.body.Password;
    var Email = req.body.Email;

    con.connect(function(error){
        if(error) throw error;

        var sql = "INSERT INTO reg_users(UserId, Password, Email) VALUES ('" + Name + "', '" + Subject + "', '" + Email + "', '" + Message + "', '" + PhoneNumber + "')";
        con.query(sql, function(error){
            if(error) throw error;
            res.send('You have been registered successfully');
        });
    })
});

app.listen(8080);