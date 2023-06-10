let cars: string[] = ['i20', 's-cross', 'venue'];

//dont work
//let mynumbers: number[] = ['i20', 's-cross', 'venue'];

let mynumbers: number[] = [1, 2, 3];

class Animal {
  legs: '4';
}

let dog: Animal = new Animal();
console.log(dog.legs);

//dont work
//console.log(dog.hands);

let rectriangle: { length: number; breadth: number; name: string } = {
  length: 10,
  breadth: 20,
  name: 'box',
  //dont work
  //height:10
};
