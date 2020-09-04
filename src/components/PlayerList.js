import React from "react";
import styled from "styled-components";

const PlayerList = (props) => {
  let backgroundColor="0,0,0";
  let textColor="";
  const lightText="#F2F4F3"
  const darkText="#403D39"
  switch (props.color) {
    case "red":
      backgroundColor = "222, 13, 13";
      textColor=lightText;
      break;
    case "blue":
      backgroundColor = "56, 22, 204";
      textColor=lightText;
      break;
    case "green":
       backgroundColor = "22, 166, 55";
       textColor=lightText;
      break;
    case "yellow":
      backgroundColor = "222, 219, 33";
      textColor=darkText;
      break;
    case "grey":
       backgroundColor = "122, 122, 122";
       textColor=lightText;
      break;
    case "black":
       backgroundColor = "51, 62, 66";
       textColor=lightText;
      break;
    default:
      backgroundColor = "255, 0, 221";
      textColor=lightText;
      break;
  }
  backgroundColor= `rgb(${backgroundColor})`
  const Container = styled.div`
    background: ${backgroundColor};
    color:${textColor};
    display:flex;
    align-content: center;
    margin-top:1rem;
    margin-bottom:1rem;
    button{
      display:inline
    }
  `;

  const XBTN = styled.button`
  background: none;
  height:36px;
  width: 36px;
  border:none;
  
`;
  return (
    <Container>
      <div className="player player-list" id={props.id}>
        <span className="player-name-list">
          <XBTN
            className="remove-player"
            onClick={() => props.removePlayer(props.id)}
          >
              <img src="images/icons/x.png" alt="-"className="counter-btn"/>
          </XBTN>
          <p  className="player-name">{props.name}</p>
        </span>
      </div>
    </Container>
  );
};

export default PlayerList;
