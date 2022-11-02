import { sleep } from './helpers.js';

async function quicksort(array, start, end, states) {
  let pivot = start;
  let l = pivot + 1;
  let r = end;

  if ( end <= start) {
    return;
  }

  states[pivot] = 2;
  states[l] = 0;
  states[r] = 0;

  while (l <= r) {
    if (array[l] > array[pivot] && array[r] < array[pivot]) {
      await swap(array, l, r);
    }
    if (array[l] <= array[pivot]) {
      states[l] = -1;
      l = l + 1;
      states[l] = 0;
      await sleep(10);
    }
    if (array[r] >= array[pivot]) {
      states[r] = -1;
      r = r - 1;
      states[r] = 0;
      await sleep(10);
    }
  }

  states[l] = -1;
  states[r] = -1;
  states[pivot] = -1;
  await swap(array, r, pivot);


  // sort the smaller array first
  let leftIsSmaller = r - start < end - l;
  if (leftIsSmaller) {
    Promise.all([quicksort(array, start, r - 1, states), quicksort(array, r + 1, end, states)]);
  } else {
    Promise.all([await quicksort(array, r + 1, end, states), await quicksort(array, start, r - 1, states)]);
  }
}

async function swap(arr, i, j) {
  await sleep(100);
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export default quicksort;