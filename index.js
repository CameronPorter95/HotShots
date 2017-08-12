var express = require('express');
var app = express();

app.set('view engine', 'pug');


//Checks if the app is running on Heroku
if(process.env.NODE && ~process.env.NODE.indexOf("heroku")){
	//Do basic HTTP server setup, Heroku will handle HTTPS
	port = process.env.PORT || 8080;
	app.listen(port, function () {
 	console.log('App listening on port '+port);

});}
else {
 app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
 });
};
app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.render('index', {title: 'Hey', message: 'Hello there!'});
});
