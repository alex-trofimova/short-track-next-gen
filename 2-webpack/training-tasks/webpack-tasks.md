## Task 1 (Getting started)

**Step 1.** Create a new directory and initialize a new project there

**Step 2.** Install webpack locally, and install webpack-cli

**Step 3.**  Add npm script with a `build` command name and `webpack` value into the "scripts" property of your `package.json file`. Choose `development` as a mode option.

**Step 4.** Create a `src` folder and put an `index.js` file in it so that it contains `console.log("some text")` or some other simple script.

**Step 5.** Run the command `npm run build` and check if it works as expected (a `dist` folder should be created with a `main.js` file, containing the same script as in `index.js`).

**Step 6.** To display the output result in browser you can add `index.html` file in the `dist` folder manually and attach `main.js` file to it by using `script` tag.

***

## Task 2 (Using webpack configuration)
1. Create a `webpack.config.js` file and set `entry` & `output` points there. 
2. Activate `HtmlWebpackPlugin` to update `index.html` automatically.
3. Add the following `component.js` file in the `src` folder. By using it add 2 different HTML elements on the webpage (one can change the template suggested).
```javascript
    const component = (text = "Hello, World!", type = "h1") => {
        const element = document.createElement(type);
        element.innerHTML = text;
        return element;
    };

    export default component;
```
4. Activate `css-loader` & `style-loader` to add some styles to your elements.

***

## Task 3 (Compiling ES6 to ES5)
1. Install the necessary packages that are needed to work with babel: `babel-loader`, `@babel/core`, and `@babel/preset-env`.
2. Add the `babel-loader` to the list of modules in your `webpack.config.js` file.
3. Add some js code in the `src/index.js` written in ES6 format, you can use the following example:
```javascript
const sum = (a, b) => a + b;
```
4. Run the command `npm run build` and see what the compiled file looks like. 
