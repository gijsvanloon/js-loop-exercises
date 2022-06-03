exports = typeof window === "undefined" ? global : window;

exports.loops = {
  /**
   * Get the sum of two arrays…actually the sum of all their elements.
   * P.S. Each array includes only integer numbers. Output is a number too.
   *
   * @param {Array} arr1
   * @param {Array} arr2
   *
   * @outcome 627
   */
  sum: (arr1, arr2) => {
    const sum1 = arr1.reduce((particalSum, a) => particalSum + a, 0);
    const sum2 = arr2.reduce((particalSum, a) => particalSum + a, 0);

    return sum1 + sum2;
  },

  /**
   * Using a loop to print all even numbers up to and including n. Don’t include 0.
   *
   * @param {Number} amount how many times to loop
   *
   * @outcome 2 4 6 8 10 12 14 16 18 20 22
   */
  printEven: (amount) => {
    const arr = [];

    for (let i = 0; i <= amount; i++){
      if (i > 0 && i % 2 == 0) {
        arr.push(i);
      }
    }

    return arr.join(" ")
  },

  /**
   * Using a loop to output the elements in reverse order
   *
   * @param {Array} array Array to reverse
   *
   * @outcome [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
   */
  reverse: (array) => {
    const reverseArr = [];

    array.reduceRight((_, item) => reverseArr.push(item), null)
    
    return reverseArr
  },

  /**
   * Given two arrays of integers. Add up each element in the same position and
   * create a new array containing the sum of each pair.
   * Assume both arrays are of the same length.
   *
   * @param {Array} arr1 Array with string and numbers
   * @param {Array} arr2 Array with string and numbers
   *
   * @outcome [10, 10, 10, 10]
   */
  sumPair: (arr1, arr2) => {
    const arr3 = [];

    for (let i = 0; i < arr1.length; i++){
      arr3.push(parseInt(arr1[i]) + parseInt(arr2[i]))
    }

    return arr3;
  },

  /**
   * Given a number n Calculate the factorial of the number
   * 4 * 3 * 2 * 1 = 24
   *
   * @param {Number} n
   *
   * @outcome 24
   */
  factorial: (n) => {
      let answer = 1;
      if (n == 0 || n == 1){
      return answer;
      }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    } 
  },

  /**
   * Finds the summation of every number from 1 to num.
   * The number will always be a positive integer greater than 0.
   *
   * @param {Number} number
   */
  summation: (number) => {
    var total = 0;
    for(var i = 1; i <= number; i++){
      total += i;
    }
    return total;
  },
};
