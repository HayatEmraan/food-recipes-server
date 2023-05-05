const express = require('express');
const cors = require('cors');
const S1 = require('./v2/S1.json');
const S2 = require('./v2/S2.json');
const app = express();
const port = 5000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/v2', (req, res) => {
    res.send(S1);
})
app.get('/v3/:id', (req, res) => {
    const S1send = req.params.id;
    const gotData = S2.find((S1sendId) => S1sendId.id == S1send);
    res.send(gotData);
})

app.listen(port);