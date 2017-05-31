const animals = [{
        id: 1,
        legs: 4,
        sound: 'moo',
        name: 'cow',
        predator: true
    },
    {
        id: 2,
        legs: 2,
        sound: null,
        name: 'kangaroo',
        predator: false
    },
    {
        id: 3,
        legs: 0,
        sound: 'ssssssssss',
        name: 'snake',
        predator: true
    },
    {
        id: 4,
        legs: 4,
        sound: 'mmmmmmmmm',
        name: 'sloth',
        predator: false
    },
    {
        id: 5,
        legs: 4,
        sound: 'bark',
        name: 'dog',
        predator: true
    },
    {
        id: 6,
        legs: 4,
        sound: 'achoo',
        name: 'panda',
        predator: false
    }
]

let nextId = 7

exports.read = function() {
    // Get all animals
    return animals
}

exports.findBy = function(key, value) {
    // Find by key matching value
    // Return all aniamls that apply

    let results = [];

    for (let i = 0; i < animals.length; i++) {
        if (animals[i][key] == value) {
            results.push(animals[i])
        }
    }

    return results
}

exports.update = function(id, update) {
    // Update one animals matching the id

    for (let i = 0; i < animals.length; i++) {
        if (animals[i].id == id) {
            Object.assign(animals[i], update);
        }
    }
}

exports.create = function(newAnimal) {
    // Add one animal
    // animal id will be nextId
    //nextId goes up by one

    newAnimal.id = nextId
    nextId++

    animals.push(newAnimal);
}

exports.destroy = function(id) {
    // Destroy one animal

    for (let i = 0; i < animals.length; i++) {
        if (animals[i].id == id) {
            animals.splice(i--, 1);
        }
    }
}