package main

import (
	"fmt"
	"math"
)

// 自顶向下的方案
func numSquares(n int) int {
	res := make([]int, n+1)

	for i := 1; i <= n; i++ {
		res[i] = -1
	}

	return dp(n, res)
}

func dp(n int, res []int) int {
	if res[n] != -1 {
		return res[n]
	}

	min := math.MaxInt32

	for i := 1; i*i <= n; i++ {
		if 1 + dp(n - i*i, res) < min {
			min = 1 + dp(n - i*i, res)
		}
	}

	res[n] = min
	return min
}

func main() {
	fmt.Println(numSquares(13))
}