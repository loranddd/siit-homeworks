
// 1. Display in the console the numbers from 1 to 20

for (let i = 1; i < 21; i++) {
	console.log(i);
}

// 2. Display in the console the odd numbers from 1 to 20

for (let i = 1; i < 20; i += 2) {
    console.log(i);
}

// 3. Compute the sum of the elements of an array and display it in the console (add all numbers in the array together)

function computeSum(arr) {
    let a = 0;
    for (i = 0; i < arr.length; i++){
      a = a + arr[i];
    }
    console.log(a);
  }
  computeSum ([10, 20, 30, 40, -100]);

// 4. Compute the maximum of the elements of an array and display it in the console.

  let numbers = [3, 7, 9, 50];

function maxOfArray(arr){
  
  let maximum = 0;
  for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maximum) {
            maximum = arr[i];
        }
  }
  return maximum;
}

console.log(maxOfArray(numbers));

/* 5. Compute how many times a certain element appears in an array 
(count the number of times one element of your choice is in the array) */

let list = [3, 7, 3, 5, 6, 7, 3, 3];

function duplicates(array,value){
  let count = 0;
  for (let i = 0; i < array.lenght; i++) {
      if (array[i] === value) {
        count++;
      }
  }
  return count;
}

console.log(duplicates(list, 7));

// Nu am reusit sa gasesc solutia pentru aceasta problema. 