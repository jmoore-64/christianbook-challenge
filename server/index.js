'use strict';

const express = require("express");
const res = require("express/lib/response");

const PORT = process.env.PORT || 3001;

const app = express();

const fs = require('fs');

let rawdata = fs.readFileSync('./server/products.json');
let products = JSON.parse(rawdata).records;

app.get('/product', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/product/*', (req, res) => {
    handleReq(req, res);
});

function findProduct(id) {
    for (var x = 0, len = products.length; x < len; x++) {
        let p = products[x];

        if (p.id === id) {
            console.log(p + ' was found in the product listings.');
            return p;
        }
    }
    return null;
}

function handleReq(req, res) {
    let id = req.path.slice(9);
    let foundProd = findProduct(id);
    // a matching product was found, now we need to return foundProd to the front-end
    if (foundProd) {
        res.status(200);
        //res.setHeader('Content-Type', 'application/json');

        // NEED TO MAKE SURE WE ARE SENDING AS JSON, NOT STRING - ACCORDING TO README
        res.send(foundProd);
    }
    // nothing matching found, 
    else {
        res.sendStatus(404);
    }
    res.end();

};

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});