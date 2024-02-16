let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice1")
let msg = document.getElementById("msgboard")
let user_score = document.getElementById("userscore")
let comp_score = document.getElementById("compscore")

const compgame = ()=>{
    let options =["rock","paper","scissor"]
    let idx = Math.floor(Math.random()*3);
    return options[idx]
}

const showwinner = (winner,user,compchoice)=>{
   if(winner){
    userscore++;
    msg.innerText = `You win. your ${user} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
    user_score.innerText = userscore;
   }
   else{
    compscore++;
    msg.innerText = `You lost. ${compchoice} beats your ${user}`;
    msg.style.backgroundColor = "red";
    comp_score.innerText = compscore;
   }
}

const playgame = (user)=>{
    let compchoice = compgame()
    if(user == compchoice){
       msg.innerText = "Draw Game."
       msg.style.backgroundColor = "orange"
    }
    else {
        let userwin = true;
        if(user === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }
        else if (user === "paper"){
            userwin = compchoice === "scissor" ? false : true;
        }
        else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,user,compchoice)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let id = choice.getAttribute("id")
        playgame(id)
    })
})
