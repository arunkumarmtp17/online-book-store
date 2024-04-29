var http = require("http");

function sample(request, response) {
  response.writeHead(404, { "Content-Type": "text/html" });
  response.write("Welcome to Packers and Movers website...");
  response.write("<h1>Carry with care</h1>");
  response.end("<html><body>Home,URL was:" + request.url + "</body></html>");
  console.log("Request received");
}

var server = http.createServer(sample);
server.listen(8000);

console.log("Server running");
