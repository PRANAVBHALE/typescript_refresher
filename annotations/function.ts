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

//no return for type void
const logger = (message: string): void => {
  console.log(message);
};

logger('Hello TS');

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
