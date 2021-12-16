//Top of the mornin'

function gameStart() {
  let c = document.getElementById("Game");
  let ctx = c.getContext("2d");
  ctx.moveTo(0, 0);
  ctx.lineTo(250, 250);
  ctx.stroke();
  let c2 = document.getElementById("Game");
  let ctx2 = c2.getContext("2d");
  ctx2.moveTo(500, 0);
  ctx2.lineTo(250, 250);
  ctx2.stroke();
  alert("Game Started!");
  createPlayer();
}

function createPlayer() {
  addEventListener("click", function test() {
      player = new component(30, 30, "blue", 10, 120);
  }
)}

let button = document.createElement("Button")
button.innerHTML = "Start Game";

let body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function() {
  gameStart();
});
