const express = require("express");
const app = express();
const port = 5000;
const request = require("request");

app.get("/", (req, res,) => res.send('hello world'));
app.get("/newEndpoint", (req, res) => res.send('smelly belly felly'));

app.get("/getSingapore", (req, res) => {
    request('http://api.weatherstack.com/current?access_key=8b4a39fd9a71371554d51600efa8b416&query=Singapore',
    function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var parsedBody = JSON.parse(body);
            var temp_C = parsedBody["current"]["temperature"]; 
            res.send({ temp_C }); 
        }
    })
})

app.listen(port, ()=> console.log('Example app listening on port ${port}'));