# conditional-compilation-sample

This shows a sample of how to do conditional compilation using process.env and if statements. This is a pattern that is widely used within javascript projects especially when using "process.env.NODE_ENV."

## How it works

Simply wrap the conditionally compiled code in an if statement that looks for an environment variable. 
```javascript
if (process.env.INCLUDE_MODULE_A === "true") {
  // use module a
}
```
During compilation, the `process.env.INCLUDE_MODULE_A` will be replaced with the value in that environment variable. So if this resolves to:
```javascript
if ("true" === "true") {
  // use module a
}
```
then rollup will realize that the if statement always evaluates to true, and replace that with:
```javascript
{
  // use module a
}
```
Conversely, if the inside of the if statement resolves to `"false" === "true"`, rollup will realize the if statement always evaluates to false.

## Demo - compile one module

```bash
INCLUDE_MODULE_A=true INCLUDE_MODULE_B=false npx rollup -c
cat bundle.js
```
This outputs: 
```javascript
(function () {
    'use strict';

    var moduleA = {
        name: "ModuleA"
    };

    const modules = [];
    {
        modules.push(moduleA);
    }

    console.log(JSON.stringify(modules, null, 2));

})();
```

## Demo - compile two modules
```bash
INCLUDE_MODULE_A=true INCLUDE_MODULE_B=true npx rollup -c
cat bundle.js
```
This outputs:
```javascript
(function () {
    'use strict';

    var moduleA = {
        name: "ModuleA"
    };

    var moduleB = {
        name: "ModuleB"
    };

    const modules = [];
    {
        modules.push(moduleA);
    }
    {
        modules.push(moduleB);
    }

    console.log(JSON.stringify(modules, null, 2));

})();
```
```
