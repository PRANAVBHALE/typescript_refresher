class Vehicle {
  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('zooommm');
  }

  public startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDriving();
