import React, { useState } from "react";
import Grid from "./components/Grid";
import styled from "styled-components";
import CellSwitch from "./components/CellSwitch";
import Button from "./components/Button";
import { SolveMaze } from "./javascript/solvemaze";
import { maze } from "./javascript/maze";
const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 25px;
  position: absolute;
  left: 5%;
  width: 90%;
  border-radius: 25px;
  background-color: #2e8bc0;
  margin-top: 75px;
  @media (max-width: 975px) {
    flex-flow: column-reverse;
    align-items: center;
  }
`;
const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 75px;
  @media (max-width: 975px) {
    margin-top: 5px;
    margin-bottom: 25px;
  }
`;
const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 8px;
  padding: 15px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const App: React.FC = () => {
  const [cusMaze, setMaze] = useState([...maze]);
  const [startx, setStartX] = useState(-1);
  const [starty, setStartY] = useState(-1);
  const [endPos, setEndPos] = useState(false);
  const [color, setColor] = useState("");
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [walls, setWalls] = useState(false);
  const [clear, setClear] = useState(false);

  const clearPath = () => {
    let temp = [...cusMaze];
    for (let i = 0; i < temp.length; i++) {
      for (let j = 0; j < temp[0].length; j++) {
        if (temp[i][j] === "lightblue") {
          temp[i][j] = "lightgrey";
        }
      }
    }
    setMaze(temp);
  };
  const solveMaze = () => {
    if (startx > -1 && starty > -1 && endPos) {
      clearPath();
      var temp = SolveMaze(cusMaze, startx, starty);
      for (let i = 0; i < temp.length; i++) {
        setInterval(() => {
          let tempMaze = [...cusMaze];
          let x = temp[i][0];
          let y = temp[i][1];
          tempMaze[x][y] = "lightblue";
          setMaze(tempMaze);
        }, 1500);
      }
    } else {
      alert("Place starting and ending positions");
    }
  };
  const clearMaze = () => {
    let temp = [...cusMaze];
    for (let i = 0; i < temp.length; i++) {
      for (let j = 0; j < temp[0].length; j++) {
        temp[i][j] = "lightgrey";
      }
    }
    setStartY(-1);
    setStartX(-1);
    setEndPos(false);
    setMaze(temp);
  };
  const changeCell = (x: number, y: number) => {
    if (color !== "") {
      let temp = [...cusMaze];
      if (color === "lightgreen" || color === "salmon") {
        for (let i = 0; i < temp.length; i++) {
          for (let j = 0; j < temp[0].length; j++) {
            if (temp[i][j] === color) {
              temp[i][j] = "lightgrey";
            }
          }
        }
      }
      if (color === "lightgreen") {
        setStartX(x);
        setStartY(y);
      }
      if (color === "salmon") {
        setEndPos(true);
      }
      if (color === "lightgrey") {
        if (temp[x][y] === "lightgreen") {
          setStartX(-1);
          setStartY(-1);
        }
        if (temp[x][y] === "salmon") {
          setEndPos(false);
        }
      }
      temp[x][y] = color;
      setMaze(temp);
    }
  };
  const switchChange = (e: any) => {
    switch (e) {
      case "start":
        if (start === false) {
          setColor("lightgreen");
          setEnd(false);
          setWalls(false);
          setClear(false);
        } else {
          setColor("");
        }
        setStart(!start);
        break;
      case "end":
        if (end === false) {
          setColor("salmon");
          setStart(false);
          setWalls(false);
          setClear(false);
        } else {
          setColor("");
        }
        setEnd(!end);
        break;
      case "walls":
        if (walls === false) {
          setColor("black");
          setEnd(false);
          setStart(false);
          setClear(false);
        } else {
          setColor("");
        }
        setWalls(!walls);
        break;
      case "clear":
        if (clear === false) {
          setColor("lightgrey");
          setEnd(false);
          setWalls(false);
          setStart(false);
        } else {
          setColor("");
        }
        setClear(!clear);
        break;
    }
  };
  return (
    <Body>
      <Grid
        maze={cusMaze}
        onClick={(x: number, y: number) => changeCell(x, y)}
      />
      <ControlsContainer>
        <SwitchContainer>
          <CellSwitch
            onChange={(e: any) => switchChange(e)}
            checked={start}
            header={"Start"}
            id="start"
            border={true}
          />
          <CellSwitch
            onChange={(e: any) => switchChange(e)}
            checked={end}
            header={"End"}
            id="end"
            border={true}
          />
          <CellSwitch
            onChange={(e: any) => switchChange(e)}
            checked={walls}
            header={"Walls"}
            id="walls"
            border={true}
          />
          <CellSwitch
            onChange={(e: any) => switchChange(e)}
            checked={clear}
            header={"Clear"}
            id="clear"
            border={true}
          />
        </SwitchContainer>
        <ButtonContainer>
          <Button onClick={() => solveMaze()} textfield="Solve Maze" />
          <Button onClick={() => clearMaze()} textfield="Clear Maze" />
        </ButtonContainer>
      </ControlsContainer>
    </Body>
  );
};

export default App;
