const express = require('express');
const app     = express();
const path    = require('path');
const port    = 3000;

app.use(express.static('src'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + 'download.html')))

app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`));
