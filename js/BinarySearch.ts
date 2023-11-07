function BinarySearch(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length;

  do {
    const m = Math.floor((low + high) / 2);
    const v = haystack[m];

    if (v === needle) {
      console.log("v =", v, "m= ", m);

      return true;
    } else if (v > needle) {
      high = m;
    } else {
      low = m + 1;
    }
  } while (low < high);
  return false;
}

const haystack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 10;
const desiredvalue = 1000000;
while (i < desiredvalue) {
  i++;
  haystack.push(i);
}
const needle = 289374;

console.log(BinarySearch(haystack, needle));

(async () => {
  const start = performance.now();
  console.log(start, "time start\n");

  await BinarySearch(haystack, needle);
  const stop = performance.now();
  console.log("stop", stop);

  const inSeconds = stop - start;
  console.log(inSeconds);

  const rounded = Number(inSeconds / 1000).toFixed(6);
  console.log(`businessLogic: ${rounded}s`);
})();
