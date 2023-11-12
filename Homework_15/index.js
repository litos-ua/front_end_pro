"use strict"

let humanProperty = [
    ["Natasha", "woman"],
    ["Mark", "man"],
    ["Iwona", "woman"],
    ["Oksana", "woman"],
    ["Yaroslaw", "man"],
    ["Alexander", "man"],
    ["Boris", "man"],
    ["Irena", "woman"],
    ["Kateryna", ],
    ["Vasyl", "man"],
];

const human = humanProperty.map(humanData => new Humanoid(...humanData));

const flat = [];
for (let i = 0; i < 5; i++) {
    flat.push(new Flat());
}

flat[0].addHumanoidToFlat(human[0], human[1]);
flat[1].addHumanoidToFlat(human[2], human[3], human[4], human[5]);
flat[2].addHumanoidToFlat(human[6], human[7]);
flat[1].addHumanoidToFlat(human[8]);
flat[2].addHumanoidToFlat(human[8]);
flat[4].addHumanoidToFlat(human[9]);

for (let i = 0; i < flat.length; i++) {
    console.log(flat[i]);
}

const home = new Building(4);
home.addFlatToBuilding(flat[0],flat[1],flat[2]);
home.addFlatToBuilding(flat[3]);
home.addFlatToBuilding(flat[4]);

console.log(home);



function Humanoid(name, sex) {
    this.name = name;
    this.sex = sex || "unknown";
}

function Flat() {

    if (!Flat.flatNumberCounter) {
        Flat.flatNumberCounter = 0;
    }
    Flat.flatNumberCounter++;

    this.flatNumber = Flat.flatNumberCounter;
    this.inhabitants = [];

    this.addHumanoidToFlat = function (...humanoids) {
        humanoids.forEach((humanoid) => {
            if (humanoid instanceof Humanoid) {
                this.inhabitants.push(humanoid);
            } else {
                console.log("Instance isn't a Humanoid.");
            }
        });
    };
}


function Building(maxQuarters) {
    this.quarters = [];
    this.maxQuarters = maxQuarters;
    this.quantityOfFlats = 0;

    Object.defineProperty(this, 'maxQuarters', {
        writable: false,
        configurable: false,
    });

    this.addFlatToBuilding = function (...flats) {
        flats.forEach((flat) => {
            if (flat instanceof Flat) {
                if (this.quantityOfFlats < this.maxQuarters) {
                    this.quarters.push(flat);
                    this.quantityOfFlats++;
                } else {
                    console.log("Cannot add more flats.");
                }
            } else {
                console.log("Instance isn't a Flat.");
            }
        });
    };
}

