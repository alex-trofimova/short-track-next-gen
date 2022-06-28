## Task 1 (Getting started)

**Step 1.** Create a new directory & initialize a new project there

**Step 2.** Install webpack locally, and install webpack-cli

**Step 3.** Include a webpack task in the  `package.jon` file.

**Step 4.** Create a `src` folder and put an `index.js` file in it so that it contains `console.log("some text")`.

**Step 5.** Run a webpack task and check if it works as expected (to display the output result in browser create `index.html` file manually).

***

## Task 2 (Using webpack configuration)
1. Create a `webpack.config.js` file & set `entry` & `output` points there. 
2. Activate `HtmlWebpackPlugin` to update `index.html` automatically.
3. Add the following `component.js` file in the `src` folder. By using it add 2 different elements on the webpage.
```javascript
    const component = (text = "Hello, World!", type = "h1") => {
        const element = document.createElement(type);
        element.innerHTML = text;
        return element;
    };

    export default component;
```
4. Activate `css-loader` & `style-loader` to add some styles to your elements.