const http = require('http');
const app = require('./app');
const config = require('config')
const port = config.get("server.port");
const host = config.get("server.host");
const server = http.createServer(app);
server.listen(port, () => {
    console.log('server run in port: ', port);
});