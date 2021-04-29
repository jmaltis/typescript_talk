/**
 * 1/ Class, interface, type
 */

class SuperClass {
  a: number;

  constructor(a: number) {
    this.a = a;
  }
}

class ChildClass extends SuperClass {
  b: string;

  constructor(a: number, b: string) {
    super(a);
    this.b = b;
  }
}

interface SuperInterface {
  a: number;
  b: string;
}

interface ChildInterface extends SuperInterface {
  c: number;
}

// Union / intersection
interface A {
  a: number;
}
interface B {
  b: number;
}

type myType = A | B;
type myType2 = A & B;
type status = "active" | "inactive" | "other";

var type: myType = {
  a: 1
};

var type2: myType2 = {
  a: 1,
  b: 2
};

const myFunction: myFunctionReturnType = (a) => {
  return false;
};

type myFunctionReturnType = (a: string) => boolean;
