const character = document.getElementById("character"); // går inn i document/html filen for å hente opp ID-en som heter character
const block = document.getElementById("block"); // henter ID-en block fra html-filen

const game = document.getElementById("game"); //henter game fra HTML
game.addEventListener("mousedown", jump); // Legger til en metode for å hoppe

function jump() {
  if (!character.classList.contains("animation")) {
    character.classList.add("animation");

    setTimeout(function () {
      character.classList.remove("animation");
    }, 500);
  }
}

let checkDead = setInterval(function () {
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue(top),
    10
  );
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue(left),
    10
  );
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("u lose");
    clearInterval(checkDead); // clearInterval to stop the loop
    checkDead = null;
  }
}, 10);
