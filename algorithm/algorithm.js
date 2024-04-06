const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function miniMaxSum(arr) {
    // Calculate the sum of the array
    const sum = arr.reduce((head, tail) => head + tail, 0)
    // Calculate all the sum of 4 number in the array (sum substract a number is the sum of 4 other numbers)
    const sumList = arr.map((i) => sum - i)
    // Print out the minimum sum and maximum sum
    console.log(Math.min(...sumList) + ' ' + Math.max(...sumList))
}

rl.question('Enter list of 5 integers: ', (input) => {
    // Convert input string to array of integers
    const arr = input.split(' ').map(Number);
    
    // Call the function with the input array
    miniMaxSum(arr);
  
    rl.close();
  });