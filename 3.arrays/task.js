function compareArrays(arr1, arr2) {
    let result;
    result = arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
  
    return result; // boolean  
}

function advancedFilter(arr) {
    let resultArr;
    resultArr = arr
    .filter((element) => element > 0) 
    .filter((element) => element % 3 === 0) 
    .map((element) => element * 10); 
  
    return resultArr; // array
  }