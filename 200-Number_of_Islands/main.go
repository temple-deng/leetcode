package main

import (
	"fmt"
)

func numIslands(grid [][]byte) int {
	visited := make([][]bool, len(grid))

	for i := 0; i < len(grid); i++ {
		visited[i] = make([]bool, len(grid[i]))
	}

	count := 0

	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[i]); j++ {
			if grid[i][j] == '1' && visited[i][j] == false {
				count++
				floodfill(visited, grid, i, j)
			}
		}
	}

	return count
}

func floodfill(visited [][]bool, grid [][]byte, x, y int) {
	if x < 0 || x >= len(grid) || y < 0 || y >= len(grid[x]) {
		return
	}

	if grid[x][y] == '1' && visited[x][y] == false {
		visited[x][y] = true
		floodfill(visited, grid, x-1, y)
		floodfill(visited, grid, x, y-1)
		floodfill(visited, grid, x+1, y)
		floodfill(visited, grid, x, y+1)
	}
}

func main() {
	grid := [][]byte{
		[]byte{'1', '1', '0', '0', '0'},
		[]byte{'1', '1', '0', '0', '0'},
		[]byte{'0', '0', '1', '0', '0'},
		[]byte{'0', '0', '0', '1', '1'},
	}

	fmt.Println(numIslands(grid))
}