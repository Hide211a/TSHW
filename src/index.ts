console.log("🚀 ТЕСТУВАННЯ ЗАВДАННЯ 1");

class Address {
    street: string;
    city: string;
    postalCode: string;

    constructor(street: string, city: string, postalCode: string) {
        this.street = street;
        this.city = city;
        this.postalCode = postalCode;
    }

    getFullAddress(): string {
        return `${this.street}, ${this.city}, ${this.postalCode}`;
    }
}

class Customer {
    name: string;
    age: number;
    address: Address;

    constructor(name: string, age: number, address: Address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    displayInfo(): void {
        console.log("=== ІНФОРМАЦІЯ ПРО КЛІЄНТА ===");
        console.log(`Ім'я: ${this.name}`);
        console.log(`Вік: ${this.age}`);
        console.log(`Адреса: ${this.address.getFullAddress()}`);
        console.log("================================");
    }
}

const customerAddress = new Address("вул. Шевченка, 10", "Київ", "01001");
const customer = new Customer("Іван Петренко", 25, customerAddress);
customer.displayInfo();

const anotherAddress = new Address("просп. Перемоги, 50", "Львів", "79000");
const anotherCustomer = new Customer("Марія Іваненко", 30, anotherAddress);
anotherCustomer.displayInfo();

console.log("\n🚀 ТЕСТУВАННЯ ЗАВДАННЯ 2");

interface Shape {
    calculateArea(): number;
}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);

console.log(`Площа прямокутника: ${rectangle.calculateArea()}`);
console.log(`Площа кола: ${circle.calculateArea().toFixed(2)}`);

console.log("\n🚀 ТЕСТУВАННЯ ЗАВДАННЯ 3");

class Store {
    name: string;
    products: string[];

    constructor(name: string) {
        this.name = name;
        this.products = [];
    }

    addProduct(product: string): void {
        this.products.push(product);
    }

    removeProduct(product: string): void {
        this.products = this.products.filter(p => p !== product);
    }

    showProducts(): void {
        console.log(`Товари у магазині "${this.name}":`);
        if (this.products.length === 0) {
            console.log("Магазин порожній");
        } else {
            this.products.forEach((product, index) => {
                console.log(`${index + 1}. ${product}`);
            }); 
        }
    }
}

const store = new Store("Супермаркет");
store.addProduct("Хліб");
store.addProduct("Молоко");
store.addProduct("Сир");
store.showProducts();
store.removeProduct("Молоко");
store.showProducts(); 