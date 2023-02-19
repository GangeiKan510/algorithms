import SortingAlgorithms from './SortingAlgorithms.js';

const sort = new SortingAlgorithms;

////////////////////////////////// Array 128 //////////////////////////////////////
console.log("A. 128-length array with randomly filled elements");

const array128 = [];

for (let i = 1; i <= 128; i++) {
  array128.push(Math.ceil(Math.random() * 128));
}

console.time("Bubble Sort Execution Time");
sort.bubbleSort(array128);
console.timeEnd("Bubble Sort Execution Time");

console.time("Insertion Sort Execution Time");
sort.insertionSort(array128);
console.timeEnd("Insertion Sort Execution Time");

console.time("Selection Sort Execution Time");
sort.selectionSort(array128);
console.timeEnd("Selection Sort Execution Time");

////////////////////////////////// Array 256 //////////////////////////////////////
console.log("\nB. 256-length array with randomly filled elements");

const array256 = [];

for (let i = 1; i <= 256; i++) {
  array256.push(Math.ceil(Math.random() * 256));
}

console.time("Bubble Sort Execution Time");
sort.bubbleSort(array256)
console.timeEnd("Bubble Sort Execution Time");

console.time("Insertion Sort Execution Time");
sort.insertionSort(array256)
console.timeEnd("Insertion Sort Execution Time");

console.time("Selection Sort Execution Time");
sort.selectionSort(array256);
console.timeEnd("Selection Sort Execution Time");

////////////////////////////////// Array 512 //////////////////////////////////////
console.log("\nC. 512-length array with randomly filled elements");

const array512 = [];

for (let i = 1; i <= 512; i++) {
  array512.push(Math.ceil(Math.random() * 512));
}

console.time("Bubble Sort Execution Time");
sort.bubbleSort(array512)
console.timeEnd("Bubble Sort Execution Time");

console.time("Insertion Sort Execution Time");
sort.insertionSort(array512)
console.timeEnd("Insertion Sort Execution Time");

console.time("Selection Sort Execution Time");
sort.selectionSort(array512);
console.timeEnd("Selection Sort Execution Time");

////////////////////////////////// Array 1024 //////////////////////////////////////
console.log("\nD. 1024-length array with randomly filled elements");

const array1024 = [];

for (let i = 1; i <= 1024; i++) {
  array1024.push(Math.ceil(Math.random() * 1024));
}

console.time("Bubble Sort Execution Time");
sort.bubbleSort(array1024)
console.timeEnd("Bubble Sort Execution Time");

console.time("Insertion Sort Execution Time");
sort.insertionSort(array1024)
console.timeEnd("Insertion Sort Execution Time");

console.time("Selection Sort Execution Time");
sort.selectionSort(array1024);
console.timeEnd("Selection Sort Execution Time");

////////////////////////////////// Array 1024 sorted //////////////////////////////////////
console.log("\nE. 1024-length array that is already sorted");

const array1024sorted = [];

for (let i = 1; i <= 1024; i++) {
  array1024sorted.push(i);
}

console.time("Bubble Sort Execution Time");
sort.bubbleSort(array1024sorted)
console.timeEnd("Bubble Sort Execution Time");

console.time("Insertion Sort Execution Time");
sort.insertionSort(array1024sorted)
console.timeEnd("Insertion Sort Execution Time");

console.time("Selection Sort Execution Time");
sort.selectionSort(array1024sorted);
console.timeEnd("Selection Sort Execution Time");

////////////////////////////////// Array 1024 reversely sorted //////////////////////////////////////
console.log("\nF. 1024-length array that is a reversely sorted");

const array1024sortedreverse = [];

for (let i = 1024; i >= 1; i--) {
  array1024sortedreverse.push(Math.ceil(Math.random() * 1024));
}

console.time("Bubble Sort Execution Time");
sort.bubbleSort(array1024sortedreverse)
console.timeEnd("Bubble Sort Execution Time");

console.time("Insertion Sort Execution Time");
sort.insertionSort(array1024sortedreverse)
console.timeEnd("Insertion Sort Execution Time");

console.time("Selection Sort Execution Time");
sort.selectionSort(array1024sortedreverse);
console.timeEnd("Selection Sort Execution Time");

////////////////////////////////// Array 1024 almost sorted //////////////////////////////////////
console.log("\nG. 1024-length array that is almost sorted");
const array1024almostsorted = [];

// sorted
for (let i = 1; i >= 1009; i++) {
  array1024almostsorted.push(i);
}

// unsorted elements
for (let i = 1; i >= 15; i++) {
  array1024almostsorted.push(Math.ceil(Math.random() * 1024));
}

console.time("Bubble Sort Execution Time");
sort.bubbleSort(array1024almostsorted)
console.timeEnd("Bubble Sort Execution Time");

console.time("Insertion Sort Execution Time");
sort.insertionSort(array1024almostsorted)
console.timeEnd("Insertion Sort Execution Time");

console.time("Selection Sort Execution Time");
sort.selectionSort(array1024almostsorted);
console.timeEnd("Selection Sort Execution Time");

////////////////////////////////// Array 2048 //////////////////////////////////////
console.log("\nH. 2048-length array with randomly filled elements");
const array2048 = [];

// unsorted elements
for (let i = 1; i >= 2048; i++) {
  array2048.push(Math.ceil(Math.random() * 2048));
}

console.time("Bubble Sort Execution Time");
sort.bubbleSort(array2048)
console.timeEnd("Bubble Sort Execution Time");

console.time("Insertion Sort Execution Time");
sort.insertionSort(array2048)
console.timeEnd("Insertion Sort Execution Time");

console.time("Selection Sort Execution Time");
sort.selectionSort(array2048);
console.timeEnd("Selection Sort Execution Time");