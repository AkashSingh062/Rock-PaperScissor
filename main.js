function machine(){
  let val = Math.floor(Math.random()*3)+1;
  return val;
}

let scores = {
  wins : 0,
  losses : 0,
  ties : 0
};
function clearAll(){
  scores.wins = 0;
  scores.losses = 0;
  scores.ties = 0;
  alert(`All Scores Cleared!!! \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
}

function game(choice){
  const random = machine();
  if(choice == 1){
    if(choice === random){
      scores.ties += 1;
      alert(`Draw, Computer Choose : ✊ \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    }else if(random === 3){
      scores.wins += 1;
      alert(`You Won!!! Computer Choose : ✌️ \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    }
    else{
      scores.losses += 1;
      alert(`You Lost!!! Computer Choose : 🖐 \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    }
  }
  if(choice == 2){
    if(choice === random){
      scores.ties += 1;
      alert(`Draw, Computer Choose : 🖐 \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    }else if(random === 1){
      scores.wins += 1;
      alert(`You Won!!! Computer Choose : ✊ \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    }
    else{
      scores.losses += 1;
      alert(`You Lost!!! Computer Choose : ✌️ \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    }
  }
  if(choice == 3){
    if(choice === random){
      scores.ties += 1;
      alert(`Draw, Computer Choose : ✌️ \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    }else if(random === 2){
      scores.wins += 1;
      alert(`You Won!!! Computer Choose : 🖐 \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    }
    else{
      scores.losses += 1;
      alert(`You Lost!!! Computer Choose : ✊ \nwins: ${scores.wins}  lost: ${scores.losses} tie: ${scores.ties}`);
    }
  }
}