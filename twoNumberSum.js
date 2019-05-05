
// getting first occurrence of Two Number Sum to add upto target
// Time  : O(n^2)  
// Space : O(1)

function firstOccuranceOfTwoNumberSum(input, target) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if ((input[i] + input[j]) === target) {
        return [input[i], input[j]];
      }
    }
  }
  return [];
}


// getting All occurrence of Two Number Sum to add upto target
// Time  : O(n^2)  
// Space : O(n)

function allOccuranceOfTwoNumberSum(input, target) {
let output = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if ((input[i] + input[j]) === target) {
        output.push([input[i], input[j]]);
      }
    }
  }
  return output;
}


// Sample Data

arr_1 = [4, 6];
arr_2 = [4, 6, 1];
arr_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr_4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];

console.log(firstOccuranceOfTwoNumberSum(arr_1, 10)); //[4, 6]
console.log(firstOccuranceOfTwoNumberSum(arr_2, 5));  //[4, 1]
console.log(firstOccuranceOfTwoNumberSum(arr_3, 17));  //[8, 9]
console.log(firstOccuranceOfTwoNumberSum(arr_4, 18));  //[3, 15]

console.log(allOccuranceOfTwoNumberSum(arr_1, 10)); //[ [ 4, 6 ], [ 6, 4 ] ]
console.log(allOccuranceOfTwoNumberSum(arr_2, 5));  //[ [ 4, 1 ], [ 1, 4 ] ]
console.log(allOccuranceOfTwoNumberSum(arr_3, 17));  //[ [ 8, 9 ], [ 9, 8 ] ]
console.log(allOccuranceOfTwoNumberSum(arr_4, 18));  //[ [ 3, 15 ], [ 9, 9 ], [ 15, 3 ] ]
