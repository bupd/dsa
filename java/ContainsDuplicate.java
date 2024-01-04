class Solution {
    public boolean containsDuplicate(int[] nums) {
                Set<Integer> uniqueElements = new HashSet<>();

        // Iterate through the array
        for (int num : nums) {
            // If the set already contains the current element, it's a duplicate
            // Eventhough you are checking the condition you are adding the element to the set.
            if (!uniqueElements.add(num)) {
                return true;
            }
        }

        // No duplicates found
        return false;
    }
}
