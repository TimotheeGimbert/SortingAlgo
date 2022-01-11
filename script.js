const fs = require('fs');
// console.log(process.argv);
const fileName = process.argv[2];

let data = [];
try {
  data = fs.readFileSync(fileName, 'utf8');
  console.log(data);
} catch (error) {
  console.error(error.message);
}

data = data
  .split(' ')
  .map(element => parseInt(element));
console.log(data);

const bubbleSort = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let k = 1; k < numbers.length; k++) {
      if (numbers[k] < numbers[k-1]) {
        let kTemp = numbers[k];
        numbers[k] = numbers[k-1];
        numbers[k-1] = kTemp;
      }
    }
  }
  return numbers;
}

console.log(bubbleSort(data));