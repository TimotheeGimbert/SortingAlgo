//////////////////////// INPUT DATA MANAGEMENT
const fs = require('fs');
// console.log(process.argv);
const fileName = process.argv[2];

let data = [];
let dataInput = [];
try {
  data = fs.readFileSync(fileName, 'utf8');
  console.log(data);
} catch (error) {
  console.error(error.message);
}

data = data
  .split(' ')
  .map(element => parseInt(element));

//////////////////////// BUBBLE SORTING ALGO
const bubbleSort = (numbers) => {
  let bubbleCounter = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let k = 1; k < numbers.length; k++) {
      if (numbers[k] < numbers[k-1]) {
        let kTemp = numbers[k];
        numbers[k] = numbers[k-1];
        numbers[k-1] = kTemp;
        bubbleCounter++;
      }
    }
  }
  return [numbers, bubbleCounter];
}

dataInput = data.slice();
console.log(dataInput);
const bubbleSortingResults = bubbleSort(dataInput);
console.log(`Bubble Sorting Algo (${bubbleSortingResults[1]} operations) : ` + bubbleSortingResults[0]);


//////////////////////// INSERTION SORTING ALGO
const insertionSort = (numbers) => {
  let insertionCounter = 0;
  for (let i = 1; i < numbers.length; i++) {
    let temp = numbers[i];
    for (let k = i-1; k >= 0; k--) {
      if (numbers[k] > temp) {
        numbers[k+1] = numbers[k];
        numbers[k] = temp;
        insertionCounter++;
      }
    }
  }
  return [numbers, insertionCounter];
}

dataInput = data.slice();
console.log(dataInput);
const insertionSortingResults = insertionSort(dataInput);
console.log(`Insertion Sorting Algo (${insertionSortingResults[1]} operations) : ` + insertionSortingResults[0]);
