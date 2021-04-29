/**
 * 6/ Generics
 */

type Student = {
  name: string;
  age: number;
  hasScar: boolean;
};

const students: Student[] = [
  { name: "Harry", age: 17, hasScar: true },
  { name: "Ron", age: 17, hasScar: false },
  { name: "Hermione", age: 16, hasScar: false }
];

const getBy = (model: any, prop: any, value: any) => {
  return model.filter((item: any) => item[prop] === value)[0];
};
console.log(getBy(students, "name", "Hermione"));

const getBy2 = (model: Student[], prop: keyof Student, value: any): Student | null => {
  return model.filter((item) => item[prop] === value)[0] || null;
};
console.log(getBy2(students, "name", "Hermione"));

const getBy3 = <T>(model: T[], prop: keyof T, value: any): T | null => {
  return model.filter((item) => item[prop] === value)[0];
};
console.log(getBy3(students, "name", "Hermione"));

const getBy4 = <T, P extends keyof T>(model: T[], prop: P, value: T[P]): T | null => {
  return model.filter((item) => item[prop] === value)[0] || null;
};
console.log(getBy4(students, "name", "123"));

// Exemple 2
const addItem = <T>(item: T, array: T[]) => {
  return [...array, item];
};
console.log(addItem(3, [1, 2]));
console.log(addItem("hello", []));

const addItem2 = <T extends number | string>(item: T, array: T[]) => {
  return [...array, item];
};
console.log(addItem2(3, [1, 2]));
console.log(addItem2("hello", []));
// console.log(addItem2(true, []));
