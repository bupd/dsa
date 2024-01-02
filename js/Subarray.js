// n = 4
// a[] = {1, -2, 2, -3}
// k = 2

// the above is the input;

// len should be greater than the k.
// the sum should be the highest.
// array should be worth well.

function BSubarray(arr, n, k) {
  console.log(arr, n, k);
  console.log("Work Started.");

  // Function to find the largest sum of subarray containing at least k numbers
  function maxSumWithK(arr, n, k) {
    // Calculate the prefix sum
    let prefixSum = [];
    prefixSum[0] = arr[0];
    for (let i = 1; i < n; i++) {
      prefixSum[i] = prefixSum[i - 1] + arr[i];
    }

    // Initialize variables to store maximum sum and minimum prefix sum
    let maxSum = prefixSum[k - 1];
    let minPrefixSum = 0;

    // Iterate through the array and find the maximum sum
    for (let i = k; i < n; i++) {
      minPrefixSum = Math.min(minPrefixSum, prefixSum[i - k]);
      maxSum = Math.max(maxSum, prefixSum[i] - minPrefixSum);
    }

    return maxSum;
  }

  // Example usage:
  const n1 = 4;
  const arr1 = [1, -2, 2, -3];
  const k1 = 2;
  console.log(maxSumWithK(arr1, n1, k1)); // Output: 1

  const n2 = 6;
  const arr2 = [1, 1, 1, 1, 1, 1];
  const k2 = 2;
  console.log(maxSumWithK(arr2, n2, k2)); // Output: 6
}

let arr = [1, -2, 2, -3];
let n = 4; // I don't know how this helps check if the arr.len is faster than the n itself.
const k = 2;

BSubarray(arr, n, k);
