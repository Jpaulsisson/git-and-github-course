////// The first attempt /////////

const arrayOfNums = [1,1,1,1,1,2,2,3]
const otherArrayOfNums = [0,0,1,1,1,1,1,2,3,3]

const setOfNums = new Set();

// arrayOfNums.forEach((num) =>  {
//   if (!setOfNums.has(num)) {
//     setOfNums.add(num);
//   }
// })

var removeDuplicates = function(nums) {
  const firstSet = new Set();
  const secondSet = new Set();
  nums.forEach((num, index) => {
      if (!firstSet.has(num)) { //// I'm honestly not sure where this is failing or why but I want to blame splice...
          firstSet.add(num);
          return;
      }
      if (!secondSet.has(num)) {
          secondSet.add(num);
          return;
      }
      if (firstSet.has(num) && secondSet.has(num)) {
          nums.splice(index, 1)
          return;
      }
  })
  return nums;
};

///// second attempt //////
const tryAgainRemoveDupes = (numbers) => {
  numbers.map((number) => {

  })
}

console.log(removeDuplicates(arrayOfNums))
console.log(removeDuplicates(otherArrayOfNums))