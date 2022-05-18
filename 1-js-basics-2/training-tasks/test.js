'use strict';

function Person() {
    this.eyes = 2;
};

function Student() {
    Person.call(this);
}

Student.prototype = Object.create(Person.prototype);

let studentIvanov = new Student();
console.log(studentIvanov.eyes);


class Person1 {
    constructor() {
        this.eyes = 2;
    }
    speaks() {
        return 'I am a person';
    }
};

class Student1 extends Person1 {
    constructor() {
        super();
    }
    speaks() {
        return `${super.speaks()}, but also a student!`;
    }
}

let studentPetrov = new Student1;
studentPetrov.speaks();
