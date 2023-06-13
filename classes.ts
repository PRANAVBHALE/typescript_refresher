class Vehicle {
  drive(): void {
    console.log('Vroom Vroom');
  }

  honk(): void {
    console.log('beep');
  }
}

//class Car extends Vehicle {}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
