const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//similarly represent object in array i.e tuple

const pepsi: [string, boolean, number] = ['brown', true, 40];

//or

type Drink = [string, boolean, number];

const coke: Drink = ['brown', true, 40];
const tea: Drink = ['brown', false, 20];
