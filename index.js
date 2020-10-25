let express = require('express');
let app = express();

app.get('/', (req, res) => res.send('hi there'));

let port = 8080;
if (process.env.PORT) {
    port = process.env.PORT;
}
exports.server = app.listen(port);

// bruh
