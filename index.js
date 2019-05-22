#! /usr/bin/node

const request = require('request');
const argv = require('yargs').argv;

let apiKey = process.env.WEATHER_API_KEY;
let city = argv.c || "delhi";

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

request(url, function(err, response, body){
    if(err){
        console.log("error:", err);
    }
    else{
        let weather = JSON.parse(body);
        if(weather.message == "city not found"){
            console.log("city not found");
            return;
        }
        console.log(`It's ${weather.main.temp} in ${weather.name}`);
    }
});
// console.log(process.env);
