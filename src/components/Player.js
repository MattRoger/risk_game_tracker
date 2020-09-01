import React from "react";
import styled from "styled-components";
import Counter from "./Counter";

const Player = (props) => {
  let backgroundColor="0,0,0"
  switch (props.color) {
    case "red":
       backgroundColor = "222, 13, 13";
      break;
    case "blue":
      backgroundColor = "56, 22, 204";
      break;
    case "green":
       backgroundColor = "22, 166, 55";
      break;
    case "yellow":
      backgroundColor = "222, 219, 33";
      break;
    case "grey":
       backgroundColor = "122, 122, 122";

      break;
    case "black":
       backgroundColor = "51, 62, 66";
      break;
    default:
      backgroundColor = "255, 0, 221";
      break;
  }
  
  if (props.playerTurn === props.id) {
    backgroundColor= `rgb(${backgroundColor})`
  } else {
    backgroundColor= `rgb(${backgroundColor},.5)`  
  }
  const Container = styled.div`
    background: ${backgroundColor};
  `;


  return (
    <Container>
      <div className="player">
        <span className="player-name">{props.name}</span>

        <Counter
          score={props.score}
          changeScore={props.changeScore}
          index={props.index}
        />
      </div>
    </Container>
  );
};

export default Player;
