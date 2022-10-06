import './App.css';
import sorter from './sortingAlgorithm.js';
import {useState, useEffect, useRef} from 'react';
import P5 from './P5.js';
import {generateArray} from './helpers.js';

function App() {
  const [arr, setArr] = useState(generateArray());
  let newArr = arr.slice();

  useEffect(() => {console.log('resetting')}, [arr])

  const resetArray = () => {
    setArr(generateArray());
  }

  return (
    <div id='container'>
        <P5 array={newArr} resetArray={resetArray}/>
    </div>
  );
}

export default App;
