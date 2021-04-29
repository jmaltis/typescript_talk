/**
 * 2/ || vs ??
 */

const test = false || "default";
const test2 = false ?? "default";
console.log(test, test2);

interface Interface {
  duration: number | null;
}
const obj: Interface = { duration: null };
obj.duration ??= 10;
console.log(obj);
