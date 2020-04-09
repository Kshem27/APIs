const express = require('express');
var app = express();
const rp = require('request-promise');
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.get('/results', (req, res) => {
	rp('http://www.omdbapi.com/?apikey=thewdb&i=tt2015381')
		.then((body) => {
			const parsedData = JSON.parse(body);
			console.log(parsedData);
			res.render('result', { data: parsedData });
		})
		.catch((err) => {
			console.log(err);
		});
});
app.listen(PORT, () => {
	console.log(`Server has started at ${PORT}`);
});
