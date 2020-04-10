const express = require('express');
const app = express();
const rp = require('request-promise');
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.get('/results', (req, res) => {
	var movieName = req.query.s;
	rp('http://www.omdbapi.com/?apikey=thewdb&s=' + movieName)
		.then((body) => {
			const parsedData = JSON.parse(body);
			console.log(parsedData);
			res.render('result', { allData: parsedData });
		})
		.catch((err) => {
			console.log(err);
		});
});
app.get('/', (req, res) => {
	res.render('search');
});
app.listen(PORT, () => {
	console.log(`Server has started at ${PORT}`);
});
