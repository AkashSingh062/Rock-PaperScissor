function display(){
  document.querySelector('.display').innerText = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
}

// Function to generate random choice for the machine
function machine() {
  return Math.floor(Math.random() * 3) + 1; // Returns 1, 2, or 3
}

// Initialize scores from localStorage or use default values
let scores = JSON.parse(localStorage.getItem('scores')) || { wins: 0, losses: 0, ties: 0 };

// Save scores to localStorage
function saveScores() {
  localStorage.setItem('scores', JSON.stringify(scores));
}

// Clear all scores and reset localStorage
function clearAll() {
  scores = { wins: 0, losses: 0, ties: 0 };
  document.querySelector('.result').innerText = ``;
  document.querySelector('.computer').innerText = ``;
  localStorage.removeItem('scores');
}


// Main game logic
function play(choice) {
  const random = machine();
  const outcomes = {
    1: "✊", // Rock
    2: "🖐", // Paper
    3: "✌️", // Scissors
  };

  if (choice === random) {
    scores.ties += 1;
    document.querySelector('.result').innerText = `Draw`;
  } else if (
    (choice === 1 && random === 3) || // Rock beats Scissors
    (choice === 2 && random === 1) || // Paper beats Rock
    (choice === 3 && random === 2)    // Scissors beats Paper
  ) {
    scores.wins += 1;
    document.querySelector('.result').innerText = `You Won!!!`;
  } else {
    scores.losses += 1;
    document.querySelector('.result').innerText = `You Lost!!!`;
  }
  document.querySelector('.computer').innerText = `Computer Chose: ${outcomes[random]}`;
  saveScores(); // Update localStorage with the new scores
}
