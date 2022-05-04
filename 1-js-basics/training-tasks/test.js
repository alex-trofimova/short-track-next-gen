function changeNameToBob(obj) {
    console.log(obj);
    obj.name = 'Bob';
    console.log(obj);
    obj = {name: 'Jack', age: 30};
    console.log(obj);
}

const person = {name: 'John', age: 30};
changeNameToBob(person);
