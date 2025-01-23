// (optional) import from "@jest/globals" if you want a typed environment
import { test, expect } from "@jest/globals";
import { add, sort } from "./utils";

test("Test 1", () => {
  expect(add(0, 0)).toBe(0);
  expect(add(3, 5)).toBe(8);
});

test("Test 2", () => {
  expect(add(-1, -2)).toBe(-3);
});

test("Test Sort 1", () => {
  expect(sort([1, 3, 4], [2, 3, 5], [9, 8, 2])).toEqual([
    1, 2, 2, 3, 3, 4, 5, 8, 9,
  ]);
});

test("Test Sort 2", () => {
  const SIZE = 200;
  let arr1 = Array<number>(SIZE / 2);
  // 0, 2, 4, 6, ... , 198
  for (let i = 0; i < SIZE / 2; i++) {
    arr1[i] = i * 2;
  }
  // 1, 3, 5, 7, ... , 199
  let arr2 = arr1.map((e) => e + 1);
  let arr3 = Array<number>(SIZE);
  // 199, 198, 197, ... , 0
  for (let i = SIZE - 1, idx = 0; i >= 0; i--) {
    arr3[idx++] = i;
  }

  // 0, 0, 1, 1, 2, 2, ... , 199, 199
  let res = Array<number>(SIZE * 2);
  for (let i = 0, idx = 0; i < SIZE; i++) {
    res[idx++] = i;
    res[idx++] = i;
  }

  expect(sort(arr1, arr2, arr3)).toEqual(res);
});
