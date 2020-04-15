const express = require('express');
const rp = require('request-promise');
var app = express();
var PORT = 3000 || process.env.PORT;
app.set('view engine', 'ejs');
app.get('/results', (req, res) => {
	var cityName = req.query.q;
	if (cityName) {
		rp(
			'https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=83357010e805049f8a9d009658c7c1f0&q=' +
				cityName
		)
			.then((body) => {
				var parsedData = JSON.parse(body);
				//eval(require('locus'));
				console.log(parsedData);
				res.render('result', { data: parsedData });
			})
			.catch((err) => {
				console.log('Err', err);
			});
	} else
		rp(
			'https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=83357010e805049f8a9d009658c7c1f0&q=delhi'
		)
			.then((body) => {
				var parsedData = JSON.parse(body);
				//eval(require('locus'));
				console.log(parsedData);
				if (parsedData.cod == 200) res.render('result', { data: parsedData });
				else res.render('error');
			})
			.catch((err) => {
				console.log('Err', err);
			});
});

app.listen(PORT, () => {
	console.log(`Server has started at PORT::${PORT}`);
});
