const express = require('express');
const app = express();
const rp = require('request-promise');
const PORT = process.env.PORT || 3000;
app.get('/results', (req, res) => {
	res.render('Hello');
});
// rp("http://www.omdbapi.com/?apikey=thewdb&i=tt2015381")
// .then((body)=>{
//     console.log(body);
// })
// .catch((err)=>{
//     console.log(err);
// })
app.listen(PORT, () => {
	console.log(`Server has started at ${PORT}`);
});
