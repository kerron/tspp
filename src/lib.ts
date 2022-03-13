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
export const lesser = <T>(a: T, b: T): boolean => a < b;
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

export const adjacent_find = (
  first: number,
  last: number,
  list: number[],
  predicate?: (a: number, b: number) => boolean
): number | null => {
  if (first === last) return last;
  if (!list.length) return null;

  const equalTo = (a: number, b: number) => a === b;
  const fn = predicate || equalTo;

  for (let i = 1, len = list.length; i < len; i++) {
    if (fn(list[i - 1], list[i])) return i;
  }

  return null;
};
