'use strict';

const express = require("express");
const res = require("express/lib/response");

// server is running on port 3001 to listen for requests from front-end
const PORT = process.env.PORT || 3001;

const app = express();

const fs = require('fs');

// reading products from file - change filename here
let rawdata = fs.readFileSync('./server/products.json');
let products = JSON.parse(rawdata).records;

// landing message, not used
app.get('/product', (req, res) => {
    res.json({ message: "Hello from server!" });
});

// listens for GET requests for specific products
app.get('/product/*', (req, res) => {
    handleReq(req, res);
});

/**
 * Determines if the given id corresponds to any of the existing product offerings
 * @param {String} id 
 * @returns null if not found, or the Object representing the product if found
 */
function findProduct(id) {
    for (var x = 0, len = products.length; x < len; x++) {
        let p = products[x];

        if (p.id === id) {
            return p;
        }
    }
    return null;
}

// modifies the HTTP response object (res) to send proper response whether the product
// was found or not
function handleReq(req, res) {
    let id = req.path.slice(9);
    let foundProd = findProduct(id);
    // a matching product was found, now we need to return foundProd to the front-end
    if (foundProd) {
        res.status(200);
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