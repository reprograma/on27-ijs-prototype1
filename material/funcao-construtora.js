function animal(type, name, age) {
    let animal = {}
    animal.type = type
    animal.name = name
    animal.age = age
    animal.eat = function eat() {
		console.log(`${this.name} está comendo`);
    }
    
    return animal
}

const animal1 = animal('cachorro', 'Aslam', 3)
const animal2 = animal('gato', 'Mia', 5)

console.log(animal1)
animal1.eat()
console.log(animal2)
animal2.eat()