let cars: string[] = ['i20', 's-cross', 'venue'];

//dont work
//let mynumbers: number[] = ['i20', 's-cross', 'venue'];

let mynumbers: number[] = [1, 2, 3];

let rectriangle: { length: number; breadth: number; name: string } = {
  length: 10,
  breadth: 20,
  name: 'box',
  //dont work
  //height:10
};

const profile = {
  firstname: 'pranav',
  age: 30,

  location: {
    lat: 21.4,
    long: 15.1321,
  },
};

//destructing

const { firstname }: { firstname: string } = profile;

const {
  location: { lat, long },
}: { location: { lat: number; long: number } } = profile;

//steps to do
//1. Destructure normally as in ES6
//2. Add : to add types
//3. Mirror the destructure and add types

console.log(lat, long);
