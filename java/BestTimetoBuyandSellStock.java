public class BestTimetoBuyandSellStock {
    public static int maxProfit(int[] prices) {
        int n = prices.length;
        if (n <= 1) {
            // If there are no or only one day's prices, no profit can be made.
            return 0;
        }

        int maxProfit = 0;
        int minPrice = prices[0];

        for (int i = 1; i < n; i++) {
            // Update the minimum price encountered so far
            minPrice = Math.min(minPrice, prices[i]);

            // Update the maximum profit if selling at the current price gives a better profit
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }

        return maxProfit;
    }


    public static void main(String[] args) {
        int[] prices = new int[]{7,1,5,3,6,4, 0, 1};
        // Output: 5.
        System.out.println(maxProfit(prices));

//        int[] prices1 = new int[]{3,3,5,0,0,3,1,4, -1};
//        System.out.println(maxProfit(prices1));
//        // output: 2 expected 4
    }
}
