// Explore an example of inheritance and how to build a prototype

var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

// Using the readily available object 'create', you can construct new objects

var eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1)

console.log("eagle1 has wings: ", eagle1.hasWings)
console.log("eagle1 can fly: ", eagle1.canFly)
console.log("eagle1 has feathers: ", eagle1.hasFeathers)

console.log("---------------------------------------")

var eagle2 = Object.create(bird)

console.log("eagle2 has wings: ", eagle2.hasWings)
console.log("eagle2 can fly: ", eagle2.canFly)
console.log("eagle2 has feathers: ", eagle2.hasFeathers)

console.log("---------------------------------------")

var penguin1 = Object.create(bird)

penguin1.canFly = false;

console.log("penguin1 can fly: ", penguin1.canFly)
console.log("penguin1 has feathers: ", penguin1.hasFeathers)
console.log("penguin1 has wings: ", penguin1.hasWings)