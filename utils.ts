export function add(a: number, b: number) {
  return a + b;
}

// console.log(add(3, 5));

export function sort(arr1: number[], arr2: number[], arr3: number[]): number[] {
  let res = Array(arr1.length + arr2.length + arr3.length);
  let resIndex = 0,
    i1 = 0,
    i2 = 0,
    i3 = arr3.length - 1;

  let tempArr = Array<number | undefined>(3);
  while (resIndex != res.length) {
    tempArr[0] = i1 == arr1.length ? undefined : arr1[i1];
    tempArr[1] = i2 == arr2.length ? undefined : arr2[i2];
    tempArr[2] = i3 < 0 ? undefined : arr3[i3];

    let min = tempArr[0],
      minIdx = 0;
    for (let i = 1; i < tempArr.length; i++) {
      let target = tempArr[i];
      if (target != undefined && (min == undefined || target < min)) {
        min = target;
        minIdx = i;
      }
    }
    switch (minIdx) {
      case 0:
        i1++;
        break;
      case 1:
        i2++;
        break;
      case 2:
        i3--;
        break;
    }
    res[resIndex++] = min;
  }
  return res;
}
