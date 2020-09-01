import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";
import "../App.css";
import Intro from "./Intro";
import AddPlayerForm from "./AddPlayerForm";
import Player from "./Player";
import PlayerList from "./PlayerList";

class App extends Component {
  state = {
    hideRules: true,
    hideAddPlayer: true,
    players: [],
    playerTurn:1,
  };
  
  hideRules = () => {
    this.setState({
      hideRules: !this.state.hideRules,
    });
  };
  hideAddPlayer = () => {
    this.setState({
      hideAddPlayer: !this.state.hideAddPlayer,
    });
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((player) => player.id !== id),
      };
    });
  };

  prevPlayerId = this.state.players.length;

  handleAddPlayer = (name, score, color) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name: name,
            score: parseInt(score),
            id: (this.prevPlayerId += 1),
            color:color,
            isTurn:false,
          },
        ],
      };
    });
  };
  
  // check to make sure at least two people are playing
 handlePlayerAmountCheck = ()=>{
   if(this.prevPlayerId >1){
    this.hideAddPlayer()
   }else{
     alert("Please add at least 2 players")
   }
 }
    
  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      return {
        score: prevState.players[index].score+=delta,
      };
    });
  } 
handleNextTurn=()=>{
  this.setState((prevState)=>{
    let playTurn= prevState.playerTurn
    const pLength =this.state.players.length;
    console.log(pLength)
    // 2  1
    if(pLength >playTurn){
      return{
        playerTurn: playTurn+=1
      }
    }else{
      return{
        playerTurn: 1
      }
    }
  })
console.log(this.state.playerTurn)
}


  render() {
    return (
      <div className="app-wrapper">
        <h1>Welcome to The Risk Game Tracker</h1>
        <ToggleDisplay show={this.state.hideRules} className="start-rules wrapper">
          <Intro />
          <button onClick={this.hideRules}> Continue! </button>
        </ToggleDisplay>

        <ToggleDisplay show={this.state.hideAddPlayer} className="add-players wrapper">
          <AddPlayerForm addPlayer={this.handleAddPlayer} />
          {this.state.players.map((player, index) => ( 
          
              <PlayerList
              name={player.name}
              key={player.id.toString()}
              index={index}
              id={player.id}
              score={player.score}
              removePlayer={this.handleRemovePlayer}
              color={player.color}
              />
                 
            
            ))}
            <button onClick={this.handlePlayerAmountCheck}> Play! </button>
        </ToggleDisplay>
        <div className="game-tracker wrapper">
          {this.state.players.map((player, index) => (
              <Player
              name={player.name}
              key={player.id.toString()}
              score={player.score}
              id={player.id}
              index={index}
              changeScore={this.handleScoreChange}
              color={player.color}
              isTurn={player.isTurn}
              playerTurn={this.state.playerTurn}
            />
          ))}
          <button
          onClick={this.handleNextTurn}
          >Next Turn</button>
        </div>
      </div>
    );
  }
}

export default App;

