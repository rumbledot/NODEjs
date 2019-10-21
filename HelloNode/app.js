var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/:id', function(req, res) {
    res.send('response to ' + req.params.id);
});

app.get('/profile/:name', function(req, res) {
    var data = {
        age: 29,
        job: 'ninja',
        hobby: [
            'cooking',
            'singing',
            'watching tv'
        ]
    };
    res.render('profile', {
        person: req.params.name,
        data: data
    });
});

app.listen(3000);