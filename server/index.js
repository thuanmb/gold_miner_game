const express = require('express');
const path = require('path');

const PORT = 8081;

const app = express();
app.use(express.static('public'));
app.use(express.static('dist'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () =>
	console.log(`Started the app. Listening on port ${PORT}!`)
);
