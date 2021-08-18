exports.min = function min (array) {
  if (!array || !array.length) return 0;
    return array.sort((a, b) => b - a).pop(); 
}

exports.max = function max (array) {
  if (!array || !array.length) return 0;
    return array.sort((a, b) => a - b).pop();
    
}

exports.avg = function avg (array) {
    if (!array || !array.length) return 0;
    let sumArr = 0;
    for (let i = 0; i < array.length; i++) {
        sumArr = sumArr + array[i];
    }
    let avArr = sumArr/array.length;
    return avArr;
}
