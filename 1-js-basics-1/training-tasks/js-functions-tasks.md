## Task 1 (Passing reference type arguments)

Add necessary code lines to the function body:

    function changeName(obj) {
        obj = {name: 'Jack', age: 30};
    }

    const person = {name: 'John', age: 30};
    changeName(person);


so the output is:

    {name: 'John', age: 30}
    {name: 'Bob', age: 30}
    {name: 'Jack', age: 30}

***
## Task 2 (Module Pattern)

Supplement the following IIFE

    const customModule = (function() {
        let _privateProperty = 'something';
        ...

    }();

so the value of `_privateProperty` is not available outside of the `customModule` but one can given an access to it through public `get` method. The `set` method can be implemented as well.

***
## Task 3 (Builder Pattern)

Supplement the object 

    const person = {
        name: '', 
        age: 0, 
        gender: ''
    };

by necessary methods to fill its properties by arbitrary values and create corresponding instance by using chaining approach.

