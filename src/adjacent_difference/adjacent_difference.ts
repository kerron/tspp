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
  if (!v.length || first >= last) return [];
  const diff = (v: number, i: number, arr: number[]) =>
    i === 0 ? i : v - arr[i - 1];
  const fn = operation || diff;
  return v.slice(first, last).map(fn);
};
