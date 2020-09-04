import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";

class BattleRules extends Component {
  state = {
    show: false,
    attackShow:false,
    decideShow:false,
  };

  handleToggleChart = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show,
      };
    });
  };
  handleToggleAttack = () => {
    this.setState((prevState) => {
      return {
        attackShow: !prevState.attackShow,
      };
    });
  };
  handleToggleDecide = () => {
    this.setState((prevState) => {
      return {
        decideShow: !prevState.decideShow,
      };
    });
  };

  render() {
    return (
      <div className="wrapper">
        <button className="chart-btn" onClick={this.handleToggleChart}>
          Rules of Attack
        </button>
        <ToggleDisplay show={this.state.show}>
          <div>
          <button onClick={this.handleToggleAttack} className="chart-btn">To Attack</button>
            <ToggleDisplay show={this.state.attackShow}>

            <ol>
              <li>
                Announce both the territory you're attacking and the one you are
                attacking from. Then roll the dice against the opponent who
                occupies the opposing territory.
              </li>
              <li>
                Before rolling, both Attacker and your Defender must announce
                the number of dice you intend to roll, and you both must roll at
                the same time.
              </li>
              <li>
                The attacker, will roll 1, 2 or 3 black dice: You must have at
                least one more army in your territory than the number of dice
                you roll
              </li>
              <li>
                The defender will roll either 1 or 2 red dice: To roll 2 dice,
                he or she must have at least 2 armies on the territory under
                attack. Hint: The more dice the defender rolls, the higher his
                or her odds of winning, but the more armies he or she may lose.
              </li>
            </ol>
            </ToggleDisplay>
            <button onClick={this.handleToggleDecide} className="chart-btn">To Decide a Battle</button>
            <ToggleDisplay show={this.state.decideShow}>

            <ol>
              <li>
                Compare the highest die each of you rolled. If the attackers is
                higher, the defender loses one army from the territory under
                attack.
              </li>
              <li>
                But if the defender's die is higher than the attackers, the
                attacker lose one army from the territory they attacked from;
              </li>
              <li>
                If each of player rolled more than one die, now compare the two
                next-highest dice and repeat the process.
              </li>
            </ol>
            </ToggleDisplay> 
          </div>
          <div className="example-wrapper">
            <div className="example-container">
              <h3>Example 1</h3>
              <img src="/images/example/ex1.png" />
              <p>Result: Defender Loses One Troop</p>
            </div>
            <div className="example-container">
              <h3>Example 2</h3>
              <img src="/images/example/ex2.png" />
              <p>Result: Attacker Loses Two Troops</p>
            </div>
            <div className="example-container">
              <h3>Example 3</h3>
              <img src="/images/example/ex3.png" />
              <p>Result: Attacker Loses One Troop, Defender Loses One Troop</p>
            </div>
            <div className="example-container">
              <h3>Example 4</h3>
              <img src="/images/example/ex4.png" />
              <p>Result: Defender Loses Two Troops</p>
            </div>
          </div>
        </ToggleDisplay>
      </div>
    );
  }
}

export default BattleRules;
