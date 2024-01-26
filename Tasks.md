0. **Palindrom**

Write the function `isPalindrom` to check is the string is palindrom

For example:
```js
isPalindrom('saas') // true
isPalindrom('test') // false
```

1. **Function "sum"** 

Write the function `sum`, which returns the result of summing two numbers.
```js
function sum(a, b) {
    // your code...
}
```
This function takes two parameters:
`a` — any number as a string,
`b` — any number as a string.
1. The function should return the sum of the two passed parameters.
2. The parameters are of the `string` type, so they must be converted to numbers before summing.

For example:
```js
sum('5', '7'); // 12
```

2. **Function "convertToBoolean"**

Write the function `convertToBoolean`, which should take any value of a primitive type and convert it to `boolean`.
```js
function convertToBoolean(value) {
    // your code...
}
```
This function takes one parameter: `value` — any value of the `number`, `string`, `boolean`, `null`, or `undefined` type.
This function should convert `value` to the `boolean` type.

For example:
```js
convertToBoolean(100); // true
convertToBoolean(true); // true
convertToBoolean('Some cool string'); // true
convertToBoolean(null); // false
convertToBoolean(undefined); // false
```

3. **Prime numbers**

Create a JavaScript function which converts the given array of numbers to an array of booleans. Each element is `true` if the number is a prime number, and `false` otherwise.

For example:
```js
primeValues([4, 2, 7, 10, 13]) // result: [false, true, true, false, true]
primeValues([17, 3, 21]) // result: [true, true, false]
```

4. **Number generator**
Create function to generate numbers. It must receive start value, by default it equals to 0.

For example:
```js
const counter = createCounter(44);
counter(); // 45
counter(); // 46
counter(); // 47
```

5. **Multiply**
Create function to multiple values.

For example:
```js
multiply(2)(4)(6); // 48
multiply(3)(3)(3); // 27 
```
6. **Mocker**
The task is to implement `mocker` function for dev mocking with 1s delay.
It might be helpful in frontend development to make sure that your interface works well with data which will fetch with delays.

For example:
```js
const getUsers = mocker([{id: 1, name: 'User1'}]);
getUsers().then((users) => { // Will fire after 1 second.
  console.log(users); // [{id: 1, name: 'User1'}];
});
```

