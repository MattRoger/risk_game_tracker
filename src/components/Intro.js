import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";
import styled from "styled-components";
import ClassicRules from "./ClassicRules"
import BasicRules from './BasicRules'
import TwoPlayerRules from "./TwoPlayerRules";


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
        show3: (prevState.show3 = false),
      };
    });
  };
  handleClickClassic = () => {
    this.setState((prevState) => {
      return {
        show2: !prevState.show2,
        show1: (prevState.show1 = false),
        show3: (prevState.show3 = false),
      };
    });
  };
  handleTwoPlayer = () => {
    this.setState((prevState) => {
      return {
        show3: !prevState.show3,
        show1: (prevState.show1 = false),
        show2: (prevState.show2 = false),
      };
    });
  };

  render() {
    return (
      <div className="wrapper">
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
            <button onClick={this.handleTwoPlayer} className="intro-btn">
              <p> Two Player</p>
              <img src="images/icons/twoplayer.png" />
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
          <BasicRules />
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
        <ToggleDisplay show={this.state.show3}>
          <div  id="twoPlayer">
            <RulesHeading>
              <img src="images/icons/blackDie.png" />
              <h3>Two Player Game Game Play</h3>
              <img src="images/icons/redDie.png" />
            </RulesHeading>
              <TwoPlayerRules />
          </div>
        </ToggleDisplay>
      </div>
    );
  }
}

export default Intro;
