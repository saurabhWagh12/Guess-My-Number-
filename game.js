
var secretNumber = Math.floor(Math.random()*20+1);

let score = 20;
var highScore = 0;

document.querySelector(".check").addEventListener("click",function(){
    const guess = document.querySelector(".guess").value;

     //When no number is Entered by User
    if(!guess){
        document.querySelector(".message").textContent = "⛔ No Number !!!";
    }//When player wins the game
    else if(guess == secretNumber){
        document.querySelector(".message").textContent = "🎉 Congratulations You have guessed it right !!!";

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        document.querySelector(".number").textContent = secretNumber;

        if(highScore<score){
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
        }
      }else if(score>1){
              score--;
              document.querySelector(".score").textContent = score;
            if(guess>secretNumber){
              document.querySelector(".message").textContent = "Too High !";
            }else if(guess<secretNumber){
              document.querySelector(".message").textContent = "Too Low !";
            }else{
              document.querySelector(".message").textContent = "GAME OVER ❌😵❌";
              }
          }
      });

      /* ***** Dry principle exploited ***** */
//     }else if(guess>secretNumber){
//         if(score>1){
//         document.querySelector(".message").textContent = "Too High !";
//         score--;
//         document.querySelector(".score").textContent = score;
//       }else{
//         document.querySelector(".message").textContent = "GAME OVER ❌😵❌";
//         }
//     }else if(guess<secretNumber){
//         if(score>1){
//             document.querySelector(".message").textContent = "Too Low !";
//             score--;
//             document.querySelector(".score").textContent = score;
//             }else{
//             document.querySelector(".message").textContent = "GAME OVER ❌😵❌";
//             }
//     }
// });

document.querySelector(".again").addEventListener("click",function(){
    score = 20;
    secretNumber = Math.floor(Math.random()*20+1);
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value="";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";




});
