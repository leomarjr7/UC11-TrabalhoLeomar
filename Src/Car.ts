export class Car {
    protected brand: string
    protected model: string
    protected year: number
    protected stored: boolean

    constructor(brand: string, model: string, year: number) {
        this.brand = brand
        this.model = model
        this.year = year
        this.stored = true
    }

    public getBrand(): string {
        return this.brand
    }

    public getStored(): boolean {
        return this.stored
    }

    public setStored(status: boolean): void {
        this.stored = status
    }

    public getModel(): string {
        return this.model
    }

    public getYear(): number {
        return this.year
    }


    }



