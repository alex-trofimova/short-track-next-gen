## Task 1 (SetTimeout)
Add necessary code lines to the self-invoking function body:
```javascript
(function () {
    ...
    setTimeout(function(){
       ...
    }, 1000);
    ...
    setTimeout(function(){
        ...
    }, 0);
    ...
})();
```
so the output is:
```javascript
1
2
3
4
5
```
***

## Task 2 (Promise)
Put numbers from 1 to 6 as argument in each `console.log()` in the following code block:
```javascript
new Promise( (resolve) => {
    console.log(...);
    resolve();
})
    .then (() => console.log(...))
    .then (() => console.log(...));

console.log(...);

Promise.resolve()
       .then (() => console.log(...))
       .then (() => console.log(...));
```
so the output is:
```javascript
1
2
3
4
5
6
```