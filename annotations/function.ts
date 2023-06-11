//annotation for function variable
const myFn: (i: number) => number = (i) => {
  return i;
};

console.log(myFn(5));

//annotation for function itself

const myFn2 = (a: number, b: number): number => {
  return a + b;
};

console.log(myFn2(10, 20));

function multiple(a: number, b: number): number {
  return a * b;
}

console.log(multiple(5, 5));

const divide = function (a: number, b: number): number {
  return a / b;
};

console.log(divide(100, 5));
