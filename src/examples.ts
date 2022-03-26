import { allOf } from "./allOf/allOf";
import { begin } from "./begin/begin";
import { end } from "./end/end";
import { adjacentDifference, adjacent_find, greater, lesser } from "./index";
import { isEven } from "./isEven/isEven";

/**
 * Takes two numbers as input and calculate the sum
 * @param a number
 * @param b number
 * @returns addition of a and b
 */
const add = (a: number, b: number) => a + b;

// console.log(adjacentDifference(0, 5, [], add)); // []
// console.log(adjacentDifference(0, 5, [1, 9, 3, 4, 5, 6])); // [ 0, 8, -6, 1, 1 ]
// console.log(adjacentDifference(0, 5, [1, 9, 3, 4, 5, 6], add)); // [ 1, 10, 5, 7, 9 ]
// console.log(adjacent_find(0, 4, [0, 1, 2, 4, 3, 2, 4, 4], lesser)); // 1
// console.log(adjacent_find(0, 4, [0, 1, 2, 4, 3, 2, 4, 4], greater)); // 4

const list = [1, 2, 6, 4, 8];
console.log("allOf", allOf(begin(), end(list), list, isEven)); // 4
