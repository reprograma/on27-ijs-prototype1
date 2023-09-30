const parent = {
	name: "Noemi",
	age: 32,
	heritage: "brasileira",
};

const child = Object.create(parent);
child.name = "Anne";
child.age = 3;

console.log(child.heritage);
