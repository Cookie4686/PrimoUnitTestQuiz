# PrimoUnitTestQuiz
Please write a typescript project with unit test
Provide accessible repo of typescript project with unit test.
Provide how to setup dependency, execute code and run unit test.

## How to Setup UnitTest

### Prerequisite
- Have NPM installed on your machine

### Setting up the project
1. Create a folder for your project
2. Open your terminal and navigate to that folder
3. Run `npm init -y` to initialize NPM project with default options
4. Run `npm install jest typescript ts-jest @types/jest --save-dev` to install typescript and Jest a JavaScript Testing Framework
5. Run `npx tsc --init` to initialize TypeScript config file 
6. Run `npx ts-jest config:init` to initialize Jest config file

### Creating and Executing a Function
1. Create a file name `utils.ts`
2. Add a function
```ts
export function add(a: number, b: number) {
  return a + b;
}

console.log(add(3, 5));
```
3. Run `npx tsx utils.ts` to execute code in the file

### Creating Test Case
1. Create a file name `test.ts`
2. Add your test case by using test function
```ts
// (optional) import from "@jest/globals" if you want a typed environment
import { test, expect } from "@jest/globals";
import { add } from "./utils";

test("Test 1", () => {
  expect(add(0, 0)).toBe(0);
  expect(add(3, 5)).toBe(8);
});

test("Test 2", () => {
  expect(add(-1, -2)).toBe(-3);
});
```
3. Run command `npx jest test.ts` to run test

## Try it out
1. Clone or Download this repository
2. Run command `npm install` or `npm i`
3. Run command `npm test` or `npx jest`
4. Try adding test case to src/test.ts
5. Run command `npm test` again
