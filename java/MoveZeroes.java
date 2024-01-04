public class MoveZeros {
    public static void moveZeroes(int[] nums) {
        int nonZeroIndex = 0;

        // Iterate through the array
        for (int i = 0; i < nums.length; i++) {
            // If the current element is non-zero, move it to the nonZeroIndex position
            if (nums[i] != 0) {
                nums[nonZeroIndex] = nums[i];

                // If the current index is different from the nonZeroIndex, set the current index to zero
                if (i != nonZeroIndex) {
                    nums[i] = 0;
                }

                // Increment the nonZeroIndex
                nonZeroIndex++;
            }
        }
    }

    public static void main(String[] args) {
        int[] nums1 = {0, 1, 0, 3, 12};
        // Output: [1, 3, 12, 0, 0]
        moveZeroes(nums1);
        System.out.println(Arrays.toString(nums1));

        int[] nums2 = {0};
        // Output: [0]
        moveZeroes(nums2);
        System.out.println(Arrays.toString(nums2));
    }
}

