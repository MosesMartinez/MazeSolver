import React from "react";
import styled from "styled-components";
interface CellColor {
  onClick: any;
  background: string;
}
const Cell = styled.td<CellColor>`
  height: 45px;
  width: 45px;
  background-color: ${props => props.background};
  @media (max-width: 600px) {
    height: 35px;
    width: 35px;
  }
  @media (max-width: 420px) {
    height: 25px;
    width: 25px;
  }
  :hover{
    transform: scale(1.2);
    border: 3px lightblue solid;
    cursor: pointer;
  }
  :active{
    transform: scale(1);
  }
  transition: background-color 100ms;
`;
const Table = styled.table`
  border: 5px black solid;
`;
const Body = styled.div`
  display: flex;
`;
interface MazeGrid {
  maze: string[][];
  onClick: any;
}
const Grid = (props: MazeGrid) => {
  const cellClick = (i: number, j: number) => {
    props.onClick(i, j);
  };
  const layoutGrid = () => {
    let layout = [];
    for (let i = 0; i < props.maze.length; i++) {
      let row = [];
      for (let j = 0; j < props.maze[0].length; j++) {
        row.push(
          <Cell
            key={`index ${i}, ${j}`}
            onClick={() => cellClick(i, j)}
            background={props.maze[i][j]}
          ></Cell>
        );
      }
      layout.push(row);
    }
    let maze = layout.map((d, k) => {
      return <tr key={k}>{d}</tr>;
    });
    return (
      <Table>
        <tbody>{maze}</tbody>
      </Table>
    );
  };
  return <Body>{layoutGrid()}</Body>;
};
export default Grid;
