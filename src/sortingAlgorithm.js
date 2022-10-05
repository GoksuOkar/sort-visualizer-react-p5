function sorter (array, startIdx, endIdx) {

  let l = startIdx;
  let r = endIdx - 1;
  let pivot = endIdx;


  if (startIdx >= endIdx) {
    return
  }

  while (l <= r) {
    if (array[l] > array[pivot] && array[r] < array[pivot]) {
      swap(l, r, array);
    }
    if (array[l] <= array[pivot]) {
      l = l + 1;
    }
    if (array[r] >= array[pivot]) {
      r = r - 1;
    }
  }
  swap(l, pivot, array);
  const leftSubArrayIsSmaller = r - startIdx < l + 1 - pivot;
  if (leftSubArrayIsSmaller) {
    sorter(array, 0, r);
    sorter(array, l + 1, endIdx);
  } else {
    sorter(array, l + 1, endIdx);
    sorter(array, 0, r);
  }
}

function swap(l, r, array) {
  let temp = array[r];
  array[r] = array[l];
  array[l] = temp;
  return;
}

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

export default sorter;