const animalMethods = {
	eat: function eat() {
		console.log(`${this.name} está comendo.`);
	},
	sleep: function sleep() {
		console.log(`${this.name} está dormindo.`);
	},
};

function animal(type, name, age) {
	let animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;

	animal.eat = animalMethods.eat;
	animal.sleep = animalMethods.sleep;

	return animal;
}

const animal1 = animal("cachorro", "Aslam", 3);


console.log(animal1);
animal1.eat();
animal1.sleep();
animalMethods.sleep = function () {
	console.log("A função sleep foi sobrescrita");
}; //possibilidade de alterar a função dentro do método
const animal2 = animal("gato", "Mia", 5);
console.log(animal2);
animal2.eat();
animal2.sleep();

//dessa forma economiza memória já que os métodos estão fora da função construtora
