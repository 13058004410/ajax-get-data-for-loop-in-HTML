const express=require('express');
const bodyParser=require('body-parser');
const data=require('./routes/data.js');

var app=express();

app.listen(8080);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended:false
}));

app.use('/data',data);