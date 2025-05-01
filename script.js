let choices = document.querySelectorAll(".choice");
let userscore = document.querySelector("#yourscore");
let compscore = document.querySelector("#compscore");
let massage = document.querySelector("#massage");
let compscorecount = 0;
let usercountscore = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userchoicename = choice.getAttribute("id");
    userchoice(userchoicename);
  });
});

function userchoice(userchoicename) {
  let compwin = false;
  var compchoicename = compchoice();
  if (userchoicename == compchoicename) {
    gamedraw();
  } else {
    if (userchoicename == "paper") {
      // stone scissors
      compwin = compchoicename == "stone" ? false : true;
    } else if (userchoicename == "scissors") {
      compwin = compchoicename == "stone" ? true : false;
    } else if (userchoicename == "stone") {
      compwin = compchoicename == "paper" ? true : false;
    }
    console.log(compwin);

    winfunction(compwin, userchoicename, compchoicename);
  }
}
function winfunction(compwin, userchoicename, compchoicename) {
  if (compwin) {
    compscorecount++;
    compscore.textContent = compscorecount;
    massage.style.backgroundColor = "red";
    massage.textContent = `you loose your ${userchoicename} is defeted by computer's ${compchoicename}`;
  } else {
    usercountscore++;
    userscore.textContent = usercountscore;
    massage.style.backgroundColor = "green";
    massage.textContent = `you win your ${userchoicename}  beated computer's ${compchoicename}`;
  }
}
function compchoice() {
  let arr = ["stone", "paper", "scissors"];
  let compchoice = arr[Math.floor(Math.random() * 3)];
  return compchoice;
}
function gamedraw() {
  massage.style.backgroundColor = "rgb(40, 20, 20)";
  massage.textContent = `This match is draw`;
}
