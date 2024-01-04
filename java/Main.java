public class Main {

    // Function to find the length of the smallest substring containing 0, 1, and 2
    static int smallestSubstring(String s) {
        int n = s.length();
        int minlength = Integer.MAX_VALUE;
        int start = 0; // This holds the left side of the window of the index.
        int end = 0; // This holds the right side of the window of the index.
        int count0, count1, count2; // This holds the count of each variable.
        count2=count0=count1=0;

        // NOTE: The '' single quote represent character.
        // Note: The "" double quote represent strings.

        while (end<n) {
            if ('0' == s.charAt(end)) count0++;
            if (s.charAt(end) == '1') count1++;
            if (s.charAt(end) == '2') count2++;

            while(count0 > 0 && count1 > 0 && count2 > 0) {
                if (s.charAt(start) == '0') count0--;
                if (s.charAt(start) == '1') count1--;
                if (s.charAt(start) == '2') count2--;

                minlength = Math.min(minlength, end - start + 1);

                System.out.println("Start Index:"+ start + "End Index" + end);

                start++;
            }
            end++;
        }


        return minlength;
    }

    // Main method to test the function
    public static void main(String[] args) {
        // Example 1
        String s1 = "10212";
        System.out.println(smallestSubstring(s1));  // Output: 3

        // Example 2
        String s2 = "12121";
        System.out.println(smallestSubstring(s2));  // Output: -1
    }
}
