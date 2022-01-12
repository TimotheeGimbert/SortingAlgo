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
  let counter = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let k = 1; k < numbers.length; k++) {
      counter++;
      if (numbers[k] < numbers[k-1]) {
        let kTemp = numbers[k];
        numbers[k] = numbers[k-1];
        numbers[k-1] = kTemp;
      }
    }
  }
  return [numbers, counter];
}

dataInput = data.slice();
console.log(dataInput);
const bubbleSortingResults = bubbleSort(dataInput);
console.log(`Bubble Sorting Algo (${bubbleSortingResults[1]} iterations) : ` + bubbleSortingResults[0]);


//////////////////////// INSERTION SORTING ALGO
const insertionSort = (numbers) => {
  let counter = 0;
  for (let i = 1; i < numbers.length; i++) {
    let temp = numbers[i];
    for (let k = i-1; k >= 0; k--) {
      counter++;
      if (numbers[k] > temp) {
        numbers[k+1] = numbers[k];
        numbers[k] = temp;  
      }
    }
  }
  return [numbers, counter];
}

dataInput = data.slice();
console.log(dataInput);
const insertionSortingResults = insertionSort(dataInput);
console.log(`Insertion Sorting Algo (${insertionSortingResults[1]} iterations) : ` + insertionSortingResults[0]);


//////////////////////// SELECTION SORTING ALGO
const selectionSort = (numbers) => {
  let counter = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let k = i+1; k < numbers.length; k++) { 
      counter++;
      if (numbers[k] < numbers[i]) {
        const currentItem = numbers[i];
        const currentMinimum = numbers[k];
        numbers[k] = currentItem;
        numbers[i] = currentMinimum;
        console.log(numbers);
      }
    }
  }
  return [numbers, counter];
}

dataInput = data.slice();
console.log(dataInput);
const selectionSortingResults = selectionSort(dataInput);
console.log(`Selection Sorting Algo (${selectionSortingResults[1]} iterations) : ` + selectionSortingResults[0]);
