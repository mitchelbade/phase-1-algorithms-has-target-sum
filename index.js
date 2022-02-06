function hasTargetSum(array, target) {
  // Write your algorithm here
  // for (let i = 0; i < array.length; i++) {
  //   for (let j = i + 1; j < array.length; j++) {
  //     if (array[i] + array[j] === target) {
  //       return true;
  //     }
  //   }
  // }
  // return false;
  // ---------------------------------------------------------
  const numI = new Map();

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const comp = target - num;

    if (numI.has(comp)) return true;
    numI.set(num, i);
    // console.log(numI);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
    first solution - Time: O(n^2) Space: O(n)

    second solution - Time:O(n) Space:O(n)
*/

/* 
  Add your pseudocode here
  create a function that takes in an array and a target number
    iterate through the array
      if any pair of numbers is equal to the target number
        return true
      else if
        return false
        ----------------------------------
  create a function that takes in an array and a target number
    create Map() object

    iterate through the array
      create a variable for current number of array
      create a variable for the compliment number

      if Map() has compliment
        return true
        add number and index to Map()

    if no compliment is found return false
*/

/*
  Add written explanation of your solution here

  create a function that takes in an array and a target number,
  if a pair of numbers from the array are equal to the target number return true,
  if not return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
