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
