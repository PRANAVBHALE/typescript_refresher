interface Reportable {
  summary(): string;
}

const oldVehicle = {
  make: 'hyundai',
  maxSpeed: 100,
  insured: false,
  summary(): string {
    return `this is ${this.make}`;
  },
};

const myDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `my drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldVehicle);
printSummary(myDrink);
