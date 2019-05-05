// Better solution with hash Table

// Time : O(n)
// Space : O(n)
function twoNumberSum(input, target) {
  let hashMap = {}, output = [];

  for (let i = 0; i < input.length; i++) {
    if (!hashMap[input[i]]) {
      let numberExist = target - input[i];
      if (hashMap[numberExist]) {
        output.push([numberExist, input[i]]);
      }
    }
    hashMap[input[i]] = input[i];
  }
  return output;
}


// Sample Data

arr_1 = [4, 6, 1, 9];
arr_2 = [4, 6, 1];
arr_3 = [1, 2, 3, 10, 4, 5, 6, 7, 8, 9];
arr_4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];

console.log(twoNumberSum(arr_1, 10)); //[4, 6]
console.log(twoNumberSum(arr_2, 5));  //[4, 1]
console.log(twoNumberSum(arr_3, 17));  //[8, 9]
console.log(twoNumberSum(arr_4, 18));  //[3, 15]

