var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
var request = require('request');
var weather;

app.post('/', function (req, res) {
    let city = req.body.city;
    let url = `http://openweathermap.org/data/2.5/weather?q=${city}&appid=b6907d289e10d714a6e88b30761fae22`;


    request(url, function (err, response, body) {
        if(err){
            res.render('index', {weather: null, error: 'Error, please try again'});

        } else {
            try {
                 weather = JSON.parse(body)
            } catch(e) {
// here you would get the same "unable to parse json <" error above
                res.render('index', {weather: null, error: 'Error, please try again'});

            }

            if(weather.main === undefined){
                res.render('index', {weather: null, error: 'Error, please try again'});
            } else {
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                res.render('index', {weather: weatherText, error: null});
            }
        }
    });
})

app.get('/', function (req, res) {
    // NEW CODE
    res.render('index', {weather: null, error: null});
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})

// let weatherLast = weather['main']['temp'];
