let choices = document.querySelectorAll(".img");
let userScore = document.querySelector(".user-score");
let compScore = document.querySelector(".comp-score");
let msgBox = document.querySelector(".msg");


console.log(userScore, compScore);

console.log(choices);
let userPoint = 0;
let compPoint = 0;

let getCompChoice = () => {
  let gameOption = ["stone", "paper", "scissors"];
  let idx = Math.floor(Math.random() * 3);
  console.log(idx);
  return gameOption[idx];
};

let updatePoint = (point) => {
  console.log(point);
  if (point) {
    userPoint++;
  } else {
    compPoint++;
  }
};


let msgUpdate = (msg) => {
    if(msg){
        msgBox.innerHTML = "you are Win"
    }else{
        msgBox.innerHTML = "Computer are Win"
    }


} 



let checkWinner = (userinput) => {
  let userChoice = userinput;
  let compChoice = getCompChoice();
  console.log(userChoice, compChoice);
  if (userChoice == compChoice) {
    console.log(" its a draw");
  } else {
    let userwin = true;
    if (userChoice == "paper") {
      // comp stone or scissors
      userwin = compChoice === stone ? true : false;
    } else if (userChoice === "stone") {
      // comp paper Scissors
      userwin = compChoice === "paper" ? false : true;
    } else {
      // comp stone or paper
      console.log("this is here");
      userwin = compChoice === "stone" ? false : true;
    }
    msgUpdate(userwin)
    console.log(userwin ? "you are win" : "comp are Win");
    updatePoint(userwin);
    console.log(userPoint, compPoint);
    userScore.innerHTML = userPoint;
    compScore.innerHTML = compPoint;
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log(choice.attributes.id.value);

    let userinput = choice.attributes.id.value;
    checkWinner(userinput);
  });
});
