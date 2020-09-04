import React from "react";
import AttackResults from "./AttackResults";

const VirtualDiceRollResults = (props) => {
  const diceRoll = (rollTimes) => {
    const rollResults = [];
    if (rollTimes !== 0) {
      for (let i = 0; i < rollTimes; i++) {
        const dr = Math.floor(Math.random() * 6) + 1;
        rollResults.push(dr);
      }
      rollResults.sort();
      rollResults.reverse();
      return rollResults;
    }
  };

  class DiceObject {
    constructor(value, img) {
      this.value = value;
      this.img = img;
      this.class = "loser";
    }
  }

  const handleDiceFace = (value, v) => {
    let img = "";
    switch (value) {
      case 1:
        img = `${v}1`;
        break;
      case 2:
        img = `${v}2`;
        break;
      case 3:
        img = `${v}3`;
        break;
      case 4:
        img = `${v}4`;
        break;
      case 5:
        img = `${v}5`;
        break;
      case 6:
        img = `${v}6`;
        break;
      default:
        img = `${v}1`;
    }
    return img;
  };

  const createObject = (player, v) => {
    const array = [];
    for (let i = 0; i < player.length; i++) {
      const object = new DiceObject();
      object.value = player[i];
      object.img = handleDiceFace(player[i], v);
      array.push(object);
    }
    return array;
  };

  const handleWinner = (a, d) => {
    if (a[0].value > 0 && d[0].value > 0) {
      if (a[0].value > d[0].value) {
        console.log("winner");
        a[0].class = "winner";
      } else {
        console.log("loser");
        d[0].class = "winner";
      }
      if(a[1] && d[1] > 0){
          if (a[1].value > d[1].value) {
            console.log("winner");
            a[1].class = "winner";
          } else {
            {
              console.log("loser");
              d[1].class = "winner";
            }
          }
      }
    }
  };


  const handleRound = (dice) => {
    const rollTimes = dice;
    const results = diceRoll(rollTimes);
    return results;
  };

  const handleAttacker = () => {
    const attacker = handleRound(props.attackDice);
    const attackObject = createObject(attacker, "a");
    return attackObject;
  };

  const handleDefender = () => {
    const defender = handleRound(props.defenseDice);
    const defenderObject = createObject(defender, "d");
    return defenderObject;
  };



const handleBattle = () => {
    if (props.attackDice > 0 && props.defenseDice > 0) {
        const battleArray = [];
        const attackArray = handleAttacker();
        const defenseArray = handleDefender();
        handleWinner(attackArray, defenseArray);
        battleArray.push(attackArray);
        battleArray.push(defenseArray);
        return battleArray
    }
  };
//   handleBattle();

  //   console.log(defenseArray);
  //   console.log(attackArray);

  return (
    <>
      <AttackResults 
      handleBattle={handleBattle}/>
    </>
  );
};

export default VirtualDiceRollResults;
