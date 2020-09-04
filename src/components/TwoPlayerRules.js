import React from "react";

const TwoPlayerRules = () => {
  return(
  <ol>
    <li>Each Player@@@@@@@@@ picks an Army Color.</li>
    <li>Roll a Dice to see who goes first! Play will continue clockwise.</li>
    <li>
      Shuffle the territory cards and deal them out to all players. Give any
      remaining cards to the players going last
    </li>
    <li>
      All players Look at their cards. For any 1-star card, place one troop in
      that territory; for any 2-star card, place two troops in that territory.
      One troop equals one infantry.
    </li>
    <li>Take back all of the territory cards and shuffle them</li>
  </ol>
  )
};


export default TwoPlayerRules;
