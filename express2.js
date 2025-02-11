const express = require('express');

const app = express();

// Middlewear
app.use((req, res, next) => {
	console.log('<h1>Heeellloo</h1>')
	next()
})
app.get('/', (req, res) => {
 res.send('testtest');
})
app.listen(3000); 