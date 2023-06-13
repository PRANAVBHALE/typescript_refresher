class Vehicle {
  //  color: string;

  constructor(public color: string) {
    // this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('blue');
console.log(vehicle.color);

// class Car extends Vehicle {
//   private drive(): void {
//     console.log('zooommm');
//   }

//   public startDriving(): void {
//     this.drive();
//     this.honk();
//   }
// }

// const car = new Car();
// car.startDriving();
