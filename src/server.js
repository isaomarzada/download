const express = require('express')
const app     = express()
const path    = require('path')
const port    = 3000


app.use('/css', express.static(__dirname +'/css'));
app.use(express.static('src'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/download.html')))

app.get('/downloadBook', function (req, res) {
  res.download(__dirname + '/pdfFolder/Book.pdf', 'Book.pdf');
})

app.get('/downloadbee', function (req, res) {
  res.download(__dirname + '/pdfFolder/bee.pdf', 'bee.pdf');
})

app.get('/downloadbeetle', function (req, res) {
  res.download(__dirname + '/pdfFolder/beetle.pdf', 'beetle.pdf');
})

app.get('/downloadcat', function (req, res) {
  res.download(__dirname + '/pdfFolder/cat.pdf', 'cat.pdf');
})

app.get('/downloadcow', function (req, res) {
  res.download(__dirname + '/pdfFolder/cow.pdf', 'cow.pdf');
})

app.get('/downloaddinosaur', function (req, res) {
  res.download(__dirname + '/pdfFolder/dinosaur.pdf', 'dinosaur.pdf');
})

app.get('/downloaddog', function (req, res) {
  res.download(__dirname + '/pdfFolder/dog.pdf', 'dog.pdf');
})

app.get('/downloadelephant', function (req, res) {
  res.download(__dirname + '/pdfFolder/elephant.pdf', 'elephant.pdf');
})

app.get('/downloadgrasshopper', function (req, res) {
  res.download(__dirname + '/pdfFolder/grasshopper.pdf', 'grasshopper.pdf');
})

app.get('/downloadhippo', function (req, res) {
  res.download(__dirname + '/pdfFolder/hippo.pdf', 'hippo.pdf');
})

app.get('/downloadlion', function (req, res) {
  res.download(__dirname + '/pdfFolder/lion.pdf', 'lion.pdf');
})

app.get('/downloadlizard', function (req, res) {
  res.download(__dirname + '/pdfFolder/resume.pdf', 'resume.pdf');
})

app.get('/downloadscorpion', function (req, res) {
  res.download(__dirname + '/pdfFolder/lizard.pdf', 'lizard.pdf');
})

app.get('/downloadshark', function (req, res) {
  res.download(__dirname + '/pdfFolder/shark.pdf', 'shark.pdf');
})

app.get('/downloadsnake', function (req, res) {
  res.download(__dirname + '/pdfFolder/snake.pdf', 'snake.pdf');
})

app.get('/downloadspider', function (req, res) {
  res.download(__dirname + '/pdfFolder/spider.pdf', 'spider.pdf');
})

app.get('/downloadTiger', function (req, res) {
  res.download(__dirname + '/pdfFolder/Tiger.pdf', 'Tiger.pdf');
})

app.get('/downloadwasp', function (req, res) {
  res.download(__dirname + '/pdfFolder/wasp.pdf', 'wasp.pdf');
})

app.get('/downloadwhale', function (req, res) {
  res.download(__dirname + '/pdfFolder/whale.pdf', 'whale.pdf');
})

app.get('/downloadhog', function (req, res) {
  res.download(__dirname + '/pdfFolder/hog.pdf', 'hog.pdf');
})

app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`));
