## Task 1 (Getting started)

**Step 1.** Create a new directory & initialize a new project there

**Step 2.** Install typescript locally

**Step 3.** Generate `tsconfig.json` file (by `tsc --init`). Modify the file so that root directory is `src` & output one is `dist`.

**Step 4.** Create a `src` folder and put an `index.ts` file in it so that it contains `console.log("some text")`.

**Step 5.** Configure ESLint for Typescript, use plugin `typescript-eslint/recommended`.

**Step 6.** Run `tsc` and check if it works as expected (`dist/index.js` should be created).

**Step 7.** Change code in `index.ts` & follow eslint recommendation. Provide that using `any` type is forbidden (both typescript & eslint configuration files should be modified).

***

## Task 2 (Basic types)
1. Create a `Student` class that is a child of the `Person` class. There should be at least `name` & `age` fields as well as methods to get the value of these fields.
2. Create a `Group` class that has:     
2.1. an array of students, added to the group;   
2.2. a method to add a student to the group;  
2.3. a method `getNameList` to get the list of the students' names as an array;  
2.4. a method `getAverageAge` to get the average age of the students of the group;
3. Create several objects of `Student` class & at least 1 object of `Group` class. Output to console the result of the `getNameList` & `getAverageAge` methods.
 
