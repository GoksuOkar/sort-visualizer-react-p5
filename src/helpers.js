export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function generateArray () {
  const newArr = [];
  while (newArr.length < 130) {
    newArr.push(getRandomInt(5, 500));
  }
  return newArr;
}