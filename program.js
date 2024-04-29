var http = require("http");
var dt = require("./mymodule");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/html" });
    response.write("Date is " + dt.myDateTime());
    response.end();
  })
  .listen(8000);
console.log("server started");
