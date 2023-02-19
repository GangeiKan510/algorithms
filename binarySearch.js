let splitsArray = [];
let indices = [];

function binarySearch(array, target) {

  left = 0;
  right = array.length;
  splits = 0;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    splits ++;
    if (array[middle] < target) {
      left = middle + 1;
    } else if (array[middle] > target) {
      right = middle - 1;
    } else {
      splitsArray.push(splits);
      indices.push(middle);
      return `target value: ${target}\nindex: ${middle} \nnumber of splits: ${splits}\n`;
    }
  }
 
  return -1;
}

// Generating Test Values 
const testValues = [];

for (var i = 1; i <= 100 ; i++) {
  let value = Math.ceil(Math.random() * 1024);
  testValues.push(value);
}

// Creating an array to be searched
const arrayTo1024 = [];

for (let n = 1; n <= 1024; n++) {
  arrayTo1024.push(n);
}

console.log(indices);
console.log(arrayTo1024);

for (let i = 0; i <= testValues.length; i++) {
  console.log(binarySearch(arrayTo1024, testValues[i]));
}

const values = [];

for (let i = 0; i < testValues.length; i++) {
  let pairs = {
    x: Number,
    y: Number
  };

  pairs.x = indices[i];
  pairs.y = splitsArray[i];
  
  values.push(pairs);
}
console.log(values);

const ctx = document.getElementById('myChart');

// y = splits
// x = target value
const data = {
  datasets: [{
    label: 'Scatter Dataset',
    data: values,
    backgroundColor: 'rgb(255, 99, 132)'
  }],
};
  
new Chart(ctx, {
  type: 'scatter',
  data: data,
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
  }
});
