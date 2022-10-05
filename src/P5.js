import Sketch from 'react-p5';


function P5({array}) {
    const setup = (p5, canvasParentRef) => {
      const myCanvas = p5.createCanvas(900, 600)
      myCanvas.parent(canvasParentRef);
      resetSketch();

    }

    const resetSketch = () => {
        const newArr = [];
        while (newArr.length < 50) {
          newArr.push(getRandomInt(5, 100));
        }
        return newArr;
    }

    const draw = (p5) => {
      p5.clear();
      for (let i = 0; i < array.length; i++) {
        p5.stroke(0);
        p5.fill(255, 0, 0)
        p5.rect(i * 20, p5.height - array[i], 20, array[i])
      }
    }

  return (<Sketch setup={setup} draw={draw} />);
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default P5;