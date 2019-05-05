// Time : O(n Log(n))
// Space : O(n)

function twoNumberSum(input, target) {

  let left = 0, right = input.length - 1, output = [];
  while (left < right) {

    let addNumber = input[left] + input[right];
    if (addNumber === target) {
      output.push([input[left], input[right]]);
      right -= 1;
    }
    else if (addNumber < target) {
      left += 1;
    } else if (addNumber > target) {
      right -= 1;
    }
  }
  return output;

}


// Sample Data has to be sorted

arr_1 = [1, 4, 6, 9];
arr_2 = [1, 6, 9];
arr_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr_4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];

console.log(twoNumberSum(arr_1, 10)); //[ [ 1, 9 ], [ 4, 6 ] ]
console.log(twoNumberSum(arr_2, 5));  //[ ]
console.log(twoNumberSum(arr_3, 17));  //[ [ 8, 9 ] ]
console.log(twoNumberSum(arr_4, 18));  //[ [ 3, 15 ] ]
