// Initialize scores from localStorage or set defaults
let scores = JSON.parse(localStorage.getItem('scores')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

// Function to generate a random choice (1: Rock, 2: Paper, 3: Scissors)
function machine() {
  return Math.floor(Math.random() * 3) + 1;
}

// Function to clear all scores and update localStorage
function clearAll() {
  scores.wins = 0;
  scores.losses = 0;
  scores.ties = 0;

  // Update localStorage
  localStorage.setItem('scores', JSON.stringify(scores));

  alert(`All Scores Cleared!!! \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
}

// Main game logic
function game(choice) {
  const random = machine();

  if (choice == 1) {
    if (choice === random) {
      scores.ties += 1;
      alert(`Draw, Computer Choose : ✊ \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    } else if (random === 3) {
      scores.wins += 1;
      alert(`You Won!!! Computer Choose : ✌️ \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    } else {
      scores.losses += 1;
      alert(`You Lost!!! Computer Choose : 🖐 \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    }
  }

  if (choice == 2) {
    if (choice === random) {
      scores.ties += 1;
      alert(`Draw, Computer Choose : 🖐 \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    } else if (random === 1) {
      scores.wins += 1;
      alert(`You Won!!! Computer Choose : ✊ \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    } else {
      scores.losses += 1;
      alert(`You Lost!!! Computer Choose : ✌️ \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    }
  }

  if (choice == 3) {
    if (choice === random) {
      scores.ties += 1;
      alert(`Draw, Computer Choose : ✌️ \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    } else if (random === 2) {
      scores.wins += 1;
      alert(`You Won!!! Computer Choose : 🖐 \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    } else {
      scores.losses += 1;
      alert(`You Lost!!! Computer Choose : ✊ \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    }
  }

  // Update localStorage
  localStorage.setItem('scores', JSON.stringify(scores));
}
