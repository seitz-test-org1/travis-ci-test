let express = require('express');
let app = express();

app.get('/', (req, res) => res.send('welcome to the root of my website'));

let port = 8080;
if (process.env.PORT) {
    port = process.env.PORT;
}
exports.server = app.listen(port);

// bruh
