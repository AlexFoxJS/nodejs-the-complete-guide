const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log('1. Console log middleware!');
	next();
});

app.use((req, res, next) => {
	console.log('2. Console log middleware!');
	res.send('<h1>Hello from Express</h1>')
});

app.listen(3000);
