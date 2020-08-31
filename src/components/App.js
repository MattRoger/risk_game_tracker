import React, { Component } from 'react';
import '../App.css';
import Intro from "./Intro"
import AddPlayerForm from './AddPlayerForm';
import ToggleDisplay from 'react-toggle-display';


class App extends Component{
  state = {
    hideRules:true,
    players:[]
   };

  hideRules = () =>{
    this.setState({
        hideRules:!this.state.hideRules
    })
}

handleRemovePlayer = (id) => {
  this.setState((prevState) => {
    return {
      players: prevState.players.filter( 
        player => player.id !== id ),
    };
  });
};

prevPlayerId= this.state.players.length

handleAddPlayer = (name) =>{
  this.setState( prevState =>{
    return{        
        players:[
          ...prevState.players,
          {
            name: name,
            score:0,
            id: this.prevPlayerId +=1
          }
        ]      
    }
  })
}

  render(){
    return(
      <>
     <h1>Welcome to The Risk Game Tracker</h1>
      <ToggleDisplay show={this.state.hideRules}>
        <Intro />
        <button
        onClick={this.hideRules}> Continue! </button>
      </ToggleDisplay>
      <div className="playerList">
      {this.state.players.map((player, index) => (
          <Player name={player.name}
           key={player.id.toString()}
            score={player.score}
           id={player.id}
           index={index}
           changeScore={this.handleScoreChange}
           removePlayer={this.handleRemovePlayer}
           />
        ))}

      </div>

      <AddPlayerForm addPlayer={this.handleAddPlayer}/>
     </>  
     )}
}

export default App;
