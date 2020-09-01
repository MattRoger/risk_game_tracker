import React from "react";

const PlayerList = (props) => {
    return (
      <div className="player-list">
        <span className="player-name-list">
        <button className="remove-player"
        onClick={()=>props.removePlayer(props.id)}
        >✖</button>
          {props.name}</span>
      
      </div>
    );
  };

  export default PlayerList;
  