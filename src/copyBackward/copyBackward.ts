import { end } from "../end/end";
import { greater } from "../greater/greater";
import { lesser } from "../lesser/lesser";

export const copyBackward = <T>(
  start: number,
  finish: number,
  from: T[],
  to: T[]
): T[] | null => {
  const toEnd = end(to);

  if (lesser(toEnd, start) || greater(finish, toEnd)) return null;

  let count = 1;

  while (start !== finish) {
    to[toEnd - count] = from[finish];
    ++count;
    --finish;
  }

  return to;
};
