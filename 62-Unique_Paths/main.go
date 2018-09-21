package main

import (
	"fmt"
)

// 自顶向下的方案
func uniquePaths(m int, n int) int {
	res := make([][]int, m)

	for i := 0; i < m; i++ {
		res[i] = make([]int, n)
	}

	return dp(m-1, n-1, res)
}

// 求解 m*n 方格路径的解法总数
func dp(m, n int, res [][]int) int {
	if m == 0 || n == 0 {
		return 1
	}

	if res[m][n] != 0 {
		return res[m][n]
	}

	res[m][n] = dp(m, n-1, res) + dp(m-1, n, res)
	return res[m][n]
}


func main() {
	fmt.Println(uniquePaths(7, 3))
}