import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  margin-right: 40px;
  box-shadow: 3px 4px 0px 0px #899599;
  background: linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
  background-color: #ededed;
  border-radius: 15px;
  border: 1px solid #d6bcd6;
  cursor: pointer;
  color: #3a8a9e;
  font-family: Arial;
  font-size: 17px;
  padding: 7px 25px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #e1e2ed;
  @media(max-width: 420px){
    margin-right: 30px;
  }
  @media(max-width: 360px){
    font-size: 10px;
    margin-right: 50px;
  }
  @media(max-width: 330px){
    font-size: 9px;
    margin-right: 37px;
  }
  :hover {
    background: linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
    background-color: #bab1ba;
  }
  :active {
    position: relative;
    top: 1px;
  }
  :focus{
      outline: 0;
  }
`;
interface ButtonProps {
    textfield: string;
    onClick: any;
}
const Button = (props: ButtonProps) =>{

    return(
        <ButtonStyle onClick={props.onClick}>{props.textfield}</ButtonStyle>
    )

}

export default Button