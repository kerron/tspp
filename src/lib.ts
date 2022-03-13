/**
 * compare lhs value to rhs value and return true if lhs is greater
 * @param a lhs value
 * @param b rhs value
 * @returns boolean
 */
export const greater = <T>(a: T, b: T): boolean => a > b;
/**
 * compare lhs value to rhs value and return true if lhs is lesser
 * @param a lhs value
 * @param b rhs value
 * @returns boolean
 */
/**
 * Computes the difference between the second and first of each adjacent pair of elements
 * of the range [first, last] and returns the result.
 * @param first start of range
 * @param last end of range
 * @param v list of elements to process
 * @param operation optional binary function that will be applied to elements
 * @returns array of item
 */
export const adjacent_difference = (
  first: number,
  last: number,
  v: number[],
  operation?: (a: number, b: number) => number
): number[] => {
  if (!v.length) return [];
  const diff = (v: number, i: number, arr: number[]) =>
    i === 0 ? i : v - arr[i - 1];
  const fn = operation || diff;
  return v.slice(first, last).map(fn);
};
/**
 * Takes two numbers as input and calculate the sum
 * @param a number
 * @param b number
 * @returns addition of a and b
 */
const add = (a: number, b: number) => a + b;

console.log(adjacent_difference(0, 5, [], add)); // []
console.log(adjacent_difference(0, 5, [1, 9, 3, 4, 5, 6])); // [ 0, 8, -6, 1, 1 ]
console.log(adjacent_difference(0, 5, [1, 9, 3, 4, 5, 6], add)); // [ 1, 10, 5, 7, 9 ]
