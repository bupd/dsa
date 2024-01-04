import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class MajorityElement {
    public static int majorityElement(int[] nums) {
        HashMap<Integer, Integer> hash = new HashMap<>();
        int n = nums.length;

        for (int num : nums) {
            hash.put(num, hash.getOrDefault(num, 0) +1);
        }
        System.out.println(hash.values());
        int[] ints = {9, 4, 10, 3, 1, 0};
        System.out.println(Arrays.toString(ints));
        System.out.println(Collections.max(hash.values()));
        int value = Collections.max(hash.values());
        int key = -1;
        for (Map.Entry<Integer, Integer> entry : hash.entrySet()) {
            if (entry.getValue().equals(value)) {
                key = entry.getKey();
                break;
            }
        }
        return key;
    }

    public static void main(String[] args) {
        int[] nums;
        nums = new int[]{2,2,1,1,1,1,2,2};
// Output: 3
        System.out.println(majorityElement(nums));
    }
}
