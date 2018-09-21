package main

import (
	"fmt"
)

func integerBreak(n int) int {
	s := make([]int, n+1)

	for i := 0; i <= n; i++ {
		s[i] = -1
	}
	s[1] = 1
	s[2] = 1

	dp(n, s)
	return s[n]
}

func dp(n int, s []int) int {
	if s[n] != -1 {
		return s[n]
	}

	max := -1
	for i := 1; i <= n-i; i++ {
		m := n-i
		if dp(n-i, s) > m {
			m = dp(n-i, s)
		}
		if m * i > max {
			max = m * i
		}
	}

	s[n] = max
	return max
}

func main() {
	fmt.Println(integerBreak(10))
}