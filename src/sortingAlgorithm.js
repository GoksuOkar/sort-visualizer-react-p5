import { sleep } from './helpers.js';

async function sorter (array, startIdx, endIdx, t = 20, states) {
  let l = startIdx;
  let r = endIdx - 1;
  let pivot = endIdx;



  if (startIdx >= endIdx) {
    return
  }

  while (l <= r) {
    if (array[l] > array[pivot] && array[r] < array[pivot]) {
      states[l] = 0;
      states[r] = 2;
      await swap(l, r, array, t, states);
      states[l] = -1;
      states[r] = -1;
    }
    if (array[l] <= array[pivot]) {
      l = l + 1;
    }
    if (array[r] >= array[pivot]) {
      r = r - 1;
    }
    await sleep(t);
  }

  await swap(l, pivot, array, t, states);
  const leftSubArrayIsSmaller = r - startIdx < l + 1 - pivot;
  if (leftSubArrayIsSmaller) {
    await Promise.all([sorter(array, 0, r, t, states), sorter(array, l + 1, endIdx,t, states)]);
  } else {
    await Promise.all([sorter(array, l + 1, endIdx, t, states), sorter(array, 0, r, t, states)]);
  }
}

async function swap(l, r, array, t = 20, states) {
  await sleep(t);
  let temp = array[r];
  array[r] = array[l];
  array[l] = temp;
  return;
}

export default sorter;