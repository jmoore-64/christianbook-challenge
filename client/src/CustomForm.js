import React, { Component, useState } from 'react';

export default function CustomForm ({setCurrentProd}) {

     const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
    }
    
    function handleSubmit(event) {
        fetch('/product/' + value)
            .then(res => res.json())
            .then(data => setCurrentProd(data));
        event.preventDefault();
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
          <label>
              Name:
              <input type="text" value={value} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
          </form>
        </div>
    );
}