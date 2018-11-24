// Imports
const http = require("http");

const routes = require("./routes");

// Code
const server = http.createServer(routes);

server.listen(3000);
