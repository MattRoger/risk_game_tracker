import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";
import "../style/App.css";
import Header from "./Header";
import Intro from "./Intro";
import AddPlayerForm from "./AddPlayerForm";
import Player from "./Player";
import PlayerList from "./PlayerList";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide"

class App extends Component {
  state = {
    hideRules: true,
    hideAddPlayer: false,
    showGameTracker: false,
    players: [],
    playerTurn: 1,
  };

  hideRules = () => {
    this.setState({
      hideRules: !this.state.hideRules,
      hideAddPlayer: (this.state.hideAddPlayer = true),
    });
  };
  hideAddPlayer = () => {
    this.setState({
      hideAddPlayer: !this.state.hideAddPlayer,
      showGameTracker: (this.state.showGameTracker = true),
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
            color: color,
            isTurn: false,
          },
        ],
      };
    });
  };

  // check to make sure at least two people are playing
  handlePlayerAmountCheck = () => {
    if (this.prevPlayerId > 1) {
      this.hideAddPlayer();
    } else {
      alert("Please add at least 2 players");
    }
  };

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      return {
        score: (prevState.players[index].score += delta),
      };
    });
  };
  handleNextTurn = () => {
    this.setState((prevState) => {
      let playTurn = prevState.playerTurn;
      const pLength = this.state.players.length;
      if (pLength > playTurn) {
        return {
          playerTurn: (playTurn += 1),
        };
      } else {
        return {
          playerTurn: 1,
        };
      }
    });
    console.log(this.state.playerTurn);
  };

  render() {
    return (
      <div className="page-wrapper">
       
        <Header />
        
        <div className="app-wrapper">
          {/* intro */}
          <ToggleDisplay
            show={this.state.hideRules}
            className="start-rules center-wrapper"
          >
            <Intro />

            <button onClick={this.hideRules} className="wrapper section-btn">
              <p>Continue!</p>
              <img src="images/icons/rightarrow.png" />
            </button>
          </ToggleDisplay>

          {/* add players */}
          <ToggleDisplay
            show={this.state.hideAddPlayer}
            className="add-players center-wrapper"
          >
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
            <button
              onClick={this.handlePlayerAmountCheck}
              className="wrapper section-btn"
            >
              {" "}
              <p> Play!</p> <img src="images/icons/rightarrow.png" />{" "}
            </button>
          </ToggleDisplay>

          {/* game tracker */}
          <ToggleDisplay show={this.state.showGameTracker}>
            <div className="game-tracker center-wrapper">
              <div className="wrapper">
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
              </div>
              <button onClick={this.handleNextTurn} className="wrapper section-btn">
               <p>Next Player</p><img src="images/icons/rightarrow.png" />
              </button>
            </div>
          </ToggleDisplay>
        </div>
        <section className="left-side">
          <LeftSide/>
        </section>
        <section className="right-side">
        <RightSide/>
        </section>
      </div>
    );
  }
}

export default App;

