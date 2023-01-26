function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
}

function advancedFilter(arr) {
    return arr.filter(element => element > 0 && element % 3 === 0).map(element => element *10);
}