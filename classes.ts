class Vehicle {
  drive(): void {
    console.log('Vroom Vroom');
  }

  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {}

const car = new Car();
car.drive();
car.honk();
