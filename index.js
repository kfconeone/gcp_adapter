http = require('http');

var options = {
    hostname: 'http://localhost:52673',
      port: 80,
      path: '/deviceLoginV2',
      method: 'POST',
      headers: {
              'Content-Type': 'application/json',
          }
        };
var req = http.request(options, function(res) {
  console.log('Status: ' + res.statusCode);
  console.log('Headers: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (body) {
    console.log('Body: ' + body);
    fs.writeFile("test.txt", body, function(err) {
    if(err) {
        return console.log(err);
    }
              console.log("The file was saved!");
    }); 
  });
});
req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
// write data to request body
// req.write('{"string": result}');  ///RESULT HERE IS A JSON

result = '{ "hello": "json" }';
req.write('{"string": '+result+'}');

req.end();