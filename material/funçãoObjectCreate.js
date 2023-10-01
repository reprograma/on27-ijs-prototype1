const animalMethods = {
	eat: function eat() {
		console.log(`${this.name} está comendo.`);
	},
	sleep: function sleep() {
		console.log(`${this.name} está dormindo.`);
	},
};

function Animal(type, name, age) {
	let animal = Object.create(animalMethods);

	animal.type = type;
	animal.name = name;
	animal.age = age;

	return animal;
}

const animal1 = Animal("cachorro", "Aslam", 3);
console.log(animal1);
animal1.eat();
animal1.sleep();
