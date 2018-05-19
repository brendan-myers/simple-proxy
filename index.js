const express = require('express');
const cors = require('cors');
const fetch =  require('node-fetch');
const bodyParser = require('body-parser');

const SERVER = 'https://...';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('*', (req, res) => {
    const opts = {
        method: 'POST', 
        body: JSON.stringify(req.body), 
        headers: {'Content-Type': 'application/json'}
    };
    
    fetch(SERVER + req.url, opts).then(() => {
        res.send(req.body);
    });
});

app.listen(3000, () => console.log('Proxy API listening on port 3000'));