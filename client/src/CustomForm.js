import React, {useState} from 'react';

/**
 * Custom Component representing the form 
 * @param {function} param0 the function used to change the current product being shown
 * @returns a custom form
 */
export default function CustomForm ({setCurrentProd}) {

    // value is what's in the search bar, setValue changes the current value
    const [value, setValue] = useState('');

    // updates value when a change is detected in the search bar
    function handleChange(event) {
        setValue(event.target.value);
    }
    
    /**
     * Handles behavior when submit button is pressed. Makes an HTTP GET request to the backend
     * through port 3001 (specified in /client/package.json as a proxy). Sets the current product
     * being shown to the JSON object returned by the back-end.
     * @param {*} event the event triggering function call
     */
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