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
