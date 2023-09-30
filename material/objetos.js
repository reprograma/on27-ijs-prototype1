let animal = {
	type: "cachorro",
	name: "Aslam",
	age: 3,
	hobbies: ["brincar", "latir", "comer sofá"],
	"can i have": true,
	eat: function eat() {
		console.log(`${this.name} está comendo`);
	},
};

function eat() {
	console.log("O cachorro está comendo");
}

let dog = {};
dog.eat = eat;

console.log(animal.name);
console.log(animal["can i have"]); //esse tipo de propriedade precisa ser acessado dessa forma
animal.eat();
dog.eat();

// outra forma de fazer objeto

// let animal = {}
// animal.type = 'cachorro'
// animal.name = 'Aslam'
// animal['can i have'] = true
// etc
