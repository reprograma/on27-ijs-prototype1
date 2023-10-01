function Animal(type, name, age) {
	this.type = type;
	this.name = name;
	this.age = age;
}
Animal.prototype.eat = function eat() {
	console.log(`${this.name} está comendo.`);
};

Animal.prototype.sleep = function sleep() {
	console.log(`${this.name} está dormindo.`);
};

const animal1 = new Animal("cachorro", "Aslam", 3);
console.log(animal1);
animal1.eat();
animal1.sleep();
