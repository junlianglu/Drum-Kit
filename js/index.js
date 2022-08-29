document.querySelectorAll(".drum").forEach(drum => drum.addEventListener("click", function() {
  makeSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
}));

document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  var audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("sounds/crash.mp3");
      break;
    default:
  }
  if (audio != null) audio.play();
}

function buttonAnimation(key) {
  var button = document.querySelector("." + key);
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100)
}
