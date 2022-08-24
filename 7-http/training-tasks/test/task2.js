"use strict";

new Promise( (resolve) => {
    console.log(1);
    resolve();
})
    .then (() => console.log(3))
    .then (() => console.log(5));

console.log(2);

Promise.resolve()
       .then (() => console.log(4))
       .then (() => console.log(6));

