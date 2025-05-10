import React from "react";
import Die from "./Die";

export default function App() {
  // function generateAllNewDice() {
  //   const newDice = [];
  //   for (let i = 0; i < 10; i++) {
  //     let random = Math.ceil(Math.random() * 6);
  //     newDice.push(random);
  //   }
  //   return newDice;
  // }

  function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({value: Math.ceil(Math.random() * 6),
                         isHeld : false})
                )

    } 

  const [dice, setDice] = React.useState(generateAllNewDice());

  console.log(dice);
  let diceElements = dice.map((die, index) => <Die value={die} key={index} />);

  function rollDice(){
    setDice(generateAllNewDice)
  }
  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-btn" onClick={rollDice}>Roll</button>
    </main>

  );
}
