import './App.css';
import sorter from './sortingAlgorithm.js';
import {useState, useEffect, useRef} from 'react';
import P5 from './P5.js';

function generateArray () {
  const newArr = [];
  while (newArr.length < 50) {
    newArr.push(getRandomInt(5, 500));
  }
  return newArr;
}


function App() {
  const [arr, setArr] = useState(generateArray());
  let newArr = arr.slice();

  useEffect(() => {console.log('resetting')}, [arr])

  const resetArray = () => {
    console.log('here');
    setArr(generateArray());
  }

  return (
    <div id='container'>
        <P5 array={newArr}/>
      <div id='buttons'>
        <button>Quick Sort</button>
        <button onClick={resetArray}>Generate New Array</button>
      </div>
    </div>
  );
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default App;
