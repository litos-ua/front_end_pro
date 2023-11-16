"use strict"

let studentProperty = [
    ["Natasha", 2001, "woman"],
    ["Mark", 2003, "man"],
    ["Iwona", 1996, "woman"],
    ["Oksana", 1999, "woman"],
    ["Yaroslaw", 1998,"man"],
    ["Alexander", 2001, "man"],
    ["Boris", 2002,"man"],
    ["Irena", 1997, "woman"],
    ["Kateryna",2005 ],
    ["Vasyl", 1995, "man"],
    ["Michail", 2003,"man"],
];


class Student {
    name;
    yearOfBirth;
    grade = [];
    attendance = new Array(25).fill(undefined);
    constructor(name, yearOfBirth) {
        Object.defineProperties(this, {
            'name': {
                value: name,
                writable: false,
                configurable: false,
            },
            'yearOfBirth': {
                value: yearOfBirth,
                writable: false,
                configurable: false,
            },
        }
    )}

    get studentName() {
        return this.name;
    }

    estimate(attendance){
       this.grade.push(attendance);
    }

    averageGrade (){
            const sum = this.grade.reduce(function (acc, item) {
                return acc + item;
            }, 0);
            return Math.round(sum / this.grade.length);
        }

    averageAttendance (){
        const sum = this.attendance.reduce(function (acc, item) {
            return acc + item;
        }, 0);
        return sum / this.attendance.length;
    }

    present() {
        if (this.attendance.length === 25) {
            console.log("You have already attended all classes.");
        } this.attendance.push(true)
    }

    absent() {
        if (this.attendance.length === 25) {
            console.log("You have already attended all classes.");
        } this.attendance.push(false)
    }

    summary() {
        const levelGrade = this.averageGrade() > 90;
        const levelAttendance = this.averageAttendance() > 0.9;

        if (levelGrade && levelAttendance) {
            console.log("Молодець!");
        } else if (levelGrade || levelAttendance) {
            console.log("Добре, але можна краще.");
        } else {
            console.log("Редиска!");
        }
    }

}

const student = studentProperty.map(studentData => new Student(...studentData))

for (let i = 0; i < studentProperty.length; i++) {
    for (let j = 0; j < 50; j++) {
        student[i].grade.push((Math.random() * (100 - 80) + 80));
    }
}

for (let i = 0; i < studentProperty.length; i++) {
    for (let j = 0; j < 25; j++) {
        student[i].attendance[j] = Math.random() < 0.93;
    }
}

console.log(student[7].studentName);
console.log(student);
console.log(student[3].averageGrade());
console.log(student[3].averageAttendance());
console.log(student[7].averageGrade());
console.log(student[7].averageAttendance());
console.log(student[5].attendance);
console.log(student[5].present());
console.log(student[3].summary());
console.log(student[7].summary());
