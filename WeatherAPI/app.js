const express = require('express');
const rp = require('request-promise');
var app = express();
var PORT = 3000 || process.env.PORT;
rp('https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=83357010e805049f8a9d009658c7c1f0')
	.then((body) => {
		var parsedData = JSON.parse(body);
		//eval(require('locus'));
		console.log(parsedData);
	})
	.catch((err) => {
		console.log('Err', err);
	});
app.listen(PORT, () => {
	console.log(`Server has started at PORT::${PORT}`);
});
