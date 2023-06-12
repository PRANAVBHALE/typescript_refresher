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

//dont use tuple if similar types are present or there is not enough information is present about data
//eg

const carSpecs: [number, number] = [400, 4000];

//instead use object for better object modeling
const carDetails = {
  maxSpeed: 400,
  engineCapacity: 4000,
};
