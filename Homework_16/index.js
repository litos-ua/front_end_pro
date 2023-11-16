"use strict"

let humanProperty = [
    ["Natasha", 22, "woman"],
    ["Mark", 16, "man"],
    ["Iwona", 37, "woman"],
    ["Oksana", 14, "woman"],
    ["Yaroslaw", 75,"man"],
    ["Alexander", 32, "man"],
    ["Boris", 41,"man"],
    ["Irena", 45, "woman"],
    ["Kateryna",18 ],
    ["Vasyl", 62, "man"],
    ["Michail", 20,"man"],
];

let vehicleProperty = [
    ["Nissan", "Almera", 2011, "XA987987hgh908", "AA9731IT"],
    ["Honda", "Accord", 2018, "HD98767687GGiuyiy", "AB3045HF"],
    ["Ford", "Focus", 2020, "FR756787hfh312", "AX2331AH"],
    ["Mercedes-Benz", "GLC", 2018, "MC765675KJHH9009", "AO5522AA"],
    ["Volkswagen", "Golf", 2015, "VS896hjkHhgiGKG", "KA9896AB"],
    ["Nissan", "Murano", 2021, "XM77kjhjkh989h", "AE2211KB"],
    ["Honda", "CR-V", 2022, "HD98767687GGiuyiy", "AX2731BT"],
    ["Ford", "Mondeo", 2019, "FR226731afh157", "AX2331AH"],
    ["BMW", "X5", 2017, "BW158uyhuo98798YU", "AA1177AA"],
    ["Toyota", "Camry", 2014, "TY456KHK7hg797kh", "AX9731AO"],
    ["BMW", "X3", 2012, "BW187JHGgh908", "AO9251IT"],
    ["Honda", "Accord", 2012, "HD123213331SXiuyis", "AH1243AB"],
    ["Honda", "Civic", 2007, "HD45765587wereiuyiy", "BB3751AI"],
    ["Volkswagen", "Jetta", 2016, "VS765hjk98khGKuio", "AE7296AA"],
    ["Nissan", "Pathfinder", 2019, "XP984329hcx497", "AX3231AH"],
]
class Humanoid {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender || "unknown";
    }
    showHumanoid() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`)
        console.log(`Gender: ${this.gender}`);
        console.log('\n');
    }
}
class Vehicle {
    owner = '';
    constructor(make, model, yearOfManufacture, chassisNumber, licensePlate) {
        Object.defineProperties(this, {
            'make': {
                value: make,
                writable: false,
                configurable: false,
            },
            'model': {
                value: model,
                writable: false,
                configurable: false,
            },
            'yearOfManufacture': {
                value: yearOfManufacture,
                writable: false,
                configurable: false,
            },
            'chassisNumber': {
                value: chassisNumber || "unknown",
                writable: false,
                configurable: false,
            },
            'licensePlate': {
                value: licensePlate,
                writable: false,
                configurable: false,
            },
        });
    }
    showVehicle() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year of Manufacture: ${this.yearOfManufacture}`);
        console.log(`Chassis Number: ${this.chassisNumber}`);
        console.log(`License Plate: ${this.licensePlate}`);
        if (this.owner) {
            console.log("Owner:");
            this.owner.showHumanoid();
        } else {
            console.log("Owner: There is no owner.");
        }
        console.log('------------------------');
    }

    set owner(owner) {
        if (owner instanceof Humanoid) {
            if (!this.owner) {
                if (owner.age <= 18) {
                    console.log("The owner of the car cannot be a person under 18.\n");
                } else {
                    this.owner = owner;
                }
            } else {
                console.log("The car already has an owner.\n");
            }
        } else {
            console.log("Invalid argument. Instance isn't a Humanoid.\n");
        }
    }

    assignOwner(owner) {
        if (owner instanceof Humanoid) {
            if (this.owner === '') {
                if (owner.age <= 18) {
                    console.log("The owner of the car cannot be a person under 18.\n");
                } else {
                this.owner = owner;
                }
            } else {
                console.log("The car already has an owner.\n");
            }
        } else {
            console.log("Invalid argument. Instance isn't a Humanoid.\n");
        }
    }
}


const human = humanProperty.map(humanData => new Humanoid(...humanData));
const vehicle = vehicleProperty.map(vehicleData => new Vehicle(...vehicleData));

human[5].showHumanoid();
vehicle[7].showVehicle();
vehicle[5].assignOwner(human[3]);
vehicle[7].owner = human[7];
vehicle[7].showVehicle();
vehicle[7].assignOwner(human[8]);
vehicle[2].assignOwner(human[7]);
vehicle[2].showVehicle();
vehicle[10].assignOwner(human[10]);
vehicle[10].showVehicle();
console.log(vehicle);

