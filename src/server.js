const express = require('express')
const app     = express()
const path    = require('path')
const port    = 3000


app.use(express.static('src'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/download.html')))

app.post('/', function(req, res) {
  if (req.files) {
    var file = req.files.filename,
        filename = file.name;
    file.mv("./pdfFolder/" + filename, function(err) {
      if(err) {
        console.log(err)
        res.send("error occurred")
      }
      else {
        res.send("Done!")
      }
    })
  }
})

























/*app.get('/downloadBook', function (req, res) {
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
})*/




app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`));
