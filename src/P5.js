import Sketch from 'react-p5';
import sorter from './sortingAlgorithm.js';
import { Button } from '@mantine/core';


function P5({array, playing, resetArray}) {
  const states = [];

  let toSort = array.slice();
  const setup = (p5, canvasParentRef) => {
    const myCanvas = p5.createCanvas(1000, 600)
    myCanvas.parent(canvasParentRef);
    sortPlay();
  }

  const sortPlay = () => {
    toSort = array.slice();
    sorter(toSort, 0, toSort.length - 1, 25, states);
  }

  const draw = async (p5) => {
    p5.clear();
    for (let i = 0; i < toSort.length; i++) {
      p5.stroke(0);
      if (states[i] === 0) {
        p5.fill(240,235,244);
      } else if (states[i] === 2){
        p5.fill(114,206,241);
      }
       else {
        p5.fill(163,47,126);
      }
      p5.rect(i * 8, p5.height - toSort[i], 8, toSort[i])
    }
  }

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <Button onClick={sortPlay} color="indigo" radius="lg">Sort</Button>
        <Button onClick={resetArray} color="indigo" radius="lg">Reset Array</Button>
      </div>
    </div>
  )


}

export default P5;