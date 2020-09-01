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

  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: (this.prevPlayerId += 1),
          },
        ],
      };
    });
  };
  handleLoadPlayer = () => {
    if (this.state.players.length >= 1) {
      this.state.players.map((player, index) => (
        <Player
          name={player.name}
          key={player.id.toString()}
          index={index}
          id={player.id}
          score={player.score}
          changeScore={this.handleScoreChange}
          removePlayer={this.handleRemovePlayer}
        />
      ));
    }
  };

  render() {
    return (
      <>
        <h1>Welcome to The Risk Game Tracker</h1>
        <ToggleDisplay show={this.state.hideRules}>
          <Intro />
          <button onClick={this.hideRules}> Continue! </button>
        </ToggleDisplay>

        <ToggleDisplay show={this.state.hideAddPlayer}>
          <AddPlayerForm addPlayer={this.handleAddPlayer} />
          {this.state.players.map((player, index) => (
            <PlayerList
            name={player.name}
            key={player.id.toString()}
            index={index}
            id={player.id}
            score={player.score}
            removePlayer={this.handleRemovePlayer}
            />
            ))}
            <button onClick={this.hideAddPlayer}> Play! </button>
        </ToggleDisplay>
        <div class="game-tracker">
          {this.state.players.map((player, index) => (
            <Player
              name={player.name}
              key={player.id.toString()}
              score={player.score}
              id={player.id}
              index={index}
              changeScore={this.handleScoreChange}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
