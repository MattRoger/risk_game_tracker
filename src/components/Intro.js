import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";
import styled from "styled-components";
import ClassicRules from "./ClassicRules"

const RulesHeading = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 0.5rem;
  img {
    width: 30px;
  }
  h3 {
    letter-spacing: 0.25rem;
  }
`;

class Intro extends Component {
  state = {
    show1: true,
    show2: false,
    hideRules: true,
  };

  handleClickQuick = () => {
    this.setState((prevState) => {
      return {
        show1: !prevState.show1,
        show2: (prevState.show2 = false),
      };
    });
  };
  handleClickClassic = () => {
    this.setState((prevState) => {
      return {
        show2: !prevState.show2,
        show1: (prevState.show1 = false),
      };
    });
  };

  render() {
    return (
      <div class="wrapper">
        <div className="rules-nav">
          <h2>Choose How you want to play</h2>
          <div className="button-bar">
            <button onClick={this.handleClickQuick} className="intro-btn">
              <p>Quick Play</p>
              <img src="images/icons/quickmode.png" />{" "}
            </button>
            <button onClick={this.handleClickClassic} className="intro-btn">
              <p> Classic Play</p>
              <img src="images/icons/classicmode.png" />
            </button>
          </div>
        </div>
        <ToggleDisplay show={this.state.show1}>
          <div>
            <RulesHeading>
              <img src="images/icons/blackDie.png" />
              <h3>Quick Game Play</h3>
              <img src="images/icons/redDie.png" />
            </RulesHeading>
            <ol>
              <li>Each Player picks an Army Color.</li>
              <li>
                Roll a Dice to see who goes first! Play will continue clockwise.
              </li>
              <li>
                Shuffle the territory cards and deal them out to all players.
                Give any remaining cards to the players going last
              </li>
              <li>
                All players Look at their cards. For any 1-star card, place one
                troop in that territory; for any 2-star card, place two troops
                in that territory. One troop equals one infantry.
              </li>
              <li>Take back all of the territory cards and shuffle them</li>
            </ol>
          </div>
        </ToggleDisplay>
        <ToggleDisplay show={this.state.show2}>
          <div  id="classicRules">
            <RulesHeading>
              <img src="images/icons/blackDie.png" />
              <h3>Classic Game Play</h3>
              <img src="images/icons/redDie.png" />
            </RulesHeading>
              <ClassicRules />
          </div>
        </ToggleDisplay>
      </div>
    );
  }
}

export default Intro;
