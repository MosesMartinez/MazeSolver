function dfs(maze, r, c, correctPath, pathTraversed) {
  if (maze[r][c] === "salmon") {
    correctPath.push([r, c]);
    return true;
  }
  if ((maze[r][c] === "lightgrey" || maze[r][c] === "lightgreen") && pathTraversed[r][c] === false) {
    pathTraversed[r][c] = true;
    if (r >= 1) {
      if (dfs(maze, r - 1, c, correctPath, pathTraversed)) {
        correctPath.unshift([r, c]);
        return true;
      }
    }
    if (c >= 1) {
      if (dfs(maze, r, c - 1, correctPath, pathTraversed)) {
        correctPath.unshift([r, c]);
        return true;
      }
    }
    if (r + 1 < maze.length) {
      if (dfs(maze, r + 1, c, correctPath, pathTraversed)) {
        correctPath.unshift([r, c]);
        return true;
      }
    }
    if (c + 1 < maze[0].length) {
      if (dfs(maze, r, c + 1, correctPath, pathTraversed)) {
        correctPath.unshift([r, c]);
        return true;
      }
    }
  }
}
export const SolveMaze = (maze, r, c) => {
  let pathTraversed = [
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false]
  ];
  let correctPath = []
  dfs(maze, r, c, correctPath, pathTraversed);
  let temp = correctPath.slice(1,correctPath.length-1);
  return temp;
}
