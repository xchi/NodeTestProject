var express = require('express');
var app=express();

app.get('/health', function (req, res) {
    res.send('OK');
});

app.listen(5000, function () {
    console.info('popeye-arl-adapter is up and running on port ' + 5000);
});