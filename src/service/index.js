// const { Inbox, Send } = require('./mailhandler')

let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send('Hello')
})

app.get('/mails/all', (req, res) => {
    Inbox(req);
    res.send('Hello');


})

app.get('/mails/all2', require('./mailhandler/Send'));


let port = 3456;

app.listen(port);
