export function subModule(first: number, ...rest: number[]) {
  return first.toString() + rest[0]?.toFixed(1);
}
