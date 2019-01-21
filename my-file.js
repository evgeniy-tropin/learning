let testString = ['this', 'is', 'array', 'with', 'test', 'string'];
let numArr = [82, 49, 71, 65, 17, 51, 20, 17, 94, 17, 23, 29];
let simpleNumArr = [82, 14, 71, 65, 97, 34, 20, 76, 23, 16];
let multilevelArr = [5, 65, 97, 34, 9, 58, 20, [6, 76,23, [93,57,84], 19], 82, 14, 71];

let arrayApi = {
	sortTextString : function findMinNum (arr){
  	let sortedArr = [];
    
    // here should  be sorting logic
    
    return sortedArr;
  },

	cutMinValue : function findMinNum (arr){
    let minArrValue = arr[0];

    for (i = 1; i < arr.length; i++) {
      if (arr[i] < minArrValue){
        minArrValue = arr[i];
      }
    }

     for (i = 0; i < arr.length; i++) {
      if (arr.indexOf(minArrValue) !== -1){
        arr.splice(arr.indexOf(minArrValue), 1);
      }
    }
    
    return numArr;
  },
  
  copyOfArray : function arrayCopier (arr){
    let simpleArrCopy = arr.slice();
    
    return simpleArrCopy;
  },
  
  
  deepCopyOfArray : function arrayDeepCopier(arr){
    let deepArrCopy = [];

    for (i = 0; i < arr.length; i++){
      deepArrCopy.push(arr[i]);
    }
     
    return deepArrCopy;
  }
}

console.log(arrayApi.sortTextString(testString));
console.log(arrayApi.cutMinValue(numArr));
console.log(arrayApi.copyOfArray(simpleNumArr));
console.log(arrayApi.deepCopyOfArray(multilevelArr));
