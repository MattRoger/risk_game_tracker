import React from "react";
import styled from "styled-components";
import Counter from "./Counter";

const Player = (props) => {
  let backgroundColor = "0,0,0";
  let borderStyle = "";
  let textColor = "#000";
  const lightText = "#F2F4F3";
  const darkText = "#403D39";
  switch (props.color) {
    case "red":
      backgroundColor = "222, 13, 13";
      textColor = lightText;
      break;
    case "blue":
      backgroundColor = "56, 22, 204";
      textColor = "lightText";
      break;
    case "green":
      backgroundColor = "22, 166, 55";
      textColor = "lightText";
      break;
    case "yellow":
      backgroundColor = "222, 219, 33";
      textColor = darkText;
      break;
    case "grey":
      backgroundColor = "122, 122, 122";
      textColor = lightText;
      break;
    case "black":
      backgroundColor = "51, 62, 66";
      textColor = "lightText";
      break;
    default:
      backgroundColor = "255, 0, 221";
      textColor = lightText;
      break;
  }

  if (props.playerTurn == props.id) {
    backgroundColor = `rgb(${backgroundColor})`;
    borderStyle=` 5px solid ${"gold"}`   
  } else {
    backgroundColor = `rgb(${backgroundColor},.3)`;
    borderStyle=` 2px solid ${backgroundColor}`
  }
  const Container = styled.div`
  border:${borderStyle};
    background: ${backgroundColor};
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-top: 1rem;
    align-items: center;
    margin-bottom: 1rem;
    color: ${textColor};
    button {
      display: inline;
      margin: 0.5rem;
    }
  `;

  return (
    <Container>
      <div className="player player-list-name">
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
