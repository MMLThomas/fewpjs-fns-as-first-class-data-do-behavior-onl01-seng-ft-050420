/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */

  function greet(time) {
    if (parseInt(time) < 12){
      return "Good Morning"
    }
    else if (parseInt(time) > 12 && parseInt(time) < 17) {
      return "Good Afternoon"
    }
<<<<<<< HEAD
    else if (parseInt(time) < 24){
=======
    else {
>>>>>>> 9210f28163b8fb81879fa0b579ed4a68cf17d63a
      return "Good Evening"
    }
      
  }
/* Write your implementation of displayMessage() */

 function displayMessage(arg){
<<<<<<< HEAD
    document.getElementById("greeting").innerText = arg;
=======
   document.getElementById('greeting') = arg;
>>>>>>> 9210f28163b8fb81879fa0b579ed4a68cf17d63a
 }
