module.export = {
sort: function (numbers)  {
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
}