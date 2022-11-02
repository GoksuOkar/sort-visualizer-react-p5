import Sketch from 'react-p5';
import quicksort from './sortingAlgorithm.js';
import { Button } from '@mantine/core';
import {generateArray} from './helpers.js';

function P5() {
  const states = [];
  let toSort = generateArray();

  const setup = (p5, canvasParentRef) => {

    for (let i = 0; i < toSort.length; i++) {
      states.push(-1);
    }
    const myCanvas = p5.createCanvas(1000, 600)
    myCanvas.parent(canvasParentRef);
  }

  const sortPlay = () => {
    quicksort(toSort, 0, toSort.length - 1, states);
  }

  const draw = async (p5) => {
    p5.clear();
    for (let i = 0; i < toSort.length; i++) {
      p5.stroke(0);
      if (states[i] === 0) {
        p5.fill(223, 255, 0);
      } else if (states[i] === 2){
        p5.fill(255, 127, 80);
      } else if (states[i] === 3) {
        p5.fill(204, 210, 255)
      }
       else {
        p5.fill(204, 204, 255);
      }
      p5.rect(i * 8, p5.height - toSort[i], 8, toSort[i])
    }
  }

  return (
    <div style={{}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <Button color="gray" uppercase onClick={sortPlay}>Play</Button>
        <Button onClick={() => {toSort = generateArray()}} color="gray" uppercase>Reset Array</Button>
      </div>
      <Sketch setup={setup} draw={draw} />
    </div>
  )
}

export default P5;