  
  
   let playerScore = 0;
   let computerScore = 0;
   const userscore_span = document.getElementById("user-score");
   const computerscore_span = document.getElementById("computer-score");
   const scoreBoard_div = document.querySelector(".score-board");
   const result_p = document.querySelector(".result>p");
   const rock_div = document.getElementById("r");
   const paper_div = document.getElementById("p");
   const scissors_div = document.getElementById("s");
   
   
   function computerPlay(){
     let moves = ["r","p","s"];
     return (moves[Math.floor(Math.random()*moves.length)])
     
   }

   function convertToWord(letter) {
     if(letter==="r"){
       return "Rock";
     }
     else if(letter==="p") {
       return "Paper";
     }
     else {
      return "Scissors";
     }
     
       
   }
   
  
   function win(playerChoice, computerChoice) {
     playerScore++;
     userscore_span.innerHTML = playerScore;
     computerscore_span.innerHTML = computerScore;
     result_p.innerHTML = `${convertToWord(playerChoice)}  beats  ${convertToWord(computerChoice)} . You win!`;
   }

   function lose(playerChoice, computerChoice) {
     computerScore++;
     userscore_span.innerHTML = playerScore;
     computerscore_span.innerHTML = computerScore;
     result_p.innerHTML = `${convertToWord(playerChoice)}  loses to  ${convertToWord(computerChoice)} . You Lost!`;
   }

   function tie(playerChoice, computerChoice) {
     
     result_p.innerHTML = `${convertToWord(playerChoice)}  equals  ${convertToWord(computerChoice)} . Its a Tie!`;
   }



   function playRound(playerChoice) {
     const computerChoice = computerPlay();
     switch(playerChoice + computerChoice) {
       case "rs":
       case "pr":
       case "sp":
        win(playerChoice, computerChoice)
         break;
       case "rp":
       case "ps":
       case "sr":
        lose(playerChoice, computerChoice);
         break;
       case "rr":
       case "pp":
       case "ss": 
        tie(playerChoice, computerChoice);
         break;

     }
   }









   function main(){
     rock_div.addEventListener('click', function() {
      playRound("r"); 
     })

     paper_div.addEventListener('click', function() {
      playRound("p");
    })

    scissors_div.addEventListener('click', function() {
      playRound("s");
    })

    }
  
    main();

    

   
 


  
