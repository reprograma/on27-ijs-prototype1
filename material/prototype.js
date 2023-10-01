function Animal(type, name, age) {
	let animal = Object.create(Animal.prototype);

	animal.type = type;
	animal.name = name;
	animal.age = age;

	return animal;
}

Animal.prototype.eat = function eat() {
	console.log(`${this.name} está comendo.`);
};

Animal.prototype.sleep = function sleep() {
	console.log(`${this.name} está dormindo.`);
};

const animal1 = Animal("cachorro", "Aslam", 3);
console.log(animal1)
animal1.eat()

