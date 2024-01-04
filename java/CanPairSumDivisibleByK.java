
import java.util.HashMap;

class CanPairSumDivisibleByK {
    public static boolean canPair(int[] nums, int k) {
        // Check if the length of the array is even, else pairs cannot be formed
        if (nums.length % 2 != 0) {
            return false;
        }

        // Create a HashMap to store the remainder and its frequency
        HashMap<Integer, Integer> remainderMap = new HashMap<>();

        // Traverse the array and count the frequency of remainders when divided by k
        for (int num : nums) {
            int remainder = (num % k + k) % k; // Handle negative numbers
            remainderMap.put(remainder, remainderMap.getOrDefault(remainder, 0) + 1);
        }

        // Check if each remainder can form a pair with its complement
        for (int remainder : remainderMap.keySet()) {
            int complement = (k - remainder + k) % k; // Calculate the complement
            if (remainder == 0 || remainder == complement) {
                // For remainders 0 and k/2, there must be even occurrences
                if (remainderMap.get(remainder) % 2 != 0) {
                    return false;
                }
            } else {
                // For other remainders, the count of remainder and complement must match
                if (!remainderMap.containsKey(complement) || !remainderMap.get(remainder).equals(remainderMap.get(complement))) {
                    return false;
                }
            }
        }

        // If all conditions are satisfied, the array can be divided into pairs
        return true;
    }

    public static void main(String[] args) {
        int[] nums1 = {9, 5, 7, 3};
        int k1 = 6;
        System.out.println(canPair(nums1, k1));  // Output: true

        int[] nums2 = {4, 4, 4};
        int k2 = 4;
        System.out.println(canPair(nums2, k2));  // Output: false
    }
}
