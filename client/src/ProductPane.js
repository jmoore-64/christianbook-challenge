import React, { Component } from 'react';

export default function ProductPane ({currentProd}) {

    console.log(currentProd);
    return (
        <div>
            <h2>Title: {currentProd.title}</h2> 
            <p>ISBN13: {currentProd.isbn13}</p>
            <p>ISBN: {currentProd.isbn}</p>
            <img src={currentProd.image || ''}></img>
            <p>ID: {currentProd.id}</p>
            {currentProd ? <a href={currentProd.link || 'www.google.com'}>Clickable hyperlink</a> : 'testing'}
            <p>Customer rating: {currentProd.customer_rating}</p>
        </div>
    );

}