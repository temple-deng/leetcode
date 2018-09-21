package main

import (
	"fmt"
)

func rob(nums []int) int {
	n := len(nums)
	if n == 0 {
		return 0
	}

	res := make([]int, n+1)
	res[0] = 0
	res[1] = nums[0]
	for i := 2; i <= n; i++ {
		res[i] = -1
	}

	return dp(n, res, nums)
}

func dp(n int, res []int, nums []int) int {
	if res[n] != -1 {
		return res[n]
	}

	res[n] = max(dp(n-2, res, nums) + nums[n-1], dp(n-1, res, nums))
	return res[n]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	arr := []int{2, 7, 9, 3, 1}
	fmt.Println(rob(arr))
}