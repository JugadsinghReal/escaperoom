const winnerroom = document.querySelector(".goToWin")
winnerroom.addEventListener("click", function(){
   let finalanwser = prompt("is walvis een vis of een zoogdier?")
   if (finalanwser == "zoogdier"){
    window.location.href = ("/WinorLose/win-page.html")
   }
   else{
    alert("incorrect...")
   }
})