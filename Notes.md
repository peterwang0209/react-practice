# Table of Content

- [Table of Content](#table-of-content)
  - [General Background Knowledge of React](#general-background-knowledge-of-react)
  - [Course Outlines](#course-outlines)
  - [JavaScript Refresher](#javascript-refresher)
    - [let & const](#let--const)
    - [arrow](#arrow)
    - [exports & imports](#exports--imports)
    - [classes](#classes)
    - [spread & rest operators](#spread--rest-operators)
    - [destructuring](#destructuring)
    - [array](#array)

## General Background Knowledge of React

- Reason to use react is we dont want to wait for new pages to load or actions to start
  - Traditional web apps, you click the button, send request and wait for sever to send you new HTML page
  - But we when use javascript, it runs in the browser, we can manipulate the DOM of the page. In this case, no visible request to the server is required, no need to wait for a new HTML page as a response.

> React is a clint-side javaScript library for building User Interface.

- javascript you need to write every action, every steps for the code. We are doing
repetitive task.
- In react, we can custome HTML components and elements. split the application into small components. every component has clear task, the react will render them, aka, react will do the repetitive task for us.

---

## Course Outlines

| Study Parts      | Description |
| ----------- | ----------- |
| Basic & Foundation      | 1. Components & Building UIs 2. Working with Events & Data: "props" and "state" <br/> 3. Styling React Apps & Components <br/> 4. React Hooks      |
| Advanced Concepts   | 1. Side Effects, "Refs" & More React Hook <br/> 2. React's Context API & Redux <br/> 3. Forms, HTTP Request & "Custom Hooks" <br/> 4. Routing, Deploy,emt, NextJS & More        |
| Summaries & Refreshers   | 1. JavaScript Refersher <br/> 2. ReactJS Summary <br/>|

---

## JavaScript Refresher

### let & const

used to be `var` but now we have `let` and `const`

`const` cannot be changed, `var` can be changed.

[Code Example](./JavaScript_Refresh/let_const.js)

### arrow

appears on ES6, it is a substitude of function.

[Code Example](./JavaScript_Refresh/arrow.js)

### exports & imports

export and import function and variable/const

[Code Example](./JavaScript_Refresh/export_import/app.js)

### classes

classes can store properties and funcitons.
classes can obtain Inheritance
classes can be used to create instance and we can use this instance to call its function

[Code Example for ES6](/JavaScript_Refresh/classes_ES6.js)
[Code Example for ES7](JavaScript_Refresh/classes_ES7.js)

### spread & rest operators

both spread and rest operators use `...` this notation
spread is used to split up array elements OR object properties

```javascript
const newArray = [...oldArray,1,2]
const newObject = [...oldObject, newProp:5]
```

rest is used to merge a list of function arguments into an array

```javascript
function sortArgs(...args) {
  return args.sort()
}
```

[Code Example](./JavaScript_Refresh/spread_rest_operators.js)

### destructuring

extract array elements or object properties and store them in variables

array destructuring

```javascript
[a,b] = ['Hello','Max']
console.log(a)
console.log(b)
```

object destructureing

```js
{name} = {name: 'Max', age:28}
console.log{name}
console.log{age}
```

[Code Example](JavaScript_Refresh/destructuring.js)

### array

[Code Example](JavaScript_Refresh/array.js)

## React Basics & Working With Components

### Components

React is all about `component`
All user interfaces in the end are made up of components