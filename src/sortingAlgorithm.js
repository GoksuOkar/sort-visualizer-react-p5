import { sleep } from './helpers.js';

async function sorter (array, startIdx, endIdx, states) {
  if (startIdx >= endIdx) {
    return
  }
  await partition(array, startIdx, endIdx, states);
}

async function partition(array, startIdx, endIdx, states) {
  let l = startIdx;
  let r = endIdx - 1;
  let pivot = endIdx;

  while (l <= r) {
    if (array[l] > array[pivot] && array[r] < array[pivot]) {
      await swap(l, r, array, states);
    }
    if (array[l] <= array[pivot]) {
      l = l + 1;
    }
    if (array[r] >= array[pivot]) {
      r = r - 1;
    }
  }

  await swap(l, pivot, array, states);
  const leftSubArrayIsSmaller = r - startIdx < l + 1 - pivot;

  //recursive part
  if (leftSubArrayIsSmaller) {
    await sorter(array, 0, r, states);
    await sorter(array, l + 1, endIdx, states);
  } else {
    await sorter(array, l + 1, endIdx, states);
    await sorter(array, 0, r, states);
  }
};

async function swap(l, r, array, states) {
 await sleep(5);
  let temp = array[r];
  array[r] = array[l];
  array[l] = temp;
  return;
}

export default sorter;