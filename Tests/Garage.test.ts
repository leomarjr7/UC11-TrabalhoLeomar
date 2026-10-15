import { Car } from "../src/Car";
import { Garage } from "../src/Garage";

describe("testes da garagem", () => {

    //teste 1

    test("criar carro", () => {
        const car = new Car("toyota", "corolla", 2025);

        expect(car.getBrand()).toBe("Toyota");
        expect(car.getModel()).toBe("Corolla");
        expect(car.getYear()).toBe(2025);
    });

    //teste 2

    test("stored começa false", () => {
        const car = new Car("toyota", "corolla", 2025);

        expect(car.getStored()).toBe(false);
    });

    //teste 3

    test("mudar stored para true", () => {
        const car = new Car("toyota", "corolla", 2025);

        car.setStored(true);

        expect(car.getStored()).toBe(true);
    });

    //teste 4

    test("mudar stored para false", () => {
        const car = new Car("toyota", "corolla", 2025);

        car.setStored(true);
        car.setStored(false);

        expect(car.getStored()).toBe(false);
    });

    //teste 5

    test("adicionar carro", () => {
        const garage = new Garage();
        const car = new Car("toyota", "corolla", 2025);

        garage.addCar(car);

        expect(garage.getCarCount()).toBe(1);
    });

    //teste 6

    test("stored fica true ao adicionar", () => {
        const garage = new Garage();
        const car = new Car("toyota", "corolla", 2025);

        garage.addCar(car);

        expect(car.getStored()).toBe(true);
    });

    //teste 7

    test("adicionar tres carros", () => {
        const garage = new Garage();

        garage.addCar(new Car("toyota", "corolla", 2025));
        garage.addCar(new Car("ford", "mustang", 2024));
        garage.addCar(new Car("honda", "civic", 2023));

        expect(garage.getCarCount()).toBe(3);
    });

    //teste 8

    test("remover carro", () => {
        const garage = new Garage();
        const car = new Car("toyota", "corolla", 2025);

        garage.addCar(car);
        garage.removeCar(car);

        expect(garage.getCarCount()).toBe(0);
    });

    //teste 9

    test("stored fica false ao remover", () => {
        const garage = new Garage();
        const car = new Car("toyota", "corolla", 2025);

        garage.addCar(car);
        garage.removeCar(car);

        expect(car.getStored()).toBe(false);
    });

    //teste 10

    test("encontrar carro pelo modelo", () => {
        const garage = new Garage();
        const car = new Car("toyota", "corolla", 2025);

        garage.addCar(car);

        expect(garage.findCarByModel("Corolla")).toBe(car);
    });

    //teste 11

    test("modelo inexistente retorna undefined", () => {
        const garage = new Garage();

        expect(garage.findCarByModel("Civic")).toBeUndefined();
    });

    //teste 12

    test("nao adicionar carros duplicados", () => {
        const garage = new Garage();
        const car1 = new Car("toyota", "corolla", 2025);
        const car2 = new Car("toyota", "corolla", 2025);

        garage.addCar(car1);

        expect(() => garage.addCar(car2)).toThrow();
    });

    //teste 13

    test("verificar marca do carro encontrado", () => {
        const garage = new Garage();
        const car = new Car("toyota", "corolla", 2025);

        garage.addCar(car);

        const foundCar = garage.findCarByModel("Corolla");

        expect(foundCar?.getBrand()).toBe("Toyota");
    });

    //teste 14

    test("verificar ano do carro encontrado", () => {
        const garage = new Garage();
        const car = new Car("toyota", "corolla", 2025);

        garage.addCar(car);

        const foundCar = garage.findCarByModel("Corolla");

        expect(foundCar?.getYear()).toBe(2025);
    });

    //teste 15 

    test("remover um carro e manter os outros", () => {
        const garage = new Garage();

        const car1 = new Car("toyota", "corolla", 2025);
        const car2 = new Car("ford", "mustang", 2024);
        const car3 = new Car("honda", "civic", 2023);

        garage.addCar(car1);
        garage.addCar(car2);
        garage.addCar(car3);

        garage.removeCar(car2);

        expect(garage.getCarCount()).toBe(2);
        expect(garage.findCarByModel("Corolla")).toBe(car1);
        expect(garage.findCarByModel("Civic")).toBe(car3);
        expect(garage.findCarByModel("Mustang")).toBeUndefined();
    });

    //teste 16
        
    test("verificar stored depois de remover", () => {
        const garage = new Garage();

        const car1 = new Car("toyota", "corolla", 2025);
        const car2 = new Car("ford", "mustang", 2024);
        const car3 = new Car("honda", "civic", 2023);

        garage.addCar(car1);
        garage.addCar(car2);
        garage.addCar(car3);

        garage.removeCar(car2);

        expect(car2.getStored()).toBe(false);
        expect(car1.getStored()).toBe(true);
        expect(car3.getStored()).toBe(true);
    });

});


    