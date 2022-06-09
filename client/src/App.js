import React, {useState} from "react";
import CustomForm from './CustomForm.js';
import ProductPane from "./ProductPane";
import './App.css';

function App() {

  const [currentProd, setCurrentProd] = useState('');

  return (
    <div className="App">
      <CustomForm setCurrentProd={setCurrentProd}/>
      <ProductPane currentProd={currentProd}/>
    </div>
  );
}

export default App;
