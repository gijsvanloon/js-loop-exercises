if (typeof window === "undefined") {
  require("../../app/loops");
  var expect = require("chai").expect;
}

describe("loops", () => {
  it("Get the sum of two arrays…actually the sum of all their elements", () => {
    const arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
    const arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

    expect(loops.sum(arr_1, arr_2)).to.eql(627);
  });

  it("Using a for loop print all even numbers up to and including n. Don’t include 0.", () => {
    const amount = 22;

    expect(loops.printEven(amount)).to.eql("2 4 6 8 10 12 14 16 18 20 22");
  });

  it("Using a for loop output the elements in reverse order", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(loops.reverse(array)).to.eql([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });

  it("Given two arrays of integers. Add up each element in the same position and create a new array containing the sum of each pair.", () => {
    const arr_1 = [1, "2", 3, 4];
    const arr_2 = [9, 8, "7", 6];

    expect(loops.sumPair(arr_1, arr_2)).to.eql([10, 10, 10, 10]);
  });

  it("Given a number n Calculate the factorial of the number", () => {
    const number = 4;

    expect(loops.factorial(number)).to.eql(24);
  });

  it("Finds the summation of every number from 1 to num", () => {
    expect(loops.summation(2)).to.eql(3);
    expect(loops.summation(8)).to.eql(36);
    expect(loops.summation(12)).to.eql(78);
  });
});
