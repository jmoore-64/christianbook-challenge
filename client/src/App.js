import React, {useState} from "react";
import CustomForm from './CustomForm.js';
import ProductPane from "./ProductPane";
import './App.css';

/**
 * Main file on the front-end, contains both ProductPane and CustomForm
 * @returns my webpage
 */
function App() {

  // currentProd is the product currently being shown, defaults to ''
  // setCurrentProd is a function used to change currentProd
  const [currentProd, setCurrentProd] = useState('');

  return (
    <div className="App">
      <CustomForm setCurrentProd={setCurrentProd}/>
      <ProductPane currentProd={currentProd}/>
    </div>
  );
}

export default App;
