import React from "react";
import PlayRules from "./PlayRules";
import BattleRules from "./BattleRules";
import VirtualDiceWrapper from "./VirtualDiceWrapper"


const LeftSide = () => {
  return (
    <>
      <PlayRules />
      <BattleRules />
      <VirtualDiceWrapper />
    </>
  );
};

export default LeftSide;
