db = require('../db/query');

class Exercise {
    constructor(
        id,
        name,
        description,
        instructions,
        descriptors = []
    ) { 
        this.id = id;
        this.name = name;
        this.description = description;
        this.instructions = instructions;
        this.descriptor = [...descriptors];
    }
};

class Descriptor {
    constructor(
        name = ""
    ) { 
        this.name = name;
    }
};

module.exports = { Exercise, Descriptor }
