# Javascript Snippets

JavaScript snippets in practice. Snippets come from this [extension](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)

## Import and Export

```JavaScript
// imd → destructured import
import {  } from 'module';

// env → exports variable
export const exportVariable = localVariable
```

## Classes

```JavaScript
// ecl → exports default class
export default class className {};

// ece → exports default extended class
export default class className extends baseclassName {};

// con → constructor
constructor() {}

// met → method
methodName(params) {}

// pge → getter
get propertyName() { return this. ; }

// pse → setter
set propertyName(value) {}
```

## Loops

```JavaScript
// fre → forEach loop
array.forEach(currentItem => {});

// fof → for of loop
for (const item of object) {}

// fin → for in
for (const item in object) {}
```

## Functions

```JavaScript
// anfn → arrow
function (params) => {}

// nfn → named function
const name = (params) => {}

// enf → exported name function
export const functionName = (params) => {};`
```

## Destructing

```JavaScript
// dob → destructing object
const {propertyName} = objectToDestruct;

// dar → destructing array
const [propertyName] = arrayToDestruct;
```
