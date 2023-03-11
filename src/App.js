import { useState } from 'react';
import './App.css';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
      <div className='amit'>
        Developed By Love From <a id='1'  href="https://www.linkedin.com/in/amit-khedkar-740481199/">Amit Khedkar</a> 
      </div>
    </div>
  );
}

export default App;
