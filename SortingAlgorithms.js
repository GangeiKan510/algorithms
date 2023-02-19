class SortingAlgortithms {

  bubbleSort(array){
	
    for(let i = 0; i <= array.length - 1; i++){
  
        for(let j = 0; j < ( array.length - i - 1); j++){
  
            if(array[j] > array[j + 1]){
  
            let temp = array[j];
  
            array[j] = array[j + 1];
            array[j + 1] = temp;
            }
        }
    }
  
    return array;
  }

  insertionSort(array) {
    let n = array.length;
        for (let i = 1; i < n; i++) {
  
            let current = array[i];
  
            let j = i-1; 
            while ((j > -1) && (current < array[j])) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = current;
        }
    return array;
  }
  
  selectionSort(arr) {
  
    for (let i = 0; i < arr.length; i++) {
      let lowest = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j
        }
      }
      if (lowest !== i) {
  
        ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
      }
    }
    return arr
  }
} 

export default SortingAlgortithms;