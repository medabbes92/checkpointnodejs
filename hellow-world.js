console.log('hello world')
var fs = require('fs');
var generator = require('generate-password');

// node server

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//creation file


// fs.writeFile('welcome.txt', 'Hello Node', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

 // read file
 

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});


//password

var password = generator.generate({
	length: 10,
	numbers: true
});

console.log(password);
