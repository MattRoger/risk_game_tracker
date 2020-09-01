import React from "react";
import styled from "styled-components";

const PlayerList = (props) => {
  const Container = styled.div`
    background: ${props.color};
  `;


  return (
    <Container>
      <div className="player-list" id={props.id}>
        <span className="player-name-list">
          <button
            className="remove-player"
            onClick={() => props.removePlayer(props.id)}
          >
            ✖
          </button>
          {props.name}
        </span>
      </div>
    </Container>
  );
};

export default PlayerList;
