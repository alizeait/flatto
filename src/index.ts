export function flatto<T = Record<string, any>>(
  input: T,
  seperator?: string
): T {
  if (typeof input !== "object" || !input) return input;
  return loop(input, {}, "", seperator || ".");
}
function loop(input: any, output: any, prevPrefix: string, seperator: string) {
  const prefix = prevPrefix ? prevPrefix + seperator : prevPrefix;
  let i = 0,
    l: number | string;
  if (typeof input !== "object" || !input || !Object.keys(input).length) {
    output[prevPrefix] = input;
  } else if (Array.isArray(input)) {
    l = input.length;
    for (; i < l; i++) loop(input[i], output, prefix + i, seperator);
  } else {
    for (l in input) loop(input[l], output, prefix + l, seperator);
  }
  return output;
}
