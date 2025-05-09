import React from "react";
import Die from "./Die";

export default function App() {
  //     function generateAllNewDice(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
  function generateAllNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
     let random = Math.floor(Math.random() * 6);
      newDice.push(random);
    }
    return newDice
  }
  console.log(generateAllNewDice());

  return (
    <main>
      <div className="dice-container">
        <Die value={1} />
       
      </div>
    </main>
  );
}
