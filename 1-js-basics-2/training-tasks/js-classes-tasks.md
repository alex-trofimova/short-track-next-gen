## Task 1 (Context loss)

Correct the following code so instead of `underfined` function `fn` returns the actual value:
```javascript
'use strict';
const man = {
    name: 'John',
    sayName: function() {
        return this.name;
    }
}

const fn = man.sayName;
```

***
## Task 2 (ES5 inheritance)

Using ES6 syntax create a `Student` class that is a child of the `Person` class:
```javascript
function Person() {
    this.eyes = 2;
};
```
and get an access to the parent's `.eyes` property of its instance and some new child's property.

***
## Task 3 (ES6 inheritance)

Using ES5 syntax create a `Student` class that is a child of the `Person` class: 
```javascript
class Person {
    constructor() {
        this.eyes = 2;
    }
    speaks() {
        return 'I am a person';
    }
};
```
and invoke the `.speaks` method of its instance so the output is:

    I am a person, but also a student.

To use the phrase _I am a person, but also a student_ explicitly is forbidden.
