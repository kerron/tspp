type TPredicate<T> = (v: T) => boolean;
type TAllOf = <T>(
  start: number,
  end: number,
  list: T[],
  predicate: TPredicate<T>
) => boolean;

/**
 * Checks if unary predicate p returns true for all elements in the range [first, last)
 * @param start the start of the range of elements to examine
 * @param end the end of the range of elements to examine
 * @param list the elements to examine
 * @param p unary predicate
 * @returns boolean
 */
export const allOf: TAllOf = (start, end, list, p) => {
  if (!list.length) return false;
  return list.slice(start, end).every(p);
};
