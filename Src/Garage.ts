import { Car } from "./Car";

export class Garage {
    private cars: Car[];

    constructor() {
        this.cars = [];
    }

    addCar(car: Car): void {
        const duplicate = this.cars.find(
            existingCar =>
                existingCar.getBrand() === car.getBrand() &&
                existingCar.getModel() === car.getModel() &&
                existingCar.getYear() === car.getYear()
        );

        if (duplicate) {
            throw new Error("Car already exists in the garage");
        }

        this.cars.push(car);
        car.setStored(true);
    }

    removeCar(car: Car): void {
        const index = this.cars.indexOf(car);

        if (index !== -1) {
            this.cars.splice(index, 1);
            car.setStored(false);
        }
    }

    getCarCount(): number {
        return this.cars.length;
    }

    findCarByModel(model: string): Car | undefined {
        return this.cars.find(
            car => car.getModel() === model
        );
    }
}
