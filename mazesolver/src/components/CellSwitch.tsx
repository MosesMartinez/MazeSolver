import React from "react";
import styled from "styled-components";
import Switch from "react-switch";
import useWindowDimensions from "../javascript/useWindowDimensions";
interface BodyProps {
  border?: string;
}
const Body = styled.div<BodyProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: ${props => props.border};
  font-size: 1em;
  padding: 3px;
  margin: 15px;
  @media(max-width: 420px){
    font-size: .7em;
  }
  @media(max-width: 330px){
    padding: 1px;
    margin: 10px;
  }
`;
const Header = styled.div`
  color: white;
  margin-bottom: 15px;
`;
interface SwitchProps {
  onChange: any;
  checked: boolean;
  header: string;
  id: string;
  border?: boolean
}
const CellSwitch = (props: SwitchProps) => {
  const { width } = useWindowDimensions();
  return (
    <Body border={!!props.border ? '2px solid white' : ''}>
      <Header>{props.header}</Header>
      <Switch
        onChange={(e: any) => props.onChange(props.id)}
        checked={props.checked}
        id={props.id}
        height = {width > 420 ? 28: 25}
        width={width > 420 ? 58: 45}
      />
    </Body>
  );
};

export default CellSwitch;
