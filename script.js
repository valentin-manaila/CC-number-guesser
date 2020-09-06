let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// 1. Generate random target number:
function generateTarget() {
  randomTarget = Math.floor(Math.random() * 10);
  return randomTarget;
}
// console.log(generateTarget());

//2. Compare the human & computer nums against random target num and returning true if human wins
//________________________________
//Option 1 starts below (works)
// function compareGuesses(humanGuess, computerGuess, randomTarget) {
//   const diffHuman = Math.abs(humanGuess - randomTarget);
//   const diffComp = Math.abs(computerGuess - randomTarget);
//   if (diffHuman <= diffComp) {
//     return true;
//   } else return false;
//}
//Option 1 END
//________________________________
//Option 2 start (also works)
//This is a helper function - we input 2 numbers and get absolute difference.
function getAbsoluteDistance(num0, num1) {
  return Math.abs(num0 - num1);
}
//Use the above helper function to get difference for Human/Target and Computer/Target, then compare differences and declare the winner.
function compareGuesses (humanGuess, computerGuess, randomTarget) {
  const diffHuman = getAbsoluteDistance(randomTarget, humanGuess);
  const diffComp = getAbsoluteDistance(randomTarget, computerGuess);
  if (diffHuman <= diffComp) {
    return true;
  } else return false;
}
// console.log(compareGuesses(7, 5, 3));
//Option 2 END

// 3.Update the Score counter:
function updateScore(winner) {
  if (winner === 'human') {
    humanScore = humanScore + 1;
  } else if (winner === 'computer') {
    return computerScore = computerScore +1;
  }
}
// 4. Advance the Round counter:
function advanceRound() {
  currentRoundNumber += 1;
}
